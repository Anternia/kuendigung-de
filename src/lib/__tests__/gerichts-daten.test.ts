import { describe, it, expect } from "vitest";
import {
  arbeitsgerichte,
  getArbeitsgerichtById,
  sucheArbeitsgerichte,
  findeZustaendigeGerichte,
} from "../gerichts-daten";

describe("arbeitsgerichte", () => {
  it("enthaelt mindestens 100 Arbeitsgerichte", () => {
    expect(arbeitsgerichte.length).toBeGreaterThanOrEqual(100);
  });

  it("hat keine doppelten IDs", () => {
    const ids = arbeitsgerichte.map((g) => g.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("jedes Gericht hat alle Pflichtfelder", () => {
    for (const g of arbeitsgerichte) {
      expect(g.id).toBeTruthy();
      expect(g.name).toBeTruthy();
      expect(g.strasse).toBeTruthy();
      expect(g.plz).toMatch(/^\d{5}$/);
      expect(g.ort).toBeTruthy();
      expect(g.bundesland).toBeTruthy();
    }
  });

  it("jedes Gericht hat mindestens einen PLZ-Bereich", () => {
    for (const g of arbeitsgerichte) {
      expect(g.zustaendigePlzBereiche.length).toBeGreaterThanOrEqual(1);
      for (const plz of g.zustaendigePlzBereiche) {
        expect(plz).toMatch(/^\d{2}$/);
      }
    }
  });
});

describe("getArbeitsgerichtById", () => {
  it("findet Arbeitsgericht Berlin", () => {
    const ag = getArbeitsgerichtById("ag-berlin");
    expect(ag).toBeDefined();
    expect(ag!.name).toBe("Arbeitsgericht Berlin");
  });

  it("gibt undefined fuer unbekannte ID zurueck", () => {
    expect(getArbeitsgerichtById("nicht-vorhanden")).toBeUndefined();
  });
});

describe("sucheArbeitsgerichte", () => {
  it("findet Gerichte nach Name", () => {
    const result = sucheArbeitsgerichte("Berlin");
    expect(result.length).toBeGreaterThan(0);
    expect(result.some((g) => g.name.includes("Berlin"))).toBe(true);
  });

  it("findet Gerichte nach PLZ", () => {
    const result = sucheArbeitsgerichte("10785");
    expect(result.length).toBeGreaterThan(0);
  });

  it("findet Gerichte nach Bundesland", () => {
    const result = sucheArbeitsgerichte("Bayern");
    expect(result.length).toBeGreaterThan(5);
  });

  it("gibt leeres Array bei keinem Treffer zurueck", () => {
    const result = sucheArbeitsgerichte("xyznonexistent");
    expect(result).toHaveLength(0);
  });

  it("ist case-insensitive", () => {
    const result1 = sucheArbeitsgerichte("berlin");
    const result2 = sucheArbeitsgerichte("BERLIN");
    expect(result1.length).toBe(result2.length);
  });
});

describe("findeZustaendigeGerichte", () => {
  it("findet Gerichte fuer Berlin (PLZ 10)", () => {
    const result = findeZustaendigeGerichte("10785");
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result.some((g) => g.name.includes("Berlin"))).toBe(true);
  });

  it("findet Gerichte fuer Muenchen (PLZ 80)", () => {
    const result = findeZustaendigeGerichte("80797");
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result.some((g) => g.name.includes("Muenchen"))).toBe(true);
  });

  it("findet Gerichte fuer Buxtehude-Gegend (PLZ 21)", () => {
    const result = findeZustaendigeGerichte("21614");
    expect(result.length).toBeGreaterThanOrEqual(1);
    // PLZ 21 sollte Hamburg, Stade oder Lueneburg zeigen
    const namen = result.map((g) => g.name);
    expect(
      namen.some((n) => n.includes("Hamburg") || n.includes("Stade") || n.includes("Lueneburg"))
    ).toBe(true);
  });

  it("akzeptiert auch 2-stelligen Praefix", () => {
    const result = findeZustaendigeGerichte("10");
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  it("gibt leeres Array fuer zu kurzen Input zurueck", () => {
    expect(findeZustaendigeGerichte("1")).toHaveLength(0);
    expect(findeZustaendigeGerichte("")).toHaveLength(0);
  });

  it("deckt die gaengigsten PLZ-Bereiche ab", () => {
    // Stichproben fuer verschiedene Regionen
    const testCases = [
      { plz: "01", region: "Sachsen/Dresden" },
      { plz: "10", region: "Berlin" },
      { plz: "20", region: "Hamburg" },
      { plz: "30", region: "Hannover" },
      { plz: "40", region: "Duesseldorf" },
      { plz: "50", region: "Koeln" },
      { plz: "60", region: "Frankfurt" },
      { plz: "70", region: "Stuttgart" },
      { plz: "80", region: "Muenchen" },
      { plz: "90", region: "Nuernberg" },
    ];

    for (const { plz, region } of testCases) {
      const result = findeZustaendigeGerichte(plz);
      expect(result.length, `Kein Gericht fuer PLZ ${plz} (${region})`).toBeGreaterThanOrEqual(1);
    }
  });
});
