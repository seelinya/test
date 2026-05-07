import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Users,
  Camera,
  Music,
  Calendar,
  MapPin,
  Globe,
  Trophy,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Community – LAEMU",
  description: "Verbinde dich mit der Ländlermusik-Community.",
};

// ─── Mock Posts ────────────────────────────────────────────────────────────────

const posts = [
  {
    id: 1,
    user: "hansruedi_musik",
    initials: "HR",
    color: "#2D4A22",
    time: "vor 2 Std.",
    text: 'Heute unser erstes Konzert in Luzern 🎵 Was für ein Abend! Die Energie war unglaublich. #ländlermusik #livemusik',
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    likes: 142,
    comments: 28,
  },
  {
    id: 2,
    user: "schwyzerorgeli_fan",
    initials: "SF",
    color: "#8B6914",
    time: "vor 4 Std.",
    text: "Gerade mit dem Schwyzerörgeli-Kurs angefangen. So viel Spass! Die Lehrvideos sind top erklärt – ich lerne täglich dazu.",
    image: null,
    likes: 87,
    comments: 14,
  },
  {
    id: 3,
    user: "trio_bergklang",
    initials: "TB",
    color: "#C4952A",
    time: "vor 6 Std.",
    text: "Neue Aufnahme online! Schaut vorbei auf unserem Profil – wir freuen uns auf euer Feedback 🎶",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    likes: 204,
    comments: 41,
  },
  {
    id: 4,
    user: "musikfreunde_bern",
    initials: "MB",
    color: "#4A7A35",
    time: "vor 1 Tag",
    text: "Wer kommt zum Ländlerfest Luzern? Meldet euch – wir können gemeinsam reisen! 🚂 #ländlerfest",
    image: null,
    likes: 63,
    comments: 22,
  },
  {
    id: 5,
    user: "selina_akkordeon",
    initials: "SA",
    color: "#7A5C1E",
    time: "vor 1 Tag",
    text: "Mein Lieblingsmoment dieser Woche ♥️ Nach drei Monaten kann ich endlich meinen ersten Walzer durchspielen!",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&q=80",
    likes: 319,
    comments: 57,
  },
  {
    id: 6,
    user: "formation_alpensound",
    initials: "FA",
    color: "#2D4A22",
    time: "vor 2 Tagen",
    text: "Buchungen für Herbst 2025 sind offen! Wir spielen an Hochzeiten, Vereinsfesten & privaten Events. Anfragen via DM 🍂",
    image: null,
    likes: 98,
    comments: 19,
  },
];

// ─── Features ──────────────────────────────────────────────────────────────────

