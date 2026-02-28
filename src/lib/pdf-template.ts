import type { KlageFormData } from "@/types/klage";
import { KuendigungArt } from "@/types/klage";
import { getArbeitsgerichtById } from "./gerichts-daten";

function formatDateDE(dateStr: string): string {
  if (!dateStr) return "___________";
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getKuendigungArtText(art: KuendigungArt): string {
  switch (art) {
    case KuendigungArt.ORDENTLICH:
      return "ordentliche";
    case KuendigungArt.AUSSERORDENTLICH:
      return "ausserordentliche (fristlose)";
    case KuendigungArt.AENDERUNGSKUENDIGUNG:
      return "Aenderungskuendigung";
  }
}

function getBeklagterBezeichnung(data: KlageFormData): string {
  const { firma, rechtsform, vertreter } = data.beklagter;
  let bezeichnung = firma;
  if (rechtsform) {
    bezeichnung += `, ${rechtsform}`;
  }
  if (vertreter) {
    bezeichnung += `, vertreten durch ${vertreter}`;
  }
  return bezeichnung;
}

function getBeendigungsklausel(data: KlageFormData): string {
  if (data.kuendigung.kuendigungArt === KuendigungArt.AUSSERORDENTLICH) {
    return "nicht aufgeloest hat";
  }
  if (data.kuendigung.beendigungDatum) {
    return `nicht zum ${formatDateDE(data.kuendigung.beendigungDatum)} aufloesen wird`;
  }
  return "nicht aufloesen wird";
}

export interface KlageschriftContent {
  gericht: {
    name: string;
    strasse: string;
    plz: string;
    ort: string;
  };
  klaeger: {
    name: string;
    anschrift: string;
  };
  beklagter: {
    bezeichnung: string;
    anschrift: string;
  };
  klageantrag1: string;
  klageantrag2: string;
  begruendung: string[];
  streitwert: string;
}

export function generateKlageschriftContent(
  data: KlageFormData
): KlageschriftContent {
  const gericht = getArbeitsgerichtById(data.gericht.arbeitsgerichtId);

  if (!gericht) {
    throw new Error("Arbeitsgericht nicht gefunden");
  }

  const kuendigungArtText = getKuendigungArtText(data.kuendigung.kuendigungArt);
  const beklagterBezeichnung = getBeklagterBezeichnung(data);
  const beendigungsklausel = getBeendigungsklausel(data);

  const klageantrag1 = `Es wird festgestellt, dass das Arbeitsverhaeltnis zwischen dem Klaeger und der Beklagten durch die ${kuendigungArtText} Kuendigung vom ${formatDateDE(data.kuendigung.kuendigungDatum)}, zugegangen am ${formatDateDE(data.kuendigung.zugangDatum)}, ${beendigungsklausel}.`;

  const klageantrag2 =
    "Es wird festgestellt, dass das Arbeitsverhaeltnis auch nicht durch andere Beendigungstatbestaende endet, sondern ueber den Kuendigungstermin hinaus ungekuendigt fortbesteht.";

  const streitwert = (
    Number(data.arbeitsverhaeltnis.bruttoMonatsgehalt) * 3
  ).toLocaleString("de-DE", { minimumFractionDigits: 2 });

  const begruendung = [
    `Der Klaeger ist seit dem ${formatDateDE(data.arbeitsverhaeltnis.beschaeftigungBeginn)} bei der Beklagten als ${data.arbeitsverhaeltnis.taetigkeit} beschaeftigt. Das monatliche Bruttogehalt betraegt ${Number(data.arbeitsverhaeltnis.bruttoMonatsgehalt).toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR.`,
    `Mit Schreiben vom ${formatDateDE(data.kuendigung.kuendigungDatum)}, zugegangen am ${formatDateDE(data.kuendigung.zugangDatum)}, hat die Beklagte das Arbeitsverhaeltnis ${kuendigungArtText} gekuendigt.`,
    "Die Kuendigung ist sozial ungerechtfertigt und damit rechtsunwirksam. Die Kuendigung ist weder durch Gruende in der Person oder in dem Verhalten des Klaegers noch durch dringende betriebliche Erfordernisse bedingt.",
    "Der Klaeger erhebt daher innerhalb der Frist des § 4 KSchG Kuendigungsschutzklage.",
  ];

  return {
    gericht: {
      name: gericht.name,
      strasse: gericht.strasse,
      plz: gericht.plz,
      ort: gericht.ort,
    },
    klaeger: {
      name: data.klaeger.name,
      anschrift: `${data.klaeger.strasse}, ${data.klaeger.plz} ${data.klaeger.ort}`,
    },
    beklagter: {
      bezeichnung: beklagterBezeichnung,
      anschrift: `${data.beklagter.strasse}, ${data.beklagter.plz} ${data.beklagter.ort}`,
    },
    klageantrag1,
    klageantrag2,
    begruendung,
    streitwert: `${streitwert} EUR (3 Bruttomonatsgehaelter)`,
  };
}
