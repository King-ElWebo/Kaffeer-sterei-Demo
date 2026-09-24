# Site specification

Specification status: READY

This file owns the current showcase’s purpose, product scope, routes, sections, user journeys, behavior, and non-goals. Describe each section’s purpose and content before deciding its layout. Visual and motion direction belongs in [`DESIGN.md`](DESIGN.md), approved copy and content data in [`CONTENT.md`](CONTENT.md), and completion checks in [`ACCEPTANCE.md`](ACCEPTANCE.md). Acceptance checks may verify this scope but may not silently expand or contradict it.

## Project identity and purpose

- **Project name:** RÖSTWERK 1070
- **Industry:** Specialty Coffee / Handwerkliche Kaffeerösterei & Sensorik
- **Project type:** Eigenständiges digitales Portfolio-Showcase (Fiktives Konzept)
- **Portfolio purpose:** Erstellung einer lebendigen, typografisch ausdrucksstarken und technisch tadellosen Marken- und Produkt-Showcase-Website. Nachweis für High-End-Frontend-Architektur (Next.js 16 App Router, React 19, Tailwind CSS, Motion), barrierefreie Nutzbarkeit (Axe-Clean, Screenreader- und Keyboard-Support) sowie zwei funktionale Signature Moments mit echtem Nutzwert (Geschmacksfinder und Brührechner).
- **Target audience:** Kaffeeliebhaberinnen und -liebhaber, Sensorik-Interessierte, Heimerzeuger (Filter & Siebträger) sowie Design- und Frontend-Evaluatoren.
- **Desired user impression:** Lebendig, neugierig, handwerklich präzise, sensorisch fundiert und ehrlich. Die Marke macht sofort Lust auf herausragenden Kaffee und nimmt Berührungsängste vor Spezialitätenkaffee.
- **Brand premise:** RÖSTWERK 1070 ist eine fiktive Mikrorösterei im 7. Wiener Gemeindebezirk (Neubau). Sie verbindet den Charme und die Gemütlichkeit der Wiener Kaffeetradition mit der Klarheit, Experimentierfreude und Frische der Third-Wave-Kaffeekultur.

## Sitemap and routes

List every public route. Route paths are the source for `tests/e2e/routes.ts`.

| Route                    | Page purpose                                                                          | Primary audience need                                                              | Direct-load requirement |
| ------------------------ | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------- |
| `/`                      | Markeneinstieg, Philosophie, Produkt-Highlights, direkte Wege zu Finder & Brühguide   | Orientierung, Kennenlernen des Markencharakters, Lust auf frischen Röstkaffee      | Yes                     |
| `/kaffee`                | Vollständige Sortimentsübersicht der 4 Kaffees mit Filterung nach Brühmethode/Röstung | Schneller Überblick, Filtermöglichkeit nach Espresso, Filter oder Allrounder       | Yes                     |
| `/kaffee/wiener-samt`    | Produktdetailseite des schokoladigen Espressos (Medium-Dark Roast)                    | Sensorikprofil, Brüh-Empfehlungen, Geschmacksnoten und Röstkurve verstehen         | Yes                     |
| `/kaffee/flora-neubau`   | Produktdetailseite des fruchtig-floralen Filterkaffees (Light Roast)                  | Sensorikprofil, Säure-Süße-Balance, V60-Parameter erfahren                         | Yes                     |
| `/kaffee/donau-klarheit` | Produktdetailseite des balancierten Allrounders (Medium Roast)                        | Sensorikprofil, Alltagstauglichkeit für Handfilter, French Press & Vollautomat     | Yes                     |
| `/kaffee/nachtfalter`    | Produktdetailseite des natürlichen Entkoffeinierten (Sugarcane/Water Decaf)           | Sensorikprofil für späten Kaffeegenuss ohne Koffein, vollmundiges Geschmacksprofil | Yes                     |
| `/geschmack`             | Interaktiver Geschmacksfinder (Signature Moment 1)                                    | Schrittweises Ermitteln der passenden Bohne anhand von Zubereitung und Sensorik    | Yes                     |
| `/bruehen`               | Brühguide mit präzisem Mengenrechner (Signature Moment 2)                             | Gelingende Zubereitung mit Gramm- und Milliliter-Berechnung je Kaffeemethode       | Yes                     |
| `/roesterei`             | Philosophie, Rösthandwerk, Wiener Standort Neubau & ehrliche Demo-Einordnung          | Hintergrundwissen, Transparenz über das fiktive Konzept, Arbeitsweise verstehen    | Yes                     |

