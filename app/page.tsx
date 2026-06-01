import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 py-24">
        
        {/* Header */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-2">Anish Dara</h1>
          <p className="text-zinc-400 mb-6">
            CS + Data Science @ UC Berkeley
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I build software at the intersection of sports, data, and quantitative modeling. 
            Currently working on data analytics for Cal Football and software engineering at Guildsys.
          </p>
          <div className="flex gap-4 mt-6 text-sm">
            <a href="mailto:anish_dara@berkeley.edu" className="text-zinc-400 hover:text-white">Email</a>
            <a href="https://github.com/YOURUSERNAME" className="text-zinc-400 hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/YOURUSERNAME" className="text-zinc-400 hover:text-white">LinkedIn</a>
            <a href="/resume.pdf" className="text-zinc-400 hover:text-white">Resume</a>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Projects</h2>
          
          <div className="space-y-8">
            
            <ProjectCard
              title="Sports Betting Edge Finder"
              description="Real-time arbitrage detection across 8+ sportsbooks. Surfaces +EV bets using async API aggregation and live odds comparison."
              stack={["Python", "FastAPI", "React", "PostgreSQL"]}
              live="#"
              github="#"
            />

            <ProjectCard
              title="NFL Play Predictor"
              description="Gradient boosting classifier trained on 50,000+ play-by-play records to predict play type from game state. 73% accuracy."
              stack={["Python", "scikit-learn", "FastAPI", "React"]}
              live="#"
              github="#"
            />

            <ProjectCard
              title="Sports Analytics Database"
              description="Full-stack web app ingesting 10,000+ player and game records spanning 14 NFL seasons. 25+ custom analytics metrics."
              stack={["FastAPI", "PostgreSQL", "React"]}
              live="#"
              github="#"
            />

          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Experience</h2>
          <div className="space-y-6">
            <ExperienceItem
              role="Software Engineering Intern"
              company="Guildsys"
              dates="May 2026 – Present"
            />
            <ExperienceItem
              role="Data & Film Analysis Intern"
              company="California Golden Bears Football"
              dates="March 2026 – Present"
            />
          </div>
        </section>

      </div>
    </main>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
};

function ProjectCard({ title, description, stack, live, github }: ProjectCardProps) {
  return (
    <div className="border-l-2 border-zinc-800 pl-6 hover:border-zinc-600 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-3 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-2 mb-3 flex-wrap">
        {stack.map(s => (
          <span key={s} className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 rounded">
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a href={live} className="text-zinc-300 hover:text-white">Live →</a>
        <a href={github} className="text-zinc-300 hover:text-white">Code →</a>
      </div>
    </div>
  );
}

type ExperienceItemProps = {
  role: string;
  company: string;
  dates: string;
};

function ExperienceItem({ role, company, dates }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <h3 className="font-semibold">{role}</h3>
        <span className="text-sm text-zinc-500">{dates}</span>
      </div>
      <p className="text-zinc-400 text-sm">{company}</p>
    </div>
  );
}