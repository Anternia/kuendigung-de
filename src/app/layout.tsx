import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kuendigung.de";

export const metadata: Metadata = {
  title: {
    default: "kuendigung.de - Kuendigungsschutzklage einfach erstellen",
    template: "%s | kuendigung.de",
  },
  description:
    "Erstellen Sie Ihre Kuendigungsschutzklage einfach und rechtssicher. Ohne Anwalt, innerhalb der 3-Wochen-Frist. Kostenloser Klageschrift-Generator.",
  keywords: [
    "Kuendigungsschutzklage",
    "Kuendigung",
    "Arbeitsgericht",
    "Klageschrift",
    "Arbeitsrecht",
    "Kuendigungsschutz",
  ],
  robots: "index, follow",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "kuendigung.de",
    title: "kuendigung.de - Kuendigungsschutzklage einfach erstellen",
    description:
      "Erstellen Sie Ihre Kuendigungsschutzklage einfach und rechtssicher. Ohne Anwalt, innerhalb der 3-Wochen-Frist.",
  },
  twitter: {
    card: "summary",
    title: "kuendigung.de - Kuendigungsschutzklage einfach erstellen",
    description:
      "Kuendigungsschutzklage ohne Anwalt erstellen. Kostenloser Klageschrift-Generator.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:m-2 focus:rounded-md"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
