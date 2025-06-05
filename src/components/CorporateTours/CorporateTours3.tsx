"use client";
import { motion } from "framer-motion";

const CorporateTours3 = () => {
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
          title: "Venue Selection and Setup",
          icon: "🏨",
          description: "Elite conference centers, tropical retreats, historical landmarks - tailored to the event's purpose and tone."
        },
        {
          title: "Logistics and Transportation",
          icon: "🚐",
          description: "Complete travel arrangements, visa facilitation, VIP handling, airport transfers, and local ground transport."
        },
        {
          title: "Cultural and Experiential Events",
          icon: "🎉",
          description: "Themed gala dinners, vineyard retreats, Arabian nights, cultural deep dives - crafted with local authenticity."
        },
        {
          title: "Team-Building Activities",
          icon: "👥",
          description: "Engage teams through yacht races, desert safaris, mountain treks, culinary battles, and more — all designed to foster leadership and collaboration."

        },
        {
          title: "International Compliance",
          icon: "🌎",
          description: "Visa support, insurance coordination, safety measures, and multilingual services - ensuring stress-free travel for global teams."
        }
      ];
    
   

  return (
    
    
    <section className="py-16 bg-white">
        <div className="mx-auto lg:mx-[6vw]  px-4 sm:px-6 lg:px-8">
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
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
   
  );
};

export default CorporateTours3;