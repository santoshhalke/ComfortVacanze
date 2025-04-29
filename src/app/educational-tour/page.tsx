"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const EduTourismPage = () => {
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

  const focusAreas = [
    { 
      icon: "🏥", 
      title: "Healthcare & Medical Tours", 
      description: "Visits to leading Malaysian hospitals, nursing schools, and medical research centers." 
    },
    { 
      icon: "⚙", 
      title: "Engineering and Technology", 
      description: "Factory visits, semiconductor labs, smart manufacturing plants, and robotics centers." 
    },
    { 
      icon: "🍴", 
      title: "Hospitality and Culinary", 
      description: "Learning from Malaysia's world-renowned hospitality industry and culinary schools." 
    },
    { 
      icon: "🏛", 
      title: "Cultural Immersion", 
      description: "Explorations of Malaysia's rich multicultural heritage across vibrant cities." 
    },
    { 
      icon: "🌱", 
      title: "Sustainability Programs", 
      description: "Environmental workshops, plantation visits, and eco-initiatives." 
    },
    { 
      icon: "🎓", 
      title: "University Collaborations", 
      description: "Structured academic partnerships with top Malaysian institutions." 
    }
  ];

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
    <div>
      {/* Hero Section (Kept as per request) */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0  z-10"></div>
        <Image 
          src="/images/EducationalTours/educational-tour.jpg" 
          alt="Group traveling together"
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
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Comfort Vacanze
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl mb-8"
            >
              Educational Tourism in Malaysia
            </motion.p>
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-light italic"
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

      {/* Why Choose Us */}
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
              Why Choose Comfort Vacanze for Edu Tourism
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Specialized educational programs aligned with academic objectives",
                "Direct exposure to industry leaders across key sectors",
                "End-to-end tour management (flights, visas, accommodation)",
                "24/7 student support and expert ground teams",
                "Vetted academic venues and industry partners",
                "Blend of academic visits with cultural experiences"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#EB7C19] shadow-sm"
                >
                  <div className="flex items-start">
                    <span className="text-2xl text-[#EB7C19] mr-4">✓</span>
                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Academic Focus Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Customized educational tours across diverse disciplines</p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#EB7C19] mb-3">Key Learning Locations</h2>
              <p className="text-gray-600">Malaysia&apos vibrant educational destinations</p>
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

      {/* Program Highlights */}
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
              Malaysia&apos Gateway to World-Class Educational Experiences
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EduTourismPage;