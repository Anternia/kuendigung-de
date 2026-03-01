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

function getKuendigungArtAdjektiv(art: KuendigungArt): string {
  switch (art) {
    case KuendigungArt.ORDENTLICH:
      return "ordentliche";
    case KuendigungArt.AUSSERORDENTLICH:
      return "außerordentliche (fristlose)";
    case KuendigungArt.AENDERUNGSKUENDIGUNG:
      return "Änderungskündigung";
  }
}

function getKuendigungArtAdverb(art: KuendigungArt): string {
  switch (art) {
    case KuendigungArt.ORDENTLICH:
      return "ordentlich";
    case KuendigungArt.AUSSERORDENTLICH:
      return "außerordentlich (fristlos)";
    case KuendigungArt.AENDERUNGSKUENDIGUNG:
      return "im Wege der Änderungskündigung";
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
    return "nicht aufgelöst hat";
  }
  if (data.kuendigung.beendigungDatum) {
    return `nicht zum ${formatDateDE(data.kuendigung.beendigungDatum)} auflösen wird`;
  }
  return "nicht auflösen wird";
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

  const kuendigungArtAdjektiv = getKuendigungArtAdjektiv(data.kuendigung.kuendigungArt);
  const kuendigungArtAdverb = getKuendigungArtAdverb(data.kuendigung.kuendigungArt);
  const beklagterBezeichnung = getBeklagterBezeichnung(data);
  const beendigungsklausel = getBeendigungsklausel(data);

  const klageantrag1 = `Es wird festgestellt, dass das Arbeitsverhältnis zwischen dem Kläger und der Beklagten durch die ${kuendigungArtAdjektiv} Kündigung vom ${formatDateDE(data.kuendigung.kuendigungDatum)}, zugegangen am ${formatDateDE(data.kuendigung.zugangDatum)}, ${beendigungsklausel}.`;

  const klageantrag2 =
    "Es wird festgestellt, dass das Arbeitsverhältnis auch nicht durch andere Beendigungstatbestände endet, sondern über den Kündigungstermin hinaus ungekündigt fortbesteht.";

  const streitwert = (
    Number(data.arbeitsverhaeltnis.bruttoMonatsgehalt) * 3
  ).toLocaleString("de-DE", { minimumFractionDigits: 2 });

  const begruendung = [
    `Der Kläger ist seit dem ${formatDateDE(data.arbeitsverhaeltnis.beschaeftigungBeginn)} bei der Beklagten als ${data.arbeitsverhaeltnis.taetigkeit} beschäftigt. Das monatliche Bruttogehalt beträgt ${Number(data.arbeitsverhaeltnis.bruttoMonatsgehalt).toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR.`,
    `Mit Schreiben vom ${formatDateDE(data.kuendigung.kuendigungDatum)}, zugegangen am ${formatDateDE(data.kuendigung.zugangDatum)}, hat die Beklagte das Arbeitsverhältnis ${kuendigungArtAdverb} gekündigt.`,
    "Die Kündigung ist sozial ungerechtfertigt und damit rechtsunwirksam. Die Kündigung ist weder durch Gründe in der Person oder in dem Verhalten des Klägers noch durch dringende betriebliche Erfordernisse bedingt.",
    "Der Kläger erhebt daher innerhalb der Frist des § 4 KSchG Kündigungsschutzklage.",
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
    streitwert: `${streitwert} EUR (3 Bruttomonatsgehälter)`,
  };
}
