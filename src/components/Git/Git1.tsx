"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Git1 = () => {
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
         <div className="absolute inset-0 z-10"></div>
         <Image 
           src="/images/Git/git.jpg" 
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
               Group Inclusive Tours (GIT)
             </motion.p>
             <motion.p 
               variants={fadeIn}
               className="text-xl md:text-xl font-medium italic mt-3"
             >
               Connecting People Through Seamless Travel Experiences
             </motion.p>
           </motion.div>
         </div>
       </section>
 
       {/* Intro Section */}
       <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div
             
           >
             <h2 className="text-3xl font-bold text-[#EB7C19] mb-6">Journey Together, Experience More</h2>
             <p className="text-lg md:text-xl leading-relaxed">
               At Comfort Vacanze, we believe travel is more than movement . it&apos;s about connection, discovery, and unforgettable memories. Our Group Inclusive Tours are designed to deliver smooth, enriching journeys for leisure groups, corporate teams, educational institutions, and special interest travelers.
             </p>
           </div>
         </div>
       </section>
 
       {/* Value Propositions */}

 

    
    </>
   
         
   
  );
};

export default Git1;