import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Play,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Video,
  FileText,
  Mic,
  TrendingUp,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Mitgliederbereich – LAEMU",
  description: "Dein persönlicher LAEMU Bereich.",
};

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const communityFeatures = ["Profil", "Posts", "Reels", "Messaging", "Gruppen"];
const academyFeatures = ["Kurse", "Videos", "PDFs", "Live-Calls", "Fortschritt"];

const mockPosts = [
  {
    user: "hansruedi_musik",
    initials: "HR",
    color: "#2D4A22",
    time: "vor 2 Std.",
    text: "Heute unser erstes Konzert in Luzern 🎵 Was für ein Abend! Die Energie war unglaublich.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    likes: 142,
    comments: 28,
  },
  {
    user: "schwyzerorgeli_fan",
    initials: "SF",
    color: "#8B6914",
    time: "vor 4 Std.",
    text: "Gerade mit dem Schwyzerörgeli-Kurs angefangen. So viel Spass! Die Lehrvideos sind top erklärt.",
    image: null,
    likes: 87,
    comments: 14,
  },
  {
    user: "trio_bergklang",
    initials: "TB",
    color: "#C4952A",
    time: "vor 6 Std.",
    text: "Neue Aufnahme online! Schaut vorbei auf unserem Profil 🎶",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
    likes: 204,
    comments: 41,
  },
];

const suggestions = [
  { name: "Maria B.", initials: "MB", color: "#4A7A35", role: "Lehrerin" },
  { name: "Kurt N.", initials: "KN", color: "#7A5C1E", role: "Musiker" },
  { name: "Anna S.", initials: "AS", color: "#C4952A", role: "Schülärin" },
];

const myCourses = [
  {
    title: "Handorgel Grundkurs",
    teacher: "Maria Baumgartner",
    progress: 45,
    lessons: 24,
    done: 11,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
  },
  {
    title: "Walzer & Rhythmus",
    teacher: "Kurt Niederberger",
    progress: 20,
    lessons: 18,
    done: 4,
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80",
  },
];

