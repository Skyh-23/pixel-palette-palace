const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          ABOUT US
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          Meet the team behind Liethueis Foundation and learn what drives us to build exceptional software.
        </p>

        {/* Founder card */}
        <div className="pixel-card p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 border-4 border-black flex-shrink-0 flex items-center justify-center font-pixel text-2xl" style={{ background: '#f500ff', boxShadow: '4px 4px 0px #000', color: '#fff' }}>
              HS
            </div>

            <div>
              <h3 className="font-pixel text-sm mb-2 text-foreground">HIREN SUMRA</h3>
              <p className="font-pixel text-[8px] mb-4" style={{ color: '#f500ff' }}>CEO & CO-FOUNDER</p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                With years of experience in full-stack development, Hiren leads Liethueis Foundation with a vision to deliver exceptional digital solutions. His expertise spans enterprise architecture, cloud infrastructure, and modern frontend frameworks.
              </p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                Before founding Liethueis, Hiren worked with startups and enterprises across fintech, healthtech, and e-commerce — gaining deep insight into what makes software truly impactful for businesses.
              </p>
              <p className="font-body text-sm text-foreground/80 leading-relaxed">
                He believes in transparent communication, pixel-perfect execution, and long-term partnerships. Every project is an opportunity to push boundaries and deliver beyond expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { title: "OUR MISSION", text: "To empower ambitious businesses with technology that drives growth. We don't just write code — we solve problems, create opportunities, and build digital products that make a real difference." },
            { title: "OUR VALUES", text: "Transparency in every interaction. Quality over shortcuts. Client success is our success. We treat every project as if it were our own, because when our clients win, we all win." },
            { title: "OUR APPROACH", text: "Agile by nature, thorough by choice. We combine rapid iteration with rigorous testing to deliver products that are both innovative and reliable. No black boxes — you're involved at every step." },
            { title: "WHY CHOOSE US", text: "We're not a faceless agency. We're a dedicated team that genuinely cares about your product. Direct access to senior developers, no outsourcing, and a track record of delivering on time and on budget." },
          ].map((item) => (
            <div key={item.title} className="pixel-card p-6">
              <h3 className="font-pixel text-[9px] mb-3" style={{ color: '#f500ff' }}>{item.title}</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="pixel-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "50+", label: "PROJECTS DELIVERED" },
              { num: "30+", label: "HAPPY CLIENTS" },
              { num: "99%", label: "SATISFACTION RATE" },
              { num: "5+", label: "YEARS EXPERIENCE" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-pixel text-lg md:text-2xl mb-2" style={{ color: '#f500ff' }}>{stat.num}</p>
                <p className="font-pixel text-[7px] text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
