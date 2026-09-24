# Content source of truth

Specification status: READY

This file owns the actual approved copy, products, projects, structured content data, contact details, and media assignments. Implementation modules such as `products.ts` or `projects.ts` may be derived from this document, but do not maintain conflicting manual sources of truth. Scope and behavior belong in [`SITE.md`](SITE.md), visual use and motion direction in [`DESIGN.md`](DESIGN.md), and completion checks in [`ACCEPTANCE.md`](ACCEPTANCE.md).

Do not use Lorem Ipsum. Do not replace supplied copy with generic AI marketing language.

## Brand content

- **Brand name:** RÖSTWERK 1070
- **Tagline:** Präzise geröstet. Klar im Geschmack. Wiener Kaffee neu gedacht.
- **Short descriptor:** Fiktives Portfolio-Showcase für eine zeitgenössische Specialty-Coffee-Rösterei im 7. Wiener Gemeindebezirk (Neubau).
- **Voice constraints:** Lebendig, sensorisch geschärft, warmherzig, fachlich glaubwürdig und vollkommen unprätentiös. Kein elitäres Barista-Gehabe, keine verstaubte Nostalgie. Vollständige Ehrlichkeit: Alle Produkte und Unternehmensangaben sind explizit als Portfolio-Konzept gekennzeichnet.
- **Required capitalization, punctuation, and naming:** In Dachzeilen und Logo „RÖSTWERK 1070“, im Fließtext „Röstwerk 1070“. Produkttitel immer in Anführungszeichen oder fett hervorgehoben („Wiener Samt“, „Flora Neubau“, „Donau Klarheit“, „Nachtfalter“).

## Navigation labels

| Label            | Destination/action | Mobile label if different | Rewrite allowed? |
| ---------------- | ------------------ | ------------------------- | ---------------- |
| Kaffee           | `/kaffee`          | Kaffee                    | No               |
| Geschmacksfinder | `/geschmack`       | Finder                    | Yes (kurz)       |
| Brühguide        | `/bruehen`         | Brühguide                 | No               |
| Rösterei         | `/roesterei`       | Über uns                  | Yes              |

## Page-by-page copy

### Route: `/` (Startseite)

- **Metadata title:** RÖSTWERK 1070 | Specialty Coffee Wien-Neubau
- **Metadata description:** Entdecke RÖSTWERK 1070: Handwerklich gerösteter Spezialitätenkaffee aus Wien Neubau. Mit interaktivem Geschmacksfinder und präzisem Brührechner.
- **Primary headline:** Spezialitätenkaffee, der Wiener Tradition lebendig macht.
- **Supporting copy:** Wir rösten sortenreine Kaffees mit transparenter Herkunft und sensorischer Präzision im Herzen von Wien-Neubau. Für Menschen, die Geschmack verstehen und zelebrieren wollen.
- **Primary CTA label and destination:** Bohnen entdecken → `/kaffee`
- **Secondary CTA label and destination:** Geschmacksfinder starten → `/geschmack`

| Section/content ID  | Eyebrow                     | Headline                                      | Body copy                                                                                                                                                                     | CTA                                  | Rewrite rule |
| ------------------- | --------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| `hero`              | Wien-Neubau · 1070          | Präzise Röstung. Lebendiger Geschmack.        | Vier charakterstarke Kaffees, maßgeschneidert für Siebträger, Handfilter und Alltag. Frisch geröstet, sensorisch vermessen und ehrlich deklariert.                            | „Zum Sortiment“ / „Finder“           | Exact        |
| `philosophy`        | Unser Handwerk              | Keine Geheimnisse. Nur exzellente Röstkurven. | Wir glauben an schonende Trommelröstung, nachvollziehbare Aromenprofile und die Demokratisierung von Specialty Coffee. Kein Fachchinesisch, sondern pure Freude an der Tasse. | „Über die Rösterei“ → `/roesterei`   | Shortenable  |
| `coffee-preview`    | Die Röstungen               | Vier Kaffees für jeden Moment                 | Vom samtig-schokoladigen Wiener Espresso über florale Äthiopien-Filterkaffees bis hin zum vollmundigen natürlichen Decaf.                                                     | „Alle Kaffees ansehen“ → `/kaffee`   | Shortenable  |
| `finder-teaser`     | Interaktives Tool           | Finde deinen perfekten Kaffee in 60 Sekunden  | Beantworte drei simple Fragen zu deiner Zubereitungsmethode und deinem Lieblingsaroma – unser Finder empfiehlt dir deine ideale Röstwerk-Bohne.                               | „Finder ausprobieren“ → `/geschmack` | Exact        |
| `brew-guide-teaser` | Barista-Wissen für zu Hause | Das richtige Verhältnis für jede Methode      | Unser dynamischer Brührechner kalkuliert Kaffeemehl, Wassertemperatur und Durchlaufzeit auf das Gramm genau.                                                                  | „Zum Brührechner“ → `/bruehen`       | Exact        |
| `concept-notice`    | Transparenz                 | Fiktives Portfolio-Konzept                    | RÖSTWERK 1070 ist eine eigenständige Design- und Frontend-Fallstudie. Es werden keine echten Waren vertrieben oder Zahlungen abgewickelt.                                     | Keine                                | Exact        |

