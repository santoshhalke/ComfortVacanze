import CorporateTours1 from "@/components/CorporateTours/CorporateTours1";
import CorporateTours2 from "@/components/CorporateTours/CorporateTours2";
import CorporateTours3 from "@/components/CorporateTours/CorporateTours3";
import CorporateTours4 from "@/components/CorporateTours/CorporateTours4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Corporate Tours & MICE Travel Solutions | Comfort Vacanze",
  description: "Expertly crafted corporate tours, incentive travel, across world. Customized group travel experiences for businesses from Pune's leading travel specialists.",
  keywords: [
    "corporate tours India",
    "MICE travel solutions",
    "business group travel",
    "incentive travel packages",
    "corporate retreats Asia",
    "luxury business travel",
    "team building tours",
    "conference travel services",
    "Pune corporate travel agency",
    "international business tours"
  ],
  alternates: {
    canonical: "/corporate-tours"
  },
  openGraph: {
    title: "Corporate Travel Solutions | Comfort Vacanze",
    description: "Premium MICE and corporate tour packages for businesses seeking exceptional group travel experiences",
    url: "https://www.comfortvacanze.com/corporate-tours",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Comfort Vacanze Corporate Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Travel Experts | Comfort Vacanze",
    description: "Tailored MICE solutions and business group tours from Pune's premier travel company",
    images: ["/images/logo.png"],
  }
};
const CorporateTours = () => {


  return (
    <>

<CorporateTours1/>
<CorporateTours2/>
<CorporateTours3/>
<CorporateTours4/>

 
    </>
  );
};

export default CorporateTours;