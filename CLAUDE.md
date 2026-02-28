# kuendigung.de - Webapp-Planung

## Vision

Eine einfache, rechtssichere Webapp, die Arbeitnehmern ermoeglicht, nach Erhalt einer Kuendigung schnell und unkompliziert eine Kuendigungsschutzklage beim Arbeitsgericht einzureichen -- ohne Anwalt (in erster Instanz besteht kein Anwaltszwang, § 11 ArbGG).

---

## 1. Geschaeftsmodell & Rechtlicher Rahmen

### 1.1 Gewaehltes Modell: Formularassistent + Klageschrift-Generator

Die Webapp generiert auf Basis eingegebener Daten ein **druckfertiges Klageschrift-Dokument** (PDF). Es erfolgt **keine individuelle Rechtsberatung** und keine rechtliche Bewertung des Einzelfalls. Das ist RDG-konform (kein Einzelfallbezug, rein technische Formularausfuellung).

**Ergaenzend:**
- Allgemeine Rechtsinformationen (FAQ, Ablauf-Erklaerungen) -- erlaubt, kein Einzelfallbezug
- Optionale Vermittlung an Partneranwaelte fuer komplexe Faelle
- Klarer Hinweis: "Dies ist keine Rechtsberatung"

### 1.2 RDG-Compliance (Rechtsdienstleistungsgesetz)

**Erlaubt (kein Einzelfallbezug):**
- Allgemeine Rechtsinformationen und FAQ
- Bereitstellung von Klageschrift-Vorlagen/-Mustern
- Formularassistent, der Nutzerdaten in Vorlage einfuegt
- Fristenrechner (rein rechnerisch, ohne Bewertung)
- Vermittlung an Anwaelte

**Verboten (ohne Erlaubnis):**
- "Ihre Kuendigung ist unwirksam" -- individuelle Rechtsbewertung
- Formulierung individueller Klagebegruendungen mit rechtlicher Wuerdigung
- Beratung zu Erfolgsaussichten

### 1.3 Monetarisierung (spaeter zu entscheiden)

- Freemium: Kostenlose Klageschrift-Generierung, Premium fuer Anwaltsvermittlung
- Festpreis fuer Klageschrift-Generierung (z.B. 49-99 EUR)
- Anwaltsvermittlung mit Provision
- Erfolgsbasiertes Modell (erfordert Inkassolizenz)

---

## 2. Kernfunktionen

### 2.1 Fristenrechner (Landingpage-Feature)

- Eingabe: Datum des Zugangs der Kuendigung
- Ausgabe: Deadline fuer Klageeinreichung (3-Wochen-Frist, § 4 KSchG)
- Beruecksichtigung von Wochenenden und bundesweiten Feiertagen
- Countdown-Anzeige mit Dringlichkeitsstufe (gruen/gelb/rot)
- Hinweis: Faellt Fristende auf Sa/So/Feiertag → naechster Werktag

### 2.2 Gebuehrter Fragebogen (Wizard / Multi-Step-Form)

**Schritt 1: Persoenliche Daten (Klaeger)**
- Vollstaendiger Name
- Anschrift (Strasse, PLZ, Ort)

**Schritt 2: Arbeitgeber-Daten (Beklagter)**
- Firmenname / Name des Arbeitgebers
- Anschrift (Strasse, PLZ, Ort)
- Rechtsform (Einzelunternehmen, GmbH, AG, etc.)
- Gesetzlicher Vertreter (z.B. Geschaeftsfuehrer bei GmbH)

**Schritt 3: Arbeitsverhaeltnis**
- Beginn des Arbeitsverhaeltnisses (Datum)
- Taetigkeit / Position
- Bruttomonatsgehalt (fuer Streitwertberechnung)
- Arbeitsort (fuer Gerichtszustaendigkeit)

**Schritt 4: Kuendigung**
- Datum des Kuendigungsschreibens
- Datum des Zugangs der Kuendigung
- Art der Kuendigung (ordentlich / ausserordentlich / Aenderungskuendigung)
- Kuendigungsfrist / Beendigungsdatum laut Kuendigung

**Schritt 5: Zustaendiges Gericht**
- Automatische Ermittlung basierend auf Arbeitsort und Arbeitgebersitz
- Nutzer kann waehlen: Arbeitsgericht am Arbeitsort ODER am Arbeitgebersitz
- Hinweis: Auch bei falschem Gericht bleibt Frist gewahrt (Verweisung von Amts wegen)

**Schritt 6: Upload (optional)**
- Kuendigungsschreiben (Scan/Foto)
- Arbeitsvertrag (Scan/Foto)
- Wird NICHT in die Klage eingebunden, nur als Nutzer-Referenz

