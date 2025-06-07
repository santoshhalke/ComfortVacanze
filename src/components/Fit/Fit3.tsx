"use client";
import { motion } from "framer-motion";

const Fit = () => {
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

    return(
      <section className="py-16 bg-gradient-to-r from-[#EB7C19] to-[#EB7C19] text-white">
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
              🌍 Where Can You Travel?
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Anywhere you dream of. From bustling Bangkok to serene Halong Bay, or Bali to Budapest, we craft experiences that match your mood and budget.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="mt-8 italic text-blue-200"
            >
              🚀 Ready to travel on your terms? Let ComfortVacanze be your behind-the-scenes planner, so you can
enjoy the journey, not the logistics.
            </motion.p>

            <motion.button
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white text-[#EB7C19] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Get a custom quote or speak with our travel experts today.
            </motion.button>
          </motion.div>
        </div>
      </section>
      );
}

export default Fit; 