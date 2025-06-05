import ContactForm from '@/components/ui/ContactForm';
import OfficeLocations from '@/components/ui/OfficeLocations';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Comfort Vacanze - Luxury Travel Specialists | Pune",
  description: "Get in touch with our luxury travel experts for corporate tours, international events, and bespoke holiday packages. Visit our Pune office or contact us today.",
  keywords: [
    "contact Comfort Vacanze",
    "luxury travel contact",
    "Pune travel agency contact",
    "corporate travel inquiries",
    "tour management contact",
    "comfort vacanze address",
    "travel consultation",
    "Comfort Vacanze phone number",
    "Comfort Vacanze email",
    "travel agency near me"
  ],
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Comfort Vacanze - Luxury Travel Experts",
    description: "Reach out to Pune's premier luxury travel company for corporate and leisure travel solutions",
    url: "https://www.comfortvacanze.com/contact",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Contact Comfort Vacanze Travel Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Comfort Vacanze Travel Team",
    description: "Get expert travel advice from our luxury travel specialists",
    images: ["/images/logo.webp"],
  }
};
function page() {
  return (
    <div>
        <ContactForm/>
        <OfficeLocations/>
    </div>
  )
}

export default page