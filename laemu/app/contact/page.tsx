import Image from "next/image";
import { Radio, Tv, Globe, Music2, Mail, Send, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Kontakt – LAEMU",
  description: "Kontaktiere das LAEMU-Team.",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const contactPersons = [
  {
    name: "Niklaus Hess",
    subtitle: "Volksmusik, Academy & Inhalte",
    description:
      "Bei Fragen zu Ländlermusik, Academy, Instrumenten oder musikalischen Inhalten.",
    topics: ["Volksmusik", "Academy", "Instrumente", "Inhalte"],
    email: "niklaus@laemu.ch",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    initials: "NH",
    color: "#2D4A22",
  },
  {
    name: "Selina Strickler",
    subtitle: "Branding, Partnerships & Marketing",
    description:
      "Bei Fragen zu Branding, Partnerschaften, Marketing, Events und Kooperationen.",
    topics: ["Branding", "Partnerschaften", "Marketing", "Events"],
    email: "selina@laemu.ch",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=400&q=80",
    initials: "SS",
    color: "#8B6914",
  },
];

const socialChannels = [
  {
    icon: Radio,
    platform: "Instagram",
    handle: "@laemu_ch",
    desc: "Täglich Inspiration & Stories",
    href: "#",
    color: "#E1306C",
    bg: "#FFF0F5",
  },
  {
    icon: Tv,
    platform: "YouTube",
    handle: "LAEMU TV",
    desc: "Videos, Kurse & Konzertaufnahmen",
    href: "#",
    color: "#FF0000",
    bg: "#FFF0F0",
  },
  {
    icon: Globe,
    platform: "Facebook",
    handle: "LAEMU Schweiz",
    desc: "Community & Ankündigungen",
    href: "#",
    color: "#1877F2",
    bg: "#EFF5FF",
  },
  {
    icon: Music2,
    platform: "Spotify",
    handle: "LAEMU Playlists",
    desc: "Die besten Ländlermusik-Playlists",
    href: "#",
    color: "#1DB954",
    bg: "#F0FFF4",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2] pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <p
              className="text-[#C4952A] text-3xl mb-4"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Wir hören dir zu.
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hallo.{" "}
              <span className="gradient-text">Schreib uns.</span>
            </h1>
            <p className="text-[#8A8078] text-xl leading-relaxed">
              Wir freuen uns über jede Nachricht – Ideen, Fragen, Kooperationen.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT PERSONS ──────────────────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {contactPersons.map((person, i) => (
              <div
                key={i}
                className="card bg-white overflow-hidden group"
              >
                {/* Top colored band */}
                <div
                  className="h-2 w-full"
                  style={{ background: person.color }}
                />
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 img-zoom">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-[#1A1A1A] mb-1"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {person.name}
                      </h3>
                      <p className="text-[#8B6914] text-sm font-medium">{person.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#2C2C2C] leading-relaxed mb-5">{person.description}</p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {person.topics.map((topic, j) => (
                      <span key={j} className="tag">{topic}</span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${person.email}`}
                    className="btn btn-dark w-full justify-center group/btn"
                  >
                    <Mail size={16} />
                    E-Mail schreiben
                    <ArrowRight
                      size={16}
                      className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200"
                    />
                  </a>

                  <p className="text-center text-[#8A8078] text-xs mt-3">{person.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-3">
                Direktkontakt
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Schick uns eine Nachricht.
              </h2>
            </div>

            <div className="card bg-white p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="deine@email.ch"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Betreff
                  </label>
                  <select className="input">
                    <option value="">Wähle ein Thema</option>
                    <option>Allgemein</option>
                    <option>Academy</option>
                    <option>Partnerschaft</option>
                    <option>Formation eintragen</option>
                    <option>Shop</option>
                    <option>Presse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Nachricht
                  </label>
                  <textarea
                    className="input"
                    rows={6}
                    placeholder="Deine Nachricht an LAEMU..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-full justify-center text-base py-4"
                >
                  <Send size={18} />
                  Nachricht senden
                </button>

                <p className="text-center text-[#8A8078] text-xs">
                  Wir melden uns in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL SECTION ───────────────────────────────────────────────────── */}
      <section className="section bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-14">
            <p
              className="text-[#C4952A] text-2xl mb-3"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Stay connected
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Verpasse keine News von LAEMU.
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Folge uns auf Social Media für Inspiration, News und behind the scenes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <a
                  key={i}
                  href={channel.href}
                  className="group block rounded-2xl overflow-hidden border border-white/10 bg-[#2C2C2C] hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 p-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: channel.bg }}
                  >
                    <Icon size={22} style={{ color: channel.color }} />
                  </div>
                  <div className="font-bold text-white mb-1">{channel.platform}</div>
                  <div className="text-[#C4952A] text-sm font-medium mb-2">{channel.handle}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{channel.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-white/40 text-xs group-hover:text-[#C4952A] transition-colors duration-200">
                    <span>Folgen</span>
                    <ArrowRight size={12} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
