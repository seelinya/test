import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Link2,
  Target,
  Heart,
  Music,
  Users,
  BookOpen,
  Calendar,
  Baby,
  Lightbulb,
  Star,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Mission – LAEMU",
  description: "Warum LAEMU existiert und was uns antreibt.",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const usps = [
  {
    icon: Link2,
    title: "Alles verbunden",
    desc: "Community, Academy, Events, Formationen, Shop, Streaming – alles unter einem Dach.",
  },
  {
    icon: Target,
    title: "Modern & authentisch",
    desc: "Wir modernisieren die Ländlermusik, ohne ihre Seele zu verlieren.",
  },
  {
    icon: Heart,
    title: "Von Musikern für Musiker",
    desc: "LAEMU wurde von Menschen gegründet, die die Ländlermusik von Herzen lieben.",
  },
];

const targetGroups = [
  {
    icon: Music,
    title: "Musikerinnen & Musiker",
    desc: "Zeige deine Musik, werde gebucht, lerne weiter.",
  },
  {
    icon: Users,
    title: "Formationen & Kapellen",
    desc: "Profitiere von Sichtbarkeit, Buchungen und Community.",
  },
  {
    icon: Heart,
    title: "Fans",
    desc: "Entdecke, erlebe und verbinde dich mit der Ländlermusik.",
  },
  {
    icon: BookOpen,
    title: "Lernende",
    desc: "Lerne von den Besten in der LAEMU Academy.",
  },
  {
    icon: Calendar,
    title: "Veranstalter",
    desc: "Finde die perfekte Formation für deinen Anlass.",
  },
  {
    icon: Baby,
    title: "Nächste Generation",
    desc: "Wir schaffen Zukunft für die Ländlermusik.",
  },
];