const recommendedLessons = [
  {
    title: "Grundgriffe der Handorgel",
    duration: "12 min",
    teacher: "Maria B.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
  },
  {
    title: "Der perfekte Walzer-Rhythmus",
    duration: "18 min",
    teacher: "Kurt N.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&q=80",
  },
  {
    title: "Improvisation Basics",
    duration: "22 min",
    teacher: "Anna S.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MemberPage() {
  return (
    <>
      {/* ── OVERVIEW HERO / GATE ─────────────────────────────────────────────── */}
      <section className="section-lg bg-[#FAF7F2] pt-32">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-5">Mitgliederbereich</span>
            <h1
              className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Dein LAEMU Bereich.
            </h1>
            <p className="text-[#8A8078] text-xl">Wähle deinen Bereich.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Community Card */}
            <div className="rounded-3xl overflow-hidden bg-[#1A1A1A] text-white flex flex-col hover-lift">
              <div className="relative h-48 img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80"
                  alt="Community"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]" />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                    <Users size={22} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h2
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Community
                </h2>
                <p className="text-white/60 text-sm mb-5">Dein Social Feed für Ländlermusik</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {communityFeatures.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href="/community"
                    className="btn btn-outline-white w-full justify-center mb-3"
                  >
                    Community öffnen
                    <ArrowRight size={16} />
                  </Link>
                  <p className="text-center text-white/40 text-xs">CHF 1.–/Monat</p>
                </div>
              </div>
            </div>

            {/* Academy Card */}
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#8B6914] to-[#C4952A] text-white flex flex-col hover-lift">
              <div className="relative h-48 img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80"
                  alt="Academy"
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B6914]/80" />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
                    <BookOpen size={22} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-5 right-5">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Premium
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h2
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Academy
                </h2>
                <p className="text-white/70 text-sm mb-5">Deine Kurse und Lernpfade</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {academyFeatures.map((f, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium border border-white/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href="/academy"
                    className="btn bg-white text-[#8B6914] hover:bg-[#FAF7F2] w-full justify-center mb-3 font-semibold"
                  >
                    Academy öffnen
                    <ArrowRight size={16} />
                  </Link>
                  <p className="text-center text-white/60 text-xs">Ab CHF 29.–/Monat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY PREVIEW ────────────────────────────────────────────────── */}
      <section className="section bg-[#F0EBE1]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-3">
              Vorschau
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Community — Dein Social Feed
            </h2>
            <p className="text-[#8A8078] text-lg">Wie Instagram — aber für Ländlermusik.</p>
          </div>

          {/* Mock UI */}
          <div className="grid lg:grid-cols-[240px_1fr_220px] gap-6 max-w-5xl mx-auto">
            {/* Left: Profile Card */}
            <div className="card bg-white p-5 h-fit">
              <div className="w-16 h-16 rounded-2xl bg-[#E8DFD0] flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-[#8B6914]">Du</span>
              </div>
              <div className="text-center mb-4">
                <p className="font-semibold text-[#1A1A1A] text-sm">Dein Name</p>
                <p className="text-[#8A8078] text-xs mt-0.5">@dein_handle</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8DFD0]">
                <div className="text-center">
                  <p className="font-bold text-[#1A1A1A] text-sm">124</p>
                  <p className="text-[#8A8078] text-xs">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#1A1A1A] text-sm">89</p>
                  <p className="text-[#8A8078] text-xs">Following</p>
                </div>
              </div>
              <Link
                href="/community"
                className="btn btn-dark w-full justify-center text-xs py-2.5 mt-4"
              >
                Profil öffnen
              </Link>
            </div>

            {/* Center: Feed */}
            <div className="space-y-4">
              {mockPosts.map((post, i) => (
                <div key={i} className="card bg-white p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                      style={{ background: post.color }}
                    >
                      {post.initials}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#1A1A1A] text-sm">@{post.user}</p>
                      <p className="text-[#8A8078] text-xs">{post.time}</p>
                    </div>
                  </div>
                  <p className="text-[#2C2C2C] text-sm leading-relaxed mb-3">{post.text}</p>
                  {post.image && (
                    <div className="img-zoom rounded-xl overflow-hidden relative aspect-video mb-3">
                      <Image
                        src={post.image}
                        alt="Post"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 pt-3 border-t border-[#F0EBE1]">
                    <button className="flex items-center gap-1.5 text-[#8A8078] text-xs hover:text-[#8B6914] transition-colors">
                      <Heart size={14} />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-[#8A8078] text-xs hover:text-[#8B6914] transition-colors">
                      <MessageCircle size={14} />
                      {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Suggestions */}
            <div className="card bg-white p-5 h-fit">
              <p className="font-semibold text-[#1A1A1A] text-sm mb-4">Vorschläge</p>
              <div className="space-y-3">
                {suggestions.map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ background: s.color }}
                      >
                        {s.initials}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#1A1A1A]">{s.name}</p>
                        <p className="text-xs text-[#8A8078]">{s.role}</p>
                      </div>
                    </div>
                    <button className="text-[#8B6914] text-xs font-semibold hover:text-[#C4952A]">
                      Folgen
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-[#8A8078] text-sm mt-8">
            Wähle deinen Bereich und starte noch heute.
          </p>
        </div>
      </section>

      {/* ── ACADEMY PREVIEW ──────────────────────────────────────────────────── */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-3">
              Vorschau
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Academy — Deine Lernreise
            </h2>
            <p className="text-[#8A8078] text-lg">Kurse, Videos und mehr.</p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main content */}
            <div className="space-y-8">
              {/* My Courses */}
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-[#8B6914]" />
                  Meine Kurse
                </h3>
                <div className="space-y-4">
                  {myCourses.map((course, i) => (
                    <div key={i} className="card bg-white flex gap-4 p-4 items-center">
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 img-zoom">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#1A1A1A] text-sm mb-0.5 truncate">
                          {course.title}
                        </p>
                        <p className="text-[#8A8078] text-xs mb-3">von {course.teacher}</p>
                        <div className="flex items-center gap-3">
                          <div className="progress flex-1">
                            <div
                              className="progress-fill"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-[#8B6914] shrink-0">
                            {course.progress}%
                          </span>
                        </div>
                        <p className="text-xs text-[#8A8078] mt-1">
                          {course.done}/{course.lessons} Lektionen
                        </p>
                      </div>
                      <button className="btn btn-earth text-xs py-2 px-4 shrink-0">
                        Weiter
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Lessons */}
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-4 flex items-center gap-2">
                  <Play size={18} className="text-[#8B6914]" />
                  Empfohlene Lektionen
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {recommendedLessons.map((lesson, i) => (
                    <div key={i} className="card bg-white overflow-hidden group cursor-pointer">
                      <div className="relative aspect-video img-zoom">
                        <Image
                          src={lesson.image}
                          alt={lesson.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1A1A1A]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                            <Play size={14} className="text-[#8B6914] fill-[#8B6914] ml-0.5" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="font-medium text-[#1A1A1A] text-xs leading-snug mb-1 line-clamp-2">
                          {lesson.title}
                        </p>
                        <div className="flex items-center justify-between text-[#8A8078] text-xs">
                          <span>{lesson.teacher}</span>
                          <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Teacher of the day */}
            <div className="space-y-5">
              <div className="card bg-white overflow-hidden">
                <div className="bg-gradient-to-br from-[#8B6914] to-[#C4952A] p-5 text-white">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-1">
                    Dein Lehrer heute
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                        alt="Lehrer"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">Maria Baumgartner</p>
                      <p className="text-white/70 text-sm">Handorgel · 12 Jahre Erfahrung</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#2C2C2C] text-sm leading-relaxed mb-4">
                    Maria unterrichtet Handorgel und Schwyzerörgeli auf allen Niveaus.
                    Bekannt für ihre klare Didaktik.
                  </p>
                  <div className="space-y-2 mb-5">
                    {[
                      { icon: Video, text: "24 Lektionen verfügbar" },
                      { icon: FileText, text: "8 PDFs & Notenblätter" },
                      { icon: Mic, text: "Nächster Live-Call: Freitag" },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#8A8078]">
                          <Icon size={13} className="text-[#8B6914] shrink-0" />
                          {item.text}
                        </div>
                      );
                    })}
                  </div>
                  <Link href="/academy" className="btn btn-dark w-full justify-center text-sm py-2.5">
                    Zu Marias Kursen
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="card bg-white p-5">
                <p className="font-semibold text-[#1A1A1A] text-sm mb-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-[#8B6914]" />
                  Dein Fortschritt
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Lernminuten heute", value: "28 min" },
                    { label: "Abgeschlossene Lektionen", value: "15" },
                    { label: "Lernserie", value: "7 Tage 🔥" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0EBE1] last:border-0">
                      <span className="text-[#8A8078] text-xs">{stat.label}</span>
                      <span className="font-semibold text-[#1A1A1A] text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ──────────────────────────────────────────────────────────── */}
      <section className="section-lg bg-[#1A1A1A]">
        <div className="container">
          <div className="text-center mb-14">
            <Lock size={24} className="text-[#C4952A] mx-auto mb-4" />
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Noch kein Mitglied?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Wähle deinen Einstieg und werde Teil der LAEMU-Familie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Community CTA */}
            <div className="rounded-3xl bg-[#2C2C2C] border border-white/10 p-8 flex flex-col hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Community
              </h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Verbinde dich mit der Ländlermusik-Community. Teile Momente, entdecke Talente.
              </p>
              <ul className="space-y-2 mb-8">
                {communityFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle size={14} className="text-[#C4952A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold text-white">CHF 1.–</span>
                  <span className="text-white/50 text-sm">/Monat</span>
                </div>
                <Link href="/community" className="btn btn-outline-white w-full justify-center">
                  Jetzt starten
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Academy CTA */}
            <div className="rounded-3xl bg-gradient-to-br from-[#8B6914] to-[#C4952A] p-8 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 translate-x-10 -translate-y-10 blur-2xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Empfohlen
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Academy
                </h3>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">
                  Lerne von den besten Ländlermusik-Lehrern der Schweiz – in deinem Tempo.
                </p>
                <ul className="space-y-2 mb-8">
                  {academyFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white text-sm">
                      <CheckCircle size={14} className="text-white shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-3xl font-bold text-white">ab CHF 29.–</span>
                    <span className="text-white/70 text-sm">/Monat</span>
                  </div>
                  <Link
                    href="/academy"
                    className="btn bg-white text-[#8B6914] hover:bg-[#FAF7F2] w-full justify-center font-semibold"
                  >
                    Jetzt starten
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-10">
            Kein Abo-Zwang. Jederzeit kündbar. Swiss Made.
          </p>
        </div>
      </section>
    </>
  );
}
