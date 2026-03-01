import { Arbeitsgericht } from "@/types/klage";

/**
 * Alle Arbeitsgerichte in Deutschland (106 Standorte).
 * Sortiert nach Bundesland, dann alphabetisch nach Ort.
 *
 * zustaendigePlzBereiche: 2-stellige PLZ-Praefixe, fuer die das Gericht
 * (mit)zustaendig sein kann. Dient als Vorschlag -- die exakte Zustaendigkeit
 * haengt vom konkreten 5-stelligen PLZ-Bezirk ab.
 *
 * Quellen: Justizportale der Bundeslaender, Stand 2025.
 * HINWEIS: Fax-Nummern koennen sich aendern. Bei fristgebundener
 * Nutzung sollte die Nummer beim Gericht verifiziert werden.
 */
export const arbeitsgerichte: Arbeitsgericht[] = [
  // === BADEN-WUERTTEMBERG (9) ===
  { id: "ag-freiburg", name: "Arbeitsgericht Freiburg", strasse: "Habsburgerstr. 103", plz: "79104", ort: "Freiburg i.Br.", fax: "0761 7080-40", telefon: "0761 7080-201", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["77", "78", "79"] },
  { id: "ag-heilbronn", name: "Arbeitsgericht Heilbronn", strasse: "Paulinenstr. 18", plz: "74076", ort: "Heilbronn", fax: "07131 1232-244", telefon: "07131 1232-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["74"] },
  { id: "ag-karlsruhe", name: "Arbeitsgericht Karlsruhe", strasse: "Ritterstraße 12", plz: "76133", ort: "Karlsruhe", fax: "0721 175-2525", telefon: "0721 175-2500", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["76"] },
  { id: "ag-loerrach", name: "Arbeitsgericht Lörrach", strasse: "Weinbrennerstraße 5", plz: "79539", ort: "Lörrach", fax: "07621 9247-20", telefon: "07621 9247-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["79"] },
  { id: "ag-mannheim", name: "Arbeitsgericht Mannheim", strasse: "E 7, 21", plz: "68159", ort: "Mannheim", fax: "0621 292-1311", telefon: "0621 292-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["68", "69"] },
  { id: "ag-pforzheim", name: "Arbeitsgericht Pforzheim", strasse: "Simmlerstraße 9", plz: "75172", ort: "Pforzheim", fax: "07231 1658-309", telefon: "07231 1658-300", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["75"] },
  { id: "ag-reutlingen", name: "Arbeitsgericht Reutlingen", strasse: "Bismarckstr. 64", plz: "72764", ort: "Reutlingen", fax: "07121 940-3232", telefon: "07121 940-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["72"] },
  { id: "ag-stuttgart", name: "Arbeitsgericht Stuttgart", strasse: "Johannesstr. 86", plz: "70176", ort: "Stuttgart", fax: "0711 21852-100", telefon: "0711 21852-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["70", "71", "73"] },
  { id: "ag-ulm", name: "Arbeitsgericht Ulm", strasse: "Zeughausgasse 12", plz: "89073", ort: "Ulm", fax: "0731 189-2377", telefon: "0731 189-0", bundesland: "Baden-Württemberg", zustaendigePlzBereiche: ["88", "89"] },

  // === BAYERN (11) ===
  { id: "ag-augsburg", name: "Arbeitsgericht Augsburg", strasse: "Frohsinnstraße 2", plz: "86150", ort: "Augsburg", fax: "0821 57094000", telefon: "0821 71035-0", bundesland: "Bayern", zustaendigePlzBereiche: ["86", "87"] },
  { id: "ag-bamberg", name: "Arbeitsgericht Bamberg", strasse: "Willy-Lessing-Str. 13", plz: "96047", ort: "Bamberg", fax: "", telefon: "0951 98042-10", bundesland: "Bayern", zustaendigePlzBereiche: ["96"] },
  { id: "ag-bayreuth", name: "Arbeitsgericht Bayreuth", strasse: "Ludwig-Thoma-Str. 7", plz: "95447", ort: "Bayreuth", fax: "0921 593-111", telefon: "0921 787284-0", bundesland: "Bayern", zustaendigePlzBereiche: ["95"] },
  { id: "ag-kempten", name: "Arbeitsgericht Kempten", strasse: "Königstraße 11", plz: "87435", ort: "Kempten (Allgäu)", fax: "0831 52212-13", telefon: "0831 52212-0", bundesland: "Bayern", zustaendigePlzBereiche: ["87", "88"] },
  { id: "ag-muenchen", name: "Arbeitsgericht München", strasse: "Winzererstraße 106", plz: "80797", ort: "München", fax: "089 30619-298", telefon: "089 30619-0", bundesland: "Bayern", zustaendigePlzBereiche: ["80", "81", "82", "83", "84", "85"] },
  { id: "ag-nuernberg", name: "Arbeitsgericht Nürnberg", strasse: "Roonstraße 20", plz: "90429", ort: "Nürnberg", fax: "0911 98236-2630", telefon: "0911 98236-06", bundesland: "Bayern", zustaendigePlzBereiche: ["90", "91"] },
  { id: "ag-passau", name: "Arbeitsgericht Passau", strasse: "Eggendobl 4", plz: "94034", ort: "Passau", fax: "0851 95949-149", telefon: "0851 95949-0", bundesland: "Bayern", zustaendigePlzBereiche: ["84", "94"] },
  { id: "ag-regensburg", name: "Arbeitsgericht Regensburg", strasse: "Bertoldstraße 2", plz: "93047", ort: "Regensburg", fax: "0941 5025-300", telefon: "0941 5025-0", bundesland: "Bayern", zustaendigePlzBereiche: ["93"] },
  { id: "ag-rosenheim", name: "Arbeitsgericht Rosenheim", strasse: "Rathausstraße 23", plz: "83022", ort: "Rosenheim", fax: "08031 305-193", telefon: "08031 22083-0", bundesland: "Bayern", zustaendigePlzBereiche: ["83"] },
  { id: "ag-weiden", name: "Arbeitsgericht Weiden", strasse: "Ledererstr. 9", plz: "92637", ort: "Weiden i.d.OPf.", fax: "0961 63143-190", telefon: "0961 63143-0", bundesland: "Bayern", zustaendigePlzBereiche: ["92"] },
  { id: "ag-wuerzburg", name: "Arbeitsgericht Würzburg", strasse: "Ludwigstr. 33", plz: "97070", ort: "Würzburg", fax: "0931 3087-303", telefon: "0931 3087-0", bundesland: "Bayern", zustaendigePlzBereiche: ["63", "97"] },

  // === BERLIN (1) ===
  { id: "ag-berlin", name: "Arbeitsgericht Berlin", strasse: "Magdeburger Platz 1", plz: "10785", ort: "Berlin", fax: "030 90171-222", telefon: "030 90171-0", bundesland: "Berlin", zustaendigePlzBereiche: ["10", "12", "13", "14"] },

  // === BRANDENBURG (4) ===
  { id: "ag-brandenburg", name: "Arbeitsgericht Brandenburg an der Havel", strasse: "Magdeburger Straße 51", plz: "14770", ort: "Brandenburg a.d.H.", fax: "03381 398499", telefon: "03381 398400", bundesland: "Brandenburg", zustaendigePlzBereiche: ["14"] },
  { id: "ag-cottbus", name: "Arbeitsgericht Cottbus", strasse: "Vom-Stein-Straße 28", plz: "03050", ort: "Cottbus", fax: "0355 49913239", telefon: "0355 49913110", bundesland: "Brandenburg", zustaendigePlzBereiche: ["03"] },
  { id: "ag-frankfurt-oder", name: "Arbeitsgericht Frankfurt (Oder)", strasse: "Gartenstraße 3", plz: "15320", ort: "Frankfurt (Oder)", fax: "0335 606957110", telefon: "0335 6069570", bundesland: "Brandenburg", zustaendigePlzBereiche: ["15"] },
  { id: "ag-neuruppin", name: "Arbeitsgericht Neuruppin", strasse: "Karl-Liebknecht-Straße 28", plz: "16816", ort: "Neuruppin", fax: "03391 458530", telefon: "03391 458500", bundesland: "Brandenburg", zustaendigePlzBereiche: ["16", "17"] },

  // === BREMEN (1) ===
  { id: "ag-bremen", name: "Arbeitsgericht Bremen-Bremerhaven", strasse: "Am Wall 198", plz: "28195", ort: "Bremen", fax: "0421 361-5453", telefon: "0421 361-25065", bundesland: "Bremen", zustaendigePlzBereiche: ["27", "28"] },

  // === HAMBURG (1) ===
  { id: "ag-hamburg", name: "Arbeitsgericht Hamburg", strasse: "Osterbekstraße 96", plz: "22083", ort: "Hamburg", fax: "040 4279-62804", telefon: "040 42863-5665", bundesland: "Hamburg", zustaendigePlzBereiche: ["20", "21", "22"] },

  // === HESSEN (7) ===
  { id: "ag-darmstadt", name: "Arbeitsgericht Darmstadt", strasse: "Steubenplatz 14", plz: "64293", ort: "Darmstadt", fax: "0611 32761-8545", telefon: "06151 80403", bundesland: "Hessen", zustaendigePlzBereiche: ["64"] },
  { id: "ag-frankfurt", name: "Arbeitsgericht Frankfurt am Main", strasse: "Gutleutstraße 130", plz: "60327", ort: "Frankfurt am Main", fax: "0611 32761-8540", telefon: "069 15047-0", bundesland: "Hessen", zustaendigePlzBereiche: ["60", "61", "63"] },
  { id: "ag-fulda", name: "Arbeitsgericht Fulda", strasse: "Am Hopfengarten 3", plz: "36037", ort: "Fulda", fax: "0611 32761-8541", telefon: "0661 9242500", bundesland: "Hessen", zustaendigePlzBereiche: ["36"] },
  { id: "ag-giessen", name: "Arbeitsgericht Gießen", strasse: "Aulweg 45", plz: "35392", ort: "Gießen", fax: "0611 32761-8510", telefon: "0641 6077-0", bundesland: "Hessen", zustaendigePlzBereiche: ["35"] },
  { id: "ag-kassel", name: "Arbeitsgericht Kassel", strasse: "Heerstraße 6", plz: "34119", ort: "Kassel", fax: "0611 32761-8544", telefon: "0561 28770-0", bundesland: "Hessen", zustaendigePlzBereiche: ["34"] },
  { id: "ag-offenbach", name: "Arbeitsgericht Offenbach am Main", strasse: "Kaiserstraße 16-18", plz: "63065", ort: "Offenbach am Main", fax: "0611 32761-8542", telefon: "069 8057-3161", bundesland: "Hessen", zustaendigePlzBereiche: ["63"] },
  { id: "ag-wiesbaden", name: "Arbeitsgericht Wiesbaden", strasse: "Mainzer Straße 124", plz: "65189", ort: "Wiesbaden", fax: "0611 32761-8543", telefon: "0611 3261-0", bundesland: "Hessen", zustaendigePlzBereiche: ["65"] },

  // === MECKLENBURG-VORPOMMERN (3) ===
  { id: "ag-rostock", name: "Arbeitsgericht Rostock", strasse: "August-Bebel-Straße 15", plz: "18055", ort: "Rostock", fax: "0381 241-5224", telefon: "0381 241-0", bundesland: "Mecklenburg-Vorpommern", zustaendigePlzBereiche: ["17", "18"] },
  { id: "ag-schwerin", name: "Arbeitsgericht Schwerin", strasse: "Wismarsche Straße 323b", plz: "19055", ort: "Schwerin", fax: "0385 5404-5116", telefon: "0385 5404-0", bundesland: "Mecklenburg-Vorpommern", zustaendigePlzBereiche: ["19"] },
  { id: "ag-stralsund", name: "Arbeitsgericht Stralsund", strasse: "Frankendamm 17", plz: "18439", ort: "Stralsund", fax: "03831 205-813", telefon: "03831 205-0", bundesland: "Mecklenburg-Vorpommern", zustaendigePlzBereiche: ["17", "18"] },

  // === NIEDERSACHSEN (15) ===
  { id: "ag-braunschweig", name: "Arbeitsgericht Braunschweig", strasse: "Grünewaldstraße 11A", plz: "38104", ort: "Braunschweig", fax: "05141 5937-32500", telefon: "0531 238500", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["38"] },
  { id: "ag-celle", name: "Arbeitsgericht Celle", strasse: "Im Werder 11", plz: "29221", ort: "Celle", fax: "05141 9246-18", telefon: "05141 9246-0", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["29"] },
  { id: "ag-emden", name: "Arbeitsgericht Emden", strasse: "Schweckendieckplatz 2", plz: "26721", ort: "Emden", fax: "05141 5937-33800", telefon: "04921 951700", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["26"] },
  { id: "ag-goettingen", name: "Arbeitsgericht Göttingen", strasse: "Maschmühlenweg 11", plz: "37073", ort: "Göttingen", fax: "05141 5937-33400", telefon: "0551 403-2110", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["37"] },
  { id: "ag-hameln", name: "Arbeitsgericht Hameln", strasse: "Zehnthof 1", plz: "31785", ort: "Hameln", fax: "05151 796-610", telefon: "05151 796-600", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["31"] },
  { id: "ag-hannover", name: "Arbeitsgericht Hannover", strasse: "Leonhardtstraße 15", plz: "30175", ort: "Hannover", fax: "05141 5937-31200", telefon: "0511 89750-0", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["30"] },
  { id: "ag-hildesheim", name: "Arbeitsgericht Hildesheim", strasse: "Otto-Franzius-Str. 2", plz: "31137", ort: "Hildesheim", fax: "05141 5937-34300", telefon: "05121 9137-5", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["31"] },
  { id: "ag-lingen", name: "Arbeitsgericht Lingen (Ems)", strasse: "Am Wall Süd 18", plz: "49808", ort: "Lingen (Ems)", fax: "05141 5937-33600", telefon: "0591 912140", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["49"] },
  { id: "ag-lueneburg", name: "Arbeitsgericht Lüneburg", strasse: "Adolph-Kolping-Str. 2", plz: "21337", ort: "Lüneburg", fax: "05141 5937-32900", telefon: "04131 8545540", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["21", "29"] },
  { id: "ag-nienburg", name: "Arbeitsgericht Nienburg (Weser)", strasse: "Berliner Ring 98", plz: "31582", ort: "Nienburg (Weser)", fax: "05141 5937-34500", telefon: "05021 6075-400", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["31"] },
  { id: "ag-oldenburg", name: "Arbeitsgericht Oldenburg", strasse: "Bahnhofstraße 13", plz: "26122", ort: "Oldenburg", fax: "05141 5937-32100", telefon: "0441 2206500", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["26", "27"] },
  { id: "ag-osnabrueck", name: "Arbeitsgericht Osnabrück", strasse: "Hakenstraße 15", plz: "49074", ort: "Osnabrück", fax: "05141 5937-34200", telefon: "0541 314-03", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["49"] },
  { id: "ag-stade", name: "Arbeitsgericht Stade", strasse: "Ritterstraße 2", plz: "21682", ort: "Stade", fax: "05141 5937-32000", telefon: "04141 107-0", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["21", "27"] },
  { id: "ag-verden", name: "Arbeitsgericht Verden (Aller)", strasse: "Bürgermeister-Münchmeyer-Str. 4", plz: "27283", ort: "Verden (Aller)", fax: "05141 5937-33200", telefon: "04231 28310", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["27", "28"] },
  { id: "ag-wilhelmshaven", name: "Arbeitsgericht Wilhelmshaven", strasse: "Marktstr. 15-17", plz: "26382", ort: "Wilhelmshaven", fax: "05141 5937-33900", telefon: "04421 7580-400", bundesland: "Niedersachsen", zustaendigePlzBereiche: ["26"] },

  // === NORDRHEIN-WESTFALEN (30) ===
  { id: "ag-aachen", name: "Arbeitsgericht Aachen", strasse: "Adalbertsteinweg 92", plz: "52070", ort: "Aachen", fax: "0241 9425-80155", telefon: "0241 9425-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["52"] },
  { id: "ag-arnsberg", name: "Arbeitsgericht Arnsberg", strasse: "Eichholzstraße 4", plz: "59821", ort: "Arnsberg", fax: "02931 804-833", telefon: "02931 804-6", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["59"] },
  { id: "ag-bielefeld", name: "Arbeitsgericht Bielefeld", strasse: "Gerichtstraße 6", plz: "33602", ort: "Bielefeld", fax: "0521 549-1707", telefon: "0521 549-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["33"] },
  { id: "ag-bocholt", name: "Arbeitsgericht Bocholt", strasse: "Benölkenplatz 2", plz: "46399", ort: "Bocholt", fax: "02871 295-1111", telefon: "02871 295-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["46"] },
  { id: "ag-bochum", name: "Arbeitsgericht Bochum", strasse: "Josef-Neuberger-Straße 1", plz: "44787", ort: "Bochum", fax: "", telefon: "0234 967-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["44"] },
  { id: "ag-bonn", name: "Arbeitsgericht Bonn", strasse: "Kreuzbergweg 5", plz: "53115", ort: "Bonn", fax: "0228 692381", telefon: "0228 98569-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["53"] },
  { id: "ag-detmold", name: "Arbeitsgericht Detmold", strasse: "Richthofenstraße 3", plz: "32756", ort: "Detmold", fax: "05231 704-406", telefon: "05231 704-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["32"] },
  { id: "ag-dortmund", name: "Arbeitsgericht Dortmund", strasse: "Ruhrallee 1-3", plz: "44139", ort: "Dortmund", fax: "0231 5415-519", telefon: "0231 5415-1", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["44"] },
  { id: "ag-duesseldorf", name: "Arbeitsgericht Düsseldorf", strasse: "Ludwig-Erhard-Allee 21", plz: "40227", ort: "Düsseldorf", fax: "0211 7770-2299", telefon: "0211 7770-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["40"] },
  { id: "ag-duisburg", name: "Arbeitsgericht Duisburg", strasse: "Aakerfährstraße 40", plz: "47058", ort: "Duisburg", fax: "0203 3005-262", telefon: "0203 3005-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["47"] },
  { id: "ag-essen", name: "Arbeitsgericht Essen", strasse: "Zweigertstraße 52", plz: "45130", ort: "Essen", fax: "0201 803-4500", telefon: "0201 803-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["45"] },
  { id: "ag-gelsenkirchen", name: "Arbeitsgericht Gelsenkirchen", strasse: "Bochumer Str. 79", plz: "45886", ort: "Gelsenkirchen", fax: "0209 14899-799", telefon: "0209 14899-700", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["45"] },
  { id: "ag-hagen", name: "Arbeitsgericht Hagen", strasse: "Heinitzstraße 44", plz: "58097", ort: "Hagen", fax: "02331 985-453", telefon: "02331 985-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["58"] },
  { id: "ag-hamm", name: "Arbeitsgericht Hamm", strasse: "Marker Allee 94", plz: "59071", ort: "Hamm", fax: "02381 891-276", telefon: "02381 891-1", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["59"] },
  { id: "ag-herford", name: "Arbeitsgericht Herford", strasse: "Elverdisser Straße 12", plz: "32052", ort: "Herford", fax: "05221 1054-54", telefon: "05221 1054-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["32"] },
  { id: "ag-herne", name: "Arbeitsgericht Herne", strasse: "Schillerstraße 37-39", plz: "44623", ort: "Herne", fax: "02323 953250", telefon: "02323 9532-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["44"] },
  { id: "ag-iserlohn", name: "Arbeitsgericht Iserlohn", strasse: "Erich-Nörrenberg-Str. 7", plz: "58636", ort: "Iserlohn", fax: "02371 8255-99", telefon: "02371 8255-55", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["58"] },
  { id: "ag-koeln", name: "Arbeitsgericht Köln", strasse: "Blumenthalstr. 33", plz: "50670", ort: "Köln", fax: "0221 7740-240", telefon: "0221 7740-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["50", "51"] },
  { id: "ag-krefeld", name: "Arbeitsgericht Krefeld", strasse: "Preußenring 49", plz: "47798", ort: "Krefeld", fax: "02151 847-682", telefon: "02151 847-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["47"] },
  { id: "ag-minden", name: "Arbeitsgericht Minden", strasse: "Königswall 8", plz: "32423", ort: "Minden", fax: "0571 8886-235", telefon: "0571 8886-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["32"] },
  { id: "ag-moenchengladbach", name: "Arbeitsgericht Mönchengladbach", strasse: "Hohenzollernstraße 155", plz: "41061", ort: "Mönchengladbach", fax: "02161 276-768", telefon: "02161 276-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["41"] },
  { id: "ag-muenster", name: "Arbeitsgericht Münster", strasse: "Alter Steinweg 45", plz: "48143", ort: "Münster", fax: "0251 97413-49", telefon: "0251 97413-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["48"] },
  { id: "ag-oberhausen", name: "Arbeitsgericht Oberhausen", strasse: "Friedrich-List-Straße 18", plz: "46045", ort: "Oberhausen", fax: "0208 85745-33", telefon: "0208 85745-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["46"] },
  { id: "ag-paderborn", name: "Arbeitsgericht Paderborn", strasse: "Grevestraße 1", plz: "33102", ort: "Paderborn", fax: "05251 69162-30", telefon: "05251 69162-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["33"] },
  { id: "ag-rheine", name: "Arbeitsgericht Rheine", strasse: "Dutumer Straße 5", plz: "48431", ort: "Rheine", fax: "05971 9271-50", telefon: "05971 9271-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["48"] },
  { id: "ag-siegburg", name: "Arbeitsgericht Siegburg", strasse: "Neue Poststraße 16", plz: "53721", ort: "Siegburg", fax: "02241 52657", telefon: "02241 305-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["53"] },
  { id: "ag-siegen", name: "Arbeitsgericht Siegen", strasse: "Koblenzer Straße 7", plz: "57072", ort: "Siegen", fax: "0271 384561-111", telefon: "0271 384561-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["57"] },
  { id: "ag-solingen", name: "Arbeitsgericht Solingen", strasse: "Wupperstraße 32", plz: "42651", ort: "Solingen", fax: "0212 2809-61", telefon: "0212 2809-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["42"] },
  { id: "ag-wesel", name: "Arbeitsgericht Wesel", strasse: "Ritterstraße 1", plz: "46483", ort: "Wesel", fax: "0281 33891-44", telefon: "0281 33891-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["46", "47"] },
  { id: "ag-wuppertal", name: "Arbeitsgericht Wuppertal", strasse: "Eiland 2", plz: "42103", ort: "Wuppertal", fax: "0202 498-9400", telefon: "0202 498-0", bundesland: "Nordrhein-Westfalen", zustaendigePlzBereiche: ["42"] },

  // === RHEINLAND-PFALZ (5) ===
  { id: "ag-kaiserslautern", name: "Arbeitsgericht Kaiserslautern", strasse: "Bahnhofstraße 24", plz: "67655", ort: "Kaiserslautern", fax: "0631 3721-510", telefon: "0631 3721-0", bundesland: "Rheinland-Pfalz", zustaendigePlzBereiche: ["66", "67"] },
  { id: "ag-koblenz", name: "Arbeitsgericht Koblenz", strasse: "Deinhardpassage 1", plz: "56068", ort: "Koblenz", fax: "0261 1307-28510", telefon: "0261 1307-0", bundesland: "Rheinland-Pfalz", zustaendigePlzBereiche: ["53", "56", "57"] },
  { id: "ag-ludwigshafen", name: "Arbeitsgericht Ludwigshafen am Rhein", strasse: "Wredestraße 6", plz: "67059", ort: "Ludwigshafen am Rhein", fax: "0621 59605-30", telefon: "0621 59605-0", bundesland: "Rheinland-Pfalz", zustaendigePlzBereiche: ["67", "68"] },
  { id: "ag-mainz", name: "Arbeitsgericht Mainz", strasse: "Ernst-Ludwig-Straße 6-8", plz: "55116", ort: "Mainz", fax: "06131 141-9773", telefon: "06131 141-9750", bundesland: "Rheinland-Pfalz", zustaendigePlzBereiche: ["55", "65"] },
  { id: "ag-trier", name: "Arbeitsgericht Trier", strasse: "Dietrichstraße 13", plz: "54290", ort: "Trier", fax: "0651 466-7900", telefon: "0651 466-0", bundesland: "Rheinland-Pfalz", zustaendigePlzBereiche: ["54"] },

  // === SAARLAND (1) ===
  { id: "ag-saarbruecken", name: "Arbeitsgericht Saarbrücken", strasse: "Hardenbergstraße 3", plz: "66119", ort: "Saarbrücken", fax: "0681 501-3648", telefon: "0681 501-05", bundesland: "Saarland", zustaendigePlzBereiche: ["66"] },

  // === SACHSEN (5) ===
  { id: "ag-bautzen", name: "Arbeitsgericht Bautzen", strasse: "Lessingstraße 7", plz: "02625", ort: "Bautzen", fax: "03591 361-333", telefon: "03591 361-0", bundesland: "Sachsen", zustaendigePlzBereiche: ["02"] },
  { id: "ag-chemnitz", name: "Arbeitsgericht Chemnitz", strasse: "Zwickauer Straße 54", plz: "09112", ort: "Chemnitz", fax: "0371 453-7157", telefon: "0371 453-7101", bundesland: "Sachsen", zustaendigePlzBereiche: ["09"] },
  { id: "ag-dresden", name: "Arbeitsgericht Dresden", strasse: "Hans-Oster-Straße 4", plz: "01099", ort: "Dresden", fax: "0351 446-5205", telefon: "0351 446-0", bundesland: "Sachsen", zustaendigePlzBereiche: ["01"] },
  { id: "ag-leipzig", name: "Arbeitsgericht Leipzig", strasse: "Erich-Weinert-Straße 18", plz: "04105", ort: "Leipzig", fax: "0341 5956-849", telefon: "0341 5956-0", bundesland: "Sachsen", zustaendigePlzBereiche: ["04"] },
  { id: "ag-zwickau", name: "Arbeitsgericht Zwickau", strasse: "Äußere Dresdner Straße 15", plz: "08066", ort: "Zwickau", fax: "0375 421222", telefon: "0375 4210", bundesland: "Sachsen", zustaendigePlzBereiche: ["08"] },

  // === SACHSEN-ANHALT (4) ===
  { id: "ag-dessau", name: "Arbeitsgericht Dessau-Roßlau", strasse: "Willy-Lohmann-Str. 29", plz: "06844", ort: "Dessau-Roßlau", fax: "0340 2021600", telefon: "0340 2020", bundesland: "Sachsen-Anhalt", zustaendigePlzBereiche: ["06"] },
  { id: "ag-halle", name: "Arbeitsgericht Halle", strasse: "Thüringer Str. 16", plz: "06112", ort: "Halle (Saale)", fax: "0345 2202045", telefon: "0345 2200", bundesland: "Sachsen-Anhalt", zustaendigePlzBereiche: ["06"] },
  { id: "ag-magdeburg", name: "Arbeitsgericht Magdeburg", strasse: "Breiter Weg 203-206", plz: "39104", ort: "Magdeburg", fax: "0391 6065024", telefon: "0391 6060", bundesland: "Sachsen-Anhalt", zustaendigePlzBereiche: ["38", "39"] },
  { id: "ag-stendal", name: "Arbeitsgericht Stendal", strasse: "Scharnhorststr. 42", plz: "39576", ort: "Stendal", fax: "03931 585100", telefon: "03931 585000", bundesland: "Sachsen-Anhalt", zustaendigePlzBereiche: ["29", "39"] },

  // === SCHLESWIG-HOLSTEIN (5) ===
  { id: "ag-elmshorn", name: "Arbeitsgericht Elmshorn", strasse: "Kurt-Wagener-Straße 9", plz: "25337", ort: "Elmshorn", fax: "04121 84728", telefon: "04121 4866-0", bundesland: "Schleswig-Holstein", zustaendigePlzBereiche: ["22", "25"] },
  { id: "ag-flensburg", name: "Arbeitsgericht Flensburg", strasse: "Südergraben 22", plz: "24937", ort: "Flensburg", fax: "0461 89386", telefon: "0461 89382", bundesland: "Schleswig-Holstein", zustaendigePlzBereiche: ["24", "25"] },
  { id: "ag-kiel", name: "Arbeitsgericht Kiel", strasse: "Deliusstraße 22", plz: "24114", ort: "Kiel", fax: "0431 604-4000", telefon: "0431 604-0", bundesland: "Schleswig-Holstein", zustaendigePlzBereiche: ["24"] },
  { id: "ag-luebeck", name: "Arbeitsgericht Lübeck", strasse: "Neustraße 2a", plz: "23568", ort: "Lübeck", fax: "0451 38978-50", telefon: "0451 38978-0", bundesland: "Schleswig-Holstein", zustaendigePlzBereiche: ["23"] },
  { id: "ag-neumuenster", name: "Arbeitsgericht Neumünster", strasse: "Gartenstraße 24", plz: "24534", ort: "Neumünster", fax: "04321 48310", telefon: "04321 40970", bundesland: "Schleswig-Holstein", zustaendigePlzBereiche: ["24", "25"] },

  // === THUERINGEN (4) ===
  { id: "ag-erfurt", name: "Arbeitsgericht Erfurt", strasse: "Rudolfstraße 46", plz: "99092", ort: "Erfurt", fax: "0361 573559395", telefon: "0361 573555001", bundesland: "Thüringen", zustaendigePlzBereiche: ["99"] },
  { id: "ag-gera", name: "Arbeitsgericht Gera", strasse: "Schlossstraße 24", plz: "07545", ort: "Gera", fax: "0361 573543777", telefon: "0361 573544000", bundesland: "Thüringen", zustaendigePlzBereiche: ["04", "07"] },
  { id: "ag-nordhausen", name: "Arbeitsgericht Nordhausen", strasse: "Käthe-Kollwitz-Straße 1b", plz: "99734", ort: "Nordhausen", fax: "03631 4769-77", telefon: "03631 4769-0", bundesland: "Thüringen", zustaendigePlzBereiche: ["37", "99"] },
  { id: "ag-suhl", name: "Arbeitsgericht Suhl", strasse: "Marktplatz 2", plz: "98527", ort: "Suhl", fax: "03681 375-328", telefon: "03681 375-0", bundesland: "Thüringen", zustaendigePlzBereiche: ["96", "98"] },
];

export function getArbeitsgerichtById(
  id: string
): Arbeitsgericht | undefined {
  return arbeitsgerichte.find((g) => g.id === id);
}

export function sucheArbeitsgerichte(suchbegriff: string): Arbeitsgericht[] {
  const lower = suchbegriff.toLowerCase();
  return arbeitsgerichte.filter(
    (g) =>
      g.name.toLowerCase().includes(lower) ||
      g.ort.toLowerCase().includes(lower) ||
      g.plz.startsWith(lower) ||
      g.bundesland.toLowerCase().includes(lower)
  );
}

/**
 * Findet Arbeitsgerichte, die fuer einen PLZ-Bereich zustaendig sein koennten.
 * Nimmt eine 5-stellige PLZ oder einen 2-stelligen Praefix entgegen.
 */
export function findeZustaendigeGerichte(plz: string): Arbeitsgericht[] {
  const prefix = plz.slice(0, 2);
  if (prefix.length < 2) return [];
  return arbeitsgerichte.filter((g) =>
    g.zustaendigePlzBereiche.includes(prefix)
  );
}