const founders = [
  {
    name: "Niklaus Hess",
    role: "Mitgründer",
    focus: "Volksmusik • Gemeinschaft • Kultur",
    bio: "Niklaus ist tief in der Schweizer Volksmusik-Kultur verwurzelt. Er kennt die Szene von innen, liebt die Musik und möchte ihr eine Zukunft schenken, die so lebendig ist wie ihre Geschichte.",
    responsibilities: ["Volksmusik-Expertise", "Netzwerk", "Musikalische Inhalte", "Gemeinschaftsaufbau"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    initials: "NH",
  },
  {
    name: "Selina Strickler",
    role: "Mitgründerin",
    focus: "Branding • Digital • Marketing",
    bio: "Selina ist Expertin in Branding, digitaler Strategie und modernem Marketing. Sie gibt LAEMU das Gesicht, die Stimme und die Kraft, um Ländlermusik modern und inspirierend zu positionieren.",
    responsibilities: ["Branding & Design", "Digitale Strategie", "Marketing", "Partnerschaften"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=500&q=80",
    initials: "SS",
  },
];

const teamColumns = [
  {
    title: "Lehrer",
    members: ["Maria Baumgartner", "Kurt Niederberger", "Anna Steiner", "Peter Müller"],
    cta: null,
  },
  {
    title: "Team",
    members: ["Niklaus Hess", "Selina Strickler"],
    cta: "Werde Teil des Teams",
  },
  {
    title: "Partner",
    members: [],
    cta: "Partner werden",
  },
  {
    title: "Verkauf",
    members: [],
    cta: "Sales-Partner anfragen",
  },
];

const contributions = [
  { icon: Lightbulb, label: "Ideen" },
  { icon: Music, label: "Talente" },
  { icon: BookOpen, label: "Wissen" },
  { icon: Zap, label: "Motivation" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MissionPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
            alt="Schweizer Berge"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/80" />
        </div>
        <div className="relative z-10 container text-center">
          <p
            className="text-[#C4952A] text-3xl md:text-4xl mb-4 animate-[fadeIn_1s_ease_forwards]"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Etwas Grosses beginnt immer
          </p>
          <h1
            className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            mit den Ersten.
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            LAEMU ist mehr als eine Plattform. Es ist ein Versprechen an die Ländlermusik
            und alle, die sie lieben.
          </p>
          <Link href="#story" className="btn btn-outline-white">
            Unsere Geschichte
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── WHAT IS LAEMU ────────────────────────────────────────────────────── */}
      <section id="story" className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"
              >
                Was ist LAEMU?
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Die zentrale Plattform für Schweizer Ländlermusik.
              </h2>
              <p className="text-[#2C2C2C] text-lg leading-relaxed mb-6">
                LAEMU entfacht das volle Potenzial der Ländlermusik – als starke, inspirierende
                und modern gelebte Kultur, die stolz getragen wird, Menschen berührt, verbindet
                und Zukunft schafft.
              </p>
              <p className="text-[#8A8078] text-base leading-relaxed">
                Wir bringen Musikerinnen, Fans, Lernende und Veranstalter an einen Ort. Digital
                und persönlich. Modern und authentisch. Für die heutige und die nächste Generation.
              </p>
            </div>
            <div className="img-zoom rounded-3xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                alt="Ländlermusik"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B6914]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── USPs ─────────────────────────────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was LAEMU einzigartig macht
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <div
                  key={i}
                  className="card bg-white p-10 text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F0EBE1] mb-6">
                    <Icon size={28} className="text-[#8B6914]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1A1A1A] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {usp.title}
                  </h3>
                  <p className="text-[#8A8078] leading-relaxed">{usp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ─────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Für wen ist LAEMU da?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-5 p-7 rounded-2xl border border-[#E8DFD0] bg-white hover:border-[#C4952A]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#F0EBE1] flex items-center justify-center group-hover:bg-[#8B6914] transition-colors duration-300">
                    <Icon size={22} className="text-[#8B6914] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">{group.title}</h3>
                    <p className="text-[#8A8078] text-sm leading-relaxed">{group.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ─────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-16">
            <p
              className="text-[#C4952A] text-2xl mb-3"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Zwei Stärken. Eine Mission.
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Zwei Stärken. Eine gemeinsame Mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden border border-white/10 bg-[#2C2C2C]"
              >
                <div className="relative h-72 img-zoom">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="badge">{founder.role}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {founder.name}
                  </h3>
                  <p className="text-[#C4952A] text-sm font-medium mb-4">{founder.focus}</p>
                  <p className="text-white/70 leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.responsibilities.map((r, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM NETWORK ─────────────────────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Das LAEMU-Netzwerk
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamColumns.map((col, i) => (
              <div key={i} className="card bg-white p-6">
                <h3 className="font-bold text-[#8B6914] text-sm tracking-widest uppercase mb-5">
                  {col.title}
                </h3>
                <div className="space-y-3 mb-5">
                  {col.members.map((member, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#E8DFD0] flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-[#8B6914]">
                          {member.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <span className="text-sm text-[#2C2C2C] font-medium">{member}</span>
                    </div>
                  ))}
                </div>
                {col.cta && (
                  <Link
                    href="/contact"
                    className="block text-center py-2.5 px-4 rounded-full border border-[#8B6914] text-[#8B6914] text-sm font-medium hover:bg-[#8B6914] hover:text-white transition-all duration-200"
                  >
                    + {col.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVE CONTRIBUTION CTA ──────────────────────────────────────────── */}
      <section className="section-lg bg-[#8B6914] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C4952A]/20 translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#1A1A1A]/20 -translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="container relative z-10 text-center">
          <p
            className="text-white/70 text-2xl mb-2"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Mach den Unterschied
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Werde aktiv.
          </h2>
          <p className="text-white/80 text-lg mb-12">
            LAEMU lebt von Menschen wie dir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contributions.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon size={28} className="text-white" />
                  <span className="text-white font-semibold">{c.label}</span>
                </div>
              );
            })}
          </div>

          <Link href="/contact" className="btn bg-white text-[#8B6914] hover:bg-[#FAF7F2] text-base font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            Mach mit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
