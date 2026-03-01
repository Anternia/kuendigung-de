"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import type { KlageFormData } from "@/types/klage";
import { saveDraft, loadDraft, clearDraft } from "@/lib/wizard-persistence";

interface UseWizardPersistenceOptions {
  form: UseFormReturn<KlageFormData>;
  schritt: number;
  setSchritt: (s: number) => void;
}

interface UseWizardPersistenceReturn {
  wasRestored: boolean;
  dismissRestoredBanner: () => void;
  clearAndReset: () => void;
}

export function useWizardPersistence({
  form,
  schritt,
  setSchritt,
}: UseWizardPersistenceOptions): UseWizardPersistenceReturn {
  const [wasRestored, setWasRestored] = useState(false);
  const hasRestored = useRef(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Draft bei Mount restaurieren
  // Banner nur zeigen wenn der Nutzer aus einer neuen Session kommt
  // (Seite neu geladen / Tab geschlossen und wiedereroeffnet).
  // sessionStorage existiert nur innerhalb der aktuellen Browser-Session.
  useEffect(() => {
    if (hasRestored.current) return;
    hasRestored.current = true;

    const isActiveSession = sessionStorage.getItem("klage-wizard-active");
    const draft = loadDraft();

    if (draft) {
      form.reset(draft.formData);
      setSchritt(draft.schritt);
      // Banner nur zeigen wenn dies eine neue Session ist (Refresh / neuer Tab)
      if (!isActiveSession) {
        setWasRestored(true);
      }
    }

    sessionStorage.setItem("klage-wizard-active", "1");
  }, [form, setSchritt]);

  // Form-Aenderungen mit Debounce speichern
  useEffect(() => {
    const subscription = form.watch((formData) => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        saveDraft(formData as KlageFormData, schritt);
      }, 500);
    });

    return () => {
      subscription.unsubscribe();
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [form, schritt]);

  // Sofort speichern bei Schritt-Wechsel
  useEffect(() => {
    saveDraft(form.getValues(), schritt);
  }, [form, schritt]);

  const dismissRestoredBanner = useCallback(() => {
    setWasRestored(false);
  }, []);

  const clearAndReset = useCallback(() => {
    clearDraft();
    try { sessionStorage.removeItem("klage-wizard-active"); } catch {}
    form.reset();
    setSchritt(0);
    setWasRestored(false);
  }, [form, setSchritt]);

  return { wasRestored, dismissRestoredBanner, clearAndReset };
}
