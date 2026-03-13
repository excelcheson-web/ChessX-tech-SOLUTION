"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

type MagneticWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function MagneticWrapper({ children, className = "" }: MagneticWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const mousePosition = useMousePosition();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.45 });

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || mousePosition.x === null || mousePosition.y === null) {
      x.set(0);
      y.set(0);
      return;
    }

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance <= 50) {
      x.set(deltaX * 0.28);
      y.set(deltaY * 0.28);
      return;
    }

    x.set(0);
    y.set(0);
  }, [mousePosition.x, mousePosition.y, x, y]);

  return (
    <motion.div ref={wrapperRef} style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}