## Navigation

- **Primary navigation model:** Feste, semantische Desktop-Kopfzeile mit semantischem `<header>` und `<nav>`, dezentem Blur/Surface-Hintergrund, klarem Markenlogo „RÖSTWERK 1070“ und direkten internen Routenlinks.
- **Global navigation labels and destinations:**
  - `Kaffee` → `/kaffee`
  - `Geschmacksfinder` → `/geschmack`
  - `Brühguide` → `/bruehen`
  - `Rösterei` → `/roesterei`
- **Mobile navigation behavior:** Zugängliches Drawer-/Overlay-Menü mit Hamburger-Button (`aria-expanded`, `aria-controls`, `aria-label="Menü öffnen/schließen"`). Vollständige Tastatur-Fokuskontrolle, Schließen per Escape-Taste und Touch-optimierte Klickflächen (mindestens 44×44px).
- **Footer or secondary navigation:** Viergliedrige Struktur:
  - Spalte 1: Markenidentität & Portfolio-Hinweis („RÖSTWERK 1070 – Ein fiktives Portfolio-Showcase aus Wien-Neubau“)
  - Spalte 2: Sortiment (Direktlinks zu allen 4 Kaffeesorten)
  - Spalte 3: Werkzeuge (Geschmacksfinder, Brührechner)
  - Spalte 4: Transparenz & Rechtliches (Konzeptdeklaration, Kontaktangaben / Entfällt-Begründung)
- **Active, external, download, and back-link behavior:** Aktive Route wird mit diskreter Farblinie / Kontrastzustand hervorgehoben (`aria-current="page"`). Produktdetailseiten bieten einen semantischen Rücklink („← Zurück zum Sortiment“) zu `/kaffee`. Keine toten Anker (`#`).

## Route sections

### Route: `/` (Startseite)

**Page purpose:** Emotionaler und sensorischer Einstieg in die Markenwelt von RÖSTWERK 1070; Vorstellung der Philosophie, Präsentation der Kaffeelinie und Einstiegsleitsystem zu den interaktiven Werkzeugen.

| Section                  | Purpose                                                               | Required content/data                                                | Required action or interaction                        | Priority  |
| ------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------- | --------- |
| Hero-Sektion             | Visuell starkes Entree mit Typografie, Markenthese und Lead-Artwork   | Headline, Markenclaim, Hinweis auf Wiener Specialty Roasting         | Primärer CTA: `/kaffee`, Sekundärer CTA: `/geschmack` | Primary   |
| Röstphilosophie          | Fachliche Glaubwürdigkeit: Mikroröstung, Sortenreinheit, Röstkurve    | Dreiteiliger Fokus (Herkunftsklarheit, Trommelröstung, Sensorik)     | Keine, fokussiertes Lesen                             | Secondary |
| Sortiments-Vorschau      | Vorstellung der 4 Leitkaffees mit lebendiger Farb- und Geschmackswelt | Titel, Geschmacksnoten, Röstgrad, Packaging-Farbe aller 4 Sorten     | Klickbare Karten mit Link zu `/kaffee/[slug]`         | Primary   |
| Signature-Teaser Finder  | Neugier wecken für den interaktiven Geschmacksfinder                  | Teasertext, Vorschau-Icons für Geschmack & Zubereitung               | CTA-Button: `/geschmack`                              | Primary   |
| Brühguide-Teaser         | Ankündigung des Brührechners für die perfekte Tasse zu Hause          | Kurzbeschreibung der 5 Brühmethoden                                  | CTA-Button: `/bruehen`                                | Secondary |
| Wiener Kaffeekultur 1070 | Lokalkolorit: Warum Wien-Neubau der ideale Nährboden für RÖSTWERK ist | Kurzer Text zur Symbiose aus Kaffeehaustradition und Specialty-Szene | Link: `/roesterei`                                    | Secondary |
| Konzept-Hinweis          | Ehrlich sichtbarer Banner zur Portfolio-Natur des Projekts            | Hinweis: Fiktives Showcase-Projekt, kein realer Onlineshop           | Informativ                                            | Primary   |

