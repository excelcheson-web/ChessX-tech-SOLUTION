import Image from "next/image";
import GlassCard from "@/components/GlassCard";

const services = [
  {
    title: "Ultra-High-Performance Landing Pages",
    focus: "Speed and Conversions",
    description:
      "Performance-first landing experiences engineered for instant loading, high Lighthouse scores, and measurable conversion lift from first scroll.",
    span: "md:col-span-4 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M9 25H28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 19L31 25L24 31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 35C12 30.5 15.5 28.8 21 28.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="35.5" cy="14.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Conversion-Optimized E-commerce",
    focus: "Shopify and MedusaJS Integration",
    description:
      "Commerce funnels tuned for revenue velocity with Shopify storefront optimization, MedusaJS custom backends, and seamless checkout UX.",
    span: "md:col-span-2",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M12 16H36L33.8 33H14.2L12 16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18 16C18 12.5 20.4 10 24 10C27.6 10 30 12.5 30 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20.5 23H27.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Modern Standard Websites",
    focus: "Brand Identity",
    description:
      "Elegant, trust-building websites that express brand identity with clear messaging hierarchy, intentional typography, and design consistency.",
    span: "md:col-span-2",
    image:
      "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <rect x="10" y="8" width="28" height="32" rx="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 16H31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 22H27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 28H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Full-Stack Inventions",
    focus: "Next.js + Tailwind OS-style Applications",
    description:
      "Bespoke web products built like operating systems: modular interfaces, rich interactions, and robust full-stack architecture tailored to your idea.",
    span: "md:col-span-4",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <rect x="8" y="10" width="32" height="28" rx="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 18H40" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="22" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="24" y="22" width="11" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="24" y="28" width="11" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_82%_82%,rgba(244,114,182,0.14),transparent_32%),linear-gradient(180deg,#070c18_0%,#040611_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-16 right-0 h-96 w-96 rounded-full bg-fuchsia-400/15 blur-[140px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-200/75">Services</p>
        <h1 className="mt-5 max-w-4xl bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
          Precision-Engineered Service Suite
        </h1>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-6 md:auto-rows-[200px] lg:auto-rows-[170px]">
          {services.map((service) => (
            <GlassCard key={service.title} className={["group relative isolate overflow-hidden p-8 min-h-70 sm:min-h-75 md:min-h-0", service.span].join(" ")}>
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover opacity-20 mix-blend-overlay"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050816]/20 via-[#050816]/45 to-[#050816]/85" />

              <div className="relative z-10 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)] transition-colors group-hover:text-cyan-100 group-hover:shadow-[0_0_32px_rgba(34,211,238,0.4)]">
                {service.icon}
              </div>
              <p className="relative z-10 mt-5 font-mono text-[11px] uppercase tracking-widest text-cyan-200/80">
                {service.focus}
              </p>
              <h2 className="relative z-10 mt-3 text-xl font-semibold text-white">{service.title}</h2>
              <p className="relative z-10 mt-3 max-w-prose text-sm leading-7 text-slate-200/85 sm:text-base">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}