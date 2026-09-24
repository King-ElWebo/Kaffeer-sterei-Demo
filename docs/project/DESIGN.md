# Project creative direction

Specification status: READY

This file owns the visual identity, typography, layout and composition, imagery, responsive art direction, and motion direction for one showcase. It contains project-specific creative direction—not generic motion tutorials, library rules, or coding guidance. Scope and behavior live in [`SITE.md`](SITE.md), implementation constraints in [`ENGINEERING.md`](../system/ENGINEERING.md), approved copy and media assignments in [`CONTENT.md`](CONTENT.md), and completion checks in [`ACCEPTANCE.md`](ACCEPTANCE.md). Skills, MCP suggestions, and references may support or critique this direction but may not replace it.

## Strategic creative core

- **Brand thesis:** _„Wiener Kaffeetradition trifft lebendige Sensorik.“_ RÖSTWERK 1070 überwindet das Klischee des verstaubten Wiener Kaffeehauses ebenso wie die elitäre Kühle mancher Third-Wave-Konzepte. Das Design ist einladend, warm und sinnlich, besitzt aber zugleich typografische Haltung und handwerkliche Präzision.
- **Central creative idea:** _„Sensorische Farb-Geometrie.“_ Jeder der vier Spezialitätenkaffees besitzt eine eigene, unverwechselbare Signalfarbe, die sich wie ein roter Faden durch Packaging, Datenblätter, sensorische Geschmacksprofile und interaktive Zustände zieht.
- **Creative tension:** Die Ruhe und Taktilität von hochwertigem Naturpapier und samtigem Espresso-Schwarz trifft auf die mutige Leuchtkraft moderner Röstprofile und frischer Fruchtnoten.
- **Mood and emotional outcome:** Warm, neugierig, belebend, handwerklich meisterhaft und zugänglich. Besucher sollen beim Betrachten unmittelbar die Frische der Röstung, das Knistern frisch gemahlener Bohnen und die Wärme einer perfekten Tasse spüren.
- **Visual positioning:** Explizit eigenständig. **Weder die dunkle, monochrome Strenge von KERN / FIELD noch die austauschbare Schablonenästhetik gängiger E-Commerce-Templates.** Stattdessen: Eine warme, sonnige, farbmutige Ästhetik, die tief im 7. Wiener Bezirk (Neubau) verwurzelt ist.

## Design DNA

- **Recurring visual logic:** Wärmender Fond auf Naturpapier-Basis (`#FAF7F2`), tiefe Espresso-Typografie (`#1C1613`), subtile 1px-Rasterlinien in warmem Sandstein (`#E2DDD4`), großzügige typografische Hierarchien und akzentuierte Farbblöcke für jedes der vier Kaffeeprodukte.
- **Deliberate contrast or imbalance:** Große, ausdrucksstarke Display-Serifen-Headlines im Dialog mit präzisen, mikroskopisch genauen technischen Röstdaten in Monospace; weitläufige Weißräume brechen bewusst mit dichten, farbintensiven Produktkarten.
- **What creates recognition across pages:** Das einheitliche Farbcodierungssystem der 4 Sorten, die markante Typografie-Kombination (Fraunces + Plus Jakarta Sans + JetBrains Mono), die konsistenten 1px-Kanten und die einzigartigen visuellen Aromen-Profile.
- **What must vary between pages:**
  - Auf `/` dominieren Markenatmosphäre, Kaffeebohnen-Texturen und Einstiegswege.
  - Auf `/kaffee` steht die Farbkraft der vier Verpackungen im Zentrum.
  - Auf `/kaffee/[slug]` übernimmt die jeweilige Einzelfarbe die gesamte Tönung von Akzenten, Sensorik-Balken und Empfehlungen.
  - Auf `/geschmack` dominiert das interaktive Finder-Interface mit animierter Radar-/Aromen-Visualisierung.
  - Auf `/bruehen` herrscht klare Arbeitsplatz-Ästhetik eines Baristas mit Messskalen und Live-Rezeptrechner.

## Typography roles

| Role         | Typeface or category                     | Weight/width/case logic                   | Intended voice                            | Responsive behavior              |
| ------------ | ---------------------------------------- | ----------------------------------------- | ----------------------------------------- | -------------------------------- |
| Display      | `Fraunces` (Google Font via `next/font`) | SemiBold (600) & Regular Italic, -0.02em  | Kultiviert, warm, typografisch mutig      | 48–72px Desktop → 32–40px Mobile |
| Body         | `Plus Jakarta Sans`                      | Regular (400) & Medium (500), 1.55 Zeilen | Glasklar, zeitgemäß, hochgradig lesbar    | 16–18px Desktop → 15–16px Mobile |
| Utility/meta | `JetBrains Mono`                         | Medium (500), Uppercase, +0.06em Tracking | Präzise, messbar, röst-technisch fundiert | 11–13px auf allen Geräten        |

