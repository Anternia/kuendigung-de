import type { Metadata } from "next";
import { KlageWizard } from "@/components/klage-wizard/wizard";

export const metadata: Metadata = {
  title: "Kuendigungsschutzklage erstellen",
  description:
    "Erstellen Sie Ihre Kuendigungsschutzklage in wenigen Schritten. Kostenloser Klageschrift-Generator fuer das Arbeitsgericht.",
};

export default function KlageErstellenPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Kuendigungsschutzklage erstellen
        </h1>
        <p className="mt-2 text-muted-foreground">
          Beantworten Sie die folgenden Fragen, um eine druckfertige
          Klageschrift zu erhalten. Alle mit * markierten Felder sind
          Pflichtfelder.
        </p>
      </div>
      <KlageWizard />
    </div>
  );
}
