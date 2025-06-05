"use client";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const OldWebsite = () => {
  return (
    <section className="bg-gradient-to-r from-[#067BC8]/10 to-[#EB7C19]/10 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-white p-1 rounded-full mb-6">
          <FaArrowRight className="w-8 h-8 text-[#EB7C19]" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Looking for our <span className="text-[#067BC8]">previous website</span>?
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We&apos;ve upgraded to a new experience, but you can still access our old website 
          if you need information from our previous version.
        </p>
        
        <Link
          href="https://www.comfort-toursindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#EB7C19] to-[#067BC8] hover:from-[#EB7C19]/90 hover:to-[#067BC8]/90 transition-all"
        >
          Visit Previous Website
          <FaExternalLinkAlt className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default OldWebsite;