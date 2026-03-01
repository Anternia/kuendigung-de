"use client";

import { useState } from "react";
import { CalendarClock, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  berechneFrist,
  verbleibendeTage,
  getDringlichkeit,
  type Dringlichkeit,
} from "@/lib/frist-berechnung";

function formatDate(date: Date): string {
  return date.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const dringlichkeitConfig: Record<
  Dringlichkeit,
  { color: string; bg: string; icon: React.ReactNode; text: string }
> = {
  gruen: {
    color: "text-green-700",
    bg: "bg-green-50 border-green-200",
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
    text: "Sie haben noch genügend Zeit.",
  },
  gelb: {
    color: "text-yellow-700",
    bg: "bg-yellow-50 border-yellow-200",
    icon: <Clock className="h-5 w-5 text-yellow-600" />,
    text: "Die Frist läuft bald ab. Handeln Sie zeitnah!",
  },
  rot: {
    color: "text-red-700",
    bg: "bg-red-50 border-red-200",
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
    text: "Achtung: Die Frist läuft in Kürze ab! Handeln Sie sofort!",
  },
  abgelaufen: {
    color: "text-red-700",
    bg: "bg-red-50 border-red-200",
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
    text: "Die 3-Wochen-Frist ist bereits abgelaufen. Eine nachträgliche Zulassung ist nur in Ausnahmefällen möglich (§ 5 KSchG).",
  },
};

export function Fristenrechner() {
  const [zugangDatum, setZugangDatum] = useState("");
  const [ergebnis, setErgebnis] = useState<{
    fristEnde: Date;
    tage: number;
    dringlichkeit: Dringlichkeit;
  } | null>(null);

  function berechne() {
    if (!zugangDatum) return;
    const datum = new Date(zugangDatum);
    const fristEnde = berechneFrist(datum);
    const tage = verbleibendeTage(fristEnde);
    const dringlichkeit = getDringlichkeit(tage);
    setErgebnis({ fristEnde, tage, dringlichkeit });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarClock className="h-5 w-5" />
          Fristenrechner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="zugang-datum">
            Wann haben Sie die Kündigung erhalten?
          </Label>
          <p className="text-sm text-muted-foreground mb-2">
            Entscheidend ist der Tag, an dem Ihnen die Kündigung zugegangen ist
            (z.B. aus dem Briefkasten geholt).
          </p>
          <Input
            id="zugang-datum"
            type="date"
            value={zugangDatum}
            onChange={(e) => setZugangDatum(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <Button onClick={berechne} disabled={!zugangDatum} className="w-full">
          Frist berechnen
        </Button>

        {ergebnis && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-lg border p-4 ${dringlichkeitConfig[ergebnis.dringlichkeit].bg}`}
          >
            <div className="flex items-start gap-3">
              {dringlichkeitConfig[ergebnis.dringlichkeit].icon}
              <div className="space-y-1">
                <p
                  className={`font-semibold ${dringlichkeitConfig[ergebnis.dringlichkeit].color}`}
                >
                  {ergebnis.dringlichkeit === "abgelaufen"
                    ? "Frist abgelaufen"
                    : `Noch ${ergebnis.tage} Tag${ergebnis.tage !== 1 ? "e" : ""} verbleibend`}
                </p>
                <p className="text-sm">
                  <strong>Fristende:</strong>{" "}
                  {formatDate(ergebnis.fristEnde)}
                </p>
                <p
                  className={`text-sm ${dringlichkeitConfig[ergebnis.dringlichkeit].color}`}
                >
                  {dringlichkeitConfig[ergebnis.dringlichkeit].text}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Die Klage muss bis zu diesem Datum beim Arbeitsgericht
                  eingegangen sein (nicht Absendedatum).
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
