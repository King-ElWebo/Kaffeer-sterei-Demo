export type SiteRoute = {
  name: string;
  path: `/${string}` | '/';
};

/**
 * Public routes tested by Playwright.
 * Includes all public pages and individual coffee product pages.
 */
export const siteRoutes: readonly SiteRoute[] = [
  { name: 'home', path: '/' },
  { name: 'kaffee', path: '/kaffee' },
  { name: 'kaffee-wiener-samt', path: '/kaffee/wiener-samt' },
  { name: 'kaffee-flora-neubau', path: '/kaffee/flora-neubau' },
  { name: 'kaffee-donau-klarheit', path: '/kaffee/donau-klarheit' },
  { name: 'kaffee-nachtfalter', path: '/kaffee/nachtfalter' },
  { name: 'geschmack', path: '/geschmack' },
  { name: 'bruehen', path: '/bruehen' },
  { name: 'roesterei', path: '/roesterei' },
];
