import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

// TODO: Vor Go-Live alle Platzhalter (TODO_*) mit echten Daten ersetzen!
// Pflichtangaben gemaess § 5 DDG muessen vollstaendig sein.

const TODO_FIRMENNAME = "TODO: Firmenname / Vor- und Nachname eintragen";
const TODO_STRASSE = "TODO: Strasse und Hausnummer eintragen";
const TODO_PLZ_ORT = "TODO: PLZ und Ort eintragen";
const TODO_TELEFON = "TODO: Telefonnummer eintragen";
const TODO_EMAIL = "TODO: E-Mail-Adresse eintragen";
const TODO_VERTRETER = "TODO: Name des Vertretungsberechtigten eintragen";
const TODO_REGISTERGERICHT = "TODO: Amtsgericht eintragen";
const TODO_REGISTERNUMMER = "TODO: HRB-Nummer eintragen";
const TODO_UST_ID = "TODO: USt-IdNr. eintragen (oder Abschnitt entfernen falls Kleinunternehmer)";
const TODO_VERANTWORTLICH = "TODO: Name und Anschrift des redaktionell Verantwortlichen";

export default function ImpressumPage() {
  const isIncomplete = true; // TODO: auf false setzen wenn alle Daten eingetragen sind

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-neutral">
      <h1>Impressum</h1>
      <p className="text-muted-foreground">
        Angaben gemaess § 5 DDG (Digitale-Dienste-Gesetz)
      </p>

      {isIncomplete && (
        <div className="not-prose rounded-md border border-amber-300 bg-amber-50 p-4 mb-6">
          <p className="text-sm font-semibold text-amber-800">
            Dieses Impressum enthaelt noch Platzhalter. Bitte vor
            Veroeffentlichung alle Angaben vervollstaendigen.
          </p>
        </div>
      )}

      <h2>Anbieter</h2>
      <p>
        {TODO_FIRMENNAME}
        <br />
        {TODO_STRASSE}
        <br />
        {TODO_PLZ_ORT}
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {TODO_TELEFON}
        <br />
        E-Mail: {TODO_EMAIL}
      </p>

      <h2>Vertretungsberechtigt</h2>
      <p>{TODO_VERTRETER}</p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: {TODO_REGISTERGERICHT}
        <br />
        Registernummer: {TODO_REGISTERNUMMER}
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemaess § 27a UStG:
        <br />
        {TODO_UST_ID}
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>{TODO_VERANTWORTLICH}</p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europaeische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit. Unsere E-Mail-Adresse finden Sie
        oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftungshinweis</h2>
      <p>
        kuendigung.de bietet allgemeine Informationen und einen
        Formularassistenten zur Erstellung von Klageschriften. Es handelt sich
        nicht um eine Rechtsdienstleistung im Sinne des
        Rechtsdienstleistungsgesetzes (RDG). Es wird keine individuelle
        Rechtsberatung erbracht. Die generierten Dokumente sind Muster und
        ersetzen nicht die Beratung durch einen Rechtsanwalt. Die Nutzung
        erfolgt auf eigene Verantwortung.
      </p>

      <h2>Haftung fuer Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt. Fuer
        die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte koennen
        wir jedoch keine Gewaehr uebernehmen. Als Diensteanbieter sind wir
        gemaess § 7 Abs. 1 DDG fuer eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Haftung fuer Links</h2>
      <p>
        Unser Angebot enthaelt Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Fuer die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Stand: Februar 2026
      </p>
    </div>
  );
}
