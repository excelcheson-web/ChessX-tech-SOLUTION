import GlassCard from "@/components/GlassCard";

const story = [
  "Our journey began in early 2024 as a dedicated front-end lab with one obsession: redefining performance and visual fidelity in the digital sphere. ChessX Tech Solution was founded on the philosophy that a website should be more than decorative; it should be precision-engineered hardware.",
  "Lead by engineering veteran Chekwube D. Ajasogu (Excel), our focus shifted from simple visual design to deep technical prowess. We saw the gap between 'artistic design' and 'high-end front-end architecture.'",
  "Today, we translate technical complexity into intuitive user interfaces. Whether we are architecting high-converting Landing Pages, deploying complex E-commerce OS environments, or developing mid-level custom inventions, our methodology is the same: rigorous technical implementation and deliberate motion design.",
];

const milestones = [
  { period: "Q1 2024", label: "Foundation" },
  { period: "Q3 2024", label: "Full-Stack Scaling" },
  { period: "Present", label: "ChessX Launch" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_30%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.12),transparent_34%),linear-gradient(180deg,#070b17_0%,#03060f_100%)]" />
      <div className="pointer-events-none absolute -left-14 top-24 h-80 w-80 rounded-full bg-cyan-400/14 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-2 h-96 w-96 rounded-full bg-fuchsia-400/10 blur-[135px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/75">About</p>
        <h1 className="mt-5 max-w-5xl bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
          The Engineered Path to ChessX.
        </h1>

        <GlassCard className="mt-6 inline-flex items-center gap-3 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/90">
            Chekwube D. Ajasogu (Excel) - Lead Engineer
          </p>
        </GlassCard>

        <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {story.map((paragraph, index) => (
            <GlassCard key={index} className="p-5 sm:p-6">
              <p className="text-sm leading-8 text-slate-200/90 sm:text-base">{paragraph}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-8 p-5 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-200/80">Timeline</p>

          <div className="relative mt-7">
            <div className="absolute left-0 right-0 top-3 h-px bg-white/20" aria-hidden="true" />
            <div className="relative grid gap-6 sm:grid-cols-3 sm:gap-5">
              {milestones.map((entry) => (
                <div key={entry.period} className="space-y-2">
                  <span className="block h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.95)]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">
                    {entry.period}
                  </p>
                  <p className="text-sm text-slate-100 sm:text-base">{entry.label}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}