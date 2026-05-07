import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Music, Tag, ChevronRight, Plus } from "lucide-react";

export const metadata = {
  title: "Events – LAEMU",
  description: "Alle Ländlermusik-Events in der Schweiz.",
};

const events = [
  {
    id: 1,
    title: "Ländlerfest Luzern 2025",
    day: "15",
    month: "Juni",
    location: "Luzern",
    region: "Luzern",
    formation: "Trio Alpenklang",
    category: "Festival",
    price: "CHF 18.–",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    id: 2,
    title: "Alpsegen Abend Appenzell",
    day: "22",
    month: "Juni",
    location: "Appenzell",
    region: "Appenzell",
    formation: "Die Alpinisten",
    category: "Konzert",
    price: "Frei",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
  },
  {
    id: 3,
    title: "Sommerfest Bern",
    day: "5",
    month: "Juli",
    location: "Bern",
    region: "Bern",
    formation: "Ländler-Quintett Bern",
    category: "Festival",
    price: "CHF 12.–",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    id: 4,
    title: "Wirtshauskonzert Zürich",
    day: "12",
    month: "Juli",
    location: "Zürich",
    region: "Zürich",
    formation: "Formation Bergkristall",
    category: "Konzert",
    price: "CHF 8.–",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
  },
  {
    id: 5,
    title: "Ländler-Workshop Luzern",
    day: "19",
    month: "Juli",
    location: "Luzern",
    region: "Luzern",
    formation: "LAEMU Academy",
    category: "Workshop",
    price: "CHF 45.–",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    id: 6,
    title: "Herbstkonzert Graubünden",
    day: "2",
    month: "August",
    location: "Chur",
    region: "Graubünden",
    formation: "Trio Engadin",
    category: "Konzert",
    price: "CHF 20.–",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
];

const impressionImages = [
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80", tall: true },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", tall: false },
  { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80", tall: true },
];

const categoryColor = (cat: string) => {
  if (cat === "Festival") return "bg-[#2D4A22] text-[#FAF7F2]";
  if (cat === "Workshop") return "bg-[#8B6914] text-[#FAF7F2]";
  if (cat === "Tanzabend") return "bg-[#C4952A] text-[#FAF7F2]";
  return "bg-[#1A1A1A] text-[#FAF7F2]";
};

export default function EventsPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
          alt="Live Ländlermusik"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/80" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-widest uppercase">
            ✦ Events in der ganzen Schweiz
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Erlebe Ländlermusik
            <br />
            <span className="italic text-[#C4952A]">live.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Von kleinen Wirtshauskonzerten bis zu grossen Festivals – entdecke alle Anlässe in deiner Nähe.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#events" className="btn btn-earth text-base">
              Events entdecken
              <ChevronRight size={18} />
            </Link>
            <button className="btn btn-outline-white text-base">
              <Plus size={18} />
              Event eintragen
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scrollen</span>
          <div className="w-px h-10 bg-white/30" />
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────────────── */}
      <section className="sticky top-0 z-40 bg-[#FAF7F2] border-b border-[#E8DFD0] shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap gap-6 items-start">
            {/* Stilrichtung */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Stil</span>
              {["Alle", "Ländler", "Schottisch", "Walzer", "Mazurka"].map((s, i) => (
                <button
                  key={s}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                      : "bg-transparent text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Region */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Region</span>
              {["Alle", "Zentralschweiz", "Bern", "Zürich", "Appenzell", "Graubünden"].map((r, i) => (
                <button
                  key={r}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                      : "bg-transparent text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Anlass-Typ */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Typ</span>
              {["Alle", "Konzert", "Festival", "Workshop", "Tanzabend"].map((t, i) => (
                <button
                  key={t}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                      : "bg-transparent text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Datum */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Datum</span>
              {["Alle", "Diese Woche", "Diesen Monat", "Nächste 3 Monate"].map((d, i) => (
                <button
                  key={d}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A]"
                      : "bg-transparent text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS GRID ────────────────────────────────── */}
      <section id="events" className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Kalender</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Kommende Anlässe
              </h2>
            </div>
            <p className="text-[#8A8078] hidden md:block">6 Events gefunden</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <article key={event.id} className="card hover-lift group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-video img-zoom">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-lg">
                    <div className="text-2xl font-bold text-[#1A1A1A] leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                      {event.day}
                    </div>
                    <div className="text-xs font-semibold text-[#8B6914] uppercase tracking-wide mt-0.5">
                      {event.month}
                    </div>
                  </div>
                  {/* Category */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#8B6914] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#8A8078]">
                      <MapPin size={14} className="text-[#8B6914] shrink-0" />
                      <span>{event.location}, {event.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8A8078]">
                      <Music size={14} className="text-[#8B6914] shrink-0" />
                      <span>{event.formation}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0EBE1]">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.price === "Frei"
                          ? "bg-[#2D4A22]/10 text-[#2D4A22]"
                          : "bg-[#8B6914]/10 text-[#8B6914]"
                      }`}
                    >
                      {event.price}
                    </span>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] hover:text-[#8B6914] transition-colors">
                      Mehr erfahren
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline">
              Alle Events anzeigen
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── PAST IMPRESSIONS ────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Rückblick</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Stimmungsbilder vergangener Anlässe
            </h2>
            <p className="text-[#8A8078] italic text-lg" style={{ fontFamily: "var(--font-dancing)" }}>
              Echte Momente. Echte Emotion.
            </p>
          </div>

          {/* Masonry-like grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {impressionImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden img-zoom cursor-pointer"
                style={{ marginBottom: "1rem" }}
              >
                <div className={`relative w-full ${img.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={`Stimmungsbild ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BLOCKS ──────────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: dark */}
            <div className="relative rounded-3xl overflow-hidden bg-[#1A1A1A] p-10 md:p-12 flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B6914]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-6">
                  Für Veranstalter
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Planst du selber einen Anlass?
                </h3>
                <p className="text-white/60 text-lg mb-8">
                  Finde die passende Formation für dein Event.
                </p>
              </div>
              <Link href="/formations" className="btn btn-earth self-start">
                Formation suchen
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Right: earth/gold */}
            <div
              className="relative rounded-3xl overflow-hidden p-10 md:p-12 flex flex-col justify-between min-h-[300px]"
              style={{ background: "linear-gradient(135deg, #8B6914 0%, #C4952A 100%)" }}
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-6">
                  ✦ Exklusiv
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Exklusive LAEMU Events
                </h3>
                <p className="text-white/80 text-lg mb-8">
                  Werde Mitglied und erhalte Zugang zu exklusiven Community-Events.
                </p>
              </div>
              <button className="btn self-start bg-white text-[#8B6914] hover:bg-[#FAF7F2] font-semibold">
                Mitglied werden
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