## Color logic

- **Core palette and roles:**
  - `Canvas Ground`: Warmes Porzellan / Naturpapier (`#FAF7F2`)
  - `Surface Elevated`: Helles Röstpergament (`#F3EFE6`)
  - `Surface Contrast`: Tiefes Espresso-Schwarz (`#1C1613`) mit Text in Warmweiß (`#FAF7F2`)
  - `Border / Hairline`: Feine Sandstein-Trennlinie (`#E2DDD4`)
  - `Text Primary`: Espresso-Kern (`#1C1613`) – Kontrastverhältnis auf Background > 13:1 (AAA)
  - `Text Secondary`: Mocca-Grau (`#5E554D`) – Kontrastverhältnis > 5.5:1 (AA)
  - `Text Muted`: Sandstein-Mocca (`#8A7E74`)
- **Produkt-Farbfamilien (Leitfarben):**
  - **Wiener Samt:** `#C24D36` (Terracotta-Karmin) – schokoladig, samtig, kräftig
  - **Flora Neubau:** `#E89C33` (Sonniges Apricot / Ockergelb) – fruchtig, floral, lebendig
  - **Donau Klarheit:** `#2F7466` (Nordsee-Teal / Salbei) – balanciert, rein, harmonisch
  - **Nachtfalter:** `#3B4B70` (Dämmerungs-Indigo) – koffeinfrei, nachtblau, sanft
- **Dominant/rare color proportions:** 75% beruhigender Naturpapier-Fond und Espresso-Typografie, 15% strukturierende Oberflächen und Trennlinien, 10% konzentrierte, hochgesättigte Produkt-Farbfelder.
- **Surface and text relationships:** Text immer in `#1C1613` auf hellem Grund; auf dunklen Espresso-Flächen invertiert auf `#FAF7F2`. Auf farbigen Badges wird die Lesbarkeit durch strenge Kontrastfarben gewährleistet.
- **Where color is intentionally withheld:** Im globalen Header, in Navigationsleisten und in Fließtextabschnitten bleibt das Farbschema ruhig und monochrom, damit die Produkt- und Geschmackswelten ihre volle Leuchtkraft entfalten.

## Grid and composition grammar

- **Grid principle:** Asymmetrisches 12-Spalten-Raster auf Desktop (1200px+), 6-Spalten auf Tablet (768–1199px), 2-Spalten bzw. fließende Einspaltigkeit auf Mobile (<768px). Maximale Inhaltsbreite: `1360px`.
- **Alignment anchors:** Strikte Ausrichtung aller Textkanten an vertikalen Achsen; Produktbilder sitzen in definierten Seitenverhältnissen (1:1 oder 4:5).
- **Rules for asymmetry, overlap, bleed, or whitespace:** Auf der Startseite und den Produkt-Detailseiten ragen Verpackungs-Renderings leicht über Farbflächenkanten hinaus, um räumliche Haptik zu erzeugen. Großzügige vertikale Freiräume (80–120px) lassen die Inhalte atmen.
- **Repeated composition behavior:** Produktkarten verwenden eine zweigeteilte Struktur: Oberer farbiger Kaffeepackungs-Bereich, darunter auf hellem Grund der Steckbrief mit Röstgrad, Geschmacksnoten und Zubereitungsempfehlung.
- **Composition behavior that must not repeat:** Der Brührechner (`/bruehen`) ist horizontal zweispaltig aufgebaut (Eingabe vs. Live-Rezeptausgabe), während der Geschmacksfinder (`/geschmack`) als zentrierter, sequenzieller Prozess inszeniert wird.

## Spacing and density rhythm

- **Macro section rhythm:** Wechsel aus weitläufigen Zonen (Hero, Markengeschichte mit 96–128px vertikalem Padding) und kompakten Arbeitszonen (Brührechner, Filterkatalog mit 48–64px Padding).
- **Dense versus quiet moments:** Ruhige Bild- und Textmomente in der Philosophie wechseln sich mit dichten, informativen Sensorik-Tabellen und Rechner-Modulen ab.
- **Text measure and vertical cadence:** Fließtextbreiten auf maximal 65 Zeichen beschränkt (`max-w-prose` oder `max-w-xl`), Zeilenabstand `1.55` für maximale Entspannung beim Lesen.

## Image direction

