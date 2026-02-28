"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";
import type { KlageschriftContent } from "@/lib/pdf-template";

// Standard-Schrift ohne externe Fonts (Helvetica ist eingebaut)
const styles = StyleSheet.create({
  page: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 70,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  gerichtAdresse: {
    marginBottom: 30,
  },
  gerichtName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  title: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  parteien: {
    marginBottom: 20,
  },
  parteiBlock: {
    marginBottom: 10,
  },
  parteiRolle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 2,
  },
  gegen: {
    textAlign: "center",
    fontFamily: "Helvetica-Bold",
    marginVertical: 8,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    marginTop: 16,
    marginBottom: 8,
  },
  antrag: {
    marginLeft: 20,
    marginBottom: 6,
  },
  antragNummer: {
    fontFamily: "Helvetica-Bold",
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
  },
  unterschrift: {
    marginTop: 40,
  },
  unterschriftLinie: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: 250,
    marginBottom: 4,
    marginTop: 30,
  },
  unterschriftText: {
    fontSize: 9,
    color: "#666",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 70,
    right: 70,
    fontSize: 8,
    color: "#999",
    textAlign: "center",
  },
  streitwert: {
    marginTop: 16,
    fontSize: 10,
    color: "#444",
  },
  hinweis: {
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 9,
    color: "#666",
    lineHeight: 1.4,
  },
});

interface Props {
  content: KlageschriftContent;
}

function KlageschriftPDF({ content }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Gerichtsadresse */}
        <View style={styles.gerichtAdresse}>
          <Text style={styles.gerichtName}>{content.gericht.name}</Text>
          <Text>{content.gericht.strasse}</Text>
          <Text>
            {content.gericht.plz} {content.gericht.ort}
          </Text>
        </View>

        {/* Titel */}
        <Text style={styles.title}>Kuendigungsschutzklage</Text>

        {/* Parteien */}
        <View style={styles.parteien}>
          <View style={styles.parteiBlock}>
            <Text style={styles.parteiRolle}>Klaeger:</Text>
            <Text>{content.klaeger.name}</Text>
            <Text>{content.klaeger.anschrift}</Text>
          </View>

          <Text style={styles.gegen}>gegen</Text>

          <View style={styles.parteiBlock}>
            <Text style={styles.parteiRolle}>Beklagte:</Text>
            <Text>{content.beklagter.bezeichnung}</Text>
            <Text>{content.beklagter.anschrift}</Text>
          </View>
        </View>

        {/* Wegen */}
        <Text style={styles.paragraph}>
          wegen Kuendigungsschutz
        </Text>

        {/* Klageantraege */}
        <Text style={styles.sectionTitle}>
          wird beantragt:
        </Text>

        <View style={styles.antrag}>
          <Text style={styles.paragraph}>
            <Text style={styles.antragNummer}>1. </Text>
            {content.klageantrag1}
          </Text>
        </View>

        <View style={styles.antrag}>
          <Text style={styles.paragraph}>
            <Text style={styles.antragNummer}>2. </Text>
            {content.klageantrag2}
          </Text>
        </View>

        {/* Begruendung */}
        <Text style={styles.sectionTitle}>Begruendung:</Text>

        {content.begruendung.map((absatz, i) => (
          <Text key={i} style={styles.paragraph}>
            {absatz}
          </Text>
        ))}

        {/* Streitwert */}
        <Text style={styles.streitwert}>
          Streitwertangabe: {content.streitwert}
        </Text>

        {/* Unterschrift */}
        <View style={styles.unterschrift}>
          <View style={styles.unterschriftLinie} />
          <Text style={styles.unterschriftText}>
            Ort, Datum, Unterschrift des Klaegers
          </Text>
        </View>

        {/* Hinweis */}
        <View style={styles.hinweis}>
          <Text>
            Hinweis: Diese Klageschrift muss handschriftlich unterschrieben und
            in zweifacher Ausfertigung beim Arbeitsgericht eingereicht werden.
            Einreichung per E-Mail ist nicht zulaessig. Erstellt mit
            kuendigung.de -- keine Rechtsberatung.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Erstellt mit kuendigung.de | Keine Rechtsberatung
        </Text>
      </Page>
    </Document>
  );
}

export async function generatePdfBlob(
  content: KlageschriftContent
): Promise<Blob> {
  return await pdf(<KlageschriftPDF content={content} />).toBlob();
}
