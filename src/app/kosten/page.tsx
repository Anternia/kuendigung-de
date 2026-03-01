import type { Metadata } from "next";
import { Kostenrechner } from "@/components/kostenrechner";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Kosten einer Kündigungsschutzklage",
  description:
    "Was kostet eine Kündigungsschutzklage? Gebührentabelle, Kostenrechner und Infos zu Prozesskostenhilfe -- alle Kosten auf einen Blick.",
};

const gebuehrenBeispiele = [
  { gehalt: 2000, streitwert: 6000, kosten: 182 },
  { gehalt: 3000, streitwert: 9000, kosten: 245 },
  { gehalt: 3500, streitwert: 10500, kosten: 266 },
  { gehalt: 4000, streitwert: 12000, kosten: 295 },
  { gehalt: 4500, streitwert: 13500, kosten: 295 },
  { gehalt: 5000, streitwert: 15000, kosten: 324 },
  { gehalt: 6000, streitwert: 18000, kosten: 353 },
];

export default function KostenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Kosten einer Kündigungsschutzklage</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Eine Kündigungsschutzklage am Arbeitsgericht ist deutlich günstiger als
        viele denken. Hier erfahren Sie, mit welchen Kosten Sie rechnen müssen.
      </p>

      {/* Kostenrechner */}
      <div className="mt-8">
        <Kostenrechner />
      </div>

      <div className="mt-10 space-y-10">
        {/* Kurzübersicht */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="flex gap-3 pt-6">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <div className="text-sm text-green-900 space-y-1">
              <p className="font-semibold">Gut zu wissen</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Kein Gerichtskostenvorschuss nötig -- Sie zahlen erst nach Verfahrensende</li>
                <li>Bei Vergleich (ca. 60-70% der Fälle) entfallen die Gerichtskosten komplett</li>
                <li>Ohne Anwalt fallen nur Gerichtskosten an -- kein Anwaltszwang in 1. Instanz</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Streitwert */}
        <section>
          <h2 className="text-xl font-semibold">Wie berechnet sich der Streitwert?</h2>
          <p className="mt-2 text-muted-foreground">
            Der Streitwert bestimmt die Höhe der Gerichtskosten. Bei einer
            Kündigungsschutzklage beträgt er <strong>3 Bruttomonatsgehälter</strong>{" "}
            (§ 42 Abs. 2 GKG). Sonderzahlungen wie Weihnachtsgeld oder Boni
            werden nicht eingerechnet -- nur das reguläre Bruttomonatsgehalt zählt.
          </p>
          <div className="mt-3 rounded-md border bg-muted/30 p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Beispiel:</p>
            <p className="mt-1">
              Bei einem Bruttogehalt von 3.500 € ergibt sich ein Streitwert von
              3 × 3.500 € = <strong>10.500 €</strong>. Die Gerichtskosten
              betragen dann ca. <strong>266 €</strong> (bei Urteil).
            </p>
          </div>
        </section>

        {/* Gebührentabelle */}
        <section>
          <h2 className="text-xl font-semibold">Gebührentabelle nach Gehalt</h2>
          <p className="mt-2 text-muted-foreground">
            Hier sehen Sie die voraussichtlichen Gerichtskosten für verschiedene
            Gehaltsstufen. Die Kosten basieren auf der 2-fachen Gebühr nach GKG
            (Gerichtskostengesetz) und fallen nur an, wenn das Verfahren mit einem
            Urteil endet.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-4 text-left font-semibold">Bruttogehalt</th>
                  <th className="py-3 px-4 text-left font-semibold">Streitwert</th>
                  <th className="py-3 px-4 text-left font-semibold">Gerichtskosten*</th>
                  <th className="py-3 px-4 text-left font-semibold">Bei Vergleich</th>
                </tr>
              </thead>
              <tbody>
                {gebuehrenBeispiele.map((b) => (
                  <tr key={b.gehalt} className="border-b">
                    <td className="py-3 px-4">{b.gehalt.toLocaleString("de-DE")} €</td>
                    <td className="py-3 px-4">{b.streitwert.toLocaleString("de-DE")} €</td>
                    <td className="py-3 px-4 font-medium">ca. {b.kosten} €</td>
                    <td className="py-3 px-4 text-green-700 font-medium">0 €</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-muted-foreground">
              * Gerichtskosten bei Urteil (2-fache Gebühr). Bei Vergleich entfallen
              die Gerichtskosten vollständig. Alle Angaben ohne Gewähr.
            </p>
          </div>
        </section>

        {/* Kein Vorschuss */}
        <section>
          <h2 className="text-xl font-semibold">Kein Gerichtskostenvorschuss</h2>
          <p className="mt-2 text-muted-foreground">
            Anders als bei Zivilgerichten müssen Sie am Arbeitsgericht{" "}
            <strong>keinen Kostenvorschuss</strong> zahlen. Sie können Ihre Klage
            einreichen, ohne vorab Geld zu überweisen. Die Gerichtskosten werden
            erst nach Abschluss des Verfahrens in Rechnung gestellt.
          </p>
        </section>

        {/* Vergleich */}
        <section>
          <h2 className="text-xl font-semibold">Vergleich spart alle Gerichtskosten</h2>
          <p className="mt-2 text-muted-foreground">
            Etwa 60-70% aller Kündigungsschutzklagen enden mit einem Vergleich
            -- meist schon beim ersten Gerichtstermin (Gütetermin). In diesem
            Fall entfallen die Gerichtskosten vollständig.
          </p>
          <p className="mt-2 text-muted-foreground">
            Ein typischer Vergleich beinhaltet häufig eine{" "}
            <strong>Abfindung</strong> für den Arbeitnehmer. Die Höhe variiert
            stark, als grobe Orientierung gilt: 0,5 bis 1,0 Bruttomonatsgehälter
            pro Beschäftigungsjahr. Es besteht allerdings kein gesetzlicher
            Anspruch auf eine Abfindung -- sie ist immer Verhandlungssache.
          </p>
        </section>

        {/* Anwaltskosten */}
        <section>
          <h2 className="text-xl font-semibold">Anwaltskosten in erster Instanz</h2>
          <p className="mt-2 text-muted-foreground">
            Eine Besonderheit am Arbeitsgericht: In der ersten Instanz trägt{" "}
            <strong>jede Partei ihre eigenen Anwaltskosten</strong> -- auch wenn
            sie gewinnt (§ 12a ArbGG). Das bedeutet:
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
            <li>
              <strong>Ohne Anwalt:</strong> Es fallen nur Gerichtskosten an
              (siehe Tabelle oben)
            </li>
            <li>
              <strong>Mit Anwalt:</strong> Zusätzlich zu den Gerichtskosten
              zahlen Sie die Anwaltsvergütung (Berechnung nach RVG). Bei einem
              Streitwert von 10.500 € liegen die Anwaltskosten bei ca. 1.500-2.000 €
            </li>
          </ul>
        </section>

        {/* Wer zahlt was */}
        <section>
          <h2 className="text-xl font-semibold">Wer zahlt am Ende was?</h2>
          <div className="mt-3 space-y-3">
            <div className="rounded-md border p-4">
              <p className="font-medium text-sm">Bei Vergleich (häufigster Fall)</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Gerichtskosten: entfallen komplett. Anwaltskosten: jede Partei
                zahlt den eigenen Anwalt. Der Vergleich kann eine Regelung zur
                Kostenverteilung enthalten.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <p className="font-medium text-sm">Bei Urteil (Kläger gewinnt)</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Gerichtskosten: zahlt der Arbeitgeber. Anwaltskosten: jede
                Partei zahlt den eigenen Anwalt (§ 12a ArbGG).
              </p>
            </div>
            <div className="rounded-md border p-4">
              <p className="font-medium text-sm">Bei Urteil (Kläger verliert)</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Gerichtskosten: zahlt der Kläger (siehe Tabelle oben).
                Anwaltskosten: jede Partei zahlt den eigenen Anwalt. Die
                Anwaltskosten des Arbeitgebers müssen Sie nicht erstatten.
              </p>
            </div>
          </div>
        </section>

        {/* PKH */}
        <section>
          <h2 className="text-xl font-semibold">Prozesskostenhilfe (PKH)</h2>
          <p className="mt-2 text-muted-foreground">
            Bei geringem Einkommen können Sie{" "}
            <strong>Prozesskostenhilfe</strong> beantragen. Damit übernimmt der
            Staat die Gerichts- und ggf. Anwaltskosten ganz oder teilweise.
          </p>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <p><strong>Voraussetzungen:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ihr Einkommen und Vermögen reichen nicht aus, die Kosten selbst zu tragen</li>
              <li>Die Klage hat hinreichende Aussicht auf Erfolg</li>
              <li>Die Klage ist nicht mutwillig</li>
            </ul>
            <p className="mt-2"><strong>So beantragen Sie PKH:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Füllen Sie das Formular{" "}
                <em>&quot;Erklärung über die persönlichen und wirtschaftlichen
                Verhältnisse&quot;</em>{" "}
                aus (erhältlich beim Arbeitsgericht oder online)
              </li>
              <li>Reichen Sie den Antrag zusammen mit der Klage beim Arbeitsgericht ein</li>
              <li>Belege über Einkommen, Miete und Verbindlichkeiten beifügen</li>
            </ul>
          </div>
          <Card className="mt-4 border-blue-200 bg-blue-50">
            <CardContent className="flex gap-3 pt-6">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-900">
                <strong>Tipp:</strong> Die Rechtsantragsstelle des Arbeitsgerichts
                hilft Ihnen kostenlos beim Ausfüllen des PKH-Antrags.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Rechtsschutzversicherung */}
        <section>
          <h2 className="text-xl font-semibold">Rechtsschutzversicherung</h2>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie eine Rechtsschutzversicherung mit{" "}
            <strong>Arbeitsrechtsschutz</strong> haben, übernimmt diese in der
            Regel die Anwalts- und Gerichtskosten.
          </p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
            <li>Prüfen Sie Ihren Versicherungsschein auf den Baustein &quot;Arbeitsrecht&quot;</li>
            <li>Melden Sie den Fall so früh wie möglich (Deckungszusage einholen)</li>
            <li>Beachten Sie die Wartezeit: Arbeitsrechtsschutz gilt oft erst 3 Monate nach Vertragsbeginn</li>
            <li>Selbstbeteiligung prüfen (häufig 150-300 €)</li>
          </ul>
        </section>

        {/* Warnung */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="flex gap-3 pt-6">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-900">
              <strong>Wichtig:</strong> Die 3-Wochen-Frist für die Klageerhebung
              läuft unabhängig von PKH-Antrag oder Deckungszusage der Versicherung.
              Reichen Sie die Klage immer fristgerecht ein -- auch wenn die
              Kostenübernahme noch nicht geklärt ist.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
