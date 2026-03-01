import Link from "next/link";
import {
  FileText,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Printer,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fristenrechner } from "@/components/fristenrechner";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "kuendigung.de",
      url: "https://kuendigung.de",
      description:
        "Erstellen Sie Ihre Kündigungsschutzklage einfach und rechtssicher. Ohne Anwalt, innerhalb der 3-Wochen-Frist.",
      inLanguage: "de-DE",
    },
    {
      "@type": "WebPage",
      "@id": "https://kuendigung.de/#webpage",
      url: "https://kuendigung.de",
      name: "kuendigung.de – Kündigungsschutzklage einfach erstellen",
      description:
        "Erstellen Sie Ihre Kündigungsschutzklage einfach und rechtssicher. Kostenloser Klageschrift-Generator für das Arbeitsgericht.",
      isPartOf: { "@id": "https://kuendigung.de/#website" },
      inLanguage: "de-DE",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Kündigungsschutzklage
                <br />
                <span className="text-primary">einfach selbst erstellen</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Sie wurden gekündigt? In der ersten Instanz besteht kein
                Anwaltszwang. Erstellen Sie Ihre Klageschrift in wenigen
                Minuten -- kostenlos und rechtssicher.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/klage-erstellen">
                    Jetzt Klage erstellen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/so-funktioniert-es">So funktioniert es</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>
                  Ihre Daten werden verschlüsselt übertragen und nach 30 Tagen
                  automatisch gelöscht.
                </span>
              </div>
            </div>

            <div>
              <Fristenrechner />
            </div>
          </div>
        </div>
      </section>

      {/* Frist-Warnung */}
      <section className="border-y bg-red-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 text-center">
            <Clock className="h-5 w-5 text-red-600 shrink-0" />
            <p className="text-sm font-medium text-red-800">
              Wichtig: Die Klage muss innerhalb von{" "}
              <strong>3 Wochen nach Zugang der Kündigung</strong> beim
              Arbeitsgericht eingehen! (§ 4 KSchG)
            </p>
          </div>
        </div>
      </section>

      {/* So funktioniert es */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            In 3 Schritten zur Klageschrift
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Kein Anwalt nötig -- Sie können die Klage in erster Instanz selbst
            einreichen.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  1
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Daten eingeben</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Füllen Sie den Fragebogen mit Ihren persönlichen Daten,
                  Angaben zum Arbeitgeber und zur Kündigung aus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  2
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Printer className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    Ausdrucken & unterschreiben
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Laden Sie die fertige Klageschrift als PDF herunter, drucken
                  Sie sie zweimal aus und unterschreiben Sie beide Exemplare
                  handschriftlich.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  3
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Send className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    An das Arbeitsgericht senden
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Senden Sie die Klage per Post (Einschreiben), Fax oder geben
                  Sie sie persönlich bei der Rechtsantragsstelle ab.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/klage-erstellen">
                Jetzt Klage erstellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Warum kuendigung.de?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Kein Anwalt nötig",
                text: "In der ersten Instanz am Arbeitsgericht besteht kein Anwaltszwang (§ 11 ArbGG).",
              },
              {
                title: "Schnell & einfach",
                text: "Beantworten Sie wenige Fragen und erhalten Sie eine druckfertige Klageschrift.",
              },
              {
                title: "Rechtssichere Vorlage",
                text: "Die Klageschrift enthält alle Pflichtangaben und den korrekten Feststellungsantrag.",
              },
              {
                title: "DSGVO-konform",
                text: "Ihre Daten werden verschlüsselt übertragen und nach 30 Tagen automatisch gelöscht.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t bg-muted/30 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground text-center">
            Hinweis: kuendigung.de bietet allgemeine Informationen und einen
            Formularassistenten zur Erstellung einer Klageschrift. Dies stellt
            keine Rechtsberatung dar. Die generierte Klageschrift ist ein
            Muster. Prüfen Sie alle Angaben sorgfältig. Bei komplexen Fällen
            empfehlen wir die Konsultation eines Fachanwalts für Arbeitsrecht.
          </p>
        </div>
      </section>
    </div>
  );
}
