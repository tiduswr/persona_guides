import { ArrowRight, Ghost, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const guides = [
    {
      title: "Shadows Database",
      desc: "Analyze elemental affinities, drops, and locations.",
      href: "/demons",
      icon: <Ghost size={32} />,
      color: "from-cyan-500/20",
    },
    {
      title: "Social Links",
      desc: "Optimize your schedule and rank up efficiently.",
      href: "/social-links",
      icon: <Users size={32} />,
      color: "from-blue-500/20",
    },
    {
      title: "Exam Answers",
      desc: "Ace every school challenge and boost your stats.",
      href: "/exams",
      icon: <GraduationCap size={32} />,
      color: "from-emerald-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-[#051115]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 text-center border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-cyan-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">
            Welcome to S.E.E.S Network
          </div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-slate-100 sm:text-7xl">
            Persona Guides <br />
            <span className="text-cyan-500">Repository</span>
          </h1>
          <p className="mt-8 text-lg text-slate-400 font-medium">
            Everything you need to master your journey through the Dark Hour. 
            Detailed technical data for Shadows, Social Links, and Academic Exams.
          </p>
        </div>
      </section>

      {/* Guide Cards Grid */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-8 transition-all hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${guide.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="mb-4 text-cyan-400 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter text-slate-100">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {guide.desc}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                  Access Data <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}