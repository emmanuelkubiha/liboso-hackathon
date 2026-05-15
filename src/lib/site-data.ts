export type Locale = "fr" | "en";

export const SERVICES = [
  { id: 1, name: { fr: "Nettoyage Maison", en: "Home Cleaning" }, price: "$25", duration: "2h", quality: "Premium", agents: 56 },
  { id: 2, name: { fr: "Nettoyage Bureau", en: "Office Cleaning" }, price: "$65", duration: "4h", quality: "Enterprise", agents: 31 },
  { id: 3, name: { fr: "Car Wash", en: "Car Wash" }, price: "$15", duration: "1h", quality: "Fast", agents: 44 },
  { id: 4, name: { fr: "Gestion des déchets", en: "Waste Management" }, price: "$40", duration: "3h", quality: "Certified", agents: 38 },
  { id: 5, name: { fr: "Jardinage", en: "Gardening" }, price: "$30", duration: "2h", quality: "Green", agents: 22 },
  { id: 6, name: { fr: "Nettoyage immeubles", en: "Building Cleaning" }, price: "$90", duration: "5h", quality: "Pro", agents: 19 },
  { id: 7, name: { fr: "Nettoyage vitres", en: "Window Cleaning" }, price: "$35", duration: "2h", quality: "Precision", agents: 26 },
  { id: 8, name: { fr: "Recyclage", en: "Recycling" }, price: "$45", duration: "3h", quality: "Eco", agents: 17 },
  { id: 9, name: { fr: "Services de ménage", en: "Housekeeping" }, price: "$20", duration: "2h", quality: "Trusted", agents: 61 },
  { id: 10, name: { fr: "Services urbains intelligents", en: "Smart Urban Services" }, price: "$120", duration: "6h", quality: "AI Powered", agents: 14 },
];

export const COUNTRIES = ["RDC", "Rwanda", "Kenya", "Tanzanie", "Ouganda"];

export const PAYMENTS = ["Airtel Money", "M-Pesa", "Orange Money", "Visa", "POS", "Cashless Payment"];

export const TEAM = ["Nathalie Kayemba", "Mwaka Alexandra", "Uwiri Conso"];

export const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/transfrontaliere", key: "cross" },
  { href: "/impact", key: "impact" },
  { href: "/dashboard", key: "dashboard" },
  { href: "/booking", key: "booking" },
  { href: "/investor", key: "investor" },
];

export const COPY = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      cross: "Transfrontalière",
      impact: "Impact social",
      dashboard: "Dashboard",
      booking: "Réservation",
      investor: "Investisseurs",
    },
    common: {
      mission: "Formaliser les services urbains africains grâce au digital.",
      cta: "Réserver un service",
      cta2: "Voir le dashboard",
      countries: "Pays couverts",
      innovation: "Innovation IA",
    },
    home: {
      title: "LIBOSO SERVICE",
      subtitle: "La plateforme qui professionnalise les services urbains physiques en Afrique.",
      problem: "80% des travailleurs en RDC sont dans l'informel. L'urbanisation rapide crée un besoin urgent de services fiables.",
      solution: "Nous connectons clients, agents et entreprises pour organiser, réserver, suivre et sécuriser les opérations.",
      flow: ["Choix service", "Adresse", "Date", "Paiement", "Confirmation", "Tracking agent"],
      stats: [
        { label: "Réservations/mois", value: "12,800+" },
        { label: "Agents actifs", value: "540" },
        { label: "Villes connectées", value: "18" },
      ],
      testimonials: ["Service ultra fiable et rapide.", "Une vraie solution africaine scalable.", "Parfait pour les entreprises multi-sites."],
      faq: [
        { q: "Liboso est-il mobile-first ?", a: "Le cœur du business est physique; le digital structure le terrain." },
        { q: "Paiement pris en charge ?", a: "Mobile Money, Visa, POS et cashless." },
      ],
    },
    about: {
      title: "Structurer l'économie urbaine africaine",
      body: "LIBOSO répond à l'urbanisation rapide, à l'informalité et au besoin d'inclusion des femmes et des jeunes avec une innovation digitale humaine.",
    },
    servicesPage: { title: "Catalogue de services" },
    cross: {
      title: "Pourquoi LIBOSO est un projet africain régional",
      body: "Rwanda hub stratégique, RDC marché principal, Kenya/Tanzanie/Ouganda partenaires régionaux pour une mobilité des services transfrontalière.",
    },
    impact: {
      title: "Impact social mesurable",
      body: "Création d'emplois, insertion des jeunes, autonomisation des femmes, hygiène urbaine et réduction des risques sanitaires.",
    },
    dashboard: { title: "Dashboard administrateur" },
    booking: { title: "Workflow de réservation" },
    investor: { title: "Investor Landing & Seed Fund" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cross: "Cross-border",
      impact: "Social impact",
      dashboard: "Dashboard",
      booking: "Booking",
      investor: "Investors",
    },
    common: {
      mission: "Formalizing African urban services through digital systems.",
      cta: "Book a service",
      cta2: "Open dashboard",
      countries: "Covered countries",
      innovation: "AI Innovation",
    },
    home: {
      title: "LIBOSO SERVICE",
      subtitle: "The platform professionalizing physical urban services across Africa.",
      problem: "80% of workers in DRC operate informally. Fast urbanization increases demand for trusted services.",
      solution: "We connect clients, agents, and businesses to organize, book, track, and secure operations.",
      flow: ["Select service", "Address", "Date", "Payment", "Confirmation", "Agent tracking"],
      stats: [
        { label: "Bookings/month", value: "12,800+" },
        { label: "Active agents", value: "540" },
        { label: "Connected cities", value: "18" },
      ],
      testimonials: ["Reliable and fast service.", "A truly scalable African startup.", "Perfect for multi-site companies."],
      faq: [
        { q: "Is Liboso mobile-first?", a: "Core business is physical; digital supports structuring and trust." },
        { q: "Supported payments?", a: "Mobile Money, Visa, POS and cashless." },
      ],
    },
    about: {
      title: "Structuring Africa's urban economy",
      body: "LIBOSO addresses rapid urbanization, informality, and inclusion of women and youth through human-centered digital innovation.",
    },
    servicesPage: { title: "Service catalog" },
    cross: {
      title: "Why LIBOSO is a regional African project",
      body: "Rwanda as strategic hub, DRC as primary market, Kenya/Tanzania/Uganda as regional partners enabling service mobility.",
    },
    impact: {
      title: "Measurable social impact",
      body: "Job creation, youth inclusion, women empowerment, urban hygiene and lower health risks.",
    },
    dashboard: { title: "Admin dashboard" },
    booking: { title: "Booking workflow" },
    investor: { title: "Investor Landing & Seed Fund" },
  },
};
