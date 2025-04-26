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
      <h2 className="text-3xl font-bold text-center mb-12">Smart Travel Tips</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {travelTips.map((tip) => (
          <motion.div
            key={tip.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden border ${
              expandedTip === tip.id ? 'border-blue-400' : 'border-gray-200'
            }`}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            
          >
         
            
            <div className="p-5">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleTip(tip.id)}
              >
                <h3 className="text-lg font-semibold">{tip.title}</h3>
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
                    <p className="text-gray-600">{tip.description}</p>
                  
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