### Route: `/kaffee` (Sortiment)

- **Metadata title:** Sortiment & Kaffeespezialitäten | RÖSTWERK 1070
- **Metadata description:** Entdecke alle vier Röstungen von RÖSTWERK 1070: Wiener Samt, Flora Neubau, Donau Klarheit und Nachtfalter. Filterbar nach Brühmethode und Röstgrad.
- **Primary headline:** Unsere Röstungen
- **Supporting copy:** Jeder Kaffee erzählt seine eigene Geschichte – von hell und floral bis samtig und nussig. Wähle deine Brühmethode für die passende Empfehlung.
- **Primary CTA label and destination:** Filter zurücksetzen (Interaktiv)
- **Secondary CTA label and destination:** Zum Geschmacksfinder → `/geschmack`

### Route: `/kaffee/[slug]` (Produktdetailseiten)

(Spezifische Inhalte je Produkt siehe Tabelle „Products, projects, cases, or other entities“)

### Route: `/geschmack` (Geschmacksfinder)

- **Metadata title:** Geschmacksfinder | Finde deinen Kaffee | RÖSTWERK 1070
- **Metadata description:** Der interaktive RÖSTWERK Geschmacksfinder führt dich in drei Schritten zur idealen Kaffeebohne für deine Zubereitung und Vorlieben.
- **Primary headline:** Der RÖSTWERK Geschmacksfinder
- **Supporting copy:** Drei einfache Fragen zu deiner Zubereitung, deinen Aromavorlieben und deinem Röstprofil – und wir zeigen dir die Bohne, die wirklich zu dir passt.
- **Primary CTA label and destination:** Empfehlung berechnen (Interaktiv)
- **Secondary CTA label and destination:** Auswahl zurücksetzen (Interaktiv)

### Route: `/bruehen` (Brühguide & Mengenrechner)

- **Metadata title:** Brühguide & Mengenrechner | RÖSTWERK 1070
- **Metadata description:** Der interaktive Brührechner von RÖSTWERK 1070: Berechne Kaffeepulver, Wassermenge, Mahlgrad und Ziehzeit für V60, French Press, Chemex, Aeropress und Bialetti.
- **Primary headline:** Das perfekte Brühverhältnis
- **Supporting copy:** Kaffeekochen ist Handwerk und Physik. Wähle deine Brühmethode und die gewünschte Tassenmenge – unser Rechner liefert dir die idealen Ausgangswerte für Kaffeemehl, Wasser und Ziehzeit.
- **Primary CTA label and destination:** Methode wählen (Interaktiv)
- **Secondary CTA label and destination:** Werte anpassen (Interaktiv)

### Route: `/roesterei` (Über die Rösterei & Handwerk)

- **Metadata title:** Unsere Rösterei in 1070 Wien | RÖSTWERK 1070
- **Metadata description:** Über RÖSTWERK 1070: Rösthandwerk im 7. Wiener Bezirk, unsere Philosophie der transparenten Sensorik und die Geschichte hinter diesem Portfolio-Showcase.
- **Primary headline:** Rösthandwerk aus Wien-Neubau.
- **Supporting copy:** Im kreativen Herzen Wiens verbinden wir das Erbe traditioneller Röstmeister mit moderner Sensorik und Freude am Experiment.
- **Primary CTA label and destination:** Zu unseren Kaffees → `/kaffee`
- **Secondary CTA label and destination:** Brühguide entdecken → `/bruehen`

## Products, projects, cases, or other entities

