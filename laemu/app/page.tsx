import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Music, Users, GraduationCap, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Data ────────────────────────────────────────────────────────────────────

const ecosystemCards = [
  { emoji: "🎵", title: "Community", desc: "Teile deine Musik, folge Künstlern, wachse gemeinsam." },
  { emoji: "🎓", title: "Academy", desc: "Lerne von den Besten – Kurse für alle Stufen." },
  { emoji: "🎪", title: "Events", desc: "Entdecke Anlässe in deiner Nähe." },
  { emoji: "🎻", title: "Formationen", desc: "Alle Gruppen der Schweiz auf einen Blick." },
  { emoji: "🎧", title: "Streaming", desc: "Ländlermusik wann und wo du willst." },
  { emoji: "🛍", title: "Shop", desc: "Merch, CDs und Lifestyle-Produkte." },
  { emoji: "🎼", title: "Songs", desc: "Noten, Arrangements und mehr." },
  { emoji: "🏡", title: "Venues", desc: "Die besten Locations für dein Event." },
];

const formations = [
  {
    name: "Trio Alpenklang",
    region: "Zentralschweiz",
    style: "Traditionell",
    desc: "Ein eingespieltes Trio aus dem Herzen der Schweiz – bekannt für ihren warmen, authentischen Klang.",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    name: "Ländler-Quintett Bern",
    region: "Bern",
    style: "Modern",
    desc: "Frisch, modern und immer am Puls der Zeit – das Quintett aus der Bundesstadt begeistert Jung und Alt.",
    img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
  },
  {
    name: "Die Alpinisten",
    region: "Appenzell",
    style: "Fusion",
    desc: "Roots trifft Moderne. Die Alpinisten verbinden uralte Traditionen mit zeitgenössischen Klängen.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

const events = [
  { day: "15", month: "Jun", title: "Ländlerfest Luzern", location: "Luzern", type: "Grossanlass" },
  { day: "22", month: "Jun", title: "Alpsegen Abend", location: "Appenzell", type: "Abendveranstaltung" },
  { day: "5", month: "Jul", title: "Sommerfest Bern", location: "Bern", type: "Festival" },
];

const products = [
  { name: "LAEMU Hoodie", price: "CHF 79.–", img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80" },
  { name: "LAEMU Classic Tee", price: "CHF 39.–", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { name: "LAEMU Cap", price: "CHF 34.–", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
];

const founders = [
  {
    name: "Niklaus Hess",
    role: "Mitgründer & Ländlermusik-Experte",
    desc: "Tief verwurzelt in der Schweizer Volksmusik-Kultur und -Gemeinschaft. Niklaus bringt jahrelanges Wissen, Netzwerk und echte Leidenschaft für die Ländlermusik mit.",
    tags: ["Volksmusik", "Gemeinschaft", "Kultur"],
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Selina Strickler",
    role: "Mitgründerin & Digitale Strategie",
    desc: "Branding, digitale Strategie, Marketing und moderne Positionierung. Selina gestaltet das Gesicht von LAEMU und sorgt dafür, dass Ländlermusik modern erlebt wird.",
    tags: ["Branding", "Digital", "Marketing"],
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=400&q=80",
  },
];

const instruments = ["Handorgel", "Schwyzerörgeli", "Piano", "Bass", "Klarinette", "Saxophon"];

const pricingTiers = [
  {
    name: "Schnupperkurs",
    price: "Kostenlos",
    sub: "Für Neugierige",
    perks: ["Erste Schritte", "Schnuppervideos", "Keine Kreditkarte nötig"],
    highlight: false,
  },
  {
    name: "Starterkurs",
    price: "CHF 29",
    sub: "pro Monat",
    perks: ["Alle Grundkurs-Videos", "Community-Zugang", "Monatliche Q&A"],
    highlight: true,
  },
  {
    name: "Pro-Kurs",
    price: "CHF 59",
    sub: "pro Monat",
    perks: ["Alles aus Starter", "Live-Calls mit Lehrern", "Teacher-Feedback & Camps"],
    highlight: false,
  },
];

const marqueeItems = ["Gemeinschaft", "Academy", "Events", "Formationen", "Streaming", "Shop", "Kultur", "Musik"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
            alt="Schweizer Alpen – majestätische Berglandschaft"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1A1A1A]/70" />
          {/* Bottom gradient for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container flex flex-col items-center text-center pt-24 pb-32">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm font-semibold tracking-widest uppercase"
            style={{ background: "rgba(139,105,20,0.25)", color: "#C4952A", border: "1px solid rgba(196,149,42,0.4)", animationDelay: "0ms" }}
          >
            ✦ Die Zukunft der Ländlermusik beginnt hier
          </div>

          {/* Heading */}
          <h1
            className="text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3.2rem, 8vw, 7.5rem)" }}
          >
            Am Puls der
            <br />
            <em style={{ color: "#C4952A", fontStyle: "italic" }}>Ländlermusik.</em>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(250,247,242,0.72)", fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            LAEMU entfacht das volle Potenzial der Ländlermusik – als starke, inspirierende und
            modern gelebte Kultur.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/community" className="btn btn-dark">
              Jetzt entdecken
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/mission"
              className="btn"
              style={{
                background: "transparent",
                color: "#FAF7F2",
                borderColor: "rgba(250,247,242,0.55)",
              }}
            >
              Unsere Mission
            </Link>
          </div>
        </div>

        {/* Marquee strip at bottom of hero */}
        <div
          className="relative z-10 border-t py-5 overflow-hidden"
          style={{ borderColor: "rgba(250,247,242,0.12)", background: "rgba(26,26,26,0.55)", backdropFilter: "blur(12px)" }}
        >
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-6 px-6 text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
                style={{ color: "rgba(196,149,42,0.9)" }}
              >
                {item}
                <span style={{ color: "rgba(250,247,242,0.25)" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. INTRO STATEMENT ──────────────────────────────────────────────── */}
      <section className="section-lg bg-white">
        <div className="container">
          <ScrollReveal className="text-center max-w-4xl mx-auto mb-20">
            <h2
              className="leading-tight mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "#1A1A1A",
              }}
            >
              Ländlermusik ist nicht Vergangenheit.
            </h2>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              <span className="gradient-text">Sie ist Gegenwart. Sie ist Zukunft.</span>
            </h2>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
            {[
              { num: "500+", label: "Formationen in der Schweiz" },
              { num: "50'000+", label: "Begeisterte Fans" },
              { num: "2025", label: "Gründungsjahr LAEMU" },
            ].map((s) => (
              <ScrollReveal key={s.num}>
                <div
                  className="text-center py-10 px-8 rounded-3xl"
                  style={{ background: "#FAF7F2", border: "1px solid #E8DFD0" }}
                >
                  <div
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "#8B6914",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm font-medium tracking-wide uppercase" style={{ color: "#8A8078" }}>
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ECOSYSTEM ────────────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="badge mb-5">Ein Ökosystem</span>
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#1A1A1A" }}
            >
              LAEMU verbindet alles
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#8A8078" }}>
              Von der ersten Note bis zur grossen Bühne – LAEMU verbindet alle Welten der Schweizer
              Volksmusik.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 stagger">
            {ecosystemCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 50}>
                <div
                  className="card group p-7 flex flex-col gap-3 cursor-default"
                  style={{ background: "#fff" }}
                >
                  <div className="text-4xl leading-none mb-1">{card.emoji}</div>
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8A8078" }}>
                    {card.desc}
                  </p>
                  <div
                    className="mt-auto pt-3 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#8B6914" }}
                  >
                    Mehr erfahren <ArrowRight size={13} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EMOTIONAL STORY ──────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#1A1A1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div
                className="relative rounded-3xl overflow-hidden img-zoom"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                  alt="Volksmusik-Akkordeon"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle gold overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(139,105,20,0.4), transparent)" }}
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="py-8">
                <span className="badge mb-6" style={{ background: "rgba(139,105,20,0.2)", color: "#C4952A" }}>
                  Unsere Geschichte
                </span>
                <h2
                  className="mb-8 leading-tight"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    color: "#FAF7F2",
                  }}
                >
                  Die Ländlermusik verdient eine Bühne, die so gross ist wie ihre Seele.
                </h2>
                <p className="mb-5 leading-relaxed text-lg" style={{ color: "rgba(250,247,242,0.72)" }}>
                  Wir sind überzeugt: Ländlermusik ist eine der lebendigsten, emotionalsten und
                  verbindendsten Kulturen der Schweiz. LAEMU wurde gegründet, um ihr den Raum zu
                  geben, den sie verdient.
                </p>
                <p className="mb-10 leading-relaxed" style={{ color: "rgba(250,247,242,0.55)" }}>
                  Modern. Stolz. Verbindend. Eine Plattform für alle – Musikerinnen, Fans,
                  Lernende und die nächste Generation.
                </p>
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 font-medium text-lg transition-all duration-200 hover:gap-3"
                  style={{ color: "#C4952A" }}
                >
                  Erfahre mehr über unsere Mission <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 5. FORMATIONS TEASER ────────────────────────────────────────────── */}
      <section className="section-lg bg-white">
        <div className="container">
          <ScrollReveal className="mb-14">
            <span className="badge mb-4">Formationen</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#1A1A1A",
                }}
              >
                Entdecke Schweizer Formationen
              </h2>
              <Link
                href="/formations"
                className="inline-flex items-center gap-2 font-medium whitespace-nowrap transition-all duration-200 hover:gap-3"
                style={{ color: "#8B6914" }}
              >
                Alle Formationen <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 stagger">
            {formations.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 80}>
                <div className="card group overflow-hidden hover-lift">
                  <div className="relative img-zoom" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/2"
                      style={{ background: "linear-gradient(to top, rgba(26,26,26,0.8), transparent)" }}
                    />
                    {/* Tags overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="tag text-xs" style={{ background: "rgba(26,26,26,0.7)", color: "#FAF7F2" }}>
                        {f.region}
                      </span>
                      <span className="tag text-xs" style={{ background: "rgba(139,105,20,0.8)", color: "#FAF7F2" }}>
                        {f.style}
                      </span>
                    </div>
                    {/* Name over image bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3
                        className="text-white text-xl mb-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {f.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#8A8078" }}>
                      {f.desc}
                    </p>
                    <Link
                      href="/formations"
                      className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2"
                      style={{ color: "#8B6914" }}
                    >
                      Mehr erfahren <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link href="/formations" className="btn btn-outline">
              Alle Formationen entdecken
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 6. EVENTS TEASER ────────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#F0EBE1" }}>
        <div className="container">
          <ScrollReveal className="mb-14">
            <span className="badge mb-4">Events</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#1A1A1A",
                }}
              >
                Nächste Anlässe
              </h2>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-medium whitespace-nowrap transition-all duration-200 hover:gap-3"
                style={{ color: "#8B6914" }}
              >
                Alle Events <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {events.map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 70}>
                <div
                  className="hover-lift rounded-3xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #E8DFD0" }}
                >
                  <div
                    className="p-7 flex flex-col gap-5"
                  >
                    {/* Date badge */}
                    <div className="flex items-start justify-between">
                      <div
                        className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl"
                        style={{ background: "#1A1A1A" }}
                      >
                        <span
                          className="text-2xl font-bold leading-none"
                          style={{ fontFamily: "var(--font-playfair)", color: "#C4952A" }}
                        >
                          {ev.day}
                        </span>
                        <span className="text-xs font-semibold tracking-wider uppercase mt-0.5" style={{ color: "rgba(250,247,242,0.6)" }}>
                          {ev.month}
                        </span>
                      </div>
                      <span className="tag" style={{ background: "#FAF7F2", color: "#8B6914" }}>
                        {ev.type}
                      </span>
                    </div>

                    <div>
                      <h3
                        className="text-xl mb-2"
                        style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                      >
                        {ev.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm" style={{ color: "#8A8078" }}>
                        <MapPin size={13} />
                        {ev.location}
                      </div>
                    </div>

                    <Link href="/events" className="btn btn-dark self-start text-sm py-3 px-6">
                      Tickets
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link href="/events" className="btn btn-outline">
              Alle Events entdecken
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 7. MERCHANDISE TEASER ───────────────────────────────────────────── */}
      <section className="section-lg bg-white">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="badge mb-4">LAEMU Shop</span>
            <h2
              className="mb-3"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1A1A1A" }}
            >
              LAEMU Lifestyle
            </h2>
            <p className="text-lg" style={{ color: "#8A8078" }}>Trage deine Leidenschaft.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 stagger">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 70}>
                <div className="card group hover-lift">
                  <div className="relative img-zoom" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5" style={{ color: "#1A1A1A" }}>
                        {p.name}
                      </h3>
                      <span
                        className="text-sm font-bold"
                        style={{ fontFamily: "var(--font-playfair)", color: "#8B6914" }}
                      >
                        {p.price}
                      </span>
                    </div>
                    <Link
                      href="/shop"
                      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
                      style={{ background: "#1A1A1A", color: "#FAF7F2" }}
                      aria-label={`${p.name} kaufen`}
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link href="/shop" className="btn btn-dark">
              Zum Shop
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 8. FOUNDERS ─────────────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="badge mb-5">Team</span>
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#1A1A1A" }}
            >
              Zwei Stärken. Eine Mission.
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: "#8A8078" }}>
              LAEMU wurde von zwei Menschen gegründet, die die Ländlermusik von Herzen lieben.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name} direction={i === 0 ? "left" : "right"}>
                <div
                  className="rounded-4xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #E8DFD0" }}
                >
                  <div className="relative img-zoom" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.5))" }}
                    />
                  </div>
                  <div className="p-8">
                    <h3
                      className="text-2xl mb-1"
                      style={{ fontFamily: "var(--font-playfair)", color: "#1A1A1A" }}
                    >
                      {f.name}
                    </h3>
                    <p className="text-sm font-semibold mb-5 tracking-wide" style={{ color: "#8B6914" }}>
                      {f.role}
                    </p>
                    <p className="leading-relaxed mb-6" style={{ color: "#8A8078" }}>
                      {f.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. COMMUNITY TEASER ─────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#1A1A1A" }}>
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="badge mb-5" style={{ background: "rgba(139,105,20,0.2)", color: "#C4952A" }}>
              Community
            </span>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                color: "#FAF7F2",
              }}
            >
              Eine Gemeinschaft, die bewegt.
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "rgba(250,247,242,0.6)" }}>
              Verbinde dich mit Musikerinnen, Fans und Gleichgesinnten aus der ganzen Schweiz.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 stagger">
            {[
              { icon: "📸", title: "Teile deine Momente", desc: "Fotos, Videos, Fortschritte" },
              { icon: "🎵", title: "Inspire und werde inspiriert", desc: "Feed voller Ländlermusik" },
              { icon: "🤝", title: "Vernetze dich", desc: "Finde Gleichgesinnte in deiner Region" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80}>
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div className="text-4xl mb-5">{c.icon}</div>
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ color: "rgba(250,247,242,0.55)" }}>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center">
            <Link
              href="/community"
              className="btn"
              style={{
                background: "transparent",
                color: "#FAF7F2",
                borderColor: "rgba(250,247,242,0.4)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              Community beitreten
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 10. ACADEMY TEASER ──────────────────────────────────────────────── */}
      <section className="section-lg" style={{ background: "#F0EBE1" }}>
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="badge mb-5">Academy</span>
            <h2
              className="mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#1A1A1A" }}
            >
              Lerne von den Besten.
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#8A8078" }}>
              Die LAEMU Academy bietet Kurse für alle Instrumente und Stufen.
            </p>
          </ScrollReveal>

          {/* Instrument pills */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-16">
            {instruments.map((inst) => (
              <span
                key={inst}
                className="px-5 py-2.5 rounded-full text-sm font-semibold cursor-default transition-all duration-200 hover:scale-105"
                style={{
                  background: "#fff",
                  border: "1.5px solid #E8DFD0",
                  color: "#1A1A1A",
                }}
              >
                {inst}
              </span>
            ))}
          </ScrollReveal>

          {/* Pricing tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 70}>
                <div
                  className={`rounded-3xl p-8 h-full flex flex-col ${tier.highlight ? "pricing-highlight" : ""}`}
                  style={
                    !tier.highlight
                      ? { background: "#fff", border: "1px solid #E8DFD0" }
                      : {}
                  }
                >
                  {tier.highlight && (
                    <span className="badge self-start mb-5">Beliebteste Wahl</span>
                  )}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: tier.highlight ? "#FAF7F2" : "#1A1A1A",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <div className="mb-6">
                    <span
                      className="text-4xl font-bold"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: tier.highlight ? "#C4952A" : "#8B6914",
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="text-sm ml-1"
                      style={{ color: tier.highlight ? "rgba(250,247,242,0.55)" : "#8A8078" }}
                    >
                      {tier.sub}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: tier.highlight ? "rgba(250,247,242,0.8)" : "#8A8078" }}
                      >
                        <Star
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: tier.highlight ? "#C4952A" : "#8B6914" }}
                          fill={tier.highlight ? "#C4952A" : "#8B6914"}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/academy"
                    className={`btn w-full justify-center ${tier.highlight ? "btn-earth" : "btn-outline"}`}
                  >
                    Jetzt starten
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 font-semibold text-lg transition-all duration-200 hover:gap-3"
              style={{ color: "#8B6914" }}
            >
              Academy entdecken <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 11. FINAL CTA ───────────────────────────────────────────────────── */}
      <section
        className="section-lg relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 50%, #1A1200 100%)" }}
      >
        {/* Decorative glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,105,20,0.15) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p
              className="text-4xl mb-4"
              style={{ fontFamily: "var(--font-dancing)", color: "#C4952A" }}
            >
              Jetzt dabei sein
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                color: "#FAF7F2",
                lineHeight: 1.05,
              }}
            >
              Werde Teil der Mission.
            </h2>
            <p className="max-w-xl mx-auto text-lg" style={{ color: "rgba(250,247,242,0.6)" }}>
              Ob Musikerin, Fan, Lernender oder Veranstalter – LAEMU ist für dich da.
            </p>
          </ScrollReveal>

          {/* 4 ways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 stagger">
            {[
              { icon: "💡", title: "Ideen einbringen", desc: "Deine Vorschläge formen LAEMU" },
              { icon: "🎵", title: "Musik teilen", desc: "Zeige deine Formation" },
              { icon: "🎓", title: "Lernen & wachsen", desc: "Academy starten" },
              { icon: "🤝", title: "Community joinen", desc: "Vernetze dich" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div
                  className="p-7 rounded-3xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "#FAF7F2" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(250,247,242,0.5)" }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="flex flex-wrap justify-center gap-4">
            <Link href="/mitmachen" className="btn btn-earth text-base px-8 py-4">
              Jetzt registrieren
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/mission"
              className="btn text-base px-8 py-4"
              style={{
                background: "transparent",
                color: "#FAF7F2",
                borderColor: "rgba(250,247,242,0.35)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              Mehr erfahren
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
