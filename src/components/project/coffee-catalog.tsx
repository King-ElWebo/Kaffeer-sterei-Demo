'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import { CoffeeCard } from '@/components/project/coffee-card';
import type { CoffeeProduct } from '@/data/coffee-products';

type FilterKey = 'all' | 'filter' | 'espresso' | 'decaf';

const FILTERS: { key: FilterKey; label: string; countSuffix?: string }[] = [
  { key: 'all', label: 'Alle Röstungen' },
  { key: 'filter', label: 'Filterkaffee' },
  { key: 'espresso', label: 'Espresso & Siebträger' },
  { key: 'decaf', label: 'Entkoffeiniert' },
];

export function CoffeeCatalog({
  initialProducts,
}: {
  initialProducts: CoffeeProduct[];
}) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return initialProducts;
    if (activeFilter === 'filter') {
      return initialProducts.filter((p) => p.bestForKeys.includes('filter'));
    }
    if (activeFilter === 'espresso') {
      return initialProducts.filter(
        (p) =>
          p.bestForKeys.includes('espresso') ||
          p.bestForKeys.includes('bialetti'),
      );
    }
    if (activeFilter === 'decaf') {
      return initialProducts.filter((p) => p.bestForKeys.includes('decaf'));
    }
    return initialProducts;
  }, [activeFilter, initialProducts]);

  return (
    <div className="space-y-10">
      {/* Filter Tabs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2DDD4] pb-6">
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Kaffee nach Zubereitungsmethode filtern"
        >
          {FILTERS.map((tab) => {
            const isSelected = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                aria-pressed={isSelected}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] ${
                  isSelected
                    ? 'bg-[#1C1613] text-[#FAF7F2] shadow-sm font-semibold'
                    : 'bg-[#F3EFE6] text-[#5E554D] hover:bg-[#E2DDD4] hover:text-[#1C1613]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Counter & Helper */}
        <p className="font-mono text-xs text-[#5E554D]" aria-live="polite">
          {filteredProducts.length}{' '}
          {filteredProducts.length === 1
            ? 'Sorte angezeigt'
            : 'Sorten angezeigt'}
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#E2DDD4] p-12 text-center">
          <p className="text-[#5E554D] mb-4">
            Keine Kaffeesorte für diesen Filter gefunden.
          </p>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className="rounded-lg bg-[#A6361F] px-4 py-2 text-sm font-semibold text-white"
          >
            Alle Röstungen anzeigen
          </button>
        </div>
      )}

      {/* Flavor Finder Callout */}
      <div className="rounded-2xl border border-[#E2DDD4] bg-[#F3EFE6] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif text-xl font-bold text-[#1C1613]">
            Noch unsicher, welche Bohne zu dir passt?
          </h3>
          <p className="text-sm text-[#5E554D] max-w-xl">
            Unser interaktiver Geschmacksfinder ermittelt anhand deiner
            Brühmethode und Geschmacksvorlieben deine ideale Röstwerk-Sorte.
          </p>
        </div>
        <Link
          href="/geschmack"
          className="shrink-0 rounded-xl bg-[#A6361F] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#d6573e] transition-all active:scale-98"
        >
          Zum Geschmacksfinder →
        </Link>
      </div>
    </div>
  );
}
