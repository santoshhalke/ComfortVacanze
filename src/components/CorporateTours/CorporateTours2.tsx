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
     {/* Why Choose Us Section */}
     <section className="py-16 bg-white">
        <div className="mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8">
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
              Why Choose Comfort Vacanze + SS World Holidays for Global Corporate Events
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Powerful Joint Venture Expertise",
                  desc: "The collaboration between Comfort Vacanze and SS World Holidays strengthens operational excellence, creativity, and global reach for corporate groups."
                },
                {
                  title: "Global Office Network",
                  desc: "Direct support from offices in Philippines, Malaysia, Indonesia, Vietnam, and Thailand ensures local expertise and seamless operations."
                },
                {
                  title: "World-Class DMC Partnerships",
                  desc: "Access to top-tier Destination Management Companies (DMCs) across Europe, Asia, Middle East, and the Americas."
                },
                {
                  title: "Tailor-Made Solutions",
                  desc: "Custom event programs reflecting each company's goals, culture, and strategic vision."
                },
                {
                  title: "Multicultural Diversity",
                  desc: "Authentic experiences that celebrate local traditions, enhancing corporate programs with global flavor."
                },
                {
                  title: "End-to-End Services",
                  desc: "Venue booking, logistics, visa processing, local transport, entertainment, team-building activities - all managed under one expert umbrella."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✅</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
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
              💼 Our Strengths
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Regional Strength + Global Impact:</h3>
                <p>Comfort Vacanze&apos;s Southeast Asian offices and SS World Holidays&apos; international experience guarantee flawless, regionally aligned delivery.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Industry Versatility:</h3>
                <p>We handle corporate events across healthcare, engineering, hospitality, finance, and technology sectors.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Custom Crafted Packages:</h3>
                <p>No generic tours &ndash; every event and itinerary is thoughtfully designed to align with corporate identity and goals.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Operational Excellence:</h3>
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