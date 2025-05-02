"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Mice1 = () => {
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
       {/* Hero Section */}
       <section className="relative text-white py-20 md:py-32 overflow-hidden">
         <div className="absolute inset-0 z-10"></div>
         <Image 
           src="/images/Mice/mice.jpg" 
           alt="Corporate event background"
           fill
           className="object-cover"
         />
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
           <motion.div
             initial="hidden"
             animate="visible"
             variants={staggerContainer}
             className="text-center"
           >
             <motion.h1 
               variants={fadeIn}
               className="text-4xl md:text-6xl font-bold mb-3 mt-5 lg:mt-0"
             >
               Comfort Vacanze
             </motion.h1>
             <motion.p 
               variants={fadeIn}
               className="text-xl md:text-2xl mb-8 font semibold"
             >
               Global MICE Excellence
             </motion.p>
             <motion.p 
               variants={fadeIn}
               className="text-xl md:text-xl font-medium italic mt-3"
             >
               Meetings, Incentives, Conferences, Exhibitions — Perfectly Delivered
             </motion.p>
           </motion.div>
         </div>
       </section>
 
       {/* Intro Section */}
       <section className="py-16 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div
            
           >
             <h2 
               
               className="text-3xl font-bold text-center mb-12 text-[#EB7C19]"
             >
               Strategic Event Excellence
             </h2>
             
             <div 
              
               className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
             >
               <p className="text-lg md:text-xl leading-relaxed text-center">
                 At Comfort Vacanze, we design and deliver corporate events that inspire, engage, and elevate. Across the world&apos;s top destinations, we turn strategic goals into extraordinary experiences — with precision, creativity, and professionalism.
               </p>
             </div>
           </div>
         </div>
       </section>
 
    
     </div>
   
         
   
  );
};

export default Mice1;