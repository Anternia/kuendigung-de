"use client";

import { useState, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";
import { Search, MapPin, Info, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { KlageFormData, Arbeitsgericht } from "@/types/klage";
import {
  getArbeitsgerichtById,
  sucheArbeitsgerichte,
  findeZustaendigeGerichte,
} from "@/lib/gerichts-daten";

interface Props {
  form: UseFormReturn<KlageFormData>;
}

function GerichtKarte({
  gericht,
  isSelected,
  onSelect,
  istVorschlag,
}: {
  gericht: Arbeitsgericht;
  isSelected: boolean;
  onSelect: () => void;
  istVorschlag?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left rounded-md border p-3 transition-colors ${
        isSelected
          ? "border-primary bg-primary/5"
          : "hover:bg-muted"
      }`}
    >
      <div className="flex items-start gap-2">
        {istVorschlag ? (
          <Star className="h-4 w-4 mt-0.5 shrink-0 text-yellow-500" />
        ) : (
          <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
        )}
        <div>
          <p className="font-medium text-sm">{gericht.name}</p>
          <p className="text-xs text-muted-foreground">
            {gericht.strasse}, {gericht.plz} {gericht.ort}
          </p>
        </div>
      </div>
    </button>
  );
}

export function Schritt5Gericht({ form }: Props) {
  const { setValue, watch } = form;
  const [suchbegriff, setSuchbegriff] = useState("");

  const selectedId = watch("gericht.arbeitsgerichtId");
  const arbeitsortPlz = watch("arbeitsverhaeltnis.arbeitsortPlz");
  const beklagterPlz = watch("beklagter.plz");

  const selectedGericht = selectedId
    ? getArbeitsgerichtById(selectedId)
    : null;

  // Vorgeschlagene Gerichte basierend auf PLZ
  const vorgeschlageneGerichte = useMemo(() => {
    const gerichteMap = new Map<string, Arbeitsgericht>();

    if (arbeitsortPlz && arbeitsortPlz.length >= 2) {
      for (const g of findeZustaendigeGerichte(arbeitsortPlz)) {
        gerichteMap.set(g.id, g);
      }
    }

    if (beklagterPlz && beklagterPlz.length >= 2) {
      for (const g of findeZustaendigeGerichte(beklagterPlz)) {
        gerichteMap.set(g.id, g);
      }
    }

    return Array.from(gerichteMap.values());
  }, [arbeitsortPlz, beklagterPlz]);

  // Manuelle Suche
  const suchergebnisse = suchbegriff
    ? sucheArbeitsgerichte(suchbegriff)
    : [];

  const vorschlagIds = new Set(vorgeschlageneGerichte.map((g) => g.id));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Zustaendiges Arbeitsgericht</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Waehlen Sie das Arbeitsgericht, bei dem Sie die Klage einreichen
          moechten.
        </p>
      </div>

      <div className="rounded-md border border-blue-200 bg-blue-50 p-3">
        <div className="flex gap-2">
          <Info className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
          <div className="text-sm text-blue-800 space-y-1">
            <p>
              Gemaess § 46 Abs. 2 ArbGG koennen Sie waehlen: Arbeitsgericht
              am <strong>Arbeitsort</strong> oder am{" "}
              <strong>Sitz des Arbeitgebers</strong>.
            </p>
            <p>
              Auch bei falschem Gericht bleibt die 3-Wochen-Frist gewahrt.
              Das Gericht verweist den Fall von Amts wegen weiter.
            </p>
          </div>
        </div>
      </div>

      {/* Vorgeschlagene Gerichte */}
      {vorgeschlageneGerichte.length > 0 && (
        <div>
          <h3 className="font-semibold text-sm mb-2 flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            Vorgeschlagene Gerichte
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Basierend auf Ihrem Arbeitsort
            {beklagterPlz && arbeitsortPlz && beklagterPlz.slice(0, 2) !== arbeitsortPlz.slice(0, 2)
              ? " und dem Sitz des Arbeitgebers"
              : ""}
            . Bitte pruefen Sie die Zustaendigkeit.
          </p>
          <div className="space-y-2">
            {vorgeschlageneGerichte.map((gericht) => (
              <GerichtKarte
                key={gericht.id}
                gericht={gericht}
                isSelected={selectedId === gericht.id}
                onSelect={() => setValue("gericht.arbeitsgerichtId", gericht.id)}
                istVorschlag
              />
            ))}
          </div>
        </div>
      )}

      {/* Manuelle Suche */}
      <div>
        <Label htmlFor="gericht-suche">
          {vorgeschlageneGerichte.length > 0
            ? "Anderes Gericht suchen"
            : "Arbeitsgericht suchen"}
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="gericht-suche"
            placeholder="Name, Stadt oder PLZ eingeben..."
            value={suchbegriff}
            onChange={(e) => setSuchbegriff(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {suchbegriff && (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {suchergebnisse
            .filter((g) => !vorschlagIds.has(g.id))
            .map((gericht) => (
              <GerichtKarte
                key={gericht.id}
                gericht={gericht}
                isSelected={selectedId === gericht.id}
                onSelect={() => setValue("gericht.arbeitsgerichtId", gericht.id)}
              />
            ))}
          {suchergebnisse.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              Kein Arbeitsgericht gefunden. Versuchen Sie einen anderen
              Suchbegriff.
            </p>
          )}
        </div>
      )}

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
            Tel: {selectedGericht.telefon}
            {selectedGericht.fax && ` | Fax: ${selectedGericht.fax}`}
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
