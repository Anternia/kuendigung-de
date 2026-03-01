export enum KuendigungArt {
  ORDENTLICH = "ORDENTLICH",
  AUSSERORDENTLICH = "AUSSERORDENTLICH",
  AENDERUNGSKUENDIGUNG = "AENDERUNGSKUENDIGUNG",
}

export const kuendigungArtLabels: Record<KuendigungArt, string> = {
  [KuendigungArt.ORDENTLICH]: "Ordentliche Kündigung",
  [KuendigungArt.AUSSERORDENTLICH]: "Außerordentliche (fristlose) Kündigung",
  [KuendigungArt.AENDERUNGSKUENDIGUNG]: "Änderungskündigung",
};

export interface KlageFormData {
  klaeger: {
    name: string;
    strasse: string;
    plz: string;
    ort: string;
  };
  beklagter: {
    firma: string;
    strasse: string;
    plz: string;
    ort: string;
    rechtsform: string;
    vertreter: string;
  };
  arbeitsverhaeltnis: {
    beschaeftigungBeginn: string;
    taetigkeit: string;
    bruttoMonatsgehalt: number;
    arbeitsort: string;
    arbeitsortPlz: string;
  };
  kuendigung: {
    kuendigungDatum: string;
    zugangDatum: string;
    kuendigungArt: KuendigungArt;
    beendigungDatum: string;
  };
  gericht: {
    arbeitsgerichtId: string;
  };
}

export interface Arbeitsgericht {
  id: string;
  name: string;
  strasse: string;
  plz: string;
  ort: string;
  fax: string;
  telefon: string;
  bundesland: string;
  zustaendigePlzBereiche: string[];
}
