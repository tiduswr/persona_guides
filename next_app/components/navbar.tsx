import { Ghost, GraduationCap, LayoutGrid, Users } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { name: "Shadows", href: "/demons", icon: <Ghost size={16} /> },
    { name: "Social Links", href: "/social-links", icon: <Users size={16} /> },
    { name: "Exams", href: "/exams", icon: <GraduationCap size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#051115]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-cyan-500/20 p-1.5 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500 transition-colors">
              <LayoutGrid size={18} className="text-cyan-400 group-hover:text-black" />
            </div>
            <span className="font-black italic uppercase tracking-tighter text-slate-100">
              Persona Guides
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}