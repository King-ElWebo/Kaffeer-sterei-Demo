import type { Metadata, Viewport } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';
import { Navigation } from '@/components/project/navigation';
import { Footer } from '@/components/project/footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'RÖSTWERK 1070 | Specialty Coffee Wien-Neubau',
    template: '%s | RÖSTWERK 1070',
  },
  description:
    'RÖSTWERK 1070 – Handwerklich gerösteter Spezialitätenkaffee aus Wien Neubau. Mit interaktivem Geschmacksfinder und präzisem Brührechner.',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1C1613] antialiased selection:bg-[#A6361F]/20 selection:text-[#1C1613] font-sans flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1C1613] focus:text-[#FAF7F2] focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Direkt zum Hauptinhalt springen
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
