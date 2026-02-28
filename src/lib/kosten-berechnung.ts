/**
 * Berechnet die voraussichtlichen Gerichtskosten einer Kuendigungsschutzklage.
 *
 * Streitwert = 3 Bruttomonatsgehaelter (§ 42 Abs. 2 GKG)
 * Gebuehren nach GKG Anlage 2 (Gebuehrentabelle)
 */

// Gebuehrentabelle GKG (vereinfacht, gaengige Streitwerte)
const gebuehrenTabelle: [number, number][] = [
  [500, 38],
  [1000, 58],
  [1500, 78],
  [2000, 98],
  [3000, 119],
  [4000, 140],
  [5000, 161],
  [6000, 182],
  [7000, 203],
  [8000, 224],
  [9000, 245],
  [10000, 266],
  [13000, 295],
  [16000, 324],
  [19000, 353],
  [22000, 382],
  [25000, 411],
  [30000, 449],
  [35000, 487],
  [40000, 525],
  [45000, 563],
  [50000, 601],
  [65000, 733],
  [80000, 865],
  [95000, 997],
  [110000, 1129],
  [125000, 1261],
  [140000, 1393],
  [155000, 1525],
  [170000, 1657],
  [185000, 1789],
  [200000, 1921],
];

function getEinfacheGebuehr(streitwert: number): number {
  for (const [grenze, gebuehr] of gebuehrenTabelle) {
    if (streitwert <= grenze) {
      return gebuehr;
    }
  }
  // Ueber 200.000: letzte bekannte Gebuehr verwenden
  return gebuehrenTabelle[gebuehrenTabelle.length - 1][1];
}

export interface Kostenberechnung {
  streitwert: number;
  einfacheGebuehr: number;
  gerichtskosten: number; // 2-fache Gebuehr bei Urteil
  gerichtskostenVergleich: number; // entfallen bei Vergleich
  hinweis: string;
}

export function berechneKosten(bruttoMonatsgehalt: number): Kostenberechnung {
  const streitwert = bruttoMonatsgehalt * 3;
  const einfacheGebuehr = getEinfacheGebuehr(streitwert);
  const gerichtskosten = einfacheGebuehr * 2;

  return {
    streitwert,
    einfacheGebuehr,
    gerichtskosten,
    gerichtskostenVergleich: 0,
    hinweis:
      "Bei einem Vergleich entfallen die Gerichtskosten. " +
      "Jede Partei traegt in erster Instanz ihre eigenen Anwaltskosten (§ 12a ArbGG). " +
      "Ein Gerichtskostenvorschuss ist nicht erforderlich.",
  };
}
