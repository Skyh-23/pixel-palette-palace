import { Star } from "lucide-react";

const testimonials = [
  {
    name: "SARAH CHEN",
    company: "TechStart Inc.",
    role: "CEO",
    text: "Liethueis Foundation transformed our idea into a fully functional platform in record time. The attention to detail was incredible — every feature worked exactly as we envisioned.",
    project: "E-Commerce Platform",
  },
  {
    name: "JAMES MILLER",
    company: "GreenLeaf Health",
    role: "CTO",
    text: "Professional, responsive, and technically brilliant. Our app has been running flawlessly since launch. They handled HIPAA compliance with expertise we couldn't find elsewhere.",
    project: "Health Tech App",
  },
  {
    name: "PRIYA PATEL",
    company: "FinFlow Solutions",
    role: "Product Manager",
    text: "The dashboard they built has become the backbone of our operations. Our team went from spending hours on reports to getting instant insights. Absolute game-changer.",
    project: "Analytics Dashboard",
  },
  {
    name: "DAVID OKONKWO",
    company: "SwiftLogistics",
    role: "Operations Director",
    text: "From day one, the communication was outstanding. They understood our complex requirements and delivered a tracking system that our drivers and customers actually love using.",
    project: "Logistics Tracker",
  },
  {
    name: "ELENA RODRIGUEZ",
    company: "CreativeFlow Agency",
    role: "Founder",
    text: "We've worked with many dev teams, but Liethueis is on another level. They don't just build what you ask — they suggest improvements you hadn't even considered.",
    project: "Agency Website",
  },
  {
    name: "MARK THOMPSON",
    company: "EduNext Platform",
    role: "Co-Founder",
    text: "Our EdTech platform needed to handle thousands of concurrent video streams. They architected a solution that scaled beautifully from day one. Couldn't be happier.",
    project: "Learning Platform",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          TESTIMONIALS
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          Don't take our word for it — hear from the businesses we've helped grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="pixel-card p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f500ff" color="#000" strokeWidth={2} />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic flex-grow">
                "{t.text}"
              </p>
              <div className="border-t-2 border-black/20 pt-4">
                <p className="font-pixel text-[9px] text-foreground">{t.name}</p>
                <p className="font-body text-xs text-foreground/60 mt-1">{t.role} at {t.company}</p>
                <p className="font-pixel text-[7px] mt-2" style={{ color: '#f500ff' }}>PROJECT: {t.project.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
