import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title:{
    default:"Comfort Vacanze - Affordable International Tour Packages from Pune",
    template:"%s - Comfort Vacanze"
  },
  description: "Book customized & budget international tour packages from Pune. Affordable foreign holidays under ₹50,000 with Comfort Vacanze - Trusted travel agency in India.",
  keywords:["International tour packages from Pune",
    "Affordable foreign tour packages",
    "Customized foreign holiday packages",
    "Budget international holidays from India",
    "Affordable tours and travels Pune",
    "Customized family holiday packages",
    "Travel company in Pune",
    "Travel agency in India",
    "Tours and travels company in Pune",
    "Budget tour packages under 50000"],
    authors: [ {name: "Comfort Vacanze", 
      url: "https://www.comfortvacanze.com"}],
      creator: "Comfort Vacanze",
      publisher: "Comfort Vacanze",
      openGraph: {
        title: "Comfort Vacanze",
        description: "Customized family holiday packages",
        url: "https://comfortvacanze.com",
        siteName: "Comfort Vacanze",
        images: [
          {
            url: "/images/Home/hero2.jpg", // Place this image in your `public/` folder
            width: 1200,
            height: 630,
            alt: "Comfort Vacanze Banner",
          },
        ],
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: "Comfort Vacanze",
        description: "Premium holiday experiences tailored just for you.",
        images: ["/images/Home/hero2.jpg"],
      },
      metadataBase: new URL("https://comfortvacanze.com"),


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}`}
      >
          <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
