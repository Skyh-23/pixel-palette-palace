import { Star } from "lucide-react";

const testimonials = [
  {
    name: "SARAH CHEN",
    company: "TechStart Inc.",
    text: "Liethueis Foundation transformed our idea into a fully functional platform in record time. The attention to detail was incredible.",
  },
  {
    name: "JAMES MILLER",
    company: "GreenLeaf Health",
    text: "Professional, responsive, and technically brilliant. Our app has been running flawlessly since launch. Highly recommend!",
  },
  {
    name: "PRIYA PATEL",
    company: "FinFlow Solutions",
    text: "The dashboard they built has become the backbone of our operations. Best investment we've made for our business.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          TESTIMONIALS
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="pixel-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f500ff" color="#000" strokeWidth={2} />
                ))}
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-pixel text-[9px] text-foreground">{t.name}</p>
                <p className="font-pixel text-[7px] mt-1" style={{ color: '#f500ff' }}>{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
