'use client';

import { useId, useRef, useState } from 'react';
import { brewMethods, type BrewMethod } from '@/data/brew-methods';

export function BrewCalculator() {
  const [selectedMethodId, setSelectedMethodId] = useState<string>(
    brewMethods[0].id,
  );

  const selectedMethod: BrewMethod =
    brewMethods.find((m) => m.id === selectedMethodId) ?? brewMethods[0];

  // Store volume for the selected method
  const [volumeMl, setVolumeMl] = useState<number>(selectedMethod.defaultMl);

  const inputId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelectMethod = (method: BrewMethod) => {
    setSelectedMethodId(method.id);
    // Adjust volume if current volume is out of bounds for new method
    if (volumeMl < method.minMl || volumeMl > method.maxMl) {
      setVolumeMl(method.defaultMl);
    }
  };

  const handleTabKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % brewMethods.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + brewMethods.length) % brewMethods.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = brewMethods.length - 1;
    } else {
      return;
    }

    const nextMethod = brewMethods[nextIndex];
    handleSelectMethod(nextMethod);
    tabRefs.current[nextIndex]?.focus();
  };

  // Live calculation: coffee amount in grams (1 decimal precision)
  const coffeeGrams = (volumeMl / selectedMethod.ratio).toFixed(1);

  // Quick preset sizes strictly matching method range and physical capacities
  const getPresets = (method: BrewMethod) => {
    if (method.id === 'aeropress') {
      return [
        { label: 'Klein (150 ml)', ml: 150 },
        { label: 'Standard (200 ml)', ml: 200 },
        { label: 'Max (250 ml)', ml: 250 },
      ];
    }
    if (method.id === 'bialetti') {
      return [
        { label: '1 Tasse (100 ml)', ml: 100 },
        { label: '2 Tassen (150 ml)', ml: 150 },
        { label: 'Groß (250 ml)', ml: 250 },
      ];
    }
    if (method.id === 'chemex') {
      return [
        { label: 'Klein (350 ml)', ml: 350 },
        { label: '2 Tassen (500 ml)', ml: 500 },
        { label: 'Karaffe (750 ml)', ml: 750 },
      ];
    }
    if (method.id === 'v60') {
      const potMl = Math.min(600, method.maxMl);
      return [
        { label: '1 Tasse (250 ml)', ml: 250 },
        { label: '2 Tassen (500 ml)', ml: 500 },
        { label: `Kanne (${potMl} ml)`, ml: potMl },
      ];
    }
    const potMl = Math.min(750, method.maxMl);
    return [
      { label: '1 Tasse (250 ml)', ml: 250 },
      { label: '2 Tassen (500 ml)', ml: 500 },
      { label: `Kanne (${potMl} ml)`, ml: potMl },
    ];
  };

  const presets = getPresets(selectedMethod);

  return (
    <div className="space-y-12">
      {/* Method Selection Tabs with WAI-ARIA roving tabindex & keyboard support */}
      <div>
        <label
          id={`${inputId}-method-label`}
          className="block text-xs uppercase tracking-widest font-mono text-[var(--color-espresso)]/70 mb-3 font-semibold"
        >
          1. Wähle deine Brühmethode
        </label>
        <div
          role="tablist"
          aria-labelledby={`${inputId}-method-label`}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5"
        >
          {brewMethods.map((method, index) => {
            const isSelected = method.id === selectedMethodId;
            return (
              <button
                key={method.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                id={`tab-${method.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${method.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectMethod(method)}
                onKeyDown={(e) => handleTabKeyDown(index, e)}
                className={`py-3.5 px-3 rounded-lg border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-terracotta)] ${
                  isSelected
                    ? 'bg-[var(--color-espresso)] text-[var(--color-paper)] border-[var(--color-espresso)] shadow-sm'
                    : 'bg-white text-[var(--color-espresso)] border-[var(--color-espresso)]/15 hover:border-[var(--color-espresso)]/40 hover:bg-[var(--color-surface)]'
                }`}
              >
                <span className="font-serif font-bold text-sm tracking-tight block">
                  {method.shortName}
                </span>
                <span
                  className={`text-[11px] font-mono mt-1 ${
                    isSelected
                      ? 'text-[var(--color-paper)]/75'
                      : 'text-[#5E554D]'
                  }`}
                >
                  Ratio {method.ratioDisplay}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Calculator: Controls & Live Output */}
      <div
        id={`panel-${selectedMethod.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedMethod.id}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Volume Slider & Presets */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[var(--color-espresso)]/10 shadow-sm space-y-6">
          <div className="border-b border-[var(--color-espresso)]/10 pb-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-[var(--color-espresso)]">
                {selectedMethod.name}
              </h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[var(--color-surface)] text-[var(--color-espresso)] border border-[var(--color-espresso)]/10">
                Ratio {selectedMethod.ratioDisplay}
              </span>
            </div>
            <p className="text-xs text-[#5E554D] mt-1 font-sans">
              {selectedMethod.subtitle}
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label
                htmlFor={`${inputId}-volume-slider`}
                className="text-xs uppercase tracking-widest font-mono text-[var(--color-espresso)]/70 font-semibold"
              >
                2. Gewünschte Kaffeemenge (Brühwasser)
              </label>
              <span className="font-mono font-bold text-lg text-[var(--accent-terracotta)]">
                {volumeMl} ml
              </span>
            </div>

            {/* Slider */}
            <input
              id={`${inputId}-volume-slider`}
              type="range"
              suppressHydrationWarning
              min={selectedMethod.minMl}
              max={selectedMethod.maxMl}
              step={selectedMethod.stepMl}
              value={volumeMl}
              onChange={(e) => setVolumeMl(Number(e.target.value))}
              aria-valuemin={selectedMethod.minMl}
              aria-valuemax={selectedMethod.maxMl}
              aria-valuenow={volumeMl}
              aria-label={`Brühwassermenge für ${selectedMethod.name}`}
              className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-terracotta)] border border-[var(--color-espresso)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-terracotta)]"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#5E554D] mt-1">
              <span>{selectedMethod.minMl} ml</span>
              <span>{selectedMethod.maxMl} ml</span>
            </div>
            <p className="text-[11px] text-[#5E554D] mt-2 font-sans leading-normal">
              Hinweis: Berechnet nach gesamter Brühwassereinwaage. Das
              Kaffeemehl bindet ca. das 2-Fache seines Gewichts an Wasser, die
              Trinkmenge in der Tasse liegt entsprechend leicht darunter.
            </p>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="block text-xs uppercase tracking-widest font-mono text-[#5E554D] font-semibold mb-2">
              Schnellauswahl
            </span>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setVolumeMl(preset.ml)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-terracotta)] ${
                    volumeMl === preset.ml
                      ? 'bg-[var(--accent-terracotta)] text-white border-[var(--accent-terracotta)]'
                      : 'bg-[var(--color-surface)] text-[var(--color-espresso)]/80 border-[var(--color-espresso)]/15 hover:border-[var(--color-espresso)]/40 hover:bg-white'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="pt-3 border-t border-[var(--color-espresso)]/10 text-xs text-[var(--color-espresso)]/75 leading-relaxed font-sans">
            {selectedMethod.description}
          </div>
        </div>

        {/* Right Column: Live Calculated Output */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[var(--color-espresso)] text-[var(--color-paper)] p-6 sm:p-8 rounded-2xl shadow-md">
            <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta-light)] font-semibold mb-2">
              Präzise Rezeptur · Live berechnet
            </p>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Empfohlene Parameter
            </h3>

            {/* Core metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-xs font-mono text-white/60 mb-1">
                  Kaffeemehl (Einwaage)
                </span>
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[var(--accent-amber)]">
                  {coffeeGrams} g
                </span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-xs font-mono text-white/60 mb-1">
                  Wassermenge (Brühwasser)
                </span>
                <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                  {volumeMl} ml
                </span>
              </div>
            </div>

            {/* Parameter Details */}
            <div className="space-y-3 border-t border-white/10 pt-5 text-sm">
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="font-sans text-white/70">Mahlgrad</span>
                <span className="font-mono text-right font-medium text-white">
                  {selectedMethod.grindSize}
                </span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="font-sans text-white/70">
                  Wassertemperatur
                </span>
                <span className="font-mono text-right font-medium text-white">
                  {selectedMethod.tempC} °C
                </span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="font-sans text-white/70">
                  Ziel-Durchlaufzeit
                </span>
                <span className="font-mono text-right font-medium text-white">
                  {selectedMethod.timeDisplay}
                </span>
              </div>
              <div className="flex justify-between items-baseline py-1">
                <span className="font-sans text-white/70">Brühverhältnis</span>
                <span className="font-mono text-right font-medium text-[var(--accent-amber)]">
                  1 g Kaffee auf {(volumeMl / Number(coffeeGrams)).toFixed(1)} g
                  Wasser ({selectedMethod.ratioDisplay})
                </span>
              </div>
            </div>

            {/* Screenreader live announcement */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              Rezept für {selectedMethod.name}: {coffeeGrams} Gramm Kaffeemehl
              auf {volumeMl} Milliliter Brühwasser bei {selectedMethod.tempC}{' '}
              Grad Celsius und Mahlgrad {selectedMethod.grindSize}.
            </div>
          </div>
        </div>
      </div>

      {/* Synchronized 4-Step Brew Guide */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[var(--color-espresso)]/10 shadow-sm">
        <div className="max-w-2xl mb-8">
          <p className="text-xs uppercase tracking-widest font-mono text-[var(--accent-terracotta)] font-semibold mb-2">
            Schritt für Schritt
          </p>
          <h3 className="text-2xl font-serif font-bold text-[var(--color-espresso)]">
            Zubereitungsanleitung: {selectedMethod.shortName}
          </h3>
          <p className="text-sm text-[var(--color-espresso)]/70 mt-1">
            Befolge diese vier Schritte für optimale Extraktion und ausgewogene
            Aromen in der Tasse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedMethod.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-espresso)]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[var(--color-espresso)] text-[var(--color-paper)] font-mono text-sm font-bold flex items-center justify-center mb-3">
                  0{step.stepNumber}
                </div>
                <h4 className="font-serif font-bold text-base text-[var(--color-espresso)] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[var(--color-espresso)]/75 leading-relaxed font-sans">
                  {step.instruction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
