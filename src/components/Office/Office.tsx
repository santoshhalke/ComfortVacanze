'use client'
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const offices = [
  {
    id: 1,
    name: 'India',
    address: 'Rucha Building, Office number 1 and 2, Aundh - Ravet BRTS Rd, Punawale, Pune, Maharashtra – 411033, India',
    image: '/images/services/india.png',
  },
  {
    id: 2,
    name: 'Malaysia',
    address: 'No. 10-2, Jalan PJS 8/12A, Dataran Mentari 46150 Petaling Jaya, Selangor Darul Ehsan',
    image: '/images/services/malaysia/malaysia2.jpg',
  },
  {
    id: 3,
    name: 'Singapore',
    address: '502 Serangoon North Ave 4, Singapore 550502',
    image: '/images/services/singapore/singapore-banner-1.png',
  },
  {
    id: 4,
    name: 'Bali',
    address: 'JI. Pudak No.3A Batubulan, Kec Sukawati, Kabupaten Gainyar, Bali 80582',
    image: '/images/services/bali/bali4.webp',
  },
  {
    id: 5,
    name: 'Vietnam',
    address: '91 Calmette Str. Nguyen Thai Bình Ward, Dist, I, Ho Chi Minh City, Vietnam',
    image: '/images/services/vietnam/vietnam-banner-1.png',
  },
  {
    id: 6,
    name: 'Thailand',
    address: '199 Column Tower, 24th Floor, Room 2401, Ratchadaphisek Road, Klongtoey, Bangkok 10110 Thailand',
    image: '/images/services/thiland/thiland1.jpg',
  },
  {
    id: 7,
    name: 'Sri Lanka',
    address: 'No 31A Anderson Road, Kohuwala, Sri Lanka',
    image: '/images/services/srilanka/srilanka-banner-4.png',
  },
];

const OfficeLocations = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-14 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#EB7C19]">Offices</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our locations or reach out through our contact form
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div 
              key={office.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-3xl bg-black/60 rounded-full sm:text font-bold px-3 py-1">
                    {office.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex">
                    <div className="h-6 flex items-center">
                      <MapPinIcon className="w-6 text-[#067BC8] flex-shrink-0" />
                    </div>
                    <p className="text-gray-700 ml-3">
                      {office.address}
                    </p>
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
