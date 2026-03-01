"use client";

import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { KlageFormData } from "@/types/klage";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

export function Schritt3Arbeitsverhaeltnis({ form }: Props) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Angaben zum Arbeitsverhaeltnis</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Diese Angaben benoetigen wir fuer die Klageschrift und zur Berechnung
          des Streitwerts.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="av-beginn">Beschaeftigt seit *</Label>
          <Input
            id="av-beginn"
            type="date"
            {...register("arbeitsverhaeltnis.beschaeftigungBeginn")}
          />
          {errors.arbeitsverhaeltnis?.beschaeftigungBeginn && (
            <p className="text-sm text-destructive mt-1">
              {errors.arbeitsverhaeltnis.beschaeftigungBeginn.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="av-taetigkeit">Taetigkeit / Position *</Label>
          <Input
            id="av-taetigkeit"
            placeholder="z.B. Softwareentwickler, Buchhalter, Verkaeuferin"
            {...register("arbeitsverhaeltnis.taetigkeit")}
          />
          {errors.arbeitsverhaeltnis?.taetigkeit && (
            <p className="text-sm text-destructive mt-1">
              {errors.arbeitsverhaeltnis.taetigkeit.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="av-gehalt">Bruttomonatsgehalt in Euro *</Label>
          <Input
            id="av-gehalt"
            type="number"
            min="0"
            step="0.01"
            placeholder="3000"
            {...register("arbeitsverhaeltnis.bruttoMonatsgehalt")}
          />
          {errors.arbeitsverhaeltnis?.bruttoMonatsgehalt && (
            <p className="text-sm text-destructive mt-1">
              {errors.arbeitsverhaeltnis.bruttoMonatsgehalt.message}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Das Bruttogehalt finden Sie auf Ihrer letzten Lohnabrechnung. Es
            wird zur Berechnung des Streitwerts benoetigt (3 Monatsgehaelter).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="av-arbeitsort">Arbeitsort *</Label>
            <Input
              id="av-arbeitsort"
              placeholder="z.B. Berlin, Hamburg, Muenchen"
              {...register("arbeitsverhaeltnis.arbeitsort")}
            />
            {errors.arbeitsverhaeltnis?.arbeitsort && (
              <p className="text-sm text-destructive mt-1">
                {errors.arbeitsverhaeltnis.arbeitsort.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="av-arbeitsort-plz">PLZ des Arbeitsorts *</Label>
            <Input
              id="av-arbeitsort-plz"
              placeholder="z.B. 10785"
              maxLength={5}
              {...register("arbeitsverhaeltnis.arbeitsortPlz")}
            />
            {errors.arbeitsverhaeltnis?.arbeitsortPlz && (
              <p className="text-sm text-destructive mt-1">
                {errors.arbeitsverhaeltnis.arbeitsortPlz.message}
              </p>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground -mt-2">
          Arbeitsort und PLZ werden zur Ermittlung des zustaendigen
          Arbeitsgerichts benoetigt.
        </p>
      </div>
    </div>
  );
}
