'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/kaffee', label: 'Kaffee', shortLabel: 'Kaffee' },
  { href: '/geschmack', label: 'Geschmacksfinder', shortLabel: 'Finder' },
  { href: '/bruehen', label: 'Brühguide', shortLabel: 'Brühguide' },
  { href: '/roesterei', label: 'Rösterei', shortLabel: 'Über uns' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2DDD4] bg-[#FAF7F2]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] focus-visible:ring-offset-2 rounded"
          aria-label="RÖSTWERK 1070 Startseite"
        >
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1613] group-hover:text-[#A6361F] transition-colors">
            RÖSTWERK 1070
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#5E554D] -mt-0.5">
            Specialty Coffee · Wien
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F] ${
                  isActive
                    ? 'text-[#A6361F] font-semibold'
                    : 'text-[#1C1613] hover:text-[#A6361F] hover:bg-[#F3EFE6]/60'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#A6361F] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action badge & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/geschmack"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#A6361F] px-4 py-1.5 text-xs font-semibold text-[#A6361F] hover:bg-[#A6361F] hover:text-white transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
          >
            <span>Kaffee-Finder</span>
            <span aria-hidden="true">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-[#E2DDD4] bg-[#FAF7F2] text-[#1C1613] hover:bg-[#F3EFE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A6361F]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <svg
              className="h-6 w-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col bg-[#FAF7F2] border-t border-[#E2DDD4] px-6 py-8 overflow-y-auto"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between py-3.5 px-4 text-lg font-serif rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#A6361F]/10 text-[#A6361F] font-semibold'
                      : 'text-[#1C1613] hover:bg-[#F3EFE6]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-sm font-sans text-[#5E554D]"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 border-t border-[#E2DDD4]/80 flex flex-col gap-4">
            <Link
              href="/geschmack"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#A6361F] py-3.5 text-base font-semibold text-white shadow-md active:scale-98"
            >
              <span>Zum Geschmacksfinder</span>
              <span aria-hidden="true">→</span>
            </Link>

            <div className="rounded-lg bg-[#F3EFE6] p-4 text-xs text-[#5E554D] leading-relaxed">
              <strong className="block text-[#1C1613] font-semibold mb-1">
                Fiktives Portfolio-Konzept
              </strong>
              RÖSTWERK 1070 ist eine eigenständige Fallstudie aus Wien-Neubau.
              Kein echter Verkauf.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
