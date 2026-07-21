import { useState, useEffect } from "react";
import {
  Menu, X, Phone, MessageCircle, ArrowRight, MapPin, Mail,
  CheckCircle, Settings, Wrench, Flame, Shuffle, ChevronRight,
  Award, BadgeCheck, Star, Download
} from "lucide-react";

const PHONE = "8919923633";
const WA_NUM = "918919923633";
const EMAIL = "pppatnaikt3s@gmail.com";
const ADDRESS = "Road No. 3, Alkapuri Colony, Kothapet, Hyderabad, Telangana – 500035";
const NAV = ["About", "Services", "Products", "Gallery", "Contact"];

/* ─── Logo ─────────────────────────────────────────────────────────── */
function SapLogo({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#ffffff" : "#0d1a2e";
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="SAP Engineering Works"
        className="h-14 w-auto"
      />
      <span
        className="ml-3 font-black whitespace-nowrap"
        style={{ color: textColor, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em", fontSize: "1.4rem", lineHeight: 1 }}
      >
        SAP ENGINEERING WORKS
      </span>
    </div>
  );
}

function SectionDivider({ color = "#fff" }: { color?: string }) {
  return (
    <div className="overflow-hidden" style={{ lineHeight: 0 }}>
      <svg className="w-full h-20 block" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,120 900,0 1200,80 L1200,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────────── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#fdfdf8] transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <SapLogo dark={false} />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                className="text-[#0d1a2e] hover:text-[#c49a28] text-sm font-semibold tracking-widest uppercase transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => scrollTo("Contact")}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide uppercase text-white transition-all hover:opacity-90"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0d1a2e", letterSpacing: "0.08em" }}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Get Quote
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#0d1a2e] hover:text-[#c49a28] transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        style={{ background: "rgba(13,26,46,0.55)", backdropFilter: "blur(3px)" }}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] flex flex-col md:hidden transition-transform duration-300`}
        style={{
          background: "#0d1a2e",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          borderLeft: "1px solid rgba(196,154,40,0.25)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <SapLogo dark />
          <button onClick={() => setMenuOpen(false)} className="text-white/50 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-1 px-5 py-6 gap-0.5">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              className="text-left text-white/80 hover:text-[#c49a28] py-3 text-base font-bold tracking-widest uppercase flex items-center gap-2 group transition-colors border-b border-white/5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
            >
              <ChevronRight className="w-4 h-4 text-[#c49a28] opacity-0 group-hover:opacity-100 transition-opacity" />
              {n}
            </button>
          ))}
        </div>
        <div className="px-5 py-5 flex flex-col gap-3 border-t border-white/10">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 py-3 font-bold tracking-widest text-sm uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#1c3057" }}
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${WA_NUM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 font-bold tracking-widest text-sm uppercase text-[#0d1a2e]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#25D366" }}
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20" style={{ background: "#0d1a2e" }}>
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Industrial engineering facility"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0d1a2e 50%, rgba(13,26,46,0.7) 100%)" }} />
      </div>
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "linear-gradient(to bottom, #c49a28, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl md:-ml-86 lg:-ml-95">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#c49a28]" />
            <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
              Industrial Engineering Solutions
            </span>
          </div>

          <h1
            className="font-black text-white leading-[0.95] uppercase mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Engineering<br />Excellence<br />Built For{" "}
            <span style={{ color: "#c49a28" }}>Modern<br />Industries</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Barlow', sans-serif" }}>
            SAP Engineering Works manufactures Industrial Pipe Fittings, Flanges, Steel Fabrication, Pipe Spooling, IBR & Non-IBR Components and Custom Engineering Solutions — delivered with precision across India.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition-all hover:brightness-110"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#c49a28", color: "#0d1a2e", letterSpacing: "0.1em" }}
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${WA_NUM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition-all"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              "IBR & Non-IBR",
              "Pan India Supply",
              "Quality Manufacturing",
              "Custom Engineering Solutions",
            ].map((label) => (
              <div
                key={label}
                className="py-4 px-4 text-center flex flex-col items-center justify-center gap-2"
                style={{ background: "rgba(13,26,46,0.8)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#c49a28]" />
                <span className="text-white/80 text-xs font-semibold tracking-wide leading-tight" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden" style={{ background: "#1c3057" }}>
              <img
                src="/about.png"
                alt="SAP Engineering Works production floor"
                className="w-full h-full object-cover aspect-[5/4]"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 px-6 py-4"
              style={{ background: "#c49a28" }}
            >
              <div className="text-[#0d1a2e] font-black text-4xl leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>3+</div>
              <div className="text-[#0d1a2e] text-[10px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Years of Precision</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c49a28]" />
              <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>About Us</span>
            </div>
            <h2
              className="text-[#0d1a2e] font-black leading-tight mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Precision Engineering You Can Build On
            </h2>
            <p className="text-[#5a6476] leading-relaxed mb-4" style={{ fontFamily: "'Barlow', sans-serif" }}>
              SAP Engineering Works is a trusted manufacturer of industrial pipe fittings, flanges and steel fabrication solutions. Built on a foundation of quality, precision and durability, we deliver components that perform reliably in the most demanding industrial environments.
            </p>
            <p className="text-[#5a6476] leading-relaxed mb-8" style={{ fontFamily: "'Barlow', sans-serif" }}>
              With deep industrial expertise and a commitment to on-time delivery, we serve projects across India and support fully custom engineering requirements — from single components to complete fabricated assemblies.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Quality-first manufacturing",
                "On-time project delivery",
                "Custom engineering support",
                "Pan-India supply network",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#c49a28] flex-shrink-0" />
                  <span className="text-[#0d1a2e] text-sm font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 5, suffix: "+", label: "Industries Served" },
    { value: 1000, suffix: "+", label: "Products Delivered" },
    { value: 3, suffix: "+", label: "Years of Expertise" },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCounts(stats.map((s) => Math.round(s.value * progress)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section style={{ background: "#0d1a2e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {stats.map((s, index) => (
            <div key={s.label} className="py-12 px-8 text-center">
              <div
                className="text-5xl font-black text-[#c49a28] leading-none mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {counts[index].toLocaleString()}
                {s.suffix}
              </div>
              <div className="text-white/50 text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <Settings className="w-5 h-5 text-[#c49a28]" />,
    title: "IBR & Non-IBR Pipe Fittings",
    desc: "Precision-manufactured fittings certified to IBR and Non-IBR standards for high-pressure and general industrial piping systems.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-[#c49a28]" />,
    title: "Steel Fabrication",
    desc: "Custom structural and heavy steel fabrication engineered to spec, built for strength, durability and long service life.",
  },
  {
    icon: <Flame className="w-5 h-5 text-[#c49a28]" />,
    title: "Fire Fighting Systems",
    desc: "Complete fire suppression piping networks — headers, sprinkler systems, and hose reel assemblies for industrial and commercial facilities.",
  },
  {
    icon: <Shuffle className="w-5 h-5 text-[#c49a28]" />,
    title: "Pipe Spooling",
    desc: "Pre-fabricated pipe spool assemblies manufactured off-site for faster installation, reduced downtime and precise dimensional accuracy.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c49a28]" />
          <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Our Services</span>
        </div>
        <h2
          className="text-[#0d1a2e] font-black leading-tight mb-4 max-w-xl"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          Engineering Capabilities That Deliver
        </h2>
        <p className="text-[#5a6476] max-w-xl mb-12" style={{ fontFamily: "'Barlow', sans-serif" }}>
          End-to-end fabrication and fitting solutions engineered to meet the highest industrial standards.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="p-8 border border-[#0d1a2e]/8 hover:border-[#c49a28]/40 hover:shadow-lg transition-all duration-300"
              style={{ background: "#fff" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 rounded-md"
                style={{ background: "#0d1a2e" }}
              >
                {svc.icon}
              </div>
              <h3
                className="text-[#0d1a2e] font-black text-xl mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {svc.title}
              </h3>
              <p className="text-[#5a6476] text-sm leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Products ──────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    name: "Industrial Flanges",
    desc: "Slip-on, weld-neck, blind and socket-weld flanges in carbon and stainless steel, machined to precise tolerances for leak-free connections.",
    img: "/product/product-1.png",
    imgLeft: true,
  },
  {
    name: "Pipe Elbows",
    desc: "45 and 90 degree elbows in seamless and welded construction, available in short and long radius for smooth directional flow.",
    img: "/product/product-2.png",
    imgLeft: false,
  },
  {
    name: "Reducers",
    desc: "Concentric and eccentric reducers engineered for reliable transitions between pipe diameters under demanding conditions.",
    img: "/product/product-3.png",
    imgLeft: true,
  },
  {
    name: "Tees & Cross Fittings",
    desc: "Equal and reducing tees in carbon and alloy steel. Used in distribution headers, process piping, and fire suppression networks.",
    img: "/product/product-4.png",
    imgLeft: false,
  },
  {
    name: "Socketweld Fittings",
    desc: "Durable socketweld fittings designed for compact, leak-resistant piping systems in small-bore and high-pressure applications.",
    img: "/product/product-5.png",
    imgLeft: true,
  },
];

function Products() {
  return (
    <section id="products" className="py-20 md:py-28" style={{ background: "#f5f5f0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c49a28]" />
          <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Our Products</span>
        </div>
        <h2
          className="text-[#0d1a2e] font-black leading-tight mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          Industrial Buttweld & Socketweld Fittings
        </h2>
        <p className="text-[#5a6476] mb-14" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Manufactured to precise tolerances and supplied across India.
        </p>

        <div className="flex flex-col gap-0 border border-[#0d1a2e]/10">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="grid md:grid-cols-2 border-b border-[#0d1a2e]/10 last:border-b-0"
              style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f6" }}
            >
              <div
                className={`overflow-hidden ${!p.imgLeft ? "md:order-2" : ""}`}
                style={{ background: "#1c3057", minHeight: "300px" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />
              </div>
              <div className={`p-10 md:p-14 flex flex-col justify-center ${!p.imgLeft ? "md:order-1" : ""}`}>
                <h3
                  className="text-[#0d1a2e] font-black mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {p.name}
                </h3>
                <p className="text-[#5a6476] leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
                  {p.desc}
                </p>
                <a
                  href={`https://wa.me/${WA_NUM}?text=Hi, I need a quote for ${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-wide uppercase w-fit transition-all hover:bg-[#1c3057]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0d1a2e", color: "#fff", letterSpacing: "0.1em" }}
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ───────────────────────────────────────────────────────── */
const GALLERY = [
  { url: "/gallery/gallery-1.jpeg", alt: "Pipe Installation for fabrication" },
  { url: "/gallery/gallery-2.jpeg", alt: "Pump house Installation" },
  { url: "/gallery/gallery-3.jpeg", alt: "Magnetic particle inspection" },
  { url: "/gallery/gallery-4.jpeg", alt: "Marking of Products" },
  { url: "/gallery/gallery-5.jpeg", alt: "Flange manufacturing" },
  { url: "/gallery/gallery-6.jpeg", alt: "Dimension inspection" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c49a28]" />
          <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Our Gallery</span>
        </div>
        <h2
          className="text-[#0d1a2e] font-black leading-tight mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          Inside Our Operations
        </h2>
        <p className="text-[#5a6476] mb-10" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Factory, products and projects from across our engineering work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((img) => (
            <div
              key={img.url}
              className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
              style={{ background: "#1c3057" }}
              onClick={() => setLightbox(img.url)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(13,26,46,0.85), transparent)" }}>
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(13,26,46,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-5 right-5 text-white/60 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] object-contain" />
        </div>
      )}
    </section>
  );
}

/* ─── Certifications ─────────────────────────────────────────────── */
const CERTIFICATIONS = [
  {
    title: "IBR Approval",
    detail: "Learn about IBR Approval Certificates. We ensure your boilers, steam pipelines, and pressure vessels fully comply with the Indian Boiler Regulations (IBR, 1923).",
    file: "/certificates/ibr-compliance.pdf",
  },
  {
    title: "MSME Registration",
    detail: "Government-issued identification provided to Micro, Small, and Medium Enterprises in India",
    file: "/certificates/msme-registration.pdf",
  },
  {
    title: "Project-Specific Approvals",
    detail: "Certified support for technical drawings, custom fabrication requirements and client-specific standards.",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28" style={{ background: "#f5f5f0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c49a28]" />
          <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Certifications</span>
        </div>
        <h2
          className="text-[#0d1a2e] font-black leading-tight mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          Trusted Credentials and Quality Standards
        </h2>
        <p className="text-[#5a6476] max-w-2xl mb-10" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Our manufacturing practices are built around controlled quality, reliable documentation and consistent delivery performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((item) => (
            <div key={item.title} className="p-7 border border-[#0d1a2e]/10 bg-white shadow-sm flex flex-col">
              <div className="w-12 h-12 flex items-center justify-center rounded-md mb-5" style={{ background: "rgba(196,154,40,0.14)" }}>
                <Award className="w-5 h-5 text-[#c49a28]" />
              </div>
              <h3 className="text-[#0d1a2e] font-black text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-[#5a6476] text-sm leading-relaxed mb-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
                {item.detail}
              </p>
              {item.file ? (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-auto px-4 py-2.5 text-sm font-bold tracking-wide uppercase w-fit transition-all hover:bg-[#1c3057]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#0d1a2e", color: "#fff", letterSpacing: "0.08em" }}
                >
                  <Download className="w-4 h-4" /> View Certificate
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote: "Their team delivered high-quality fittings on time and matched our project requirements precisely.",
    name: "Rahul.",
    role: "Project Engineer, Mass Enterprises",
  },
  {
    quote: "Professional communication, dependable fabrication quality, and a strong understanding of field requirements.",
    name: "Harsha Vardhan Varma.",
    role: "Procurement Head, The KCP Ltd, Heavy Engg. Unit",
  },
  {
    quote: "We value their responsiveness and the consistency they bring to every custom order.",
    name: "Naveen.",
    role: "Project Engineer, SS Infra",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#c49a28]" />
          <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Testimonials & Reviews</span>
        </div>
        <h2
          className="text-[#0d1a2e] font-black leading-tight mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          What Clients Say About Us
        </h2>
        <p className="text-[#5a6476] max-w-2xl mb-10" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Feedback from customers who rely on our engineering support, fabrication quality and delivery commitment.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="p-7 border border-[#0d1a2e]/10 bg-[#f9f9f6]">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} className="w-4 h-4 fill-[#c49a28] text-[#c49a28]" />
                ))}
              </div>
              <p className="text-[#5a6476] leading-relaxed mb-6" style={{ fontFamily: "'Barlow', sans-serif" }}>
                “{item.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(196,154,40,0.16)" }}>
                  <BadgeCheck className="w-5 h-5 text-[#c49a28]" />
                </div>
                <div>
                  <div className="text-[#0d1a2e] font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.name}</div>
                  <div className="text-[#5a6476] text-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I am ${form.name} (${form.phone} / ${form.email}). ${form.message}`;
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "#0d1a2e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left – info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c49a28]" />
              <span className="text-[#c49a28] text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Contact Us</span>
            </div>
            <h2
              className="text-white font-black leading-tight mb-5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              {"Let's Build Your Next Project"}
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 max-w-sm" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Reach out for quotes, custom engineering requirements or technical enquiries. Our team responds fast.
            </p>

            <div className="flex flex-col gap-6">
              <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded" style={{ background: "rgba(196,154,40,0.15)" }}>
                  <Phone className="w-4 h-4 text-[#c49a28]" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Phone / WhatsApp</div>
                  <div className="text-white font-semibold group-hover:text-[#c49a28] transition-colors" style={{ fontFamily: "'Barlow', sans-serif" }}>
                    {PHONE}
                  </div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded" style={{ background: "rgba(196,154,40,0.15)" }}>
                  <Mail className="w-4 h-4 text-[#c49a28]" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Email</div>
                  <div className="text-white font-semibold group-hover:text-[#c49a28] transition-colors break-all" style={{ fontFamily: "'Barlow', sans-serif" }}>{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded mt-0.5" style={{ background: "rgba(196,154,40,0.15)" }}>
                  <MapPin className="w-4 h-4 text-[#c49a28]" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>Address</div>
                  <div className="text-white/80 font-medium leading-relaxed" style={{ fontFamily: "'Barlow', sans-serif" }}>{ADDRESS}</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 h-52 overflow-hidden rounded-sm">
              <iframe
                title="SAP Engineering Works"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.879140925306!2d78.5551497!3d17.3695477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98cf6723cc6d%3A0x4614f46f28a5db6c!2sSai%20Sundaram%20Dham%2C%20Road%20No.%203%2C%20Alkapuri%20Colony%2C%20RK%20Puram%2C%20Snehapuri%20Colony%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500102!5e0!3m2!1sen!2sin!4v1784489902216!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(60%) contrast(1.1) invert(0.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right – form */}
          <div>
            <div className="p-8 md:p-10" style={{ background: "#fff" }}>
              <h3 className="text-[#0d1a2e] font-black text-2xl mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Request a Free Quote
              </h3>
              <p className="text-[#5a6476] text-sm mb-7" style={{ fontFamily: "'Barlow', sans-serif" }}>
                Fill in the details and {"we'll"} get back to you.
              </p>

              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full border border-[#0d1a2e]/15 px-4 py-3 text-[#0d1a2e] placeholder-[#5a6476]/50 focus:outline-none focus:border-[#c49a28] transition-colors text-sm"
                    style={{ fontFamily: "'Barlow', sans-serif", background: "#f9f9f7" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full border border-[#0d1a2e]/15 px-4 py-3 text-[#0d1a2e] placeholder-[#5a6476]/50 focus:outline-none focus:border-[#c49a28] transition-colors text-sm"
                    style={{ fontFamily: "'Barlow', sans-serif", background: "#f9f9f7" }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full border border-[#0d1a2e]/15 px-4 py-3 text-[#0d1a2e] placeholder-[#5a6476]/50 focus:outline-none focus:border-[#c49a28] transition-colors text-sm"
                  style={{ fontFamily: "'Barlow', sans-serif", background: "#f9f9f7" }}
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  required
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full border border-[#0d1a2e]/15 px-4 py-3 text-[#0d1a2e] placeholder-[#5a6476]/50 focus:outline-none focus:border-[#c49a28] transition-colors resize-none text-sm"
                  style={{ fontFamily: "'Barlow', sans-serif", background: "#f9f9f7" }}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-4 font-bold tracking-wide uppercase text-sm transition-all hover:brightness-110"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", background: "#c49a28", color: "#0d1a2e", letterSpacing: "0.1em" }}
                >
                  {sent ? <><CheckCircle className="w-4 h-4" /> Sent!</> : <>Get Free Quote <ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#07101e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <SapLogo dark />
            <p className="text-white/40 text-sm leading-relaxed mt-5 max-w-xs" style={{ fontFamily: "'Barlow', sans-serif" }}>
              Manufacturers of industrial pipe fittings, flanges, steel fabrication and custom engineering solutions. Engineered with precision, delivered across India.
            </p>
            <div className="mt-5">
              <span className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "#c49a28" }}>
                Precision. Durability. Delivered.
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV.map((n) => (
                <button
                  key={n}
                  onClick={() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/40 hover:text-[#c49a28] text-sm text-left transition-colors"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <a href={`tel:${PHONE}`} className="hover:text-[#c49a28] transition-colors">{PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="hover:text-[#c49a28] transition-colors break-all">{EMAIL}</a>
              <span className="leading-relaxed">Road No. 3, Alkapuri Colony,<br />Kothapet, Hyderabad,<br />Telangana – 500035</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/25 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            © 2024 SAP Engineering Works. All rights reserved.
          </span>
          <span className="text-white/25 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            Industrial Engineering Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating WhatsApp ─────────────────────────────────────────────── */
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WA_NUM}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 shadow-2xl hover:scale-110 transition-transform duration-200"
      style={{ background: "#25D366", borderRadius: "50%" }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

/* ─── App ───────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <SectionDivider color="#ffffff" />
        <About />
        <SectionDivider color="#0d1a2e" />
        <Stats />
        <SectionDivider color="#ffffff" />
        <Services />
        <SectionDivider color="#f5f5f0" />
        <Products />
        <SectionDivider color="#ffffff" />
        <Gallery />
        <SectionDivider color="#0d1a2e" />
        <Certifications />
        <SectionDivider color="#ffffff" />
        <Testimonials />
        <SectionDivider color="#0d1a2e" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
