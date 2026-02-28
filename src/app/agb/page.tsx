import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschaeftsbedingungen",
};

export default function AgbPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-neutral">
      <h1>Allgemeine Geschaeftsbedingungen (AGB)</h1>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschaeftsbedingungen gelten fuer die Nutzung der
        Website kuendigung.de und des darauf angebotenen
        Klageschrift-Generators.
      </p>

      <h2>§ 2 Leistungsbeschreibung</h2>
      <p>kuendigung.de bietet folgende Leistungen an:</p>
      <ul>
        <li>
          Allgemeine Informationen zum Thema Kuendigungsschutzklage
          (Fristenrechner, FAQ, Kostenrechner)
        </li>
        <li>
          Einen Formularassistenten zur Erstellung einer Klageschrift auf Basis
          der vom Nutzer eingegebenen Daten
        </li>
        <li>
          Generierung einer druckfertigen Klageschrift im PDF-Format
        </li>
      </ul>

      <h2>§ 3 Keine Rechtsberatung</h2>
      <p>
        <strong>
          kuendigung.de erbringt keine Rechtsdienstleistungen im Sinne des
          Rechtsdienstleistungsgesetzes (RDG).
        </strong>
      </p>
      <p>
        Die bereitgestellten Informationen und die generierte Klageschrift
        stellen keine individuelle Rechtsberatung dar. Es findet keine
        rechtliche Pruefung des Einzelfalls statt. Die Klageschrift ist ein
        Muster, das auf den allgemeinen Angaben des Nutzers basiert.
      </p>
      <p>
        Fuer eine individuelle rechtliche Beratung wenden Sie sich bitte an
        einen Rechtsanwalt oder die Rechtsantragsstelle des zustaendigen
        Arbeitsgerichts.
      </p>

      <h2>§ 4 Pflichten des Nutzers</h2>
      <p>Der Nutzer ist verpflichtet:</p>
      <ul>
        <li>Wahrheitsgemaesse und vollstaendige Angaben zu machen</li>
        <li>
          Die generierte Klageschrift vor Einreichung sorgfaeltig auf
          Richtigkeit zu pruefen
        </li>
        <li>
          Die Klageschrift handschriftlich zu unterschreiben und fristgerecht
          beim Arbeitsgericht einzureichen
        </li>
        <li>
          Die 3-Wochen-Frist des § 4 KSchG eigenverantwortlich einzuhalten
        </li>
      </ul>

      <h2>§ 5 Haftungsbeschraenkung</h2>
      <p>
        kuendigung.de uebernimmt keine Haftung fuer:
      </p>
      <ul>
        <li>
          Die Richtigkeit, Vollstaendigkeit oder Aktualitaet der
          bereitgestellten Informationen
        </li>
        <li>
          Den Erfolg oder Misserfolg einer eingereichten Kuendigungsschutzklage
        </li>
        <li>
          Schaeden, die durch fehlerhafte Angaben des Nutzers entstehen
        </li>
        <li>
          Die Einhaltung von Fristen durch den Nutzer
        </li>
        <li>
          Technische Stoerungen oder Datenverlust
        </li>
      </ul>
      <p>
        Die Haftung fuer Vorsatz und grobe Fahrlaessigkeit bleibt unberuehrt.
      </p>

      <h2>§ 6 Datenschutz</h2>
      <p>
        Die Verarbeitung personenbezogener Daten erfolgt gemaess unserer
        Datenschutzerklaerung. Die eingegebenen Daten werden nach 30 Tagen
        automatisch geloescht.
      </p>

      <h2>§ 7 Aenderungen der AGB</h2>
      <p>
        Wir behalten uns vor, diese AGB jederzeit zu aendern. Die jeweils
        aktuelle Fassung ist auf der Website einsehbar.
      </p>

      <h2>§ 8 Anwendbares Recht</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist,
        soweit gesetzlich zulaessig, der Sitz des Anbieters.
      </p>

      <h2>§ 9 Salvatorische Klausel</h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden,
        bleibt die Wirksamkeit der uebrigen Bestimmungen unberuehrt.
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Stand: Februar 2026
      </p>
    </div>
  );
}
