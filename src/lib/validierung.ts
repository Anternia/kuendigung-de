import { z } from "zod";
import { KuendigungArt } from "@/types/klage";

export const klaegerSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollstaendigen Namen ein"),
  strasse: z.string().min(2, "Bitte geben Sie Ihre Strasse und Hausnummer ein"),
  plz: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gueltige PLZ ein (5 Ziffern)"),
  ort: z.string().min(2, "Bitte geben Sie Ihren Wohnort ein"),
});

export const beklagterSchema = z.object({
  firma: z.string().min(2, "Bitte geben Sie den Namen des Arbeitgebers ein"),
  strasse: z.string().min(2, "Bitte geben Sie die Strasse und Hausnummer ein"),
  plz: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gueltige PLZ ein (5 Ziffern)"),
  ort: z.string().min(2, "Bitte geben Sie den Ort ein"),
  rechtsform: z.string(),
  vertreter: z.string(),
});

export const arbeitsverhaeltnisSchema = z.object({
  beschaeftigungBeginn: z.string().min(1, "Bitte geben Sie das Datum des Beschaeftigungsbeginns ein"),
  taetigkeit: z.string().min(2, "Bitte geben Sie Ihre Taetigkeit ein"),
  bruttoMonatsgehalt: z.coerce.number().positive("Bitte geben Sie Ihr Bruttomonatsgehalt ein"),
  arbeitsort: z.string().min(2, "Bitte geben Sie Ihren Arbeitsort ein"),
});

export const kuendigungSchema = z.object({
  kuendigungDatum: z.string().min(1, "Bitte geben Sie das Datum des Kuendigungsschreibens ein"),
  zugangDatum: z.string().min(1, "Bitte geben Sie das Datum des Zugangs der Kuendigung ein"),
  kuendigungArt: z.nativeEnum(KuendigungArt, {
    error: "Bitte waehlen Sie die Art der Kuendigung",
  }),
  beendigungDatum: z.string(),
});

export const gerichtSchema = z.object({
  arbeitsgerichtId: z.string().min(1, "Bitte waehlen Sie ein Arbeitsgericht aus"),
});

export const klageFormSchema = z.object({
  klaeger: klaegerSchema,
  beklagter: beklagterSchema,
  arbeitsverhaeltnis: arbeitsverhaeltnisSchema,
  kuendigung: kuendigungSchema,
  gericht: gerichtSchema,
});
