# RÖSTWERK 1070 – Concept Sprint & Design Handoff

## Overview & Status

- **Project:** RÖSTWERK 1070 (Specialty Coffee Wien-Neubau)
- **Status:** Concept finalized and synthesized for Direct Build via local design workflow.
- **Stitch project ID or link:** `projects/13822923460068013337` ("Röstwerk 1070 - Specialty Coffee Wien")
- **Stitch Tool Execution:** Project created successfully; screen text generation hit a 3-minute MCP timeout. Documented per `TOOLING.md` fallback rules.
- **Active Workflow:** Local design-skill workflow guided by `ui-ux-pro-max`, `frontend-design`, `design-taste-frontend`, and `emil-design-eng`.

---

## 1. Design Hypothesis & The Two Explored Directions

### Design Hypothesis

_„Wiener Kaffeehaustradition trifft lebendige Sensorik.“_
RÖSTWERK 1070 bricht mit zwei Klischees: der verstaubten Wiener Kaffeehaus-Nostalgie und der elitären Kühle moderner Third-Wave-Konzepte. Das visuelle System basiert auf:

1. Warmem, samtigem Naturpapier als Grundton (`#FAF7F2`), der Gemütlichkeit und Taktilität vermittelt.
2. Markanter Typografie: Monumentale, ausdrucksstarke Display-Serife (`Fraunces`) für Headlines im Dialog mit klarer Grotesk (`Plus Jakarta Sans`) und präziser Monospace (`JetBrains Mono`).
3. Einem lebendigen Farbcodierungssystem: Jede der 4 Kaffeesorten besitzt eine eigene energetische Signalfarbe (Terracotta `#C24D36`, Ockergelb `#E89C33`, Salbei-Teal `#2F7466`, Dämmerungs-Indigo `#3B4B70`).

### Direction A: „Wiener Farbblock & Editorial Magazin“ (Ausgewählt als Kern)

- **Fokus:** Editorialer Magazinrhythmus, mutige Farbblöcke auf hellem Papiergrund, asymmetrische Spalten, großformatige Verpackungsdarstellung und direkte Hinführung zur Sensorik.
- **Stärke:** Hochgradig einladend, emotional ansprechend, differenziert sich sofort von dunklen Tech-Portfolios oder 08/15-Shops.

### Direction B: „Sensorisches Labor & Röst-Monografie“ (Synthetisiert)

- **Fokus:** Analytische Kaffeevermessung, dunklere Kontrastzonen (Espresso-Schwarz), prominente Monospace-Skalen für Extraktionszeiten, Mahlgrade und Röstkurven.

### Rejected alternatives and reasons

- **Richtung B als alleiniges Primär-Layout verworfen:** Das rein technische Röst-Labor wirkte in der Gesamtanmutung zu kühl, akademisch und distanziert für genussorientierte Heimerzeuger.
- **Synthese-Entscheidung:** Die Stärken von Richtung B – die millimetergenauen Sensorik-Balken, Röstspezifikationen und die übersichtliche Barista-Logik – wurden vollständig in den Brührechner und die Geschmacksmatrix auf den Produktdetailseiten übernommen, eingebettet in die warme, einladende Magazin-Ästhetik von Richtung A.

### Implementation deviations

- **Keine externen Webfont-CDNs:** Google Fonts (`Fraunces`, `Plus Jakarta Sans`, `JetBrains Mono`) werden via Next.js `next/font/google` selbst gehostet, um Render-Blocking und externe Netzwerkabhängigkeiten zu vermeiden.
- **Lokale responsive Medien statt Cloud-Dienst:** Alle 6 Produktionsbilder werden lokal unter `public/media/` verwaltet und via `scripts/build-images.mjs` zu WebP-Varianten verarbeitet.
- **Ehrliche Demo-Architektur:** Bewusster Verzicht auf scheinbare Warenkörbe oder Pseudo-Kaufbuttons – stattdessen klare Fokussierung auf die beiden Signature Moments (Geschmacksfinder und Brührechner) mit echtem Nutzwert.

---

## 2. Synthetisierte Marken- und Gestaltungsspezifikation

### Farbwelt

- **Hintergrund Ground:** `#FAF7F2` (Warmes Naturpapier)
- **Hintergrund Card/Elevated:** `#FFFFFF` und `#F3EFE6` (Sand-Pergament)
- **Typografie Primary:** `#1C1613` (Dunkles Espresso-Schwarz, Kontrast > 13:1)
- **Typografie Secondary:** `#5E554D` (Mocca-Grau, Kontrast > 5.5:1)
- **Rahmenlinien:** `#E2DDD4` (1px feine Sandstein-Trennlinie)
- **Produkt 1 (Wiener Samt):** `#C24D36` (Terracotta-Karmin)
- **Produkt 2 (Flora Neubau):** `#E89C33` (Sonniges Apricot / Ocker)
- **Produkt 3 (Donau Klarheit):** `#2F7466` (Nordsee-Teal / Salbei)
- **Produkt 4 (Nachtfalter):** `#3B4B70` (Dämmerungs-Indigo)

### Typografie

- **Headlines / Display:** `Fraunces` (Google Font via `next/font/google`, Gewichte 400, 600)
- **Fließtext / UI:** `Plus Jakarta Sans` (Gewichte 400, 500, 600)
- **Metadaten / Parameter:** `JetBrains Mono` (Gewichte 400, 500)

### Die beiden Signature Moments

1. **Der RÖSTWERK Geschmacksfinder (`/geschmack`):**
   - 3 interaktive Schritte: Brühmethode → Aromenpräferenz → Röstgrad.
   - Deterministischer Matcher für eines der 4 Produkte.
   - Eigenständige, animierte Sensorik-Balken (Süße, Säure, Körper, Bitterkeit, Fruchtigkeit) – kein kopiertes SCA-Wheel!
   - Volle Barrierefreiheit (Radio-Group-Semantik, sichtbarer Fokus, Tastatur).
2. **Der RÖSTWERK Brührechner (`/bruehen`):**
   - 5 Methoden: V60 Handfilter (1:16.6), French Press (1:15), Chemex (1:16), Aeropress (1:12.5), Bialetti (1:10).
   - Flüssiger Mengenregler (100–800 ml) mit Tasten (1 Tasse / 2 Tassen / Kanne).
   - Live-Berechnung von Kaffeepulver (g), Wasser (g), Wassertemperatur (°C), Mahlgrad und Ziehzeit.
   - Reine Textausgabe mit `aria-live="polite"` für Screenreader.
