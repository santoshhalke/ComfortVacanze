"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaEye } from "react-icons/fa"; // Using Font Awesome icons

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Our Purpose & Promise
          </motion.h2>
          <motion.div
            className="mx-auto h-1 bg-[#EB7C19] mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#EB7C19] p-3 rounded-full mr-4">
                <FaChartLine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              To create the best travel experience for our customers by offering
              high quality service to exceed our clients expectations and to
              maintain high performing team that constantly displays competence.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#EB7C19] p-3 rounded-full mr-4">
                <FaEye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              To be one of the leading provider of premium travel services in the
              market and to be recognized for our professionalism and client
              satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;