import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl",
        "shadow-[0_18px_60px_rgba(2,6,23,0.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}