### Route: `/kaffee` (Sortiment)

**Page purpose:** Kompakte, filterbare Übersicht aller vier Kaffeespezialitäten mit sensorischen Steckbriefen und direktem Einstieg in die Produktdetailseiten.

| Section                  | Purpose                                                               | Required content/data                                                  | Required action or interaction                          | Priority  |
| ------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------- | --------- |
| Header & Einführung      | Kontextualisierung des RÖSTWERK-Sortiments                            | Titel „Unsere Röstungen“, Erläuterung der Farbcodierung                | Keine                                                   | Primary   |
| Sortiments-Filter        | Schnelles Eingrenzen nach Zubereitungsart und Röstgrad                | Filter-Tabs: Alle, Espresso & Siebträger, Filterkaffee, Entkoffeiniert | Sofortige Filterung per Klick/Tastatur (`aria-pressed`) | Primary   |
| Produkt-Raster           | Präsentation der 4 Kaffeepackungen mit Geschmacksnoten und Attributen | Produktbild, Name, Varietät, Aufbereitung, Geschmacksnoten, Röstgrad   | Klick zur Detailseite `/kaffee/[slug]`                  | Primary   |
| Geschmacksfinder-Verweis | Wegeleitung für unentschlossene Nutzer                                | Frage: „Noch unsicher, welche Bohne zu dir passt?“                     | CTA zu `/geschmack`                                     | Secondary |

### Route: `/kaffee/[slug]` (Produktdetails)

**Page purpose:** Tiefgehende, multisensorische Präsentation einer einzelnen Kaffeesorte mit Geschmacksmatrix, empfohlenen Brühparametern und Packungsästhetik.

| Section                       | Purpose                                                                | Required content/data                                                     | Required action or interaction                             | Priority  |
| ----------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------- | --------- |
| Breadcrumb & Zurück           | Orientierung im Navigationsbaum                                        | Zurück-Link zum Gesamtsortiment                                           | Klick zu `/kaffee`                                         | Primary   |
| Produkt-Hero                  | Großformatige Packungsinszenierung, Name, Röstgrad, Geschmacksnoten    | Bild, Name, Unterzeile, Farbband, Geschmacks-Tags                         | Keine                                                      | Primary   |
| Sensorisches Geschmacksprofil | Detaillierte sensorische Ausprägung (Süße, Säure, Körper, Bitterkeit)  | Eigenes Balken-/Radar-System für Sensorik (0–100)                         | Barrierefreie Text- und Datenwerte                         | Primary   |
| Steckbrief & Röstdetails      | Technische Daten: Aufbereitung, Röstgrad, Varietät, Empfohlene Methode | Aufbereitungsart, ideale Brühmethoden, Rösttag-Zyklus                     | Keine                                                      | Secondary |
| Zubereitungs-Empfehlung       | Konkreter Startwert für die Zubereitung (Gramm, Mahlgrad, Temperatur)  | Brüh-Rezept-Empfehlung für die jeweilige Bohne                            | CTA: „Im Brührechner anpassen“ → `/bruehen` mit Parametern | Primary   |
| Ehrlicher Kaufhinweis         | Transparente Information statt Scheinkauf                              | Hinweis: Musterpackung im Rahmen dieses Portfolio-Konzepts (kein Verkauf) | Alternativer CTA: Ähnliche Kaffees ansehen                 | Primary   |

### Route: `/geschmack` (Geschmacksfinder – Signature Moment 1)

