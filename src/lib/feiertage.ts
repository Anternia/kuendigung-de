/**
 * Bundesweite gesetzliche Feiertage in Deutschland.
 * Nur bundeseinheitliche Feiertage (gelten in allen 16 Bundeslaendern).
 */

function osterSonntag(year: number): Date {
  // Gauss'sche Osterformel
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getBundesweiteFeiertage(year: number): Date[] {
  const ostern = osterSonntag(year);

  return [
    new Date(year, 0, 1), // Neujahr
    addDays(ostern, -2), // Karfreitag
    addDays(ostern, 1), // Ostermontag
    new Date(year, 4, 1), // Tag der Arbeit
    addDays(ostern, 39), // Christi Himmelfahrt
    addDays(ostern, 50), // Pfingstmontag
    new Date(year, 9, 3), // Tag der Deutschen Einheit
    new Date(year, 11, 25), // 1. Weihnachtstag
    new Date(year, 11, 26), // 2. Weihnachtstag
  ];
}

export function istFeiertag(date: Date): boolean {
  const feiertage = getBundesweiteFeiertage(date.getFullYear());
  return feiertage.some(
    (f) =>
      f.getDate() === date.getDate() &&
      f.getMonth() === date.getMonth() &&
      f.getFullYear() === date.getFullYear()
  );
}
