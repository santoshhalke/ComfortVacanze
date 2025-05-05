// components/ui/OfficeLocations.tsx
import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const offices = [
  {
    id: 1,
    name: 'Pune office',
    address: 'Rucha Building, Office number 1 and 2, Aundh - Ravet BRTS Rd, Punawale,',
    phone: '+91 8177888020',
    email: 'enquiry@comfortvacanze.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
  },
  {
    id: 2,
    name: 'European Branch',
    address: '456 Holiday Avenue, Resort Town, RT 67890',
    phone: '+91 8177888020',
    email: 'enquiry@comfortvacanze.com',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  // Add more offices as needed
];

const OfficeLocations = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#EB7C19]">Offices</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our locations or reach out through our contact form
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office) => (
            <div 
              key={office.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-[#067BC8] mt-0.5 mr-3" />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-[#067BC8] mr-3" />
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-[#EB7C19]">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-[#067BC8] mr-3" />
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-[#EB7C19]">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-[#067BC8] mr-3" />
                    <p className="text-gray-700">{office.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;