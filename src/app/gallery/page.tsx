'use client'

const GalleryPage = () => {
  const images = [
    { id: 1, src: '/images/gallery/travel_1.webp', alt: 'Outdoor adventure', orientation: 'landscape' },
    { id: 2, src: '/images/gallery/travel_2.webp', alt: 'Portrait session', orientation: 'landscape' },
    { id: 3, src: '/images/gallery/travel_3.webp', alt: 'Product showcase', orientation: 'portrait' },
    { id: 4, src: '/images/gallery/travel_4.jpg', alt: 'Team gathering', orientation: 'landscape' },
    { id: 5, src: '/images/gallery/travel_5.jpg', alt: 'Event coverage', orientation: 'landscape' },
    { id: 6, src: '/images/gallery/travel_6.jpg', alt: 'Creative artwork', orientation: 'portrait' },
    { id: 7, src: '/images/gallery/travel_7.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 8, src: '/images/gallery/travel_8.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 9, src: '/images/gallery/travel_9.jpg', alt: 'Creative artwork', orientation: 'portrait' },
    { id: 10, src: '/images/gallery/travel_10.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 11, src: '/images/gallery/travel_11.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 12, src: '/images/gallery/travel_12.jpg', alt: 'Creative artwork', orientation: 'portrait' },
    { id: 13, src: '/images/gallery/travel_13.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 14, src: '/images/gallery/travel_14.jpg', alt: 'Creative artwork', orientation: 'landscape' },
    { id: 15, src: '/images/gallery/travel_15.webp', alt: 'Creative artwork', orientation: 'portrait' },

   

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full py-24 px-4 text-center bg-gradient-to-r from-[#369ee4] to-[#ef7912]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block mb-2">Our Creative</span>
            <span className="inline-block px-4 py-2 bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#e9730c] to-[#015791]">
              Gallery Collection
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A visual journey through our best moments and creations
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-8 py-16 mx-auto lg:mx-[13vw]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className={`break-inside-avoid group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                image.orientation === 'portrait' ? 'h-[600px]' : 'h-[300px]'
              }`}
            >
              <div className="w-full h-full grid">
                {/* Background image */}
                <div
                  className="col-start-1 row-start-1 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={image.alt}
                  role="img"
                />
                
                {/* Watermark */}
                <div className="col-start-1 row-start-1 flex items-start justify-end p-4">
                  <img 
                    src="/images/logo.png" 
                    alt="Watermark"
                    className="h-6 opacity-40 md:h-10 md:opacity-45 select-none pointer-events-none" 
                    style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;