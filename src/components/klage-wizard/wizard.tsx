"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight, FileDown, RotateCcw, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { klageFormSchema } from "@/lib/validierung";
import { useWizardPersistence } from "@/hooks/use-wizard-persistence";
import { clearDraft } from "@/lib/wizard-persistence";
import { KuendigungArt, type KlageFormData } from "@/types/klage";
import { Schritt1Klaeger } from "./schritt-1-klaeger";
import { Schritt2Beklagter } from "./schritt-2-beklagter";
import { Schritt3Arbeitsverhaeltnis } from "./schritt-3-arbeitsverhaeltnis";
import { Schritt4Kuendigung } from "./schritt-4-kuendigung";
import { Schritt5Gericht } from "./schritt-5-gericht";
import { Schritt6Zusammenfassung } from "./schritt-6-zusammenfassung";

const schritte = [
  { title: "Ihre Daten", fields: ["klaeger"] as const },
  { title: "Arbeitgeber", fields: ["beklagter"] as const },
  { title: "Arbeitsverhaeltnis", fields: ["arbeitsverhaeltnis"] as const },
  { title: "Kuendigung", fields: ["kuendigung"] as const },
  { title: "Gericht", fields: ["gericht"] as const },
  { title: "Zusammenfassung", fields: [] as const },
];

export function KlageWizard() {
  const router = useRouter();
  const [schritt, setSchritt] = useState(0);
  const [accepted, setAccepted] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<KlageFormData>({
    resolver: zodResolver(klageFormSchema) as any,
    defaultValues: {
      klaeger: { name: "", strasse: "", plz: "", ort: "" },
      beklagter: {
        firma: "",
        strasse: "",
        plz: "",
        ort: "",
        rechtsform: "",
        vertreter: "",
      },
      arbeitsverhaeltnis: {
        beschaeftigungBeginn: "",
        taetigkeit: "",
        bruttoMonatsgehalt: 0,
        arbeitsort: "",
        arbeitsortPlz: "",
      },
      kuendigung: {
        kuendigungDatum: "",
        zugangDatum: "",
        kuendigungArt: KuendigungArt.ORDENTLICH,
        beendigungDatum: "",
      },
      gericht: { arbeitsgerichtId: "" },
    },
    mode: "onTouched",
  });

  const { wasRestored, dismissRestoredBanner, clearAndReset } =
    useWizardPersistence({ form, schritt, setSchritt });

  const istLetzterSchritt = schritt === schritte.length - 1;
  const progress = ((schritt + 1) / schritte.length) * 100;

  async function naechsterSchritt() {
    const currentFields = schritte[schritt].fields;
    if (currentFields.length > 0) {
      const valid = await form.trigger(currentFields[0]);
      if (!valid) return;
    }
    if (!istLetzterSchritt) {
      setSchritt(schritt + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function vorherigerSchritt() {
    if (schritt > 0) {
      setSchritt(schritt - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function onSubmit() {
    if (!accepted) return;
    const data = form.getValues();
    clearDraft();
    // Daten in sessionStorage speichern fuer Ergebnisseite
    sessionStorage.setItem("klageFormData", JSON.stringify(data));
    router.push("/klage-erstellen/ergebnis");
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>
            Schritt {schritt + 1} von {schritte.length}
          </span>
          <span>{schritte[schritt].title}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Schritt-Indikatoren */}
      <div className="flex gap-1">
        {schritte.map((s, i) => (
          <button
            key={i}
            type="button"
            disabled={i > schritt}
            onClick={() => i <= schritt && setSchritt(i)}
            className={`flex-1 h-1 rounded-full transition-colors ${
              i <= schritt ? "bg-primary" : "bg-muted"
            }`}
            aria-label={`Schritt ${i + 1}: ${s.title}`}
          />
        ))}
      </div>

      {/* Wiederherstellungs-Banner */}
      {wasRestored && (
        <div className="rounded-md border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-blue-800 font-medium">
                Wir haben Ihre bisherigen Eingaben wiederhergestellt.
              </p>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={dismissRestoredBanner}
                  className="text-blue-700 border-blue-300 hover:bg-blue-100"
                >
                  OK
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={clearAndReset}
                  className="text-blue-600 hover:bg-blue-100"
                >
                  Neu beginnen
                </Button>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissRestoredBanner}
              className="text-blue-400 hover:text-blue-600"
              aria-label="Banner schliessen"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Formular */}
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={(e) => e.preventDefault()}>
            {schritt === 0 && <Schritt1Klaeger form={form} />}
            {schritt === 1 && <Schritt2Beklagter form={form} />}
            {schritt === 2 && <Schritt3Arbeitsverhaeltnis form={form} />}
            {schritt === 3 && <Schritt4Kuendigung form={form} />}
            {schritt === 4 && <Schritt5Gericht form={form} />}
            {schritt === 5 && (
              <Schritt6Zusammenfassung
                form={form}
                accepted={accepted}
                onAcceptedChange={setAccepted}
              />
            )}
          </form>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={vorherigerSchritt}
            disabled={schritt === 0}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Zurueck
          </Button>
          <Button
            variant="ghost"
            onClick={clearAndReset}
            className="text-muted-foreground"
          >
            <RotateCcw className="mr-1 h-4 w-4" />
            Neu beginnen
          </Button>
        </div>

        {istLetzterSchritt ? (
          <Button onClick={onSubmit} disabled={!accepted}>
            <FileDown className="mr-1 h-4 w-4" />
            Klageschrift erstellen
          </Button>
        ) : (
          <Button onClick={naechsterSchritt}>
            Weiter
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