| ID               | Name/title     | Summary                                                                       | Detail copy                                                                                                                                                                                                                    | Price/metadata                                                           | Route/action             | Order |
| ---------------- | -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------ | ----- |
| `wiener-samt`    | Wiener Samt    | Kräftiger, samtig-schokoladiger Espresso für Siebträger und Bialetti.         | Eine Hommage an die Wiener Rösttradition in zeitgemäßer Präzision. Entwickelt für dichte Crema, intensive Schokoladennote und nussigen Abgang. Hervorragend pur als doppelter Espresso oder mit Milch als samtiger Cappuccino. | € 13,50 (250g Muster) · Röstgrad: Medium-Dark · Aufbereitung: Washed     | `/kaffee/wiener-samt`    | 1     |
| `flora-neubau`   | Flora Neubau   | Fruchtig-floraler Filterkaffee mit Noten von Bergamotte und Pfirsich.         | Unser Aushängeschild für Liebhaber heller Röstungen. Schmeckt wie ein Spaziergang durch einen sonnigen Frühlingsgarten. Klare Zitrusfrische, elegante Jasminnoten und ein sauberes, süßes Mundgefühl im V60-Handfilter.        | € 14,80 (250g Muster) · Röstgrad: Light · Aufbereitung: Natural          | `/kaffee/flora-neubau`   | 2     |
| `donau-klarheit` | Donau Klarheit | Harmonischer Allrounder mit Aromen von rotem Apfel, Honig und Haselnuss.      | Der Liebling für jeden Morgen. Ob klassischer Handfilter, French Press oder Vollautomat: Dieser Kaffee vereint milde Fruchtsüße mit warmen Karamell- und Nussnuancen ohne aufdringliche Säure.                                 | € 12,90 (250g Muster) · Röstgrad: Medium · Aufbereitung: Honey           | `/kaffee/donau-klarheit` | 3     |
| `nachtfalter`    | Nachtfalter    | Natürlich entkoffeinierter Spezialitätenkaffee mit Noten von Feige und Kakao. | Wer sagt, dass koffeinfreier Kaffee langweilig sein muss? Schonend mit Wasser und natürlichem Zuckerrohr-Verfahren entkoffeiniert, behält dieser Kaffee seine volle Würze, sanfte Feigensüße und feine Kakaotiefe.             | € 14,20 (250g Muster) · Röstgrad: Medium · Aufbereitung: Sugarcane Decaf | `/kaffee/nachtfalter`    | 4     |

## About content

- **Short about:** RÖSTWERK 1070 ist eine fiktive Mikrorösterei in Wien-Neubau, die Kaffeegenuss von Scheinkomplexität befreit und handwerkliche Sensorik erlebbar macht.
- **Long about or story:** Entstanden im 7. Wiener Bezirk zwischen Ateliers, Schanigärten und Kaffeehauskultur, steht RÖSTWERK 1070 für ein klares Versprechen: Kaffeebohnen von höchster Güte, schonend geröstet auf einem 15-Kilo-Trommelröster, mit transparenten Geschmacksprofilen und verständlicher Brühbegleitung. Wir machen keinen Hehl aus unseren Rezepten – wir teilen sie.
- **People, credentials, or dates:** Gegründet 2024 (fiktiv) als Innovationsprojekt für sensorische Kaffeekultur in Wien.
- **Facts that require verification:** Das Projekt ist ein eigenständiges Design- und Entwicklungsshowcase. Sämtliche Unternehmensdaten, Auszeichnungen und Zertifikate sind fiktiv.

## Contact information

- **Public email:** Entfällt – fiktives Portfolio-Showcase (kein Kundenservice).
- **Telephone:** Entfällt – keine reale Geschäftsnummer vorhanden.
- **Address/location:** Neubaugasse, 1070 Wien, Österreich (Fiktiver Standort / Konzeptangabe).
- **Opening/response hours:** Entfällt – kein physischer Publikumsverkehr.
- **Social labels and URLs:** GitHub-Repository: `https://github.com/King-ElWebo/Kaffeer-sterei-Demo`
- **Contact CTA behavior:** Kein Fake-Formular! Stattdessen transparenter Link zum Quellcode und Portfolio des Entwicklers.

## Footer content

- **Footer statement:** RÖSTWERK 1070 · Fiktives Konzept-Showcase für Specialty Coffee aus Wien-Neubau. Entwickelt mit Next.js, React, Tailwind CSS und Motion.
- **Navigation groups:**
  - Sortiment: Wiener Samt, Flora Neubau, Donau Klarheit, Nachtfalter
  - Werkzeuge: Geschmacksfinder, Brührechner, Brühguide
  - Rösterei: Philosophie, Handwerk, Standort 1070
- **Copyright/attribution:** © 2026 RÖSTWERK 1070 · Portfolio-Demonstration von ElWebo. Alle Rechte vorbehalten.
- **Newsletter or contact prompt:** Entfällt bewusst, um keine Schein-Eingaben vorzutäuschen.

## Legal and demo notices

