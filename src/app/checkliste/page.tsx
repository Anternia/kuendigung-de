import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckSquare,
  ArrowRight,
  FileText,
  Printer,
  PenLine,
  Send,
  FolderOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Checkliste Kündigungsschutzklage",
  description:
    "Checkliste für die Einreichung Ihrer Kündigungsschutzklage. Alles, was Sie benötigen und beachten müssen.",
};

export default function ChecklistePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Checkliste</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Alles, was Sie für die Einreichung Ihrer Kündigungsschutzklage
        benötigen.
      </p>

      <div className="mt-8 space-y-6">
        {/* Vor der Klage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              Unterlagen bereithalten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Kündigungsschreiben (Original oder Kopie)",
                "Arbeitsvertrag",
                "Letzte Lohnabrechnung(en) (für Bruttogehalt)",
                "Name und Anschrift des Arbeitgebers",
                "Ggf. Name des Geschäftsführers / gesetzlichen Vertreters",
                "Datum, an dem Sie die Kündigung erhalten haben",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckSquare className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Klageschrift erstellen */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Klageschrift erstellen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Fragebogen auf kuendigung.de vollständig ausfüllen",
                "Alle Angaben auf Richtigkeit prüfen",
                "Klageschrift als PDF herunterladen",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckSquare className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Ausdrucken & Unterschreiben */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenLine className="h-5 w-5 text-primary" />
              Ausdrucken & Unterschreiben
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "PDF ZWEIMAL ausdrucken (1x für das Gericht, 1x für die Zustellung an den Arbeitgeber)",
                "BEIDE Exemplare handschriftlich unterschreiben (Ort, Datum, Unterschrift)",
                "Kündigungsschreiben in Kopie beilegen (empfohlen, nicht Pflicht)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckSquare className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Einreichen */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Beim Arbeitsgericht einreichen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Beide Exemplare an das zuständige Arbeitsgericht senden (per Post, Fax oder persönlich)",
                "Bei Postversand: Einschreiben mit Rückschein verwenden",
                "Bei Fax: Sendebericht aufbewahren (= Zugangsnachweis)",
                "Frist prüfen: Eingang bei Gericht muss vor Fristablauf sein!",
                "Eingangsbestätigung / Rückschein / Sendebericht sicher aufbewahren",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckSquare className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tipps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Printer className="h-5 w-5 text-primary" />
              Tipps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <strong>Bei knapper Frist:</strong> Nutzen Sie das Fax des
                Arbeitsgerichts. Das ist die schnellste Methode und der
                Sendebericht dient als Zugangsnachweis.
              </li>
              <li>
                <strong>Rechtsantragsstelle:</strong> Alternativ können Sie
                bei der Rechtsantragsstelle des Arbeitsgerichts die Klage
                mündlich zu Protokoll geben.
              </li>
              <li>
                <strong>Kopien behalten:</strong> Bewahren Sie immer eine Kopie
                der eingereichten Klageschrift für Ihre Unterlagen auf.
              </li>
              <li>
                <strong>Prozesskostenhilfe:</strong> Bei geringem Einkommen
                können Sie PKH beantragen -- zusammen mit der Klage.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/klage-erstellen">
            Jetzt Klage erstellen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
