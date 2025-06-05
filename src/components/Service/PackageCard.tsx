'use client';
import { motion } from 'framer-motion';

interface DayPackage {
  day: string;
  name: string;
  price: string;
  highlights?: string[];
  image: string;
}

interface PackageCardProps {
  pkg: DayPackage;
}

export const PackageCard = ({ pkg }: PackageCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-[70vw] md:w-[40vw] lg:w-[24vw] md:mx-3 mt-5"
    >
      {/* Image at the top using <img> with lazy loading */}
      <div className="h-66 md:h-48 bg-gray-200 relative overflow-hidden">
        {pkg.image ? (
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            className="object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
            <span className="text-white text-xl font-bold">{pkg.name}</span>
          </div>
        )}
      </div>

      {/* Package details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
            <span className="text-sm text-gray-500">{pkg.day} Package</span>
          </div>
        </div>

       
      </div>
    </motion.div>
  );
};
