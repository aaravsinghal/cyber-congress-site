// used copilot/windsurf for the styling classes and button shadowing in all files to make my work easier and faster

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cyber Congress | AISG46",
  description: "The prestigious cybersecurity society of Amity International School, Gurugram Sector 46",
};

export default function HomePage() {
  return (
    <main className="relative h-screen overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center space-y-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white font-mono">
            CYBER CONGRESS
          </h1>
          <p className="text-base md:text-lg text-white/60 font-mono">
            The prestigious cybersecurity society dedicated to promoting cybersecurity awareness, security research, and events at Amity International School, Gurugram Sector 46.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/resources"
            className="group px-6 py-3 rounded-xl bg-white text-black font-mono text-sm font-bold flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center hover:bg-white/90"
          >
            Start Learning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link
            href="/team"
            className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-sm font-semibold hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Meet the Team
          </Link>
        </div>
      </section>
    </main>
  );
}