**Page purpose:** Interaktives Werkzeug zur spielerischen, zielgerichteten Ermittlung der idealen Kaffeebohne basierend auf Zubereitungsart, bevorzugter Geschmacksrichtung und Sensorik.

| Section                   | Purpose                                                                 | Required content/data                                                       | Required action or interaction                            | Priority |
| ------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------- | -------- |
| Intro & Anleitung         | Begrüßung und Erklärung der 3 Entscheidungsschritte                     | Titel „Der RÖSTWERK Geschmacksfinder“, Schrittzähler                        | Keine                                                     | Primary  |
| Schritt 1: Zubereitung    | Abfrage der bevorzugten Brühmethode                                     | Optionen: Espresso/Siebträger, Handfilter (V60/Chemex), French Press/Alltag | Auswahl per Button (`aria-pressed`, Radio-Group-Semantik) | Primary  |
| Schritt 2: Aromenrichtung | Abfrage der gewünschten Geschmacksnoten                                 | Optionen: Schokolade & Nuss, Frucht & Floral, Ausgewogen & Süß, Sanft Decaf | Auswahl per Button                                        | Primary  |
| Schritt 3: Röstpräferenz  | Abfrage des bevorzugten Röstgrades                                      | Optionen: Hell & Spritzig, Ausgewogenes Medium, Kräftig & Dunkel            | Auswahl per Button                                        | Primary  |
| Empfehlungs-Ergebnis      | Anzeige des passenden Röstwerk-Kaffees mit nachvollziehbarer Begründung | Produktbild, Name, Geschmacksnoten, Sensorik-Vorschau, Match-Begründung     | Link zur Detailseite `/kaffee/[slug]`, Reset-Möglichkeit  | Primary  |

### Route: `/bruehen` (Brühguide & Mengenrechner – Signature Moment 2)

**Page purpose:** Praktischer Guide für die Kaffeezubereitung zu Hause mit integriertem, reaktivem Mengen- und Verhältnisrechner für 5 Methoden.

| Section                   | Purpose                                                             | Required content/data                                                        | Required action or interaction                              | Priority  |
| ------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------- | --------- |
| Intro                     | Einleitung in die Kunst der Extraktion                              | Titel „Präzision in der Tasse“, Erläuterung des Brühverhältnisses (Ratio)    | Keine                                                       | Primary   |
| Interaktiver Brührechner  | Rechner für Kaffeepulver, Wasser und Parameter je gewünschter Menge | Methoden-Tabs (V60, French Press, Chemex, Aeropress, Bialetti), Mengenregler | Methodenwahl & Mengenauswahl (ml) → sofortige Neuberechnung | Primary   |
| Berechnetes Rezept        | Anzeige der genauen Gramm-Angaben und Brühparameter                 | Kaffeemehl (g), Wasser (g/ml), Mahlgrad, Wassertemperatur, Durchlaufzeit     | Textlich voll lesbar, Screenreader-Live-Region              | Primary   |
| Schritt-für-Schritt-Guide | Chronologische Brühschritte (Bloom, Gießen, Servieren)              | 4 präzise Brühschritte für die ausgewählte Methode                           | Wechselt synchron mit der gewählten Methode                 | Secondary |

### Route: `/roesterei` (Über uns & Handwerk)

**Page purpose:** Darstellung der Markenphilosophie, der Wiener Röstphilosophie und transparente Einordnung als Design- und Engineering-Showcase.

| Section                  | Purpose                                                             | Required content/data                                                    | Required action or interaction | Priority  |
| ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------ | --------- |
| Das RÖSTWERK-Versprechen | Grundhaltung: Frische Röstung, Transparenz, keine Scheinkomplexität | Manifest der Rösterei in Wien Neubau                                     | Keine                          | Primary   |
| Röstprozess & Handwerk   | Erklärung des Trommelröstverfahrens und der Sortenreinheit          | 3 Säulen: Selektion, schonende Röstung, sensorische Verkostung (Cupping) | Keine                          | Secondary |
| Standort Wien 1070       | Verortung im Wiener Kreativbezirk Neubau                            | Beschreibung des fiktiven Röstlabors und der Kaffeehaus-Inspiration      | Keine                          | Secondary |
| Portfolio-Transparenz    | Vollständige Offenlegung des Projektkontexts                        | Klartext: Fiktive Konzeptmarke, Urheberangaben, Technologiestack         | Keine                          | Primary   |

