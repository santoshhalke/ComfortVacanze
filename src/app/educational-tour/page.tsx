import EducationalTours1 from "@/components/EducationalTours/EducationalTours1";
import EducationalTours2 from "@/components/EducationalTours/EducationalTours2";
import EducationalTours3 from "@/components/EducationalTours/EducationalTours3";
import EducationalTours4 from "@/components/EducationalTours/EducationalTours4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Tourism in Malaysia | Student Group Tours & Learning Expeditions",
  description: "Premium educational tours to Malaysia for schools & universities. Culturally immersive learning experiences with academic itineraries, STEM programs & language immersion.",
  keywords: [
    "educational tours Malaysia",
    "student travel Malaysia",
    "school trips to Kuala Lumpur",
    "university study tours",
    "Malaysia learning expeditions",
    "STEM education travel",
    "cultural exchange programs",
    "educational tourism packages",
    "Malaysia field trips",
    "international student travel"
  ],
  alternates: {
    canonical: "/educational-tour"
  },
  openGraph: {
    title: "Educational Tourism in Malaysia | Academic Travel Programs",
    description: "Organized student group tours featuring Malaysia's top educational destinations and cultural experiences",
    url: "https://www.comfortvacanze.com/educational-tour",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Student group exploring Malaysian cultural sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Tours to Malaysia for Students",
    description: "Hands-on learning experiences in Malaysia's top educational and cultural destinations",
    images: ["/images/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
 
};
const EduTourismPage = () => {
 

  return (
    <div>
    <EducationalTours1/>
    <EducationalTours2/>
    <EducationalTours3/>
    <EducationalTours4/>

    </div>
  );
};

export default EduTourismPage;