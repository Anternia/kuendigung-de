import { istFeiertag } from "./feiertage";

/**
 * Berechnet die 3-Wochen-Frist fuer die Kuendigungsschutzklage (§ 4 KSchG).
 *
 * Regeln:
 * - 3 Wochen ab Zugang der Kuendigung
 * - Faellt das Fristende auf Sa/So/Feiertag → naechster Werktag (§ 222 ZPO, § 193 BGB)
 * - Entscheidend ist der Eingang bei Gericht
 */
export function berechneFrist(zugangDatum: Date): Date {
  const frist = new Date(zugangDatum);
  frist.setDate(frist.getDate() + 21); // 3 Wochen = 21 Tage

  // Falls Fristende auf Wochenende oder Feiertag faellt → naechster Werktag
  while (istWochenende(frist) || istFeiertag(frist)) {
    frist.setDate(frist.getDate() + 1);
  }

  return frist;
}

function istWochenende(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // 0 = Sonntag, 6 = Samstag
}

/**
 * Berechnet die verbleibenden Kalendertage bis zum Fristende.
 */
export function verbleibendeTage(fristEnde: Date): number {
  const heute = new Date();
  heute.setHours(0, 0, 0, 0);
  const ende = new Date(fristEnde);
  ende.setHours(0, 0, 0, 0);
  const diff = ende.getTime() - heute.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export type Dringlichkeit = "gruen" | "gelb" | "rot" | "abgelaufen";

/**
 * Bestimmt die Dringlichkeitsstufe basierend auf verbleibenden Tagen.
 */
export function getDringlichkeit(tage: number): Dringlichkeit {
  if (tage < 0) return "abgelaufen";
  if (tage <= 3) return "rot";
  if (tage <= 7) return "gelb";
  return "gruen";
}
