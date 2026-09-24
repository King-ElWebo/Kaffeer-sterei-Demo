import type { Metadata } from 'next';
import { FlavorFinder } from '@/components/project/flavor-finder';

export const metadata: Metadata = {
  title: 'Geschmacksfinder | Finde deinen Kaffee | RÖSTWERK 1070',
  description:
    'Der interaktive RÖSTWERK Geschmacksfinder führt dich in drei Schritten zur idealen Kaffeebohne für deine Zubereitung und Vorlieben.',
};

export default function GeschmackPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold mb-3">
            Signature Moment 01 · Sensorische Zuordnung
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[var(--color-espresso)] mb-4 tracking-tight">
            Der RÖSTWERK Geschmacksfinder
          </h1>
          <p className="text-base md:text-lg text-[var(--color-espresso)]/80 font-sans leading-relaxed">
            Drei einfache Fragen zu deiner Zubereitung, deinen Aromavorlieben
            und deinem Röstprofil – und wir zeigen dir die Bohne, die wirklich
            zu dir passt.
          </p>
        </header>

        {/* The Interactive Flavor Finder */}
        <FlavorFinder />
      </div>
    </div>
  );
}
