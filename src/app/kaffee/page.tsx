import type { Metadata } from 'next';

import { CoffeeCatalog } from '@/components/project/coffee-catalog';
import { coffeeProducts } from '@/data/coffee-products';

export const metadata: Metadata = {
  title: 'Unsere Röstungen | Sortiment',
  description:
    'Entdecke alle vier Röstungen von RÖSTWERK 1070: Wiener Samt, Flora Neubau, Donau Klarheit und Nachtfalter. Filterbar nach Brühmethode und Röstgrad.',
};

export default function CoffeeIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Page Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
          Sortiment & Röstungen
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1613] mt-2 mb-4">
          Kaffee mit Charakter und Herkunft.
        </h1>
        <p className="text-base sm:text-lg text-[#5E554D] leading-relaxed">
          Jede Röstung ist ein Unikat. Schonend geröstet im 7. Wiener Bezirk,
          abgestimmt auf Siebträger, Handfilter und täglichen Kaffeegenuss.
          Wähle deine Zubereitungsmethode für die passende Empfehlung.
        </p>
      </div>

      {/* Catalog with Filter */}
      <CoffeeCatalog initialProducts={coffeeProducts} />
    </div>
  );
}
