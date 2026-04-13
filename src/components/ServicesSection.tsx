import { Globe, Smartphone, Server, Palette, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WEB DEVELOPMENT",
    desc: "Modern, responsive websites and web applications built with cutting-edge technologies. From landing pages to complex SaaS platforms.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind"],
    details: "We craft pixel-perfect, SEO-optimized websites that load fast and convert visitors into customers. Every line of code is written with performance and scalability in mind.",
  },
  {
    icon: Smartphone,
    title: "MOBILE APPS",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
    details: "From concept to App Store — we handle UI/UX design, development, testing, and deployment. Your app will feel native on every device.",
  },
  {
    icon: Server,
    title: "FULL-STACK SOLUTIONS",
    desc: "End-to-end application development with robust backends, scalable databases, and cloud infrastructure.",
    techs: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    details: "We architect systems that handle millions of requests. Microservices, APIs, real-time data — we build the backbone your business needs.",
  },
  {
    icon: Palette,
    title: "UI/UX DESIGN",
    desc: "User-centered design that combines aesthetics with functionality. We create interfaces people love to use.",
    techs: ["Figma", "Prototyping", "User Research", "A/B Testing"],
    details: "Great products start with great design. We research your users, wireframe solutions, and iterate until every interaction feels intuitive.",
  },
  {
    icon: BarChart3,
    title: "ANALYTICS & SEO",
    desc: "Data-driven optimization to maximize your online visibility and understand your users better.",
    techs: ["GA4", "Search Console", "Hotjar", "Schema"],
    details: "We don't just build — we measure. Conversion tracking, heatmaps, and SEO audits ensure your investment keeps paying off.",
  },
  {
    icon: ShieldCheck,
    title: "MAINTENANCE & SUPPORT",
    desc: "Ongoing technical support, security updates, and performance monitoring to keep your application running smoothly.",
    techs: ["CI/CD", "Monitoring", "Security", "Updates"],
    details: "Launch day is just the beginning. We provide 24/7 monitoring, regular updates, and rapid bug fixes so you can focus on your business.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          OUR SERVICES
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          We offer end-to-end digital solutions — from initial concept and design through development, deployment, and ongoing support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="pixel-card p-6 hover:-translate-y-1 transition-transform duration-200 flex flex-col">
              <service.icon size={32} className="mb-4" style={{ color: '#f500ff' }} />
              <h3 className="font-pixel text-[10px] mb-3 text-foreground">{service.title}</h3>
              <p className="font-body text-sm text-foreground/80 mb-3 leading-relaxed">{service.desc}</p>
              <p className="font-body text-xs text-foreground/50 mb-4 leading-relaxed flex-grow">{service.details}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.techs.map((tech) => (
                  <span key={tech} className="font-pixel text-[7px] px-2 py-1 border-2 border-black bg-neon-green/30">
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
