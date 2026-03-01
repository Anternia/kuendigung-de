import { z } from "zod";
import { KuendigungArt } from "@/types/klage";

export const klaegerSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  strasse: z.string().min(2, "Bitte geben Sie Ihre Straße und Hausnummer ein"),
  plz: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein (5 Ziffern)"),
  ort: z.string().min(2, "Bitte geben Sie Ihren Wohnort ein"),
});

export const beklagterSchema = z.object({
  firma: z.string().min(2, "Bitte geben Sie den Namen des Arbeitgebers ein"),
  strasse: z.string().min(2, "Bitte geben Sie die Straße und Hausnummer ein"),
  plz: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein (5 Ziffern)"),
  ort: z.string().min(2, "Bitte geben Sie den Ort ein"),
  rechtsform: z.string(),
  vertreter: z.string(),
});

export const arbeitsverhaeltnisSchema = z.object({
  beschaeftigungBeginn: z.string().min(1, "Bitte geben Sie das Datum des Beschäftigungsbeginns ein"),
  taetigkeit: z.string().min(2, "Bitte geben Sie Ihre Tätigkeit ein"),
  bruttoMonatsgehalt: z.coerce.number().positive("Bitte geben Sie Ihr Bruttomonatsgehalt ein"),
  arbeitsort: z.string().min(2, "Bitte geben Sie Ihren Arbeitsort ein"),
  arbeitsortPlz: z.string().regex(/^\d{5}$/, "Bitte geben Sie eine gültige PLZ ein (5 Ziffern)"),
});

export const kuendigungSchema = z.object({
  kuendigungDatum: z.string().min(1, "Bitte geben Sie das Datum des Kündigungsschreibens ein"),
  zugangDatum: z.string().min(1, "Bitte geben Sie das Datum des Zugangs der Kündigung ein"),
  kuendigungArt: z.nativeEnum(KuendigungArt, {
    error: "Bitte wählen Sie die Art der Kündigung",
  }),
  beendigungDatum: z.string(),
});

export const gerichtSchema = z.object({
  arbeitsgerichtId: z.string().min(1, "Bitte wählen Sie ein Arbeitsgericht aus"),
});

export const klageFormSchema = z.object({
  klaeger: klaegerSchema,
  beklagter: beklagterSchema,
  arbeitsverhaeltnis: arbeitsverhaeltnisSchema,
  kuendigung: kuendigungSchema,
  gericht: gerichtSchema,
});
