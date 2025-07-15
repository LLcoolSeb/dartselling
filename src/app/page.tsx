'use client';

import { useState } from 'react';
import DartCard from '../components/DartCard';
import { dartSets } from '../data/dartSets';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Alle');

  const filteredDartSets = selectedFilter === 'Alle' 
    ? dartSets 
    : dartSets.filter(dartSet => {
        switch (selectedFilter) {
          case 'Wie neu':
            return dartSet.condition === 'wie neu';
          case 'Wenig bespielt':
            return dartSet.condition === 'wenig bespielt';
          case 'Bespielt':
            return dartSet.condition === 'bespielt';
          case 'Viel bespielt':
            return dartSet.condition === 'viel bespielt';
          default:
            return true;
        }
      });
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-purple-300">
            Verkauf Dartsammlung
          </h1>
          <p className="text-center text-gray-300 mt-2">
            
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Info Box - Neo Brutalism Style */}
        <div className="flex justify-center mb-8">
          <div className="p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-200 text-center" style={{backgroundColor: '#C4A1FF'}}>
          <h3 className="text-xl font-black text-black mb-4 uppercase tracking-wider text-center">
            ⚡ Infos ⚡
          </h3>
          <div className="space-y-3 text-black font-semibold">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <p>Spitzen können nach Absprache getauscht werden</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧼</span>
              <p>Auf Wunsch vorab Reinigung mit Ultraschallbad</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✈️</span>
              <p>Flights (K-flex, Cruesoul etc.) können auch nach Absprache erworben werden</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💳</span>
              <p>Zahlung via PayPal</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <p>Versand inklusive oder Übergabe vor Ort möglich (nach Absprache) </p>
            </div>
          </div>
        </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">
            Verfügbare Dart-Sets
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-gray-400">Filter nach Zustand:</span>
            <button 
              onClick={() => setSelectedFilter('Alle')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === 'Alle' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Alle
            </button>
            <button 
              onClick={() => setSelectedFilter('Wie neu')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === 'Wie neu' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Wie neu
            </button>
            <button 
              onClick={() => setSelectedFilter('Wenig bespielt')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === 'Wenig bespielt' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Wenig bespielt
            </button>
            <button 
              onClick={() => setSelectedFilter('Bespielt')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === 'Bespielt' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Bespielt
            </button>
            <button 
              onClick={() => setSelectedFilter('Viel bespielt')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedFilter === 'Viel bespielt' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Viel bespielt
            </button>
          </div>
        </div>

        {/* Dart Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDartSets.map((dartSet) => (
            <DartCard key={dartSet.id} dartSet={dartSet} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © 2024 Dart Sets Verkauf. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
