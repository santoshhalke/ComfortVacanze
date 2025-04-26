"use client";
import React from "react";
import TestimonialCard from "../ui/Testimonials";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      rating: 5,
      description:
        "This product has completely transformed our workflow. Highly recommended",
      role: "CTO at TechCorp",
    },
    {
      name: "Maria Garcia",
      rating: 4,
      description:
        "Excellent service and the product delivers exactly what was promised.",
      // role is optional
    },
    {
      name: "James Wilson",
      rating: 5,
      description:
        "The best solution we've found after trying many alternatives.",
      role: "Marketing Director",
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
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
