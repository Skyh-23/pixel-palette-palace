import { Globe, Smartphone, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WEB DEV",
    desc: "Modern, responsive websites and web applications built with cutting-edge technologies. From landing pages to complex platforms.",
    techs: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "MOBILE APPS",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    techs: ["React Native", "Flutter", "Swift"],
  },
  {
    icon: Server,
    title: "FULL-STACK",
    desc: "End-to-end application development with robust backends, scalable databases, and cloud infrastructure.",
    techs: ["Node.js", "PostgreSQL", "AWS"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          OUR SERVICES
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="pixel-card p-6 hover:-translate-y-1 transition-transform duration-200">
              <service.icon size={32} className="mb-4" style={{ color: '#f500ff' }} />
              <h3 className="font-pixel text-xs mb-3 text-foreground">{service.title}</h3>
              <p className="font-body text-sm text-foreground/80 mb-4 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.techs.map((tech) => (
                  <span key={tech} className="font-pixel text-[8px] px-2 py-1 border-2 border-black bg-neon-green/30">
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

export default ServicesSection;
