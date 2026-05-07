"use client";
import Link from "next/link";
import { ArrowRight, Music2, Radio, Headphones, Heart, Mail, Globe, Send } from "lucide-react";

const platformLinks = [
  { label: "Community", href: "/community" },
  { label: "Academy", href: "/academy" },
  { label: "Events", href: "/events" },
  { label: "Formationen", href: "/formationen" },
  { label: "Shop", href: "/shop" },
  { label: "Streaming", href: "/streaming" },
];

const infoLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/laemu",
    icon: Music2,
    title: "Instagram",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@laemu",
    icon: Radio,
    title: "YouTube",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/laemu",
    icon: Globe,
    title: "Facebook",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/laemu",
    icon: Headphones,
    title: "Spotify",
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #8B6914 30%, #C4952A 50%, #8B6914 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #C4952A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8B6914 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Hero logo section */}
        <div className="pt-20 pb-12 border-b border-cream/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Logo + tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-5xl md:text-6xl font-bold text-cream leading-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LAEMU
                </span>
                <span
                  className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                  style={{ background: "#C4952A" }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="text-xl md:text-2xl text-cream/70 italic leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Am Puls der Ländlermusik.
              </p>
            </div>

            {/* Decorative musical note / accent */}
            <div className="hidden md:flex items-center gap-2 text-cream/20">
              <Music2 size={40} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* 4-column grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-cream/10">
          {/* Column 1 – About + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#C4952A" }}
            >
              Über LAEMU
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-8">
              LAEMU entfacht das volle Potenzial der Ländlermusik und verbindet
              Musikerinnen, Musikbegeisterte und Lernende in einer lebendigen
              Gemeinschaft.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  aria-label={title}
                  className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 transition-all duration-300 hover:border-earth hover:text-earth hover:scale-110 hover:bg-earth/10"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Platform */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#C4952A" }}
            >
              Plattform
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {platformLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px bg-earth-light transition-all duration-200 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Info */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-5"
              style={{ color: "#C4952A" }}
            >
              Informationen
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {infoLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px bg-earth-light transition-all duration-200 group-hover:w-4"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Newsletter */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
              style={{ color: "#C4952A" }}
            >
              Newsletter
            </h3>
            <p
              className="text-xl font-semibold text-cream mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bleib am Puls
            </p>
            <p className="text-sm text-cream/50 mb-6 leading-relaxed">
              News, Events und neue Kurse – direkt in dein Postfach.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
              aria-label="Newsletter abonnieren"
            >
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder="deine@email.ch"
                  required
                  autoComplete="email"
                  className="w-full bg-cream/8 border border-cream/15 rounded-full pl-11 pr-4 py-3 text-sm text-cream placeholder:text-cream/30 outline-none transition-all duration-200 focus:border-earth focus:bg-cream/12"
                  style={{
                    background: "rgba(250,247,242,0.06)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-earth w-full justify-center text-sm py-3"
              >
                Abonnieren
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          {/* Left: copyright */}
          <div className="flex items-center gap-1.5">
            <span>© 2025 LAEMU</span>
            <span className="opacity-50">·</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart
                size={11}
                className="fill-earth text-earth"
                aria-label="Herz"
              />{" "}
              in Switzerland
            </span>
          </div>

          {/* Right: legal links */}
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="hover:text-cream/80 transition-colors duration-200"
            >
              Impressum
            </Link>
            <span className="opacity-30">|</span>
            <Link
              href="/datenschutz"
              className="hover:text-cream/80 transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
