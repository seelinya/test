import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Play, BookOpen, Users, ChevronRight, Star } from "lucide-react";

export const metadata = {
  title: "Mitgliederbereich – LAEMU",
  description: "Dein persönlicher LAEMU Bereich für Community und Academy.",
};

const mockPosts = [
  {
    user: "Hansruedi",
    initials: "HR",
    time: "vor 2 Std.",
    text: "Heute unser erstes Konzert in Luzern! Was für ein Abend 🎵",
    likes: 48,
    comments: 12,
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    user: "Lisa_Akkordeon",
    initials: "LA",
    time: "vor 5 Std.",
    text: "Gerade mit dem Schwyzerörgeli-Kurs fertig. Unglaublich, was möglich ist!",
    likes: 31,
    comments: 7,
    img: null,
  },
  {
    user: "trio_bergklang",
    initials: "TB",
    time: "gestern",
    text: "Neue Aufnahme online — schaut vorbei auf unserem Profil ♥",
    likes: 64,
    comments: 19,
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
  },
];

const mockCourses = [
  { title: "Handorgel Grundkurs", teacher: "Maria Baumgartner", progress: 45, lessons: 24, done: 11 },
  { title: "Walzer & Rhythmus", teacher: "Kurt Niederberger", progress: 20, lessons: 16, done: 3 },
];

const mockVideos = [
  { title: "Lektion 12: Schottisch-Rhythmus", course: "Handorgel Grundkurs", duration: "18 Min." },
  { title: "Lektion 4: Bassbegleitung", course: "Walzer & Rhythmus", duration: "22 Min." },
  { title: "Lektion 1: Einführung Schwyzerörgeli", course: "Schwyzerörgeli Basics", duration: "14 Min." },
];

