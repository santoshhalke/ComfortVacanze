'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Travel Expert',
      bio: 'With 10+ years in the industry, Sarah knows all the hidden gems across Southeast Asia.',
      image: '/team/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Adventure Specialist',
      bio: 'Michael has led expeditions to over 30 countries and specializes in adventure travel.',
      image: '/team/michael.jpg'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Cultural Guide',
      bio: 'Priya connects travelers with authentic cultural experiences and local communities.',
      image: '/team/priya.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Travel adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center px-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
               <span className="text-orange-500">Comfort Vacanze</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
            >
              A Journey Beyond Borders. A Brand Built on Trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={containerVariants}
  >
    {/* Animated Heading with Decorative Elements */}
    <div className="relative text-center mb-16">
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative"
      >
        Our Journey
        <motion.span
          className="absolute left-0 -bottom-2 w-full h-1 bg-orange-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-orange-400 text-4xl"
      >
        ✈️
      </motion.div>
    </div>

    {/* Timeline-style Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
  {/* Text Content with Animated Timeline Dots */}
  <motion.div 
    variants={itemVariants}
    className="lg:col-span-3 relative"
  >
    <div className="relative pl-10 border-l-2 border-orange-100 space-y-12">
      {/* Timeline Item 1 - Founding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">2018 - The Comfort Vacanze Journey Begins</h3>
        <p className="text-gray-600 text-justify">
          Founded as Comfort Vacanze Tours, we started with premium vehicle services built on reliability and comfort Vacanze, 
          growing to become one of India's most trusted names in luxury transport across PAN India.
        </p>
      </motion.div>

      {/* Timeline Item 2 - Expansion */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-400 border-4 border-white shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">2025 - Birth of Comfort Vacanze</h3>
        <p className="text-gray-600 text-justify">
          Headquartered in Pune, India, we evolved into Comfort Vacanze - the parent company of Comfort Tours PTE. LTD. 
          With global partnerships and a refined vision, we began crafting extraordinary journeys blending seamless service 
          with soulful travel experiences.
        </p>
      </motion.div>

      {/* Timeline Item 3 - Partnership */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orange-300 border-4 border-white shadow-md flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Today - Global Excellence</h3>
        <p className="text-gray-600 text-justify">
          Through our strategic collaboration with SS World Holidays, we now transcend borders to deliver curated 
          travel masterpieces. Every journey reflects our passion for excellence - where luxury begins, comfort leads, 
          and the world opens with grace.
        </p>
      </motion.div>
    </div>
  </motion.div>

  {/* Image Gallery with Interactive Effect */}
  <motion.div
    variants={fadeInVariants}
    className="lg:col-span-2 relative h-80 md:h-[500px]"
  >
    {/* Main Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 rounded-xl overflow-hidden shadow-xl z-10 border-4 border-white"
    >
      <Image
        src="/about-office.jpg"
        alt="Comfort Vacanze headquarters"
        fill
        className="object-cover"
      />
    </motion.div>

    {/* Decorative Floating Images */}
    {/* <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute -left-8 -top-8 w-32 h-32 rounded-lg overflow-hidden shadow-md border-2 border-white z-20"
    >
     
    </motion.div> */}

    {/* <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute -right-8 -bottom-8 w-40 h-40 rounded-lg overflow-hidden shadow-md border-2 border-white z-20"
    >
      <Image
        src="/global-partnership.jpg"
        alt="Global partnership meeting"
        fill
        className="object-cover"
      />
    </motion.div> */}
  </motion.div>
</div>

    {/* Floating decorative elements */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="absolute left-20 top-1/4 text-6xl text-orange-100 -z-10"
    >
      🌴
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className="absolute right-32 bottom-1/4 text-5xl text-orange-100 -z-10"
    >
      ✨
    </motion.div>
  </motion.div>
</section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        variants={fadeInVariants}
        className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl order-last lg:order-first"
      >
        <Image
          src="/founder.jpg"
          alt="Founder Raj Kolpe"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Founder
        </h2>
        <h3 className="text-2xl text-orange-500 font-semibold">Raj Kolpe</h3>
        <p className="text-gray-600 text-justify">
          Raj Kolpe is the visionary behind Comfort Vecanze — a journey that began in 2018 with a mission to redefine luxury travel through trust.
        </p>
        <p className="text-gray-600 text-justify">
          From founding Comfort Tours to establishing Comfort Vecanze as a global travel brand, Raj has been dedicated to crafting elegant and soulful journeys. With key partnerships like SS World Holidays, his vision now reaches far beyond borders.
        </p>
        <p className="text-gray-600 text-justify">
          “Comfort Vecanze is more than travel. It's about grace, detail, and an unwavering commitment to hospitality.”
        </p>

      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Team Section */}
      

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Our Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "We seek out genuine experiences that connect you with local cultures in meaningful ways.",
                  icon: "🌍"
                },
                {
                  title: "Sustainability",
                  description: "We're committed to responsible travel that benefits both travelers and host communities.",
                  icon: "♻️"
                },
                {
                  title: "Expertise",
                  description: "Our team's firsthand knowledge ensures you get the best possible travel experience.",
                  icon: "✨"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  custom={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;