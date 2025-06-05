"use client";
import { motion } from "framer-motion";

const Git3 = () => {
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
    

    
      const destinations = [
        { region: "Southeast Asia", countries: ["Malaysia", "Singapore", "Thailand", "Philippines", "Indonesia"] },
        { region: "East Asia", countries: ["Japan", "South Korea", "China"] },
        { region: "Middle East", countries: ["Dubai", "Qatar", "Saudi Arabia"] },
        { region: "Europe", countries: ["France", "Spain", "Italy", "UK"] },
        { region: "Americas", countries: ["USA", "Canada", "Mexico"] },
        { region: "Oceania", countries: ["Australia", "New Zealand"] }
      ];
    
  
 
    
   

  return (
    
    <>

 
       {/* Destinations */}
       <section className="py-16 bg-white">
         <div className="mx-auto lg:mx-[6vw]  px-4 sm:px-6 lg:px-8">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
             <motion.div variants={fadeIn} className="text-center mb-12">
               <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Popular Group Tour Destinations</h2>
               <p className="text-gray-600">Custom routes and multi country tours available</p>
             </motion.div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
   {destinations.map((destination, index) => (
     <motion.div
       key={index}
       variants={fadeIn}
       whileHover={{ y: -5 }}
       className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
     >
       {/* Colorful gradient header */}
       <div 
         className={`h-3 ${index % 3 === 0 ? 'bg-gradient-to-r from-[#EB7C19] to-[#FF9E4F]' : 
                    index % 3 === 1 ? 'bg-gradient-to-r from-[#EB7C19] to-[#EB7C19]' : 
                    'bg-gradient-to-r from-[#EB7C19] to-[#EB7C19]'}`}
       ></div>
       
       <div className="p-6 bg-white">
         <div className="flex items-center mb-4">
           <div className={`text-2xl mr-3 ${
             index % 3 === 0 ? 'text-[#EB7C19]' : 
             index % 3 === 1 ? 'text-[#EB7C19]' : 
             'text-[#EB7C19]'
           }`}>
             {index % 3 === 0 ? '🌏' : index % 3 === 1 ? '🗺️' : '✈️'}
           </div>
           <h3 className="text-xl font-bold text-gray-800">{destination.region}</h3>
         </div>
         
         <div className="space-y-3">
           {destination.countries.map((country, i) => (
             <div key={i} className="flex items-center">
               <div className={`w-2 h-2 rounded-full mr-3 ${
                 index % 3 === 0 ? 'bg-[#EB7C19]' : 
                 index % 3 === 1 ? 'bg-text-[#EB7C19]' : 
                 'bg-[#EB7C19]'
               }`}></div>
               <span className="text-gray-700">{country}</span>
             </div>
           ))}
         </div>
         
         <div className="mt-4 pt-4 border-t border-gray-100">
           <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
             index % 3 === 0 ? 'bg-[#EB7C19] text-[white]' : 
             index % 3 === 1 ? 'bg-[#EB7C19] text-[white]' : 
             'bg-[#EB7C19] text-[white]'
           }`}>
             {destination.countries.length}+ destinations
           </span>
         </div>
       </div>
     </motion.div>
   ))}
 </div>
             
             <motion.div 
               variants={fadeIn}
               className="mt-12 text-center"
             >
             
             </motion.div>
           </motion.div>
         </div>
       </section>
 
     
     
    
    </>
   
         
   
  );
};

export default Git3;