import { describe, it, expect, beforeEach, vi } from "vitest";
import { saveDraft, loadDraft, clearDraft } from "../wizard-persistence";
import { KuendigungArt } from "@/types/klage";
import type { KlageFormData } from "@/types/klage";

const mockFormData: KlageFormData = {
  klaeger: { name: "Max Mustermann", strasse: "Musterstr. 1", plz: "10785", ort: "Berlin" },
  beklagter: { firma: "Test GmbH", strasse: "Teststr. 5", plz: "10115", ort: "Berlin", rechtsform: "GmbH", vertreter: "Hans Chef" },
  arbeitsverhaeltnis: { beschaeftigungBeginn: "2020-01-01", taetigkeit: "Entwickler", bruttoMonatsgehalt: 5000, arbeitsort: "Berlin" },
  kuendigung: { kuendigungDatum: "2025-01-15", zugangDatum: "2025-01-16", kuendigungArt: KuendigungArt.ORDENTLICH, beendigungDatum: "2025-04-30" },
  gericht: { arbeitsgerichtId: "ag-berlin" },
};

// localStorage Mock
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
    removeItem: vi.fn((key: string) => { delete store[key]; }),
    clear: vi.fn(() => { store = {}; }),
  };
})();

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock });

beforeEach(() => {
  localStorageMock.clear();
  vi.clearAllMocks();
});

describe("saveDraft / loadDraft / clearDraft", () => {
  it("speichert und laedt einen Draft korrekt", () => {
    saveDraft(mockFormData, 3);
    const result = loadDraft();

    expect(result).not.toBeNull();
    expect(result!.schritt).toBe(3);
    expect(result!.formData.klaeger.name).toBe("Max Mustermann");
    expect(result!.formData.beklagter.firma).toBe("Test GmbH");
  });

  it("gibt null zurueck wenn kein Draft vorhanden", () => {
    expect(loadDraft()).toBeNull();
  });

  it("loescht Draft mit clearDraft", () => {
    saveDraft(mockFormData, 2);
    clearDraft();
    expect(loadDraft()).toBeNull();
  });

  it("verwirft Draft bei falscher Version", () => {
    const invalidDraft = {
      version: 999,
      timestamp: Date.now(),
      schritt: 1,
      formData: mockFormData,
    };
    localStorageMock.setItem("klage-wizard-draft", JSON.stringify(invalidDraft));

    expect(loadDraft()).toBeNull();
  });

  it("verwirft abgelaufenen Draft (aelter als 7 Tage)", () => {
    const eightDaysAgo = Date.now() - 8 * 24 * 60 * 60 * 1000;
    const expiredDraft = {
      version: 1,
      timestamp: eightDaysAgo,
      schritt: 1,
      formData: mockFormData,
    };
    localStorageMock.setItem("klage-wizard-draft", JSON.stringify(expiredDraft));

    expect(loadDraft()).toBeNull();
  });

  it("verwirft korrupte Daten", () => {
    localStorageMock.setItem("klage-wizard-draft", "nicht-json{{{");

    expect(loadDraft()).toBeNull();
  });

  it("verwirft Draft ohne formData", () => {
    const invalid = {
      version: 1,
      timestamp: Date.now(),
      schritt: 1,
    };
    localStorageMock.setItem("klage-wizard-draft", JSON.stringify(invalid));

    expect(loadDraft()).toBeNull();
  });

  it("verwirft Draft ohne schritt", () => {
    const invalid = {
      version: 1,
      timestamp: Date.now(),
      formData: mockFormData,
    };
    localStorageMock.setItem("klage-wizard-draft", JSON.stringify(invalid));

    expect(loadDraft()).toBeNull();
  });
});
