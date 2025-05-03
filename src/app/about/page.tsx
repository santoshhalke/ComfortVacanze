import About1 from "@/components/About/About1";
import About2 from "@/components/About/About2";
import About3 from "@/components/About/About3";
import About4 from "@/components/About/About4";
import { Metadata } from "next";

export const metadata: Metadata={
  title:"About"
}
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
