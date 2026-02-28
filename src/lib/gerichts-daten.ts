import { Arbeitsgericht } from "@/types/klage";

/**
 * Alle Arbeitsgerichte in Deutschland (106 Standorte).
 * Sortiert nach Bundesland, dann alphabetisch nach Ort.
 *
 * Quellen: Justizportale der Bundeslaender, Stand 2025.
 * HINWEIS: Fax-Nummern koennen sich aendern. Bei fristgebundener
 * Nutzung sollte die Nummer beim Gericht verifiziert werden.
 */
export const arbeitsgerichte: Arbeitsgericht[] = [
  // === BADEN-WUERTTEMBERG (9) ===
  { id: "ag-freiburg", name: "Arbeitsgericht Freiburg", strasse: "Habsburgerstr. 103", plz: "79104", ort: "Freiburg i.Br.", fax: "0761 7080-40", telefon: "0761 7080-201", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-heilbronn", name: "Arbeitsgericht Heilbronn", strasse: "Paulinenstr. 18", plz: "74076", ort: "Heilbronn", fax: "07131 1232-244", telefon: "07131 1232-0", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-karlsruhe", name: "Arbeitsgericht Karlsruhe", strasse: "Ritterstrasse 12", plz: "76133", ort: "Karlsruhe", fax: "0721 175-2525", telefon: "0721 175-2500", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-loerrach", name: "Arbeitsgericht Loerrach", strasse: "Weinbrennerstrasse 5", plz: "79539", ort: "Loerrach", fax: "07621 9247-20", telefon: "07621 9247-0", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-mannheim", name: "Arbeitsgericht Mannheim", strasse: "E 7, 21", plz: "68159", ort: "Mannheim", fax: "0621 292-1311", telefon: "0621 292-0", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-pforzheim", name: "Arbeitsgericht Pforzheim", strasse: "Simmlerstrasse 9", plz: "75172", ort: "Pforzheim", fax: "07231 1658-309", telefon: "07231 1658-300", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-reutlingen", name: "Arbeitsgericht Reutlingen", strasse: "Bismarckstr. 64", plz: "72764", ort: "Reutlingen", fax: "07121 940-3232", telefon: "07121 940-0", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-stuttgart", name: "Arbeitsgericht Stuttgart", strasse: "Johannesstr. 86", plz: "70176", ort: "Stuttgart", fax: "0711 21852-100", telefon: "0711 21852-0", bundesland: "Baden-Wuerttemberg" },
  { id: "ag-ulm", name: "Arbeitsgericht Ulm", strasse: "Zeughausgasse 12", plz: "89073", ort: "Ulm", fax: "0731 189-2377", telefon: "0731 189-0", bundesland: "Baden-Wuerttemberg" },

  // === BAYERN (11) ===
  { id: "ag-augsburg", name: "Arbeitsgericht Augsburg", strasse: "Frohsinnstrasse 2", plz: "86150", ort: "Augsburg", fax: "0821 57094000", telefon: "0821 71035-0", bundesland: "Bayern" },
  { id: "ag-bamberg", name: "Arbeitsgericht Bamberg", strasse: "Willy-Lessing-Str. 13", plz: "96047", ort: "Bamberg", fax: "", telefon: "0951 98042-10", bundesland: "Bayern" },
  { id: "ag-bayreuth", name: "Arbeitsgericht Bayreuth", strasse: "Ludwig-Thoma-Str. 7", plz: "95447", ort: "Bayreuth", fax: "0921 593-111", telefon: "0921 787284-0", bundesland: "Bayern" },
  { id: "ag-kempten", name: "Arbeitsgericht Kempten", strasse: "Koenigstrasse 11", plz: "87435", ort: "Kempten (Allgaeu)", fax: "0831 52212-13", telefon: "0831 52212-0", bundesland: "Bayern" },
  { id: "ag-muenchen", name: "Arbeitsgericht Muenchen", strasse: "Winzererstrasse 106", plz: "80797", ort: "Muenchen", fax: "089 30619-298", telefon: "089 30619-0", bundesland: "Bayern" },
  { id: "ag-nuernberg", name: "Arbeitsgericht Nuernberg", strasse: "Roonstrasse 20", plz: "90429", ort: "Nuernberg", fax: "0911 98236-2630", telefon: "0911 98236-06", bundesland: "Bayern" },
  { id: "ag-passau", name: "Arbeitsgericht Passau", strasse: "Eggendobl 4", plz: "94034", ort: "Passau", fax: "0851 95949-149", telefon: "0851 95949-0", bundesland: "Bayern" },
  { id: "ag-regensburg", name: "Arbeitsgericht Regensburg", strasse: "Bertoldstrasse 2", plz: "93047", ort: "Regensburg", fax: "0941 5025-300", telefon: "0941 5025-0", bundesland: "Bayern" },
  { id: "ag-rosenheim", name: "Arbeitsgericht Rosenheim", strasse: "Rathausstrasse 23", plz: "83022", ort: "Rosenheim", fax: "08031 305-193", telefon: "08031 22083-0", bundesland: "Bayern" },
  { id: "ag-weiden", name: "Arbeitsgericht Weiden", strasse: "Ledererstr. 9", plz: "92637", ort: "Weiden i.d.OPf.", fax: "0961 63143-190", telefon: "0961 63143-0", bundesland: "Bayern" },
  { id: "ag-wuerzburg", name: "Arbeitsgericht Wuerzburg", strasse: "Ludwigstr. 33", plz: "97070", ort: "Wuerzburg", fax: "0931 3087-303", telefon: "0931 3087-0", bundesland: "Bayern" },

  // === BERLIN (1) ===
  { id: "ag-berlin", name: "Arbeitsgericht Berlin", strasse: "Magdeburger Platz 1", plz: "10785", ort: "Berlin", fax: "030 90171-222", telefon: "030 90171-0", bundesland: "Berlin" },

  // === BRANDENBURG (4) ===
  { id: "ag-brandenburg", name: "Arbeitsgericht Brandenburg an der Havel", strasse: "Magdeburger Strasse 51", plz: "14770", ort: "Brandenburg a.d.H.", fax: "03381 398499", telefon: "03381 398400", bundesland: "Brandenburg" },
  { id: "ag-cottbus", name: "Arbeitsgericht Cottbus", strasse: "Vom-Stein-Strasse 28", plz: "03050", ort: "Cottbus", fax: "0355 49913239", telefon: "0355 49913110", bundesland: "Brandenburg" },
  { id: "ag-frankfurt-oder", name: "Arbeitsgericht Frankfurt (Oder)", strasse: "Gartenstrasse 3", plz: "15320", ort: "Frankfurt (Oder)", fax: "0335 606957110", telefon: "0335 6069570", bundesland: "Brandenburg" },
  { id: "ag-neuruppin", name: "Arbeitsgericht Neuruppin", strasse: "Karl-Liebknecht-Strasse 28", plz: "16816", ort: "Neuruppin", fax: "03391 458530", telefon: "03391 458500", bundesland: "Brandenburg" },

  // === BREMEN (1) ===
  { id: "ag-bremen", name: "Arbeitsgericht Bremen-Bremerhaven", strasse: "Am Wall 198", plz: "28195", ort: "Bremen", fax: "0421 361-5453", telefon: "0421 361-25065", bundesland: "Bremen" },

  // === HAMBURG (1) ===
  { id: "ag-hamburg", name: "Arbeitsgericht Hamburg", strasse: "Osterbekstrasse 96", plz: "22083", ort: "Hamburg", fax: "040 4279-62804", telefon: "040 42863-5665", bundesland: "Hamburg" },

  // === HESSEN (7) ===
  { id: "ag-darmstadt", name: "Arbeitsgericht Darmstadt", strasse: "Steubenplatz 14", plz: "64293", ort: "Darmstadt", fax: "0611 32761-8545", telefon: "06151 80403", bundesland: "Hessen" },
  { id: "ag-frankfurt", name: "Arbeitsgericht Frankfurt am Main", strasse: "Gutleutstrasse 130", plz: "60327", ort: "Frankfurt am Main", fax: "0611 32761-8540", telefon: "069 15047-0", bundesland: "Hessen" },
  { id: "ag-fulda", name: "Arbeitsgericht Fulda", strasse: "Am Hopfengarten 3", plz: "36037", ort: "Fulda", fax: "0611 32761-8541", telefon: "0661 9242500", bundesland: "Hessen" },
  { id: "ag-giessen", name: "Arbeitsgericht Giessen", strasse: "Aulweg 45", plz: "35392", ort: "Giessen", fax: "0611 32761-8510", telefon: "0641 6077-0", bundesland: "Hessen" },
  { id: "ag-kassel", name: "Arbeitsgericht Kassel", strasse: "Heerstrasse 6", plz: "34119", ort: "Kassel", fax: "0611 32761-8544", telefon: "0561 28770-0", bundesland: "Hessen" },
  { id: "ag-offenbach", name: "Arbeitsgericht Offenbach am Main", strasse: "Kaiserstrasse 16-18", plz: "63065", ort: "Offenbach am Main", fax: "0611 32761-8542", telefon: "069 8057-3161", bundesland: "Hessen" },
  { id: "ag-wiesbaden", name: "Arbeitsgericht Wiesbaden", strasse: "Mainzer Strasse 124", plz: "65189", ort: "Wiesbaden", fax: "0611 32761-8543", telefon: "0611 3261-0", bundesland: "Hessen" },

  // === MECKLENBURG-VORPOMMERN (3) ===
  { id: "ag-rostock", name: "Arbeitsgericht Rostock", strasse: "August-Bebel-Strasse 15", plz: "18055", ort: "Rostock", fax: "0381 241-5224", telefon: "0381 241-0", bundesland: "Mecklenburg-Vorpommern" },
  { id: "ag-schwerin", name: "Arbeitsgericht Schwerin", strasse: "Wismarsche Strasse 323b", plz: "19055", ort: "Schwerin", fax: "0385 5404-5116", telefon: "0385 5404-0", bundesland: "Mecklenburg-Vorpommern" },
  { id: "ag-stralsund", name: "Arbeitsgericht Stralsund", strasse: "Frankendamm 17", plz: "18439", ort: "Stralsund", fax: "03831 205-813", telefon: "03831 205-0", bundesland: "Mecklenburg-Vorpommern" },

  // === NIEDERSACHSEN (15) ===
  { id: "ag-braunschweig", name: "Arbeitsgericht Braunschweig", strasse: "Gruenewaldstrasse 11A", plz: "38104", ort: "Braunschweig", fax: "05141 5937-32500", telefon: "0531 238500", bundesland: "Niedersachsen" },
  { id: "ag-celle", name: "Arbeitsgericht Celle", strasse: "Im Werder 11", plz: "29221", ort: "Celle", fax: "05141 9246-18", telefon: "05141 9246-0", bundesland: "Niedersachsen" },
  { id: "ag-emden", name: "Arbeitsgericht Emden", strasse: "Schweckendieckplatz 2", plz: "26721", ort: "Emden", fax: "05141 5937-33800", telefon: "04921 951700", bundesland: "Niedersachsen" },
  { id: "ag-goettingen", name: "Arbeitsgericht Goettingen", strasse: "Maschmuhlenweg 11", plz: "37073", ort: "Goettingen", fax: "05141 5937-33400", telefon: "0551 403-2110", bundesland: "Niedersachsen" },
  { id: "ag-hameln", name: "Arbeitsgericht Hameln", strasse: "Zehnthof 1", plz: "31785", ort: "Hameln", fax: "05151 796-610", telefon: "05151 796-600", bundesland: "Niedersachsen" },
  { id: "ag-hannover", name: "Arbeitsgericht Hannover", strasse: "Leonhardtstrasse 15", plz: "30175", ort: "Hannover", fax: "05141 5937-31200", telefon: "0511 89750-0", bundesland: "Niedersachsen" },
  { id: "ag-hildesheim", name: "Arbeitsgericht Hildesheim", strasse: "Otto-Franzius-Str. 2", plz: "31137", ort: "Hildesheim", fax: "05141 5937-34300", telefon: "05121 9137-5", bundesland: "Niedersachsen" },
  { id: "ag-lingen", name: "Arbeitsgericht Lingen (Ems)", strasse: "Am Wall Sued 18", plz: "49808", ort: "Lingen (Ems)", fax: "05141 5937-33600", telefon: "0591 912140", bundesland: "Niedersachsen" },
  { id: "ag-lueneburg", name: "Arbeitsgericht Lueneburg", strasse: "Adolph-Kolping-Str. 2", plz: "21337", ort: "Lueneburg", fax: "05141 5937-32900", telefon: "04131 8545540", bundesland: "Niedersachsen" },
  { id: "ag-nienburg", name: "Arbeitsgericht Nienburg (Weser)", strasse: "Berliner Ring 98", plz: "31582", ort: "Nienburg (Weser)", fax: "05141 5937-34500", telefon: "05021 6075-400", bundesland: "Niedersachsen" },
  { id: "ag-oldenburg", name: "Arbeitsgericht Oldenburg", strasse: "Bahnhofstrasse 13", plz: "26122", ort: "Oldenburg", fax: "05141 5937-32100", telefon: "0441 2206500", bundesland: "Niedersachsen" },
  { id: "ag-osnabrueck", name: "Arbeitsgericht Osnabrueck", strasse: "Hakenstrasse 15", plz: "49074", ort: "Osnabrueck", fax: "05141 5937-34200", telefon: "0541 314-03", bundesland: "Niedersachsen" },
  { id: "ag-stade", name: "Arbeitsgericht Stade", strasse: "Ritterstrasse 2", plz: "21682", ort: "Stade", fax: "05141 5937-32000", telefon: "04141 107-0", bundesland: "Niedersachsen" },
  { id: "ag-verden", name: "Arbeitsgericht Verden (Aller)", strasse: "Buergermeister-Muenchmeyer-Str. 4", plz: "27283", ort: "Verden (Aller)", fax: "05141 5937-33200", telefon: "04231 28310", bundesland: "Niedersachsen" },
  { id: "ag-wilhelmshaven", name: "Arbeitsgericht Wilhelmshaven", strasse: "Marktstr. 15-17", plz: "26382", ort: "Wilhelmshaven", fax: "05141 5937-33900", telefon: "04421 7580-400", bundesland: "Niedersachsen" },

  // === NORDRHEIN-WESTFALEN (30) ===
  { id: "ag-aachen", name: "Arbeitsgericht Aachen", strasse: "Adalbertsteinweg 92", plz: "52070", ort: "Aachen", fax: "0241 9425-80155", telefon: "0241 9425-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-arnsberg", name: "Arbeitsgericht Arnsberg", strasse: "Eichholzstrasse 4", plz: "59821", ort: "Arnsberg", fax: "02931 804-833", telefon: "02931 804-6", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-bielefeld", name: "Arbeitsgericht Bielefeld", strasse: "Gerichtstrasse 6", plz: "33602", ort: "Bielefeld", fax: "0521 549-1707", telefon: "0521 549-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-bocholt", name: "Arbeitsgericht Bocholt", strasse: "Benoelkenplatz 2", plz: "46399", ort: "Bocholt", fax: "02871 295-1111", telefon: "02871 295-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-bochum", name: "Arbeitsgericht Bochum", strasse: "Josef-Neuberger-Strasse 1", plz: "44787", ort: "Bochum", fax: "", telefon: "0234 967-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-bonn", name: "Arbeitsgericht Bonn", strasse: "Kreuzbergweg 5", plz: "53115", ort: "Bonn", fax: "0228 692381", telefon: "0228 98569-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-detmold", name: "Arbeitsgericht Detmold", strasse: "Richthofenstrasse 3", plz: "32756", ort: "Detmold", fax: "05231 704-406", telefon: "05231 704-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-dortmund", name: "Arbeitsgericht Dortmund", strasse: "Ruhrallee 1-3", plz: "44139", ort: "Dortmund", fax: "0231 5415-519", telefon: "0231 5415-1", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-duesseldorf", name: "Arbeitsgericht Duesseldorf", strasse: "Ludwig-Erhard-Allee 21", plz: "40227", ort: "Duesseldorf", fax: "0211 7770-2299", telefon: "0211 7770-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-duisburg", name: "Arbeitsgericht Duisburg", strasse: "Aakerfaehrstrasse 40", plz: "47058", ort: "Duisburg", fax: "0203 3005-262", telefon: "0203 3005-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-essen", name: "Arbeitsgericht Essen", strasse: "Zweigertstrasse 52", plz: "45130", ort: "Essen", fax: "0201 803-4500", telefon: "0201 803-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-gelsenkirchen", name: "Arbeitsgericht Gelsenkirchen", strasse: "Bochumer Str. 79", plz: "45886", ort: "Gelsenkirchen", fax: "0209 14899-799", telefon: "0209 14899-700", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-hagen", name: "Arbeitsgericht Hagen", strasse: "Heinitzstrasse 44", plz: "58097", ort: "Hagen", fax: "02331 985-453", telefon: "02331 985-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-hamm", name: "Arbeitsgericht Hamm", strasse: "Marker Allee 94", plz: "59071", ort: "Hamm", fax: "02381 891-276", telefon: "02381 891-1", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-herford", name: "Arbeitsgericht Herford", strasse: "Elverdisser Strasse 12", plz: "32052", ort: "Herford", fax: "05221 1054-54", telefon: "05221 1054-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-herne", name: "Arbeitsgericht Herne", strasse: "Schillerstrasse 37-39", plz: "44623", ort: "Herne", fax: "02323 953250", telefon: "02323 9532-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-iserlohn", name: "Arbeitsgericht Iserlohn", strasse: "Erich-Noerrenberg-Str. 7", plz: "58636", ort: "Iserlohn", fax: "02371 8255-99", telefon: "02371 8255-55", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-koeln", name: "Arbeitsgericht Koeln", strasse: "Blumenthalstr. 33", plz: "50670", ort: "Koeln", fax: "0221 7740-240", telefon: "0221 7740-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-krefeld", name: "Arbeitsgericht Krefeld", strasse: "Preussenring 49", plz: "47798", ort: "Krefeld", fax: "02151 847-682", telefon: "02151 847-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-minden", name: "Arbeitsgericht Minden", strasse: "Koenigswall 8", plz: "32423", ort: "Minden", fax: "0571 8886-235", telefon: "0571 8886-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-moenchengladbach", name: "Arbeitsgericht Moenchengladbach", strasse: "Hohenzollernstrasse 155", plz: "41061", ort: "Moenchengladbach", fax: "02161 276-768", telefon: "02161 276-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-muenster", name: "Arbeitsgericht Muenster", strasse: "Alter Steinweg 45", plz: "48143", ort: "Muenster", fax: "0251 97413-49", telefon: "0251 97413-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-oberhausen", name: "Arbeitsgericht Oberhausen", strasse: "Friedrich-List-Strasse 18", plz: "46045", ort: "Oberhausen", fax: "0208 85745-33", telefon: "0208 85745-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-paderborn", name: "Arbeitsgericht Paderborn", strasse: "Grevestrasse 1", plz: "33102", ort: "Paderborn", fax: "05251 69162-30", telefon: "05251 69162-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-rheine", name: "Arbeitsgericht Rheine", strasse: "Dutumer Strasse 5", plz: "48431", ort: "Rheine", fax: "05971 9271-50", telefon: "05971 9271-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-siegburg", name: "Arbeitsgericht Siegburg", strasse: "Neue Poststrasse 16", plz: "53721", ort: "Siegburg", fax: "02241 52657", telefon: "02241 305-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-siegen", name: "Arbeitsgericht Siegen", strasse: "Koblenzer Strasse 7", plz: "57072", ort: "Siegen", fax: "0271 384561-111", telefon: "0271 384561-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-solingen", name: "Arbeitsgericht Solingen", strasse: "Wupperstrasse 32", plz: "42651", ort: "Solingen", fax: "0212 2809-61", telefon: "0212 2809-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-wesel", name: "Arbeitsgericht Wesel", strasse: "Ritterstrasse 1", plz: "46483", ort: "Wesel", fax: "0281 33891-44", telefon: "0281 33891-0", bundesland: "Nordrhein-Westfalen" },
  { id: "ag-wuppertal", name: "Arbeitsgericht Wuppertal", strasse: "Eiland 2", plz: "42103", ort: "Wuppertal", fax: "0202 498-9400", telefon: "0202 498-0", bundesland: "Nordrhein-Westfalen" },

  // === RHEINLAND-PFALZ (5) ===
  { id: "ag-kaiserslautern", name: "Arbeitsgericht Kaiserslautern", strasse: "Bahnhofstrasse 24", plz: "67655", ort: "Kaiserslautern", fax: "0631 3721-510", telefon: "0631 3721-0", bundesland: "Rheinland-Pfalz" },
  { id: "ag-koblenz", name: "Arbeitsgericht Koblenz", strasse: "Deinhardpassage 1", plz: "56068", ort: "Koblenz", fax: "0261 1307-28510", telefon: "0261 1307-0", bundesland: "Rheinland-Pfalz" },
  { id: "ag-ludwigshafen", name: "Arbeitsgericht Ludwigshafen am Rhein", strasse: "Wredestrasse 6", plz: "67059", ort: "Ludwigshafen am Rhein", fax: "0621 59605-30", telefon: "0621 59605-0", bundesland: "Rheinland-Pfalz" },
  { id: "ag-mainz", name: "Arbeitsgericht Mainz", strasse: "Ernst-Ludwig-Strasse 6-8", plz: "55116", ort: "Mainz", fax: "06131 141-9773", telefon: "06131 141-9750", bundesland: "Rheinland-Pfalz" },
  { id: "ag-trier", name: "Arbeitsgericht Trier", strasse: "Dietrichstrasse 13", plz: "54290", ort: "Trier", fax: "0651 466-7900", telefon: "0651 466-0", bundesland: "Rheinland-Pfalz" },

  // === SAARLAND (1) ===
  { id: "ag-saarbruecken", name: "Arbeitsgericht Saarbruecken", strasse: "Hardenbergstrasse 3", plz: "66119", ort: "Saarbruecken", fax: "0681 501-3648", telefon: "0681 501-05", bundesland: "Saarland" },

  // === SACHSEN (5) ===
  { id: "ag-bautzen", name: "Arbeitsgericht Bautzen", strasse: "Lessingstrasse 7", plz: "02625", ort: "Bautzen", fax: "03591 361-333", telefon: "03591 361-0", bundesland: "Sachsen" },
  { id: "ag-chemnitz", name: "Arbeitsgericht Chemnitz", strasse: "Zwickauer Strasse 54", plz: "09112", ort: "Chemnitz", fax: "0371 453-7157", telefon: "0371 453-7101", bundesland: "Sachsen" },
  { id: "ag-dresden", name: "Arbeitsgericht Dresden", strasse: "Hans-Oster-Strasse 4", plz: "01099", ort: "Dresden", fax: "0351 446-5205", telefon: "0351 446-0", bundesland: "Sachsen" },
  { id: "ag-leipzig", name: "Arbeitsgericht Leipzig", strasse: "Erich-Weinert-Strasse 18", plz: "04105", ort: "Leipzig", fax: "0341 5956-849", telefon: "0341 5956-0", bundesland: "Sachsen" },
  { id: "ag-zwickau", name: "Arbeitsgericht Zwickau", strasse: "Aeussere Dresdner Strasse 15", plz: "08066", ort: "Zwickau", fax: "0375 421222", telefon: "0375 4210", bundesland: "Sachsen" },

  // === SACHSEN-ANHALT (4) ===
  { id: "ag-dessau", name: "Arbeitsgericht Dessau-Rosslau", strasse: "Willy-Lohmann-Str. 29", plz: "06844", ort: "Dessau-Rosslau", fax: "0340 2021600", telefon: "0340 2020", bundesland: "Sachsen-Anhalt" },
  { id: "ag-halle", name: "Arbeitsgericht Halle", strasse: "Thueringer Str. 16", plz: "06112", ort: "Halle (Saale)", fax: "0345 2202045", telefon: "0345 2200", bundesland: "Sachsen-Anhalt" },
  { id: "ag-magdeburg", name: "Arbeitsgericht Magdeburg", strasse: "Breiter Weg 203-206", plz: "39104", ort: "Magdeburg", fax: "0391 6065024", telefon: "0391 6060", bundesland: "Sachsen-Anhalt" },
  { id: "ag-stendal", name: "Arbeitsgericht Stendal", strasse: "Scharnhorststr. 42", plz: "39576", ort: "Stendal", fax: "03931 585100", telefon: "03931 585000", bundesland: "Sachsen-Anhalt" },

  // === SCHLESWIG-HOLSTEIN (5) ===
  { id: "ag-elmshorn", name: "Arbeitsgericht Elmshorn", strasse: "Kurt-Wagener-Strasse 9", plz: "25337", ort: "Elmshorn", fax: "04121 84728", telefon: "04121 4866-0", bundesland: "Schleswig-Holstein" },
  { id: "ag-flensburg", name: "Arbeitsgericht Flensburg", strasse: "Suedergraben 22", plz: "24937", ort: "Flensburg", fax: "0461 89386", telefon: "0461 89382", bundesland: "Schleswig-Holstein" },
  { id: "ag-kiel", name: "Arbeitsgericht Kiel", strasse: "Deliusstrasse 22", plz: "24114", ort: "Kiel", fax: "0431 604-4000", telefon: "0431 604-0", bundesland: "Schleswig-Holstein" },
  { id: "ag-luebeck", name: "Arbeitsgericht Luebeck", strasse: "Neustrasse 2a", plz: "23568", ort: "Luebeck", fax: "0451 38978-50", telefon: "0451 38978-0", bundesland: "Schleswig-Holstein" },
  { id: "ag-neumuenster", name: "Arbeitsgericht Neumuenster", strasse: "Gartenstrasse 24", plz: "24534", ort: "Neumuenster", fax: "04321 48310", telefon: "04321 40970", bundesland: "Schleswig-Holstein" },

  // === THUERINGEN (4) ===
  { id: "ag-erfurt", name: "Arbeitsgericht Erfurt", strasse: "Rudolfstrasse 46", plz: "99092", ort: "Erfurt", fax: "0361 573559395", telefon: "0361 573555001", bundesland: "Thueringen" },
  { id: "ag-gera", name: "Arbeitsgericht Gera", strasse: "Schlossstrasse 24", plz: "07545", ort: "Gera", fax: "0361 573543777", telefon: "0361 573544000", bundesland: "Thueringen" },
  { id: "ag-nordhausen", name: "Arbeitsgericht Nordhausen", strasse: "Kaethe-Kollwitz-Strasse 1b", plz: "99734", ort: "Nordhausen", fax: "03631 4769-77", telefon: "03631 4769-0", bundesland: "Thueringen" },
  { id: "ag-suhl", name: "Arbeitsgericht Suhl", strasse: "Marktplatz 2", plz: "98527", ort: "Suhl", fax: "03681 375-328", telefon: "03681 375-0", bundesland: "Thueringen" },
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
