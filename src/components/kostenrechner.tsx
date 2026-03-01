"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { berechneKosten, type Kostenberechnung } from "@/lib/kosten-berechnung";

export function Kostenrechner() {
  const [gehalt, setGehalt] = useState("");
  const [ergebnis, setErgebnis] = useState<Kostenberechnung | null>(null);

  function berechne() {
    const betrag = parseFloat(gehalt);
    if (isNaN(betrag) || betrag <= 0) return;
    setErgebnis(berechneKosten(betrag));
  }

  function formatEUR(value: number): string {
    return value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Kostenrechner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="gehalt-input">Bruttomonatsgehalt in Euro</Label>
          <Input
            id="gehalt-input"
            type="number"
            min="0"
            step="0.01"
            placeholder="z.B. 3000"
            value={gehalt}
            onChange={(e) => setGehalt(e.target.value)}
          />
        </div>

        <Button onClick={berechne} disabled={!gehalt} className="w-full">
          Kosten berechnen
        </Button>

        {ergebnis && (
          <div className="space-y-4" role="status" aria-live="polite">
            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Streitwert</p>
                <p className="text-lg font-semibold">
                  {formatEUR(ergebnis.streitwert)} EUR
                </p>
                <p className="text-xs text-muted-foreground">
                  (3 Bruttomonatsgehaelter)
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  Gerichtskosten (bei Urteil)
                </p>
                <p className="text-lg font-semibold">
                  {formatEUR(ergebnis.gerichtskosten)} EUR
                </p>
                <p className="text-xs text-muted-foreground">
                  (2-fache Gebuehr)
                </p>
              </div>
            </div>

            <div className="rounded-md border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-800">
                <strong>Bei Vergleich:</strong> Gerichtskosten entfallen
                vollstaendig (0,00 EUR).
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              {ergebnis.hinweis}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
