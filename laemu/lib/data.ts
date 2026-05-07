// ─── Formations ──────────────────────────────────────────────────────────────

export const formations = [
  {
    id: "f1",
    name: "Ländlerkapelle Alpenstern",
    slug: "laendlerkapelle-alpenstern",
    description:
      "Eine traditionsreiche Kapelle aus dem Herzen der Innerschweiz, bekannt für ihren warmen Ländlersound und mitreissende Tanzmusik.",
    region: "Innerschweiz",
    style: "Ländler",
    members: [
      { name: "Hans Kälin", instrument: "Akkordeon" },
      { name: "Vreni Schuler", instrument: "Klarinette" },
      { name: "Toni Gisler", instrument: "Kontrabass" },
      { name: "Sepp Infanger", instrument: "Schwyzerörgeli" },
    ],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    location: "Schwyz",
    available: true,
    bookingEmail: "info@alpenstern.ch",
    tags: ["Tanzmusik", "Hochzeit", "Festival"],
  },
  {
    id: "f2",
    name: "Urnäscher Streichmusik",
    slug: "urnaescher-streichmusik",
    description:
      "Appenzeller Streichmusik vom Feinsten — geprägt von charakteristischem Naturjodel und virtuosem Geigenspiel.",
    region: "Appenzell",
    style: "Appenzeller Streichmusik",
    members: [
      { name: "Maria Dörig", instrument: "Geige" },
      { name: "Kari Sutter", instrument: "Geige" },
      { name: "Hansruedi Hug", instrument: "Cello" },
      { name: "Lisabeth Forrer", instrument: "Hackbrett" },
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    location: "Urnäsch, Appenzell Ausserrhoden",
    available: true,
    bookingEmail: "buchung@urnaescher-streichmusik.ch",
    tags: ["Streichmusik", "Naturjodel", "Konzert"],
  },
  {
    id: "f3",
    name: "Berner Schottisch Combo",
    slug: "berner-schottisch-combo",
    description:
      "Diese Berner Formation hat sich auf den mitreissenden Schottisch spezialisiert und begeistert Tanzbegeisterte in der ganzen Deutschschweiz.",
    region: "Bern",
    style: "Schottisch",
    members: [
      { name: "Beat Lüthi", instrument: "Schwyzerörgeli" },
      { name: "Heidi Gasser", instrument: "Klarinette" },
      { name: "Ueli Widmer", instrument: "Trompete" },
      { name: "Rosmarie Kohler", instrument: "Kontrabass" },
    ],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    location: "Burgdorf, Bern",
    available: false,
    bookingEmail: "kontakt@berner-schottisch.ch",
    tags: ["Schottisch", "Tanzmusik", "Volksmusik"],
  },
  {
    id: "f4",
    name: "Obwaldner Walzerklang",
    slug: "obwaldner-walzerklang",
    description:
      "Romantische Walzermelodien aus Obwalden — diese Formation verzaubert mit eleganten Klängen und souveräner Bühnenpräsenz.",
    region: "Innerschweiz",
    style: "Walzer",
    members: [
      { name: "Alois Wyrsch", instrument: "Akkordeon" },
      { name: "Marianne Nidecker", instrument: "Geige" },
      { name: "Franz Imfeld", instrument: "Kontrabass" },
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    location: "Sarnen, Obwalden",
    available: true,
    bookingEmail: "walzer@obwaldner-klang.ch",
    tags: ["Walzer", "Romantik", "Hochzeit"],
  },
  {
    id: "f5",
    name: "Toggenburger Stubeten",
    slug: "toggenburger-stubeten",
    description:
      "Echte Toggenburger Hausmusik, wie sie früher in den Stuben gespielt wurde — authentisch, herzlich und voller Lebensfreude.",
    region: "Ostschweiz",
    style: "Ländler",
    members: [
      { name: "Joggeli Brülisauer", instrument: "Schwyzerörgeli" },
      { name: "Anni Fässler", instrument: "Hackbrett" },
      { name: "Peter Rüegg", instrument: "Gitarre" },
      { name: "Susi Brunner", instrument: "Kontrabass" },
    ],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    location: "Lichtensteig, St. Gallen",
    available: true,
    bookingEmail: "stubeten@toggenburg.ch",
    tags: ["Hausmusik", "Stubeten", "Authentisch"],
  },
  {
    id: "f6",
    name: "Nidwaldner Dreiklang",
    slug: "nidwaldner-dreiklang",
    description:
      "Ein Trio aus Nidwalden mit einem modernen Ansatz zur traditionellen Volksmusik — frisch, lebendig und ausdrucksstark.",
    region: "Innerschweiz",
    style: "Ländler",
    members: [
      { name: "Kilian Bucher", instrument: "Akkordeon" },
      { name: "Franziska Odermatt", instrument: "Geige" },
      { name: "Dominik Niederberger", instrument: "Kontrabass" },
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    location: "Stans, Nidwalden",
    available: true,
    bookingEmail: "info@nidwaldner-dreiklang.ch",
    tags: ["Trio", "Modern", "Konzert"],
  },
  {
    id: "f7",
    name: "Glarner Polka-Express",
    slug: "glarner-polka-express",
    description:
      "Spritzige Polkaklänge aus dem Glarnerland — diese Formation sorgt garantiert für ausgelassene Stimmung auf jedem Fest.",
    region: "Ostschweiz",
    style: "Polka",
    members: [
      { name: "Elsbeth Schindler", instrument: "Klarinette" },
      { name: "Werner Hefti", instrument: "Trompete" },
      { name: "Rita Rhyner", instrument: "Akkordeon" },
      { name: "Bruno Blumer", instrument: "Schlagzeug" },
    ],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    location: "Glarus",
    available: false,
    bookingEmail: "polka@glarner-express.ch",
    tags: ["Polka", "Fest", "Tanzmusik"],
  },
  {
    id: "f8",
    name: "Schwyzer Mazurka Ensemble",
    slug: "schwyzer-mazurka-ensemble",
    description:
      "Selten zu hören, aber unvergesslich: dieses Ensemble pflegt die Mazurka-Tradition der Zentralschweiz mit grosser Hingabe.",
    region: "Innerschweiz",
    style: "Mazurka",
    members: [
      { name: "Ignaz Müller", instrument: "Schwyzerörgeli" },
      { name: "Theresia Betschart", instrument: "Geige" },
      { name: "Mathias Reichmuth", instrument: "Hackbrett" },
      { name: "Claudia Auf der Maur", instrument: "Kontrabass" },
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    location: "Einsiedeln, Schwyz",
    available: true,
    bookingEmail: "mazurka@schwyzer-ensemble.ch",
    tags: ["Mazurka", "Selten", "Konzert"],
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────

export const events = [
  {
    id: "e1",
    title: "Ländlerfest Brunnen",
    date: "2026-06-14",
    location: "Festplatz Brunnen",
    region: "Innerschweiz",
    type: "Festival",
    formation: "Ländlerkapelle Alpenstern",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Das grosse Ländlerfest am Vierwaldstättersee mit über einem Dutzend Formationen aus der ganzen Schweiz.",
    price: 25,
    tags: ["Festival", "Tanz", "Sommer"],
  },
  {
    id: "e2",
    title: "Appenzeller Musiknacht",
    date: "2026-07-05",
    location: "Landgasthof Hirsch, Urnäsch",
    region: "Appenzell",
    type: "Konzert",
    formation: "Urnäscher Streichmusik",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Eine Nacht voller Appenzeller Streichmusik und Naturjodel in gemütlicher Landgasthof-Atmosphäre.",
    price: 18,
    tags: ["Streichmusik", "Jodel", "Nacht"],
  },
  {
    id: "e3",
    title: "Tanzabend im Kulturzentrum Bern",
    date: "2026-07-19",
    location: "Kulturzentrum Reitschule, Bern",
    region: "Bern",
    type: "Tanzabend",
    formation: "Berner Schottisch Combo",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Lernen und tanzen Sie Schottisch unter fachkundiger Anleitung — für Anfänger und Fortgeschrittene.",
    price: 12,
    tags: ["Schottisch", "Tanzen", "Kurs"],
  },
  {
    id: "e4",
    title: "Alphüttenzauber Engelberg",
    date: "2026-08-02",
    location: "Alp Trübsee, Engelberg",
    region: "Innerschweiz",
    type: "Konzert",
    formation: "Obwaldner Walzerklang",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Ein unvergessliches Konzerterlebnis auf der Alp mit Panoramablick auf das Titlismassiv.",
    price: 35,
    tags: ["Alp", "Natur", "Walzer"],
  },
  {
    id: "e5",
    title: "Toggenburger Herbstmärt",
    date: "2026-09-13",
    location: "Dorfplatz Lichtensteig",
    region: "Ostschweiz",
    type: "Festival",
    formation: "Toggenburger Stubeten",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    description:
      "Der traditionelle Herbstmarkt von Lichtensteig mit Live-Volksmusik, Handwerk und regionalen Spezialitäten.",
    price: 0,
    tags: ["Markt", "Herbst", "Gratis"],
  },
  {
    id: "e6",
    title: "Winterkonzert Stans",
    date: "2026-12-06",
    location: "Pfarrkirche St. Peter und Paul, Stans",
    region: "Innerschweiz",
    type: "Konzert",
    formation: "Nidwaldner Dreiklang",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Adventliches Volksmusikkonzert in der historischen Pfarrkirche von Stans — ein Klangerlebnis für die ganze Familie.",
    price: 20,
    tags: ["Advent", "Konzert", "Familie"],
  },
  {
    id: "e7",
    title: "Glarner Polkafest",
    date: "2026-08-23",
    location: "Zaunplatz Glarus",
    region: "Ostschweiz",
    type: "Tanzfest",
    formation: "Glarner Polka-Express",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description:
      "Ausgelassenes Tanzfest im Freien mit Polka, Mazurka und Schottisch — Tanzschuhe mitbringen!",
    price: 10,
    tags: ["Polka", "Tanzen", "Freilicht"],
  },
  {
    id: "e8",
    title: "Einsiedler Volksmusikabend",
    date: "2026-10-18",
    location: "Hotel Sonne, Einsiedeln",
    region: "Innerschweiz",
    type: "Konzert",
    formation: "Schwyzer Mazurka Ensemble",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Ein besonderer Abend mit seltenen Mazurka-Melodien aus der Zentralschweiz in stilvoller Atmosphäre.",
    price: 22,
    tags: ["Mazurka", "Selten", "Abend"],
  },
];

// ─── Courses ──────────────────────────────────────────────────────────────────

export const courses = [
  {
    id: "c1",
    title: "Schwyzerörgeli für Einsteiger",
    instrument: "Schwyzerörgeli",
    level: "Anfänger",
    teacher: "Anna Holdener",
    price: 320,
    duration: "10 Wochen",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Der perfekte Einstieg ins Schwyzerörgeli — Sie lernen Grundgriffe, einfache Melodien und den typischen Ländlerrhythmus.",
    lessons: 10,
  },
  {
    id: "c2",
    title: "Hackbrett Fortgeschrittene",
    instrument: "Hackbrett",
    level: "Fortgeschritten",
    teacher: "Markus Haldemann",
    price: 480,
    duration: "12 Wochen",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Vertiefen Sie Ihre Hackbrett-Technik mit komplexeren Stücken, Improvisation und Ensemble-Spiel.",
    lessons: 12,
  },
  {
    id: "c3",
    title: "Volksmusikgeige — Grundkurs",
    instrument: "Geige",
    level: "Anfänger",
    teacher: "Elisabeth Zgraggen",
    price: 360,
    duration: "10 Wochen",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description:
      "Geige spielen lernen mit Fokus auf Schweizer Volksmusik — Haltung, Bogentechnik und erste Volksmelodien.",
    lessons: 10,
  },
  {
    id: "c4",
    title: "Akkordeon Profi-Workshop",
    instrument: "Akkordeon",
    level: "Profi",
    teacher: "Josef Schuler",
    price: 650,
    duration: "8 Wochen",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Intensiver Workshop für erfahrene Akkordeonisten: Stilistik, Phrasierung und musikalische Eigenständigkeit.",
    lessons: 8,
  },
  {
    id: "c5",
    title: "Klarinette in der Volksmusik",
    instrument: "Klarinette",
    level: "Fortgeschritten",
    teacher: "Heidi Amstutz",
    price: 420,
    duration: "10 Wochen",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Die Klarinette als Volksmusik-Instrument entdecken — Ornamentik, Verzierungen und Zusammenspiel.",
    lessons: 10,
  },
  {
    id: "c6",
    title: "Kontrabass für Volksmusiker",
    instrument: "Kontrabass",
    level: "Anfänger",
    teacher: "Markus Haldemann",
    price: 300,
    duration: "8 Wochen",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    description:
      "Das rhythmische Rückgrat der Volksmusikformation: Grundlagen des Kontrabassspiels im Volksmusiksetting.",
    lessons: 8,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: "t1",
    name: "Regula Schmid",
    text: "Dank LAEMU habe ich meine Leidenschaft für das Schwyzerörgeli neu entdeckt. Der Kurs war ausgezeichnet und die Gemeinschaft ist herzlich und einladend.",
    role: "Kursteilnehmerin, Schwyz",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    id: "t2",
    name: "Bruno Kälin",
    text: "Wir haben unsere Hochzeitsformation über LAEMU gebucht — unkompliziert, zuverlässig und die Musik war wunderschön. Unsere Gäste waren begeistert!",
    role: "Hochzeitsgast, Uri",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    id: "t3",
    name: "Klara Fässler",
    text: "Als Veranstalterin schätze ich die Verlässlichkeit der LAEMU-Formationen sehr. Top Qualität und professionelle Kommunikation.",
    role: "Eventorganisatorin, Appenzell",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    id: "t4",
    name: "Hans-Peter Wyrsch",
    text: "Der Hackbrett-Kurs hat mir als Fortgeschrittenem noch so viel Neues beigebracht. Markus ist ein fantastischer Lehrer mit viel Geduld.",
    role: "Kursteilnehmer, Obwalden",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    id: "t5",
    name: "Sonja Bucher",
    text: "Die Community auf LAEMU ist einzigartig. Man findet hier Menschen, die dieselbe Begeisterung für unsere musikalische Tradition teilen.",
    role: "Volksmusikerin, Nidwalden",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
  {
    id: "t6",
    name: "Fritz Infanger",
    text: "Endlich eine Plattform, die der Schweizer Volksmusik den Respekt entgegenbringt, den sie verdient. Grosses Kompliment an das LAEMU-Team!",
    role: "Musiker, Glarus",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const products = [
  {
    id: "p1",
    name: "Schwyzerörgeli «Alpenrose»",
    category: "Instrumente",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Handgefertigtes Schwyzerörgeli in G/C-Stimmung, ideal für Einsteiger und Fortgeschrittene.",
  },
  {
    id: "p2",
    name: "Hackbrett «Innerschwyzer»",
    category: "Instrumente",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description:
      "Konzerthackbrett in bewährter Handwerksqualität, optimal für Volksmusik und Kammermusik.",
  },
  {
    id: "p3",
    name: "Notenheft «Ländler und Schottisch»",
    category: "Noten",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Sammlung von 40 traditionellen Ländler- und Schottisch-Melodien für verschiedene Besetzungen.",
  },
  {
    id: "p4",
    name: "CD «Alpenklänge — Live»",
    category: "Tonträger",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Live-Aufnahme vom Ländlerfest Brunnen mit acht der beliebtesten Formationen aus der Innerschweiz.",
  },
  {
    id: "p5",
    name: "Trachten-Schürze bestickt",
    category: "Tracht & Accessoires",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    description:
      "Handbestückte Schürze in traditionellem Design, passend zur Innerschwyzer Frauentracht.",
  },
  {
    id: "p6",
    name: "Unterrichts-DVD «Örgeli lernen»",
    category: "Lehrmittel",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description:
      "Schritt-für-Schritt-Videokurs für Schwyzerörgeli-Anfänger mit Begleitheft und Noten.",
  },
  {
    id: "p7",
    name: "Klanghölzer «Alpentrio»",
    category: "Instrumente",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description:
      "Handgedrechselte Klanghölzer aus Schweizer Ahorn — für Rhythmus und Perkussion in der Volksmusik.",
  },
  {
    id: "p8",
    name: "Buch «Geschichte der Schweizer Volksmusik»",
    category: "Bücher",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    description:
      "Umfassendes Standardwerk zur Geschichte, Entwicklung und regionalen Vielfalt der Schweizer Volksmusik.",
  },
];

// ─── Teachers ─────────────────────────────────────────────────────────────────

export const teachers = [
  {
    id: "te1",
    name: "Anna Holdener",
    instrument: "Schwyzerörgeli",
    bio: "Anna Holdener ist in Muotathal aufgewachsen und spielt seit ihrem sechsten Lebensjahr Schwyzerörgeli. Sie hat an der Musikhochschule Luzern studiert und unterrichtet seit über zwanzig Jahren mit viel Herzblut.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    courses: 3,
  },
  {
    id: "te2",
    name: "Markus Haldemann",
    instrument: "Hackbrett & Kontrabass",
    bio: "Markus Haldemann ist Berufsmusiker und Pädagoge aus dem Berner Oberland. Sein besonderes Interesse gilt der Kammermusik und dem Ensemble-Unterricht. Er unterrichtet Hackbrett und Kontrabass mit individueller Förderung.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    courses: 2,
  },
  {
    id: "te3",
    name: "Elisabeth Zgraggen",
    instrument: "Geige",
    bio: "Elisabeth Zgraggen stammt aus Isenthal und ist eine der gefragtesten Volksmusikgeigerinnen der Innerschweiz. Sie vermittelt mit grosser Freude den typischen Urner Geigenstil an die nächste Generation.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    courses: 1,
  },
  {
    id: "te4",
    name: "Josef Schuler",
    instrument: "Akkordeon",
    bio: "Josef Schuler hat nach seiner klassischen Akkordeon-Ausbildung in Basel die Schweizer Volksmusik für sich entdeckt. Heute verbindet er beide Welten in seinem Unterricht und seinen Konzerten.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    courses: 1,
  },
];

// ─── Community Posts ──────────────────────────────────────────────────────────

export const communityPosts = [
  {
    id: "cp1",
    author: "Vreni Schuler",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Heute beim Stubeten-Abend in Schwyz so tolle neue Melodien gelernt! Wer kennt die Herkunft vom Stück «Muotathaler Abig»? Würde gerne mehr darüber erfahren. 🎶",
    image: null,
    likes: 24,
    comments: 7,
    time: "vor 2 Stunden",
  },
  {
    id: "cp2",
    author: "Toni Gisler",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Probenaufnahme von gestern Abend — wir arbeiten an einem neuen Arrangement für das Ländlerfest. Freue mich auf eure Rückmeldungen!",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    likes: 41,
    comments: 12,
    time: "vor 5 Stunden",
  },
  {
    id: "cp3",
    author: "Maria Dörig",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Suche Mitspielerin oder Mitspieler für unser Streichquartett in Appenzell. Geige oder Bratsche, Niveau fortgeschritten. Wir proben jeden Dienstag.",
    image: null,
    likes: 15,
    comments: 9,
    time: "vor 1 Tag",
  },
  {
    id: "cp4",
    author: "Beat Lüthi",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Das Alphüttenzauber-Konzert in Engelberg war einfach magisch. Walzer mit Blick aufs Titlismassiv — da vergisst man die Zeit!",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    likes: 88,
    comments: 21,
    time: "vor 2 Tagen",
  },
  {
    id: "cp5",
    author: "Klara Fässler",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Tipp für alle Schwyzerörgeli-Lernenden: Die Notenheft-Sammlung von LAEMU ist wirklich hervorragend zusammengestellt. Jeden Franken wert!",
    image: null,
    likes: 33,
    comments: 5,
    time: "vor 3 Tagen",
  },
  {
    id: "cp6",
    author: "Hansruedi Hug",
    avatar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content:
      "Wunderschöner Herbstabend auf der Alp mit der Toggenburger Stubeten. Diese Formation macht einfach Freude — authentisch bis ins Mark.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    likes: 57,
    comments: 14,
    time: "vor 4 Tagen",
  },
];