export default function MemberPage() {
  return (
    <>
      {/* HERO — Choose area */}
      <section className="pt-32 pb-20" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="badge mb-4">✦ Dein persönlicher Bereich</span>
            <h1
              className="text-5xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Dein LAEMU Bereich.
            </h1>
            <p className="text-xl" style={{ color: "#8A8078" }}>
              Wähle deinen Bereich und tauche ein.
            </p>
          </div>

          {/* Two gateway cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Community */}
            <div
              className="rounded-3xl p-10 flex flex-col"
              style={{ background: "#1A1A1A" }}
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">👥</div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
                >
                  Community
                </h2>
                <p style={{ color: "rgba(250,247,242,0.6)" }}>
                  Dein Social Feed für Ländlermusik
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Profil", "Posts", "Reels", "Messaging", "Gruppen"].map((f) => (
                  <span
                    key={f}
                    className="tag"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(250,247,242,0.6)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Link href="/community" className="btn btn-earth w-full justify-center mb-3">
                  Community öffnen <ChevronRight size={16} />
                </Link>
                <p className="text-center text-sm" style={{ color: "rgba(250,247,242,0.35)" }}>
                  CHF 1.–/Monat
                </p>
              </div>
            </div>

            {/* Academy */}
            <div
              className="rounded-3xl p-10 flex flex-col"
              style={{ background: "linear-gradient(135deg, #8B6914, #C4952A)" }}
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">🎓</div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
                >
                  Academy
                </h2>
                <p style={{ color: "rgba(250,247,242,0.7)" }}>
                  Deine Kurse und Lernpfade
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Kurse", "Videos", "PDFs", "Live-Calls", "Fortschritt"].map((f) => (
                  <span
                    key={f}
                    className="tag"
                    style={{ background: "rgba(255,255,255,0.2)", color: "rgba(250,247,242,0.85)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Link href="/academy" className="btn btn-dark w-full justify-center mb-3">
                  Academy öffnen <ChevronRight size={16} />
                </Link>
                <p className="text-center text-sm" style={{ color: "rgba(250,247,242,0.5)" }}>
                  Ab CHF 29.–/Monat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PREVIEW */}
      <section className="section" style={{ background: "#F0EBE1" }}>
        <div className="container">
          <div className="mb-10">
            <span className="badge mb-4">Community Vorschau</span>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Community — Dein Social Feed
            </h2>
            <p style={{ color: "#8A8078" }}>
              Wie Instagram — aber für Ländlermusik.
            </p>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr_220px] gap-6">
            {/* Sidebar */}
            <div className="card p-6 h-fit">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                style={{ background: "#E8DFD0", color: "#8B6914" }}
              >
                DU
              </div>
              <div className="font-semibold mb-1">Dein Name</div>
              <div className="text-sm mb-4" style={{ color: "#8A8078" }}>@dein_profil</div>
              <div className="flex gap-4 text-sm">
                <div><span className="font-bold">12</span> <span style={{ color: "#8A8078" }}>Folge ich</span></div>
                <div><span className="font-bold">38</span> <span style={{ color: "#8A8078" }}>Follower</span></div>
              </div>
            </div>

            {/* Feed */}
            <div className="space-y-4">
              {mockPosts.map((p) => (
                <div key={p.user} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: "#E8DFD0", color: "#8B6914" }}
                    >
                      {p.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{p.user}</div>
                      <div className="text-xs" style={{ color: "#8A8078" }}>{p.time}</div>
                    </div>
                  </div>
                  <p className="mb-3 text-sm leading-relaxed">{p.text}</p>
                  {p.img && (
                    <div className="relative h-48 rounded-xl overflow-hidden mb-3 img-zoom">
                      <Image src={p.img} alt="Post" fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex gap-4 text-sm" style={{ color: "#8A8078" }}>
                    <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                      <Heart size={15} /> {p.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <MessageCircle size={15} /> {p.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            <div className="card p-6 h-fit">
              <div className="font-semibold mb-4">Vorschläge für dich</div>
              {[
                { name: "trio_alpenklang", initials: "TA" },
                { name: "schwyzerorgeli_ch", initials: "SC" },
                { name: "ländlermusik_fan", initials: "LF" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "#E8DFD0", color: "#8B6914" }}
                  >
                    {s.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">@{s.name}</div>
                  </div>
                  <button
                    className="text-xs font-semibold flex-shrink-0"
                    style={{ color: "#8B6914" }}
                  >
                    Folgen
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY PREVIEW */}
      <section className="section" style={{ background: "#FAF7F2" }}>
        <div className="container">
          <div className="mb-10">
            <span className="badge mb-4">Academy Vorschau</span>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Academy — Deine Lernreise
            </h2>
            <p style={{ color: "#8A8078" }}>Kurse, Videos und mehr auf einen Blick.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-6">
            {/* Main */}
            <div className="space-y-6">
              {/* My Courses */}
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen size={18} style={{ color: "#8B6914" }} /> Meine Kurse
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {mockCourses.map((c) => (
                    <div key={c.title} className="card p-6">
                      <div className="font-semibold mb-1">{c.title}</div>
                      <div className="text-sm mb-3" style={{ color: "#8A8078" }}>
                        {c.teacher}
                      </div>
                      <div className="progress mb-2">
                        <div className="progress-fill" style={{ width: `${c.progress}%` }} />
                      </div>
                      <div className="flex justify-between text-xs" style={{ color: "#8A8078" }}>
                        <span>{c.progress}% abgeschlossen</span>
                        <span>{c.done}/{c.lessons} Lektionen</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Star size={18} style={{ color: "#8B6914" }} /> Empfohlene Lektionen
                </h3>
                <div className="space-y-3">
                  {mockVideos.map((v) => (
                    <div key={v.title} className="card p-5 flex items-center gap-4 hover-lift cursor-pointer">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#F0EBE1", color: "#8B6914" }}
                      >
                        <Play size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">{v.title}</div>
                        <div className="text-xs" style={{ color: "#8A8078" }}>{v.course}</div>
                      </div>
                      <div className="text-xs font-medium flex-shrink-0" style={{ color: "#8A8078" }}>
                        {v.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Teacher card */}
            <div className="card p-6 h-fit">
              <div className="text-sm font-medium mb-4" style={{ color: "#8B6914" }}>
                Dein Lehrer heute
              </div>
              <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5f5?w=400&q=80"
                  alt="Teacher"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                Maria Baumgartner
              </div>
              <div className="text-sm mb-3" style={{ color: "#8A8078" }}>
                Handorgel & Schwyzerörgeli
              </div>
              <Link href="/academy" className="btn btn-dark w-full justify-center text-sm">
                Zur Lektion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN CTA (for non-members) */}
      <section className="section" style={{ background: "#1A1A1A" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
            >
              Noch kein Mitglied?
            </h2>
            <p className="mt-4" style={{ color: "rgba(250,247,242,0.55)" }}>
              Wähle deinen Einstieg und werde Teil von LAEMU.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-8 text-center"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
              >
                Community
              </h3>
              <div className="text-3xl font-bold mb-4" style={{ color: "#C4952A" }}>
                CHF 1.–<span className="text-base font-normal" style={{ color: "rgba(250,247,242,0.4)" }}>/Monat</span>
              </div>
              <Link href="/community" className="btn btn-earth w-full justify-center">
                Jetzt beitreten
              </Link>
            </div>
            <div
              className="rounded-3xl p-8 text-center"
              style={{ border: "1px solid rgba(139,105,20,0.4)", background: "rgba(139,105,20,0.1)" }}
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#FAF7F2" }}
              >
                Academy
              </h3>
              <div className="text-3xl font-bold mb-4" style={{ color: "#C4952A" }}>
                ab CHF 29.–<span className="text-base font-normal" style={{ color: "rgba(250,247,242,0.4)" }}>/Monat</span>
              </div>
              <Link href="/academy" className="btn btn-earth w-full justify-center">
                Jetzt starten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
