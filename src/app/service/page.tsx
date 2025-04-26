

'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountryTabs } from '@/components/Service/CountryTabs';
import { PackageCard } from '@/components/Service/PackageCard';
import { ExploreMoreButton } from '@/components/Service/ExploreMoreButton';



 export interface DayPackage {
  day: string;
  name: string;
  price: string;
  includes: string[];
  excludes: string[];
  highlights?: string[];
  image:string;
}
export interface Country {
  id: string;
  name: string;

  packages: DayPackage[];
}

const ServicesPage = () => {
    const countries: Country[] = [
    {
      id: 'th',
      name: 'Bali',
      packages: [
        {
          image:'images/home/hero1.jpg',
          day: '4 Days 3 Nights',
          name: '1st Package',
          price: '$89',
          includes: [
            'Airport transfers',
            'Grand Palace tour',
            'Wat Pho visit',
            'Local lunch'
          ],
          excludes: [
            'Hotel accommodation',
            'Evening activities'
          ],
          highlights: ['Kintamani Volcano', 'Tanah Lot Sunset']

          
        },
        {
          image:'images/home/hero1.jpg',
          day: '3 Days 2 Nights',
          name: '2nd Package',
          price: '$249',
          includes: [
            '2 nights hotel (3-star)',
            'All transfers',
            'Chiang Rai temples',
            'Golden Triangle tour',
            'Meals as per itinerary'
          ],
          excludes: [
            'International flights',
            'Personal expenses'
          ],
          highlights: ['Ubud Swing Tour ']
        },
        {
          image:'images/home/hero1.jpg',
          day: '6 Days 5 Nights',
          name: '3rd Package',
          price: '$599',
          includes: [
            '6 nights accommodation',
            'Phuket & Krabi tours',
            'Phi Phi Islands cruise',
            'All domestic transfers',
            'Daily breakfast'
          ],
          excludes: [
            'International flights',
            'Scuba diving fees'
          ],
          highlights: ['Tegenungan Waterfall']
        }
      ]
    },
    {
      id: 'jp',
      name: 'Vietnam',
      packages: [
        {
          image:'images/home/hero1.jpg',
          day: '4 Days 3 Nights',
          name: '1st Package',
          price: '$129',
          includes: [
            'Shibuya Crossing tour',
            'Meiji Shrine visit',
            'Harajuku experience',
            'Local guide'
          ],
          excludes: [
            'Hotel accommodation',
            'Evening activities'
          ],
        },
        {
          image:'images/home/hero1.jpg',
          day: '5 Days 4 Nights',
          name: '2nd Package',
          price: '$799',
          includes: [
            '4 nights accommodation',
            'Tokyo & Kyoto tours',
            'Bullet train transfer',
            'Fushimi Inari visit',
            'Daily breakfast'
          ],
          excludes: [
            'International flights',
            'Optional activities'
          ],
          highlights: ['City Tour ']
        }
      ]
    },
    {
      id: 'thi',
      name: 'Thiland',
      packages: [
        {
          image:'images/home/hero1.jpg',
          day: '4 Days 3 Nights',
          name: '1st Package-Krabi Tour',
          price: '$129',
          includes: [
            'Shibuya Crossing tour',
            'Meiji Shrine visit',
            'Harajuku experience',
            'Local guide'
          ],
          excludes: [
            'Hotel accommodation',
            'Evening activities'
          ],
        },
        {
          image:'images/home/hero1.jpg',
          day: '3 Days 2 Nights',
          name: '2nd Package-Phuket Tour',
          price: '$799',
          includes: [
            '4 nights accommodation',
            'Tokyo & Kyoto tours',
            'Bullet train transfer',
            'Fushimi Inari visit',
            'Daily breakfast'
          ],
          excludes: [
            'International flights',
            'Optional activities'
          ],
          highlights: ['Cultural blend', 'Traditional & modern']
        }
      ]
    },
    {
      id: 'sl',
      name: 'Sri Lanka',
      packages: [
        {
          image:'images/home/hero1.jpg',
          day: '3 Nights 4 Days',
          name: '1st Package',
          price: '$129',
          includes: [
            'Shibuya Crossing tour',
            'Meiji Shrine visit',
            'Harajuku experience',
            'Local guide'
          ],
          excludes: [
            'Hotel accommodation',
            'Evening activities'
          ],
          highlights: ['Culture', 'Beach','City']
        },
        {
          image:'images/home/hero1.jpg',
          day: '5 Days 4 nights',
          name: '2nd Package',
          price: '$799',
          includes: [
            '4 nights accommodation',
            'Tokyo & Kyoto tours',
            'Bullet train transfer',
            'Fushimi Inari visit',
            'Daily breakfast'
          ],
          excludes: [
            'International flights',
            'Optional activities'
          ],
          highlights: ['Heritage','Tea Gardens']
        },
        {
          image:'images/home/hero1.jpg',
          day: '6 Days 5 nights',
          name: '3rd Package',
          price: '$799',
          includes: [
            '4 nights accommodation',
            'Tokyo & Kyoto tours',
            'Bullet train transfer',
            'Fushimi Inari visit',
            'Daily breakfast'
          ],
          excludes: [
            'International flights',
            'Optional activities'
          ],
          highlights: ['Glimpse of Sri Lanka']
        }
      ]
    }
    

  ];
  const [activeCountry, setActiveCountry] = useState(countries[0].id);

 
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
      <motion.div className="text-center mb-4">
  <motion.h1 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold text-gray-900 inline-block relative"
  >
    Explore Our Packages
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="absolute left-0 -bottom-2 w-full h-1.5 bg-orange-500 origin-left"
      style={{ transformOrigin: 'left center' }}
    />
  </motion.h1>
</motion.div>

        <CountryTabs 
          countries={countries}
          activeCountry={activeCountry}
          onCountryChange={setActiveCountry}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCountry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {countries.find(c => c.id === activeCountry)?.packages.map((pkg) => (
              <PackageCard
                key={pkg.day}
                pkg={pkg}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        
      </div>
      <ExploreMoreButton />
    </div>
  );
};

export default ServicesPage;