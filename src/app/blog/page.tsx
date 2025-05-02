import BlogCards from "@/components/ui/BlogCard";
import TravelTipsCards from "@/components/ui/faqCard"
import { Metadata } from "next";

export const metadata: Metadata={
  title:"Blog"
}
function page() {
  return (
    <div>
<BlogCards></BlogCards>
<TravelTipsCards></TravelTipsCards>
    </div>
  )
}

export default page