**Schritt 7: Zusammenfassung & Bestaetigung**
- Alle Eingaben zur Pruefung anzeigen
- Checkbox: "Ich habe verstanden, dass dies keine Rechtsberatung darstellt"
- Checkbox: Datenschutzerklaerung akzeptiert

### 2.3 Klageschrift-Generator (PDF)

Erzeugt ein druckfertiges PDF mit:
- Adressfeld: Zustaendiges Arbeitsgericht (Name + Anschrift)
- Parteibezeichnung (Klaeger & Beklagter)
- Ueberschrift: "Kuendigungsschutzklage"
- Klageantrag (standardisierter Feststellungsantrag nach § 4 KSchG)
- Optionaler allgemeiner Feststellungsantrag
- Kurze Klagebegruendung (Standardtext, keine individuelle Bewertung)
- Unterschriftszeile: "________________" mit Beschriftung "Ort, Datum, Unterschrift"
- Fusszeile auf jeder Seite: Aktenzeichen-Platzhalter, Seitenzahl

### 2.4 Unterschrift & Einreichung

**Rechtslage:** Eine Kuendigungsschutzklage erfordert eine **handschriftliche Unterschrift** (§ 130 Nr. 6 ZPO). Digitale Einreichung ist nur moeglich ueber:
- Qualifizierte elektronische Signatur (QES) -- kaum ein Arbeitnehmer besitzt diese
- beA (besonderes elektronisches Anwaltspostfach) -- nur fuer Anwaelte
- eBO (elektronisches Buerger- und Organisationenpostfach) -- erfordert eID + Registrierung + Software, in der Praxis kaum verbreitet
- **Per E-Mail ist unzulaessig** -- wahrt die Frist nicht!

**Konsequenz fuer die Webapp:** Kein digitaler Versand im MVP. Der Nutzer muss ausdrucken, unterschreiben und postalisch/per Fax einreichen.

**Empfohlener Nutzer-Flow nach PDF-Generierung (Ergebnisseite):**

```
PDF herunterladen
    ↓
Schritt 1: PDF zweimal ausdrucken
    ↓
Schritt 2: Beide Exemplare handschriftlich unterschreiben (Ort, Datum, Unterschrift)
    ↓
Schritt 3: An das zustaendige Arbeitsgericht senden
           Option A: Per Post (Einschreiben/Rueckschein empfohlen)
           Option B: Per Fax (Sendebericht aufbewahren!)
           Option C: Persoenlich bei der Rechtsantragsstelle abgeben
    ↓
Schritt 4: Eingangsbestaetigung aufbewahren
```

**Ergebnisseite zeigt:**
- PDF-Download-Button (prominent)
- Adresse des zustaendigen Arbeitsgerichts (aus Wizard-Daten, druckfertig als Adressetikett)
- Fax-Nummer des Arbeitsgerichts (schnellste Option, wahrt die Frist)
- Telefonnummer des Arbeitsgerichts (fuer Rueckfragen)
- Schritt-fuer-Schritt-Anleitung (siehe oben)
- Fristen-Warnung: "Entscheidend ist der **Eingang bei Gericht**, nicht das Absendedatum!"
- Tipp: "Bei knapper Frist: Fax nutzen (Sendebericht = Zugangsnachweis)"
- Link zur Rechtsantragsstelle als Alternative

**Gerichts-Datensatz (lib/gerichts-daten.ts) muss enthalten:**
- Name des Arbeitsgerichts
- Postanschrift
- Fax-Nummer
- Telefonnummer
- Oeffnungszeiten der Rechtsantragsstelle (falls verfuegbar)

**Spaetere Phase (optional):** Integration von eBO-Versand, falls sich die Verbreitung verbessert.

### 2.5 Informationsseiten

- **Ablauf einer Kuendigungsschutzklage** (allgemeine Info)
- **FAQ** (haeufige Fragen)
- **Kostenrechner** (Gerichtskosten basierend auf Streitwert = 3 Bruttogehaelter)
- **Checkliste** fuer die Einreichung
- **Hinweis auf Rechtsantragsstelle** als Alternative
- **Hinweis auf Prozesskostenhilfe** bei geringem Einkommen

---

## 3. Technologie-Stack

### 3.1 Frontend

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **UI-Komponenten:** shadcn/ui (zugaenglich, anpassbar)
- **Formulare:** React Hook Form + Zod (Validierung)
- **PDF-Generierung:** @react-pdf/renderer (clientseitig) oder serverseitig mit puppeteer/pdf-lib

### 3.2 Backend

- **Next.js API Routes** (Server Actions / Route Handlers)
- **Datenbank:** PostgreSQL (ueber Supabase oder Neon)
- **ORM:** Prisma oder Drizzle
- **Auth:** Nicht zwingend noetig fuer MVP (anonyme Nutzung moeglich)

### 3.3 Hosting & Infrastruktur

