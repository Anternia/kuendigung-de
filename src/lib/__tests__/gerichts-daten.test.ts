import { describe, it, expect } from "vitest";
import {
  arbeitsgerichte,
  getArbeitsgerichtById,
  sucheArbeitsgerichte,
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
