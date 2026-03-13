"use client";

import { useState } from "react";
import { BriefcaseBusiness, Cpu, FolderKanban, Home, Info, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MagneticWrapper from "./MagneticWrapper";

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: BriefcaseBusiness },
  { href: "/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/labs", label: "Labs (Tech Specs)", icon: Cpu },
  { href: "/about", label: "About", icon: Info },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-xl shadow-[0_16px_50px_rgba(2,6,23,0.45)] sm:px-5">
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            className="flex max-w-[66vw] items-center gap-2.5 truncate sm:max-w-none sm:gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/chessx-logo.png"
              alt="ChessX Tech Solution logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full border border-white/10 object-cover sm:h-10 sm:w-10"
              priority
            />
            <span className="truncate bg-linear-to-r from-cyan-200 via-sky-100 to-fuchsia-200 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-2xl">
              ChessX Tech Solution
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <MagneticWrapper>
            <Link
              href="/contact"
              className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </MagneticWrapper>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 p-2 text-white/90 backdrop-blur-xl transition-colors hover:bg-white/20"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-100/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <MagneticWrapper>
            <Link
              href="/contact"
              className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-xl transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </MagneticWrapper>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="mx-auto mt-2 w-full max-w-7xl md:hidden">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl shadow-[0_16px_50px_rgba(2,6,23,0.45)]">
            <div className="grid grid-cols-3 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-100/90 transition-colors hover:bg-white/15"
                >
                  <item.icon size={16} />
                  <span className="sr-only">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}