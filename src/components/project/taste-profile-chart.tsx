import type { TasteProfile } from '@/data/coffee-products';

type TasteProfileChartProps = {
  profile: TasteProfile;
  accentColor?: string;
  className?: string;
  title?: string;
};

const METRICS: {
  key: keyof TasteProfile;
  label: string;
  description: string;
}[] = [
  {
    key: 'sweetness',
    label: 'Süße',
    description: 'Karamell, Rohrzucker & Honignoten',
  },
  {
    key: 'acidity',
    label: 'Säure',
    description: 'Fruchtige Frische & Zitrusnoten',
  },
  { key: 'body', label: 'Körper', description: 'Mundgefühl, Textur & Dichte' },
  {
    key: 'bitterness',
    label: 'Rösttiefe',
    description: 'Angenehme Bitterschokolade & Röstnoten',
  },
  {
    key: 'fruitiness',
    label: 'Fruchtigkeit',
    description: 'Beeren, Steinobst & florale Aromen',
  },
];

export function TasteProfileChart({
  profile,
  accentColor = '#A6361F',
  className = '',
  title = 'Sensorisches Aromenprofil',
}: TasteProfileChartProps) {
  return (
    <div
      className={`rounded-xl border border-[#E2DDD4] bg-[#FAF7F2] p-5 sm:p-6 ${className}`}
      aria-labelledby="taste-profile-heading"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2DDD4]">
        <h4
          id="taste-profile-heading"
          className="font-serif text-lg font-semibold text-[#1C1613]"
        >
          {title}
        </h4>
        <span className="font-mono text-xs text-[#5E554D] uppercase tracking-wider">
          Skala 0 – 100
        </span>
      </div>

      <div className="space-y-4" role="region" aria-label={title}>
        {METRICS.map((metric) => {
          const value = profile[metric.key];
          return (
            <div key={metric.key} className="space-y-1.5">
              <div className="flex items-baseline justify-between text-xs sm:text-sm">
                <span className="font-medium text-[#1C1613] flex items-center gap-2">
                  <span>{metric.label}</span>
                  <span className="hidden sm:inline text-xs text-[#5E554D] font-normal">
                    ({metric.description})
                  </span>
                </span>
                <span className="font-mono text-xs font-semibold text-[#1C1613]">
                  {value} / 100
                </span>
              </div>

              {/* Accessible Sensory Bar */}
              <div
                className="h-2.5 w-full overflow-hidden rounded-full bg-[#E2DDD4]/60"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${metric.label}: ${value} von 100`}
              >
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${value}%`,
                    backgroundColor: accentColor,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
