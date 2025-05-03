"use client";
import { motion } from "framer-motion";

const CorporateTours4 = () => {
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
    

    
      // const experiences = [
      //   { region: "Middle East", activities: ["Desert adventures", "Luxury gala nights"] },
      //   { region: "Europe", activities: ["Vineyard tours", "Castle stays", "Culinary masterclasses"] },
      //   { region: "Asia", activities: ["Cultural immersions", "Temple visits"] },
      //   { region: "Tropical", activities: ["Private island incentives"] },
      //   { region: "Adventure", activities: ["Safaris", "Skiing", "Rainforest explorations"] }
      // ];

  return (
    
    
   <>
    {/* Global Experiences */}
    {/* <section className="py-16 bg-gray-50">
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
      </section> */}

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
              className="text-2xl md:text-3xl font-semibold mb-6"
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
      </section></>
   
  );
};

export default CorporateTours4;