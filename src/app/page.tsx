import { FaWhatsapp } from 'react-icons/fa';
import Home2 from "@/components/Home/Home2";
import HeroCarousel from "@/components/Home/Home1"
import DestinationsSection from "@/components/Home/Home3"
import ServicesSection from "@/components/Home/Home4";
import TestimonialsPage from "@/components/Home/Home5";
import Link from 'next/link';
export default function Home() {
  return (
    <div>
<HeroCarousel/>
<Home2/>
<DestinationsSection/>
<ServicesSection/>
<TestimonialsPage/>  
<section className="bg-gradient-to-r from-[#067BC8]/10 to-[#EB7C19]/10 py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <div className="inline-block bg-white p-1 rounded-full mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#EB7C19]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      Looking for our <span className="text-[#067BC8]">previous website</span>?
    </h2>
    
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      We've upgraded to a new experience, but you can still access our old website 
      if you need information from our previous version.
    </p>
    
    <a
      href="https://oldwebsite.comfortvacanze.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#EB7C19] to-[#067BC8] hover:from-[#EB7C19]/90 hover:to-[#067BC8]/90 transition-all"
    >
      Visit Previous Website
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a>
  </div>
</section> 
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
