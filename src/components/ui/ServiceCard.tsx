

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description?: string;
  image: string;
  hoverColor: string;
}

const ServiceCard = ({ title, description, image, hoverColor }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-xl shadow-md overflow-hidden group"
    >
      <div className="relative h-48">
        <Image
          src="/images/image1.jpg"
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${hoverColor}/0 group-hover:${hoverColor}/30 transition-all duration-300`} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
        <button className={`mt-4 px-4 py-2 ${hoverColor} text-white rounded-md hover:${hoverColor}/90 transition-colors`}>
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;