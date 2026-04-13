const projects = [
  {
    title: "E-COMMERCE PLATFORM",
    problem: "Client needed a scalable online store handling 10k+ daily users.",
    solution: "Built a headless commerce solution with React and Node.js.",
    result: "300% increase in conversion rate within 3 months.",
    color: "#70ff00",
  },
  {
    title: "HEALTH TECH APP",
    problem: "Startup required a HIPAA-compliant patient management system.",
    solution: "Developed a cross-platform mobile app with secure cloud backend.",
    result: "Onboarded 50+ clinics in the first quarter.",
    color: "#f500ff",
  },
  {
    title: "FINTECH DASHBOARD",
    problem: "Financial firm needed real-time analytics and reporting tools.",
    solution: "Created a full-stack dashboard with live data visualization.",
    result: "Reduced reporting time by 80%.",
    color: "#70ff00",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          PORTFOLIO
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className="pixel-card p-6 md:p-8">
              <h3 className="font-pixel text-xs md:text-sm mb-6" style={{ color: project.color }}>
                {`> ${project.title}`}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
