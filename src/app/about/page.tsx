import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About4 from "@/components/About/About4";
import { Metadata } from "next";

// about/page.tsx
export const metadata: Metadata = {
  title: "About-Our Story | Comfort Vacanze - Luxury Travel Pioneers Since 2018",
  description: "Discover Comfort Vacanze's journey from Pune startup to international luxury travel leader. Learn about our values, milestones, and commitment to excellence.",
  keywords: [
    "Comfort Vacanze history",
    "luxury travel company story",
    "Pune travel agency",
    "corporate travel specialists",
    "travel company milestones",
    "SS World Holidays partnership",
    "award-winning travel agency"
  ],
  alternates: {
    canonical: "/about"
  }
};
const AboutPage = () => {


  return (
    <div className="bg-white">
      {/* Hero Section */}
     <About1/>

      {/* Company Story */}
     <About2/>
     

      {/* Founder Section */}
 

      {/* Values Section */}
      <About4/>
    
    </div>
  );
};

export default AboutPage;
