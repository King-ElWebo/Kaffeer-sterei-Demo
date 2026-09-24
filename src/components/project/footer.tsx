import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#E2DDD4] bg-[#F3EFE6] text-[#1C1613]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Origin */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1613]">
                RÖSTWERK 1070
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-[#5E554D] mt-0.5">
                Specialty Coffee · Wien-Neubau
              </p>
            </div>
            <p className="text-sm text-[#5E554D] leading-relaxed">
              Handwerkliche Trommelröstung, kompromisslose Sortenreinheit und
              sensorische Neugier im Herzen des 7. Wiener Bezirks.
            </p>
            <div className="inline-flex items-center gap-2 rounded border border-[#E2DDD4] bg-[#FAF7F2] px-3 py-1.5 text-xs text-[#5E554D]">
              <span
                className="h-2 w-2 rounded-full bg-[#2F7466]"
                aria-hidden="true"
              />
              <span>Standort: Neubaugasse, 1070 Wien</span>
            </div>
          </div>

          {/* Column 2: Sortiment */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1613]">
              Unsere Röstungen
            </h3>
            <ul className="space-y-2 text-sm text-[#5E554D]">
              <li>
                <Link
                  href="/kaffee/wiener-samt"
                  className="hover:text-[#A6361F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A6361F] rounded"
                >
                  Wiener Samt · Espresso
                </Link>
              </li>
              <li>
                <Link
                  href="/kaffee/flora-neubau"
                  className="hover:text-[#E89C33] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E89C33] rounded"
                >
                  Flora Neubau · Filterkaffee
                </Link>
              </li>
              <li>
                <Link
                  href="/kaffee/donau-klarheit"
                  className="hover:text-[#2F7466] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2F7466] rounded"
                >
                  Donau Klarheit · Allrounder
                </Link>
              </li>
              <li>
                <Link
                  href="/kaffee/nachtfalter"
                  className="hover:text-[#3B4B70] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3B4B70] rounded"
                >
                  Nachtfalter · Decaf
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/kaffee"
                  className="text-xs font-semibold text-[#1C1613] hover:text-[#A6361F] transition-colors inline-flex items-center gap-1"
                >
                  <span>Gesamtsortiment ansehen</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Werkzeuge */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1613]">
              Interaktive Tools
            </h3>
            <ul className="space-y-2 text-sm text-[#5E554D]">
              <li>
                <Link
                  href="/geschmack"
                  className="hover:text-[#A6361F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A6361F] rounded"
                >
                  Geschmacksfinder
                </Link>
              </li>
              <li>
                <Link
                  href="/bruehen"
                  className="hover:text-[#A6361F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A6361F] rounded"
                >
                  Brühguide & Mengenrechner
                </Link>
              </li>
              <li>
                <Link
                  href="/roesterei"
                  className="hover:text-[#A6361F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A6361F] rounded"
                >
                  Über die Mikrorösterei
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Transparenz & Disclaimer */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1613]">
              Konzept-Transparenz
            </h3>
            <div className="rounded-lg border border-[#E2DDD4] bg-[#FAF7F2] p-4 text-xs text-[#5E554D] space-y-2">
              <p className="font-medium text-[#1C1613]">
                Fiktives Showcase-Projekt
              </p>
              <p className="leading-relaxed">
                RÖSTWERK 1070 ist eine eigenständige Fallstudie für
                Frontend-Engineering und Brand Identity. Es gibt keinen realen
                Onlineshop und keinen Verkauf von Waren.
              </p>
              <p className="pt-1">
                <a
                  href="https://github.com/King-ElWebo/Kaffeer-sterei-Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a6361f] font-medium underline hover:text-[#1C1613] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A6361F]"
                >
                  Quellcode auf GitHub ansehen ↗
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E2DDD4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E554D]">
          <p>© 2026 RÖSTWERK 1070 · Fiktives Portfolio-Konzept aus Wien.</p>
          <div className="flex items-center gap-6">
            <span>WCAG 2.2 AA Barrierefrei</span>
            <span>Static Cloudflare Export</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
