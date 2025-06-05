"use client";
import MissionVisionSection from '@/components/ui/MissionSection';

const About1 = () => {
  return (
    <>
      <section className="relative h-96 md:h-screen overflow-hidden">
        {/* Replaced background div with img tag */}
        <img
          src="/images/About/aboutushero.webp" // Converted to WebP
          alt="Comfort Vacanze about us hero image"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="text-white">Comfort Vacanze</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              A Journey Beyond Borders. A Brand Built on Trust.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <MissionVisionSection/>
      </section>
    </>
  );
};

export default About1;