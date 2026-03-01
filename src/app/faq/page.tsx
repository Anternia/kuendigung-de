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
  title: "Haeufige Fragen (FAQ)",
  description:
    "Antworten auf die wichtigsten Fragen zur Kuendigungsschutzklage: Fristen, Kosten, Ablauf und mehr.",
};

const faqs = [
  {
    frage: "Was ist eine Kuendigungsschutzklage?",
    antwort:
      "Eine Kuendigungsschutzklage ist eine Klage beim Arbeitsgericht, mit der ein Arbeitnehmer feststellen laesst, dass eine Kuendigung unwirksam ist. Ist die Klage erfolgreich, besteht das Arbeitsverhaeltnis fort. Haeufig endet das Verfahren mit einem Vergleich, in dem eine Abfindung vereinbart wird.",
  },
  {
    frage: "Welche Frist muss ich beachten?",
    antwort:
      "Die Klage muss innerhalb von 3 Wochen nach Zugang der Kuendigung beim Arbeitsgericht eingehen (§ 4 KSchG). Entscheidend ist der Eingang bei Gericht, nicht das Absendedatum. Wird die Frist versaeumt, gilt die Kuendigung als wirksam -- auch wenn sie rechtswidrig war.",
  },
  {
    frage: "Brauche ich einen Anwalt?",
    antwort:
      "Nein. In der ersten Instanz am Arbeitsgericht besteht kein Anwaltszwang (§ 11 ArbGG). Sie koennen die Klage selbst einreichen. Bei komplexen Faellen (z.B. fristlose Kuendigung, Sonderkuendigungsschutz) empfehlen wir jedoch die Konsultation eines Fachanwalts.",
  },
  {
    frage: "Was kostet eine Kuendigungsschutzklage?",
    antwort:
      "Die Gerichtskosten richten sich nach dem Streitwert (3 Bruttomonatsgehaelter). Bei einem Gehalt von 3.000 EUR brutto betragen die Gerichtskosten ca. 490 EUR. Bei einem Vergleich entfallen die Gerichtskosten. Ein Gerichtskostenvorschuss ist nicht erforderlich. Nutzen Sie unseren Kostenrechner fuer eine genaue Berechnung.",
  },
  {
    frage: "Kann ich die Klage per E-Mail einreichen?",
    antwort:
      "Nein. Eine Kuendigungsschutzklage kann nicht per E-Mail eingereicht werden. Die Klage muss handschriftlich unterschrieben und in zweifacher Ausfertigung per Post, Fax oder persoenlich beim Arbeitsgericht eingereicht werden.",
  },
  {
    frage: "Welches Arbeitsgericht ist zustaendig?",
    antwort:
      "Zustaendig ist in der Regel das Arbeitsgericht am Ort Ihrer Arbeitsstelle oder am Sitz des Arbeitgebers. Auch wenn Sie ein unzustaendiges Arbeitsgericht waehlen, bleibt die Frist gewahrt -- das Gericht verweist den Fall von Amts wegen.",
  },
  {
    frage: "Was passiert nach Einreichung der Klage?",
    antwort:
      "Das Arbeitsgericht setzt einen Guetetermin an (meist innerhalb von 2-4 Wochen). In diesem Termin versucht der Richter, eine guetliche Einigung zu erzielen. Ca. 60-70% der Faelle enden hier mit einem Vergleich (oft mit Abfindung). Scheitert die Gueteverhandlung, folgt ein Kammertermin.",
  },
  {
    frage: "Muss ich die Gerichtskosten vorstrecken?",
    antwort:
      "Nein. Am Arbeitsgericht ist kein Gerichtskostenvorschuss erforderlich. Die Kosten werden erst nach Abschluss des Verfahrens faellig und nur, wenn kein Vergleich geschlossen wird.",
  },
  {
    frage: "Was ist Prozesskostenhilfe?",
    antwort:
      "Prozesskostenhilfe (PKH) ist staatliche Unterstuetzung fuer Personen mit geringem Einkommen. Damit werden die Gerichts- und Anwaltskosten ganz oder teilweise uebernommen. Den Antrag koennen Sie zusammen mit der Klage beim Arbeitsgericht stellen.",
  },
  {
    frage: "Bietet kuendigung.de Rechtsberatung an?",
    antwort:
      "Nein. kuendigung.de ist ein Formularassistent, der eine Klageschrift auf Basis Ihrer Eingaben generiert. Es findet keine individuelle rechtliche Pruefung oder Beratung statt. Die generierte Klageschrift ist ein Muster, das Sie eigenverantwortlich nutzen.",
  },
  {
    frage: "Was ist die Rechtsantragsstelle?",
    antwort:
      "Die Rechtsantragsstelle ist eine Einrichtung an jedem Arbeitsgericht, bei der Sie Ihre Klage muendlich zu Protokoll geben koennen. Ein Mitarbeiter des Gerichts nimmt Ihre Angaben auf und formuliert die Klage fuer Sie. Dieser Service ist kostenlos.",
  },
  {
    frage: "Kann ich nach Ablauf der 3-Wochen-Frist noch klagen?",
    antwort:
      "Nur in Ausnahmefaellen. Eine nachtraegliche Zulassung der Klage ist moeglich, wenn Sie ohne eigenes Verschulden an der rechtzeitigen Klageerhebung gehindert waren (§ 5 KSchG). Der Antrag muss innerhalb von 2 Wochen nach Wegfall des Hindernisses gestellt werden.",
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
      <h1 className="text-3xl font-bold">Haeufige Fragen</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Antworten auf die wichtigsten Fragen zur Kuendigungsschutzklage.
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
