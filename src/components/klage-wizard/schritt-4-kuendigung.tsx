"use client";

import { UseFormReturn } from "react-hook-form";
import { AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { KlageFormData } from "@/types/klage";
import { KuendigungArt, kuendigungArtLabels } from "@/types/klage";
import { berechneFrist, verbleibendeTage, getDringlichkeit } from "@/lib/frist-berechnung";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

export function Schritt4Kuendigung({ form }: Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const kuendigungArt = watch("kuendigung.kuendigungArt");
  const zugangDatum = watch("kuendigung.zugangDatum");

  const fristInfo = zugangDatum
    ? (() => {
        const frist = berechneFrist(new Date(zugangDatum));
        const tage = verbleibendeTage(frist);
        const dringlichkeit = getDringlichkeit(tage);
        return { frist, tage, dringlichkeit };
      })()
    : null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Angaben zur Kündigung</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Diese Informationen finden Sie auf dem Kündigungsschreiben.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="k-datum">Datum des Kündigungsschreibens *</Label>
          <Input
            id="k-datum"
            type="date"
            {...register("kuendigung.kuendigungDatum")}
          />
          {errors.kuendigung?.kuendigungDatum && (
            <p className="text-sm text-destructive mt-1">
              {errors.kuendigung.kuendigungDatum.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="k-zugang">Datum des Zugangs der Kündigung *</Label>
          <Input
            id="k-zugang"
            type="date"
            {...register("kuendigung.zugangDatum")}
          />
          {errors.kuendigung?.zugangDatum && (
            <p className="text-sm text-destructive mt-1">
              {errors.kuendigung.zugangDatum.message}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Der Tag, an dem Sie die Kündigung erhalten haben (z.B. aus dem
            Briefkasten geholt, persönlich übergeben bekommen).
          </p>

          {fristInfo && (
            <div
              className={`mt-2 rounded-md border p-3 ${
                fristInfo.dringlichkeit === "rot" || fristInfo.dringlichkeit === "abgelaufen"
                  ? "bg-red-50 border-red-200"
                  : fristInfo.dringlichkeit === "gelb"
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center gap-2">
                {(fristInfo.dringlichkeit === "rot" || fristInfo.dringlichkeit === "abgelaufen") && (
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                )}
                <p className="text-sm font-medium">
                  {fristInfo.dringlichkeit === "abgelaufen"
                    ? "Die 3-Wochen-Frist ist bereits abgelaufen!"
                    : `Fristende: ${fristInfo.frist.toLocaleDateString("de-DE")} (noch ${fristInfo.tage} Tag${fristInfo.tage !== 1 ? "e" : ""})`}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <Label>Art der Kündigung *</Label>
          <RadioGroup
            value={kuendigungArt || ""}
            onValueChange={(value) =>
              setValue("kuendigung.kuendigungArt", value as KuendigungArt)
            }
            className="mt-2 space-y-2"
          >
            {Object.entries(kuendigungArtLabels).map(([value, label]) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} id={`k-art-${value}`} />
                <Label htmlFor={`k-art-${value}`} className="font-normal">
                  {label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.kuendigung?.kuendigungArt && (
            <p className="text-sm text-destructive mt-1">
              {errors.kuendigung.kuendigungArt.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="k-beendigung">
            Beendigungsdatum laut Kündigung
          </Label>
          <Input
            id="k-beendigung"
            type="date"
            {...register("kuendigung.beendigungDatum")}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Das Datum, zu dem das Arbeitsverhältnis laut Kündigung enden soll.
            Bei fristloser Kündigung ist dies das Zugangsdatum.
          </p>
        </div>
      </div>
    </div>
  );
}
