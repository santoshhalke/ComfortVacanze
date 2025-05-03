"use client";
import { motion } from "framer-motion";

const Git4 = () => {
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
    

    

    
      const clientGroups = [
        { type: "Corporate", icon: "🏢", description: "Incentive travel & team building" },
        { type: "Educational", icon: "🧑‍🎓", description: "Student groups & study tours" },
        { type: "Special Interest", icon: "🧑‍🍳", description: "Culinary, adventure, cultural" },
        { type: "Leisure", icon: "🧑‍🤝‍🧑", description: "Family & friend groups" },
        { type: "Religious", icon: "🌍", description: "Pilgrimage & faith-based travel" },
        { type: "Custom", icon: "✨", description: "Tailored to your unique needs" }
      ];
 
    
   

  return (
    
    <>

 
       {/* Client Groups */}
       <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
               Groups We Serve
             </motion.h2>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {clientGroups.map((group, index) => (
                 <motion.div
                   key={index}
                   variants={fadeIn}
                   whileHover={{ y: -5 }}
                   className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                 >
                   <div className="text-5xl mb-4">{group.icon}</div>
                   <h3 className="text-xl font-bold mb-2">{group.type}</h3>
                   <p className="text-gray-600">{group.description}</p>
                 </motion.div>
               ))}
             </div>
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
               Ready to Plan Your Group Adventure?
             </motion.h2>
             
             <motion.p 
               variants={fadeIn}
               className="text-xl mb-8"
             >
From planning to execution, Comfort Vacanze ensures every group journey is stress &ndash; free, well &ndash; organized, and memorable.
We manage the details, so you can enjoy the experience.             </motion.p>
             
            
             
            
           </motion.div>
         </div>
       </section>
    
    </>
   
         
   
  );
};

export default Git4;