import type { Metadata } from 'next';
import Image from 'next/image';
import { BrewCalculator } from '@/components/project/brew-calculator';

export const metadata: Metadata = {
  title: 'Brühguide & Mengenrechner | RÖSTWERK 1070',
  description:
    'Der interaktive Brührechner von RÖSTWERK 1070: Berechne Kaffeepulver, Wassermenge, Mahlgrad und Ziehzeit für V60, French Press, Chemex, Aeropress und Bialetti.',
};

export default function BruehenPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold mb-3">
              Signature Moment 02 · Präzision & Handwerk
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-6 tracking-tight">
              Das perfekte Brühverhältnis.
            </h1>
            <p className="text-base md:text-lg text-[var(--color-espresso)]/85 font-sans leading-relaxed mb-6">
              Kaffeekochen ist Handwerk und Physik. Wähle deine Brühmethode und
              die gewünschte Tassenmenge – unser Rechner liefert dir die idealen
              Ausgangswerte für Kaffeemehl, Wasser, Mahlgrad und Ziehzeit.
            </p>
            <div className="inline-flex items-center gap-3 text-xs font-mono text-[var(--color-espresso)]/70 bg-white px-4 py-2 rounded-full border border-[var(--color-espresso)]/10">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-sage)]"></span>
              <span>
                5 Methoden · Automatische Grammberechnung · 4 Schritte
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--color-espresso)]/10 shadow-sm bg-[var(--color-surface)]">
            <Image
              src="/media/bruehen-guide.jpg"
              alt="Handfilter-Kaffeezubereitung mit V60 und Glas-Server im Sonnenlicht"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </header>

        {/* The Interactive Brew Calculator */}
        <BrewCalculator />
      </div>
    </div>
  );
}