## Primary user journeys

1. **Journey 1: Gezielter Kaffeefinder zum perfekten Produkt**
   - Entry: Startseite (`/`) über den Hero-CTA „Geschmacksfinder starten“ oder Hauptnavigation `/geschmack`.
   - Steps: Nutzer wählt Zubereitung (z.B. „Handfilter / V60“) → wählt Geschmacksrichtung (z.B. „Frucht & Floral“) → wählt Röstung („Hell & Spritzig“).
   - Success: Finder errechnet und präsentiert „Flora Neubau“ mit sensorischem Diagramm, prägnanter Begründung und Button „Bohne im Detail entdecken“ zu `/kaffee/flora-neubau`.
   - Mobile difference: Die Auswahlkarten ordnen sich vertikal kompakt an; das Ergebnis rückt direkt in den sichtbaren Viewport mit sanftem Scroll-Fokus.

2. **Journey 2: Zubereitung vorbereiten mit dem Brührechner**
   - Entry: Hauptnavigation oder Verlinkung von einer Produktdetailseite zu `/bruehen`.
   - Steps: Nutzer wählt Methode (z.B. „Handfilter V60“) → stellt gewünschte Kaffeemenge auf 500 ml (zwei Tassen) ein.
   - Success: Rechner zeigt unverzüglich 30.0 g Kaffee, 500 g Wasser (Ratio 1:16.6), Mahlgrad „Mittelfein (Meersalz)“, 93 °C Wassertemperatur und 3:00 min Brühzeit samt angepasster Schritt-für-Schritt-Anleitung an.
   - Mobile difference: Schnelle Tasten für gängige Portionsgrößen (1 Tasse / 250 ml, 2 Tassen / 500 ml, Kanne / 750 ml) ergänzen den Schieberegler für daumengerechte Bedienung.

3. **Journey 3: Sortiment stöbern und Sensorik vergleichen**
   - Entry: `/kaffee` über Hauptnavigation oder Footer.
   - Steps: Nutzer schaltet Filter auf „Espresso & Siebträger“ → das Raster reduziert sich nahtlos auf „Wiener Samt“ → Klick auf das Produkt führt zu `/kaffee/wiener-samt`.
   - Success: Vollständige Ansicht mit Packungs-Artwork, sensorischen Balken und Röstspezifikationen.
   - Mobile difference: Filterbuttons brechen horizontal scrollbar oder umbruchfreundlich um; Touch-Tippen reagiert mit sofortigem visuellem Feedback.

## Features and interactions

| Feature oder Interaktion        | User purpose                                              | Trigger                                    | Expected result                                                             | Keyboard/touch behavior                                   | Failure or fallback                                 |
| ------------------------------- | --------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- |
| Sortiments-Filter (`/kaffee`)   | Schnelles Finden passender Kaffees nach Brühmethode       | Klick/Tab auf Filter-Button                | Liste aktualisiert sich ohne Seiten-Reload; aktive Filter deutlich markiert | Volle Pfeiltasten-/Tab-Bedienung, `aria-pressed` Status   | Zeigt alle 4 Kaffees, wenn kein Filter greift       |
| Geschmacksfinder (`/geschmack`) | Passgenaue Bohne für die persönlichen Vorlieben ermitteln | Auswahl in 3 Schritten                     | Deterministische Empfehlung der besten Bohne mit Begründung und Link        | Sequenzielle Fokussierung, Enter/Space wählt Option       | Voreinstellung auf den Allrounder „Donau Klarheit“  |
| Brührechner (`/bruehen`)        | Kaffeemehl- und Wasserbedarfsberechnung                   | Methodenwahl & Mengenänderung (Slider/Btn) | Sofortige Aktualisierung von Gramm Kaffeemehl, Wasser und Brühzeit          | Stepper-Buttons (+/- 50ml), Slider mit Tastatur bedienbar | Standardwerte (250 ml, V60) immer als Ausgangsbasis |
| Mobile Drawer-Navigation        | Navigation auf kleinen Bildschirmen                       | Klick auf Hamburger-Icon                   | Menü gleitet ein, Hintergrund wird blockiert, Fokus wird im Menü gehalten   | Escape schließt Menü; Tab zirkuliert innerhalb der Links  | Klassische Seitenlinks im Seitenabschluss verfügbar |

