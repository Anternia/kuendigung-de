"use client";

import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { KlageFormData } from "@/types/klage";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

const rechtsformen = [
  "Einzelunternehmen",
  "GmbH",
  "UG (haftungsbeschraenkt)",
  "AG",
  "GmbH & Co. KG",
  "KG",
  "OHG",
  "GbR",
  "e.V.",
  "Koerperschaft des oeffentlichen Rechts",
  "Sonstige",
];

export function Schritt2Beklagter({ form }: Props) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const rechtsform = watch("beklagter.rechtsform");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Angaben zum Arbeitgeber</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Ihr Arbeitgeber ist der Beklagte im Verfahren. Die Angaben finden Sie
          auf Ihrem Arbeitsvertrag oder der Kuendigung.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="beklagter-firma">
            Name / Firma des Arbeitgebers *
          </Label>
          <Input
            id="beklagter-firma"
            placeholder="Muster GmbH"
            {...register("beklagter.firma")}
          />
          {errors.beklagter?.firma && (
            <p className="text-sm text-destructive mt-1">
              {errors.beklagter.firma.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="beklagter-strasse">Strasse und Hausnummer *</Label>
          <Input
            id="beklagter-strasse"
            placeholder="Firmenstrasse 10"
            {...register("beklagter.strasse")}
          />
          {errors.beklagter?.strasse && (
            <p className="text-sm text-destructive mt-1">
              {errors.beklagter.strasse.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="beklagter-plz">PLZ *</Label>
            <Input
              id="beklagter-plz"
              placeholder="12345"
              maxLength={5}
              {...register("beklagter.plz")}
            />
            {errors.beklagter?.plz && (
              <p className="text-sm text-destructive mt-1">
                {errors.beklagter.plz.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <Label htmlFor="beklagter-ort">Ort *</Label>
            <Input
              id="beklagter-ort"
              placeholder="Berlin"
              {...register("beklagter.ort")}
            />
            {errors.beklagter?.ort && (
              <p className="text-sm text-destructive mt-1">
                {errors.beklagter.ort.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label>Rechtsform</Label>
          <Select
            value={rechtsform || ""}
            onValueChange={(value) => setValue("beklagter.rechtsform", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Rechtsform waehlen (optional)" />
            </SelectTrigger>
            <SelectContent>
              {rechtsformen.map((rf) => (
                <SelectItem key={rf} value={rf}>
                  {rf}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="beklagter-vertreter">
            Gesetzlicher Vertreter (z.B. Geschaeftsfuehrer)
          </Label>
          <Input
            id="beklagter-vertreter"
            placeholder="z.B. Hans Mueller, Geschaeftsfuehrer"
            {...register("beklagter.vertreter")}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Bei einer GmbH oder AG muessen Sie den gesetzlichen Vertreter
            angeben. Diesen finden Sie z.B. im Handelsregister.
          </p>
        </div>
      </div>
    </div>
  );
}
