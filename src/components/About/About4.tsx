"use client";
import { motion } from 'framer-motion';
import { containerVariants,itemVariants } from './AboutAnimation';

const About3 = () => {
    const corevalues=[
      {
        title: "Authenticity",
        description: "We design experiences rooted in local knowledge, guaranteeing a profound cultural exploration.",
        icon: "🌍",
      },
      {
        title: "Passion",
        description: "Our love for travel drives us to meticulously plan journeys that help guests forge enduring memories.",
        icon: "❤️",
      },
      {
        title: "Innovation",
        description: "We leverage technology to enhance efficiency while preserving the personal touch in our customer service.",
        icon: "💡",
      },
      {
        title: "Dynamism",
        description: "We stay attuned to emerging trends to ensure our destinations remain vibrant and captivating.",
        icon: "🌀",
      },
      {
        title: "Guest-Centricity",
        description: "Our mission is straightforward: to deliver unforgettable experiences with a focus on guest satisfaction.",
        icon: "⭐",
      },
      {
        title: "Communication",
        description: "Our multilingual team is at your service 24/7, ensuring clear and timely coordination.",
        icon: "💬",
      },
    ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
          <div className="mx-auto lg:mx-[4vw]">
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
  
              <div className="mx-4 lg:mx-auto flex flex-wrap lg:justify-center gap-8">
                {corevalues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    custom={index}
                    className="bg-white p-8 w-full lg:w-[25vw] rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
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