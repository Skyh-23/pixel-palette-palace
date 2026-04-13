const techCategories = [
  {
    category: "FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Python", "Go", "Express", "Django", "FastAPI"],
  },
  {
    category: "MOBILE",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    category: "DATABASE",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    category: "CLOUD & DEVOPS",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform"],
  },
];

const TechStackSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          TECH STACK
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          We use the right tool for the job. Here are the technologies we work with daily.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.category} className="pixel-card p-5">
              <h3 className="font-pixel text-[9px] mb-4" style={{ color: '#f500ff' }}>{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="font-pixel text-[7px] px-3 py-2 border-2 border-black bg-neon-green/20 hover:bg-neon-green/40 transition-colors cursor-default">
                    {item}
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

export default TechStackSection;
