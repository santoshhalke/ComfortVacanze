import { Metadata } from "next";

import Mice1 from "@/components/Mice/Mice1";
import Mice2 from "@/components/Mice/Mice2";
import Mice3 from "@/components/Mice/Mice3";
import Mice4 from "@/components/Mice/Mice4";

export const metadata: Metadata = {
  title: "MICE Travel Solutions | Premium Corporate Events Management | Comfort Vacanze",
  description: "End-to-end MICE travel management for global conferences, corporate retreats & incentive tours. Custom event solutions from India's leading luxury travel specialists.",
  keywords: [
    "MICE travel management",
    "corporate events planning",
    "incentive travel India",
    "luxury business retreats",
    "exhibition travel services",
    "Pune MICE specialists",
    "global meeting planners",
    "corporate group travel",
    "award travel management"
  ],
  alternates: {
    canonical: "/mice"
  },
  openGraph: {
    title: "Premium MICE Travel Solutions | Comfort Vacanze",
    description: "Global corporate event management and luxury incentive travel services from India's trusted MICE specialists",
    url: "https://www.comfortvacanze.com/mice",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Comfort Vacanze MICE Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Travel Experts | Comfort Vacanze",
    description: "Comprehensive corporate event solutions and luxury incentive travel management",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};


const MICEpage = () => {
  return (
    <div>
      <Mice1 />
      <Mice2 />
      <Mice3 />
      <Mice4 />
    </div>
  );
};

export default MICEpage;
