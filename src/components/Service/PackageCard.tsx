'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DayPackage {
  day: string;
  name: string;
  price: string;
  includes: string[];
  excludes: string[];
  highlights?: string[];
  image: string; // Add image URL to your package data
}

interface PackageCardProps {
  pkg: DayPackage;
}

export const PackageCard = ({ pkg }: PackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
    >
      {/* Image at the top */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
  {pkg.image ? (
    <Image
      src={pkg.image}
      alt={pkg.name}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <p className="text-xl font-bold text-[#EB7C19]">{pkg.price}</p>
        </div>

        {/* Highlights (if any) */}
        {pkg.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {pkg.highlights.map((hl, i) => (
                <span 
                  key={i} 
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-orange-100 text-[#EB7C19]"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>
        )}




      </div>
    </motion.div>
  );
};