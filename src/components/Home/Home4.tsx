
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Venue Selection and Setup",
    description:
      "Elite conference centers, tropical retreats, historical landmarks — tailored to the event's purpose and tone.",
    image: "/images/Home/travelplan.jpg",
    icon: "🏨",
    color: "bg-[#DAB1DA]",
  },
  {
    title: "Logistics and Transportation",
    description:
      "Complete travel arrangements, visa facilitation, VIP handling, airport transfers, and local ground transport",
    image: "/images/Home/flightbook.jpg",
    icon: "🗺️",
    color: "bg-[#90D5FF]",
  },
  {
    title: "Cultural & Experiential Events",
    description:
      "Themed gala dinners, vineyard retreats, Arabian nights, cultural deep dives — crafted with local authenticity.",
    image: "/images/Home/culturalevent.jpg",
    icon: "👨‍✈️",
    color: "bg-amber-100",
  },
  {
    title: "Team-Building Activities",
    description:
      "Engage teams through yacht races, desert safaris, mountain treks, culinary battles, and more — all designed to foster leadership and collaboration.",
    image: "/images/Home/tourguide.jpg",
    icon: "✈️",
    color: "bg-purple-100",
  },
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden lg:px-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 relative z-10"
        >
          What We Offer
          <motion.span
            className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
            initial={{ width: 0 }}
            whileInView={{ width: "270px", x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="relative m-1"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div
                style={{ backgroundImage: `url(${service.image})` }}
                className={`aspect-square bg-cover bg-center flex flex-col items-center justify-center p-6 text-white font-semibold transition-all duration-300 ${
                  hoveredService === index
                    ? "scale-105 z-20 shadow-xl"
                    : "scale-100"
                }`}
              >
                <div className=" bg-opacity-10 px-1 py-1 ">
                  <h3 className="text-xl font-semibold text-white text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Description Panel */}
        <AnimatePresence>
          {hoveredService !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 max-w-4xl mx-auto relative z-10"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={services[hoveredService].image}
                      alt={services[hoveredService].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {services[hoveredService].title}
                    </h3>
                    <p className="text-gray-600">
                      {services[hoveredService].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -left-20 -top-20 text-[200px] text-gray-200 -z-0"
        >
          ✈️
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -right-20 bottom-0 text-[200px] text-gray-200 -z-0"
        >
          🌍
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
