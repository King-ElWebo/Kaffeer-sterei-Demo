export type TasteProfile = {
  sweetness: number; // 0 - 100
  acidity: number; // 0 - 100
  body: number; // 0 - 100
  bitterness: number; // 0 - 100
  fruitiness: number; // 0 - 100
};

export type CoffeeProduct = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  roastLevel: 'Hell' | 'Mittel' | 'Mittel-Dunkel';
  roastLevelKey: 'light' | 'medium' | 'medium-dark';
  origin: string;
  elevation: string;
  process: string;
  tasteNotes: string[];
  tasteProfile: TasteProfile;
  bestFor: string[];
  bestForKeys: (
    'espresso' | 'filter' | 'allround' | 'bialetti' | 'french-press' | 'decaf'
  )[];
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  badgeTextColor: string;
  image: string;
  priceSample: string;
  description: string;
  brewRecipe: {
    method: string;
    coffeeGrams: number;
    waterGrams: number;
    ratio: string;
    tempC: number;
    grindSize: string;
    time: string;
    tips: string;
  };
};

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 'wiener-samt',
    slug: 'wiener-samt',
    name: 'Wiener Samt',
    subtitle:
      'Kräftiger, samtig-schokoladiger Espresso für Siebträger und Bialetti',
    roastLevel: 'Mittel-Dunkel',
    roastLevelKey: 'medium-dark',
    origin: 'Südamerika / Ostafrika Blend (Fiktives Portfolio-Konzept)',
    elevation: '1.400 – 1.850 m',
    process: 'Washed (Gewaschen)',
    tasteNotes: ['Dunkle Schokolade', 'Gebrannte Mandel', 'Feiner Nougat'],
    tasteProfile: {
      sweetness: 75,
      acidity: 28,
      body: 92,
      bitterness: 48,
      fruitiness: 22,
    },
    bestFor: [
      'Siebträger',
      'Espressokocher (Bialetti)',
      'Cappuccino & Flat White',
    ],
    bestForKeys: ['espresso', 'bialetti'],
    accentColor: '#A6361F',
    accentBg: 'rgba(166, 54, 31, 0.08)',
    accentBorder: '#A6361F',
    badgeTextColor: '#FFFFFF',
    image: '/media/wiener-samt.jpg',
    priceSample: '€ 13,50',
    description:
      'Eine Hommage an die Wiener Rösttradition in zeitgemäßer Präzision. Entwickelt für dichte Crema, intensive Schokoladennote und nussigen Abgang. Hervorragend pur als doppelter Espresso oder mit samtiger Milch als Flat White.',
    brewRecipe: {
      method: 'Siebträger (Doppelter Espresso)',
      coffeeGrams: 18,
      waterGrams: 38,
      ratio: '1:2.1',
      tempC: 93,
      grindSize: 'Sehr fein (Puderfein)',
      time: '26 – 28 Sekunden',
      tips: 'Gleichmäßig tampen. Bei 9 Bar Bezugsdruck läuft der Espresso dickflüssig wie flüssiger Honig in die vorgewärmte Tasse.',
    },
  },
  {
    id: 'flora-neubau',
    slug: 'flora-neubau',
    name: 'Flora Neubau',
    subtitle:
      'Fruchtig-floraler Filterkaffee mit Noten von Bergamotte und Pfirsich',
    roastLevel: 'Hell',
    roastLevelKey: 'light',
    origin: 'Äthiopien Hochland (Fiktives Portfolio-Konzept)',
    elevation: '1.900 – 2.200 m',
    process: 'Natural (Sonnengetrocknet)',
    tasteNotes: ['Bergamotte', 'Jasminblüte', 'Reifer Pfirsich'],
    tasteProfile: {
      sweetness: 88,
      acidity: 82,
      body: 45,
      bitterness: 15,
      fruitiness: 95,
    },
    bestFor: ['V60 Handfilter', 'Chemex', 'Aeropress', 'Cold Brew'],
    bestForKeys: ['filter'],
    accentColor: '#E89C33',
    accentBg: 'rgba(232, 156, 51, 0.08)',
    accentBorder: '#E89C33',
    badgeTextColor: '#1C1613',
    image: '/media/flora-neubau.jpg',
    priceSample: '€ 14,80',
    description:
      'Unser Aushängeschild für Liebhaber heller Röstungen. Schmeckt wie ein Spaziergang durch einen sonnigen Frühlingsgarten. Klare Zitrusfrische, elegante Jasminnoten und ein sauberes, süßes Mundgefühl im V60-Handfilter.',
    brewRecipe: {
      method: 'Handfilter (Hario V60)',
      coffeeGrams: 15,
      waterGrams: 250,
      ratio: '1:16.6',
      tempC: 94,
      grindSize: 'Mittelfein (wie feines Meersalz)',
      time: '2:45 – 3:15 Minuten',
      tips: 'Zuerst 45 Sekunden Blooming mit 50 g Wasser, danach in zwei gleichmäßigen, kreisenden Aufgüssen bis 250 g auffüllen.',
    },
  },
  {
    id: 'donau-klarheit',
    slug: 'donau-klarheit',
    name: 'Donau Klarheit',
    subtitle:
      'Harmonischer, ausgewogener Allrounder mit Noten von rotem Apfel und Honig',
    roastLevel: 'Mittel',
    roastLevelKey: 'medium',
    origin: 'Mittelamerika (Fiktives Portfolio-Konzept)',
    elevation: '1.500 – 1.700 m',
    process: 'Honey Processed (Halbgewaschen)',
    tasteNotes: ['Roter Apfel', 'Waldhonig', 'Geröstete Haselnuss'],
    tasteProfile: {
      sweetness: 85,
      acidity: 52,
      body: 72,
      bitterness: 28,
      fruitiness: 62,
    },
    bestFor: ['Filtermaschine', 'French Press', 'Vollautomat', 'Handfilter'],
    bestForKeys: ['allround', 'filter', 'french-press'],
    accentColor: '#2F7466',
    accentBg: 'rgba(47, 116, 102, 0.08)',
    accentBorder: '#2F7466',
    badgeTextColor: '#FFFFFF',
    image: '/media/donau-klarheit.jpg',
    priceSample: '€ 12,90',
    description:
      'Der Liebling für jeden Morgen. Ob klassischer Handfilter, French Press oder Vollautomat: Dieser Kaffee vereint milde Fruchtsüße mit warmen Karamell- und Nussnuancen ohne aufdringliche Säure.',
    brewRecipe: {
      method: 'French Press (Stempelkanne)',
      coffeeGrams: 30,
      waterGrams: 500,
      ratio: '1:16.6',
      tempC: 93,
      grindSize: 'Grob (wie grobes Steinsalz)',
      time: '4:00 Minuten',
      tips: 'Kaffeemehl einfüllen, mit heißem Wasser aufgießen, nach 4 Minuten die obere Kruste mit einem Löffel brechen, Schaum abschöpfen und den Siebstempel sanft nach unten drücken.',
    },
  },
  {
    id: 'nachtfalter',
    slug: 'nachtfalter',
    name: 'Nachtfalter',
    subtitle:
      'Natürlich entkoffeinierter Spezialitätenkaffee mit Noten von Feige und Kakao',
    roastLevel: 'Mittel',
    roastLevelKey: 'medium',
    origin: 'Kolumbien Huila (Fiktives Portfolio-Konzept)',
    elevation: '1.600 – 1.900 m',
    process: 'Sugarcane Decaf (Natürliche Entkoffeinierung)',
    tasteNotes: ['Süße Feige', 'Kakaonibs', 'Hauch von Zedernholz'],
    tasteProfile: {
      sweetness: 80,
      acidity: 34,
      body: 76,
      bitterness: 30,
      fruitiness: 50,
    },
    bestFor: [
      'Später Kaffeegenuss',
      'Handfilter',
      'Siebträger',
      'Espressokocher',
    ],
    bestForKeys: ['decaf', 'filter', 'espresso', 'allround'],
    accentColor: '#3B4B70',
    accentBg: 'rgba(59, 75, 112, 0.08)',
    accentBorder: '#3B4B70',
    badgeTextColor: '#FFFFFF',
    image: '/media/nachtfalter.jpg',
    priceSample: '€ 14,20',
    description:
      'Wer sagt, dass koffeinfreier Kaffee langweilig sein muss? Schonend mit Wasser und natürlicher Zuckerrohr-Melasse entkoffeiniert, behält dieser Kaffee seine volle Würze, sanfte Feigensüße und feine Kakaotiefe – ganz ohne Koffein-Nervosität.',
    brewRecipe: {
      method: 'Universal (Filter & Herdkanne)',
      coffeeGrams: 16,
      waterGrams: 250,
      ratio: '1:15.6',
      tempC: 92,
      grindSize: 'Mittel (wie Speisesalz)',
      time: '3:00 Minuten',
      tips: 'Perfekt als beruhigende Tasse nach dem Abendessen oder als milder Espresso vor dem Schlafengehen.',
    },
  },
];

export function getCoffeeBySlug(slug: string): CoffeeProduct | undefined {
  return coffeeProducts.find((p) => p.slug === slug);
}
