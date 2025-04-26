
import TestimonialCard from "@/components/ui/Testimonials"; 
import Home2 from "@/components/Home/Home2";
import HeroCarousel from "@/components/Home/Home1"
import DestinationsSection from "@/components/Home/Home3"
import ServicesSection from "@/components/Home/Home4";
export default function Home() {
  return (
    <div>
<HeroCarousel/>
<Home2/>
<DestinationsSection/>
<ServicesSection/>
      


      {/*Last Section */}
      <div className="py-12 bg-gray-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Alex Johnson"
            rating={5}
            description="This product has completely transformed our workflow. Highly recommended"
            role="CTO at TechCorp"
          />
          <TestimonialCard
            name="Maria Garcia"
            rating={4}
            description="Excellent service and the product delivers exactly what was promised."
          />
          <TestimonialCard
            name="James Wilson"
            rating={5}
            description="The best solution we've found after trying many alternatives."
            role="Marketing Director"
          />
        
          </div>
          </div>
          </div>

          
    </div>
  );
}
