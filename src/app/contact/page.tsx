"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(217,70,239,0.12),transparent_33%),linear-gradient(180deg,#060b18_0%,#040611_100%)]" />
      <div className="pointer-events-none absolute -left-8 top-36 h-72 w-72 rounded-full bg-cyan-400/14 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-10 right-4 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-[125px]" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-16 pt-40 sm:px-8 sm:py-20 sm:pt-44 lg:pt-36">
        <div className="w-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_65px_rgba(2,6,23,0.5)] sm:p-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/75">Contact</p>
                <h1 className="mt-4 bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-[-0.03em] text-transparent sm:text-4xl lg:text-5xl">
                  Start your next premium digital build.
                </h1>
                <p className="mt-4 text-sm text-slate-200/85 sm:text-base">
                  Share your goals and we will map a clear technical path within one business day.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-5">
                  <input type="hidden" name="access_key" value="ae02cda6-4cdc-443a-a6b0-78ce4c17f0e0" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-200/90">Name</span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-xl placeholder:text-slate-400 focus:border-cyan-300/50"
                        placeholder="Alex Johnson"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-200/90">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-xl placeholder:text-slate-400 focus:border-cyan-300/50"
                        placeholder="alex@company.com"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-200/90">Project Brief</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-xl placeholder:text-slate-400 focus:border-cyan-300/50"
                      placeholder="Tell us about the platform, timeline, and business goals."
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors hover:bg-white/20 disabled:opacity-50"
                  >
                    {loading ? "Transmitting…" : "Send Inquiry"}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col items-center gap-6 py-10 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-cyan-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/75">Transmission Received</p>
                  <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Excel will reach out shortly.
                  </p>
                  <p className="mt-2 text-sm text-slate-300/70">
                    Your inquiry has been logged. Expect a response within one business day.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}