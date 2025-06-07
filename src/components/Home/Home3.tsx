"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

interface Destination {
  id: number;
  name: string;
  image: string;
  placeholder: string;
}

const DestinationsSection: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
   {
      id: 1,
      name: "Singapore",
      image: "/images/Home/UpdatedSINGAPORE.jpg",
      placeholder: "/images/Home/singapore-placeholder.webp",
    },
    {
      id: 2,
      name: "Malaysia",
      image: "/images/Home/UpdatedMalaysia.jpg",
      placeholder: "/images/Home/malaysia-placeholder.webp",
    },
    {
      id: 3,
      name: "Thailand",
      image: "/images/Home/updatedThailand.jpg",
      placeholder: "/images/Home/thailand-placeholder.webp",
    },
    {
      id: 4,
      name: "Indonesia",
      image: "/images/Home/UpdatedIndonesia.jpg",
      placeholder: "/images/Home/indonesia-placeholder.webp",
    },
    // need to change photos from here 
    {
      id: 5,
      name: "Vietnam",
      image: "/images/Home/vietnam.webp",
      placeholder: "/images/Home/vietnam-placeholder.webp",
    },
    {
      id: 6,
      name: "Srilanka",
      image: "/images/Home/srilanka.webp",
      placeholder: "/images/Home/vietnam-placeholder.webp",
    },
    {
      id: 7,
      name: "Dubai",
      image: "/images/Home/dubai.webp",
      placeholder: "/images/Home/vietnam-placeholder.webp",
    },
    {
      id: 8,
      name: "London",
      image: "/images/Home/london.webp",
      placeholder: "/images/Home/vietnam-placeholder.webp",
    },
    {
      id: 9,
      name: "...",
      image: "/images/Home/many-more.webp",
      placeholder: "/images/Home/vietnam-placeholder.webp",
    },
    // ... rest of your destinations
  ];
  

useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = (): void => {
    if (containerRef.current) {
      const newPosition = Math.max(scrollPosition - 1, 0);
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition * (300 + 24),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (containerRef.current) {
      const maxScroll = Math.max(destinations.length - (isTablet ? 2 : 3), 0);
      const newPosition = Math.min(scrollPosition + 1, maxScroll);
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition * (300 + 24),
        behavior: "smooth",
      });
    }
  };

  const goToSlide = (index: number): void => {
    setScrollPosition(index);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * (300 + 24),
        behavior: "smooth",
      });
    }
  };

  return (
  <section className="py-16 relative">
  <div className=" mx-auto lg:mx-[7vw] px-4 sm:px-6 lg:px-8">
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col items-center mb-16 z-10" // Center content with flex
>
  <h2 className="text-2xl md:text-3xl font-bold text-center">
    Destinations
  </h2>
  <motion.div
    className="h-1 bg-[#EB7C19] mt-2" // No absolute positioning needed
    initial={{ scaleX: 0 }} // Animate scale instead of width
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ 
      width: "200px", // Fixed width
      originX: 0.5 // Makes the animation grow from center
    }}
  />
</motion.div>

        {isMobile ? (
            <div className="space-y-4 px-4">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="relative w-full mx-auto lg:mx-[6vw]" // Added max-w-md and mx-auto
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full">
                  <div className="relative h-48 w-full overflow-hidden"> {/* Increased height */}
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{
                    y: [7, -3, 7],
                  }}
                  transition={{
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  }}
                  className="absolute -top-1 -right-3 bg-[#EB7C19] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                >
                  <FaMapMarkerAlt className="h-4 w-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {destinations.length > (isTablet ? 2 : 3) && (
              <>
                <button
                  onClick={scrollLeft}
                  disabled={scrollPosition === 0}
                  className={`absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg z-10 transition-all ${
                    scrollPosition === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Scroll left"
                >
                  <FaChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={scrollRight}
                  disabled={scrollPosition >= destinations.length - (isTablet ? 2 : 3)}
                  className={`absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg z-10 transition-all ${
                    scrollPosition >= destinations.length - (isTablet ? 2 : 3)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  aria-label="Scroll right"
                >
                  <FaChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div ref={containerRef} className="relative overflow-x-hidden">
              <div className="flex space-x-6 pb-6">
                {destinations.map((destination) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className={`relative flex-shrink-0 ${
                      isTablet ? 'w-[calc(50%-12px)]' : 'w-[calc(33.333%-16px)]'
                    } md:w-[290px]`}
                  >
                    <div className="bg-white rounded-4xl shadow-md overflow-hidden h-full">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                          {destination.name}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        y: [7, -3, 7],
                      }}
                      transition={{
                        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                      }}
                      className="absolute -top-1 -right-3 bg-[#EB7C19] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                    >
                      <FaMapMarkerAlt className="h-4 w-4" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {destinations.length > (isTablet ? 2 : 3) && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: destinations.length - (isTablet ? 1 : 2) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        scrollPosition === index ? "bg-[#EB7C19]" : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>
            )}
          </>
        )}
      </div>
  </section>
  );
};

export default DestinationsSection;