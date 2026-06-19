import TeamLayout from "@/components/TeamLayout";

export const metadata = {
  title: "Our Team | Cyber Congress",
  description: "Meet the core committee and members operating the Cyber Congress.",
};

export default function TeamPage() {
  return (
    <main className="relative min-h-screen -mt-20 pb-20">

      <div className="max-w-6xl mx-auto px-6 pt-2 relative z-10">
        
        <section className="mb-12 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-mono">
              Our Team
            </h1>
            <p className="max-w-2xl text-white/60 font-mono text-sm leading-relaxed">
              Meet the core committee and members driving the initiatives and events at Cyber Congress.
            </p>
          </div>
        </section>


        <section className="border-t border-white/5 pt-10">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white font-mono uppercase">
              {"// Team "}
            </h2>
            <p className="text-xs text-white/40 font-mono mt-1">
              Filter or use the search field to find specific members.
            </p>
          </div>
          <TeamLayout />
        </section>

      </div>
    </main>
  );
}