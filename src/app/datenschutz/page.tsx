import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-neutral">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Synbis GmbH
        <br />
        Ottostraße 6
        <br />
        53332 Bornheim
        <br />
        Telefon: 02227 – 8589181
        <br />
        E-Mail: info@synbis.de
      </p>

      <h2>2. Überblick über die Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur
        Bereitstellung unseres Dienstes erforderlich ist. Die Verarbeitung
        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>

      <h2>3. Datenerhebung beim Besuch der Website</h2>
      <p>
        Beim Besuch unserer Website werden automatisch technische Daten
        erhoben (IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten sind
        technisch erforderlich und werden nicht mit anderen Datenquellen
        zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse).
      </p>

      <h2>4. Datenverarbeitung im Klageschrift-Generator</h2>
      <p>
        Wenn Sie den Klageschrift-Generator nutzen, verarbeiten wir die von
        Ihnen eingegebenen Daten:
      </p>
      <ul>
        <li>Name und Anschrift (Kläger)</li>
        <li>Firmenname und Anschrift des Arbeitgebers (Beklagter)</li>
        <li>
          Angaben zum Arbeitsverhältnis (Beginn, Tätigkeit, Gehalt,
          Arbeitsort)
        </li>
        <li>Angaben zur Kündigung (Datum, Art, Beendigungsdatum)</li>
        <li>Ausgewähltes Arbeitsgericht</li>
      </ul>
      <p>
        <strong>Zweck:</strong> Erstellung einer druckfertigen Klageschrift.
      </p>
      <p>
        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung).
      </p>
      <p>
        <strong>Speicherdauer:</strong> Die Daten werden nach 30 Tagen
        automatisch gelöscht.
      </p>
      <p>
        <strong>PDF-Generierung:</strong> Die PDF-Datei wird in Ihrem Browser
        generiert. Ihre Daten werden zur Erstellung der Klageschrift an
        unseren Server übermittelt, aber nicht länger als nötig gespeichert.
      </p>

      <h2>5. Keine Cookies / Kein Tracking</h2>
      <p>
        Wir verwenden keine Tracking-Cookies, kein Google Analytics und keine
        vergleichbaren Analyse-Tools. Es werden nur technisch notwendige
        Cookies eingesetzt, sofern erforderlich.
      </p>

      <h2>6. Hosting</h2>
      <p>
        Diese Website wird in der Europäischen Union gehostet. Ihre Daten
        werden nicht in Drittländer übermittelt.
      </p>

      <h2>7. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt SSL-/TLS-Verschlüsselung für die sichere
        Übertragung Ihrer Daten. Verschlüsselte Verbindungen erkennen Sie
        am Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>
          <strong>Auskunft</strong> über die bei uns gespeicherten Daten
          (Art. 15 DSGVO)
        </li>
        <li>
          <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
        </li>
        <li>
          <strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)
        </li>
        <li>
          <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
        </li>
        <li>
          <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
        </li>
        <li>
          <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)
        </li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte
        Kontaktadresse.
      </p>

      <h2>9. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
        Daten gegen die DSGVO verstößt.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
        an geänderte rechtliche Rahmenbedingungen oder Änderungen unseres
        Dienstes anzupassen.
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Stand: März 2026
      </p>
    </div>
  );
}
