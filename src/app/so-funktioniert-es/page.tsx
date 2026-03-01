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
                Wochen). In dieser Verhandlung versucht der Richter, eine
                gütliche Einigung zu erzielen.
              </p>
            </div>

            {/* Gütetermin Detail */}
            <div className="mt-4 rounded-md border bg-muted/30 p-4">
              <p className="font-semibold text-sm">Der Gütetermin</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                <li>
                  Der Richter fasst den Sachverhalt zusammen und gibt eine
                  vorläufige Einschätzung
                </li>
                <li>
                  Sie schildern kurz die Fakten (Dauer der Beschäftigung,
                  Tätigkeit, Kündigungsgrund)
                </li>
                <li>
                  Der Richter schlägt häufig einen{" "}
                  <strong>Vergleich</strong> vor -- meist mit einer Abfindung
                </li>
                <li>
                  Ca. 60-70% aller Fälle enden hier. Sie können den Vergleich
                  annehmen oder ablehnen
                </li>
              </ul>
            </div>

            {/* Kammertermin Detail */}
            <div className="mt-4 rounded-md border bg-muted/30 p-4">
              <p className="font-semibold text-sm">Falls kein Vergleich: Der Kammertermin</p>
              <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                <li>
                  Findet ca. 2-4 Monate nach dem Gütetermin statt
                </li>
                <li>
                  Das Gericht besteht aus einem Berufsrichter und zwei
                  ehrenamtlichen Richtern (je einer von Arbeitnehmer- und
                  Arbeitgeberseite)
                </li>
                <li>
                  Beide Seiten tragen ihre Argumente vor, ggf. werden Zeugen
                  gehört
                </li>
                <li>
                  Das Gericht verkündet ein Urteil. Gegen das Urteil kann
                  Berufung eingelegt werden (dann besteht Anwaltszwang)
                </li>
              </ul>
            </div>

            {/* Typische Abfindung */}
            <div className="mt-4 rounded-md border border-blue-200 bg-blue-50 p-4">
              <p className="font-semibold text-sm text-blue-900">Typische Abfindungshöhe</p>
              <p className="mt-1 text-sm text-blue-800">
                Als grobe Orientierung gilt: 0,5 bis 1,0 Bruttomonatsgehälter pro
                Beschäftigungsjahr. Bei 5 Jahren Betriebszugehörigkeit und 3.500 €
                Gehalt wären das ca. 8.750-17.500 €. Es gibt aber keinen
                gesetzlichen Anspruch -- die Höhe ist immer Verhandlungssache.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Wichtig: Arbeitssuchend melden */}
        <div className="flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold text-lg">
            !
          </div>
          <div>
            <h2 className="text-xl font-semibold">Nicht vergessen: Arbeitssuchend melden</h2>
            <p className="mt-2 text-muted-foreground">
              Unabhängig von der Klage müssen Sie sich{" "}
              <strong>spätestens 3 Tage nach Erhalt der Kündigung</strong> bei der
              Agentur für Arbeit arbeitssuchend melden (§ 38 SGB III). Versäumen
              Sie die Meldung, droht eine Sperrzeit beim Arbeitslosengeld. Die
              Meldung können Sie online, telefonisch oder persönlich vornehmen.
            </p>
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
