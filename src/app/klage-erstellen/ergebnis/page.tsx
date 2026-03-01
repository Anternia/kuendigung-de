"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Download,
  Printer,
  Send,
  MapPin,
  Phone,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import type { KlageFormData } from "@/types/klage";
import { getArbeitsgerichtById } from "@/lib/gerichts-daten";
import { generateKlageschriftContent } from "@/lib/pdf-template";
import { generatePdfBlob } from "@/components/pdf-generator";

export default function ErgebnisPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<KlageFormData | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("klageFormData");
    if (!stored) {
      router.push("/klage-erstellen");
      return;
    }
    try {
      setFormData(JSON.parse(stored));
    } catch {
      router.push("/klage-erstellen");
    }
  }, [router]);

  async function handleGeneratePdf() {
    if (!formData) return;
    setGenerating(true);
    setPdfError(null);
    try {
      const content = generateKlageschriftContent(formData);
      const blob = await generatePdfBlob(content);
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      // Auto-Download
      const a = document.createElement("a");
      a.href = url;
      a.download = "Kuendigungsschutzklage.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("PDF-Generierung fehlgeschlagen:", err);
      setPdfError(
        "Die PDF-Generierung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder verwenden Sie einen anderen Browser."
      );
    } finally {
      setGenerating(false);
    }
  }

  if (!formData) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  const gericht = getArbeitsgerichtById(formData.gericht.arbeitsgerichtId);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Badge variant="secondary" className="mb-3">
          <CheckCircle className="mr-1 h-3 w-3" />
          Klageschrift bereit
        </Badge>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Ihre Klageschrift ist fertig
        </h1>
        <p className="mt-2 text-muted-foreground">
          Laden Sie das PDF herunter und folgen Sie den Schritten zur
          Einreichung.
        </p>
      </div>

      {/* PDF Download */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <FileText className="h-12 w-12 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">
                Kuendigungsschutzklage.pdf
              </h2>
              <p className="text-sm text-muted-foreground">
                Druckfertige Klageschrift mit allen Ihren Angaben
              </p>
            </div>
            {pdfError && (
              <div role="alert" className="w-full rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {pdfError}
              </div>
            )}
            {pdfUrl ? (
              <Button asChild size="lg">
                <a href={pdfUrl} download="Kuendigungsschutzklage.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Erneut herunterladen
                </a>
              </Button>
            ) : (
              <Button size="lg" onClick={handleGeneratePdf} disabled={generating}>
                <Download className="mr-2 h-4 w-4" />
                {generating ? "Wird erstellt..." : "PDF herunterladen"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Schritt-fuer-Schritt Anleitung */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">
            So reichen Sie die Klage ein
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Printer className="h-4 w-4" />
                PDF zweimal ausdrucken
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Das Arbeitsgericht benoetigt zwei Exemplare: eines fuer die
                Gerichtsakte und eines zur Zustellung an den Arbeitgeber.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold">
                Beide Exemplare handschriftlich unterschreiben
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Unterschreiben Sie auf der vorgesehenen Unterschriftszeile mit
                Ort, Datum und Ihrer handschriftlichen Unterschrift. Ohne
                Unterschrift ist die Klage unwirksam!
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Send className="h-4 w-4" />
                An das Arbeitsgericht senden
              </h3>
              <div className="text-sm text-muted-foreground mt-1 space-y-2">
                <p>Sie haben drei Moeglichkeiten:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Per Post</strong> (Einschreiben mit Rueckschein
                    empfohlen)
                  </li>
                  <li>
                    <strong>Per Fax</strong> -- schnellste Option!
                    Sendebericht aufbewahren als Zugangsnachweis.
                  </li>
                  <li>
                    <strong>Persoenlich</strong> bei der Rechtsantragsstelle
                    des Arbeitsgerichts abgeben.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold">Eingangsbestaetigung aufbewahren</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Bewahren Sie den Rueckschein, Fax-Sendebericht oder die
                Eingangsbestaetigung sorgfaeltig auf.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gerichtsdaten */}
      {gericht && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Ihr Arbeitsgericht
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold">{gericht.name}</p>
              <p className="text-sm text-muted-foreground">
                {gericht.strasse}
              </p>
              <p className="text-sm text-muted-foreground">
                {gericht.plz} {gericht.ort}
              </p>
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Telefon</p>
                <p className="font-medium flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {gericht.telefon}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Fax</p>
                <p className="font-medium">{gericht.fax}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Warnhinweise */}
      <Card className="mb-6 border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-semibold text-red-800">Wichtige Hinweise</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li className="flex items-start gap-2">
                  <Clock className="h-3 w-3 mt-1 shrink-0" />
                  Entscheidend ist der <strong>Eingang bei Gericht</strong>,
                  nicht das Absendedatum.
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">&#x2717;</span>
                  Einreichung per E-Mail ist <strong>nicht zulaessig</strong>.
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">&#x270D;</span>
                  Die Klage muss <strong>handschriftlich unterschrieben</strong>{" "}
                  sein.
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">&#x1F4C4;</span>
                  Reichen Sie die Klage in{" "}
                  <strong>zweifacher Ausfertigung</strong> ein.
                </li>
              </ul>
              <p className="text-sm text-red-700 font-medium mt-2">
                Bei knapper Frist: Nutzen Sie das Fax des Arbeitsgerichts. Der
                Sendebericht gilt als Zugangsnachweis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="rounded-md border bg-muted/50 p-4 mb-6">
        <p className="text-xs text-muted-foreground">
          Hinweis: Die generierte Klageschrift ist ein Muster und stellt keine
          Rechtsberatung dar. Pruefen Sie alle Angaben sorgfaeltig. Bei
          komplexen Faellen (z.B. fristlose Kuendigung, Sonderkuendigungsschutz)
          empfehlen wir dringend die Konsultation eines Fachanwalts fuer
          Arbeitsrecht. kuendigung.de uebernimmt keine Haftung fuer die
          Richtigkeit oder Vollstaendigkeit der generierten Dokumente.
        </p>
      </div>

      {/* Zurueck */}
      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/klage-erstellen">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Angaben korrigieren
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/checkliste">Zur Checkliste</Link>
        </Button>
      </div>
    </div>
  );
}
