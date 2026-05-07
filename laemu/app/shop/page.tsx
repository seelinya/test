import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, ArrowRight, Package } from "lucide-react";

export const metadata = {
  title: "Shop – LAEMU",
  description: "LAEMU Merchandise und Ländlermusik-Produkte.",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const categories = [
  "Alle",
  "Hoodies & Shirts",
  "Caps & Accessoires",
  "Musik & CDs",
  "Posters & Prints",
  "Formation-Merch",
];

const featuredProducts = [
  {
    name: "LAEMU Essential Hoodie",
    price: "CHF 79.–",
    colors: ["Schwarz", "Cream", "Forest"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    badge: "Bestseller",
  },
  {
    name: "LAEMU Classic Tee",
    price: "CHF 39.–",
    colors: ["Weiss", "Schwarz"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    badge: null,
  },
  {
    name: "LAEMU Cap",
    price: "CHF 34.–",
    colors: ["Schwarz", "Beige"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    badge: "Neu",
  },
  {
    name: "Ländlermusik Poster A2",
    price: "CHF 24.–",
    colors: ["Limited"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    badge: "Limited",
  },
];

const allProducts = [
  ...featuredProducts,
  {
    name: "LAEMU Sticker Pack",
    price: "CHF 9.–",
    colors: [],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
    badge: null,
  },
  {
    name: "Trio Alpenklang CD",
    price: "CHF 22.–",
    colors: [],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
    badge: "Formation",
  },
  {
    name: "LAEMU Tote Bag",
    price: "CHF 19.–",
    colors: [],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
    badge: null,
  },
  {
    name: "Handorgel Noten Vol. 1",
    price: "CHF 15.–",
    colors: ["Digital", "Print"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    badge: "Digital + Print",
  },
];

const reviews = [
  {
    text: "Der Hoodie ist unglaublich weich und das Design perfekt. Stolz ihn zu tragen!",
    author: "Sarah M.",
    stars: 5,
  },
  {
    text: "Super Qualität, schnelle Lieferung. LAEMU Merch ist ein Statement.",
    author: "Thomas B.",
    stars: 5,
  },
  {
    text: "Endlich Merch, das zeigt, dass Ländlermusik auch modern sein kann!",
    author: "Anna K.",
    stars: 5,
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80",
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProductCard({
  product,
  large = false,
}: {
  product: (typeof allProducts)[0];
  large?: boolean;
}) {
  return (
    <div className="card group bg-white overflow-hidden hover-lift">
      <div className={`img-zoom relative ${large ? "aspect-[4/3]" : "aspect-square"} bg-[#F0EBE1]`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="badge text-xs">{product.badge}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-colors duration-300" />
        <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8B6914] hover:text-white">
          <ShoppingCart size={16} />
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-[#1A1A1A] mb-1 leading-snug">{product.name}</h3>
        {product.colors.length > 0 && (
          <p className="text-[#8A8078] text-xs mb-3">{product.colors.join(" / ")}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-[#8B6914] font-bold text-lg">{product.price}</span>
          <button className="btn btn-dark text-sm py-2 px-4 rounded-full">
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left: Text */}
        <div className="bg-[#1A1A1A] flex items-center justify-center px-10 py-24 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <span className="badge mb-6">✦ Swiss Folk Culture</span>
            <h1
              className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trage deine Leidenschaft.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              LAEMU Merchandise und Ländlermusik-Produkte – inspiriert von der Schweizer
              Volkskultur.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#products" className="btn btn-earth">
                Zum Shop
                <ArrowRight size={18} />
              </Link>
              <Link href="#featured" className="btn btn-outline-white">
                Bestseller
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
              <div className="text-center">
                <div className="text-white font-bold text-xl">500+</div>
                <div className="text-white/50 text-xs">zufriedene Kunden</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-white font-bold text-xl">Swiss</div>
                <div className="text-white/50 text-xs">Made Quality</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-white font-bold text-xl">2–4</div>
                <div className="text-white/50 text-xs">Werktage Lieferung</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[60vw] lg:min-h-0 order-1 lg:order-2 img-zoom">
          <Image
            src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=900&q=80"
            alt="LAEMU Hoodie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────────── */}
      <section className="py-8 bg-[#F0EBE1] border-b border-[#E8DFD0] sticky top-[64px] z-30">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`shrink-0 px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  i === 0
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-white text-[#2C2C2C] border border-[#E8DFD0] hover:border-[#8B6914] hover:text-[#8B6914]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────────── */}
      <section id="featured" className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-2">
                Unsere Empfehlung
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Beliebte Produkte
              </h2>
            </div>
            <Link href="#products" className="hidden sm:flex items-center gap-2 text-[#8B6914] font-medium hover:underline">
              Alle ansehen <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} product={product} large />
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PRODUCTS ─────────────────────────────────────────────────────── */}
      <section id="products" className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alle Produkte
            </h2>
            <div className="flex items-center gap-2 text-sm text-[#8A8078]">
              <Package size={16} />
              <span>{allProducts.length} Produkte</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="card bg-white p-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} size={16} className="fill-[#C4952A] text-[#C4952A]" />
                  ))}
                </div>
                <p className="text-[#2C2C2C] leading-relaxed mb-6 text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E8DFD0] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#8B6914]">
                      {review.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-[#1A1A1A]">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSPIRATION GALLERY ──────────────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-10">
            <p
              className="text-[#C4952A] text-2xl"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Echte Menschen. Echte Leidenschaft.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`img-zoom relative rounded-2xl overflow-hidden ${
                  i === 0 ? "aspect-[3/4] row-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELL CTA ─────────────────────────────────────────────────────────── */}
      <section className="section bg-[#2C2C2C]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#8B6914]/20 mb-6">
              <Package size={28} className="text-[#C4952A]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Willst du deine Produkte über LAEMU verkaufen?
            </h2>
            <p className="text-white/65 text-lg mb-10 leading-relaxed">
              Ob Formation oder Einzelkünstler – biete deine Produkte direkt auf LAEMU an.
            </p>
            <Link href="/contact" className="btn btn-earth text-base px-10 py-4">
              Jetzt anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
