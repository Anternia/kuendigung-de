import { describe, it, expect } from "vitest";
import { istFeiertag } from "../feiertage";

describe("istFeiertag", () => {
  it("erkennt Neujahr", () => {
    expect(istFeiertag(new Date(2025, 0, 1))).toBe(true);
    expect(istFeiertag(new Date(2026, 0, 1))).toBe(true);
  });

  it("erkennt Tag der Arbeit", () => {
    expect(istFeiertag(new Date(2025, 4, 1))).toBe(true);
  });

  it("erkennt Tag der Deutschen Einheit", () => {
    expect(istFeiertag(new Date(2025, 9, 3))).toBe(true);
  });

  it("erkennt 1. Weihnachtstag", () => {
    expect(istFeiertag(new Date(2025, 11, 25))).toBe(true);
  });

  it("erkennt 2. Weihnachtstag", () => {
    expect(istFeiertag(new Date(2025, 11, 26))).toBe(true);
  });

  it("erkennt Karfreitag (beweglich)", () => {
    // Karfreitag 2025: 18. April
    expect(istFeiertag(new Date(2025, 3, 18))).toBe(true);
  });

  it("erkennt Ostermontag (beweglich)", () => {
    // Ostermontag 2025: 21. April
    expect(istFeiertag(new Date(2025, 3, 21))).toBe(true);
  });

  it("erkennt Christi Himmelfahrt (beweglich)", () => {
    // Christi Himmelfahrt 2025: 29. Mai
    expect(istFeiertag(new Date(2025, 4, 29))).toBe(true);
  });

  it("erkennt Pfingstmontag (beweglich)", () => {
    // Pfingstmontag 2025: 9. Juni
    expect(istFeiertag(new Date(2025, 5, 9))).toBe(true);
  });

  it("erkennt normale Werktage als nicht-Feiertag", () => {
    expect(istFeiertag(new Date(2025, 1, 10))).toBe(false); // 10. Februar
    expect(istFeiertag(new Date(2025, 6, 15))).toBe(false); // 15. Juli
  });

  it("erkennt Silvester als keinen bundesweiten Feiertag", () => {
    expect(istFeiertag(new Date(2025, 11, 31))).toBe(false);
  });
});
