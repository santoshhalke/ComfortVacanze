"use client";
import { motion } from "framer-motion";

const Mice3 = () => {
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
    
      const services = [
        {
          title: "Meetings",
          icon: "🏛",
          description: "Executive retreats, leadership forums, high end board meetings"
        },
        {
          title: "Incentives",
          icon: "🎉",
          description: "Luxury retreats, cultural immersions, adventure team building"
        },
        {
          title: "Conferences",
          icon: "🎤",
          description: "Speaker management, delegate services, sponsor coordination"
        },
        {
          title: "Exhibitions",
          icon: "🌐",
          description: "Brand showcases, global product launches, audience engagement"
        },
        {
          title: "Full Planning",
          icon: "📋",
          description: "End to end event management with precision execution"
        }
      ];
    
      const destinations = [
        { 
          region: "Southeast Asia", 
          countries: ["Malaysia", "Philippines", "Thailand", "Vietnam", "Indonesia", "Singapore"] 
        },
        { 
          region: "Middle East", 
          countries: ["UAE", "Qatar", "Saudi Arabia"] 
        },
        { 
          region: "Europe", 
          countries: ["France", "Spain", "UK", "Italy", "Germany"] 
        },
        { 
          region: "Americas", 
          countries: ["USA", "Canada", "Mexico"] 
        },
        { 
          region: "Global Network", 
          countries: ["50+ countries through our trusted partners"] 
        }
      ];
   
    
  
    

 
    
   

  return (
    
  <div>


  

      {/* Services */}
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
              Our MICE Services
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="mx-auto lg:mx-[6vw]  px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div  className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Global Presence</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our worldwide network ensures flawless execution across all continents
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[white]/90 to-[white opacity-90 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="relative z-20 p-6 h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-black">{destination.region}</h3>
                <div className="w-12 h-1 bg-white mt-2"></div>
              </div>
              
              <ul className="space-y-2 flex-grow">
                {destination.countries.map((country, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[black]/50 mr-2">•</span>
                    <span className="text-[black]/90 hover:text-black transition-colors">{country}</span>
                  </li>
                ))}
              </ul>
              
             
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
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

  
 
    
     </div>
   
         
   
  );
};

export default Mice3;