const features = [
  {
    icon: <Users size={26} />,
    title: "Eigenes Profil",
    desc: "Zeige deine Musik, Instrumente und Projekte der ganzen Community.",
  },
  {
    icon: <Camera size={26} />,
    title: "Posts & Reels",
    desc: "Teile Fotos, Videos und deinen Fortschritt mit Gleichgesinnten.",
  },
  {
    icon: <Music size={26} />,
    title: "Formationen entdecken",
    desc: "Folge deinen Lieblingsgruppen und bleib immer auf dem Laufenden.",
  },
  {
    icon: <MessageCircle size={26} />,
    title: "Direktnachrichten",
    desc: "Vernetze dich privat mit Musikerinnen und Musikern aus der ganzen Schweiz.",
  },
  {
    icon: <Globe size={26} />,
    title: "Regionalgruppen",
    desc: "Finde Gleichgesinnte in deiner Region und plane gemeinsame Auftritte.",
  },
  {
    icon: <Trophy size={26} />,
    title: "Challenges",
    desc: "Nimm an musikalischen Herausforderungen teil und zeige dein Können.",
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────

const events = [
  {
    title: "Ländlerfest Luzern",
    date: "15. Juni",
    type: "Community-Treffpunkt",
    location: "Luzern",
  },
  {
    title: "Online-Jam Session",
    date: "20. Juni",
    type: "Digital",
    location: "Online",
  },
  {
    title: "Schwyzerörgeli-Workshop",
    date: "28. Juni",
    type: "Workshop",
    location: "Zürich",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function CommunityPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
            alt="Community background"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          {/* Subtle radial pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/40" />
        </div>

        <div className="relative z-10 container text-center pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#8B6914]/20 border border-[#8B6914]/40 text-[#C4952A] px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-8">
            ✦ Für Musikerinnen, Fans &amp; Gleichgesinnte
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Die Gemeinschaft
            <br />
            <span className="gradient-text">der Ländlermusik.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Teile deine Musik, folge Formationen, vernetze dich mit
            Gleichgesinnten aus der ganzen Schweiz.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/mitmachen" className="btn btn-earth text-base px-8 py-4">
              Community beitreten
              <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="btn btn-outline-white text-base px-8 py-4">
              Mehr erfahren
            </Link>
          </div>

          {/* Pricing note */}
          <p className="text-white/40 text-sm tracking-wide">
            CHF 1.–/Monat &nbsp;|&nbsp; Automatisch inklusive mit Academy-Zugang
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-white/30">
            <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/40" />
          </div>
        </div>
      </section>

      {/* ── PREVIEW FEED ─────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="badge mb-4">Live Feed</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was die Community teilt
            </h2>
            <p className="text-warm-gray mt-4 text-lg max-w-xl mx-auto">
              Echte Momente, echte Musik – von Musikerinnen und Fans aus der ganzen Schweiz.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            }}
          >
            {posts.map((post) => (
              <article
                key={post.id}
                className="card hover-lift flex flex-col"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 p-5 pb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: post.color }}
                  >
                    {post.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-charcoal truncate">
                      @{post.user}
                    </p>
                    <p className="text-xs text-warm-gray">{post.time}</p>
                  </div>
                </div>

                {/* Post text */}
                <p className="px-5 py-2 text-sm text-charcoal/80 leading-relaxed">
                  {post.text}
                </p>

                {/* Optional image */}
                {post.image && (
                  <div className="img-zoom mt-2 mx-5 mb-2 rounded-xl overflow-hidden h-44 relative">
                    <Image
                      src={post.image}
                      alt={`Post von @${post.user}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-5 px-5 py-4 mt-auto border-t border-[#E8DFD0]/60">
                  <button className="flex items-center gap-1.5 text-warm-gray hover:text-[#8B6914] transition-colors text-sm group">
                    <Heart
                      size={15}
                      className="group-hover:fill-[#8B6914] group-hover:text-[#8B6914] transition-all"
                    />
                    <span className="font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-warm-gray hover:text-[#8B6914] transition-colors text-sm">
                    <MessageCircle size={15} />
                    <span className="font-medium">{post.comments}</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load more teaser */}
          <div className="text-center mt-12">
            <p className="text-warm-gray text-sm mb-4">
              Tausende weitere Posts warten auf dich…
            </p>
            <Link href="/mitmachen" className="btn btn-earth">
              Community beitreten &amp; alles sehen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">Funktionen</span>
            <h2
              className="text-4xl sm:text-5xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alles, was eine
              <br />
              <span className="gradient-text">Musik-Community braucht</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="card p-8 hover-lift bg-white group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #8B6914, #C4952A)",
                    color: "#FAF7F2",
                  }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {f.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE SPACE ──────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Image */}
            <div className="relative img-zoom rounded-[2rem] overflow-hidden aspect-[4/3] shadow-[0_30px_80px_rgba(26,26,26,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                alt="Sichere Community"
                fill
                className="object-cover"
              />
              {/* Decorative color overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2D4A22]/30 via-transparent to-[#8B6914]/10" />
            </div>

            {/* Text */}
            <div>
              <span className="badge mb-5">Exklusiver Raum</span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-charcoal mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ein sicherer Ort für
                <br />
                <span className="gradient-text">Musikerinnen und Fans.</span>
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                Die LAEMU Community ist ein geschützter Raum – nur für echte
                Mitglieder. Keine Algorithmen, kein Lärm. Nur echte Menschen,
                echte Musik.
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-10">
                {[
                  "Öffentliche & private Profile",
                  "Gruppen & Themen",
                  "Events teilen",
                  "Lernfortschritt teilen",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-charcoal">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                      style={{ background: "linear-gradient(135deg, #2D4A22, #4A7A35)" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/mitmachen" className="btn btn-dark inline-flex">
                Jetzt beitreten
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────────────────── */}
      <section className="section bg-[#E8DFD0]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge mb-4">
              <Calendar size={13} />
              Demnächst
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Community-Events
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="card bg-white p-6 hover-lift text-center"
              >
                <div
                  className="text-2xl font-bold mb-1 gradient-text"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {ev.date}
                </div>
                <h3 className="font-semibold text-charcoal text-sm mb-2">
                  {ev.title}
                </h3>
                <div className="flex items-center justify-center gap-1 text-warm-gray text-xs">
                  <MapPin size={11} />
                  <span>{ev.location}</span>
                </div>
                <span className="tag mt-3 text-xs">{ev.type}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/events" className="btn btn-outline text-sm py-3 px-7">
              Alle Events ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#1A1A1A] relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#8B6914]/10 blur-[120px]" />

        <div className="relative z-10 container text-center">
          <span
            className="text-[#C4952A] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Werde Teil von etwas Besonderem
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bereit, Teil der
            <br />
            <span className="gradient-text">Gemeinschaft zu werden?</span>
          </h2>

          {/* Pricing highlight */}
          <div className="inline-flex items-center gap-3 bg-[#8B6914]/20 border border-[#8B6914]/40 rounded-2xl px-6 py-4 mt-4 mb-4">
            <span className="text-4xl font-bold text-[#C4952A]" style={{ fontFamily: "var(--font-playfair)" }}>
              CHF 1.–
            </span>
            <span className="text-white/60 text-sm">/Monat</span>
          </div>

          <p className="text-white/50 text-sm mb-10">
            Automatisch inklusive mit jedem Academy-Kurs
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/mitmachen" className="btn btn-earth text-base px-8 py-4">
              Jetzt beitreten
              <ArrowRight size={18} />
            </Link>
            <Link href="/academy" className="btn btn-outline-white text-base px-8 py-4">
              Academy entdecken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
