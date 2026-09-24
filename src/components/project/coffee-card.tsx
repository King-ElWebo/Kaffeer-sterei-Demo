import Image from 'next/image';
import Link from 'next/link';

import type { CoffeeProduct } from '@/data/coffee-products';

type CoffeeCardProps = {
  coffee: CoffeeProduct;
  priority?: boolean;
};

export function CoffeeCard({ coffee, priority = false }: CoffeeCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E2DDD4] bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#A6361F]"
      style={{
        borderColor: `${coffee.accentColor}33`,
      }}
    >
      {/* Top Media Section with Accent Color Tint */}
      <div
        className="relative aspect-square w-full overflow-hidden p-6 flex items-center justify-center transition-colors"
        style={{ backgroundColor: coffee.accentBg }}
      >
        <div className="relative h-full w-full max-w-[280px]">
          <Image
            src={coffee.image}
            alt={`Kaffeepackung ${coffee.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Roast badge */}
        <span
          className="absolute top-4 right-4 rounded-full px-3 py-1 font-mono text-[11px] font-semibold tracking-wider shadow-sm"
          style={{
            backgroundColor: coffee.accentColor,
            color: coffee.badgeTextColor,
          }}
        >
          {coffee.roastLevel}
        </span>
      </div>

      {/* Body Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#5E554D]">
            {coffee.process} · {coffee.origin}
          </p>
          <h3 className="font-serif text-2xl font-bold text-[#1C1613] group-hover:text-[#A6361F] transition-colors">
            <Link
              href={`/kaffee/${coffee.slug}`}
              className="focus:outline-none after:absolute after:inset-0"
            >
              {coffee.name}
            </Link>
          </h3>
        </div>

        <p className="text-sm text-[#5E554D] line-clamp-2 mb-4 leading-relaxed">
          {coffee.subtitle}
        </p>

        {/* Tasting Notes */}
        <div
          className="mb-6 flex flex-wrap gap-1.5"
          aria-label="Geschmacksnoten"
        >
          {coffee.tasteNotes.map((note) => (
            <span
              key={note}
              className="rounded-md border border-[#E2DDD4] bg-[#FFFFFF] px-2.5 py-1 text-xs font-medium text-[#1C1613]"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Bottom Details */}
        <div className="mt-auto flex items-center justify-between border-t border-[#E2DDD4] pt-4">
          <span className="font-mono text-sm font-semibold text-[#1C1613]">
            {coffee.priceSample}
          </span>
          <span
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#1C1613] group-hover:text-[#A6361F] transition-all group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <span>Details</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </article>
  );
}
