"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DestinationsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      id: 5,
      name: "Singapore",
      image: "/images/Home/singapore.jpg",
      description:
        "Singapore is a vibrant island city-state in Southeast Asia, known for its stunning skyline, diverse culture",
    },
    {
      id: 4,
      name: "Vietnam",
      image: "/images/Home/vietnam2.jpg",
      description:
        "A land of contrast with bustling cities, quiet rice fields, and rich historical charm.",
    },
    {
      id: 1,
      name: "Indonesia",
      image: "/images/Home/indonesia2.jpg",
      description:
        "A tropical escape known for its lush jungles, serene temples, and vibrant beach life.",
    },
    {
      id: 2,
      name: "Thailand",
      image: "/images/Home/thiland2.jpg",
      description:
        "Home to stunning limestone cliffs, turquoise waters, and peaceful island vibes.",
    },
    {
      id: 3,
      name: "Malaysia",
      image: "/images/Home/malaysia2.jpg",
      description:
        "Malaysia is a Southeast Asian country known for its diverse culture, vibrant cities, and breathtaking natural beauty",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = Math.max(scrollPosition - 1, 0);
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition * (300 + 24), // card width + gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const maxScroll = Math.max(destinations.length - (isTablet ? 2 : 3), 0);
      const newPosition = Math.min(scrollPosition + 1, maxScroll);
      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition * (300 + 24), // card width + gap
        behavior: "smooth",
      });
    }
  };

  const goToSlide = (index: number) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 relative z-10"
        >
          Destinations We Cover
          <motion.span
            className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
            initial={{ width: 0 }}
            whileInView={{ width: "325px", x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        {/* Mobile & Tablet - Vertical Layout */}
        {isMobile ? (
          <div className="space-y-6 px-4">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="relative w-full"
              >
                <motion.div
                  className={`bg-white rounded-4xl shadow-md overflow-hidden cursor-pointer h-full ${expandedCard === destination.id ? "ring-2 ring-[#EB7C19]" : ""}`}
                  onClick={() => toggleCard(destination.id)}
                  layout
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {expandedCard === destination.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4"
                      >
                        <p className="text-gray-600 mb-3">
                          {destination.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Location pin indicator */}
                <motion.div
                  animate={{
                    y: [7, -3, 7],
                    scale: expandedCard === destination.id ? 1.2 : 1,
                  }}
                  transition={{
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    scale: { duration: 2 },
                  }}
                  className={`absolute -top-1 -right-3 bg-[#EB7C19] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg ${expandedCard === destination.id ? "z-10" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* Desktop - Horizontal Scroll Layout */}
            {destinations.length > (isTablet ? 2 : 3) && (
              <>
                <button
                  onClick={scrollLeft}
                  disabled={scrollPosition === 0}
                  className={`absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg z-10 transition-all ${scrollPosition === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={scrollRight}
                  disabled={scrollPosition >= destinations.length - (isTablet ? 2 : 3)}
                  className={`absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-lg z-10 transition-all ${scrollPosition >= destinations.length - (isTablet ? 2 : 3) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Cards Container */}
            <div ref={containerRef} className="relative overflow-x-hidden">
              <div className="flex space-x-6 pb-6">
                {destinations.map((destination) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className={`relative flex-shrink-0 ${isTablet ? 'w-[calc(50%-12px)]' : 'w-[calc(33.333%-16px)]'} md:w-[290px]`}
                  >
                    <motion.div
                      className={`bg-white rounded-4xl shadow-md overflow-hidden cursor-pointer h-full ${expandedCard === destination.id ? "ring-2 ring-[#EB7C19]" : ""}`}
                      onClick={() => toggleCard(destination.id)}
                      layout
                    >
                      <div className="relative h-48">
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                          {destination.name}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {expandedCard === destination.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-4"
                          >
                            <p className="text-gray-600 mb-3">
                              {destination.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Location pin indicator */}
                    <motion.div
                      animate={{
                        y: [7, -3, 7],
                        scale: expandedCard === destination.id ? 1.2 : 1,
                      }}
                      transition={{
                        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                        scale: { duration: 2 },
                      }}
                      className={`absolute -top-1 -right-3 bg-[#EB7C19] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg ${expandedCard === destination.id ? "z-10" : ""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            {destinations.length > (isTablet ? 2 : 3) && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: destinations.length - (isTablet ? 1 : 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${scrollPosition === index ? "bg-[#EB7C19]" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;