import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const offices = [
  {
    id: 1,
    name: 'India',
    address: 'Rucha Building, Office number 1 and 2, Aundh - Ravet BRTS Rd, Punawale, Pune, Maharashtra – 411033, India',
  },
  {
    id: 2,
    name: 'Malaysia',
    address: 'No. 10-2, Jalan PJS 8/12A, Dataran Mentari 46150 Petaling Jaya, Selangor Darul Ehsan',
  },
  {
    id: 3,
    name: 'Singapore',
    address: '502 Serangoon North Ave 4, Singapore 550502',
  },
  {
    id: 4,
    name: 'Bali',
    address: 'JI. Pudak No.3A Batubulan, Kec Sukawati, Kabupaten Gainyar, Bali 80582',
  },
  {
    id: 5,
    name: 'Vietnam/Cambodia',
    address: '91 Calmette Str. Nguyen Thai Bình Ward, Dist, I, Ho Chi Minh City, Vietnam',
  },
  {
    id: 6,
    name: 'Thailand',
    address: '199 Column Tower, 24th Floor, Room 2401, Ratchadaphisek Road, Klongtoey, Bangkok 10110 Thailand',
  },
  {
    id: 7,
    name: 'Sri Lanka',
    address: 'No 31A Anderson Road, Kohuwala, Sri Lanka',
  },
];

const OfficeLocations = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="mx-auto lg:mx-[6vw] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#EB7C19]">Offices</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our locations or reach out through our contact form
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div 
              key={office.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.name}</h3>
                
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