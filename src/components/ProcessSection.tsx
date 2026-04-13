import { MessageSquare, Search, Code2, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "DISCOVERY",
    desc: "We start with a deep dive into your business, goals, and target audience. Understanding the 'why' before the 'how' ensures we build the right thing.",
  },
  {
    num: "02",
    icon: Search,
    title: "PLANNING & DESIGN",
    desc: "Wireframes, prototypes, and architecture decisions. We map out every screen, user flow, and API endpoint before writing a single line of code.",
  },
  {
    num: "03",
    icon: Code2,
    title: "DEVELOPMENT",
    desc: "Agile sprints with weekly demos. You see progress in real-time and can provide feedback at every stage. Clean, tested, documented code.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "LAUNCH",
    desc: "Thorough QA testing, performance optimization, and a smooth deployment. We handle DNS, SSL, CDN setup, and ensure everything runs perfectly.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "SUPPORT & GROWTH",
    desc: "Post-launch monitoring, analytics review, and iterative improvements. We stay with you to optimize performance and add new features as you grow.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          OUR PROCESS
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          A proven 5-step workflow that turns your idea into a polished, production-ready product — on time and on budget.
        </p>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className="pixel-card p-6 flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 border-4 border-black flex items-center justify-center font-pixel text-sm"
                style={{ background: i % 2 === 0 ? '#70ff00' : '#f500ff', color: i % 2 === 0 ? '#000' : '#fff', boxShadow: '3px 3px 0px #000' }}>
                {step.num}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <step.icon size={16} style={{ color: '#f500ff' }} />
                  <h3 className="font-pixel text-[10px] text-foreground">{step.title}</h3>
                </div>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
