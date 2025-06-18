'use client';
import { useState } from 'react';
import galleryData from '@/data/Gallery/galleryData';

const GalleryPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const selectedImages = activeService
    ? galleryData.find((g) => g.service === activeService)?.images || []
    : [];

  return (
    <div className="min-h-screen bg-gray-50 mt-4">
      {/* Hero */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-orange-400 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Creative</h1>
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          Gallery Collection
        </h2>
        <p className="mt-4 text-lg">Visual stories from our services</p>
      </div>

      {/* Services Grid */}
      {!activeService && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-16">
          {galleryData.map((service) => (
            <div
              key={service.service}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => setActiveService(service.service)}
            >
              <img
                src={service.cover}
                alt={service.displayName}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-all duration-300">
                <span className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100">
                  {service.displayName}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back Button & Filtered Gallery */}
      {activeService && (
        <div className="px-8 py-16 mx-auto lg:mx-[10vw]">
          <button
            onClick={() => setActiveService(null)}
            className="mb-8 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            ← Back to All Services
          </button>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {selectedImages.map((img, idx) => (
              <div
                key={idx}
                className={`break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  img.orientation === 'portrait' ? 'h-[600px]' : 'h-[300px]'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${img.src})` }}
                  role="img"
                  aria-label={img.alt}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
