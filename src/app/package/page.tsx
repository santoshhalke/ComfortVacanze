"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CountryTabs } from "@/components/Service/CountryTabs";
import { PackageCard } from "@/components/Service/PackageCard";
import { countriesData } from "@/data/Services/countries";
import { Menu } from "lucide-react";

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
  const countries: Country[] = countriesData;
  const [activeCountry, setActiveCountry] = useState(countries[0].id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCountryChange = (id: string) => {
    setActiveCountry(id);
    setIsDrawerOpen(false); // close drawer on mobile
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto lg:mx-[6vw] mt-20">
        <h2 className="text-3xl font-bold text-center mb-16 relative z-10">
          Comfort Vacanze Packages
          <motion.span
            className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
            initial={{ width: 0 }}
            whileInView={{ width: "315px", x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </h2>

        {/* Mobile Hamburger */}
        <div className="lg:hidden mb-6 flex justify-center">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-2xl bg-white-100 shadow-md"
          >
            <Menu className="w-5 h-5" />
            Countries
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Mobile Drawer Content */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 lg:hidden ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <CountryTabs
            countries={countries}
            activeCountry={activeCountry}
            onCountryChange={handleCountryChange}
          />
        </div>

        {/* Desktop Layout: Sidebar + Content */}
        <div className="hidden lg:flex gap-8">
          {/* Sidebar */}
          <aside className="w-1/4">
            <CountryTabs
              countries={countries}
              activeCountry={activeCountry}
              onCountryChange={handleCountryChange}
            />
          </aside>

          {/* Packages */}
          <main className="w-3/4">
            <div
              key={activeCountry}
              className="flex flex-wrap gap-6 justify-center"
            >
              {countries
                .find((c) => c.id === activeCountry)
                ?.packages.map((pkg) => (
                  <PackageCard key={pkg.day} pkg={pkg} />
                ))}
            </div>
          </main>
        </div>

        {/* Mobile Layout: Only package content (below drawer) */}
        <div className="lg:hidden mt-4">
          <div
            key={activeCountry}
            className="flex flex-wrap gap-6 justify-center"
          >
            {countries
              .find((c) => c.id === activeCountry)
              ?.packages.map((pkg) => (
                <PackageCard key={pkg.day} pkg={pkg} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
