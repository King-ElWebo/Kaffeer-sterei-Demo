import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { TasteProfileChart } from '@/components/project/taste-profile-chart';
import { coffeeProducts, getCoffeeBySlug } from '@/data/coffee-products';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return coffeeProducts.map((coffee) => ({
    slug: coffee.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const coffee = getCoffeeBySlug(slug);

  if (!coffee) {
    return {
      title: 'Kaffee nicht gefunden',
    };
  }

  return {
    title: `${coffee.name} | RÖSTWERK 1070`,
    description: `${coffee.name} – ${coffee.subtitle}. Geschmacksnoten: ${coffee.tasteNotes.join(', ')}. Handwerklich geröstet in Wien-Neubau.`,
  };
}

export default async function CoffeeDetailPage({ params }: Props) {
  const { slug } = await params;
  const coffee = getCoffeeBySlug(slug);

  if (!coffee) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/kaffee"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5E554D] hover:text-[#A6361F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] rounded"
        >
          <span aria-hidden="true">←</span>
          <span>Zurück zum Sortiment</span>
        </Link>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Product Artwork Container */}
        <div className="lg:col-span-6 relative">
          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[#E2DDD4] p-8 sm:p-12 flex items-center justify-center shadow-sm"
            style={{ backgroundColor: coffee.accentBg }}
          >
            <div className="relative h-full w-full max-w-md">
              <Image
                src={coffee.image}
                alt={`Kaffeepackung ${coffee.name} - ${coffee.subtitle}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Roast badge */}
            <span
              className="absolute top-6 right-6 rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-wider shadow-md"
              style={{
                backgroundColor: coffee.accentColor,
                color: coffee.badgeTextColor,
              }}
            >
              {coffee.roastLevel} Roast
            </span>
          </div>
        </div>

        {/* Right: Product Narrative & Information */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#5E554D] font-semibold">
              {coffee.origin} · {coffee.process}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613] mt-2 mb-3">
              {coffee.name}
            </h1>
            <p className="text-lg text-[#5E554D] leading-relaxed">
              {coffee.subtitle}
            </p>
          </div>

          {/* Tasting Notes Chips */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#1C1613] font-semibold mb-2.5">
              Geschmacksprofil & Aromen
            </h2>
            <div className="flex flex-wrap gap-2">
              {coffee.tasteNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-lg border px-3 py-1.5 text-sm font-semibold shadow-xs"
                  style={{
                    borderColor: `${coffee.accentColor}55`,
                    backgroundColor: coffee.accentBg,
                    color: '#1C1613',
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Sensory Taste Profile Gauge */}
          <TasteProfileChart
            profile={coffee.tasteProfile}
            accentColor={coffee.accentColor}
            title={`Sensorische Skala: ${coffee.name}`}
          />

          {/* Long Description */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#1C1613]">
              Über diesen Kaffee
            </h2>
            <p className="text-sm sm:text-base text-[#5E554D] leading-relaxed">
              {coffee.description}
            </p>
          </div>

          {/* Technical Specs Ledger */}
          <div className="rounded-xl border border-[#E2DDD4] bg-[#FAF7F2] p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1C1613] font-semibold mb-3">
              Röst- & Anbaudaten
            </h3>
            <dl className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <dt className="text-[#5E554D]">Anbauhöhe</dt>
                <dd className="font-semibold text-[#1C1613]">
                  {coffee.elevation}
                </dd>
              </div>
              <div>
                <dt className="text-[#5E554D]">Aufbereitung</dt>
                <dd className="font-semibold text-[#1C1613]">
                  {coffee.process}
                </dd>
              </div>
              <div>
                <dt className="text-[#5E554D]">Empfohlene Methoden</dt>
                <dd className="font-semibold text-[#1C1613]">
                  {coffee.bestFor.join(', ')}
                </dd>
              </div>
              <div>
                <dt className="text-[#5E554D]">Musterpreis (fiktiv)</dt>
                <dd className="font-mono font-semibold text-[#1C1613]">
                  {coffee.priceSample} (250g)
                </dd>
              </div>
            </dl>
          </div>

          {/* Brew Recipe Start Point */}
          <div className="rounded-xl border border-[#E2DDD4] bg-[#F3EFE6] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#1C1613]">
                Empfohlenes Startrezept
              </h3>
              <span className="font-mono text-xs text-[#5E554D]">
                {coffee.brewRecipe.method}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E2DDD4]/60">
                <span className="block font-mono text-base font-bold text-[#1C1613]">
                  {coffee.brewRecipe.coffeeGrams} g
                </span>
                <span className="text-[11px] text-[#5E554D]">Kaffee</span>
              </div>
              <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E2DDD4]/60">
                <span className="block font-mono text-base font-bold text-[#1C1613]">
                  {coffee.brewRecipe.waterGrams} g
                </span>
                <span className="text-[11px] text-[#5E554D]">Wasser</span>
              </div>
              <div className="rounded-lg bg-[#FAF7F2] p-3 border border-[#E2DDD4]/60">
                <span className="block font-mono text-base font-bold text-[#1C1613]">
                  {coffee.brewRecipe.tempC} °C
                </span>
                <span className="text-[11px] text-[#5E554D]">Temperatur</span>
              </div>
            </div>

            <p className="text-xs text-[#5E554D] leading-relaxed">
              <strong className="text-[#1C1613]">Barista-Tipp:</strong>{' '}
              {coffee.brewRecipe.tips}
            </p>

            <Link
              href="/bruehen"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C1613] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#A6361F] transition-colors"
            >
              <span>Im Brührechner anpassen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Honest Concept Notice */}
          <div className="rounded-lg border border-[#E2DDD4] bg-[#FAF7F2] p-4 text-xs text-[#5E554D]">
            <strong className="text-[#1C1613] block mb-1">
              Hinweis zum Portfolio-Konzept:
            </strong>
            Dieses Produkt und die Preisangaben sind Teil eines fiktiven Design-
            und Frontend-Showcases. Es findet kein Verkauf oder Versand statt.
          </div>
        </div>
      </div>
    </div>
  );
}
