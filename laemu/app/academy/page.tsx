import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Trophy,
  Flame,
  TrendingUp,
  Target,
  Star,
  Music,
  Calendar,
  Users,
  Play,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "Academy – LAEMU",
  description: "Lerne Ländlermusik von den Besten.",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Kurs wählen",
    desc: "Finde den Kurs, der zu deinem Level und Instrument passt.",
  },
  {
    num: "02",
    title: "Zugang erhalten",
    desc: "Sofortiger Zugang zu allen Inhalten – jederzeit, überall.",
  },
  {
    num: "03",
    title: "Lernen & wachsen",
    desc: "Videos, PDFs, Live-Calls und die ganze Community.",
  },
  {
    num: "04",
    title: "Fortschritt feiern",
    desc: "Badges, Zertifikate und messbare Erfolge motivieren dich.",
  },
];

const instruments = [
  { emoji: "🪗", name: "Handorgel", count: 12 },
  { emoji: "🎹", name: "Schwyzerörgeli", count: 8 },
  { emoji: "🎹", name: "Piano", count: 6 },
  { emoji: "🎸", name: "Bass", count: 5 },
  { emoji: "🎷", name: "Klarinette", count: 4 },
  { emoji: "🎷", name: "Saxophon", count: 4 },
];

const teachers = [
  {
    name: "Maria Baumgartner",
    instruments: "Handorgel & Schwyzerörgeli",
    bio: "Preisgekrönte Musikerin mit über 20 Jahren Bühnenerfahrung und Passion fürs Lehren.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=400&q=80",
  },
  {
    name: "Kurt Niederberger",
    instruments: "Piano & Theorie",
    bio: "Konservatoriumsausbildung, spezialisiert auf das harmonische Fundament der Volksmusik.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Anna Steiner",
    instruments: "Bass & Ensemble",
    bio: "Rhythmikerin und Ensembleleiterin, die das Zusammenspiel in Formationen unterrichtet.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const gamification = [
  {
    icon: <Flame size={30} />,
    title: "Streaks",
    desc: "Lerne täglich und baue deinen Streak auf – Kontinuität ist der Schlüssel.",
  },
  {
    icon: <Trophy size={30} />,
    title: "Achievements",
    desc: "Verdiene Badges für Meilensteine und zeig deinen Fortschritt.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Fortschritte",
    desc: "Verfolge deine Entwicklung mit klaren Metriken und Lernpfaden.",
  },
  {
    icon: <Target size={30} />,
    title: "Ziele",
    desc: "Setze persönliche Ziele und feiere jeden Schritt auf dem Weg dahin.",
  },
];

const testimonials = [
  {
    quote:
      "Die Academy hat mein Spielen auf ein neues Level gebracht. Die Videos sind klar, die Lehrer fantastisch.",
    name: "Lisa M.",
    role: "Handorgel-Schülerin",
    stars: 5,
  },
  {
    quote:
      "Endlich eine Plattform, die Ländlermusik modern und zugänglich macht! Ich lerne schneller als je zuvor.",
    name: "Thomas B.",
    role: "Schwyzerörgeli",
    stars: 5,
  },
  {
    quote:
      "Die Community macht den Unterschied. Man lernt nicht allein – man wächst gemeinsam.",
    name: "Sandra K.",
    role: "Piano",
    stars: 5,
  },
];

const offlineEvents = [
  {
    icon: <Calendar size={24} />,
    title: "Lernwochenenden",
    desc: "2× jährlich in der Schweiz – intensives Lernen in der Gruppe.",
  },
  {
    icon: <Music size={24} />,
    title: "Sommercamps",
    desc: "Eine ganze Woche voller Musik, Kultur und Gemeinschaft.",
  },
  {
    icon: <Users size={24} />,
    title: "Live-Workshops",
    desc: "Mit renommierten Musikern – für direktes Feedback und Inspiration.",
  },
];

const faqs = [
  {
    q: "Für wen ist die Academy?",
    a: "Für alle, die Ländlermusik lernen wollen – von Anfänger bis Profi, unabhängig vom Instrument.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja, monatlich kündbar, keine Mindestlaufzeit, keine versteckten Gebühren.",
  },
  {
    q: "Ist Community inklusive?",
    a: "Ja! Jeder Academy-Zugang beinhaltet automatisch den vollen Community-Zugang für CHF 1.–/Monat.",
  },
  {
    q: "Gibt es Offline-Kurse?",
    a: "Ja, wir bieten Lernwochenenden, Sommercamps und Live-Workshops mit renommierten Musikern an.",
  },
  {
    q: "Welche Instrumente werden angeboten?",
    a: "Handorgel, Schwyzerörgeli, Piano, Bass, Klarinette und Saxophon – mit weiteren Instrumenten in Planung.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function AcademyPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2] pt-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            {/* Text */}
            <div>
              <span className="badge mb-6">✦ Online &amp; Offline lernen</span>
              <h1
                className="text-5xl sm:text-6xl xl:text-7xl font-bold text-charcoal leading-tight tracking-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Werde der Musiker,
                <br />
                <span className="gradient-text">der du sein willst.</span>
              </h1>
              <p className="text-warm-gray text-lg leading-relaxed mb-8 max-w-lg">
                Die LAEMU Academy bietet Videokurse, Live-Calls, Camps und mehr
                – für alle Instrumente und Stufen.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/mitmachen" className="btn btn-dark text-base px-8 py-4">
                  Kurs starten
                  <ArrowRight size={18} />
                </Link>
                <Link href="#kurse" className="btn btn-outline text-base px-8 py-4">
                  Kurse ansehen
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-warm-gray">
                {["Community inklusive", "Lernpfade", "Zertifikate"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
                      style={{ background: "linear-gradient(135deg, #2D4A22, #4A7A35)" }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {/* Decorative blob */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#8B6914]/10 to-[#2D4A22]/10 -z-10"
              />
              <div className="img-zoom rounded-[2rem] overflow-hidden aspect-[3/4] shadow-[0_40px_100px_rgba(26,26,26,0.15)]">
                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=80"
                  alt="Musiker beim Lernen"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_20px_60px_rgba(26,26,26,0.12)] p-5 border border-[#E8DFD0]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #8B6914, #C4952A)" }}
                  >
                    <Play size={18} className="text-white ml-0.5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-charcoal">39+</p>
                    <p className="text-xs text-warm-gray">Kurse verfügbar</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#2D4A22] text-white rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg">
                🎓 Zertifiziert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 container">
          <div className="text-center mb-14">
            <span
              className="text-[#C4952A] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Einfach loslegen
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              So funktioniert&apos;s
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-[#8B6914]/40 to-transparent z-10" />
                )}

                <div className="bg-[#2C2C2C]/80 border border-white/5 rounded-2xl p-7 hover:border-[#8B6914]/40 transition-all duration-300 hover:bg-[#2C2C2C]">
                  <div
                    className="text-3xl font-bold mb-4 gradient-text"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUMENTS ──────────────────────────────────────────────────── */}
      <section id="kurse" className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">
              <Music size={13} />
              Instrumente
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alle Instrumente
            </h2>
            <p className="text-warm-gray mt-4 text-lg max-w-lg mx-auto">
              Von der Handorgel bis zum Saxophon – wähle dein Instrument und starte noch heute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instruments.map((inst) => (
              <div
                key={inst.name}
                className="card p-8 group cursor-pointer hover-lift"
                style={{ borderWidth: "1px" }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {inst.emoji}
                </div>
                <h3
                  className="text-xl font-bold text-charcoal mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {inst.name}
                </h3>
                <p className="text-warm-gray text-sm mb-5">
                  {inst.count} Kurse verfügbar
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-[#E8DFD0] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(inst.count / 12) * 100}%`,
                        background: "linear-gradient(90deg, #8B6914, #C4952A)",
                      }}
                    />
                  </div>
                  <span className="text-xs text-earth font-semibold">
                    {inst.count} Kurse
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">Preise</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Wähle dein Level
            </h2>
            <p className="text-warm-gray mt-4 text-lg">
              Für jeden die richtige Option – jederzeit kündbar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Card 1 — Schnupperkurs */}
            <div className="card bg-white p-8 hover-lift flex flex-col">
              <div className="mb-6">
                <p className="text-warm-gray text-sm font-semibold uppercase tracking-widest mb-2">
                  Schnupperkurs
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-bold text-charcoal"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Kostenlos
                  </span>
                </div>
                <p className="text-warm-gray text-sm mt-2">
                  Schnuppervideos für jedes Instrument
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { ok: true, text: "2 Gratis-Lektionen pro Instrument" },
                  { ok: true, text: "Community-Preview" },
                  { ok: false, text: "Kein vollständiger Kurszugang" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        item.ok
                          ? "bg-[#E8F5E9] text-[#2D4A22]"
                          : "bg-[#F5E8E8] text-[#B00]"
                      }`}
                    >
                      {item.ok ? <Check size={10} /> : <X size={10} />}
                    </span>
                    <span className={item.ok ? "text-charcoal" : "text-warm-gray"}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/mitmachen" className="btn btn-outline w-full justify-center">
                Kostenlos starten
              </Link>
            </div>

            {/* Card 2 — Starterkurs (highlighted) */}
            <div className="pricing-highlight card p-8 hover-lift flex flex-col relative overflow-visible">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="badge bg-[#8B6914] text-[#FAF7F2] px-5 py-2 shadow-lg">
                  ✦ Beliebt
                </span>
              </div>

              <div className="mb-6 mt-3">
                <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-2">
                  Starterkurs
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    CHF 29.–
                  </span>
                  <span className="text-white/50 mb-1">/Monat</span>
                </div>
                <p className="text-white/50 text-sm mt-2">
                  Vollständiger Grundkurs-Zugang
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { ok: true, text: "Alle Grundkurs-Videos" },
                  { ok: true, text: "Vollständiger Community-Zugang" },
                  { ok: true, text: "Downloadbare PDFs & Noten" },
                  { ok: true, text: "Lernpfade & Badges" },
                  { ok: false, text: "Keine Live-Calls" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        item.ok
                          ? "bg-[#8B6914]/30 text-[#C4952A]"
                          : "bg-white/10 text-white/30"
                      }`}
                    >
                      {item.ok ? <Check size={10} /> : <X size={10} />}
                    </span>
                    <span className={item.ok ? "text-white" : "text-white/40"}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/mitmachen" className="btn btn-earth w-full justify-center">
                Starterkurs wählen
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Card 3 — Pro */}
            <div className="card bg-white p-8 hover-lift flex flex-col">
              <div className="mb-6">
                <p className="text-warm-gray text-sm font-semibold uppercase tracking-widest mb-2">
                  Pro-Kurs
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-bold text-charcoal"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    CHF 59.–
                  </span>
                  <span className="text-warm-gray mb-1">/Monat</span>
                </div>
                <p className="text-warm-gray text-sm mt-2">
                  Alles für ernsthafte Musiker
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {[
                  { ok: true, text: "Alles aus Starterkurs" },
                  { ok: true, text: "Monatliche Live-Calls mit Lehrern" },
                  { ok: true, text: "Persönliches Feedback" },
                  { ok: true, text: "Zugang zu Camps & Wochenenden" },
                  { ok: true, text: "Exklusive Profi-Kurse" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5E9] text-[#2D4A22]">
                      <Check size={10} />
                    </span>
                    <span className="text-charcoal">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="/mitmachen" className="btn btn-dark w-full justify-center">
                Pro werden
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHERS ─────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">Lehrer</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lerne von echten Musikern
            </h2>
            <p className="text-warm-gray mt-4 text-lg max-w-lg mx-auto">
              Unsere Lehrer sind aktive Profis – mit Bühnenerfahrung und Passion fürs Weitergeben.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teachers.map((t) => (
              <div key={t.name} className="card p-7 hover-lift text-center flex flex-col items-center">
                {/* Round photo */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 ring-[#E8DFD0] img-zoom relative flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-1">{t.name}</h3>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "#8B6914" }}
                >
                  {t.instruments}
                </p>
                <p className="text-warm-gray text-sm leading-relaxed mb-5">
                  {t.bio}
                </p>
                <Link
                  href="/formationen"
                  className="text-sm font-semibold text-earth hover:text-earth-light transition-colors flex items-center gap-1 group"
                >
                  Profil ansehen
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMIFICATION ─────────────────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#8B6914]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container">
          <div className="text-center mb-14">
            <span
              className="text-[#C4952A] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Gamified Learning
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lerne.{" "}
              <span className="gradient-text">Wachse.</span>
              {" "}Feiere.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gamification.map((g, i) => (
              <div
                key={i}
                className="bg-[#2C2C2C]/70 border border-white/5 rounded-2xl p-7 hover:border-[#8B6914]/40 hover:bg-[#2C2C2C] transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8B6914, #C4952A)",
                  }}
                >
                  {g.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {g.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">Stimmen</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was unsere Mitglieder sagen
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-8 hover-lift flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="fill-[#C4952A] text-[#C4952A]"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8DFD0]">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, #8B6914, #C4952A)`,
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-warm-gray">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFLINE EVENTS ───────────────────────────────────────────────── */}
      <section className="section bg-[#E8DFD0]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge mb-4">Mehr als nur Online</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Live erleben
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {offlineEvents.map((ev, i) => (
              <div
                key={i}
                className="card bg-white p-7 hover-lift text-center flex flex-col items-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white"
                  style={{
                    background: "linear-gradient(135deg, #2D4A22, #4A7A35)",
                  }}
                >
                  {ev.icon}
                </div>
                <h3 className="font-bold text-charcoal text-base mb-2">
                  {ev.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="badge mb-4">FAQ</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card bg-white overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-charcoal text-base leading-snug">
                      {faq.q}
                    </h3>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#F0EBE1" }}
                    >
                      <ChevronDown size={14} className="text-earth" />
                    </div>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed mt-3 pl-0">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Multiple glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#8B6914]/12 rounded-full blur-[130px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#2D4A22]/12 rounded-full blur-[130px]" />

        <div className="relative z-10 container text-center">
          <span
            className="text-[#C4952A] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Dein nächstes Kapitel beginnt jetzt
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bereit für dein nächstes
            <br />
            <span className="gradient-text">musikalisches Level?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Starte heute und werde Teil der LAEMU Academy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/mitmachen" className="btn btn-earth text-base px-10 py-4">
              Jetzt starten
              <ArrowRight size={18} />
            </Link>
            <Link href="#kurse" className="btn btn-outline-white text-base px-10 py-4">
              Alle Kurse
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 text-sm">
            <span className="flex items-center gap-2">
              <Users size={15} />
              1.200+ aktive Mitglieder
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Star size={15} />
              4.9/5 Bewertung
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Trophy size={15} />
              39+ Kurse
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
