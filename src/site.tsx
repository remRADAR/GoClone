import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUp, Menu, Minus, Plus, X } from "lucide-react";
import "animate.css";

const navItems = [
  { label: "Home", index: "01", to: "/" as const },
  { label: "On The Radar", index: "02", to: "/work/portfolio" as const },
  { label: "Motherland", index: "03", to: "/about" as const },
  { label: "Contact", index: "04", to: "/contact" as const },
];

const footerLinks = [
  ["Home", "/"],
  ["Charts", "/#charts"],
  ["On The Radar", "/work/portfolio"],
  ["Magazine", "/work/portfolio#magazine"],
  ["RADARMusic", "/#radarmusic"],
  ["Motherland", "/about"],
  ["Spotlights", "/#spotlights"],
  ["Platforms", "/#platforms"],
  ["Playlists", "/#playlists"],
  ["Store", "/contact#store"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const projects = [
  {
    number: "01",
    title: "The next voice is already here",
    category: "Discovery",
    year: "2026",
    image: "/assets/project-vellfire.png",
  },
  {
    number: "02",
    title: "Protect the Music",
    category: "RADAR point of view",
    year: "2026",
    image: "/assets/project-dunwill.png",
  },
  {
    number: "03",
    title: "Culture in motion",
    category: "Motherland",
    year: "2026",
    image: "/assets/project-noara.png",
  },
  {
    number: "04",
    title: "Moov Different",
    category: "RADARMusic",
    year: "2025",
    image: "/assets/project-nike.png",
  },
];

const faqs = [
  {
    question: "What is RADARCharts?",
    answer:
      "RADARCharts is a music and culture platform that brings charts, editorial, discovery, playlists, and community closer together.",
  },
  {
    question: "How does an artist get on the RADAR?",
    answer:
      "Submit a release, story, profile, or campaign through the contact page. Include the clearest link and the reason the signal matters now.",
  },
  {
    question: "Do you only cover music?",
    answer:
      "Music is the centre of gravity, but the RADAR also follows the people, scenes, ideas, and movements that give the sound its meaning.",
  },
  {
    question: "What is The MOTHERLand?",
    answer:
      "The MOTHERLand is a RADARCharts cultural sanctuary dedicated to uplifting women in entertainment and amplifying the artists, storytellers, and culture-shapers moving the future forward.",
  },
  {
    question: "Can brands and partners work with RADARCharts?",
    answer:
      "Yes. Partners can enter through editorial features, artist spotlights, release campaigns, platform collaborations, or other culture-led opportunities.",
  },
  {
    question: "Where can I find the charts and playlists?",
    answer: "Use Charts, Playlists, RADARMusic, and Magazine to stay close to the latest signals.",
  },
  {
    question: "Is RADARCharts accepting submissions?",
    answer:
      "Yes. Use the contact page to submit the details of your release, story, or partnership.",
  },
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      <ArrowUp size={15} strokeWidth={1.5} />
    </span>
  );
}
function PlusMark() {
  return (
    <span className="plus-mark" aria-hidden="true">
      <Plus size={19} strokeWidth={1.25} />
    </span>
  );
}
type RevealAnimation =
  "fadeInUp" | "fadeIn" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn";
function applyMotionAnimation(element: HTMLElement, animation: RevealAnimation) {
  element.classList.add("animate__animated", `animate__${animation}`);
}
function applyRevealAnimation(element: HTMLElement) {
  const animation = (element.dataset.animation as RevealAnimation | undefined) ?? "fadeInUp";
  applyMotionAnimation(element, animation);
  element.classList.add("is-visible");
  element.querySelectorAll<HTMLElement>("[data-motion]").forEach((child) => {
    const childAnimation = (child.dataset.motion as RevealAnimation | undefined) ?? "fadeInUp";
    applyMotionAnimation(child, childAnimation);
  });
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header">
      <Link to="/" className="brand-lockup" aria-label="RADARCharts home">
        <span className="brand-name">RADARCharts</span>
        <small>by REM</small>
      </Link>
      <nav
        id="primary-navigation"
        className={`main-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? "is-active" : ""}
            aria-current={location.pathname === item.to ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span>{item.label}</span>
            <small>{item.index}</small>
          </Link>
        ))}
      </nav>
      <Link to="/contact" className="ceo-card">
        <img src="/assets/ceo-portrait.png" alt="RADARCharts signal portrait" />
        <span className="ceo-card-copy">
          <b>RADARMusic</b>
          <strong>The RADAR never sleeps</strong>
          <small>by REM</small>
        </span>
        <span className="card-corner" aria-hidden="true">
          <ArrowUp size={14} strokeWidth={1.5} />
        </span>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-label" aria-hidden="true">
          {menuOpen ? "Close" : "Menu"}
        </span>
        <span className="menu-icon" aria-hidden="true">
          {menuOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
        </span>
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-grid" data-reveal data-animation="fadeInUp">
        <span className="section-kicker">(10)</span>
        <div className="footer-cta" data-motion="fadeInUp">
          <p className="eyebrow">Stay close to culture.</p>
          <a className="footer-email" href="mailto:hello@radarcharts.net">
            hello@radarcharts.net <Arrow />
          </a>
          <Link className="text-link" to="/contact">
            Enter the conversation <Arrow />
          </Link>
        </div>
      </div>
      <div className="footer-marquee" data-motion="fadeIn" aria-hidden="true">
        <span>The RADAR never sleeps&nbsp;—&nbsp;</span>
        <span>The RADAR never sleeps&nbsp;—&nbsp;</span>
      </div>
      <div className="footer-bottom">
        <Link to="/" className="footer-wordmark">
          RADARCharts
          <span className="wordmark-by">by REM</span>
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(([label, href], index) => (
            <a key={label} href={href}>
              <span>{label}</span>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </a>
          ))}
        </nav>
        <p>
          © 2026 <span className="footer-rule" /> REM / RADARCharts
        </p>
      </div>
      <div className="footer-signature">
        <strong>Music is life itself.</strong>
        <span>Protect the Music. Protect the Fans.</span>
        <small>The RADAR never sleeps.</small>
      </div>
    </footer>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.documentElement.classList.add("reveal-ready", "motion-ready");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach(applyRevealAnimation);
      return () => document.documentElement.classList.remove("reveal-ready", "motion-ready");
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyRevealAnimation(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    revealTargets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready", "motion-ready");
    };
  }, []);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const stackContainer = document.querySelector<HTMLElement>("[data-stack-container]");
    const stackItems = Array.from(document.querySelectorAll<HTMLElement>("[data-stack-item]"));
    let frame = 0;
    const updateScrollState = () => {
      frame = 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)),
      );
      const stackRect = stackContainer?.getBoundingClientRect();
      const stackStart = stackRect ? stackRect.top + window.scrollY : 0;
      const stackTravel = Math.max(
        (stackContainer?.offsetHeight ?? window.innerHeight) - window.innerHeight,
        1,
      );
      const stackProgress = Math.max(0, Math.min(1, (window.scrollY - stackStart) / stackTravel));
      const cardHeight = Math.max(stackItems[0]?.offsetHeight ?? window.innerHeight, 1);
      const stackScroll = Math.max(0, window.scrollY - stackStart);
      stackContainer?.style.setProperty("--stack-progress", stackProgress.toFixed(3));
      stackItems.forEach((item, index) => {
        const stickyTop = Number.parseFloat(getComputedStyle(item).top) || 0;
        const rect = item.getBoundingClientRect();
        const cardProgress = Math.max(0, Math.min(1, stackScroll / cardHeight - index));
        item.style.setProperty("--card-progress", cardProgress.toFixed(3));
        item.style.setProperty("--stack-depth", cardProgress.toFixed(3));
        item.classList.toggle("is-stuck", rect.top <= stickyTop + 1 && rect.bottom > stickyTop + 1);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };
    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      stackContainer?.style.removeProperty("--stack-progress");
      stackItems.forEach((item) => {
        item.style.removeProperty("--card-progress");
        item.style.removeProperty("--stack-depth");
        item.classList.remove("is-stuck");
      });
    };
  }, []);
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section data-reveal data-animation="zoomIn" className="hero hero-home">
      <div className="hero-grain" />
      <div className="hero-copy" data-motion="fadeInUp">
        <span className="eyebrow">RADARCharts by REM</span>
        <h1 className="hero-title">
          Music is life itself.
          <br />
          <em>Protect the Music.</em>
          <br />
          Protect the Fans.
        </h1>
        <Link className="hero-link" to="/work/portfolio">
          Enter the RADAR <Arrow />
        </Link>
      </div>
      <div className="hero-services" data-motion="fadeIn">
        <span>Artists</span>
        <span>Makama</span>
        <span>Odenose</span>
        <span>KEASUNGS</span>
        <span>Moelogo</span>
        <span>TELMAN</span>
      </div>
      <div className="hero-plus plus-one">
        <PlusMark />
      </div>
      <div className="hero-plus plus-two">
        <PlusMark />
      </div>
      <div className="hero-plus plus-three">
        <PlusMark />
      </div>
      <div className="hero-wordmark" data-motion="fadeIn">
        <span className="hero-wordmark-name">RADARCharts</span>
        <small>by REM</small>
      </div>
      <div className="hero-footnote">
        <span>01 / 05</span>
        <span className="tick-line" />
        <span>TELMAN — Moov Different</span>
      </div>
    </section>
  );
}

function SectionIntro({
  number,
  label,
  children,
  dark = false,
}: {
  number: string;
  label: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`section-intro ${dark ? "on-dark" : ""}`} data-motion="fadeInDown">
      <div className="section-intro-meta">
        <span>({number})</span>
        <span>({label})</span>
        <span>© 2026</span>
      </div>
      {children}
    </div>
  );
}

function AboutSection() {
  return (
    <section data-reveal className="about-section section-dark">
      <div className="section-grid">
        <SectionIntro number="01" label="About the movement" dark />
        <div className="about-statement" data-motion="fadeInUp">
          <p className="display-copy">
            A radar for
            <br />
            <em>culture in motion.</em>
          </p>
          <div className="about-columns">
            <div>
              <span className="muted-label">Find the signal</span>
              <p>
                We look beyond the obvious and make room for the artists moving culture forward.
              </p>
            </div>
            <div>
              <span className="muted-label">Give it context</span>
              <p>
                A release is never just a release. We connect the sound to the story, the scene, and
                the people behind it.
              </p>
            </div>
            <div>
              <span className="muted-label">Protect the connection</span>
              <p>
                Culture is participation, not decoration. RADARCharts brings artists, fans, and
                partners closer together.
              </p>
            </div>
          </div>
          <p className="about-closing">
            From the first listen to the full story, RADARCharts brings music and culture closer
            together.
          </p>
          <Link className="text-link" to="/about">
            Enter Motherland <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section data-reveal id="charts" className="portfolio-section section-paper">
      <div className="section-grid">
        <SectionIntro number="02" label="Latest signals" />
      </div>
      <div className="portfolio-heading" data-motion="zoomIn">
        <h2>
          What’s moving
          <br />
          <em>now.</em>
        </h2>
        <p>
          The RADAR is always listening. Explore the artists, tracks, releases, and cultural moments
          currently carrying the signal forward.
        </p>
      </div>
      <div className="chart-lead" data-motion="fadeInUp">
        <strong>TOP 25</strong>
        <p>The current RADARCharts ranking of the music and voices shaping the conversation.</p>
        <span className="chart-groups">
          The front line · Rising frequency · Across the map · Deep signal · Worth another listen
        </span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
      <div className="section-action" data-motion="fadeInUp">
        <Link className="button-outline" to="/work/portfolio">
          Explore all charts <Arrow />
        </Link>
        <Link className="text-link" to="/work/portfolio">
          On The Radar <Arrow />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link className="project-card" data-motion="fadeInUp" to="/work/portfolio">
      <div className="project-image" data-motion="zoomIn">
        <img src={project.image} alt={`${project.title} — ${project.category}`} loading="lazy" />
        <span className="project-arrow">
          <Arrow />
        </span>
      </div>
      <div className="project-meta">
        <span>({project.number})</span>
        <div>
          <strong>{project.title}</strong>
          <span>{project.category}</span>
        </div>
        <small>© {project.year}</small>
      </div>
    </Link>
  );
}

function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Charts",
      label: "A clear pulse",
      image: "/assets/service-art-direction.png",
      body: "A clear pulse on the artists, songs, releases, and scenes gaining momentum. Includes Top 25, new entries, and regional signals.",
    },
    {
      number: "02",
      title: "Editorial",
      label: "Give it context",
      image: "/assets/service-photography.png",
      body: "Interviews, stories, reviews, and cultural notes that give the music a wider frame. Includes On The Radar, Magazine, and Discovery.",
    },
    {
      number: "03",
      title: "Platform support",
      label: "Move attention",
      image: "/assets/service-strategy.png",
      body: "Campaign visibility and cultural strategy for artists, labels, brands, and partners. Includes artist spotlights, release campaigns, and partner features.",
    },
  ];
  return (
    <section data-reveal id="platforms" className="services-section section-dark">
      <div className="section-grid">
        <SectionIntro number="03" label="The platform" dark />
      </div>
      <div className="services-lead" data-motion="fadeInUp">
        <h2 className="split-title" aria-label="More than a music chart.">
          <span className="text-part left">More than a</span>{" "}
          <span className="text-part right">music chart.</span>
        </h2>
        <p className="platform-lead-copy">
          RADARCharts connects discovery, editorial, community, and creative support in one living
          platform. Every part of the experience moves attention toward the people and ideas worth
          hearing.
        </p>
        <span className="platform-closing">
          A signal is stronger when the right people can find it.
        </span>
      </div>
      <div className="service-list service-stack" data-stack-container>
        {services.map((service) => (
          <article
            className="service-row"
            data-motion="fadeInRight"
            data-stack-item
            key={service.number}
          >
            <div className="service-index">{service.number}</div>
            <img src={service.image} alt={service.title} loading="lazy" data-motion="fadeIn" />
            <div className="service-copy" data-motion="fadeInUp">
              <h3>{service.title}</h3>
              <span>{service.label}</span>
              <p>{service.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  const paths = [
    {
      name: "I am an artist",
      description: "Put your release, story, or movement in front of a culture-first audience.",
      cta: "Submit your signal",
      features: ["Page Post", "Artist Spotlight", "Release Campaign"],
    },
    {
      name: "I am a partner",
      description: "Build a meaningful connection with the music and communities shaping culture.",
      cta: "Start a conversation",
      features: ["Partner Feature", "Premium Campaign", "Platform Support"],
    },
    {
      name: "I am a fan",
      description: "Stay close to the charts, stories, playlists, and voices worth your time.",
      cta: "Follow the signal",
      features: ["Charts", "Playlists", "Magazine"],
    },
  ];
  return (
    <section data-reveal className="pricing-section section-paper">
      <div className="section-grid">
        <SectionIntro number="04" label="Ways to enter the signal" />
      </div>
      <div className="pricing-grid">
        {paths.map((path, index) => (
          <article className="pricing-card" data-motion="fadeInUp" key={path.name}>
            <div className="pricing-card-top">
              <span className="muted-label">{path.name}</span>
              <p>{path.description}</p>
            </div>
            <div className="price">
              <b>0{index + 1}</b>
              <small>signal</small>
            </div>
            <Link className="button-dark" to="/contact">
              {path.cta} <Arrow />
            </Link>
            <div className="included">
              <span>RADARStore / service names</span>
              <ul>
                {path.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="signal-note">
        No gatekeeping theatre. No empty reach claims. Just a clearer path between the music and the
        people ready to hear it.
      </p>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section data-reveal className="testimonial-section section-dark">
      <div className="section-grid">
        <SectionIntro number="05" label="Voices on the RADAR" dark />
      </div>
      <div className="testimonial-layout" data-motion="fadeInUp">
        <div className="testimonial-quote">
          “The right story can change the way a listener hears the music.”
          <div className="testimonial-author">
            <strong>RADARCharts by REM</strong>
            <span>Artists, fans, and communities in motion</span>
          </div>
        </div>
        <div className="testimonial-side">
          <div className="testimonial-counts" aria-label="RADARCharts principles">
            <div>
              <b>Signal</b>
              <span>Signals surfaced</span>
            </div>
            <div>
              <b>Story</b>
              <span>Stories and releases tracked</span>
            </div>
            <div>
              <b>Community</b>
              <span>Culture-led connections</span>
            </div>
          </div>
          <div className="testimonial-metrics">
            <div>
              <b>Listen</b>
              <span>Artists bring the sound</span>
              <small>Communities give it life</small>
            </div>
            <div>
              <b>Context</b>
              <span>Stories widen the frame</span>
              <small>Every signal has a place</small>
            </div>
            <div>
              <b>Protect</b>
              <span>Music is life itself</span>
              <small>Protect the Music &amp; Protect the Fans</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  const entries = [
    ["2026", "On The Radar", "Current editorial"],
    ["2026", "Motherland", "Culture and movement"],
    ["2025", "RADARMusic", "Sound and playlist"],
    ["2025", "Discovery", "New voices"],
    ["2025", "Magazine", "Long-form culture"],
    ["2024", "The RADARMan", "People and perspective"],
  ];
  return (
    <section data-reveal className="archive-section section-paper">
      <div className="section-grid">
        <SectionIntro number="06" label="The archive" />
      </div>
      <div className="archive-head">
        <h2>
          Past
          <br />
          <em>signals</em>
        </h2>
        <p className="archive-copy">
          The archive is not behind us. It is a map of the sounds, people, and ideas that continue
          to shape the present.
        </p>
        <Link className="text-link" to="/work/portfolio">
          Open the editorial archive <Arrow />
        </Link>
      </div>
      <div className="archive-list">
        {entries.map(([year, title, category]) => (
          <div key={title} className="archive-entry" data-motion="fadeInLeft">
            <span>{year}</span>
            <strong>{title}</strong>
            <small>
              {category} <Arrow />
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    [
      "Artists",
      "Artists in motion",
      "The people creating the next signal remain at the centre of the story.",
    ],
    [
      "Stories",
      "Stories published",
      "Editorial keeps the sound connected to its scene, history, and community.",
    ],
    [
      "Fans",
      "Fans reached",
      "Discovery matters when it creates a real connection between music and people.",
    ],
    [
      "Signals",
      "Signals tracked",
      "The numbers help us see movement. They do not replace the people who create it.",
    ],
  ];
  return (
    <section data-reveal className="stats-section section-dark">
      <div className="section-grid">
        <SectionIntro number="07" label="Signal" dark />
      </div>
      <div className="stats-intro" data-motion="fadeInUp">
        <h2>
          Measure the reach.
          <br />
          <em>Respect the culture.</em>
        </h2>
      </div>
      <div className="stats-grid">
        {stats.map(([value, label, body]) => (
          <div className="stat" data-motion="fadeInUp" key={label}>
            <b>{value}</b>
            <strong>{label}</strong>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArticlesSection() {
  const articles = [
    ["001", "The sound of the next room", "Discovery"],
    ["002", "Protect the Music", "RADAR point of view"],
    ["003", "Motherland: voices that move culture", "Motherland"],
    ["004", "Moov Different", "RADARMusic"],
  ];
  return (
    <section data-reveal className="articles-section section-paper">
      <div className="section-grid">
        <SectionIntro number="08" label="Editorial signal" />
      </div>
      <div className="article-list">
        {articles.map(([number, title, category]) => (
          <Link to="/work/portfolio" className="article-row" data-motion="fadeInRight" key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <em>{category}</em>
            <Arrow />
          </Link>
        ))}
      </div>
      <div className="section-action article-actions" data-motion="fadeInUp">
        <Link className="text-link" to="/work/portfolio">
          Read all stories <Arrow />
        </Link>
        <Link className="text-link" to="/work/portfolio">
          NOW READING... <Arrow />
        </Link>
      </div>
    </section>
  );
}

export function FAQSection({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section data-reveal className={`faq-section ${dark ? "section-dark" : "section-paper"}`}>
      <div className="section-grid">
        <SectionIntro number="09" label="Questions about RADARCharts" dark={dark} />
      </div>
      <div className="faq-layout">
        <div className="faq-media" data-motion="fadeInLeft">
          <img src="/assets/faq-portrait.png" alt="A cultural portrait with a soft blue flower" />
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="showreel">
            Watch the RADARCharts showreel <Arrow />
          </a>
        </div>
        <div className="faq-list" data-motion="fadeInRight">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${open === index ? "is-open" : ""}`}
              data-motion="fadeInUp"
              key={faq.question}
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {open === index ? (
                    <Minus size={18} strokeWidth={1.5} />
                  ) : (
                    <Plus size={18} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <AppShell>
      <main>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialSection />
        <ArchiveSection />
        <StatsSection />
        <ArticlesSection />
        <FAQSection />
      </main>
    </AppShell>
  );
}

export function PortfolioPage() {
  return (
    <AppShell>
      <main>
        <section data-reveal data-animation="zoomIn" className="subpage-hero portfolio-hero">
          <div className="subpage-hero-copy">
            <span className="eyebrow">Latest signal</span>
            <h1>
              On The
              <br />
              <em>RADAR</em>
            </h1>
            <p>
              The latest artists, releases, stories, and cultural movements worth your attention.
            </p>
          </div>
        </section>
        <section data-reveal className="portfolio-index section-paper" id="magazine">
          <div className="section-grid">
            <SectionIntro number="01" label="The signal, in full" />
          </div>
          <div className="portfolio-heading" data-motion="zoomIn">
            <h2>
              The signal,
              <br />
              <em>in full.</em>
            </h2>
            <p>
              A current record of what is moving across music and culture. Read deeply, listen
              widely, and return often.
            </p>
          </div>
          <div className="project-grid project-grid-index">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
          <div className="section-action" data-motion="fadeInUp">
            <Link className="button-outline" to="/contact">
              Open the Magazine <Arrow />
            </Link>
            <Link className="text-link" to="/work/portfolio">
              Keep listening. <Arrow />
            </Link>
          </div>
        </section>
        <FAQSection dark />
      </main>
    </AppShell>
  );
}

type MotherlandFilter = "all" | "voices" | "soundtrack" | "culture";

const motherlandSignals = [
  {
    number: "01",
    filter: "voices" as const,
    title: "The movement",
    body: "The MOTHERLand is a cultural sanctuary dedicated to uplifting, uniting, and unleashing the full potential of women in entertainment. It honours the resilience, brilliance, and influence of female artists, storytellers, visionaries, and culture-shapers.",
    features: ["Female artists", "Storytellers", "Culture-shapers"],
  },
  {
    number: "02",
    filter: "soundtrack" as const,
    title: "The soundtrack",
    body: "Listen to the women, artists, and culture-shapers moving the signal forward. Protect the music. Protect the fans. The soundtrack of the movement is always changing.",
    features: ["Featured voice", "New movement", "The next sound"],
  },
  {
    number: "03",
    filter: "culture" as const,
    title: "Culture in motion",
    body: "From the frontlines of music and media to the stages of innovation and leadership, The MOTHERLand exists to amplify her voice, celebrate her journey, and support her rise.",
    features: ["Her voice", "Her journey", "Her future"],
  },
  {
    number: "04",
    filter: "culture" as const,
    title: "The next room",
    body: "A living space for the artists, producers, writers, and culture-shapers making room for what comes next. The signal grows when more voices can enter it.",
    features: ["New voices", "Shared stages", "Future makers"],
  },
];

const motherlandFilters: Array<{ id: MotherlandFilter; label: string }> = [
  { id: "all", label: "All signals" },
  { id: "voices", label: "Voices" },
  { id: "soundtrack", label: "Soundtrack" },
  { id: "culture", label: "Culture" },
];

export function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<MotherlandFilter>("all");
  const visibleSignals = motherlandSignals.filter(
    (signal) => activeFilter === "all" || signal.filter === activeFilter,
  );

  return (
    <AppShell>
      <main>
        <section data-reveal data-animation="zoomIn" className="subpage-hero about-hero">
          <div className="subpage-hero-copy">
            <span className="eyebrow">A RADARCharts cultural sanctuary</span>
            <h1>
              The
              <br />
              <em>MOTHERLand</em>
            </h1>
            <p>
              [ RADARCharts / 2026 ]<br />
              Scroll to enter
            </p>
          </div>
        </section>
        <section data-reveal className="process-section section-paper">
          <div className="section-grid">
            <SectionIntro number="01" label="Born from the heart of RADARCharts" />
          </div>
          <div className="motherland-filter-shell" data-filter-state={activeFilter}>
            <div className="motherland-filter-bar" data-motion="fadeInUp">
              <span className="muted-label">Tune the signal</span>
              <div
                className="motherland-filter-controls"
                role="group"
                aria-label="Filter Motherland signals"
              >
                {motherlandFilters.map((filter) => (
                  <button
                    className="motherland-filter-button"
                    type="button"
                    aria-pressed={activeFilter === filter.id}
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <span className="motherland-filter-status" aria-live="polite">
                {String(visibleSignals.length).padStart(2, "0")} signals in view
              </span>
            </div>
            <div className="process-list motherland-filter-list is-filtering" key={activeFilter}>
              {visibleSignals.map((signal, index) => (
                <article
                  className="process-row motherland-card"
                  data-motion="fadeInRight"
                  key={`${activeFilter}-${signal.number}`}
                  style={{ animationDelay: `${index * 85}ms` }}
                >
                  <span className="process-number">{signal.number}</span>
                  <div>
                    <h2>{signal.title}</h2>
                    <p>{signal.body}</p>
                  </div>
                  <ul>
                    {signal.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section data-reveal className="network-section section-dark">
          <div className="section-grid">
            <SectionIntro number="02" label="The network" dark />
          </div>
          <div className="network-content" data-motion="fadeInUp">
            <h2>
              Stay close
              <br />
              <em>to culture.</em>
            </h2>
            <div className="network-links">
              Charts · On The Radar · Magazine · RADARMusic · Spotlights · Platforms · Playlists
            </div>
            <p>Her voice is the future in motion.</p>
          </div>
        </section>
        <FAQSection />
      </main>
    </AppShell>
  );
}

export function ContactPage() {
  return (
    <AppShell>
      <main>
        <section data-reveal data-animation="zoomIn" className="contact-hero">
          <div className="contact-hero-inner" data-motion="fadeInLeft">
            <span className="eyebrow">Enter the conversation</span>
            <h1>
              Let’s make
              <br />
              <em>something</em>
              <br />
              move.
            </h1>
            <p>
              Have a release, story, partnership, platform idea, or cultural signal that deserves
              more room? Tell us what is moving and why it matters now.
            </p>
            <Link className="button-light" to="/contact">
              Submit your signal <Arrow />
            </Link>
          </div>
          <div className="contact-image" data-motion="fadeInRight">
            <img
              src="/assets/service-portrait.png"
              alt="Artist portrait for the RADARCharts contact page"
            />
          </div>
        </section>
        <section data-reveal className="contact-form-section section-paper" id="store">
          <div className="section-grid">
            <SectionIntro number="01" label="Send the signal" />
          </div>
          <form
            className="contact-form"
            data-motion="fadeInUp"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              Your name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Your email
              <input name="email" type="email" placeholder="Your email" required />
            </label>
            <label>
              Who are you?
              <select name="role" defaultValue="">
                <option value="" disabled>
                  Artist / Manager / Label / Brand / Community / Press / Other
                </option>
                <option>Artist</option>
                <option>Manager</option>
                <option>Label</option>
                <option>Brand</option>
                <option>Community</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              What is moving?
              <select name="signal" defaultValue="">
                <option value="" disabled>
                  Release / Story / Partnership / Event / Platform idea
                </option>
                <option>Release</option>
                <option>Story</option>
                <option>Partnership</option>
                <option>Event</option>
                <option>Platform idea</option>
              </select>
            </label>
            <label>
              The clearest link to the signal
              <input name="link" placeholder="https://" />
            </label>
            <label>
              Tell us what is moving and why now
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what is moving and why now"
                required
              />
            </label>
            <button className="button-dark" type="submit">
              Send to the RADAR <Arrow />
            </button>
            <p className="form-confirmation">
              Signal received. The RADAR team will review the details and follow up if the fit is
              right.
            </p>
          </form>
        </section>
        <FAQSection dark={false} />
      </main>
    </AppShell>
  );
}
