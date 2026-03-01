import { describe, it, expect } from "vitest";
import { berechneKosten } from "../kosten-berechnung";

describe("berechneKosten", () => {
  it("berechnet Streitwert als 3x Bruttogehalt", () => {
    const result = berechneKosten(3000);
    expect(result.streitwert).toBe(9000);
  });

  it("berechnet Gerichtskosten als 2-fache Gebuehr", () => {
    const result = berechneKosten(3000);
    // Streitwert 9000 → einfache Gebuehr 245 → 2-fach = 490
    expect(result.einfacheGebuehr).toBe(245);
    expect(result.gerichtskosten).toBe(490);
  });

  it("setzt Vergleichskosten auf 0", () => {
    const result = berechneKosten(3000);
    expect(result.gerichtskostenVergleich).toBe(0);
  });

  it("berechnet korrekt fuer Mindestlohn-Gehalt", () => {
    const result = berechneKosten(2000);
    // Streitwert 6000 → einfache Gebuehr 182
    expect(result.streitwert).toBe(6000);
    expect(result.einfacheGebuehr).toBe(182);
    expect(result.gerichtskosten).toBe(364);
  });

  it("berechnet korrekt fuer hohes Gehalt", () => {
    const result = berechneKosten(10000);
    // Streitwert 30000 → einfache Gebuehr 449
    expect(result.streitwert).toBe(30000);
    expect(result.einfacheGebuehr).toBe(449);
    expect(result.gerichtskosten).toBe(898);
  });

  it("berechnet korrekt fuer sehr hohes Gehalt ueber 200.000 Streitwert", () => {
    const result = berechneKosten(80000);
    // Streitwert 240.000 → ueber Tabelle → letzte Gebuehr 1921
    expect(result.streitwert).toBe(240000);
    expect(result.einfacheGebuehr).toBe(1921);
    expect(result.gerichtskosten).toBe(3842);
  });

  it("berechnet korrekt fuer kleinstes Gehalt", () => {
    const result = berechneKosten(100);
    // Streitwert 300 → einfache Gebuehr 38 (erste Stufe bis 500)
    expect(result.streitwert).toBe(300);
    expect(result.einfacheGebuehr).toBe(38);
    expect(result.gerichtskosten).toBe(76);
  });

  it("enthaelt Hinweis-Text", () => {
    const result = berechneKosten(3000);
    expect(result.hinweis).toContain("Vergleich");
    expect(result.hinweis).toContain("§ 12a ArbGG");
  });
});
