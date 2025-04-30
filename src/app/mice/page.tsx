"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const MICEpage = () => {
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
              Why Choose Comfort Vacanze
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Global Expertise, Local Insight",
                "Custom-Tailored Solutions",
                "Seamless Event Execution",
                "Creative, Impactful Experiences",
                "Trusted Across Industries",
                "ROI-Driven Results"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-start"
                >
                  <span className="text-[#EB7C19] text-2xl mr-3">✨</span>
                  <h3 className="text-xl font-semibold">{item}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-[#EB7C19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Leaders Trust Us
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Unmatched Global Delivery</h3>
                <p>Our network across 50+ countries ensures flawless execution wherever your event takes place.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Bespoke Solutions</h3>
                <p>No template events — every program is custom-designed for your objectives and brand identity.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">24/7 Onsite Support</h3>
                <p>Our dedicated teams provide round the clock support throughout your event.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">ROI Driven Experiences</h3>
                <p>We design events that deliver measurable business impact and lasting memories.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="text-[#EB7C19]/60 text-sm font-medium">
                  {destination.countries.length}+ locations
                </span>
              </div>
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

      {/* Industries */}
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
              Industries We Serve
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Healthcare", icon: "🏥" },
                { name: "Technology", icon: "💻" },
                { name: "Finance", icon: "💰" },
                { name: "Manufacturing", icon: "🏭" },
                { name: "Hospitality", icon: "🏨" },
                { name: "Education", icon: "🎓" },
                { name: "Retail", icon: "🛍️" },
                { name: "Energy", icon: "⚡" }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#EB7C19] to-[#d96e15] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Elevate Your Next Corporate Event
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              From intimate executive meetings to global conferences, we deliver world-class MICE experiences that drive business success.
            </motion.p>
            
          
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 italic text-white/80"
            >
              Your vision. Our expertise. Global impact.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MICEpage;