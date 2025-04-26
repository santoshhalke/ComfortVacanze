'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface DayPackage {
  day: string;
  name: string;
  price: string;
  includes: string[];
  excludes: string[];
  highlights?: string[];
  image?: string; // Add image URL to your package data
}

interface PackageCardProps {
  pkg: DayPackage;
  isExpanded: boolean;
  onToggle: () => void;
}

export const PackageCard = ({ pkg, isExpanded, onToggle }: PackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
    >
      {/* Image at the top */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {pkg.image ? (
          <img 
            src={pkg.image} 
            alt={pkg.name}
            className="w-full h-full object-cover"
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
          <p className="text-xl font-bold text-orange-600">{pkg.price}</p>
        </div>

        {/* Highlights (if any) */}
        {pkg.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {pkg.highlights.map((hl, i) => (
                <span 
                  key={i} 
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Toggle button */}
        {/* <button
          onClick={onToggle}
          className="w-full mt-4 flex items-center justify-between py-2 px-4 text-sm font-medium text-left text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100"
        >
          <span>View details</span>
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </button> */}

        {/* Expandable content */}
        {/* <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <FiCheck className="text-green-500 mr-2" />
                  Includes:
                </h4>
                <ul className="space-y-2 pl-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <FiX className="text-orange-500 mr-2" />
                  Excludes:
                </h4>
                <ul className="space-y-2 pl-6">
                  {pkg.excludes.map((item, i) => (
                    <li key={i} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
};