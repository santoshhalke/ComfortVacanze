'use client'

import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' },
    { title: 'Service', href: '/service' },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 font-poppins font-regular text-gray-800 px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src='/images/logo.jpg' alt="logo" className='h-15 w-32'></Image>
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-gray-600 px-3 py-2 text-sm font-medium transition-all  hover:border-b-4 hover:border-[#EC7C18]"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
        

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EC7C18] hover:bg-gray-50"
            >
              {link.title}
            </Link>
          ))}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
