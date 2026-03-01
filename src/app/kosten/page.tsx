import type { Metadata } from "next";
import { Kostenrechner } from "@/components/kostenrechner";

export const metadata: Metadata = {
  title: "Kosten einer Kündigungsschutzklage",
  description:
    "Was kostet eine Kündigungsschutzklage? Berechnen Sie die voraussichtlichen Gerichtskosten und informieren Sie sich über Prozesskostenhilfe.",
};

export default function KostenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Kosten einer Kündigungsschutzklage</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Was kostet eine Kündigungsschutzklage am Arbeitsgericht?
      </p>

      <div className="mt-8">
        <Kostenrechner />
      </div>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Wie berechnet sich der Streitwert?</h2>
          <p className="mt-2 text-muted-foreground">
            Der Streitwert einer Kündigungsschutzklage beträgt in der Regel 3
            Bruttomonatsgehälter (§ 42 Abs. 2 GKG). Auf Basis des Streitwerts
            werden die Gerichtskosten berechnet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kein Gerichtskostenvorschuss</h2>
          <p className="mt-2 text-muted-foreground">
            Anders als bei Zivilgerichten müssen Sie am Arbeitsgericht keinen
            Gerichtskostenvorschuss zahlen. Die Gerichtskosten werden erst nach
            Abschluss des Verfahrens fällig.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Vergleich spart Gerichtskosten</h2>
          <p className="mt-2 text-muted-foreground">
            Endet das Verfahren mit einem Vergleich (was in ca. 60-70% der
            Fälle geschieht), entfallen die Gerichtskosten vollständig.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Anwaltskosten in erster Instanz</h2>
          <p className="mt-2 text-muted-foreground">
            Eine Besonderheit am Arbeitsgericht: In der ersten Instanz trägt
            jede Partei ihre eigenen Anwaltskosten -- auch der Gewinner
            (§ 12a ArbGG). Wenn Sie keinen Anwalt beauftragen, fallen nur die
            Gerichtskosten an.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Prozesskostenhilfe (PKH)</h2>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie über ein geringes Einkommen verfügen, können Sie
            Prozesskostenhilfe beantragen. Damit übernimmt der Staat die
            Gerichts- und ggf. Anwaltskosten ganz oder teilweise. Den Antrag
            können Sie zusammen mit der Klage beim Arbeitsgericht einreichen
            oder bei der Rechtsantragsstelle stellen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Rechtsschutzversicherung</h2>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie eine Rechtsschutzversicherung mit Arbeitsrechtsschutz
            haben, übernimmt diese in der Regel die Kosten für den Anwalt und
            die Gerichtskosten. Prüfen Sie Ihren Versicherungsschein und melden
            Sie den Fall frühzeitig.
          </p>
        </section>
      </div>
    </div>
  );
}