- **Hosting:** Vercel oder Hetzner (EU-Hosting fuer DSGVO!)
- **Domain:** kuendigung.de
- **SSL:** Automatisch via Hosting-Provider
- **Datei-Uploads:** Temporaer, verschluesselt, automatische Loeschung nach 24h

### 3.4 Warum Next.js?

- SSR/SSG fuer SEO (wichtig: Nutzer suchen "Kuendigungsschutzklage" bei Google)
- API-Routes fuer PDF-Generierung
- Vercel-Deployment einfach, aber Hetzner moeglich fuer EU-Hosting
- React-Oekosystem mit shadcn/ui fuer professionelle UI

---

## 4. Seitenstruktur / Sitemap

```
/                           → Landingpage (Hero, Fristenrechner, CTA)
/klage-erstellen            → Multi-Step-Wizard (Fragebogen)
/klage-erstellen/ergebnis   → PDF-Download + naechste Schritte
/so-funktioniert-es         → Ablauf-Erklaerung
/kosten                     → Kostenrechner + Infos zu Gebuehren
/faq                        → Haeufige Fragen
/checkliste                 → Checkliste fuer Einreichung
/impressum                  → Impressum (§ 5 DDG)
/datenschutz                → Datenschutzerklaerung
/agb                        → AGB + Haftungsausschluss
```

---

## 5. Datenmodell (MVP)

```prisma
model KlageEntwurf {
  id                String   @id @default(cuid())
  createdAt         DateTime @default(now())

  // Klaeger
  klaegerName       String
  klaegerStrasse    String
  klaegerPlz        String
  klaegerOrt        String

  // Beklagter
  beklagterFirma    String
  beklagterStrasse  String
  beklagterPlz      String
  beklagterOrt      String
  beklagterRechtsform String?
  beklagterVertreter  String?

  // Arbeitsverhaeltnis
  beschaeftigungBeginn DateTime
  taetigkeit           String
  bruttoMonatsgehalt   Decimal
  arbeitsort           String

  // Kuendigung
  kuendigungDatum     DateTime
  zugangDatum         DateTime
  kuendigungArt       KuendigungArt
  beendigungDatum     DateTime?

  // Gericht
  arbeitsgericht      String

  // Meta
  pdfGeneriert        Boolean  @default(false)
  geloeschtAm         DateTime?
}

enum KuendigungArt {
  ORDENTLICH
  AUSSERORDENTLICH
  AENDERUNGSKUENDIGUNG
}
```

**Wichtig:** Daten werden nach 30 Tagen automatisch geloescht (DSGVO-Datensparsamkeit). Kein Nutzerkonto noetig fuer MVP.

---

## 6. DSGVO-Compliance

### 6.1 Technische Massnahmen
- EU-Hosting (Hetzner Deutschland oder Vercel EU-Region)
- TLS/HTTPS ueberall
- Verschluesselte Datenbank
- Automatische Datenloeschung nach 30 Tagen
- Keine Tracking-Cookies, kein Google Analytics (ggf. Plausible oder Umami, self-hosted)
- Upload-Dateien nach 24h loeschen, nie in Klage einbetten

### 6.2 Rechtliche Dokumente
- Datenschutzerklaerung (Art. 13 DSGVO)
- AGB mit Haftungsausschluss ("keine Rechtsberatung")
- Impressum (§ 5 DDG)
- Cookie-Banner (nur falls technisch nicht notwendige Cookies)
- Widerrufsbelehrung (§ 312g BGB, falls kostenpflichtig)

### 6.3 Datensparsamkeit
- Kein Nutzerkonto fuer MVP
- Minimale Datenerhebung (nur was fuer Klageschrift noetig)
- Keine Weitergabe an Dritte (ausser bei Anwaltsvermittlung mit Einwilligung)

---

## 7. MVP-Scope (Phase 1)

### Enthalten:
- [ ] Landingpage mit Fristenrechner und Erklaerung
- [ ] Multi-Step-Fragebogen (7 Schritte)
- [ ] PDF-Generierung der Klageschrift
- [ ] Informationsseiten (FAQ, Ablauf, Kosten, Checkliste)
- [ ] Impressum, Datenschutz, AGB
- [ ] Responsive Design (Mobile-First)
- [ ] SEO-Optimierung (Meta-Tags, strukturierte Daten)
- [ ] DSGVO-konforme Umsetzung

### Nicht enthalten (spaetere Phasen):
- [ ] Nutzerkonten / Login
- [ ] Anwaltsvermittlung
- [ ] Online-Bezahlung
- [ ] Automatische Gerichts-Datenbank (manuell gepflegter Datensatz)
- [ ] E-Mail-Benachrichtigungen / Fristen-Erinnerungen
- [ ] Mehrsprachigkeit

---

## 8. Implementierungsreihenfolge

