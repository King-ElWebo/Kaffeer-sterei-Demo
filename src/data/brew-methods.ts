export type BrewMethod = {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  ratio: number; // water-to-coffee ratio, e.g. 16.666 means 1g coffee for ~16.7g water
  ratioDisplay: string;
  defaultMl: number;
  minMl: number;
  maxMl: number;
  stepMl: number;
  grindSize: string;
  tempC: number;
  timeDisplay: string;
  description: string;
  steps: { stepNumber: number; title: string; instruction: string }[];
};

export const brewMethods: BrewMethod[] = [
  {
    id: 'v60',
    name: 'Handfilter (Hario V60)',
    shortName: 'V60',
    subtitle: 'Klarheit, lebendige Säuren und florale Nuancen',
    ratio: 16.6667,
    ratioDisplay: '1:16.6',
    defaultMl: 250,
    minMl: 150,
    maxMl: 600,
    stepMl: 50,
    grindSize: 'Mittelfein (wie feines Meersalz)',
    tempC: 94,
    timeDisplay: '2:45 – 3:15 Min.',
    description:
      'Der Klassiker für Spezialitätenkaffee. Durch den 60-Grad-Winkel und die spiralförmigen Rillen fließen feine Fruchtsäuren und filigrane Blumennoten klar und ungetrübt in die Tasse.',
    steps: [
      {
        stepNumber: 1,
        title: 'Spülen & Vorwärmen',
        instruction:
          'Papierfilter in den V60 einsetzen und gründlich mit heißem Wasser ausspülen. Spülwasser aus der Kanne wegschütten.',
      },
      {
        stepNumber: 2,
        title: 'Kaffeemehl einfüllen',
        instruction:
          'Das frisch gemahlene Kaffeemehl einfüllen, kurz sanft rütteln für ein ebenes Kaffeebett und die Waage auf Null (Tara) stellen.',
      },
      {
        stepNumber: 3,
        title: 'Blooming (Vorbrühen)',
        instruction:
          'Etwa das Dreifache des Kaffeegewichts an 94 °C heißem Wasser kreisend aufgießen. 45 Sekunden quellen lassen, damit CO₂ entweichen kann.',
      },
      {
        stepNumber: 4,
        title: 'Gleichmäßiges Aufgießen',
        instruction:
          'In zwei bis drei ruhigen, konzentrischen Kreisen von innen nach außen bis zur Ziel-Wassermenge aufgießen. Nach ca. 3 Minuten durchlaufen lassen und genießen.',
      },
    ],
  },
  {
    id: 'french-press',
    name: 'French Press (Stempelkanne)',
    shortName: 'French Press',
    subtitle: 'Vollmundiger Körper, reiche Textur und tiefe Süße',
    ratio: 15.0,
    ratioDisplay: '1:15',
    defaultMl: 500,
    minMl: 250,
    maxMl: 800,
    stepMl: 50,
    grindSize: 'Grob (wie grobes Meersalz)',
    tempC: 93,
    timeDisplay: '4:00 Min.',
    description:
      'Die Immersions-Methode schlechthin: Weil kein Papierfilter die natürlichen Kaffee-Öle zurückhält, entsteht ein besonders dichter, samtiger Körper mit ausgeprägter Schokoladen- und Nussnote.',
    steps: [
      {
        stepNumber: 1,
        title: 'Kanne erwärmen & befüllen',
        instruction:
          'Kanne mit heißem Wasser kurz vorwärmen, entleeren und das grob gemahlene Kaffeepulver einfüllen.',
      },
      {
        stepNumber: 2,
        title: 'Wasser aufgießen',
        instruction:
          'Die gesamte errechnete Wassermenge (93 °C) schwungvoll eingießen, sodass alles Kaffeemehl gleichmäßig benetzt wird.',
      },
      {
        stepNumber: 3,
        title: '4 Minuten Ziehzeit',
        instruction:
          'Den Deckel mit Stempel aufsetzen, aber noch nicht herunterdrücken. Genau 4 Minuten ziehen lassen.',
      },
      {
        stepNumber: 4,
        title: 'Kruste brechen & stempeln',
        instruction:
          'Deckel abnehmen, mit einem Löffel die Kaffeekruste umrühren und störenden hellen Schaum abschöpfen. Danach den Siebstempel langsam und sanft herabdrücken.',
      },
    ],
  },
  {
    id: 'chemex',
    name: 'Chemex Karaffe',
    shortName: 'Chemex',
    subtitle: 'Höchste Reinheit, seidiges Mundgefühl und Eleganz',
    ratio: 16.0,
    ratioDisplay: '1:16',
    defaultMl: 500,
    minMl: 300,
    maxMl: 800,
    stepMl: 50,
    grindSize: 'Mittelgrob (etwas gröber als V60)',
    tempC: 94,
    timeDisplay: '3:30 – 4:30 Min.',
    description:
      'Dank der besonders dicken Spezialfilterpapier-Struktur filtert die Chemex nahezu alle Schwebstoffe und Bitterstoffe heraus. Das Ergebnis ist ein extrem sauberer, tee-artiger und transparenter Kaffee.',
    steps: [
      {
        stepNumber: 1,
        title: 'Dreifach-Filter spülen',
        instruction:
          'Den gefalteten Spezialfilter so einsetzen, dass die dreilagige Seite zum Ausguss zeigt. Reichlich heiß spülen.',
      },
      {
        stepNumber: 2,
        title: 'Blooming',
        instruction:
          'Mittelgrobes Kaffeemehl einfüllen, mit ca. 80 g Wasser befeuchten und 45 Sekunden quellen lassen.',
      },
      {
        stepNumber: 3,
        title: 'Kontinuierlicher Aufguss',
        instruction:
          'In langsamen Kreisbewegungen Wasser nachgießen. Den Wasserstand im Filter nicht zu hoch steigen lassen.',
      },
      {
        stepNumber: 4,
        title: 'Abtropfen & Schwenken',
        instruction:
          'Filter nach dem Durchlaufen entfernen. Die Glaskaraffe kurz sanft schwenken, um den Kaffee zu belüften.',
      },
    ],
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    shortName: 'AeroPress',
    subtitle: 'Vielseitig, intensiv und perfekt für Reisen',
    ratio: 12.5,
    ratioDisplay: '1:12.5',
    defaultMl: 200,
    minMl: 100,
    maxMl: 250,
    stepMl: 25,
    grindSize: 'Mittel (feiner als French Press, gröber als Espresso)',
    tempC: 90,
    timeDisplay: '1:45 – 2:00 Min.',
    description:
      'Mit sanftem Luftdruck extrahiert die AeroPress einen dichten, säurearmen und süßen Kaffee in unter zwei Minuten. Ideal für ausdrucksstarke Einzelportionen.',
    steps: [
      {
        stepNumber: 1,
        title: 'Aufbau (Invertiert)',
        instruction:
          'AeroPress auf den Kolben stellen (umgekehrte Methode). Kaffeemehl mit dem Trichter einfüllen.',
      },
      {
        stepNumber: 2,
        title: 'Wasser eingießen & rühren',
        instruction:
          'Mit 90 °C heißem Wasser bis zur gewünschten Menge aufgießen und 10 Sekunden gründlich umrühren.',
      },
      {
        stepNumber: 3,
        title: 'Filter vorbereiten',
        instruction:
          'Papierfilter in die Siebkappe einlegen, anfeuchten und nach 1:15 Minuten Ziehzeit fest aufschrauben.',
      },
      {
        stepNumber: 4,
        title: 'Sanft pressen',
        instruction:
          'AeroPress vorsichtig auf eine stabile Tasse oder Kanne umdrehen und mit gleichmäßigem Handdruck 30 Sekunden lang herabpressen.',
      },
    ],
  },
  {
    id: 'bialetti',
    name: 'Espressokocher (Bialetti)',
    shortName: 'Bialetti',
    subtitle: 'Konzentriert, kräftig und feurig-traditionell',
    ratio: 10.0,
    ratioDisplay: '1:10',
    defaultMl: 150,
    minMl: 100,
    maxMl: 300,
    stepMl: 25,
    grindSize: 'Fein (etwas gröber als Siebträger)',
    tempC: 96,
    timeDisplay: '2:30 Min.',
    description:
      'Der italienische Moka-Klassiker erzeugt durch Dampfdruck einen dichten, intensiven Kaffeesud, der die ideale Basis für Cappuccino oder kräftigen schwarzen Kaffee darstellt.',
    steps: [
      {
        stepNumber: 1,
        title: 'Heißes Wasser in den Kessel',
        instruction:
          'Den Kessel bis knapp unter das Sicherheitsventil mit bereits heißem Wasser füllen (verhindert das Verbrennen des Kaffeemehls).',
      },
      {
        stepNumber: 2,
        title: 'Trichter füllen (nicht tampen)',
        instruction:
          'Den Trichtereinsatz locker bis zum Rand mit feinem Kaffeepulver befüllen, glattstreichen, aber keinesfalls festdrücken.',
      },
      {
        stepNumber: 3,
        title: 'Auf die Herdplatte',
        instruction:
          'Kanne fest zuschrauben und bei mittlerer Hitze auf den Herd stellen. Deckel geöffnet lassen zur Beobachtung.',
      },
      {
        stepNumber: 4,
        title: 'Rechtzeitig stoppen',
        instruction:
          'Sobald der Kaffee mit feinem goldbraunem Schaum kontinuierlich fließt und zu zischen beginnt, sofort von der Hitze nehmen.',
      },
    ],
  },
];

export function getBrewMethodById(id: string): BrewMethod | undefined {
  return brewMethods.find((m) => m.id === id);
}
