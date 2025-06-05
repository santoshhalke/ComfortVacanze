"use client";
import React from "react";
import TestimonialCard from "../ui/Testimonials";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  const testimonials = [

    {
      name: "Rohit Deshmukh, Mumbai",
      rating: 5,
      description:
        "Comfort Vacanze made our holiday absolutely stress-free! From transport to hotels, everything was perfectly arranged. Highly recommended for a relaxed travel experience.",
  
    },
    {
      name: "Priya Nair, Pune",
      rating: 4,
      description:
        "Best tour company we’ve experienced! Professional team, great service, and amazing memories. Thank you, Comfort Vacanze, for making our trip unforgettable.",
      // role is optional
    },
    {
      name: "Vijay Kulkarni, Nagpur",
      rating: 5,
      description:
        "We loved every moment of our tour with Comfort Vacanze. Very well organized itineraries and friendly support throughout. Definitely booking with them again."
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className=" mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex flex-col items-center mb-16 z-10" // Center content with flex
>
  <h2 className="text-2xl md:text-3xl font-bold text-center">
    Feedback
  </h2>
  <motion.div
    className="h-1 bg-[#EB7C19] mt-2" // No absolute positioning needed
    initial={{ scaleX: 0 }} // Animate scale instead of width
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{ 
      width: "200px", // Fixed width
      originX: 0.5 // Makes the animation grow from center
    }}
  />
</motion.div>
        <div className="flex flex-wrap md:justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              description={testimonial.description}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
