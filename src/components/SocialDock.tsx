"use client";

import { Github, Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/excelcheson-web",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: Twitter,
  },
  {
    href: "https://www.linkedin.com/in/chekwubeajasogu",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://wa.me/2349023397629",
    label: "WhatsApp",
    Icon: MessageCircle,
  },
];

export default function SocialDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Social links"
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md shadow-[0_14px_40px_rgba(2,6,23,0.45)]"
      >
        {socialLinks.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="rounded-full border border-transparent p-2.5 text-slate-100/80 transition-colors hover:text-white"
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <motion.span
              className="block"
              whileHover={{
                filter: "drop-shadow(0 0 10px rgba(56,189,248,0.95)) drop-shadow(0 0 18px rgba(168,85,247,0.65))",
              }}
            >
              <item.Icon size={18} strokeWidth={1.8} />
            </motion.span>
          </motion.a>
        ))}
      </nav>
    </div>
  );
}