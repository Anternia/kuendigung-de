import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/klage-erstellen/ergebnis"],
      },
    ],
    sitemap: "https://kuendigung.de/sitemap.xml",
  };
}
