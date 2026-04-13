import { useState, useEffect, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import PixelNavbar from "@/components/PixelNavbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PixelFooter from "@/components/PixelFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  // Interpolate from #70ff00 → #eeffdd based on scroll
  const r = Math.round(112 + (238 - 112) * scrollProgress);
  const g = Math.round(255 + (255 - 255) * scrollProgress);
  const b = Math.round(0 + (221 - 0) * scrollProgress);
  const bgColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="min-h-screen relative scanlines" style={{ background: bgColor, transition: 'background 0.3s ease' }}>
      <PixelNavbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <PixelFooter />
    </div>
  );
};

export default Index;