- **Subject matter and point of view:**
  - Hero-Aufnahme: Zeitgenössische Wiener Rösterei-Szene (Messing- und Edelstahl-Trommelröster, sanftes warmes Licht, Kaffeesäcke aus Jute).
  - Produktbilder (4 Sorten): Eigens generierte, gestochen scharfe Kaffeeverpackungen (Standbodenbeutel mit minimalistisch-mutigen Farbfeldern, Wiener Typografie und Aromen-Siegel).
  - Detailaufnahmen: Kaffeebohnen im Röstbett, samtige Espresso-Crema, Handfilter-Extraktion im V60-Dripper.
- **Lighting, color, and treatment:** Warmes, natürliches Tageslicht, satte erdige Brauntöne und leuchtende Akzentfarben der Verpackung. Keine künstlichen Neoneffekte, kein verwaschener Vintage-Filter.
- **Editorial versus product balance:** 60% Produkt- und Sensorikfokus, 40% atmosphärischer Wiener Kaffeekontext.
- **What images must never look like:** Keine düsteren, kalten Betonwände (Anti-KERN/FIELD), keine billigen Stock-Fotos mit lächelnden Models mit Pappbechern, keine pixeligen Mockups.

### Crop and focal-point behavior

- **Default crop logic:** Kaffeeverpackungen werden zentriert freigestellt (Seitenverhältnis 4:5 oder 1:1), damit das Packungsdesign und die Farbflächen im Fokus stehen.
- **Desktop focal behavior:** Vertikal zentriert in Spalten-Layern.
- **Mobile crop:** Volle Bildbreite ohne seitliches Abschneiden wichtiger Beschriftungen.

## Material language

- **Texture and material treatment:** Matter, ungestrichener Papiercharakter, feine 1px-Trennfäden.
- **Shape vocabulary:** Klare, moderne Geometrie mit sanften Radien (`rounded-lg` / `rounded-xl`, ca. 8–12px) für Buttons und Karten. Keine übertriebenen Kreisblasen.
- **Border, shadow, and depth logic:** Keine schweren Schlagschatten. Tiefe entsteht durch feine Kontrastrahmen (`border border-[#E2DDD4]`) und subtile Überlagerungen (`shadow-sm` oder `shadow-md` bei aktiven Bedienelementen).
- **Icon direction:** Feine, präzise 1.5px Stroke-Vektorsymbole für Brühmethoden (Espresso-Sieb, Handfilter-Trichter, Kanne, Kaffeebohne).

## Interaction and motion personality

- **Interaction personality:** Reaktiv, haptisch und mühelos. Jede Eingabe im Finder oder Rechner liefert augenblickliches, verständliches Feedback.
- **Motion personality:** Sanfte, physische Übergänge (Federleicht, Dämpfung 25, Steifigkeit 300 bei Motion for React), keine nervösen Wackler oder ablenkende Dauerschleifen.
- **Animation density:** Fokussiert auf 3 Orte:
  1. Seitenaufbau-Entrance beim Erstladen (sanftes Einblenden der Headline und des Lead-Bildes).
  2. Dynamischer Übergang im Geschmacksfinder beim Schrittwechsel und Aktualisieren des Sensorik-Charts.
  3. Weiche Zahlen- und Balken-Reaktivität im Brührechner beim Ändern der Milliliter.
- **Hover behavior:** Sanfte Skalierung (`scale-[1.01]`), Farbwechsel des Rahmens und dezenter Hebeeffekt (`-translate-y-0.5`).
- **Press behavior:** Spürbares Feedback beim Klick (`scale-[0.98]`).
- **Reduced-motion interpretation:** Bei `prefers-reduced-motion: reduce` werden alle räumlichen Translationen und Federanimationen deaktiviert; Zustandsänderungen erfolgen sofort oder über sanfte 100ms-Opazitätswechsel.

## Responsive art direction

### Desktop (1200px+)

Breite, asymmetrische Rhythmen. Der Hero zeigt die Markenthese links und ein großzügiges Kaffeeverpackungs-Ensemble rechts. Das Sortiment breitet sich 4-spaltig oder 2x2 mit großzügigen Sensorik-Daten aus. Der Brührechner bietet eine übersichtliche Side-by-Side-Ansicht von Konfiguration und Rezept.

### Tablet transformation (768px – 1199px)

Zweispaltiges Sortimentsraster. Der Brührechner ordnet Methoden-Auswahl und Regler oberhalb der Rezeptausgabe an. Der Geschmacksfinder bietet breite, leicht bedienbare Kacheln.

### Mobile (<768px)

Vollkommen einspaltig, daumenorientiert. Alle Buttons mindestens 48px hoch. Schieberegler im Brührechner wird durch Schnellauswahl-Buttons (1 Tasse / 2 Tassen / Kanne) ergänzt. Die Sensorik-Profile skalieren responsiv ohne seitliches Ausbrechen.

## Required signature moments

