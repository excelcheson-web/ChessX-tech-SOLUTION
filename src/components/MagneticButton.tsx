"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ButtonHTMLAttributes, type ReactNode, useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  magneticRadius?: number;
  magneticStrength?: number;
};

export default function MagneticButton({
  children,
  className = "",
  magneticRadius = 140,
  magneticStrength = 0.22,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.5 });
  const mouse = useMousePosition();

  useEffect(() => {
    const element = buttonRef.current;
    if (!element || mouse.x === null || mouse.y === null) {
      x.set(0);
      y.set(0);
      return;
    }

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = mouse.x - centerX;
    const deltaY = mouse.y - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < magneticRadius) {
      x.set(deltaX * magneticStrength);
      y.set(deltaY * magneticStrength);
      return;
    }

    x.set(0);
    y.set(0);
  }, [magneticRadius, magneticStrength, mouse.x, mouse.y, x, y]);

  return (
    <motion.button
      ref={buttonRef}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className={[
        "rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white",
        "backdrop-blur-xl shadow-[0_12px_35px_rgba(2,6,23,0.45)] transition-colors hover:bg-white/20",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.button>
  );
}