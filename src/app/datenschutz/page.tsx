import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklaerung",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-neutral">
      <h1>Datenschutzerklaerung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        {/* TODO: Vor Go-Live mit echten Daten ersetzen */}
        TODO: Firmenname / Vor- und Nachname eintragen
        <br />
        TODO: Strasse und Hausnummer eintragen
        <br />
        TODO: PLZ und Ort eintragen
        <br />
        E-Mail: TODO: E-Mail-Adresse eintragen
      </p>

      <h2>2. Ueberblick ueber die Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur
        Bereitstellung unseres Dienstes erforderlich ist. Die Verarbeitung
        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfuellung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>

      <h2>3. Datenerhebung beim Besuch der Website</h2>
      <p>
        Beim Besuch unserer Website werden automatisch technische Daten
        erhoben (IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten sind
        technisch erforderlich und werden nicht mit anderen Datenquellen
        zusammengefuehrt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse).
      </p>

      <h2>4. Datenverarbeitung im Klageschrift-Generator</h2>
      <p>
        Wenn Sie den Klageschrift-Generator nutzen, verarbeiten wir die von
        Ihnen eingegebenen Daten:
      </p>
      <ul>
        <li>Name und Anschrift (Klaeger)</li>
        <li>Firmenname und Anschrift des Arbeitgebers (Beklagter)</li>
        <li>
          Angaben zum Arbeitsverhaeltnis (Beginn, Taetigkeit, Gehalt,
          Arbeitsort)
        </li>
        <li>Angaben zur Kuendigung (Datum, Art, Beendigungsdatum)</li>
        <li>Ausgewaehltes Arbeitsgericht</li>
      </ul>
      <p>
        <strong>Zweck:</strong> Erstellung einer druckfertigen Klageschrift.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfuellung).
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die Daten werden nach 30 Tagen
        automatisch geloescht.
      </p>
      <p>
        <strong>PDF-Generierung:</strong> Die PDF-Datei wird in Ihrem Browser
        generiert. Ihre Daten werden zur Erstellung der Klageschrift an
        unseren Server uebermittelt, aber nicht laenger als noetig gespeichert.
      </p>

      <h2>5. Keine Cookies / Kein Tracking</h2>
      <p>
        Wir verwenden keine Tracking-Cookies, kein Google Analytics und keine
        vergleichbaren Analyse-Tools. Es werden nur technisch notwendige
        Cookies eingesetzt, sofern erforderlich.
      </p>

      <h2>6. Hosting</h2>
      <p>
        Diese Website wird in der Europaeischen Union gehostet. Ihre Daten
        werden nicht in Drittlaender uebermittelt.
      </p>

      <h2>7. SSL-/TLS-Verschluesselung</h2>
      <p>
        Diese Website nutzt SSL-/TLS-Verschluesselung fuer die sichere
        Uebertragung Ihrer Daten. Verschluesselte Verbindungen erkennen Sie
        am Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>
          <strong>Auskunft</strong> ueber die bei uns gespeicherten Daten
          (Art. 15 DSGVO)
        </li>
        <li>
          <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
        </li>
        <li>
          <strong>Loeschung</strong> Ihrer Daten (Art. 17 DSGVO)
        </li>
        <li>
          <strong>Einschraenkung der Verarbeitung</strong> (Art. 18 DSGVO)
        </li>
        <li>
          <strong>Datenuebertragbarkeit</strong> (Art. 20 DSGVO)
        </li>
        <li>
          <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)
        </li>
      </ul>
      <p>
        Zur Ausuebung Ihrer Rechte wenden Sie sich bitte an die oben genannte
        Kontaktadresse.
      </p>

      <h2>9. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehoerde zu
        beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
        Daten gegen die DSGVO verstoesst.
      </p>

      <h2>10. Aenderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, um sie
        an geaenderte rechtliche Rahmenbedingungen oder Aenderungen unseres
        Dienstes anzupassen.
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Stand: Februar 2026
      </p>
    </div>
  );
}
