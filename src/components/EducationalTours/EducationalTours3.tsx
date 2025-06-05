"use client";
import { motion } from "framer-motion";

const EducationalTours3 = () => {
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
    
    
    
      const learningLocations = [
        { 
          city: "Kuala Lumpur", 
          highlights: ["Universities", "Hospitals", "Technology parks", "Corporate towers"] 
        },
        { 
          city: "Penang", 
          highlights: ["Medical tourism hubs", "Culinary schools", "Heritage sites", "Industrial visits"] 
        },
        { 
          city: "Langkawi", 
          highlights: ["Hospitality studies", "Eco-tourism", "Geopark", "Sustainability projects"] 
        },
        { 
          city: "Johor Bahru", 
          highlights: ["Manufacturing zones", "Industrial site visits", "EduCity", "Cross-border learning"] 
        },
        { 
          city: "Malacca", 
          highlights: ["Cultural heritage", "Historical exploration", "UNESCO sites", "Multicultural studies"] 
        },
        { 
          city: "Kota Kinabalu", 
          highlights: ["Marine biology", "Ecology programs", "Biodiversity studies", "Nature conservation"] 
        }
      ];
    
      const supportedGroups = [
        { 
          type: "High Schools", 
          icon: "🏫", 
          description: "Secondary education tours with curriculum-aligned experiences" 
        },
        { 
          type: "Universities", 
          icon: "🎓", 
          description: "Technical and professional learning tours for higher education" 
        },
        { 
          type: "Medical Groups", 
          icon: "🧑‍⚕️", 
          description: "Specialized healthcare training and hospital exposure" 
        },
        { 
          type: "Engineering Groups", 
          icon: "👷", 
          description: "Industrial visits and technology center tours" 
        },
        { 
          type: "Hospitality Students", 
          icon: "🧑‍🍳", 
          description: "Culinary and hotel management practical learning" 
        },
        { 
          type: "Special Interest", 
          icon: "🌟", 
          description: "Custom programs for unique academic requirements" 
        }
      ];
    
   

  return (
    
    <>
   <section className="py-16 bg-white">
        <div className="mx-auto lg:mx-[6vw]  px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Key Learning Locations</h2>
              <p className="text-gray-600">Malaysia&apos;s vibrant educational destinations</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningLocations.map((location, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`h-3 ${index % 3 === 0 ? 'bg-gradient-to-r from-[#EB7C19] to-[#FF9E4F]' : 
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
                        {index % 3 === 0 ? '🏙️' : index % 3 === 1 ? '🌉' : '🏝️'}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{location.city}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {location.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            index % 3 === 0 ? 'bg-[#EB7C19]' : 
                            index % 3 === 1 ? 'bg-[#EB7C19]' : 
                            'bg-[#EB7C19]'
                          }`}></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supported Groups */}
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
              Who We Support
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportedGroups.map((group, index) => (
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
    
    </>
   
         
   
  );
};

export default EducationalTours3;