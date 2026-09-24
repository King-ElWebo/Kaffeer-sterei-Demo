'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { TasteProfileChart } from '@/components/project/taste-profile-chart';
import { coffeeProducts, type CoffeeProduct } from '@/data/coffee-products';

type MethodOption = 'espresso' | 'filter' | 'french-press' | 'allround';
type FlavorOption = 'chocolate' | 'fruit' | 'balance' | 'decaf';
type RoastOption = 'light' | 'medium' | 'medium-dark';

interface Step1OptionItem {
  id: MethodOption;
  title: string;
  desc: string;
  tag: string;
}

interface Step2OptionItem {
  id: FlavorOption;
  title: string;
  desc: string;
  color: string;
}

interface Step3OptionItem {
  id: RoastOption;
  title: string;
  desc: string;
}

const STEP1_OPTIONS: readonly Step1OptionItem[] = [
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
] as const;

const STEP2_OPTIONS: readonly Step2OptionItem[] = [
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
] as const;

const STEP3_OPTIONS: readonly Step3OptionItem[] = [
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
] as const;

export function FlavorFinder() {
  const [step, setStep] = useState<number>(1);
  const [method, setMethod] = useState<MethodOption>('filter');
  const [flavor, setFlavor] = useState<FlavorOption>('fruit');
  const [roast, setRoast] = useState<RoastOption>('medium');

  const baseId = useId();
  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const step1Refs = useRef<(HTMLButtonElement | null)[]>([]);
  const step2Refs = useRef<(HTMLButtonElement | null)[]>([]);
  const step3Refs = useRef<(HTMLButtonElement | null)[]>([]);

  // Focus the step heading on transition so keyboard and screen-reader users land logically
  useEffect(() => {
    stepHeadingRef.current?.focus();
  }, [step]);

  // Deterministic matching logic with honest specialty coffee rationales and trade-offs (no fake percentages)
  const matchedCoffee: {
    coffee: CoffeeProduct;
    badge: string;
    reason: string;
    tradeOffs?: string[];
  } = (() => {
    // 1. Decaf priority
    if (flavor === 'decaf') {
      const coffee = coffeeProducts.find((p) => p.slug === 'nachtfalter')!;
      const tradeOffs: string[] = [];
      if (roast === 'light') {
        tradeOffs.push(
          'Hinweis zum Röstgrad: Obwohl du helle Röstungen bevorzugst, rösten wir den Nachtfalter als ausgewogenes Medium. Das stabilisiert den Körper der naturbelassen entkoffeinierten Bohne und verhindert unangenehm adstringierende Säurespitzen.',
        );
      }
      if (method === 'espresso') {
        tradeOffs.push(
          'Zubereitungstipp: Durch den mittleren Röstgrad und die feine Kakaobasis erzeugt der Nachtfalter im Siebträger eine dichte, haselnussbraune Crema – perfekt als abendlicher Espresso.',
        );
      } else if (method === 'filter') {
        tradeOffs.push(
          'Zubereitungstipp: Im Handfilter entfaltet der Nachtfalter eine bemerkenswert saubere Feigensüße mit milder, weicher Säure.',
        );
      }
      return {
        coffee,
        badge: 'Koffeinfreie Spezialität',
        reason:
          'Du suchst aromatische Tiefe ohne Koffein-Aufregung. Unser „Nachtfalter“ beweist, dass Specialty Coffee und Entkoffeinierung perfekt zusammenpassen. Durch das sanfte, rein biologische Zuckerrohr-Verfahren bleiben feine Noten von Feige und herbem Kakao vollständig erhalten.',
        tradeOffs,
      };
    }

    // 2. Light roast or Fruit/Floral flavor preference
    if (flavor === 'fruit' || roast === 'light') {
      const coffee = coffeeProducts.find((p) => p.slug === 'flora-neubau')!;
      const tradeOffs: string[] = [];
      // Method-related guidance (independent)
      if (method === 'espresso') {
        tradeOffs.push(
          'Sensorischer Hinweis zu Espresso: Helle äthiopische Röstungen ergeben im Siebträger einen modernen, lebendigen Frucht-Espresso („Modern Espresso“) mit ausgeprägter Zitrussäure. Wir empfehlen eine feine Mahlung, ca. 94 °C Brühtemperatur und eine Extraktionszeit von 28–30 Sekunden.',
        );
      } else if (method === 'french-press') {
        tradeOffs.push(
          'Zubereitungstipp: In der French Press empfehlen wir ein etwas gröberes Mahlgut und 4 Minuten Ziehzeit, um die Klarheit der floralen Aromen trotz ungefilterter Öle bestmöglich herauszuarbeiten.',
        );
      }
      // Flavor-related conflict (independent)
      if (flavor === 'chocolate') {
        tradeOffs.push(
          'Sensorischer Kompromiss: Du hast Schokolade gewählt, aber eine helle Röstung präferiert. Bei Flora Neubau stehen Bergamotte und Pfirsich im Vordergrund; Kakaonoten treten hier nur sehr dezent im Nachklang auf.',
        );
      }
      return {
        coffee,
        badge: 'Florale Frische & Helle Röstung',
        reason:
          'Für deine Vorliebe für helle Röstungen und fruchtig-florale Eleganz ist „Flora Neubau“ ideal. Die sortenreinen äthiopischen Hochlandbohnen aus Yirgacheffe begeistern im Aufguss mit lebendigen Bergamottenoten, weißem Pfirsich und feinem Jasminduft.',
        tradeOffs,
      };
    }

    // 3. Espresso / Chocolate / Dark priority
    if (
      method === 'espresso' ||
      flavor === 'chocolate' ||
      roast === 'medium-dark'
    ) {
      const coffee = coffeeProducts.find((p) => p.slug === 'wiener-samt')!;
      const tradeOffs: string[] = [];
      if (method === 'filter') {
        tradeOffs.push(
          'Sensorischer Hinweis zum Handfilter: Du brühst bevorzugt im Filter. Wiener Samt liefert hier eine wunderbar säurearme, samtige Tasse mit vollem Schokoladenkörper – ideal, wenn du fruchtbetonte Säuren meiden möchtest.',
        );
      }
      if (flavor === 'balance') {
        tradeOffs.push(
          'Sensorische Einordnung: Du hast ein ausgewogenes Geschmackserlebnis gewünscht. Wiener Samt liefert dafür eine sehr verlässliche, harmonische Basis mit Fokus auf Schokolade, geröstete Mandel und minimale Fruchtsäure.',
        );
      }
      return {
        coffee,
        badge: 'Samtiger Körper & Schokolade',
        reason:
          'Deine Vorliebe für warme Kakaonoten, dichte Textur und schonende Röstung führt direkt zu „Wiener Samt“. Unser mitteldunkler Signature-Roast baut Fruchtsäuren harmonisch ab und maximiert Noten von Zartbitterschokolade und gebrannter Mandel.',
        tradeOffs,
      };
    }

    // 4. Balanced Allrounder default (Filter/French-Press/Allround + Balance + Medium Roast)
    const coffee = coffeeProducts.find((p) => p.slug === 'donau-klarheit')!;
    return {
      coffee,
      badge: 'Ausgewogene Harmonie & Süße',
      reason:
        'Du schätzt eine harmonische Mitte aus Süße, mildem Fruchtansatz und vertrautem Nussaroma ohne extreme Säurespitzen. „Donau Klarheit“ balanciert roten Apfel, Waldhonig und Haselnuss perfekt aus.',
      tradeOffs: [],
    };
  })();

  const resetFinder = () => {
    setStep(1);
    setMethod('filter');
    setFlavor('fruit');
    setRoast('medium');
  };

  // Keyboard navigation for radio groups
  const handleStep1KeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % STEP1_OPTIONS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + STEP1_OPTIONS.length) % STEP1_OPTIONS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = STEP1_OPTIONS.length - 1;
    } else {
      return;
    }
    setMethod(STEP1_OPTIONS[nextIndex].id);
    step1Refs.current[nextIndex]?.focus();
  };

  const handleStep2KeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % STEP2_OPTIONS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + STEP2_OPTIONS.length) % STEP2_OPTIONS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = STEP2_OPTIONS.length - 1;
    } else {
      return;
    }
    setFlavor(STEP2_OPTIONS[nextIndex].id);
    step2Refs.current[nextIndex]?.focus();
  };

  const handleStep3KeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % STEP3_OPTIONS.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + STEP3_OPTIONS.length) % STEP3_OPTIONS.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = STEP3_OPTIONS.length - 1;
    } else {
      return;
    }
    setRoast(STEP3_OPTIONS[nextIndex].id);
    step3Refs.current[nextIndex]?.focus();
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress Indicator: Clean 3-step progress bar without contradictory Step 4 */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-mono text-[#5E554D] mb-2">
          <span>
            {step <= 3 ? `Frage ${step} von 3` : 'Empfehlung fertiggestellt'}
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
          aria-valuenow={Math.min(step, 3)}
          aria-valuemin={1}
          aria-valuemax={3}
          aria-label={
            step <= 3
              ? `Finder-Fortschritt: Frage ${step} von 3`
              : 'Finder-Fortschritt: Empfehlung fertiggestellt'
          }
        >
          <div
            className="h-full bg-[#A6361F] transition-all duration-500 ease-out"
            style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Screen Reader Announcement Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {step === 1 && 'Frage 1 von 3: Wähle deine bevorzugte Brühmethode.'}
        {step === 2 &&
          'Frage 2 von 3: Wähle dein gewünschtes Geschmackserlebnis.'}
        {step === 3 && 'Frage 3 von 3: Wähle deinen bevorzugten Röstgrad.'}
        {step === 4 &&
          `Ergebnis: Deine persönliche Kaffee-Empfehlung ist ${matchedCoffee.coffee.name}.`}
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
              ref={stepHeadingRef}
              tabIndex={-1}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1 focus:outline-none"
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
            {STEP1_OPTIONS.map((opt, index) => {
              const isSelected = method === opt.id;
              return (
                <button
                  key={opt.id}
                  ref={(el) => {
                    step1Refs.current[index] = el;
                  }}
                  type="button"
                  role="radio"
                  id={`${baseId}-method-${opt.id}`}
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setMethod(opt.id)}
                  onKeyDown={(e) => handleStep1KeyDown(index, e)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] cursor-pointer ${
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
              ref={stepHeadingRef}
              tabIndex={-1}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1 focus:outline-none"
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
            {STEP2_OPTIONS.map((opt, index) => {
              const isSelected = flavor === opt.id;
              return (
                <button
                  key={opt.id}
                  ref={(el) => {
                    step2Refs.current[index] = el;
                  }}
                  type="button"
                  role="radio"
                  id={`${baseId}-flavor-${opt.id}`}
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setFlavor(opt.id)}
                  onKeyDown={(e) => handleStep2KeyDown(index, e)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] cursor-pointer ${
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
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] rounded p-1"
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
              ref={stepHeadingRef}
              tabIndex={-1}
              className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1 focus:outline-none"
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
            {STEP3_OPTIONS.map((opt, index) => {
              const isSelected = roast === opt.id;
              return (
                <button
                  key={opt.id}
                  ref={(el) => {
                    step3Refs.current[index] = el;
                  }}
                  type="button"
                  role="radio"
                  id={`${baseId}-roast-${opt.id}`}
                  aria-checked={isSelected}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setRoast(opt.id)}
                  onKeyDown={(e) => handleStep3KeyDown(index, e)}
                  className={`flex flex-col text-left p-6 rounded-2xl border transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] cursor-pointer ${
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
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] rounded p-1"
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
          {/* Header Badge without unsubstantiated percentages */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD4] pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6361F] font-semibold">
                Deine persönliche Empfehlung
              </span>
              <h2
                id={`${baseId}-result-title`}
                ref={stepHeadingRef}
                tabIndex={-1}
                className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] mt-1 focus:outline-none"
              >
                Wir empfehlen: „{matchedCoffee.coffee.name}“
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DDD4] bg-[#F3EFE6] px-4 py-2 font-mono text-xs font-semibold text-[#1C1613]">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: matchedCoffee.coffee.accentColor }}
                aria-hidden="true"
              />
              <span>Sensorisch abgestimmt · {matchedCoffee.badge}</span>
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

            {/* Explanation, Trade-Off & Sensory Notes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl border border-[#E2DDD4] bg-[#FFFFFF] p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1613]">
                    Warum diese Bohne zu deinen Angaben passt
                  </h3>
                  <p className="text-sm sm:text-base text-[#5E554D] leading-relaxed mt-2">
                    {matchedCoffee.reason}
                  </p>
                </div>

                {matchedCoffee.tradeOffs &&
                  matchedCoffee.tradeOffs.length > 0 && (
                    <div className="rounded-xl bg-[#FAF7F2] p-4 border border-[#E2DDD4]/80 text-xs sm:text-sm text-[#5E554D] leading-relaxed space-y-2">
                      <strong className="block font-semibold text-[#1C1613]">
                        Sensorische Einordnung deiner Auswahl:
                      </strong>
                      {matchedCoffee.tradeOffs.map((note, idx) => (
                        <p key={idx}>{note}</p>
                      ))}
                    </div>
                  )}
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
              className="text-sm font-semibold text-[#5E554D] hover:text-[#1C1613] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] rounded p-1"
            >
              ↺ Andere Antworten wählen
            </button>

            <Link
              href={`/kaffee/${matchedCoffee.coffee.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#A6361F] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#d6573e] transition-all active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
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
