"use client";
import { motion } from 'framer-motion';
import { containerVariants,itemVariants,fadeInVariants } from './AboutAnimation';

const About3 = () => {
    

  return (
    <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 relative z-10"
              >
                Our Core Values
                <motion.span
                  className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "280px", x: "-50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.h2>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Authenticity",
                    description:
                      "We seek out genuine experiences that connect you with local cultures in meaningful ways.",
                    icon: "🌍",
                  },
                  {
                    title: "Sustainability",
                    description:
                      "We're committed to responsible travel that benefits both travelers and host communities.",
                    icon: "♻️",
                  },
                  {
                    title: "Expertise",
                    description:
                      "Our team's firsthand knowledge ensures you get the best possible travel experience.",
                    icon: "✨",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    custom={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
    
   
  );
};

export default About3;