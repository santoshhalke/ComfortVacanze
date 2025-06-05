"use client";
import { motion } from "framer-motion";

const Git2 = () => {
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
        { icon: "✈", title: "Flight Booking", description: "International and domestic arrangements" },
        { icon: "🏨", title: "Hotel Accommodation", description: "Carefully selected group - friendly properties" },
        { icon: "🚍", title: "Ground Transport", description: "Comfortable coaches and transfers" },
        { icon: "🍴", title: "Meal Arrangements", description: "Special dietary options available" },
        { icon: "🏛", title: "Sightseeing", description: "Curated excursion planning" },
        { icon: "🎟", title: "Event Ticketing", description: "Attractions and special access" },
        { icon: "🧑‍🤝‍🧑", title: "Tour Leaders", description: "Professional on - ground support" },
        { icon: "🌐", title: "Multi Country", description: "Seamless cross - border tours" }
      ];
    

    
  
    
   

  return (
    
    <>
     
 
       {/* Value Propositions */}
       <section className="py-16 bg-white">
      <div className="mx-auto lg:mx-[6vw]  px-4 sm:px-6 lg:px-8">
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
            Why Choose Comfort Vacanze for GIT?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Group Handling:",
                desc: "Customized tours for small to large groups, with dedicated group management."
              },
              {
                title: "Seamless Logistics:",
                desc: "Flight bookings, visa arrangements, ground transport, accommodation, meals - all coordinated under one roof."
              },
              {
                title: "Tailor-Made Itineraries:",
                desc: "Flexible programs crafted to fit your group-interests, budget, and pace."
              },
              {
                title: "Global Destinations:",
                desc: "From Asia to Europe to the Americas- Comfort Vacanze connects your group to the world."
              },
              {
                title: "Experienced Tour Managers:",
                desc: "Professional guides ensure smooth operations and personalized care throughout the journey."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#EB7C19] shadow-sm"
              >
                <div className="flex items-start">
                  <span className="text-2xl text-[#EB7C19] mr-4">✓</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
 
       {/* Services */}
       <section className="py-16 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
             <motion.div variants={fadeIn} className="text-center mb-12">
               <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Our Group Tour Services</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for seamless group travel</p>
             </motion.div>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {services.map((service, index) => (
                 <motion.div
                   key={index}
                   variants={fadeIn}
                   whileHover={{ y: -5 }}
                   className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                 >
                   <div className="text-4xl mb-3">{service.icon}</div>
                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                   <p className="text-gray-600 text-sm">{service.description}</p>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </section>
 
    
    </>
   
         
   
  );
};

export default Git2;