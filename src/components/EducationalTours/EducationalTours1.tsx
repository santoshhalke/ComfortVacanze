"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const EducationalTours1 = () => {
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
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0  z-10"></div>
          <Image 
            src="/images/EducationalTours/educational-tour.jpg" 
            alt="Group traveling together"
            fill
            className="object-cover"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-5 lg:mt-0">
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
                className="text-xl md:text-2xl mb-8 font semibold"
              >
                Educational Tourism in Malaysia
              </motion.p>
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-xl font-medium italic mt-3"
              >
                Bringing Education to Life Through Real-World Industry Exposure
              </motion.p>
            </motion.div>
          </div>
        </section>
  
        {/* Intro Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
            
            >
              <h2 className="text-3xl font-bold text-[#EB7C19] mb-6">Transformative Learning Journeys</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                At Comfort Vacanze, we design immersive educational journeys across Malaysia that go beyond the classroom. Through strategic collaboration with top universities, hospitals, engineering centers, hospitality hubs, and technology parks, we provide students with live, real-world experiences that inspire learning and global awareness.
              </p>
            </div>
          </div>
        </section>
    
    </>
   
         
   
  );
};

export default EducationalTours1;