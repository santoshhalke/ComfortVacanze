'use client';
import { motion } from 'framer-motion';

export interface DayPackage {
  day: string;
  name: string;
  price: string;
  highlights?: string[];
}

export interface Country {
  id: string;
  name: string;
  packages: DayPackage[];
}

interface CountryTabsProps {
  countries: Country[];
  activeCountry: string;
  onCountryChange: (id: string) => void;
}

export const CountryTabs = ({ countries, activeCountry, onCountryChange }: CountryTabsProps) => {
  return (
    <div className="flex justify-center mb-8 md:mb-12 mt-6 md:mt-10 px-2 sm:px-4">
      <div className="flex flex-wrap justify-center gap-2 md:gap-1 w-full max-w-5xl">
        {countries.map((country) => (
          <motion.button
            key={country.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCountryChange(country.id)}
            className={`px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm font-semibold rounded-md shadow-gray-400 shadow-lg transition-colors ${
              activeCountry === country.id
                ? 'bg-[#EB7C19] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="whitespace-nowrap">
              {country.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};