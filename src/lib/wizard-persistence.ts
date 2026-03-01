import type { KlageFormData } from "@/types/klage";

const STORAGE_KEY = "klage-wizard-draft";
const CURRENT_VERSION = 1;
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 Tage

interface WizardDraft {
  version: number;
  timestamp: number;
  schritt: number;
  formData: KlageFormData;
}

export function saveDraft(formData: KlageFormData, schritt: number): void {
  try {
    const draft: WizardDraft = {
      version: CURRENT_VERSION,
      timestamp: Date.now(),
      schritt,
      formData,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    // localStorage nicht verfuegbar (Private-Browsing etc.)
  }
}

export function loadDraft(): { formData: KlageFormData; schritt: number } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: WizardDraft = JSON.parse(raw);

    // Version pruefen
    if (parsed.version !== CURRENT_VERSION) {
      clearDraft();
      return null;
    }

    // Ablauf pruefen (7 Tage)
    if (Date.now() - parsed.timestamp > MAX_AGE_MS) {
      clearDraft();
      return null;
    }

    // Strukturpruefung: formData und schritt muessen vorhanden sein
    if (!parsed.formData || typeof parsed.schritt !== "number") {
      clearDraft();
      return null;
    }

    return { formData: parsed.formData, schritt: parsed.schritt };
  } catch {
    // Korrupte Daten oder localStorage nicht verfuegbar
    clearDraft();
    return null;
  }
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage nicht verfuegbar
  }
}
