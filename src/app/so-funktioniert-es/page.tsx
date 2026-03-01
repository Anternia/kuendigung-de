import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Printer,
  Send,
  ArrowRight,
  Scale,
  Clock,
  Users,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "So funktioniert es",
  description:
    "Erfahren Sie, wie Sie mit kuendigung.de Ihre Kündigungsschutzklage erstellen und beim Arbeitsgericht einreichen.",
};

export default function SoFunktioniertEsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">So funktioniert es</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Von der Kündigung bis zur Klage -- in wenigen Schritten.
      </p>

      <div className="mt-10 space-y-10">
        {/* Schritt 1 */}
        <div className="flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            1
          </div>
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Fragebogen ausfüllen
            </h2>
            <p className="mt-2 text-muted-foreground">
              Geben Sie Ihre persönlichen Daten, die Angaben zu Ihrem
              Arbeitgeber, Ihrem Arbeitsverhältnis und der Kündigung in
              unseren geführten Fragebogen ein. Alle Eingaben werden
              verschlüsselt übertragen.
            </p>
          </div>
        </div>

        <Separator />

        {/* Schritt 2 */}
        <div className="flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            2
          </div>
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Printer className="h-5 w-5 text-primary" />
              Klageschrift herunterladen, ausdrucken und unterschreiben
            </h2>
            <p className="mt-2 text-muted-foreground">
              Auf Basis Ihrer Angaben erstellen wir eine druckfertige
              Klageschrift als PDF. Drucken Sie diese <strong>zweimal</strong>{" "}
              aus und unterschreiben Sie <strong>beide Exemplare
              handschriftlich</strong>.
            </p>
            <div className="mt-3 rounded-md border border-yellow-200 bg-yellow-50 p-3">
              <p className="text-sm text-yellow-800">
                Ohne handschriftliche Unterschrift ist die Klage unwirksam.
                Eine Einreichung per E-Mail ist nicht zulässig.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Schritt 3 */}
        <div className="flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            3
          </div>
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Beim Arbeitsgericht einreichen
            </h2>
            <p className="mt-2 text-muted-foreground">
              Senden Sie beide Exemplare an das zuständige Arbeitsgericht.
              Sie haben drei Möglichkeiten:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">Per Post:</span>
                Einschreiben mit Rückschein empfohlen. Beachten Sie die
                Postlaufzeit!
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">Per Fax:</span>
                Die schnellste Option. Der Sendebericht gilt als Zugangsnachweis.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground">
                  Persönlich:
                </span>
                Bei der Rechtsantragsstelle des Arbeitsgerichts abgeben.
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* Was passiert danach */}
        <div className="flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-bold">
            4
          </div>
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Gavel className="h-5 w-5" />
              Was passiert danach?
            </h2>
            <div className="mt-2 space-y-3 text-muted-foreground">
              <p>
                Nach Eingang der Klage setzt das Arbeitsgericht einen{" "}
                <strong>Gütetermin</strong> an (in der Regel innerhalb von 2-4
                Wochen). In dieser Verhandlung versucht das Gericht, eine
                gütliche Einigung zu erzielen.
              </p>
              <p>
                Ca. 60-70% aller Kündigungsschutzklagen enden mit einem{" "}
                <strong>Vergleich</strong> -- häufig wird eine Abfindung
                vereinbart. Bei einem Vergleich entfallen die Gerichtskosten.
              </p>
              <p>
                Kommt kein Vergleich zustande, folgt ein{" "}
                <strong>Kammertermin</strong> mit ehrenamtlichen Richtern, in
                dem das Gericht ein Urteil fällt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info-Box */}
      <Card className="mt-10">
        <CardContent className="pt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex gap-3">
              <Scale className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">Kein Anwaltszwang</p>
                <p className="text-xs text-muted-foreground">
                  In erster Instanz können Sie sich selbst vertreten (§ 11
                  ArbGG).
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">3-Wochen-Frist</p>
                <p className="text-xs text-muted-foreground">
                  Die Klage muss innerhalb von 3 Wochen nach Zugang eingehen
                  (§ 4 KSchG).
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">Rechtsantragsstelle</p>
                <p className="text-xs text-muted-foreground">
                  Alternativ können Sie die Klage dort mündlich zu Protokoll
                  geben.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
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
