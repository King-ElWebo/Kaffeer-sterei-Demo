# Acceptance contract

Specification status: READY

This document owns the completion and verification criteria for the configured showcase. It verifies the scope, visual direction, and content defined by the other project specifications; it must not silently introduce, expand, or contradict product scope. If a proposed check requires new functionality, first update the owning specification explicitly.

## Project-specific acceptance

- [x] Die Website verkörpert die eigenständige Markenwelt von **RÖSTWERK 1070** (Wien-Neubau) mit warmer Naturpapier-Ästhetik (`#FAF7F2`), tiefer Espresso-Typografie (`#1C1613`), Fraunces-Serifen-Headlines und 4 charakterstarken Produkt-Farbfamilien. Weder KERN / FIELD noch generische Shop-Templates werden kopiert.
- [x] Beide Signature Moments funktionieren auf allen Ziel-Viewports (320px bis 1920px), mit Tastatur, Touch und bei `prefers-reduced-motion: reduce`:
  1. **Geschmacksfinder (`/geschmack`):** 3-stufige Auswahl führt deterministisch zu einem der 4 Kaffees samt individueller Begründung, eigener Geschmacksmatrix (kein SCA-Wheel-Plagiat) und funktionierendem Link zur Produktdetailseite.
  2. **Brühguide & Mengenrechner (`/bruehen`):** Auswahl aus 5 Brühmethoden (V60, French Press, Chemex, Aeropress, Bialetti) mit Mengenregler berechnet Gramm Kaffeepulver, Wassermenge, Mahlgrad, Wassertemperatur und Brühdauer; Werte sind als Text im DOM und für Screenreader (`aria-live`) zugänglich.
- [x] Alle 4 Kaffeesorten (`wiener-samt`, `flora-neubau`, `donau-klarheit`, `nachtfalter`) sind mit individuellen Produktseiten, sensorischen Steckbriefen, Startrezepten und eigenen Produktverpackungen umgesetzt.
- [x] Das Projekt ist transparent und unmissverständlich als fiktives Portfolio-Konzept gekennzeichnet. Es gibt keine Schein-Bestellungen, Fake-Checkouts oder erfundenen Kundendaten.

## Routes and behavior

- [x] Jede in [`SITE.md`](SITE.md) definierte Route existiert und ist in `tests/e2e/routes.ts` registriert:
  - `/` (Home)
  - `/kaffee` (Sortiment & Filter)
  - `/kaffee/wiener-samt` (Produktdetail)
  - `/kaffee/flora-neubau` (Produktdetail)
  - `/kaffee/donau-klarheit` (Produktdetail)
  - `/kaffee/nachtfalter` (Produktdetail)
  - `/geschmack` (Geschmacksfinder)
  - `/bruehen` (Brühguide)
  - `/roesterei` (Über uns & Konzept)
- [x] Jede Route lädt direkt und fehlerfrei (HTTP 200).
- [x] Die Navigation (Header, Drawer-Menü, Footer, interne Breadcrumbs) leitet zielgerichtet zu den Zielrouten.
- [x] Kein Steuerelement hat tote `#`-Ziele; alle Buttons und Links besitzen definierte Aktionen.
- [x] Browser Back/Forward verhält sich stabil bei allen Interaktionen.
- [x] Not-Found-Handling (`notFound()`) existiert für ungültige Kaffeeslugs (`/kaffee/unbekannt`).

## Responsive layout

| Review target | Default viewport | Project value |
| ------------- | ---------------- | ------------- |
| Small mobile  | 320 × 568        | 320 × 568     |
| Modern mobile | 390 × 844        | 390 × 844     |
| Tablet        | 768 × 1024       | 768 × 1024    |
| Laptop        | 1440 × 1000      | 1440 × 1000   |
| Large desktop | 1920 × 1080      | 1920 × 1080   |

- [x] Desktop-Layouts wahren die typografische Hierarchie, asymmetrische Rhythmen und die Side-by-Side-Anordnung von Brührechner und Rezept.
- [x] Tablet-Layouts transformieren zweispaltig und ergonomisch, ohne Desktop lediglich zu schrumpfen.
- [x] Mobile Layouts sind daumenoptimiert gestaltet; Buttons bieten mindestens 44×44px Klickfläche.
- [x] Zwischenbreiten (z.B. 414px, 834px, 1024px) wurden visuell geprüft.
- [x] Kein Viewport weist horizontales Dokumenten-Overflow (`scrollWidth > clientWidth`) auf.
- [x] Keine unerwünschten Überlappungen von Texten, Badges oder Bildern.
- [x] Keine abgeschnittenen Fokus-Indikatoren oder Bedienelemente.
- [x] Alle Bilder besitzen korrekte Seitenverhältnisse ohne Verzerrung.
- [x] Keine `TEMPLATE_NOT_CONFIGURED`- oder Platzhalter-Fragmente im fertigen Stand.

## Browser health

