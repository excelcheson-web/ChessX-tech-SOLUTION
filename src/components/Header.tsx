import Image from "next/image";
import Link from "next/link";
import MagneticWrapper from "./MagneticWrapper";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/labs", label: "Labs (Tech Specs)" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-6">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-xl shadow-[0_16px_50px_rgba(2,6,23,0.45)] sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex max-w-[76vw] items-center gap-2.5 truncate sm:gap-3"
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

          <div className="lg:hidden">
            <MagneticWrapper>
              <Link
                href="/contact"
                className="rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-xl sm:text-sm"
              >
                Contact Us
              </Link>
            </MagneticWrapper>
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
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

        <div className="-mx-1 flex gap-1 overflow-x-auto pb-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-xs text-slate-100/90 backdrop-blur-xl sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}