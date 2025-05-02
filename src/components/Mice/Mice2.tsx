"use client";
import { motion } from "framer-motion";

const Mice2 = () => {
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
              Why Choose Comfort Vacanze
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Global Expertise, Local Insight",
                "Custom-Tailored Solutions",
                "Seamless Event Execution",
                "Creative, Impactful Experiences",
                "Trusted Across Industries",
                "ROI-Driven Results"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start"
                >
                  <span className="text-[#EB7C19] text-2xl mr-3">✨</span>
                  <h3 className="text-xl font-semibold">{item}</h3>
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
              Why Leaders Trust Us
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Unmatched Global Delivery</h3>
                <p>Our network across 50+ countries ensures flawless execution wherever your event takes place.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Bespoke Solutions</h3>
                <p>No template events — every program is custom-designed for your objectives and brand identity.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">24/7 Onsite Support</h3>
                <p>Our dedicated teams provide round the clock support throughout your event.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">ROI Driven Experiences</h3>
                <p>We design events that deliver measurable business impact and lasting memories.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



 
    
     </div>
   
         
   
  );
};

export default Mice2;