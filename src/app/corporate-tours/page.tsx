"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CorporatePage = () => {
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

  const services = [
    {
      title: "Venue Selection",
      icon: "🏨",
      description: "Elite conference centers to tropical retreats"
    },
    {
      title: "Logistics",
      icon: "🚐",
      description: "Complete travel arrangements & VIP handling"
    },
    {
      title: "Cultural Events",
      icon: "🎉",
      description: "Themed gala dinners & authentic experiences"
    },
    {
      title: "Team Building",
      icon: "👥",
      description: "Adventure activities fostering collaboration"
    },
    {
      title: "Global Compliance",
      icon: "🌎",
      description: "Visa support & multilingual services"
    }
  ];

  const experiences = [
    { region: "Middle East", activities: ["Desert adventures", "Luxury gala nights"] },
    { region: "Europe", activities: ["Vineyard tours", "Castle stays", "Culinary masterclasses"] },
    { region: "Asia", activities: ["Cultural immersions", "Temple visits"] },
    { region: "Tropical", activities: ["Private island incentives"] },
    { region: "Adventure", activities: ["Safaris", "Skiing", "Rainforest explorations"] }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative  text-white py-20 md:py-32 overflow-hidden">
        <motion.div 
         
          className="absolute inset-0"
        >
          <Image 
            src="/images/CorporateTours/corporate-tours.jpg" 
            alt="World map background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Comfort Vacanze
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8"
            >
              Corporate Group Tours & Global Events
            </motion.p>
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-light italic"
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
            
            <div 
              
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
            >
              <p className="text-lg md:text-xl leading-relaxed">
                Comfort Vacanze, in strategic joint venture with SS World Holidays, brings together decades of tourism expertise, strong regional presence, and a global network to redefine corporate group travel and events. Together, we design journeys that blend business objectives with rich cultural, educational, and leisure experiences. creating truly world-class corporate events.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* Services */}
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
              Our Services
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              Unique Global Experiences
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
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
              Corporate Travel Made Effortless
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              From high energy incentive programs to elegant retreats, we deliver world class corporate travel experiences that inspire, engage, and elevate your brand.
            </motion.p>
            
            
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 italic text-blue-200"
            >
              Your vision, our expertise  &ndash; together, we create journeys that spark success.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;