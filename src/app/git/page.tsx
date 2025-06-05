import Git1 from "@/components/Git/Git1";
import Git2 from "@/components/Git/Git2";
import Git3 from "@/components/Git/Git3";
import Git4 from "@/components/Git/Git4";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Group Inclusive Tours (GIT) | All-Inclusive Travel Packages | Comfort Vacanze",
  description: "Stress-free group travel with our all-inclusive GIT packages. Enjoy curated itineraries, accommodations, meals & activities for seamless group experiences across Asia.",
  keywords: [
    "Group Inclusive Tours",
    "all-inclusive group travel",
    "GIT packages India",
    "curated group tours",
    "stress-free group vacations",
    "Asia group travel packages",
    "inclusive holiday tours",
    "group tour operators",
    "luxury group travel",
    "corporate group tours"
  ],
  alternates: {
    canonical: "/git"
  },
  openGraph: {
    title: "Premium Group Inclusive Tours | Comfort Vacanze",
    description: "All-inclusive group travel solutions with seamless itineraries and premium amenities",
    url: "https://www.comfortvacanze.com/git",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Happy group traveling with Comfort Vacanze",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-Inclusive Group Tours | Comfort Vacanze",
    description: "Premium GIT packages with everything included for worry-free group travel",
    images: ["/images/logo.webp"],
  }
};
const GITPage = () => {

  return (
    <div>
<Git1/>
<Git2/>
<Git3/>
<Git4/>
    </div>
  );
};

export default GITPage;