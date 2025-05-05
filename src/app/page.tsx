import { FaWhatsapp } from 'react-icons/fa';
import Home2 from "@/components/Home/Home2";
import HeroCarousel from "@/components/Home/Home1"
import DestinationsSection from "@/components/Home/Home3"
import ServicesSection from "@/components/Home/Home4";
import TestimonialsPage from "@/components/Home/Home5";
import Link from 'next/link';
import OldWebsite from '@/components/Home/Home6';
export default function Home() {
  return (
    <div>
<HeroCarousel/>
<Home2/>
<DestinationsSection/>
<ServicesSection/>
<TestimonialsPage/>  
<OldWebsite/>
<Link
        href="https://wa.me/7020021251" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out"
      >
        <FaWhatsapp className="w-6 h-6" />
</Link>

      {/*Last Section */}
      

          
    </div>
  );
}
