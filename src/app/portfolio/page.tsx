"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "@/components/GlassCard";

type Project = {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  metric: { label: string; value: string };
  image: string;
  colSpan: string;
  horizontal?: boolean;
};

const projects: Project[] = [
  {
    id: "nexus",
    tag: "E-Commerce Platform",
    title: "Nexus E-Commerce OS",
    description:
      "A high-fidelity commerce engine optimized for luxury conversion.",
    tech: ["Next.js", "Stripe", "MedusaJS"],
    metric: { label: "Load Time", value: "0.6s" },
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    colSpan: "md:col-span-3",
  },
  {
    id: "vertex",
    tag: "Landing Page",
    title: "Vertex Landing Page",
    description:
      "An ultra-fast, motion-heavy landing page for a silicon-valley startup.",
    tech: ["Tailwind 4.0", "Framer Motion"],
    metric: { label: "Lighthouse Score", value: "98/100" },
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    colSpan: "md:col-span-2",
  },
  {
    id: "chessx-labs",
    tag: "Internal Tooling",
    title: "ChessX Internal Labs",
    description:
      "A custom invention for monitoring server-side latency in real-time.",
    tech: ["Full-Stack Node.js", "Real-time WebSockets"],
    metric: { label: "Server Latency", value: "<2ms" },
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    colSpan: "md:col-span-5",
    horizontal: true,
  },
];

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.07 },
};

const arrowVariants = {
  rest: { opacity: 0, x: -6 },
  hover: { opacity: 1, x: 0 },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,#060b18_0%,#040610_100%)]" />
      <div className="pointer-events-none absolute -left-10 top-36 h-72 w-72 rounded-full bg-sky-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-8 h-80 w-80 rounded-full bg-purple-400/15 blur-[125px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/75">
          Portfolio
        </p>
        <h1 className="mt-5 max-w-4xl bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
          Precision-engineered products, built to perform.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300/70 sm:text-base">
          Three real-world builds across e-commerce, marketing, and internal
          platform infrastructure.
        </p>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-5">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              className={`overflow-hidden ${project.colSpan}`}
            >
              <motion.article
                className={`flex h-full ${project.horizontal ? "flex-col md:flex-row" : "flex-col"}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* ── Image ── */}
                <div
                  className={`relative overflow-hidden ${
                    project.horizontal
                      ? "h-56 w-full shrink-0 md:h-auto md:w-2/5"
                      : "h-52 w-full"
                  }`}
                >
                  <motion.div
                    className="absolute inset-0"
                    variants={imageVariants}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover opacity-75"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050816]/70" />
                  </motion.div>
                </div>

                {/* ── Content ── */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-cyan-300/70">
                    {project.tag}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/75">
                    {project.description}
                  </p>

                  {/* Technical Breakdown */}
                  <div className="mt-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-slate-400/60">
                      Technical Breakdown
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-100/85"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Performance Metric + hover CTA */}
                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div className="rounded-2xl border border-cyan-300/15 bg-cyan-400/8 px-4 py-2.5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/55">
                        {project.metric.label}
                      </p>
                      <p className="font-mono text-2xl font-semibold text-cyan-200 sm:text-3xl">
                        {project.metric.value}
                      </p>
                    </div>

                    <motion.p
                      variants={arrowVariants}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="font-mono text-xs text-cyan-300/60"
                    >
                      View Case →
                    </motion.p>
                  </div>
                </div>
              </motion.article>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}