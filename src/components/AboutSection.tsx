const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          ABOUT US
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>

        <div className="pixel-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Pixel avatar placeholder */}
            <div className="w-24 h-24 border-4 border-black flex-shrink-0 flex items-center justify-center font-pixel text-2xl" style={{ background: '#f500ff', boxShadow: '4px 4px 0px #000' }}>
              HS
            </div>

            <div>
              <h3 className="font-pixel text-sm mb-2 text-foreground">HIREN SUMRA</h3>
              <p className="font-pixel text-[8px] mb-4" style={{ color: '#f500ff' }}>CEO & CO-FOUNDER</p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                With years of experience in full-stack development, Hiren leads Liethueis Foundation with a vision to deliver exceptional digital solutions. Our team combines technical expertise with creative problem-solving to build products that drive real business results.
              </p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed">
                We believe in transparent communication, pixel-perfect execution, and long-term partnerships. Every project we take on is an opportunity to push boundaries and deliver beyond expectations.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t-4 border-black">
            {[
              { num: "50+", label: "PROJECTS" },
              { num: "30+", label: "CLIENTS" },
              { num: "99%", label: "SATISFACTION" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-pixel text-lg md:text-2xl mb-1" style={{ color: '#f500ff' }}>{stat.num}</p>
                <p className="font-pixel text-[8px] text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
