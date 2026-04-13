import { useEffect, useState } from "react";
import { ArrowDown, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(#000 1px, transparent 1px),
          linear-gradient(90deg, #000 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-700 ${visible ? 'pixel-fade-in' : 'opacity-0'}`}>
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 border-4 border-black bg-black font-pixel text-[8px] tracking-widest" style={{ color: '#70ff00' }}>
          ★ TRUSTED BY 30+ BUSINESSES WORLDWIDE ★
        </div>

        {/* Big company name */}
        <h1 className="font-pixel text-3xl sm:text-5xl md:text-7xl leading-tight mb-4 text-foreground" style={{ textShadow: '4px 4px 0px #000' }}>
          LIETHUEIS
        </h1>
        <h2 className="font-pixel text-lg sm:text-2xl md:text-4xl mb-8" style={{ color: '#f500ff', textShadow: '3px 3px 0px #000' }}>
          FOUNDATION
        </h2>

        {/* Tagline */}
        <p className="font-pixel text-[10px] sm:text-xs md:text-sm leading-relaxed mb-4 text-foreground max-w-2xl mx-auto" style={{ lineHeight: '2' }}>
          WE BUILD HIGH-CONVERTING WEB & MOBILE APPS FOR AMBITIOUS BUSINESSES
        </p>
        <p className="font-body text-sm md:text-base text-foreground/70 mb-6 max-w-xl mx-auto">
          Full-stack development • Scalable solutions • Pixel-perfect execution
        </p>
        <p className="font-body text-xs md:text-sm text-foreground/50 mb-10 max-w-lg mx-auto">
          From startup MVPs to enterprise platforms — we turn your vision into reality with clean code, modern tech, and relentless attention to detail.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href="#contact" className="pixel-btn !text-[10px] !px-8 !py-4">
            START YOUR PROJECT
          </a>
          <a href="#portfolio" className="pixel-btn !text-[10px] !px-8 !py-4" style={{
            background: '#70ff00',
            color: '#000',
            boxShadow: '6px 6px 0px #000, 4px 4px 0px #3d8c00, inset -3px -3px 0px #4da600, inset 3px 3px 0px #a8ff6e',
          }}>
            VIEW OUR WORK
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
          {[
            { icon: Zap, label: "FAST DELIVERY" },
            { icon: Shield, label: "SECURE CODE" },
            { icon: Clock, label: "24/7 SUPPORT" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon size={18} style={{ color: '#f500ff' }} />
              <span className="font-pixel text-[7px] text-foreground/60">{label}</span>
            </div>
          ))}
        </div>

        {/* Decorative pixels */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 border-2 border-black"
              style={{ background: i % 2 === 0 ? '#70ff00' : '#f500ff' }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#services" className="inline-flex flex-col items-center gap-1 text-foreground/40 hover:text-foreground/70 transition-colors">
          <span className="font-pixel text-[7px]">SCROLL DOWN</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
