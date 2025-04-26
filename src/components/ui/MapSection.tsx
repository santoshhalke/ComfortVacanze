'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccurateMapSection = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  // Geographic coordinates converted to SVG positions
  const locations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      lat: -8.4095,  // Latitude
      lng: 115.1889, // Longitude
      color: 'bg-orange-500'
    },
    {
      id: 2,
      name: 'Krabi & Phuket, Thailand',
      lat: 8.0863,
      lng: 98.9063,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Sri Lanka',
      lat: 7.8731,
      lng: 80.7718,
      color: 'bg-emerald-500'
    },
    {
      id: 4,
      name: 'Vietnam',
      lat: 14.0583,
      lng: 108.2772,
      color: 'bg-purple-500'
    }
  ];

  // Convert geographic coordinates to SVG coordinates
  const project = (lat: number, lng: number) => {
    // Simple Mercator projection (simplified for our SVG)
    const width = 800;
    const height = 450;
    
    // Normalize longitude (-180 to 180) to (0 to 100)
    const x = (lng + 180) * (width / 360);
    
    // Convert latitude using Mercator projection
    const latRad = lat * Math.PI / 180;
    const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const y = (height / 2) - (width * mercN / (2 * Math.PI));
    
    return { x, y };
  };

  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Coverage Map</h3>
      
      <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden">
        {/* World Map SVG */}
        <svg 
          viewBox="0 0 800 450" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simplified world map outline */}
          <path 
            d="M400,50 C500,30 600,70 650,150 C700,230 650,300 600,350 C550,400 450,420 350,400 C250,380 150,320 100,250 C50,180 100,100 150,70 C200,40 300,70 400,50 Z" 
            fill="#E5E7EB" 
            stroke="#9CA3AF" 
            strokeWidth="1"
          />
          
          {/* Asia continent outline - more accurate */}
          <path
            d="M650,150 C600,100 550,120 500,100 C450,80 400,90 350,70 C300,50 250,60 200,80 C150,100 120,130 100,170 C80,210 90,250 110,280 C130,310 160,330 190,340 C220,350 250,360 280,350 C310,340 340,320 370,310 C400,300 430,290 460,280 C490,270 520,260 550,250 C580,240 610,230 630,210 C650,190 660,170 650,150 Z"
            fill="#F3F4F6"
            stroke="#9CA3AF"
            strokeWidth="0.5"
          />
        </svg>

        {/* Accurate location markers */}
        {locations.map((location) => {
          const pos = project(location.lat, location.lng);
          return (
            <React.Fragment key={location.id}>
              <motion.div
                className={`absolute ${location.color} w-4 h-4 rounded-full shadow-lg cursor-pointer z-10`}
                style={{
                  left: `${(pos.x / 800) * 100}%`,
                  top: `${(pos.y / 450) * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
                onClick={() => setActiveLocation(location.id === activeLocation ? null : location.id)}
              />
              
              <AnimatePresence>
                {activeLocation === location.id && (
                  <motion.div
                    className={`absolute ${location.color} text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap z-20`}
                    style={{
                      left: `${(pos.x / 800) * 100}%`,
                      top: `${(pos.y / 450) * 100}%`,
                      transform: 'translate(-50%, -40px)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {location.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {locations.map((location) => (
          <div key={location.id} className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${location.color} mr-2`}></div>
            <span className="text-sm text-gray-600">{location.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccurateMapSection;