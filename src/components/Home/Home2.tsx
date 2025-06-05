"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Home2 = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto lg:mx-[7vw] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Innovating{" "}
              <span className="text-[#EB7C19]">Travel Experiences</span>{" "}
              Worldwide
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 text-justify"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 1, duration: 1 }}
            >
              Comfort Vacanze, in strategic joint venture with SS World
              Holidays, brings together decades of tourism expertise, strong
              regional presence, and a global network to redefine corporate
              group travel and events. Together, we design journeys that blend
              business objectives with rich cultural, educational, and leisure
              experiences &ndash; creating truly world class corporate events.
            </motion.p>

            <motion.div
              className="pt-4"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 1.4, duration: 1.8 }}
            >
              <Link href="/about" passHref>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#EB7C19] hover:bg-orange-700 transition-colors duration-200"
                >
                  Discover Our Story
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_wGuyuK1HSM?autoplay=1&mute=1&rel=0&si=gGw14WIkkRjUDYkr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;