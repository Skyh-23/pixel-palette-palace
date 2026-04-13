const projects = [
  {
    title: "E-COMMERCE PLATFORM",
    problem: "Client needed a scalable online store handling 10k+ daily users with real-time inventory management.",
    solution: "Built a headless commerce solution with React frontend, Node.js backend, and PostgreSQL. Integrated Stripe payments and automated order fulfillment.",
    result: "300% increase in conversion rate within 3 months. Average page load time reduced to 1.2 seconds.",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    duration: "3 MONTHS",
    color: "#70ff00",
  },
  {
    title: "HEALTH TECH APP",
    problem: "Startup required a HIPAA-compliant patient management system with real-time appointment scheduling and telehealth integration.",
    solution: "Developed a cross-platform mobile app with React Native, secure cloud backend on AWS, and end-to-end encrypted video consultations.",
    result: "Onboarded 50+ clinics in the first quarter. Patient satisfaction scores increased by 45%.",
    techs: ["React Native", "AWS", "WebRTC", "MongoDB"],
    duration: "5 MONTHS",
    color: "#f500ff",
  },
  {
    title: "FINTECH DASHBOARD",
    problem: "Financial firm needed real-time analytics, automated reporting, and regulatory compliance tracking across multiple portfolios.",
    solution: "Created a full-stack dashboard with live data visualization using D3.js, WebSocket connections for real-time updates, and automated PDF report generation.",
    result: "Reduced reporting time by 80%. Compliance audit preparation time cut from 2 weeks to 2 days.",
    techs: ["React", "D3.js", "WebSocket", "Python"],
    duration: "4 MONTHS",
    color: "#70ff00",
  },
  {
    title: "LOGISTICS TRACKER",
    problem: "Shipping company struggled with manual fleet tracking and delayed delivery notifications across 200+ vehicles.",
    solution: "Built a real-time GPS tracking platform with automated route optimization, push notifications, and driver management portal.",
    result: "Fuel costs reduced by 22%. On-time delivery rate improved from 78% to 96%.",
    techs: ["Next.js", "Google Maps API", "Firebase", "Flutter"],
    duration: "6 MONTHS",
    color: "#f500ff",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          PORTFOLIO
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          Real projects, real results. Here's a look at how we've helped businesses grow with technology.
        </p>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="pixel-card p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
                <h3 className="font-pixel text-xs md:text-sm" style={{ color: project.color }}>
                  {`> ${project.title}`}
                </h3>
                <span className="font-pixel text-[8px] px-3 py-1 border-2 border-black bg-black/10">
                  {project.duration}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "PROBLEM", text: project.problem },
                  { label: "SOLUTION", text: project.solution },
                  { label: "RESULT", text: project.result },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-pixel text-[8px] mb-2" style={{ color: '#f500ff' }}>{item.label}</p>
                    <p className="font-body text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-black/20">
                <span className="font-pixel text-[7px] text-foreground/40 mr-2 self-center">TECH:</span>
                {project.techs.map((tech) => (
                  <span key={tech} className="font-pixel text-[7px] px-2 py-1 border-2 border-black bg-neon-green/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
