import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};


export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 prose prose-neutral">
      <h1>Impressum</h1>
      <p className="text-muted-foreground">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
      </p>

      <h2>Anbieter</h2>
      <p>
        Synbis GmbH
        <br />
        Ottostraße 6
        <br />
        53332 Bornheim
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 02227 – 8589181
        <br />
        Telefax: 02227 – 8589189
        <br />
        E-Mail: info@synbis.de
        <br />
        Web: www.synbis.de
      </p>

      <h2>Vertretungsberechtigt</h2>
      <p>Geschäftsführer: Thomas Hellwege</p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: Amtsgericht Bonn
        <br />
        Registernummer: HRB 20994
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
        <br />
        DE296274595
      </p>
      <p>
        Steuernummer: 222/5717/6824
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Thomas Hellwege
        <br />
        Ottostraße 6
        <br />
        53332 Bornheim
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
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

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
        die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
        wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
        gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <p className="text-sm text-muted-foreground mt-8">
        Stand: März 2026
      </p>
    </div>
  );
}
