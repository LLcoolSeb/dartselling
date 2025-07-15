# Dart Sets Verkauf Website

Eine moderne Next.js Website zum Verkauf von Dart-Sets mit Dark Theme und Tailwind CSS.

## Features

- **Dark Theme:** Schlichtes, modernes Design
- **Responsive Design:** Funktioniert auf allen Geräten
- **Bildergalerie:** Mehrere Bilder pro Dart-Set mit Navigation
- **Zustand-Tags:** Farbcodierte Tags für den Zustand (neu, wenig bespielt, bespielt, viel bespielt)
- **Details-Tabelle:** Übersichtliche Darstellung von Name, Gewicht und Zustand
- **Filter-Funktion:** Filter nach Zustand (vorbereitet für Erweiterung)
- **30 Dart-Sets:** Vordefinierte Beispieldaten

## Technologien

- **Next.js 14** mit App Router
- **TypeScript** für Typsicherheit
- **Tailwind CSS 3.x** für Styling
- **React** für die Benutzeroberfläche

## Installation

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Website öffnen:
```
http://localhost:3000
```

## Projektstruktur

```
src/
├── app/
│   ├── page.tsx          # Hauptseite
│   ├── layout.tsx        # Layout-Komponente
│   └── globals.css       # Globale Styles
├── components/
│   └── DartCard.tsx      # Dart-Card Komponente
├── data/
│   └── dartSets.ts       # Dart-Set Daten
└── types/
    └── dartSet.ts        # TypeScript Typen
```

## Dart-Set Daten

Die Dart-Sets sind in `src/data/dartSets.ts` definiert. Jedes Set enthält:

- **id:** Eindeutige ID
- **name:** Name des Dart-Sets
- **weight:** Gewicht in Gramm
- **condition:** Zustand (neu, wenig bespielt, bespielt, viel bespielt)
- **price:** Preis in Euro
- **images:** Array von Bildpfaden
- **description:** Beschreibung (optional)

## Bilder hinzufügen

1. Bilder in den `public/images/` Ordner legen
2. Bildpfade in `src/data/dartSets.ts` aktualisieren
3. Aktuell werden Platzhalterbilder verwendet

## Anpassungen

### Farben ändern
Die Farben können in der `DartCard.tsx` Komponente angepasst werden:

```typescript
const getConditionColor = (condition: string) => {
  switch (condition) {
    case 'neu': return 'bg-green-600';
    case 'wenig bespielt': return 'bg-blue-600';
    case 'bespielt': return 'bg-yellow-600';
    case 'viel bespielt': return 'bg-red-600';
    default: return 'bg-gray-600';
  }
};
```

### Layout anpassen
Das Grid-Layout kann in `page.tsx` angepasst werden:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

## Build für Produktion

```bash
npm run build
npm start
```

## Markdown Dokumentation

Die vollständige Übersicht aller Dart-Sets ist in `DART_CARDS.md` verfügbar.

## Kontakt

Für Fragen oder Anpassungen kontaktieren Sie den Entwickler.
