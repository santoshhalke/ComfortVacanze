"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountryTabs } from "@/components/Service/CountryTabs";
import { PackageCard } from "@/components/Service/PackageCard";
import { ExploreMoreButton } from "@/components/Service/ExploreMoreButton";
import { countriesData} from "@/data/Services/countries";
export interface DayPackage {
  day: string;
  name: string;
  price: string;
  includes: string[];
  excludes: string[];
  highlights?: string[];
  image: string;
}
export interface Country {
  id: string;
  name: string;
  packages: DayPackage[];
}

const ServicesPage = () => {
  const countries: Country[] =countriesData;

  const [activeCountry, setActiveCountry] = useState(countries[0].id);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 relative z-10"
          >
            Explore Our Packages
            <motion.span
              className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
              initial={{ width: 0 }}
              whileInView={{ width: "315px", x: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
       
 
       
        <CountryTabs
          countries={countries}
          activeCountry={activeCountry}
          onCountryChange={setActiveCountry}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCountry}
    
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {countries
              .find((c) => c.id === activeCountry)
              ?.packages.map((pkg) => <PackageCard key={pkg.day} pkg={pkg} />)}
          </motion.div>
        </AnimatePresence>
      </div>
      <ExploreMoreButton />
    </div>
  );
};

export default ServicesPage;