## Content and data entities

Der Datenfluss ist streng typisiert und entkoppelt:
`src/data/coffee-products.ts` & `src/data/brew-methods.ts` → Page/Server-Component → UI-Komponenten.

| Entity          | Fields                                                                                                                                                                                                                                                                          | Ordering/filtering rules                                         | Owning content section     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------- |
| `CoffeeProduct` | `id`, `slug`, `name`, `subtitle`, `roastLevel` (Light, Medium, Medium-Dark), `tasteNotes` (string[]), `originInfo`, `process`, `tasteProfile` ({ sweetness, acidity, body, bitterness, fruitiness }), `bestFor` (string[]), `accentColor`, `image`, `description`, `brewRecipe` | Sortierung nach Empfehlungsrelevanz (1 bis 4)                    | [`CONTENT.md`](CONTENT.md) |
| `BrewMethod`    | `id`, `name`, `ratio` (z.B. 1:16.6), `defaultMl`, `minMl`, `maxMl`, `stepMl`, `grindSize`, `tempC`, `timeMin`, `guideSteps` (string[])                                                                                                                                          | Feste Sortierung: V60, French Press, Chemex, Aeropress, Bialetti | [`CONTENT.md`](CONTENT.md) |

## Responsive behavior expectations

- **Desktop information hierarchy:** Großzügige horizontale Rhythmen, 12-Spalten-Layout, zweispaltige Hero-Komposition mit typografischer Monumentalität und Produktverpackungs-Fokus, interaktiver Brührechner mit Rechner links und Live-Rezept/Schritten rechts.
- **Tablet transformation (768px – 1024px):** 6-Spalten-Raster, zweispaltige Produktkarten, Rechner stapelt die Eingabesteuerung über das Rezept, Navigationsleiste behält Kernlinks oder schaltet auf das kompakte Drawer-Menü um.
- **Mobile task and content priority (< 768px):** Einspaltig mit großzügigen Touch-Flächen (mind. 44px), kein horizontales Scrollen, kompakte Schrittführung im Geschmacksfinder, Schnellwahltasten (1 Tasse / 2 Tassen) im Brührechner.
- **Elements that recompose rather than stack:**
  - Die sensorische Geschmacksmatrix wandelt sich von einer horizontalen Vergleichstabelle auf Desktop in fokussierte, kompakte Profilbalken auf Mobile.
  - Der Brührechner formt seine Slider- und Methoden-Tabs in eine handliche, daumenfreundliche Steuerungsgruppe um.
- **Wide-screen maximum behavior:** Maximalbreite von `1400px` zentriert mit ausbalancierten Außenabständen (`px-6 md:px-12 lg:px-16`).
- **Touch alternatives to hover:** Alle interaktiven Kacheln und Buttons besitzen explizite `:focus-visible` und `:active`-Zustände (z.B. sanftes Skalieren auf `0.98` und Farbkontrastwechsel), statt auf Hover-Effekte angewiesen zu sein.

## SEO and metadata

