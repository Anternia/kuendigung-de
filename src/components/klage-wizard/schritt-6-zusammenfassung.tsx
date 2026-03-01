"use client";

import { UseFormReturn } from "react-hook-form";
import { AlertTriangle, FileCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { KlageFormData } from "@/types/klage";
import { kuendigungArtLabels } from "@/types/klage";
import { getArbeitsgerichtById } from "@/lib/gerichts-daten";

interface Props {
  form: UseFormReturn<KlageFormData>;
  accepted: boolean;
  onAcceptedChange: (v: boolean) => void;
}

function Feld({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium">{value || "—"}</dd>
    </div>
  );
}

export function Schritt6Zusammenfassung({
  form,
  accepted,
  onAcceptedChange,
}: Props) {
  const data = form.getValues();
  const gericht = getArbeitsgerichtById(data.gericht.arbeitsgerichtId);

  function formatDate(dateStr: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          Zusammenfassung
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Bitte prüfen Sie alle Angaben sorgfältig, bevor Sie die Klageschrift
          erstellen.
        </p>
      </div>

      {/* Klaeger */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Kläger (Sie)</h3>
        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Feld label="Name" value={data.klaeger.name} />
          <Feld
            label="Anschrift"
            value={`${data.klaeger.strasse}, ${data.klaeger.plz} ${data.klaeger.ort}`}
          />
        </dl>
      </div>

      <Separator />

      {/* Beklagter */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Beklagter (Arbeitgeber)</h3>
        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Feld label="Firma" value={data.beklagter.firma} />
          <Feld
            label="Anschrift"
            value={`${data.beklagter.strasse}, ${data.beklagter.plz} ${data.beklagter.ort}`}
          />
          <Feld label="Rechtsform" value={data.beklagter.rechtsform} />
          <Feld label="Gesetzl. Vertreter" value={data.beklagter.vertreter} />
        </dl>
      </div>

      <Separator />

      {/* Arbeitsverhaeltnis */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Arbeitsverhältnis</h3>
        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Feld
            label="Beschäftigt seit"
            value={formatDate(data.arbeitsverhaeltnis.beschaeftigungBeginn)}
          />
          <Feld label="Tätigkeit" value={data.arbeitsverhaeltnis.taetigkeit} />
          <Feld
            label="Bruttomonatsgehalt"
            value={`${Number(data.arbeitsverhaeltnis.bruttoMonatsgehalt).toLocaleString("de-DE", { minimumFractionDigits: 2 })} EUR`}
          />
          <Feld label="Arbeitsort" value={`${data.arbeitsverhaeltnis.arbeitsort} (${data.arbeitsverhaeltnis.arbeitsortPlz})`} />
        </dl>
      </div>

      <Separator />

      {/* Kuendigung */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Kündigung</h3>
        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Feld
            label="Kündigung vom"
            value={formatDate(data.kuendigung.kuendigungDatum)}
          />
          <Feld
            label="Zugang am"
            value={formatDate(data.kuendigung.zugangDatum)}
          />
          <Feld
            label="Art"
            value={kuendigungArtLabels[data.kuendigung.kuendigungArt] || "—"}
          />
          <Feld
            label="Beendigungsdatum"
            value={formatDate(data.kuendigung.beendigungDatum)}
          />
        </dl>
      </div>

      <Separator />

      {/* Gericht */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Arbeitsgericht</h3>
        {gericht ? (
          <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Feld label="Gericht" value={gericht.name} />
            <Feld
              label="Anschrift"
              value={`${gericht.strasse}, ${gericht.plz} ${gericht.ort}`}
            />
          </dl>
        ) : (
          <p className="text-sm text-destructive">
            Kein Arbeitsgericht ausgewählt.
          </p>
        )}
      </div>

      <Separator />

      {/* Warnhinweise */}
      <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4 space-y-2">
        <div className="flex gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-yellow-800">
              Bitte beachten Sie:
            </p>
            <ul className="text-sm text-yellow-700 list-disc pl-4 space-y-1">
              <li>
                Die Klage muss <strong>handschriftlich unterschrieben</strong>{" "}
                und in <strong>zweifacher Ausfertigung</strong> eingereicht
                werden.
              </li>
              <li>
                Einreichung per E-Mail ist <strong>nicht zulässig</strong>.
              </li>
              <li>
                Entscheidend ist der <strong>Eingang bei Gericht</strong>, nicht
                das Absendedatum.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bestaetigungen */}
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="accept-disclaimer"
            checked={accepted}
            onCheckedChange={(v) => onAcceptedChange(v === true)}
          />
          <Label htmlFor="accept-disclaimer" className="font-normal text-sm leading-5">
            Ich habe alle Angaben geprüft und verstanden, dass kuendigung.de
            keine Rechtsberatung erbringt. Die generierte Klageschrift ist ein
            Muster, das ich eigenverantwortlich nutze.
          </Label>
        </div>
      </div>
    </div>
  );
}
