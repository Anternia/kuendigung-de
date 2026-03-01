import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ)",
  description:
    "Antworten auf die wichtigsten Fragen zur Kündigungsschutzklage: Fristen, Kosten, Ablauf und mehr.",
};

const faqs = [
  {
    frage: "Was ist eine Kündigungsschutzklage?",
    antwort:
      "Eine Kündigungsschutzklage ist eine Klage beim Arbeitsgericht, mit der ein Arbeitnehmer feststellen lässt, dass eine Kündigung unwirksam ist. Ist die Klage erfolgreich, besteht das Arbeitsverhältnis fort. Häufig endet das Verfahren mit einem Vergleich, in dem eine Abfindung vereinbart wird.",
  },
  {
    frage: "Welche Frist muss ich beachten?",
    antwort:
      "Die Klage muss innerhalb von 3 Wochen nach Zugang der Kündigung beim Arbeitsgericht eingehen (§ 4 KSchG). Entscheidend ist der Eingang bei Gericht, nicht das Absendedatum. Wird die Frist versäumt, gilt die Kündigung als wirksam -- auch wenn sie rechtswidrig war.",
  },
  {
    frage: "Brauche ich einen Anwalt?",
    antwort:
      "Nein. In der ersten Instanz am Arbeitsgericht besteht kein Anwaltszwang (§ 11 ArbGG). Sie können die Klage selbst einreichen. Bei komplexen Fällen (z.B. fristlose Kündigung, Sonderkündigungsschutz) empfehlen wir jedoch die Konsultation eines Fachanwalts.",
  },
  {
    frage: "Was kostet eine Kündigungsschutzklage?",
    antwort:
      "Die Gerichtskosten richten sich nach dem Streitwert (3 Bruttomonatsgehälter). Bei einem Gehalt von 3.000 EUR brutto betragen die Gerichtskosten ca. 490 EUR. Bei einem Vergleich entfallen die Gerichtskosten. Ein Gerichtskostenvorschuss ist nicht erforderlich. Nutzen Sie unseren Kostenrechner für eine genaue Berechnung.",
  },
  {
    frage: "Kann ich die Klage per E-Mail einreichen?",
    antwort:
      "Nein. Eine Kündigungsschutzklage kann nicht per E-Mail eingereicht werden. Die Klage muss handschriftlich unterschrieben und in zweifacher Ausfertigung per Post, Fax oder persönlich beim Arbeitsgericht eingereicht werden.",
  },
  {
    frage: "Welches Arbeitsgericht ist zuständig?",
    antwort:
      "Zuständig ist in der Regel das Arbeitsgericht am Ort Ihrer Arbeitsstelle oder am Sitz des Arbeitgebers. Auch wenn Sie ein unzuständiges Arbeitsgericht wählen, bleibt die Frist gewahrt -- das Gericht verweist den Fall von Amts wegen.",
  },
  {
    frage: "Was passiert nach Einreichung der Klage?",
    antwort:
      "Das Arbeitsgericht setzt einen Gütetermin an (meist innerhalb von 2-4 Wochen). In diesem Termin versucht der Richter, eine gütliche Einigung zu erzielen. Ca. 60-70% der Fälle enden hier mit einem Vergleich (oft mit Abfindung). Scheitert die Güteverhandlung, folgt ein Kammertermin.",
  },
  {
    frage: "Muss ich die Gerichtskosten vorstrecken?",
    antwort:
      "Nein. Am Arbeitsgericht ist kein Gerichtskostenvorschuss erforderlich. Die Kosten werden erst nach Abschluss des Verfahrens fällig und nur, wenn kein Vergleich geschlossen wird.",
  },
  {
    frage: "Was ist Prozesskostenhilfe?",
    antwort:
      "Prozesskostenhilfe (PKH) ist staatliche Unterstützung für Personen mit geringem Einkommen. Damit werden die Gerichts- und Anwaltskosten ganz oder teilweise übernommen. Den Antrag können Sie zusammen mit der Klage beim Arbeitsgericht stellen.",
  },
  {
    frage: "Bietet kuendigung.de Rechtsberatung an?",
    antwort:
      "Nein. kuendigung.de ist ein Formularassistent, der eine Klageschrift auf Basis Ihrer Eingaben generiert. Es findet keine individuelle rechtliche Prüfung oder Beratung statt. Die generierte Klageschrift ist ein Muster, das Sie eigenverantwortlich nutzen.",
  },
  {
    frage: "Was ist die Rechtsantragsstelle?",
    antwort:
      "Die Rechtsantragsstelle ist eine Einrichtung an jedem Arbeitsgericht, bei der Sie Ihre Klage mündlich zu Protokoll geben können. Ein Mitarbeiter des Gerichts nimmt Ihre Angaben auf und formuliert die Klage für Sie. Dieser Service ist kostenlos.",
  },
  {
    frage: "Kann ich nach Ablauf der 3-Wochen-Frist noch klagen?",
    antwort:
      "Nur in Ausnahmefällen. Eine nachträgliche Zulassung der Klage ist möglich, wenn Sie ohne eigenes Verschulden an der rechtzeitigen Klageerhebung gehindert waren (§ 5 KSchG). Der Antrag muss innerhalb von 2 Wochen nach Wegfall des Hindernisses gestellt werden.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.antwort,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-3xl font-bold">Häufige Fragen</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Antworten auf die wichtigsten Fragen zur Kündigungsschutzklage.
      </p>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">
                {faq.frage}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.antwort}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10 text-center">
        <p className="text-muted-foreground mb-4">
          Ihre Frage war nicht dabei?
        </p>
        <Button asChild>
          <Link href="/klage-erstellen">
            Jetzt Klage erstellen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
