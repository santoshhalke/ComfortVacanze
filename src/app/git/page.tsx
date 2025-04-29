"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const GITPage = () => {
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
    { icon: "🏨", title: "Hotel Accommodation", description: "Carefully selected group &ndash friendly properties" },
    { icon: "🚍", title: "Ground Transport", description: "Comfortable coaches and transfers" },
    { icon: "🍴", title: "Meal Arrangements", description: "Special dietary options available" },
    { icon: "🏛", title: "Sightseeing", description: "Curated excursion planning" },
    { icon: "🎟", title: "Event Ticketing", description: "Attractions and special access" },
    { icon: "🧑‍🤝‍🧑", title: "Tour Leaders", description: "Professional on &ndash ground support" },
    { icon: "🌐", title: "Multi Country", description: "Seamless cross &ndash border tours" }
  ];

  const destinations = [
    { region: "Southeast Asia", countries: ["Malaysia", "Singapore", "Thailand", "Philippines", "Indonesia"] },
    { region: "East Asia", countries: ["Japan", "South Korea", "China"] },
    { region: "Middle East", countries: ["Dubai", "Qatar", "Saudi Arabia"] },
    { region: "Europe", countries: ["France", "Spain", "Italy", "UK"] },
    { region: "Americas", countries: ["USA", "Canada", "Mexico"] },
    { region: "Oceania", countries: ["Australia", "New Zealand"] }
  ];

  const clientGroups = [
    { type: "Corporate", icon: "🏢", description: "Incentive travel & team building" },
    { type: "Educational", icon: "🧑‍🎓", description: "Student groups & study tours" },
    { type: "Special Interest", icon: "🧑‍🍳", description: "Culinary, adventure, cultural" },
    { type: "Leisure", icon: "🧑‍🤝‍🧑", description: "Family & friend groups" },
    { type: "Religious", icon: "🌍", description: "Pilgrimage & faith-based travel" },
    { type: "Custom", icon: "✨", description: "Tailored to your unique needs" }
  ];

  return (
    <div>
      {/* Hero Section (Kept as per request) */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-10"></div>
        <Image 
          src="/images/Git/git.jpg" 
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
              Group Inclusive Tours (GIT)
            </motion.p>
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-light italic"
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
              At Comfort Vacanze, we believe travel is more than movement . it's about connection, discovery, and unforgettable memories. Our Group Inclusive Tours are designed to deliver smooth, enriching journeys for leisure groups, corporate teams, educational institutions, and special interest travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
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
              Why Choose Our Group Tours
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Expert group handling for 10 &ndash 500+ travelers",
                "End to end logistics coordination",
                "Custom itineraries matching group interests",
                "Global network of trusted partners",
                "24/7 multilingual support",
                "Competitive group pricing"
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

      {/* Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Let us handle the logistics while you focus on creating unforgettable experiences together.
            </motion.p>
            
           
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 text-white/90"
            >
              Groups of 10+ travelers receive special benefits and discounts
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GITPage;