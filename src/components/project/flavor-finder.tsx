'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { TasteProfileChart } from '@/components/project/taste-profile-chart';
import { coffeeProducts, type CoffeeProduct } from '@/data/coffee-products';

type MethodOption = 'espresso' | 'filter' | 'french-press' | 'allround';
type FlavorOption = 'chocolate' | 'fruit' | 'balance' | 'decaf';
type RoastOption = 'light' | 'medium' | 'medium-dark';

export function FlavorFinder() {
  const [step, setStep] = useState<number>(1);
  const [method, setMethod] = useState<MethodOption>('filter');
  const [flavor, setFlavor] = useState<FlavorOption>('fruit');
  const [roast, setRoast] = useState<RoastOption>('medium');

  const baseId = useId();

  // Deterministic matching logic based on the 4 real coffees
  const matchedCoffee: {
    coffee: CoffeeProduct;
    score: number;
    reason: string;
  } = (() => {
    // 1. Decaf priority
    if (flavor === 'decaf') {
      const coffee = coffeeProducts.find((p) => p.slug === 'nachtfalter')!;
      return {
        coffee,
        score: 98,
        reason:
          'Du suchst volles Kaffeearoma ohne Koffein-Aufregung. Unser „Nachtfalter“ wird mit natürlichem Zuckerrohrverfahren entkoffeiniert und besticht durch reiche Noten von süßer Feige und Kakao.',
      };
    }

    // 2. Light / Fruit priority
    if (flavor === 'fruit' || roast === 'light') {
      const coffee = coffeeProducts.find((p) => p.slug === 'flora-neubau')!;
      return {
        coffee,
        score: method === 'filter' ? 99 : 92,
        reason:
          'Für deine Vorliebe für fruchtige Frische und helle Röstungen ist „Flora Neubau“ ideal. Die äthiopischen Hochlandbohnen entfalten im Handfilter elegante Jasmin- und Bergamottnoten.',
      };
    }

    // 3. Espresso / Chocolate / Dark priority
    if (
      method === 'espresso' ||
      flavor === 'chocolate' ||
      roast === 'medium-dark'
    ) {
      const coffee = coffeeProducts.find((p) => p.slug === 'wiener-samt')!;
      return {
        coffee,
        score: method === 'espresso' ? 98 : 94,
        reason:
          'Deine Vorliebe für dichte Crema, samtigen Körper und Schokolade führt direkt zu „Wiener Samt“. Schonend mittel-dunkel geröstet, begeistert dieser Espresso pur oder im Cappuccino.',
      };
    }

    // 4. Balanced Allrounder default
    const coffee = coffeeProducts.find((p) => p.slug === 'donau-klarheit')!;
    return {
      coffee,
      score: 96,
      reason:
        'Du schätzt eine harmonische Balance aus Süße und milder Frucht ohne extreme Säurespitzen. „Donau Klarheit“ vereint Aromen von rotem Apfel, Waldhonig und gerösteter Haselnuss für jeden Tag.',
    };
  })();

  const resetFinder = () => {
    setStep(1);
    setMethod('filter');
    setFlavor('fruit');
    setRoast('medium');
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress Indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-mono text-[#5E554D] mb-2">
          <span>
            {step <= 3 ? `Schritt ${step} von 3` : 'Dein persönliches Ergebnis'}
          </span>
          <span>
            {step <= 3
              ? `${Math.round((step / 3) * 100)}% abgeschlossen`
              : '100%'}
          </span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-[#E2DDD4]"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={4}
          aria-label={`Finder-Fortschritt: Schritt ${step} von 3`}
        >
          <div
            className="h-full bg-[#A6361F] transition-all duration-500 ease-out"
            style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Screen Reader Announcement Live Region */}
      <div className="sr-only" aria-live="polite">
        {step === 1 && 'Schritt 1: Wähle deine bevorzugte Brühmethode.'}
        {step === 2 && 'Schritt 2: Wähle dein gewünschtes Geschmackserlebnis.'}
        {step === 3 && 'Schritt 3: Wähle deinen bevorzugten Röstgrad.'}
        {step === 4 &&
          `Ergebnis berechnet: Deine Empfehlung ist ${matchedCoffee.coffee.name}.`}
      </div>

      {/* Step 1: Zubereitungsmethode */}
      {step === 1 && (
        <section
          aria-labelledby={`${baseId}-step1-title`}
          className="space-y-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
              Frage 1 von 3
            </span>
            <h2
              id={`${baseId}-step1-title`}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1"
            >
              Wie bereitest du deinen Kaffee meistens zu?
            </h2>
            <p className="text-sm sm:text-base text-[#5E554D] mt-2">
              Jede Brühmethode stellt andere Anforderungen an Mahlgrad,
              Löslichkeit und Rösttiefe der Bohne.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            role="radiogroup"
            aria-label="Brühmethode auswählen"
          >
            {[
              {
                id: 'espresso',
                title: 'Espresso & Siebträger',
                desc: 'Hoher Brühdruck, dichte Crema, samtiger Körper und pure Intensität.',
                tag: 'Bialetti / Siebträger',
              },
              {
                id: 'filter',
                title: 'Handfilter (V60 / Chemex)',
                desc: 'Schwerkraft-Extraktion für maximale Klarheit und feine florale Nuancen.',
                tag: 'Tropf- & Pour-Over',
              },
              {
                id: 'french-press',
                title: 'French Press (Stempelkanne)',
                desc: 'Direkter Wasserkontakt für tiefe Süße, Fülle und kräftige Öle.',
                tag: 'Immersion',
              },
              {
                id: 'allround',
                title: 'Allrounder & Vollautomat',
                desc: 'Zuverlässig, unkompliziert, ausgewogen und magenfreundlich.',
                tag: 'Alltag & Büro',
              },
            ].map((opt) => {
              const isSelected = method === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setMethod(opt.id as MethodOption)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] ${
                    isSelected
                      ? 'border-[#A6361F] bg-[#FAF7F2] shadow-md ring-2 ring-[#A6361F]/20'
                      : 'border-[#E2DDD4] bg-[#FFFFFF] hover:border-[#A6361F]/50 hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-xl font-bold text-[#1C1613]">
                      {opt.title}
                    </span>
                    <span
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-[#A6361F] bg-[#A6361F]'
                          : 'border-[#E2DDD4]'
                      }`}
                    >
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E554D] leading-relaxed mb-4">
                    {opt.desc}
                  </p>
                  <span className="mt-auto inline-block self-start rounded font-mono text-[10px] uppercase tracking-wider text-[#5E554D] bg-[#F3EFE6] px-2 py-0.5">
                    {opt.tag}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C1613] px-7 py-3.5 text-sm font-semibold text-[#FAF7F2] shadow-sm hover:bg-[#A6361F] transition-colors active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
            >
              <span>Weiter zu Frage 2</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {/* Step 2: Geschmackserlebnis */}
      {step === 2 && (
        <section
          aria-labelledby={`${baseId}-step2-title`}
          className="space-y-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
              Frage 2 von 3
            </span>
            <h2
              id={`${baseId}-step2-title`}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1"
            >
              Welches Aromenerlebnis suchst du?
            </h2>
            <p className="text-sm sm:text-base text-[#5E554D] mt-2">
              Bohnen bringen von Natur aus unterschiedliche sensorische Noten
              mit – von spritziger Frucht bis zu warmer Zartbitterschokolade.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            role="radiogroup"
            aria-label="Geschmacksprofil auswählen"
          >
            {[
              {
                id: 'chocolate',
                title: 'Schokolade & Nuss',
                desc: 'Dunkler Kakao, geröstete Mandeln, dichter Körper und dezente Säure.',
                color: '#A6361F',
              },
              {
                id: 'fruit',
                title: 'Fruchtig & Floral',
                desc: 'Spritzige Bergamotte, Jasminblüten, Pfirsich und helle Eleganz.',
                color: '#E89C33',
              },
              {
                id: 'balance',
                title: 'Ausgewogen & Honigsüß',
                desc: 'Roter Apfel, milder Waldhonig, nussig und wunderbar harmonisch.',
                color: '#2F7466',
              },
              {
                id: 'decaf',
                title: 'Sanft & Entkoffeiniert',
                desc: 'Feige und Kakao ohne Koffein – ideal für späten Kaffeegenuss.',
                color: '#3B4B70',
              },
            ].map((opt) => {
              const isSelected = flavor === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setFlavor(opt.id as FlavorOption)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] ${
                    isSelected
                      ? 'border-[#A6361F] bg-[#FAF7F2] shadow-md ring-2 ring-[#A6361F]/20'
                      : 'border-[#E2DDD4] bg-[#FFFFFF] hover:border-[#A6361F]/50 hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-xl font-bold text-[#1C1613]">
                      {opt.title}
                    </span>
                    <span
                      className="h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: opt.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E554D] leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613]"
            >
              ← Zurück zu Frage 1
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C1613] px-7 py-3.5 text-sm font-semibold text-[#FAF7F2] shadow-sm hover:bg-[#A6361F] transition-colors active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
            >
              <span>Weiter zu Frage 3</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {/* Step 3: Röstgrad */}
      {step === 3 && (
        <section
          aria-labelledby={`${baseId}-step3-title`}
          className="space-y-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#A6361F] font-semibold">
              Frage 3 von 3
            </span>
            <h2
              id={`${baseId}-step3-title`}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1"
            >
              Welchen Röstgrad bevorzugst du?
            </h2>
            <p className="text-sm sm:text-base text-[#5E554D] mt-2">
              Der Röstgrad bestimmt die Balance zwischen fruchteigenen Säuren
              und karamellisierten Röstaromen.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            role="radiogroup"
            aria-label="Röstgrad auswählen"
          >
            {[
              {
                id: 'light',
                title: 'Hell & Spritzig',
                desc: 'Maximaler Erhalt der Bohnen-Herkunftsaromen, belebend, tee-artig.',
              },
              {
                id: 'medium',
                title: 'Ausgewogenes Medium',
                desc: 'Gleichklang aus Süße, Körper und sanfter Säure. Der Allrounder.',
              },
              {
                id: 'medium-dark',
                title: 'Kräftig & Dunkel',
                desc: 'Betonte Röstaromen, Kakao, Mandel und sehr geringe Fruchtsäure.',
              },
            ].map((opt) => {
              const isSelected = roast === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setRoast(opt.id as RoastOption)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] ${
                    isSelected
                      ? 'border-[#A6361F] bg-[#FAF7F2] shadow-md ring-2 ring-[#A6361F]/20'
                      : 'border-[#E2DDD4] bg-[#FFFFFF] hover:border-[#A6361F]/50 hover:bg-[#FAF7F2]/50'
                  }`}
                >
                  <span className="font-serif text-lg font-bold text-[#1C1613] mb-2">
                    {opt.title}
                  </span>
                  <p className="text-xs sm:text-sm text-[#5E554D] leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613]"
            >
              ← Zurück zu Frage 2
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#A6361F] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#d6573e] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
            >
              <span>Empfehlung berechnen</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}

      {/* Step 4: Ergebnis-Präsentation (Signature Result) */}
      {step === 4 && (
        <section
          aria-labelledby={`${baseId}-result-title`}
          className="rounded-3xl border border-[#E2DDD4] bg-[#FAF7F2] p-6 sm:p-10 lg:p-12 shadow-sm space-y-10"
        >
          {/* Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD4] pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6361F] font-semibold">
                Dein persönlicher Match
              </span>
              <h2
                id={`${baseId}-result-title`}
                className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1"
              >
                Wir empfehlen: „{matchedCoffee.coffee.name}“
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DDD4] bg-[#F3EFE6] px-4 py-2 font-mono text-xs font-bold text-[#1C1613]">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: matchedCoffee.coffee.accentColor }}
                aria-hidden="true"
              />
              <span>{matchedCoffee.score}% Übereinstimmung</span>
            </div>
          </div>

          {/* Result Layout: Packaging Image + Sensory Rationale */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Packaging Artwork */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative aspect-square w-full rounded-2xl border border-[#E2DDD4] p-6 flex items-center justify-center shadow-inner"
                style={{ backgroundColor: matchedCoffee.coffee.accentBg }}
              >
                <div className="relative h-full w-full max-w-[260px]">
                  <Image
                    src={matchedCoffee.coffee.image}
                    alt={`Empfohlene Kaffeepackung ${matchedCoffee.coffee.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Explanation & Sensory Notes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl border border-[#E2DDD4] bg-[#FFFFFF] p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#1C1613]">
                  Warum diese Bohne zu dir passt
                </h3>
                <p className="text-sm sm:text-base text-[#5E554D] leading-relaxed">
                  {matchedCoffee.reason}
                </p>
              </div>

              {/* Tasting Notes */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#1C1613] font-semibold mb-2">
                  Geschmacksnoten
                </h4>
                <div className="flex flex-wrap gap-2">
                  {matchedCoffee.coffee.tasteNotes.map((note) => (
                    <span
                      key={note}
                      className="rounded-lg border px-3 py-1.5 text-xs font-semibold"
                      style={{
                        borderColor: `${matchedCoffee.coffee.accentColor}44`,
                        backgroundColor: matchedCoffee.coffee.accentBg,
                        color: '#1C1613',
                      }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sensory Gauge */}
              <TasteProfileChart
                profile={matchedCoffee.coffee.tasteProfile}
                accentColor={matchedCoffee.coffee.accentColor}
                title="Sensorisches Aromenprofil"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2DDD4] pt-8">
            <button
              type="button"
              onClick={resetFinder}
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613] transition-colors"
            >
              ↺ Andere Antworten wählen
            </button>

            <Link
              href={`/kaffee/${matchedCoffee.coffee.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#A6361F] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#d6573e] transition-all active:scale-98"
            >
              <span>{matchedCoffee.coffee.name} im Detail ansehen</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
