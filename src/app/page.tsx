"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import MagneticButton from "@/components/MagneticButton";

const specifications = [
  {
    label: "Core",
    value: "Next.js 15 / React 19",
  },
  {
    label: "Performance",
    value: "98/100 Lighthouse Score",
  },
  {
    label: "Interface",
    value: "Tailwind CSS 4.0 (Linear)",
  },
  {
    label: "Foundation",
    value: "Modern HTML5 & Semantic CSS3",
  },
  {
    label: "Architecture",
    value: "Full-Stack Node.js Integration",
  },
];

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[28px] border border-white/10 bg-white/8 backdrop-blur-xl",
        "shadow-[0_24px_80px_rgba(2,6,23,0.55)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.1),transparent_35%),linear-gradient(180deg,#070b17_0%,#03060f_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-88 w-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.75),rgba(14,165,233,0.25),rgba(217,70,239,0.68),rgba(244,114,182,0.35),rgba(56,189,248,0.75))] blur-3xl sm:h-112 sm:w-md lg:h-136 lg:w-136"
        animate={{
          x: ["-8%", "10%", "-4%"],
          y: ["-6%", "8%", "-2%"],
          scale: [1, 1.12, 0.98],
          rotate: [0, 18, -12],
        }}
        transition={{
          duration: 24,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-24 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-36">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,440px)] lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <GlassCard className="inline-flex items-center gap-3 px-4 py-2 text-xs text-white/70 sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
              Futuristic product systems. Calibrated for premium launch teams.
            </GlassCard>

            <div className="space-y-6">
              <h1 className="max-w-4xl bg-linear-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-3xl font-semibold tracking-[-0.03em] text-transparent text-balance sm:text-5xl sm:tracking-[-0.04em] lg:text-7xl">
                High-fidelity digital interfaces engineered for the modern web.
              </h1>
              <p className="max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
                From conversion-optimized landing pages to robust E-commerce engines, we architect
                mid-level full-stack inventions with a focus on frontend precision and technical
                performance.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Start Project
                </Link>
                <MagneticButton
                  type="button"
                  className="w-full sm:w-auto"
                  onClick={() => router.push("/portfolio")}
                >
                  View Portfolio
                </MagneticButton>
              </div>
            </div>
          </div>

          <motion.div
            className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(2,6,23,0.55)] sm:p-8"
            animate={{
              borderColor: ["rgba(255,255,255,0.10)", "rgba(255,255,255,0.30)", "rgba(255,255,255,0.10)"],
              boxShadow: [
                "0 24px 80px rgba(2,6,23,0.55), 0 0 20px rgba(34,211,238,0.16)",
                "0 24px 80px rgba(2,6,23,0.55), 0 0 42px rgba(34,211,238,0.30)",
                "0 24px 80px rgba(2,6,23,0.55), 0 0 20px rgba(34,211,238,0.16)",
              ],
              filter: [
                "drop-shadow(0 0 6px rgba(34,211,238,0.16))",
                "drop-shadow(0 0 14px rgba(34,211,238,0.3))",
                "drop-shadow(0 0 6px rgba(34,211,238,0.16))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-tighter text-cyan-200/80">
                  Technical Specification
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  ChessX V2.0 Core Engine
                </h2>
              </div>
              <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-tighter text-white/60 backdrop-blur-xl">
                NEXT-JS 15
              </div>
            </div>

            <div className="space-y-3">
              {specifications.map((item) => (
                <GlassCard
                  key={item.label}
                  className="flex flex-col items-start justify-between gap-2 px-4 py-4 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="font-mono text-xs uppercase tracking-tighter text-white/45">
                    {item.label}
                  </span>
                  <span className="max-w-[16rem] font-mono text-left text-xs tracking-[0.08em] text-slate-100 sm:text-right sm:text-sm">
                    {item.value}
                  </span>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
