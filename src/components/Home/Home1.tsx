"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useDragControls();

  const slides = [
    {
      id: 1,
      image: "/images/Home/home3.jpg",
      title: "Explore The Unknown",
      subtitle: "Embark on a transformative journey and explore the allure of diverse cultures, landscapes, and people.",
    },
    {
      id: 2,
      image: "/images/Home/home1.jpg",
      title: "Moments That Matter",
      subtitle: "Create memories with personalized travel experiences designed just for you.",
    },
    {
      id: 3,
      image: "/images/Home/home2.jpg",
      title: "Beyond Borders",
      subtitle: "Discover hidden gems and connect with cultures across the world.",
    },
    {
      id: 4,
      image: "/images/Home/home4.jpg",
      title: "Sustainable Travel",
      subtitle: "Journey responsibly with our eco-tours",
    },
   
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[31vh] md:h-[45vh] lg:h-[89vh] overflow-hidden mt-20">
      <AnimatePresence mode='wait'>
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, {offset}) => {
            if (offset.x > 100) {
              goToPrev();
            } else if (offset.x < -100) {
              goToNext();
            }
          }}
          dragControls={controls}
        >
          {/* Hero Image */}
          <Image
            src={slides[currentIndex].image}
            alt="hero section image"
            fill
            className="object-cover select-none"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          
          {/* Text overlay */}
          <div className="absolute left-8 lg:left-25 bottom-1/4 md:bottom-1/3 bz-10 text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-2  drop-shadow-4xl">
              {slides[currentIndex].title}
            </h1>
            <p className="text-sm md:text-2xl font-semibold drop-shadow-lg">
              {slides[currentIndex].subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Visible on all screens */}
      <button 
        onClick={goToPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#0080BF]/50 hover:bg-white rounded-full p-1 sm:p-2 z-10 transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white hover:text-[#0080BF]/50 stroke-[3]" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#0080BF]/50 hover:bg-white rounded-full p-1 sm:p-2 z-10 transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white hover:text-[#0080BF]/50 stroke-[3]" />
      </button>

      {/* Indicators - Smaller on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;