'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DartSet } from '../types/dartSet';

interface DartCardProps {
  dartSet: DartSet;
}

export default function DartCard({ dartSet }: DartCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'wie neu':
        return 'bg-green-600';
      case 'wenig bespielt':
        return 'bg-blue-600';
      case 'bespielt':
        return 'bg-yellow-600';
      case 'viel bespielt':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === dartSet.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? dartSet.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Gallery */}
      <div className="relative w-full aspect-[3/4] bg-gray-700 overflow-hidden">
        {dartSet.images.length > 0 ? (
          <>
            <Image
              key={dartSet.images[currentImageIndex]}
              src={dartSet.images[currentImageIndex]}
              alt={`${dartSet.name} - Bild ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 400px"
              className="transition-all duration-300"
            />
            
            {/* Navigation Arrows */}
            {dartSet.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-80 text-white p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-80 text-white p-3 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-200 shadow-lg backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {dartSet.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-gray-300 scale-125 shadow-lg' 
                          : 'bg-gray-500 bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Kein Bild verfügbar
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Condition Tag */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white">{dartSet.name}</h3>
          <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getConditionColor(dartSet.condition)}`}>
            {dartSet.condition}
          </span>
        </div>

        {/* Details Table */}
        <div className="bg-gray-700 rounded-lg p-3 mb-4">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="py-1 text-gray-300">Name:</td>
                <td className="py-1 text-white font-medium">{dartSet.name}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-1 text-gray-300">Link:</td>
                <td className="py-1">
                  {dartSet.shopLink ? (
                    <a 
                      href={dartSet.shopLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Details anzeigen
                    </a>
                  ) : (
                    <span className="text-gray-500">Kein Link verfügbar</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="py-1 text-gray-300">Gewicht:</td>
                <td className="py-1 text-white font-medium">{dartSet.weight}g</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-400">
          {dartSet.price.toFixed(2)} €
        </span>
          <button 
            onClick={() => {
              const message = `Hallo! Ich interessiere mich für das Dart-Set "${dartSet.name}" (${dartSet.weight}g, ${dartSet.condition}) für ${dartSet.price.toFixed(2)}€.`;
              
              // Wenn ein Bild vorhanden ist, füge es zur Nachricht hinzu
              // Verwende eine echte Domain-URL statt localhost
              const baseUrl = window.location.hostname === 'localhost' 
                ? 'https://darts.sebjogro.com' // Deine echte Domain
                : window.location.origin;
              const imageUrl = dartSet.images.length > 0 ? `${baseUrl}${dartSet.images[0]}` : '';
              const fullMessage = imageUrl ? `${message}\n\nBild: ${imageUrl}` : message;
              
              const whatsappUrl = `https://wa.me/491712621445?text=${encodeURIComponent(fullMessage)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
} 