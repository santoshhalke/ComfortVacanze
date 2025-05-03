"use client";
import { motion } from "framer-motion";

const Mice4 = () => {
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
    
  <div>

 

      {/* Industries */}
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
              Industries We Serve
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Healthcare", icon: "🏥" },
                { name: "Technology", icon: "💻" },
                { name: "Finance", icon: "💰" },
                { name: "Manufacturing", icon: "🏭" },
                { name: "Hospitality", icon: "🏨" },
                { name: "Education", icon: "🎓" },
                { name: "Retail", icon: "🛍️" },
                { name: "Energy", icon: "⚡" }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#EB7C19] to-[#d96e15] text-white">
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
              Elevate Your Next Corporate Event
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
From corporate boardrooms to destination retreats — we craft experiences that drive success.            </motion.p>
            
          
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 italic text-white/80"
            >
              Your vision. Our expertise. Global impact.
            </motion.p>
          </motion.div>
        </div>
      </section>
 
    
     </div>
   
         
   
  );
};

export default Mice4;