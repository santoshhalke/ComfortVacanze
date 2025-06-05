import BlogCards from "@/components/ui/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Blog & Insights | Comfort Vacanze - Luxury Travel Experts",
  description: "Discover expert travel tips, destination guides, and luxury travel insights from Comfort Vacanze's team of travel specialists. Enhance your next corporate or leisure trip with our professional advice.",
  keywords: [
    "luxury travel blog",
    "corporate travel tips",
    "destination guides",
    "travel industry insights",
    "Pune travel experts blog",
    "international tour advice",
    "MICE travel trends",
    "business travel resources",
    "vacation planning tips",
    "Comfort Vacanze travel articles"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Travel Blog & Expert Insights | Comfort Vacanze",
    description: "Premium travel knowledge from India's luxury travel specialists - Destination guides, corporate travel tips, and industry trends",
    url: "https://www.comfortvacanze.com/blog",
    type: "article",
    images: [
      {
        url: "/images/Home/logo.webp",
        width: 1200,
        height: 630,
        alt: "Comfort Vacanze Travel Blog Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Vacanze Travel Blog",
    description: "Expert travel advice from Pune's premier luxury travel company",
    images: ["/images/Home/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

function BlogPage() {
  return (
   <BlogCards />
  )
}

export default BlogPage;