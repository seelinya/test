import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Music,
  Calendar,
  Users,
  DollarSign,
  Mail,
  Phone,
  ChevronRight,
  Play,
  ShoppingBag,
  ExternalLink,
  Heart,
} from "lucide-react";

export async function generateStaticParams() {
  return [{ id: "trio-alpenklang" }];
}

export const metadata = {
  title: "Trio Alpenklang – LAEMU",
  description: "Formation Profil: Trio Alpenklang",
};

const musicians = [
  {
    name: "Hans Müller",
    instrument: "Handorgel",
    bio: "Seit 20 Jahren Musiker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Maria Baumgartner",
    instrument: "Schwyzerörgeli",
    bio: "Verwurzelt in der Innerschweiz",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=400&q=80",
  },
  {
    name: "Peter Schmid",
    instrument: "Kontrabass",
    bio: "Rhythmus ist seine Seele",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
];

const mediaCards = [
  { title: "Live Aufnahme — Ländlerfest Luzern 2024", duration: "4:32" },
  { title: "Studio Session — Alpenklang Vol. 2", duration: "3:18" },
  { title: "Konzert Mitschnitt — Bern 2023", duration: "6:14" },
];

const upcomingEvents = [
  { date: "15. Juni", event: "Ländlerfest Luzern", location: "Luzern", cta: "Tickets" },
  { date: "22. Juli", event: "Sommerfest Bern", location: "Bern", cta: "Tickets" },
  { date: "5. August", event: "Herbstkonzert Uri", location: "Altdorf", cta: "Anmelden" },
];

const products = [
  { name: "Live CD: Alpenklang 2024", price: "CHF 22.–", type: "CD" },
  { name: "LAEMU x Alpenklang Hoodie", price: "CHF 79.–", type: "Merch" },
  { name: "Noten-Bundle Vol. 1", price: "CHF 15.–", type: "Noten" },
];

const similarFormations = [
  {
    name: "Trio Engadin",
    region: "Graubünden",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    id: "trio-engadin",
  },
  {
    name: "Die Alpinisten",
    region: "Appenzell",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
    id: "die-alpinisten",
  },
  {
    name: "Kapelle Rottal",
    region: "Zentralschweiz",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80",
    id: "kapelle-rottal",
  },
];

export default function FormationDetailPage() {
  return (
    <>
      {/* ── FORMATION HEADER ────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#1A1A1A]">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80"
          alt="Trio Alpenklang"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

        {/* Floating action */}
        <button className="absolute top-8 right-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all">
          <Heart size={15} />
          Merken
        </button>

        <div className="container relative z-10 pb-16">
          <Link
            href="/formations"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Alle Formationen
          </Link>

          {/* Region badge */}
          <div className="badge mb-5">
            <MapPin size={12} />
            Zentralschweiz
          </div>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trio Alpenklang
          </h1>

          <p
            className="text-xl md:text-2xl text-white/70 italic mb-8"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Wo die Berge singen, spielen wir.
          </p>

          {/* Style tags */}
          <div className="flex flex-wrap gap-3">
            {["Ländler", "Walzer", "Schottisch"].map((style) => (
              <span
                key={style}
                className="px-4 py-1.5 rounded-full border border-white/30 text-white text-sm font-medium backdrop-blur-sm bg-white/10"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ROW ───────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] pb-12">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { icon: MapPin, label: "Region", value: "Zentralschweiz" },
              { icon: Music, label: "Stil", value: "Ländler, Walzer" },
              { icon: Calendar, label: "Verfügbar", value: "Ab sofort" },
              { icon: Users, label: "Besetzung", value: "Trio" },
              { icon: DollarSign, label: "Booking", value: "Auf Anfrage" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-center hover:bg-white/10 hover:border-[#8B6914]/50 transition-all"
              >
                <Icon size={18} className="text-[#C4952A] mx-auto mb-2" />
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-white font-semibold text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + BOOKING ───────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: description */}
            <div className="lg:col-span-2">
              <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Über uns</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Das Trio Alpenklang
              </h2>

              <div className="space-y-5 text-[#2C2C2C] text-base leading-relaxed">
                <p>
                  Das Trio Alpenklang steht für authentische Ländlermusik aus dem Herzen der Schweiz. Die drei
                  Musiker verbindet eine tiefe Leidenschaft für die Schweizer Volksmusik und der Wunsch, diese
                  Kultur lebendig zu halten und weiterzutragen. Mit ihrer Handorgel, dem Schwyzerörgeli und dem
                  Kontrabass schaffen sie einen einzigartigen Klang, der sowohl traditionell als auch zeitgemäss ist.
                </p>
                <p>
                  Gegründet im Jahr 2008 in Luzern, hat das Trio Alpenklang seither zahlreiche Konzerte, Festivals
                  und private Veranstaltungen in der ganzen Schweiz gespielt. Von kleinen Wirtshausabenden bis zu
                  grossen Bühnen – die Musik von Trio Alpenklang berührt die Herzen der Menschen und bringt sie
                  zusammen.
                </p>
                <p>
                  Ihre Repertoire umfasst klassische Ländler, fröhliche Schottische, elegante Walzer und eigene
                  Kompositionen, die die Schönheit und Vielfalt der Schweizer Landschaft widerspiegeln. Jedes
                  Konzert ist ein einzigartiges Erlebnis, das das Publikum in die Welt der Schweizer Volksmusik
                  entführt.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="tag">Ländler</span>
                <span className="tag">Walzer</span>
                <span className="tag">Schottisch</span>
                <span className="tag">Trio</span>
                <span className="tag">Zentralschweiz</span>
                <span className="tag">Volksmusik</span>
              </div>
            </div>

            {/* Right: booking card (sticky) */}
            <div className="lg:col-span-1">
              <div className="card p-8 sticky top-24">
                <h3
                  className="text-2xl font-bold text-[#1A1A1A] mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Booking anfragen
                </h3>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:info@alpenklang.ch"
                    className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#8B6914] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F0EBE1] flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-[#8B6914]" />
                    </div>
                    <span className="text-sm font-medium">info@alpenklang.ch</span>
                  </a>
                  <a
                    href="tel:+41791234567"
                    className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#8B6914] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F0EBE1] flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-[#8B6914]" />
                    </div>
                    <span className="text-sm font-medium">+41 79 123 45 67</span>
                  </a>
                </div>

                <button className="btn btn-dark w-full justify-center mb-6">
                  Anfrage senden
                  <ChevronRight size={18} />
                </button>

                <div className="pt-5 border-t border-[#F0EBE1]">
                  <p className="text-xs font-semibold text-[#8A8078] uppercase tracking-wider mb-3">
                    Ideal für
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Hochzeiten", "Feste", "Konzerte", "Apéros"].map((item) => (
                      <span key={item} className="tag text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MUSICIANS ───────────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Team</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Die Musikerinnen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {musicians.map((m) => (
              <div key={m.name} className="card p-8 text-center group hover-lift">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover rounded-full ring-4 ring-[#E8DFD0] group-hover:ring-[#C4952A] transition-all duration-300"
                    sizes="112px"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-[#1A1A1A] mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {m.name}
                </h3>
                <p className="text-[#8B6914] font-semibold text-sm mb-3">{m.instrument}</p>
                <p className="text-[#8A8078] text-sm mb-5">{m.bio}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B6914] hover:text-[#C4952A] transition-colors"
                >
                  LAEMU Profil
                  <ExternalLink size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA / GALLERY ─────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Media</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Eindrücke &amp; Musik
              </h2>
            </div>
          </div>

          {/* Photo row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden img-zoom cursor-pointer">
                <Image
                  src={src}
                  alt={`Galerie ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Audio/video teaser cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mediaCards.map((media, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#F0EBE1] rounded-2xl px-5 py-4 border border-[#E8DFD0] hover:border-[#8B6914] transition-all cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:bg-[#8B6914] transition-colors">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1A1A1A] truncate">{media.title}</p>
                  <p className="text-xs text-[#8A8078] mt-0.5">{media.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT CALENDAR ──────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#C4952A] font-semibold text-sm tracking-widest uppercase mb-3">Live</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nächste Auftritte
              </h2>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/10 hover:border-[#8B6914]/50 transition-all group"
                >
                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <p className="text-[#C4952A] font-bold text-sm">{ev.date}</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div>
                      <p className="text-white font-semibold">{ev.event}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-white/40" />
                        <p className="text-white/50 text-sm">{ev.location}</p>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-earth py-2 px-4 text-sm">
                    {ev.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Shop</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Produkte von Trio Alpenklang
              </h2>
            </div>
            <Link
              href="#"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-[#8B6914] hover:text-[#C4952A] transition-colors"
            >
              Zum Shop
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="card hover-lift group cursor-pointer">
                {/* Product image placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-[#F0EBE1] to-[#E8DFD0] flex items-center justify-center">
                  <ShoppingBag size={40} className="text-[#C4952A]/40" />
                  <div className="absolute top-3 right-3">
                    <span className="badge text-xs">{product.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8B6914] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#8B6914]">{product.price}</span>
                    <button className="btn btn-dark py-2 px-4 text-sm">
                      Kaufen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMILAR FORMATIONS ──────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#8B6914] font-semibold text-sm tracking-widest uppercase mb-3">Entdecken</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ähnliche Formationen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarFormations.map((f) => (
              <Link key={f.id} href={`/formations/${f.id}`} className="card hover-lift group block">
                <div className="relative aspect-video img-zoom">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {f.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <MapPin size={12} />
                      {f.region}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 flex items-center justify-between">
                  <span className="text-sm text-[#8A8078]">Profil ansehen</span>
                  <ChevronRight size={16} className="text-[#8B6914] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/formations" className="btn btn-outline">
              Alle Formationen entdecken
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
