'use client';
import React from 'react';
import { Linkedin, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-[#EB7C19] mb-4">
              <span className="text-xl font-semibold">Comfort Vacanze</span>
            </div>
            <p className="text-sm mb-4">
              Redefining travel with elegance, ambition, and hospitality since 2018.
            </p>
            <p className="text-xs mb-6">
              © {currentYear} Comfort Vacanze. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/comfort-vacanze/" className="hover:text-[#EB7C19] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://www.instagram.com/comfortvacanze?igsh=dDcweng2eDNzMTNx" className="hover:text-[#EB7C19] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com/@comfortvacanze?si=YgufCnjCPQ2AjtX8" className="hover:text-[#EB7C19] transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-[#EB7C19]" />
                <span>Rucha Building, Office 1 & 2, Aundh-Ravet BRTS Rd, Punawale, Pune, Maharashtra &ndash; 411033, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#EB7C19]" />
                <a href="tel:+919405393360" className="hover:text-[#EB7C19] transition-colors">+91 8177888020</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#EB7C19]" />
                <a href="mailto:support@comfortvacanze.com" className="hover:text-[#EB7C19] transition-colors">enquiry@comfortvacanze.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#EB7C19] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#EB7C19] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#EB7C19] transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#EB7C19] transition-colors">Blog</Link></li>
              <li><Link href="/service" className="hover:text-[#EB7C19] transition-colors">Our Services</Link></li>


            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li><span className="text-[#EB7C19]">Comfort Tours PVT. LTD.</span> - Luxury Transport</li>
              <li><span className="text-[#EB7C19]">SS World Holidays</span> - Malaysia Partnership</li>
              <li><Link href="#" className="hover:text-[#EB7C19] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#EB7C19] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Brand Story */}
     
      </div>
    </footer>
  );
};

export default Footer;