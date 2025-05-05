'use client';
import React from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  // Sample image data with mixed orientations
  const images = [
    { id: 1, src: '/images/gallery/travel_1.jpg', alt: 'Outdoor adventure', orientation: 'landscape' },
    { id: 2, src: '/images/gallery/travel_2.jpg', alt: 'Portrait session', orientation: 'landscape' },
    { id: 3, src: '/images/gallery/travel_3.jpg', alt: 'Product showcase', orientation: 'portrait' },
    { id: 4, src: '/images/gallery/travel_4.jpg', alt: 'Team gathering', orientation: 'portrait' },
    { id: 5, src: '/images/gallery/travel_5.jpg', alt: 'Event coverage', orientation: 'landscape' },
    { id: 6, src: '/images/gallery/travel_6.jpg', alt: 'Creative artwork', orientation: 'landscape' },
 
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Brand Colors */}
      <div 
        className="relative py-24 px-4 text-center"
        style={{
          background: 'linear-gradient(135deg, #067BC8 0%, #EB7C19 100%)'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block mb-2">Our Creative</span>
            <span 
              className="inline-block px-4 py-2 bg-white text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #EB7C19 0%, #067BC8 100%)'
              }}
            >
              Gallery Collection
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A visual journey through our best moments and creations
          </p>
          
        </div>
      </div>

      {/* Gallery Grid - Masonry Style */}
      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={`relative break-inside-avoid group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                image.orientation === 'portrait' ? 'h-[400px]' : 'h-[300px]'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default GalleryPage;