import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Music, ChevronRight, Users, Map } from "lucide-react";

export const metadata = {
  title: "Formationen – LAEMU",
  description: "Alle Schweizer Ländlermusik-Formationen auf einen Blick.",
};

const formations = [
  {
    id: "trio-alpenklang",
    name: "Trio Alpenklang",
    region: "Zentralschweiz",
    style: "Ländler / Walzer",
    desc: "Authentische Ländlermusik aus dem Herzen der Schweiz",
    tags: ["Trio", "Ländler"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80",
  },
  {
    id: "laendler-quintett-bern",
    name: "Ländler-Quintett Bern",
    region: "Bern",
    style: "Ländler / Schottisch",
    desc: "Fünf Musiker mit einem gemeinsamen Herzschlag",
    tags: ["Quintett", "Schottisch"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80",
  },
  {
    id: "die-alpinisten",
    name: "Die Alpinisten",
    region: "Appenzell",
    style: "Appenzeller / Walzer",
    desc: "Musik aus dem rauen und wunderschönen Appenzell",
    tags: ["Trio", "Appenzeller"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
  },
  {
    id: "formation-bergkristall",
    name: "Formation Bergkristall",
    region: "Zürich",
    style: "Ländler / Polka",
    desc: "Modern und doch tief in der Tradition verwurzelt",
    tags: ["Quartett", "Polka"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  },
  {
    id: "trio-engadin",
    name: "Trio Engadin",
    region: "Graubünden",
    style: "Ländler / Walzer",
    desc: "Die Seele des Engadins in Tönen",
    tags: ["Trio", "Walzer"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
  },
  {
    id: "kapelle-rottal",
    name: "Kapelle Rottal",
    region: "Zentralschweiz",
    style: "Ländler / Schottisch",
    desc: "Grosse Kapelle mit grossem Herz",
    tags: ["Kapelle", "Schottisch"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80",
  },
  {
    id: "laendlerbuben-uri",
    name: "Ländlerbuben Uri",
    region: "Uri",
    style: "Ländler",
    desc: "Junge Talente aus Uri",
    tags: ["Trio", "Ländler"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80",
  },
  {
    id: "duo-bergluft",
    name: "Duo Bergluft",
    region: "Bern",
    style: "Walzer / Ländler",
    desc: "Zwei Stimmen, eine Seele",
    tags: ["Duo", "Walzer"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
  },
];

const regions = [
  { name: "Zentralschweiz", count: 45 },
  { name: "Bern", count: 38 },
  { name: "Zürich", count: 32 },
  { name: "Ostschweiz", count: 28 },
  { name: "Graubünden", count: 22 },
];

export default function FormationenPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAF7F2] pt-32 pb-20">
        {/* Background image at 8% */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#8B6914]/5 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#2D4A22]/5 -translate-x-1/2 translate-y-1/3 pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#E8DFD0] bg-[#F0EBE1] text-[#8B6914] text-sm font-semibold tracking-widest uppercase">
            ✦ 500+ Formationen in der Schweiz
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Entdecke Schweizer
            <br />
            <span className="gradient-text">Formationen.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#8A8078] max-w-2xl mx-auto mb-10 leading-relaxed">
            Von kleinen Trios bis zu grossen Kapellen – finde die Formation, die dein Herz berührt.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A8078] pointer-events-none"
              />
              <input
                type="text"
                placeholder="Formation suchen..."
                className="input pl-14 pr-6 py-5 rounded-2xl text-base shadow-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-dark py-2 px-5 text-sm">
                Suchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ──────────────────────────────────────────── */}
      <section className="bg-[#F0EBE1] border-y border-[#E8DFD0]">
        <div className="container py-5">
          <div className="flex flex-wrap gap-6 items-start">
            {/* Stilrichtung */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Stil</span>
              {["Alle", "Ländler", "Schottisch", "Walzer", "Polka"].map((s, i) => (
                <button
                  key={s}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#8B6914] text-white border-[#8B6914]"
                      : "bg-white text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Region */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Region</span>
              {["Alle", "Zentralschweiz", "Bern", "Zürich", "Ostschweiz", "Wallis", "Graubünden"].map((r, i) => (
                <button
                  key={r}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#8B6914] text-white border-[#8B6914]"
                      : "bg-white text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Besetzung */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Besetzung</span>
              {["Alle", "Trio", "Quartett", "Quintett", "Kapelle"].map((b, i) => (
                <button
                  key={b}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#8B6914] text-white border-[#8B6914]"
                      : "bg-white text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Verfügbarkeit */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mr-1">Status</span>
              {["Alle", "Verfügbar", "Gebucht"].map((v, i) => (
                <button
                  key={v}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    i === 0
                      ? "bg-[#8B6914] text-white border-[#8B6914]"
                      : "bg-white text-[#2C2C2C] border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMATIONS GRID ─────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Verzeichnis</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Alle Formationen
              </h2>
            </div>
            <p className="text-[#8A8078] hidden md:block">8 von 500+ angezeigt</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {formations.map((f) => (
              <Link key={f.id} href={`/formations/${f.id}`} className="card hover-lift group block">
                {/* Image */}
                <div className="relative img-zoom" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[#8B6914] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Profil ansehen →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#8B6914] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {f.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#8A8078] mb-3">
                    <MapPin size={11} />
                    <span>{f.region}</span>
                    <span className="text-[#E8DFD0]">•</span>
                    <Music size={11} />
                    <span>{f.style}</span>
                  </div>

                  <p className="text-sm text-[#8A8078] line-clamp-2 mb-4">{f.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <button className="btn btn-outline">
              Mehr Formationen laden
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ─────────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Karte</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Entdecke deine Lieblingsformationen hautnah.
            </h2>
            <p className="text-[#8A8078] text-lg max-w-xl mx-auto">
              Finde Formationen in deiner Region.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DFD0] bg-white shadow-sm mb-8">
            <div className="flex items-center justify-center min-h-[420px] flex-col gap-6 p-12">
              {/* Stylized Switzerland outline suggestion */}
              <div className="relative w-64 h-44">
                <div className="absolute inset-0 bg-[#E8DFD0] rounded-[40%_60%_55%_45%/45%_35%_65%_55%]" />
                <div className="absolute inset-4 bg-[#F0EBE1] rounded-[35%_65%_60%_40%/50%_40%_60%_50%]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Map size={32} className="text-[#8B6914]" />
                </div>
                {/* Dot markers */}
                {[
                  { x: "35%", y: "45%" },
                  { x: "25%", y: "55%" },
                  { x: "60%", y: "38%" },
                  { x: "70%", y: "60%" },
                  { x: "80%", y: "45%" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-[#8B6914] border-2 border-white shadow-md"
                    style={{ left: pos.x, top: pos.y, transform: "translate(-50%,-50%)" }}
                  />
                ))}
              </div>

              <div className="text-center">
                <p className="text-[#2C2C2C] font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  Interaktive Karte
                </p>
                <p className="text-[#8A8078]">Formationen in deiner Region entdecken</p>
              </div>

              <button className="btn btn-earth">
                Karte öffnen
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Region pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <button
                key={r.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8DFD0] text-[#2C2C2C] font-medium hover:border-[#8B6914] hover:text-[#8B6914] transition-all shadow-sm"
              >
                <span>{r.name}</span>
                <span className="bg-[#F0EBE1] text-[#8B6914] text-xs font-bold px-2 py-0.5 rounded-full">
                  {r.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-6">
                <Users size={12} />
                Formation eintragen
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Fehlt deine Formation noch auf LAEMU?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Trage deine Formation ein und erreiche tausende Fans.
              </p>
              <button className="btn btn-earth">
                Formation eintragen
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Right */}
            <div className="md:border-l md:border-white/10 md:pl-8">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-6">
                <Search size={12} />
                Als Veranstalter
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Als Veranstalter
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Finde die perfekte Formation für deinen nächsten Anlass.
              </p>
              <button className="btn btn-outline-white">
                Formation suchen
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
