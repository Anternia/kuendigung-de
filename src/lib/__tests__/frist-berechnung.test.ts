import { describe, it, expect } from "vitest";
import { berechneFrist, getDringlichkeit } from "../frist-berechnung";

describe("berechneFrist", () => {
  it("berechnet 21 Tage ab Zugangsdatum", () => {
    // Montag, 3. Februar 2025 → Montag, 24. Februar 2025
    const zugang = new Date(2025, 1, 3); // Mo
    const frist = berechneFrist(zugang);
    expect(frist.getDate()).toBe(24);
    expect(frist.getMonth()).toBe(1); // Februar
    expect(frist.getFullYear()).toBe(2025);
  });

  it("verschiebt Fristende von Samstag auf Montag", () => {
    // Donnerstag, 6. Februar 2025 + 21 Tage = Donnerstag, 27. Februar 2025
    // Kein Wochenende, sollte Donnerstag bleiben
    const zugang = new Date(2025, 1, 6);
    const frist = berechneFrist(zugang);
    expect(frist.getDay()).not.toBe(0); // nicht Sonntag
    expect(frist.getDay()).not.toBe(6); // nicht Samstag
  });

  it("verschiebt Fristende von Sonntag auf Montag", () => {
    // Samstag, 1. Februar 2025 + 21 Tage = Samstag, 22. Februar 2025
    // → sollte auf Montag, 24. Februar verschoben werden
    const zugang = new Date(2025, 1, 1);
    const frist = berechneFrist(zugang);
    expect(frist.getDay()).not.toBe(0);
    expect(frist.getDay()).not.toBe(6);
  });

  it("Fristende faellt nie auf Wochenende", () => {
    // Teste verschiedene Zugangsdaten ueber ein ganzes Jahr
    for (let monat = 0; monat < 12; monat++) {
      for (let tag = 1; tag <= 28; tag++) {
        const zugang = new Date(2025, monat, tag);
        const frist = berechneFrist(zugang);
        const day = frist.getDay();
        expect(day).not.toBe(0); // nicht Sonntag
        expect(day).not.toBe(6); // nicht Samstag
      }
    }
  });

  it("verschiebt Fristende ueber Feiertage hinweg", () => {
    // Zugang 10. Dezember 2025 + 21 Tage = 31. Dezember 2025 (Silvester)
    // Silvester ist kein bundesweiter Feiertag, aber 1. Januar ist Neujahr
    // 31. Dezember 2025 ist ein Mittwoch → sollte bleiben (Silvester ist kein Feiertag)
    const zugang = new Date(2025, 11, 10);
    const frist = berechneFrist(zugang);
    expect(frist.getDay()).not.toBe(0);
    expect(frist.getDay()).not.toBe(6);
  });

  it("beruecksichtigt Neujahr als Feiertag", () => {
    // Zugang 11. Dezember 2025 + 21 Tage = 1. Januar 2026 (Neujahr, Donnerstag)
    // → sollte auf Freitag, 2. Januar 2026 verschoben werden
    const zugang = new Date(2025, 11, 11);
    const frist = berechneFrist(zugang);
    expect(frist.getTime()).toBeGreaterThan(new Date(2026, 0, 1).getTime());
  });
});

describe("getDringlichkeit", () => {
  it("gibt 'abgelaufen' bei negativen Tagen zurueck", () => {
    expect(getDringlichkeit(-1)).toBe("abgelaufen");
    expect(getDringlichkeit(-10)).toBe("abgelaufen");
  });

  it("gibt 'rot' bei 0-3 Tagen zurueck", () => {
    expect(getDringlichkeit(0)).toBe("rot");
    expect(getDringlichkeit(1)).toBe("rot");
    expect(getDringlichkeit(3)).toBe("rot");
  });

  it("gibt 'gelb' bei 4-7 Tagen zurueck", () => {
    expect(getDringlichkeit(4)).toBe("gelb");
    expect(getDringlichkeit(7)).toBe("gelb");
  });

  it("gibt 'gruen' bei mehr als 7 Tagen zurueck", () => {
    expect(getDringlichkeit(8)).toBe("gruen");
    expect(getDringlichkeit(21)).toBe("gruen");
  });
});
