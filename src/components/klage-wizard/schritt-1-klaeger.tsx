"use client";

import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { KlageFormData } from "@/types/klage";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

export function Schritt1Klaeger({ form }: Props) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Ihre persoenlichen Daten</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Als Klaeger benoetigen wir Ihren Namen und Ihre Anschrift.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="klaeger-name">Vollstaendiger Name *</Label>
          <Input
            id="klaeger-name"
            placeholder="Max Mustermann"
            {...register("klaeger.name")}
          />
          {errors.klaeger?.name && (
            <p className="text-sm text-destructive mt-1">
              {errors.klaeger.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="klaeger-strasse">Strasse und Hausnummer *</Label>
          <Input
            id="klaeger-strasse"
            placeholder="Musterstrasse 1"
            {...register("klaeger.strasse")}
          />
          {errors.klaeger?.strasse && (
            <p className="text-sm text-destructive mt-1">
              {errors.klaeger.strasse.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="klaeger-plz">PLZ *</Label>
            <Input
              id="klaeger-plz"
              placeholder="12345"
              maxLength={5}
              {...register("klaeger.plz")}
            />
            {errors.klaeger?.plz && (
              <p className="text-sm text-destructive mt-1">
                {errors.klaeger.plz.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <Label htmlFor="klaeger-ort">Ort *</Label>
            <Input
              id="klaeger-ort"
              placeholder="Berlin"
              {...register("klaeger.ort")}
            />
            {errors.klaeger?.ort && (
              <p className="text-sm text-destructive mt-1">
                {errors.klaeger.ort.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
