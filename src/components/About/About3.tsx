"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants,itemVariants,fadeInVariants } from './AboutAnimation';

const About3 = () => {
   

  return (
    <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div
                  variants={fadeInVariants}
                  className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl order-last lg:order-first"
                >
                  <Image
                    src="/founder.jpg"
                    alt="Founder Raj Kolpe"
                    fill
                    className="object-cover"
                  />
                </motion.div>
    
                <motion.div variants={itemVariants} className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-16 relative z-10"
                  >
                    Meet Our Founder
                    <motion.span
                      className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "280px", x: "-50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </motion.h2>
    
                  <h3 className="text-2xl text-[#EB7C19] font-semibold">
                    Raj Kolpe
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Raj Kolpe is the visionary behind Comfort Vecanze &ndash; a
                    journey that began in 2018 with a mission to redefine luxury
                    travel through trust.
                  </p>
                  <p className="text-gray-600 text-justify">
                    From founding Comfort Tours to establishing Comfort Vecanze as a
                    global travel brand, Raj has been dedicated to crafting elegant
                    and soulful journeys. With key partnerships like SS World
                    Holidays, his vision now reaches far beyond borders.
                  </p>
                  <p className="text-gray-600 text-justify">
                    &quot;Comfort Vecanze is more than travel. It&apos;s about
                    grace, detail, and an unwavering commitment to
                    hospitality.&quot;
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
    
   
  );
};

export default About3;