- [x] `pnpm build` erzeugt erfolgreich den statischen Ordner `out/`; jede Route lädt und reloaded unter `wrangler pages dev out` mit HTTP 200.
- [x] Lokale responsive WebP-Bildvarianten (`public/media/responsive/`) werden über den internen Next.js Image-Loader fehlerfrei ausgeliefert, ohne Next.js Server oder externe Bild-CDNs.
- [x] Null ungefangene JavaScript-Laufzeitfehler (`pageerror`) auf allen Routen.
- [x] Null unerwartete Browser-Konsolenfehler (`console.error`).
- [x] Alle Bilder und lokalen Assets laden deterministisch ohne externe Netzwerkausfälle.

## Accessibility

- [x] Vollständige Tastaturbedienbarkeit: Alle Buttons, Filter, Links und Slider sind per Tab und Pfeiltasten erreichbar und bedienbar.
- [x] Deutlich sichtbare, barrierefreie Fokus-Indikatoren (`focus-visible:ring-2 focus-visible:ring-[#C24D36] focus-visible:ring-offset-2`).
- [x] Native semantische HTML5-Elemente (`header`, `nav`, `main`, `section`, `article`, `footer`, `button`, `input`).
- [x] Sinnvolle H1–H3 Überschriftenhierarchie auf jeder Seite.
- [x] Alle informativen Bilder besitzen kontextuelle, deskriptive deutsche Alt-Texte; rein dekorative Vektoren haben `aria-hidden="true"`.
- [x] Textkontraste übertreffen WCAG 2.2 AA (Fließtext > 5.5:1, Headlines > 13:1, Buttons > 4.5:1).
- [x] Keine Hover-only-Interaktionen: Alle Informationen und Werkzeuge sind per Touch und Tastatur voll zugänglich.
- [x] `prefers-reduced-motion` schaltet Translationen und Sprung-Animationen aus.
- [x] Der automatisierte Axe-Accessibility-Scan meldet **0** ernsthafte oder kritische Verstöße auf allen Routen.

## Motion and performance

- [x] Jede Animation erfüllt einen klaren Orientierungszweck (Seiten-Entrance, Zustandswechsel im Finder, Wertanpassung im Rechner).
- [x] Schnelles Klick-Feedback (`scale-[0.98]` bei `:active`).
- [x] Performante CSS- und Motion-Transformationen (`transform`, `opacity`), kein dauerhaftes `will-change`.
- [x] Natives Scrolling ohne externe Scroll-Hijacking-Bibliotheken.
- [x] `next/image` verwendet korrekte Dimensionen, intrinsische Verhältnisse und präzise responsive `sizes`.
- [x] Webfonts (`Fraunces`, `Plus Jakarta Sans`, `JetBrains Mono`) werden lokal und performant via `next/font` eingebunden.

## Metadata and production quality

- [x] Routentitel und Meta-Beschreibungen stimmen mit [`CONTENT.md`](CONTENT.md) überein.
- [x] Robots-Einstellung: `noindex, nofollow` verhindert Verwechslung mit realen Shops.
- [x] TypeScript Strict Checks (`pnpm typecheck`) laufen ohne `any` oder `@ts-ignore` fehlerfrei durch.
- [x] ESLint (`pnpm lint`) besteht ohne Regelunterdrückungen.
- [x] Playwright E2E-Tests (`pnpm test:e2e`) bestehen auf Mobile und Desktop.
- [x] Statischer Wrangler Pages Test (`pnpm test:static`) besteht fehlerfrei.
- [x] Vollständiger Aggregat-Lauf `pnpm qa` läuft in einem Durchlauf komplett grün durch.

## Visual review and final polish

- [x] Screenshots aller relevanten Routen und Viewports wurden erstellt und visuell bewertet.
- [x] Feinschliff an Abständen, Schriftgrößen, Kanten und Farbkontrasten wurde durchgeführt.
- [x] Dedizierte Motion- und Accessibility-Prüfung im realen Browser wurde durchgeführt.
- [x] Einheitliche, hochwertige Gesamtwirkung als professionelle Portfolio-Präsentation sichergestellt.

## Required evidence

| Evidence                | Required record                                                        |
| ----------------------- | ---------------------------------------------------------------------- |
| Routes and interactions | Alle 9 Routen, Filterfunktion, Geschmacksfinder-Flow, Brührechner-Flow |
| Responsive review       | Viewports 320, 390, 768, 834, 1024, 1440, 1920 px                      |
| Browser health          | 0 Konsolenfehler, 0 Page-Errors, HTTP 200 auf allen Pfaden             |
| Accessibility           | Axe-Clean (0 Violations), Fokus- und Kontrastprüfung dokumentiert      |
| Engineering             | Frischer Output von `pnpm lint`, `pnpm typecheck`, `pnpm build`        |
| Browser tests           | Frischer Output von `pnpm test:e2e`                                    |
| Full local validation   | Frischer Output des Aggregats `pnpm qa`                                |
| Remaining limitations   | Transparenter Abschlussbericht                                         |
