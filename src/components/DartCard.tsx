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
        <div className="flex justify-start items-center">
          <span className="text-2xl font-bold text-green-400">
            {dartSet.price.toFixed(2)} €
          </span>
        </div>
      </div>
    </div>
  );
} 