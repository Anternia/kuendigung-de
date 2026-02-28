"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Search, MapPin, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { KlageFormData } from "@/types/klage";
import { arbeitsgerichte, getArbeitsgerichtById } from "@/lib/gerichts-daten";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

export function Schritt5Gericht({ form }: Props) {
  const { setValue, watch } = form;
  const [suchbegriff, setSuchbegriff] = useState("");

  const selectedId = watch("gericht.arbeitsgerichtId");
  const selectedGericht = selectedId
    ? getArbeitsgerichtById(selectedId)
    : null;

  const gefiltert = suchbegriff
    ? arbeitsgerichte.filter(
        (g) =>
          g.name.toLowerCase().includes(suchbegriff.toLowerCase()) ||
          g.ort.toLowerCase().includes(suchbegriff.toLowerCase()) ||
          g.bundesland.toLowerCase().includes(suchbegriff.toLowerCase())
      )
    : arbeitsgerichte;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Zustaendiges Arbeitsgericht</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Waehlen Sie das Arbeitsgericht, bei dem Sie die Klage einreichen
          moechten. In der Regel ist das Arbeitsgericht an Ihrem Arbeitsort oder
          am Sitz des Arbeitgebers zustaendig.
        </p>
      </div>

      <div className="rounded-md border border-blue-200 bg-blue-50 p-3">
        <div className="flex gap-2">
          <Info className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
          <p className="text-sm text-blue-800">
            Auch wenn Sie ein oertlich unzustaendiges Arbeitsgericht waehlen,
            bleibt die 3-Wochen-Frist gewahrt. Das Gericht verweist den Fall
            von Amts wegen an das zustaendige Gericht.
          </p>
        </div>
      </div>

      <div>
        <Label htmlFor="gericht-suche">Arbeitsgericht suchen</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="gericht-suche"
            placeholder="Stadt oder Bundesland eingeben..."
            value={suchbegriff}
            onChange={(e) => setSuchbegriff(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {gefiltert.map((gericht) => (
          <button
            key={gericht.id}
            type="button"
            onClick={() => setValue("gericht.arbeitsgerichtId", gericht.id)}
            className={`w-full text-left rounded-md border p-3 transition-colors ${
              selectedId === gericht.id
                ? "border-primary bg-primary/5"
                : "hover:bg-muted"
            }`}
          >
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">{gericht.name}</p>
                <p className="text-xs text-muted-foreground">
                  {gericht.strasse}, {gericht.plz} {gericht.ort}
                </p>
              </div>
            </div>
          </button>
        ))}
        {gefiltert.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Kein Arbeitsgericht gefunden. Versuchen Sie einen anderen
            Suchbegriff.
          </p>
        )}
      </div>

      {selectedGericht && (
        <div className="rounded-md border bg-muted/50 p-4">
          <h3 className="font-semibold text-sm mb-2">
            Ausgewaehltes Gericht:
          </h3>
          <p className="text-sm">{selectedGericht.name}</p>
          <p className="text-sm text-muted-foreground">
            {selectedGericht.strasse}, {selectedGericht.plz}{" "}
            {selectedGericht.ort}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Tel: {selectedGericht.telefon} | Fax: {selectedGericht.fax}
          </p>
        </div>
      )}

      {form.formState.errors.gericht?.arbeitsgerichtId && (
        <p className="text-sm text-destructive">
          {form.formState.errors.gericht.arbeitsgerichtId.message}
        </p>
      )}
    </div>
  );
}
