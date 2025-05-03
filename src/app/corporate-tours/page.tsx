"use client";

import CorporateTours3 from "@/components/CorporateTours/CorporateTours3";
import { motion } from "framer-motion";
import Image from "next/image";

const CorporateTours = () => {
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
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <motion.div className="absolute inset-0">
          <Image 
            src="/images/CorporateTours/corporate-tours.jpg" 
            alt="Corporate group tours background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-5 lg:mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-3"
            >
              Comfort Vacanze
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8 font-semibold"
            >
              Corporate Group Tours & Global Events
            </motion.p>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-xl font-medium italic mt-3"
            >
              Where Success Meets Seamless Travel
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 
                 
                 className="text-3xl font-bold text-center mb-12 text-[#EB7C19]"
               >
                 Strategic Partnership
               </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-center">
                Comfort Vacanze, in strategic joint venture with SS World Holidays, brings together decades of tourism expertise, strong regional presence, and a global network to redefine corporate group travel and events. Together, we design journeys that blend business objectives with rich cultural, educational, and leisure experiences &mdash; creating truly world-class corporate events.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                <p>No generic tours &mdash; every event and itinerary is thoughtfully designed to align with corporate identity and goals.</p>
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

      {/* Our Services */}
     <CorporateTours3/>

      {/* Global Experiences */}
      <section className="py-16 bg-gray-50">
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
              ✨ Unique Global Experiences
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  region: "Middle East", 
                  activities: ["Desert adventures and luxury gala nights."]
                },
                { 
                  region: "Europe", 
                  activities: ["Vineyards, castles, historical walking tours, and culinary masterclasses."]
                },
                { 
                  region: "Asia", 
                  activities: ["Cultural immersions, temple visits, traditional performances, cooking tours."]
                },
                { 
                  region: "Tropical Destinations", 
                  activities: ["Private island incentives in Indonesia, Malaysia, and the Philippines."]
                },
                { 
                  region: "Adventure Escapes", 
                  activities: ["Safaris in Africa, skiing in Switzerland, rainforest explorations in Latin America."]
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="bg-[#EB7C19] text-white p-4">
                    <h3 className="text-xl font-bold">{exp.region}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {exp.activities.map((activity, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#EB7C19] mr-2">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
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
              className="text-3xl font-semibold text-center mb-12 text-[#EB7C19]"
            >
              🤝 Why Partner with Comfort Vacanze and SS World Holidays
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                "Regional Expertise, Global Delivery",
                "Bespoke Programs, No Templates",
                "Efficient, Cost-Effective Execution",
                "Creative Concepts Aligned with Your Vision",
                "Trusted Professionalism from Planning to Execution"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-lg font-semibold">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#EB7C19] to-[#EB7C19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              🏆 Corporate Travel Made Effortless with Comfort Vacanze & SS World Holidays
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              From high-energy incentive programs and leadership summits to elegant retreats and client appreciation events, Comfort Vacanze and SS World Holidays deliver world-class corporate travel experiences that inspire, engage, and elevate your brand.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 italic text-blue-200"
            >
              Your vision, our expertise &mdash; together, we create journeys that spark success.
            </motion.p>

            <motion.button
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white text-[#EB7C19] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              👉 Contact Us Today to plan your next corporate adventure across the globe!
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CorporateTours;