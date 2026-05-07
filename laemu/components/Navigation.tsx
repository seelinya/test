"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Community", href: "/community" },
  { label: "Academy", href: "/academy" },
  { label: "Events", href: "/events" },
  { label: "Formationen", href: "/formationen" },
  { label: "Mission", href: "/mission" },
  { label: "Shop", href: "/shop" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "nav-blur bg-cream/90 shadow-[0_1px_30px_rgba(26,26,26,0.08)] border-b border-cream-deeper/60"
            : "bg-transparent",
        ].join(" ")}
        style={{ height: "72px" }}
      >
        <div className="container flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="LAEMU – Startseite"
          >
            <span
              className="text-2xl font-bold tracking-tight text-charcoal leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LAEMU
            </span>
            {/* Swiss cross accent dot */}
            <span
              className="w-2 h-2 rounded-full bg-earth transition-transform duration-300 group-hover:scale-125"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop nav links – centered */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Hauptnavigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-full",
                    isActive
                      ? "text-earth"
                      : "text-charcoal/70 hover:text-charcoal",
                  ].join(" ")}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-earth"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/anmelden" className="btn btn-outline text-sm py-3 px-6">
              Anmelden
            </Link>
            <Link href="/mitmachen" className="btn btn-dark text-sm py-3 px-6">
              Mitmachen
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-charcoal hover:bg-cream-deeper transition-colors duration-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={[
          "fixed inset-0 z-40 bg-cream flex flex-col transition-all duration-500 ease-in-out lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4",
        ].join(" ")}
      >
        {/* Top bar placeholder (nav sits on top) */}
        <div style={{ height: "72px" }} className="flex-shrink-0" />

        {/* Decorative earth line */}
        <div className="h-px bg-gradient-to-r from-transparent via-earth/40 to-transparent mx-8" />

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Mobile Navigation">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "group flex items-center justify-between py-5 border-b border-cream-deeper/80 transition-colors duration-200",
                  isActive ? "text-earth" : "text-charcoal",
                ].join(" ")}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span
                  className="text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </span>
                <ArrowRight
                  size={18}
                  className={[
                    "transition-all duration-200",
                    isActive
                      ? "text-earth translate-x-0 opacity-100"
                      : "text-earth/0 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div className="px-8 pb-12 flex flex-col gap-3">
          <Link href="/anmelden" className="btn btn-outline w-full justify-center text-base py-4">
            Anmelden
          </Link>
          <Link href="/mitmachen" className="btn btn-dark w-full justify-center text-base py-4">
            Mitmachen
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}
