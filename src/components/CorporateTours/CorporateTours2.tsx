"use client";

import { motion } from "framer-motion";

const CorporateTours2 = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };
    
      const staggerContainer = {
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      };
    


  return (
    
    
   <>
   <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12 text-[#EB7C19]"
            >
              Why Choose Comfort Vacanze + SS World Holidays
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Powerful Joint Venture Expertise",
                "Global Office Network",
                `World-Class DMC Partnerships`,
                "Tailor-Made Solutions",
                "Multicultural Diversity",
                "End to End Services"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✅</span>
                    <h3 className="text-xl font-semibold">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-[#EB7C19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Strengths
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Regional Strength + Global Impact</h3>
                <p>Comfort Vacanze&apos;s Southeast Asian offices and SS World Holidays international experience guarantee flawless, regionally aligned delivery.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Industry Versatility</h3>
                <p>We handle corporate events across healthcare, engineering, hospitality, finance, and technology sectors.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Custom Crafted Packages</h3>
                <p>No generic tours &ndash; every event and itinerary is thoughtfully designed to align with corporate identity and goals.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                <p>From the initial idea to execution on-site, we deliver a polished, professional experience every time.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
   </>
   
  );
};

export default CorporateTours2;