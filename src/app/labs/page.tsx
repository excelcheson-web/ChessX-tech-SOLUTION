"use client";

import { useEffect, useMemo, useState } from "react";

export default function LabsPage() {
  const [computeUnits, setComputeUnits] = useState(64);
  const [efficiency, setEfficiency] = useState(78);
  const [cooling, setCooling] = useState(44);
  const [systemStatus, setSystemStatus] = useState({
    cpuUsage: 68,
    latency: 2.4,
    activeNodes: 112,
  });

  const estimatedOutput = useMemo(() => {
    const throughput = (computeUnits * efficiency * 1.9) / 100;
    const thermal = Math.max(18, 95 - cooling);
    const rating = (throughput * 0.65 + (100 - thermal) * 0.35).toFixed(1);

    return {
      throughput: throughput.toFixed(1),
      thermal,
      rating,
    };
  }, [computeUnits, efficiency, cooling]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSystemStatus((previous) => {
        const cpuShift = (Math.random() - 0.5) * 8;
        const latencyShift = (Math.random() - 0.5) * 0.45;
        const nodeShift = Math.round((Math.random() - 0.5) * 6);

        return {
          cpuUsage: Math.min(94, Math.max(38, Number((previous.cpuUsage + cpuShift).toFixed(1)))),
          latency: Math.min(4.8, Math.max(0.9, Number((previous.latency + latencyShift).toFixed(2)))),
          activeNodes: Math.min(160, Math.max(88, previous.activeNodes + nodeShift)),
        };
      });
    }, 1400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.16),transparent_31%),radial-gradient(circle_at_84%_80%,rgba(236,72,153,0.12),transparent_32%),linear-gradient(180deg,#060b18_0%,#040711_100%)]" />
      <div className="pointer-events-none absolute -left-14 top-28 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-8 right-5 h-96 w-96 rounded-full bg-pink-400/12 blur-[140px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/75">Labs</p>
        <h1 className="mt-5 max-w-4xl bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
          Interactive technical playground for rapid system tuning.
        </h1>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(2,6,23,0.45)] sm:p-8">
            <div className="space-y-7">
              <label className="block">
                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Compute Units: {computeUnits}
                </span>
                <input
                  type="range"
                  min={16}
                  max={128}
                  step={1}
                  value={computeUnits}
                  onChange={(event) => setComputeUnits(Number(event.target.value))}
                  onInput={(event) => setComputeUnits(Number((event.target as HTMLInputElement).value))}
                  className="w-full cursor-pointer accent-cyan-300"
                />
              </label>

              <label className="block">
                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Efficiency: {efficiency}%
                </span>
                <input
                  type="range"
                  min={35}
                  max={99}
                  step={1}
                  value={efficiency}
                  onChange={(event) => setEfficiency(Number(event.target.value))}
                  onInput={(event) => setEfficiency(Number((event.target as HTMLInputElement).value))}
                  className="w-full cursor-pointer accent-cyan-300"
                />
              </label>

              <label className="block">
                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                  Cooling Reserve: {cooling}%
                </span>
                <input
                  type="range"
                  min={20}
                  max={95}
                  step={1}
                  value={cooling}
                  onChange={(event) => setCooling(Number(event.target.value))}
                  onInput={(event) => setCooling(Number((event.target as HTMLInputElement).value))}
                  className="w-full cursor-pointer accent-cyan-300"
                />
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(2,6,23,0.45)] sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">Simulation Output</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm text-slate-300">Deployment Velocity</p>
                <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {estimatedOutput.throughput} ms
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm text-slate-300">Server Response Time</p>
                <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{estimatedOutput.thermal} ms</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-sm text-slate-300">Composite Performance Index</p>
                <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{estimatedOutput.rating}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(2,6,23,0.45)] sm:p-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/80">System Status</p>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/90">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.95)] animate-pulse" />
              Real-time
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300">CPU Usage</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.95)]" />
                <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">{systemStatus.cpuUsage}%</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300">Latency</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.95)]" />
                <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">{systemStatus.latency} ms</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-300">Active Nodes</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.95)]" />
                <p className="font-mono text-2xl font-semibold text-white sm:text-3xl">{systemStatus.activeNodes}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}