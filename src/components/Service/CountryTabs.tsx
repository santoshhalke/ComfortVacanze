"use client";
import { motion } from "framer-motion";

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

export const CountryTabs = ({
  countries,
  activeCountry,
  onCountryChange,
}: CountryTabsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {countries.map((country) => (
        <motion.button
          key={country.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCountryChange(country.id)}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors text-left ${
            activeCountry === country.id
              ? "bg-[#EB7C19] text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {country.name}
        </motion.button>
      ))}
    </div>
  );
};
