"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { 
      title: "About Us", 
      href: "#",
      dropdown: [
        { title: "About", href: "/about" },
        { title: "Corporate Tours", href: "/corporate-tours" },
        { title: "GIT", href: "/git" },
        { title: "Educational Tours", href: "/educational-tour" },
        { title: "MICE", href: "/mice" },

      ]
    },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Service", href: "/service" },
    { title: "Gallery", href: "/gallery" },

    
  ];

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 font-poppins font-regular text-gray-800 px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-17 items-center">
          {/* Logo */}
          
<div className="flex-shrink-0 flex items-center">
  <Link href="/" className="flex flex-col">
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        width={128}
        height={64}
        alt="logo"
        className="h-15 w-31"
      />
    </div>
    <span className="absolute bottom-2 lg:bottom-1 left-23 lg:left-51 text-[9px] md:text-[12px] font-semibold text-gray-800 italic">
      Vacanze The Comfi Way
    </span>
    
  </Link>
    
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-10 relative">
            {navLinks.map((link) => (
              <div key={link.title} className="relative">
                {link.dropdown ? (
                  <div className="relative group">
                    <button
                      onClick={toggleAboutDropdown}
                      className="flex items-center text-gray-600 px-3 py-2 text-sm font-medium transition-all hover:border-b-4 hover:border-[#EB7C19]"
                    >
                      {link.title}
                      {isAboutDropdownOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsAboutDropdownOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-600 px-3 py-2 text-sm font-medium transition-all hover:border-b-4 hover:border-[#EB7C19]"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.title}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EB7C19] hover:bg-gray-50"
                  >
                    {link.title}
                    {isAboutDropdownOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EB7C19] hover:bg-gray-50"
                          onClick={() => {
                            setIsAboutDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#EB7C19] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;