### Phase 1: Grundgeruest (Woche 1-2)
1. Next.js-Projekt aufsetzen (TypeScript, Tailwind, shadcn/ui)
2. Projektstruktur und Routing
3. Layout (Header, Footer, Navigation)
4. Landingpage mit Hero-Section
5. Impressum, Datenschutz, AGB (Platzhalter-Texte)

### Phase 2: Kernfunktion (Woche 3-4)
6. Fristenrechner-Komponente
7. Multi-Step-Wizard mit Validierung
8. Datenmodell / Datenbankanbindung
9. PDF-Generierung der Klageschrift
10. Ergebnisseite mit Download

### Phase 3: Content & Polish (Woche 5-6)
11. Informationsseiten (FAQ, Ablauf, Kosten, Checkliste)
12. Kostenrechner
13. SEO-Optimierung
14. Accessibility-Pruefung (BFSG ab 28.06.2025!)
15. Testing (Unit, Integration, E2E)
16. Deployment & Go-Live

---

## 9. Wichtige Rechtliche Hinweise (ueberall sichtbar)

Folgende Hinweise muessen prominent auf der Website erscheinen:

1. **"kuendigung.de ersetzt keine Rechtsberatung."** -- auf jeder Seite im Footer
2. **"Die generierte Klageschrift ist ein Muster. Pruefen Sie alle Angaben sorgfaeltig."** -- auf der Ergebnisseite
3. **"Frist beachten: Die Klage muss innerhalb von 3 Wochen nach Zugang der Kuendigung beim Arbeitsgericht eingehen!"** -- prominent auf Landingpage und im Wizard
4. **"Die Klage muss handschriftlich unterschrieben und in zweifacher Ausfertigung eingereicht werden."** -- auf der Ergebnisseite und im Wizard (Zusammenfassung)
5. **"Einreichung per E-Mail ist nicht zulaessig."** -- auf der Ergebnisseite
6. **"Entscheidend ist der Eingang bei Gericht, nicht das Absendedatum."** -- auf der Ergebnisseite
7. **"Bei knapper Frist: Nutzen Sie das Fax des Arbeitsgerichts. Der Sendebericht gilt als Zugangsnachweis."** -- auf der Ergebnisseite

---

## 10. Projektstruktur

```
kuendigung.de/
├── CLAUDE.md                  # Diese Datei
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root-Layout
│   │   ├── page.tsx           # Landingpage
│   │   ├── klage-erstellen/
│   │   │   ├── page.tsx       # Multi-Step-Wizard
│   │   │   └── ergebnis/
│   │   │       └── page.tsx   # PDF-Download
│   │   ├── so-funktioniert-es/
│   │   │   └── page.tsx
│   │   ├── kosten/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── checkliste/
│   │   │   └── page.tsx
│   │   ├── impressum/
│   │   │   └── page.tsx
│   │   ├── datenschutz/
│   │   │   └── page.tsx
│   │   └── agb/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/                # shadcn/ui Komponenten
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── fristenrechner.tsx
│   │   ├── klage-wizard/      # Wizard-Schritte
│   │   │   ├── schritt-1-klaeger.tsx
│   │   │   ├── schritt-2-beklagter.tsx
│   │   │   ├── schritt-3-arbeitsverhaeltnis.tsx
│   │   │   ├── schritt-4-kuendigung.tsx
│   │   │   ├── schritt-5-gericht.tsx
│   │   │   ├── schritt-6-upload.tsx
│   │   │   └── schritt-7-zusammenfassung.tsx
│   │   ├── kostenrechner.tsx
│   │   └── pdf-generator.tsx
│   ├── lib/
│   │   ├── frist-berechnung.ts    # Fristenlogik
│   │   ├── gerichts-daten.ts      # Arbeitsgerichte (statisch)
│   │   ├── pdf-template.ts        # Klageschrift-Vorlage
│   │   ├── kosten-berechnung.ts   # Gebuehrenberechnung
│   │   ├── validierung.ts         # Zod-Schemas
│   │   └── feiertage.ts           # Bundesweite Feiertage
│   └── types/
│       └── klage.ts               # TypeScript-Typen
├── prisma/
│   └── schema.prisma
├── public/
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Entwicklungshinweise

- **Sprache der UI:** Deutsch (Zielgruppe: deutsche Arbeitnehmer)
- **Sprache des Codes:** Englisch (Variablen, Kommentare) -- ausser bei fachspezifischen deutschen Begriffen (z.B. `bruttoMonatsgehalt`, `kuendigungArt`)
- **Barrierefreiheit:** Von Anfang an beruecksichtigen (BFSG-konform)
- **Mobile-First:** Viele Nutzer werden auf dem Handy zugreifen
- **Performance:** Core Web Vitals optimieren (SEO-relevant)
- **Testing:** Fristenberechnung und PDF-Generierung muessen gruendlich getestet werden
