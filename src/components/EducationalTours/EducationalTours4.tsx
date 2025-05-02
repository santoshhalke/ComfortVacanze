"use client";
import { motion } from "framer-motion";

const EducationalTours4 = () => {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-[#EB7C19] mb-6"
            >
              Program Highlights
            </motion.h2>
            
            <motion.div 
              variants={fadeIn}
              className="bg-[#EB7C19]/10 rounded-xl p-8 text-left"
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#EB7C19] text-white p-2 rounded-lg mr-4">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Industry Visits</h3>
                    <p className="text-gray-700">First-hand exposure to operational environments with Q&A sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#EB7C19] text-white p-2 rounded-lg mr-4">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Academic Workshops</h3>
                    <p className="text-gray-700">Interactive sessions with university faculty and researchers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#EB7C19] text-white p-2 rounded-lg mr-4">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Cultural Exchange</h3>
                    <p className="text-gray-700">Immersive experiences with local communities and traditions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#EB7C19] text-white p-2 rounded-lg mr-4">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Professional Networking</h3>
                    <p className="text-gray-700">Opportunities to connect with industry professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EB7C19] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Ready to Transform Education Through Travel?
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8"
            >
              Let us create a customized educational tour that brings your curriculum to life in Malaysia&apos vibrant learning landscape.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 text-white/90"
            >
              Malaysia&apos;s Gateway to World-Class Educational Experiences
            </motion.p>
          </motion.div>
        </div>
      </section>
    
    </>
   
         
   
  );
};

export default EducationalTours4;