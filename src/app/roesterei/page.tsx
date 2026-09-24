import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unsere Rösterei in 1070 Wien | RÖSTWERK 1070',
  description:
    'Über RÖSTWERK 1070: Rösthandwerk im 7. Wiener Bezirk, unsere Philosophie der transparenten Sensorik und die Geschichte hinter diesem Portfolio-Showcase.',
};

export default function RoestereiPage() {
  return (
    <div className="py-12 md:py-20 space-y-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold">
              Wien-Neubau · Gegründet 2024 (Konzept)
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-espresso)] tracking-tight leading-[1.1]">
              Rösthandwerk aus Wien-Neubau.
            </h1>
            <p className="text-base md:text-lg text-[var(--color-espresso)]/85 font-sans leading-relaxed">
              Im kreativen Herzen Wiens verbinden wir das Erbe traditioneller
              Röstmeister mit moderner Sensorik und Freude am Experiment. Keine
              elitäre Geheimniskrämerei – sondern transparente, handwerkliche
              Perfektion für jede Tasse.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/kaffee"
                className="px-6 py-3.5 rounded-lg bg-[var(--color-espresso)] text-[var(--color-paper)] font-sans font-medium text-sm hover:bg-[var(--color-espresso)]/90 transition-colors shadow-sm"
              >
                Zu unseren Kaffees
              </Link>
              <Link
                href="/bruehen"
                className="px-6 py-3.5 rounded-lg bg-white border border-[var(--color-espresso)]/20 text-[var(--color-espresso)] font-sans font-medium text-sm hover:bg-[var(--color-surface)] transition-colors"
              >
                Brühguide entdecken
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-espresso)]/10 shadow-sm bg-[var(--color-surface)]">
            <Image
              src="/media/roesterei-hero.jpg"
              alt="Moderner Trommelröster und Kaffeesäcke in einer sonnendurchfluteten Wiener Kaffeerösterei"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Das Manifest */}
      <section className="bg-white border-y border-[var(--color-espresso)]/10 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold">
            Das RÖSTWERK-Versprechen
          </p>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--color-espresso)] leading-snug font-medium">
            „Guter Kaffee braucht kein Brimborium, sondern Respekt vor dem
            Rohkaffee, präzise Hitze und eine Sprache, die Menschen verstehen.“
          </blockquote>
          <p className="text-sm md:text-base text-[var(--color-espresso)]/75 max-w-2xl mx-auto font-sans leading-relaxed">
            Entstanden im 7. Wiener Bezirk zwischen Ateliers, Schanigärten und
            Kaffeehauskultur, befreien wir Spezialitätenkaffee von künstlicher
            Ehrfurcht. Wir rösten chargenweise auf einem 15-Kilo-Trommelröster
            und geben jedem Kaffee die Röstzeit, die seine Herkunft verlangt.
          </p>
        </div>
      </section>

      {/* 3 Handwerkssäulen */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold mb-2">
            Präzision im Detail
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-espresso)]">
            Wie bei uns Kaffee entsteht
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-espresso)]/10 shadow-sm space-y-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-espresso)]/15 text-[var(--color-espresso)] font-mono font-bold flex items-center justify-center text-sm">
              01
            </span>
            <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
              Direkte Selektion
            </h3>
            <p className="text-sm text-[var(--color-espresso)]/80 leading-relaxed font-sans">
              Wir arbeiten ausschließlich mit Rohkaffees von ausgewählten
              Partner-Kooperativen in Kolumbien, Äthiopien und Guatemala. Jede
              Charge wird transparent gehandelt – für faire Löhne und lückenlose
              Rückverfolgbarkeit bis zur einzelnen Finca.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[var(--color-espresso)]/10 shadow-sm space-y-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-espresso)]/15 text-[var(--color-espresso)] font-mono font-bold flex items-center justify-center text-sm">
              02
            </span>
            <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
              Schonende Trommelröstung
            </h3>
            <p className="text-sm text-[var(--color-espresso)]/80 leading-relaxed font-sans">
              Statt industrieller Schockröstung setzen wir auf kontrollierte,
              langsame Röstprofile auf Gusseisen. So bauen wir störende
              Säurespitzen ab und kitzeln die sortentypischen Aromen von Feige,
              Jasmin oder Zartbitterschokolade hervor.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[var(--color-espresso)]/10 shadow-sm space-y-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-espresso)]/15 text-[var(--color-espresso)] font-mono font-bold flex items-center justify-center text-sm">
              03
            </span>
            <h3 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
              Sensorik ohne Fachjargon
            </h3>
            <p className="text-sm text-[var(--color-espresso)]/80 leading-relaxed font-sans">
              Jede Röstung wird im Labor verkostet und in unserem
              fünfdimensionalen Aromenprofil abgebildet. Ob Süße, Frucht,
              Körper, Röstung oder Würze: Du siehst auf einen Blick, wie die
              Bohne schmeckt – und wie du sie am besten zubereitest.
            </p>
          </div>
        </div>
      </section>

      {/* Wiener Kaffeekultur & Neubau */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-surface)] p-8 sm:p-12 lg:p-16 rounded-3xl border border-[var(--color-espresso)]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold">
                Standort 1070 Wien
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-espresso)]">
                Kaffeehaustradition trifft modernen Freigeist
              </h2>
              <p className="text-sm md:text-base text-[var(--color-espresso)]/80 leading-relaxed font-sans">
                Wien ist weltweit berühmt für seine Kaffeehauskultur – ein Ort,
                an dem Zeit keine Rolle spielt und man bei einer Melange den Tag
                vorüberziehen lässt. In Neubau, zwischen Designstudios, Galerien
                und der Lebendigkeit der Neubaugasse, schlagen wir die Brücke
                ins 21. Jahrhundert: Die Gelassenheit des klassischen Wiener
                Kaffeehauses kombiniert mit kompromissloser Bohnenqualität und
                Third-Wave-Präzision.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[var(--color-espresso)]/10 text-center space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-espresso)]/60">
                Lokalität
              </span>
              <p className="font-serif font-bold text-lg text-[var(--color-espresso)]">
                Neubaugasse · 1070 Wien
              </p>
              <p className="text-xs text-[var(--color-espresso)]/70 font-sans">
                Fiktiver Standort im Herzen des 7. Bezirks · Österreich
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Showcase Transparenz (Honest Disclosure) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[var(--accent-terracotta)]/30 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[var(--accent-terracotta)]/10 text-[var(--accent-terracotta)]">
              Portfolio-Transparenz
            </span>
            <span className="text-xs font-mono text-[var(--color-espresso)]/60">
              Konzept & Engineering Showcase
            </span>
          </div>

          <h2 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
            Über dieses Projekt
          </h2>

          <p className="text-sm text-[var(--color-espresso)]/85 leading-relaxed font-sans">
            <strong>RÖSTWERK 1070</strong> ist eine fiktive Wiener
            Spezialitäten-Kaffeerösterei, konzipiert und entwickelt als
            eigenständige Portfolio-Arbeit für moderne Webentwicklung. Hier gibt
            es keine Scheinfunktionen: Sämtliche Berechnungen im Brührechner und
            Empfehlungen im Geschmacksfinder sind voll funktional implementiert.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-[var(--color-espresso)]/80">
            <div className="bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-espresso)]/5">
              <span className="font-semibold block text-[var(--color-espresso)]">
                Technologie-Stack:
              </span>
              Next.js 15 (App Router, Static Export), React 19, TypeScript,
              Tailwind CSS, Motion
            </div>
            <div className="bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-espresso)]/5">
              <span className="font-semibold block text-[var(--color-espresso)]">
                Barrierefreiheit & Güte:
              </span>
              WCAG 2.1 AA konform, Axe-Core verifiziert, vollständige Tastatur-
              & Screenreader-Unterstützung
            </div>
          </div>

          <div className="pt-2 text-xs text-[var(--color-espresso)]/70">
            Der vollständige Quellcode und die Spezifikationen sind im
            öffentlichen Repository dokumentiert:{' '}
            <a
              href="https://github.com/King-ElWebo/Kaffeer-sterei-Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-terracotta)] font-medium hover:underline inline-flex items-center gap-1"
            >
              King-ElWebo/Kaffeer-sterei-Demo ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
