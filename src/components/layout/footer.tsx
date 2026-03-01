import Link from "next/link";
import { Scale } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">kuendigung.de</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Erstellen Sie Ihre Kündigungsschutzklage einfach und schnell --
              ohne Anwalt.
            </p>
          </div>

          {/* Informationen */}
          <div>
            <h3 className="text-sm font-semibold">Informationen</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/so-funktioniert-es"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  So funktioniert es
                </Link>
              </li>
              <li>
                <Link
                  href="/kosten"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Kosten
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Häufige Fragen
                </Link>
              </li>
              <li>
                <Link
                  href="/checkliste"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Checkliste
                </Link>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-sm font-semibold">Service</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/klage-erstellen"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Klage erstellen
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold">Rechtliches</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} kuendigung.de. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            kuendigung.de ersetzt keine Rechtsberatung.
          </p>
        </div>
      </div>
    </footer>
  );
}
