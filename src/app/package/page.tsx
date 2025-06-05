"use client";
import React, { useState } from "react";
import { motion} from "framer-motion";
import { CountryTabs } from "@/components/Service/CountryTabs";
import { PackageCard } from "@/components/Service/PackageCard";
import { countriesData} from "@/data/Services/countries";


export interface DayPackage {
  day: string;
  name: string;
  price: string;
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
      <div className="mx-auto lg:mx-[6vw]  mt-20">
        
          <h2
           
            className="text-3xl font-bold text-center mb-16 relative z-10"
          >
            Comfort Vacanze Packages
            <motion.span
              className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
              initial={{ width: 0 }}
              whileInView={{ width: "315px", x: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
       
 
       
        <CountryTabs
          countries={countries}
          activeCountry={activeCountry}
          onCountryChange={setActiveCountry}
        />

          <div
            key={activeCountry}
    
            className="flex flex-wrap justify-center"
          >
            {countries
              .find((c) => c.id === activeCountry)
              ?.packages.map((pkg) => <PackageCard key={pkg.day} pkg={pkg} />)}
          </div>
      </div>

    </div>
  );
};

export default ServicesPage;