- **Default title and title pattern:** `RÖSTWERK 1070 | Specialty Coffee Wien-Neubau` / `%s | RÖSTWERK 1070`
- **Default description:** `RÖSTWERK 1070 – Fiktive Wiener Specialty-Coffee-Rösterei. Präzise Röstungen, lebendige Aromen, interaktiver Geschmacksfinder und Brühguide aus Wien-Neubau.`
- **Per-route metadata:** Jede der 6 Routen und alle 4 Produktdetailseiten besitzen individuelle, aussagekräftige Metadaten in deutscher Sprache.
- **Canonical/base URL:** `https://roestwerk1070.example.com` (oder lokaler Preview-Host)
- **Open Graph image assignment:** Zentrales Brand-OG-Image mit Kaffeeverpackungen und Markenlogo.
- **Indexing rule for the final environment:** `noindex, nofollow` für diese Portfolio-Konzeptarbeit (`robots: { index: false, follow: false }`), um Missverständnisse mit echten Handelsunternehmen auszuschließen.
- **Structured data, sitemap, or robots requirements:** `robots.txt` und saubere semantische Überschriftenhierarchie (H1 bis H3) auf jeder Route.

## Functional requirements

- **Hosting classification:** Statischer Export (`output: 'export'`) für Cloudflare Pages.
- Alle 9 öffentlichen URLs (`/`, `/kaffee`, `/kaffee/wiener-samt`, `/kaffee/flora-neubau`, `/kaffee/donau-klarheit`, `/kaffee/nachtfalter`, `/geschmack`, `/bruehen`, `/roesterei`) müssen zur Build-Zeit via `generateStaticParams()` feststehen und sowohl direkt als auch nach Reload unter `wrangler pages dev out` mit HTTP 200 antworten.
- Jede Interaktion (Filter, Finder, Rechner) läuft rein clientseitig ohne Serverabhängigkeit und ist vollkommen offlinefähig.
- Lokale responsive Medien werden zur Build-Zeit via `scripts/build-images.mjs` in WebP-Varianten konvertiert und über den internen Next.js-Custom-Loader ohne externe Bild-CDNs ausgeliefert.

## Explicit non-goals

- Kein Onlineshop, kein Warenkorb, kein Checkout, keine Zahlungsanbindung.
- Keine Schein-Erfolgsmeldung („Kaffee bestellt!“ oder „Nachricht versendet!“).
- Keine echte Datenbank, kein CMS, keine Authentifizierung oder Benutzerkonten.
- Keine erfundenen Zertifikate, Auszeichnungen, Scheinzahlen oder fingierten Kundenbewertungen.
- Keine Scroll-Jacking-Bibliotheken, die das native Scrollverhalten des Browsers verfälschen.

## Allowed simplifications

- Die Kaffeebohnen und Röstungen sind fiktive Sorten mit realitätsnahen, sensorisch plausiblen Parametern.
- Kontaktangaben sind ehrlich als Portfolio-Konzept gekennzeichnet; statt gefälschter Telefonnummern wird transparent auf die Natur des Demo-Projekts verwiesen.
- Der Brührechner fokussiert sich auf die fünf populärsten Methoden (Handfilter V60, French Press, Chemex, Aeropress, Herdkanne/Bialetti).

## Completion risks

| Risk                                                 | Impact                                               | Mitigation or required input                                                             | Owner |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----- |
| Bildgenerierung und lokale Responsive-WebP-Erzeugung | Bilder fehlen oder werden im Export nicht gefunden   | Eigene Generierung mit `generate_image`, Ablage in `public/media/`, Build-Test mit Sharp | Agent |
| Barrierefreiheit der Schieberegler & Filter-Buttons  | Tastatur- oder Screenreader-Fehler (axe violations)  | Native Semantik (`button`, `input type="range"`, `aria-live`, Labels)                    | Agent |
| Statischer Export der dynamischen Routen             | 404-Fehler beim direkten Aufruf von `/kaffee/[slug]` | `generateStaticParams()` mit allen 4 Slugs, E2E-Tests gegen `wrangler pages dev out`     | Agent |

## Open decisions

- Keine offenen Blocker: Alle wesentlichen Produkt-, Design- und Inhaltsentscheidungen sind hier und in den Geschwisterdokumenten verbindlich definiert.

## Readiness checklist

- [x] All required markers above have been replaced.
- [x] Every route and section has a stated purpose and content requirement.
- [x] Navigation, journeys, interactions, entities, and responsive expectations agree.
- [x] SEO and functional requirements are testable.
- [x] Non-goals and allowed simplifications constrain scope.
- [x] Status is `READY`.
