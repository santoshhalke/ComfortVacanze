"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CorporateTours1 = () => {
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
    
    </>
   
         
   
  );
};

export default CorporateTours1;