- **Fictional/demo disclosure:** „Hinweis: RÖSTWERK 1070 ist ein fiktives Portfolio- und Konzeptprojekt zur Demonstration zeitgemäßer Webentwicklung und Brand Identity. Es findet kein Verkauf von Waren statt.“
- **Privacy, terms, cookie, or accessibility links:** Barrierefreiheits-Erklärung („Accessibility Statement: WCAG 2.2 AA konform konzipiert, semantisch strukturiert, mit Tastatur und Screenreader bedienbar“).
- **Rights and attribution language:** Bildrechte und Vektorgrafiken sind projektintern für diesen Demonstrationszweck lizenziert bzw. eigens generiert.

## Image and media assignments

| ID                    | File path                   | Intended use                     | Aspect ratio | Focal point | Alt text                                                                                            | Source                                            | License/rights             | Mobile crop/alternate     |
| --------------------- | --------------------------- | -------------------------------- | ------------ | ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------- | ------------------------- |
| `hero-roesterei`      | `/media/roesterei-hero.jpg` | Startseiten- und Rösterei-Hero   | 16:9 / 4:3   | Center      | Moderner Trommelröster und Kaffeesäcke in einer sonnendurchfluteten Wiener Kaffeerösterei           | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 4:3 zentrierter Beschnitt |
| `prod-wiener-samt`    | `/media/wiener-samt.jpg`    | Produktverpackung Wiener Samt    | 4:5 / 1:1    | Center      | Standbodenbeutel Wiener Samt Espresso mit terracottafarbenem Label und goldenem Siegel              | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 1:1 zentriert             |
| `prod-flora-neubau`   | `/media/flora-neubau.jpg`   | Produktverpackung Flora Neubau   | 4:5 / 1:1    | Center      | Standbodenbeutel Flora Neubau Filterkaffee mit sonnengelbem Label                                   | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 1:1 zentriert             |
| `prod-donau-klarheit` | `/media/donau-klarheit.jpg` | Produktverpackung Donau Klarheit | 4:5 / 1:1    | Center      | Standbodenbeutel Donau Klarheit Allround-Kaffee mit salbeigrünem Label                              | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 1:1 zentriert             |
| `prod-nachtfalter`    | `/media/nachtfalter.jpg`    | Produktverpackung Nachtfalter    | 4:5 / 1:1    | Center      | Standbodenbeutel Nachtfalter koffeinfreier Spezialitätenkaffee mit indigoblauem Label               | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 1:1 zentriert             |
| `bruehen-guide`       | `/media/bruehen-guide.jpg`  | Brühguide Hero und Illustration  | 16:9 / 1:1   | Center      | Barista gießt mit einem Schwanenhalskessel heißes Wasser über frisches Kaffeemehl im V60-Handfilter | Eigens generiert via Antigravity `generate_image` | Proprietary Showcase Asset | 1:1 zentriert             |

### Alt-text requirements

- Jedes Bild besitzt präzise, kontextuelle Alt-Texte auf Deutsch, die den visuellen Inhalt sachlich beschreiben.
- Keine Floskeln wie „Bild von“ oder „Foto von“.
- Dekorative Hilfslinien oder Schmuck-Icons werden mit `aria-hidden="true"` versehen.

## Responsive content behavior

- **Mobile-specific content changes:** Teaser-Texte werden auf schmalen Bildschirmen leicht gestrafft, ohne den Sinn zu verändern.
- **Content that changes order:** Auf Mobile wandert der Brührechner-Ergebnisblock unter die Schieberegler, um dem Daumenfluss zu folgen.
- **Media that changes by viewport:** Responsive `sizes`-Attribute (`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`) stellen sicher, dass mobile Geräte schlanke WebP-Auflösungen (480px / 640px) laden.

## Content that must never be rewritten

- Der Markenname: **RÖSTWERK 1070**
- Die vier Produktnamen: **„Wiener Samt“**, **„Flora Neubau“**, **„Donau Klarheit“**, **„Nachtfalter“**
- Der fiktive Portfolio-Hinweis im Footer und auf den Infoseiten.
- Die Brüh-Verhältnisse (z.B. V60 1:16.6, French Press 1:15, Bialetti 1:10).

## Content readiness checklist

- [x] Every visible text location has approved copy or an explicit derivation rule.
- [x] Every CTA has a label and real destination or action.
- [x] Entity values, prices, dates, and metadata are complete and internally consistent.
- [x] Every media assignment has rights information and an alt-text decision.
- [x] Responsive shortening never changes meaning.
- [x] No conflicting manually maintained content source exists.
- [x] Status is `READY`.
