"use client";
import React from "react";
import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About3 from "@/components/About/About3";
import About4 from "@/components/About/About4";
const AboutPage = () => {


  return (
    <div className="bg-white">
      {/* Hero Section */}
     <About1/>

      {/* Company Story */}
     <About2/>
     

      {/* Founder Section */}
     <About3/>

      {/* Values Section */}
      <About4/>
    
    </div>
  );
};

export default AboutPage;
