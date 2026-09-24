import Image from 'next/image';
import Link from 'next/link';

import { CoffeeCard } from '@/components/project/coffee-card';
import { coffeeProducts } from '@/data/coffee-products';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DDD4] bg-[#F3EFE6] px-3.5 py-1.5 text-xs font-mono tracking-wider text-[#5E554D]">
                <span
                  className="h-2 w-2 rounded-full bg-[#A6361F]"
                  aria-hidden="true"
                />
                <span>WIEN-NEUBAU · 1070</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1613] leading-[1.08]">
                Präzise Röstung. <br />
                <span className="text-[#A6361F] italic font-normal">
                  Lebendiger Geschmack.
                </span>
              </h1>

              <p className="max-w-xl text-lg sm:text-xl text-[#5E554D] leading-relaxed">
                Wir verbinden den Geist der Wiener Kaffeehauskultur mit der
                sensorischen Neugier der Third-Wave-Bewegung. Vier Sorten,
                schonend auf Trommelröstern veredelt und ehrlich deklariert.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/kaffee"
                  className="rounded-xl bg-[#1C1613] px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] shadow-sm hover:bg-[#A6361F] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
                >
                  Bohnen entdecken
                </Link>
                <Link
                  href="/geschmack"
                  className="rounded-xl border border-[#1C1613]/20 bg-[#FAF7F2] px-6 py-3.5 text-sm font-semibold text-[#1C1613] hover:border-[#A6361F] hover:text-[#A6361F] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
                >
                  Geschmacksfinder starten →
                </Link>
              </div>

              {/* Quick stats strip */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2DDD4] w-full max-w-lg text-[#1C1613]">
                <div>
                  <span className="block font-serif text-2xl font-bold">
                    100%
                  </span>
                  <span className="text-xs text-[#5E554D]">
                    Spezialitätenkaffee
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold">
                    15 kg
                  </span>
                  <span className="text-xs text-[#5E554D]">Trommelröstung</span>
                </div>
                <div>
                  <span className="block font-serif text-2xl font-bold">
                    1070
                  </span>
                  <span className="text-xs text-[#5E554D]">Wien Neubau</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-3xl border border-[#E2DDD4] shadow-xl">
                <Image
                  src="/media/roesterei-hero.jpg"
                  alt="Atmosphärische Aufnahme der RÖSTWERK 1070 Kaffeerösterei in Wien mit Trommelröster und Kaffeesäcken"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#FAF7F2]/80">
                      Röstwerkstatt · Neubaugasse
                    </p>
                    <p className="font-serif text-lg font-semibold">
                      Frische Röstungen im Trommelröster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Röstphilosophie: 3 Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E2DDD4] bg-[#F3EFE6] p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
              Unser Handwerk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-2 mb-4">
              Keine Geheimnisse. Nur exzellente Röstkurven.
            </h2>
            <p className="text-base text-[#5E554D] leading-relaxed">
              Kaffee ist ein Naturprodukt von enormer aromatischer Komplexität.
              Wir machen Schluss mit elitären Barista-Phrasen und schaffen
              transparente, nachvollziehbare Geschmackserlebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#FAF7F2] p-6 border border-[#E2DDD4]/60 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A6361F]/10 text-[#A6361F] font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1613]">
                Sortenreinheit & Transparenz
              </h3>
              <p className="text-sm text-[#5E554D] leading-relaxed">
                Jede Charge wird nach Anbauhöhe, Aufbereitung und Varietät
                selektiert. Keine minderwertigen Füllbohnen, keine
                verschleierten Mischungen.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF7F2] p-6 border border-[#E2DDD4]/60 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E89C33]/15 text-[#99570B] font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1613]">
                Schonende Trommelröstung
              </h3>
              <p className="text-sm text-[#5E554D] leading-relaxed">
                Wir rösten langsam bei moderaten Temperaturen. So bauen wir
                aggressive Fruchtsäuren ab und karamellisieren die natürlichen
                Zuckerstoffe für seidige Süße.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF7F2] p-6 border border-[#E2DDD4]/60 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2F7466]/10 text-[#2F7466] font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1613]">
                Sensorische Vermessung
              </h3>
              <p className="text-sm text-[#5E554D] leading-relaxed">
                Alle Röstungen werden auf einer 5-Punkte-Sensorikskala (Süße,
                Säure, Körper, Bitterkeit, Fruchtigkeit) evaluiert – damit du
                genau weißt, was in deiner Tasse landet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Range Preview (All 4 coffees) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
              Die Kollektion
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1613] mt-2">
              Vier Röstungen für jeden Moment
            </h2>
          </div>
          <Link
            href="/kaffee"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A6361F] hover:underline"
          >
            <span>Gesamtes Sortiment filtern</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coffeeProducts.map((coffee, idx) => (
            <CoffeeCard key={coffee.id} coffee={coffee} priority={idx === 0} />
          ))}
        </div>
      </section>

      {/* 4. Signature Moment Teaser: Geschmacksfinder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-[#1C1613] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 relative">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E89C33] font-semibold">
              Signature Tool · Interaktiver Finder
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Finde deinen idealen Kaffee in 60 Sekunden.
            </h2>
            <p className="text-[#FAF7F2]/80 text-base sm:text-lg leading-relaxed">
              Ob du dichte Schokoladen-Crema im Siebträger liebst, florale
              Frische im Handfilter suchst oder abends einen vollmundigen
              koffeinfreien Genuss bevorzugst: Unser dreistufiger Finder liefert
              die passende Empfehlung mit sensorischer Begründung.
            </p>
            <div className="pt-2">
              <Link
                href="/geschmack"
                className="inline-flex items-center gap-2 rounded-xl bg-[#A6361F] px-7 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#d6573e] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Geschmacksfinder starten</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Decorative graphic backdrop */}
          <div
            className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-[#A6361F]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 5. Signature Moment Teaser: Brührechner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#E2DDD4]">
            <Image
              src="/media/bruehen-guide.jpg"
              alt="Präzises Aufgießen von Handfilter-Kaffee mit Schwanenhalskessel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2F7466] font-semibold">
              Barista-Präzision für zu Hause
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
              Der RÖSTWERK Brührechner
            </h2>
            <p className="text-base text-[#5E554D] leading-relaxed">
              Guter Kaffee gelingt durch das richtige Verhältnis. Unser
              interaktiver Mengenrechner kalkuliert für V60, French Press,
              Chemex, Aeropress und Bialetti die genauen Gramm Kaffeemehl,
              Wassermengen und Ziehzeiten.
            </p>

            <ul className="space-y-2 text-sm text-[#1C1613]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F7466]" />
                <span>Exakte Ratios je Zubereitungsmethode</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F7466]" />
                <span>Empfohlene Mahlgrade und Wassertemperaturen</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F7466]" />
                <span>Tastatur- und Screenreader-freundlich</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/bruehen"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1C1613] bg-[#FAF7F2] px-6 py-3.5 text-sm font-semibold text-[#1C1613] hover:bg-[#1C1613] hover:text-[#FAF7F2] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1613]"
              >
                <span>Zum Brührechner</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Honest Portfolio & Concept Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E2DDD4] bg-[#F3EFE6]/70 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5E554D] font-semibold">
              Transparenz & Einordnung
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1C1613]">
              Ein fiktives Portfolio-Showcase aus Wien
            </h3>
            <p className="text-sm text-[#5E554D] max-w-2xl leading-relaxed">
              RÖSTWERK 1070 ist eine eigenständige Demonstration für Brand
              Identity, Next.js 16, React 19 und barrierefreie UI-Interaktionen.
              Kein realer Handel, keine Scheinkäufe.
            </p>
          </div>
          <Link
            href="/roesterei"
            className="shrink-0 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] px-4 py-2.5 text-xs font-semibold text-[#1C1613] hover:bg-[#E2DDD4] transition-colors"
          >
            Mehr zur Idee erfahren →
          </Link>
        </div>
      </section>
    </div>
  );
}
