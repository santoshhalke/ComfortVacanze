"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants,itemVariants,fadeInVariants } from './AboutAnimation';
import { useEffect,useState } from 'react';
const About2 = () => {
  const text = "TRAVEL";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => (prev >= text.length ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {/* Animated Heading with Decorative Elements */}
              <div className="relative text-center mb-16">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative"
                >
                  Our Journey
                  <motion.span
                    className="absolute left-0 -bottom-2 w-full h-1 bg-[#EB7C19]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-400 text-4xl"
                >
                  ✈️
                </motion.div>
              </div>
    
              {/* Timeline-style Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                {/* Text Content with Animated Timeline Dots */}
                <motion.div
                  variants={itemVariants}
                  className="lg:col-span-3 relative"
                >
                  <div className="relative pl-10 border-l-2 border-orange-100 space-y-12">
                    {/* Timeline Item 1 - Founding */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-[#EB7C19] border-4 border-white shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        2018 &ndash; The Comfort Vacanze Journey Begins
                      </h3>
                      <p className="text-gray-600 text-justify">
                        Founded as Comfort Vacanze Tours, we started with premium
                        vehicle services built on reliability and comfort Vacanze,
                        growing to become one of India&apos;s most trusted names in
                        luxury transport across PAN India.
                      </p>
                    </motion.div>
    
                    {/* Timeline Item 2 - Expansion */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-400 border-4 border-white shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        2025 &ndash; Birth of Comfort Vacanze
                      </h3>
                      <p className="text-gray-600 text-justify">
                        Headquartered in Pune, India, we evolved into Comfort
                        Vacanze &ndash; the parent company of Comfort Tours PVT.
                        LTD. With global partnerships and a refined vision, we began
                        crafting extraordinary journeys blending seamless service
                        with soulful travel experiences.
                      </p>
                    </motion.div>
    
                    {/* Timeline Item 3 - Partnership */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative"
                    >
                      <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-300 border-4 border-white shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Today &ndash; Global Excellence
                      </h3>
                      <p className="text-gray-600 text-justify">
                        Through our strategic collaboration with SS World Holidays,
                        we now transcend borders to deliver curated travel
                        masterpieces. Every journey reflects our passion for
                        excellence &ndash; where luxury begins, comfort leads, and
                        the world opens with grace.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
    
                {/* Image Gallery with Interactive Effect */}
                <motion.div
  variants={fadeInVariants}
  className="lg:col-span-2 relative h-80 md:h-[500px]"
>
  {/* Main Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="absolute inset-0 overflow-hidden z-10 border-white"
  >
    <Image
      src="/images/About/travel-pune.jpg"
      alt="Comfort Vacanze headquarters"
      fill
      className="object-cover"
    />
    
    {/* Travel Text Overlay */}
    <div className="text-center z-20">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index < visibleLetters ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-[#EB7C19]  drop-shadow-lg ml-3"
            >
              {letter}
            </motion.span>
          ))}
        </div>
  </motion.div>
</motion.div>
              </div>
    
              {/* Floating decorative elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute left-20 top-1/4 text-6xl text-orange-100 -z-10"
              >
                🌴
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute right-32 bottom-1/4 text-5xl text-orange-100 -z-10"
              >
                ✨
              </motion.div>
            </motion.div>
          </section>
    
   
  );
};

export default About2;