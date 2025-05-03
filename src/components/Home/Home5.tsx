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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 relative z-10"
        >
          Customer Feedback
          <motion.span
            className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
            initial={{ width: 0 }}
            whileInView={{ width: "290px", x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
