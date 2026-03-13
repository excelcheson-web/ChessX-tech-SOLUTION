"use client";

import { useEffect, useState } from "react";

type MousePosition = {
  x: number | null;
  y: number | null;
};

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: null, y: null });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return position;
}