1. **Signature moment one: Der RÖSTWERK Geschmacksfinder (`/geschmack`)**
   - **Brand connection:** Kaffeeliebhaber werden ohne Fachchinesisch, aber mit sensorischer Tiefe zur idealen Bohne geführt.
   - **Route/state:** `/geschmack`, 3-stufiger interaktiver Flow mit Ergebnis-Präsentation.
   - **Responsive and reduced-motion behavior:** Vollständige Tastaturbedienbarkeit mit Radio-Group-Semantik; bei aktivierter reduzierter Bewegung wechseln die Schritte instantan ohne Slide-Animation.

2. **Signature moment two: Der RÖSTWERK Brührechner (`/bruehen`)**
   - **Brand connection:** Vermittelt das RÖSTWERK-Versprechen von Röstpräzision bis in die Tasse zu Hause.
   - **Route/state:** `/bruehen`, dynamische Neuberechnung von Gramm, Millilitern, Temperatur und Mahlgrad für 5 Zubereitungsmethoden.
   - **Responsive and reduced-motion behavior:** Zahlen aktualisieren sich flüssig; Screenreader erhalten über `aria-live="polite"` die neuen Werte als Text.

## Controlled exceptions

- Das Produkt „Wiener Samt“ darf als klassischer Wiener Espresso eine tiefere, sattere Terracotta-Färbung nutzen als die helleren Filterkaffees, um die geschmackliche Rösttiefe visuell widerzuspiegeln.
- Der Brührechner verzichtet zugunsten maximaler Messgenauigkeit auf verspielte Illustrationen und nutzt eine technisch-präzise Monospace-Datenausgabe.

## Visual references

| Reference                                    | What to borrow                              | What not to copy                         | Applied decision                           |
| -------------------------------------------- | ------------------------------------------- | ---------------------------------------- | ------------------------------------------ |
| Wiener Werkstätte & Secession Plakate        | Typografische Haltung, klare Farbflächen    | Historisierende Ornamente oder Schnörkel | Starke Serifen-Typografie auf warmem Fond  |
| Skandinavische & Berliner Specialty Roasters | Klare Geschmacksprofil-Skalen, Minimalismus | Kühle, elitäre Unnahbarkeit              | Einladende Farben, transparente Rezepte    |
| KERN / FIELD (Vorgängerprojekt)              | Technische Präzision und sauberes QA-Setup  | Kühles Schwarzgrau, Beton, Brutalismus   | Komplett abgewandt: Warm, farbig, sinnlich |

## Stitch exploration policy

- **Use Stitch for new visual exploration (`Yes` or `No`):** Yes
- **May create or update Stitch projects and screens (`Yes` or `No`):** Yes
- **Target initial directions (`0`, `2`, or `3`):** 2
- **May use supplied references, screenshots, sketches, or wireframes in Stitch (`Yes` or `No`):** Yes
- **May export permitted visual handoff material locally (`Yes` or `No`):** Yes
- **Required concepts record:** Dokumentiert in `concepts/README.md` und nachfolgend in diesem Dokument.

### Explorations-Richtungen:

1. **Direction A: „Wiener Farbblock & Magazin“ (Ausgewählt und synthetisiert)**
   - Großformatige typografische Präsenz, warme Naturpapiertöne, kräftige monochrome Farbzonen für die jeweiligen Kaffeesorten, hohe Lesbarkeit, editorialer Magazin-Charakter.
2. **Direction B: „Sensorisches Labor & Monografie“ (Verworfen als Hauptrichtung, Details synthetisiert)**
   - Technisch-analytische Ausrichtung mit dominanter Monospace-Ästhetik, Rasterfokus und Labor-Anmutung. Wurde als alleinige Markenidentität verworfen, da zu unnahbar für Kaffeegenießer; die präzisen Sensorik-Skalen und Brühparameter wurden jedoch erfolgreich in die Synthese übernommen.

## Explicit anti-patterns

- Kein monotones, kaltes KERN / FIELD Schwarzgrau.
- Keine generischen SaaS-Cards mit lila/blauen Farbverläufen.
- Keine 08/15-Shop-Schablonen mit Pseudo-Warenkorb-Symbolen.
- Kein Scroll-Jacking oder störende Maus-Folger.
- Keine unleserlichen Kontraste (Grau auf Grau).
- Keine Hover-Only-Informationen.

## Final visual quality bar

Die finale Website vermittelt das Gefühl eines sorgfältig gestalteten, zeitgenössischen Kaffeebuchs. Typografie, Farbintensität der Packungen, Haptik der Flächen und die flüssige Reaktivität der Werkzeuge greifen nahtlos ineinander. Alle Viewports (von 320px bis 1920px) bieten kompromisslose Klarheit ohne horizontales Scrollen.
