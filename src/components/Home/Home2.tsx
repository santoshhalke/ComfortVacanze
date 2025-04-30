'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Home2 = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Innovating <span className="text-[#EB7C19]">Travel Experiences</span> Worldwide
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 text-justify"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ delay: 1, duration: 1 }}
            >
              Comfort Vacanze, in strategic joint venture with SS World Holidays, brings together decades of tourism expertise, strong regional presence, and a global network to redefine corporate group travel and events. Together, we design journeys that blend business objectives with rich cultural, educational, and leisure experiences &ndash; creating truly world class corporate events.

            </motion.p>
            
          
            
            <motion.div
              className="pt-4"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ delay: 1.4, duration: 1.8 }}
            >
              <Link href="/about" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#EB7C19] hover:bg-orange-700 transition-colors duration-200"
                >
                  Discover Our Story
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              y: [-10, 10, -10],
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 2, 
              delay: 0.2,
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
              opacity: { duration: 1 }
            }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/image1.jpg"
              alt="Our team working together"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-900/10 mix-blend-normal" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home2;