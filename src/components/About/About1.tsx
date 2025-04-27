"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants,itemVariants } from './AboutAnimation';
const About1 = () => {
   
  return (
    <section className="relative h-96 md:h-screen max-h-[800px] overflow-hidden">
            <Image
              src="/about-hero.jpg"
              alt="Travel adventure"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center px-4"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  <span className="text-[#EB7C19]">Comfort Vacanze</span>
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
                >
                  A Journey Beyond Borders. A Brand Built on Trust.
                </motion.p>
              </motion.div>
            </div>
          </section>
    
   
  );
};

export default About1;