"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TravelTipsAccordion = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const travelTips = [
    {
      id: 1,
      title: 'Pack Like a Pro',
      description: 'Use packing cubes to organize your luggage and roll clothes to save space. Always pack essential medications in your carry-on.',

    },
    {
      id: 2,
      title: 'Money Safety',
      description: 'Carry multiple payment options in separate places. Notify your bank before traveling and know the local currency conversion rates.',

    },
    {
      id: 3,
      title: 'Local Customs',
      description: 'Research basic greetings and gestures. Dress appropriately for religious sites and learn tipping etiquette for your destination.',

    },
    {
      id: 4,
      title: 'Stay Healthy',
      description: 'Stay hydrated, use sunscreen, and pack a basic first aid kit. Research if you need vaccinations before traveling to certain countries.',

    }
  ];

  const toggleTip = (id: number) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <motion.div className="max-w-7xl mx-auto px-4 py-12"
    transition={{ duration: 4 }}>
       <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 relative z-10"
                      >
                Smart Travel Tips
                <motion.span 
                          className="absolute left-1/2 -bottom-2 h-1 bg-[#EB7C19]"
                          initial={{ width: 0 }}
                          whileInView={{ width: '280px', x: '-50%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
        </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {travelTips.map((tip) => (
          <motion.div
            key={tip.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden border ${
              expandedTip === tip.id ? 'border-[#EB7C19]' : 'border-gray-200'
            }`}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            
          >
         
            
            <div className="p-5">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleTip(tip.id)}
              >
                <h3 className="text-xl font-semibold">{tip.title}</h3>
                <motion.span
                  animate={{ rotate: expandedTip === tip.id ? 45 : 0 }}
                  className="text-2xl font-light"
                >
                  +
                </motion.span>
              </div>
              
              <AnimatePresence>
                {expandedTip === tip.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-3"
                  >
                    <p className="text-gray-600 text-justify">{tip.description}</p>
                  
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TravelTipsAccordion;