import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const navItems = [
  { label: "Home", index: "01", to: "/" as const },
  { label: "Portfolio", index: "02", to: "/work/portfolio" as const },
  { label: "About", index: "03", to: "/about" as const },
  { label: "Contact", index: "04", to: "/contact" as const },
];

const projects = [
  {
    number: "01",
    title: "Vellfire Calibration",
    category: "Art Direction",
    year: "2025",
    image: "/assets/project-vellfire.png",
  },
  {
    number: "02",
    title: "Dunwill Lanson",
    category: "Photography",
    year: "2024",
    image: "/assets/project-dunwill.png",
  },
  {
    number: "03",
    title: "Noara Willis",
    category: "Strategy",
    year: "2025",
    image: "/assets/project-noara.png",
  },
  {
    number: "04",
    title: "Nike Studios",
    category: "Art Direction",
    year: "2025",
    image: "/assets/project-nike.png",
  },
];

const faqs = [
  {
    question: "What distinguishes us from other agencies?",
    answer:
      "Fuel pairs a focused creative partner with a structured, transparent rhythm. You get senior thinking, a clear queue, and a system that keeps the work moving.",
  },
  {
    question: "Why not hire an in-house designer or freelancer?",
    answer:
      "We give teams the continuity of a dedicated creative without the overhead of a full-time hire, while keeping the perspective fresh and the process accountable.",
  },
  {
    question: "Are creative requests truly unlimited?",
    answer:
      "Requests are handled one at a time so every deliverable receives real attention. Add work to the queue whenever you are ready and we will keep the next priority visible.",
  },
  {
    question: "How fast will I receive my work?",
    answer:
      "Most focused requests return within a few business days. Larger identity, campaign, and production work gets a clear schedule before kickoff.",
  },
  {
    question: "What if I have a single project?",
    answer:
      "That is welcome. Start with a focused engagement and we will shape the right scope around the outcome you need, without forcing a long retainer.",
  },
];

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function PlusMark() {
  return (
    <span className="plus-mark" aria-hidden="true">
      +
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <Link to="/" className="brand-lockup" aria-label="GoClone home">
        <img src="/assets/fuel-logo.png" alt="Fuel" />
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
        <img src="/assets/ceo-portrait.png" alt="Lousiana KD6" />
        <span className="ceo-card-copy">
          <b>Meet the CEO</b>
          <strong>Lousiana KD6</strong>
          <small>CEO</small>
        </span>
        <span className="card-corner" aria-hidden="true">
          ↗
        </span>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className="menu-dot" aria-hidden="true" />
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-grid">
        <span className="section-kicker">(10)</span>
        <div className="footer-cta">
          <p className="eyebrow">Let’s work together</p>
          <a className="footer-email" href="mailto:sayhi@goclone.studio">
            sayhi@goclone.studio <Arrow />
          </a>
          <Link className="text-link" to="/contact">
            Contact now <Arrow />
          </Link>
        </div>
      </div>
      <div className="footer-marquee" aria-hidden="true">
        <span>We are faster, better and closer&nbsp;—&nbsp;</span>
        <span>We are faster, better and closer&nbsp;—&nbsp;</span>
      </div>
      <div className="footer-bottom">
        <Link to="/" className="footer-wordmark">
          FUEL<span>×</span>
        </Link>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              <span>{item.label}</span>
              <small>{item.index}</small>
            </Link>
          ))}
        </nav>
        <p>
          © 2025 <span className="footer-rule" /> 19′
        </p>
      </div>
    </footer>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    revealTargets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    let frame = 0;
    const updateScrollProgress = () => {
      frame = 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)),
      );
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollProgress);
    };
    updateScrollProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
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
    <section data-reveal className="hero hero-home">
      <div className="hero-grain" />
      <div className="hero-copy">
        <p>
          Pick a plan, submit a job request,
          <br />
          and your イメージ will kickoff
          <br />
          <span>within 24 hours.</span>
        </p>
        <Link className="hero-link" to="/about">
          Explore now <Arrow />
        </Link>
      </div>
      <div className="hero-services">
        <span>01/</span>
        <span>Strategy</span>
        <span>Videography</span>
        <span>Branding</span>
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
      <div className="hero-wordmark">
        <img src="/assets/footer-wordmark.png" alt="Fuel" />
      </div>
      <div className="hero-footnote">
        <span>© 2025</span>
        <span className="tick-line" />
        <span>19′</span>
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
    <div className={`section-intro ${dark ? "on-dark" : ""}`}>
      <div className="section-intro-meta">
        <span>({number})</span>
        <span>({label})</span>
        <span>© 2025</span>
      </div>
      {children}
    </div>
  );
}

function AboutSection() {
  return (
    <section data-reveal className="about-section section-dark">
      <div className="section-grid">
        <SectionIntro number="01" label="About us" dark />
        <div className="about-statement">
          <p className="display-copy">
            Design-forward impressive agency crafting bold visuals, structured layouts, and
            high-impact digital 3D Swiss inspired by modern aesthetics<span>®</span>.
          </p>
          <div className="about-columns">
            <div>
              <span className="muted-label">(Pre)</span>
              <p>
                Igniting ideas with precision and intentional design. Fuel transforms raw creativity
                into structured visual systems that shape brands and elevate digital experiences.
              </p>
            </div>
            <div>
              <span className="muted-label">(+Post)</span>
              <p>
                Driven by bold aesthetics and functional simplicity. Fuel blends modern form with
                purposeful detail, delivering refined experiences that push brands forward.
              </p>
            </div>
          </div>
          <div className="result-row">
            <span className="muted-label">(=Results)</span>
            <div>
              <b>15</b>
              <small>New clients</small>
            </div>
            <div>
              <b>100%</b>
              <small>Success rate</small>
            </div>
          </div>
          <Link className="text-link" to="/about">
            Explore now <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section data-reveal className="portfolio-section section-paper">
      <div className="section-grid">
        <SectionIntro number="02" label="Portfolio" />
      </div>
      <div className="portfolio-heading">
        <h2>
          Selected
          <br />
          <em>work</em>
        </h2>
        <p>A curated collection of structured visuals and modern digital systems.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
      <div className="section-action">
        <Link className="button-outline" to="/contact">
          Join us now <Arrow />
        </Link>
        <Link className="text-link" to="/work/portfolio">
          See all (07) <Arrow />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link className="project-card" to="/work/portfolio">
      <div className="project-image">
        <img src={project.image} alt="" loading="lazy" />
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
      title: "Art Direction",
      label: "Creative Oversight",
      image: "/assets/service-art-direction.png",
      body: "Guiding visual identity through clarity and intentional design. Fuel shapes cohesive narratives that elevate brands beyond aesthetics, creating timeless expressions with edge.",
    },
    {
      number: "02",
      title: "Photography",
      label: "Brand Imaging",
      image: "/assets/service-photography.png",
      body: "Crafting imagery with mood, precision, and emotional depth. Fuel captures moments that feel curated and purposeful, transforming simple visuals into powerful brand stories.",
    },
    {
      number: "03",
      title: "Strategy",
      label: "Concept Frameworks",
      image: "/assets/service-strategy.png",
      body: "Structuring ideas with insight, direction, and clarity. Fuel builds thoughtful frameworks that define positioning, strengthen identity, and move brands toward long-term impact.",
    },
  ];

  return (
    <section data-reveal className="services-section section-dark">
      <div className="section-grid">
        <SectionIntro number="03" label="Premium services" dark />
      </div>
      <div className="services-lead">
        <h2
          className="split-title"
          aria-label="Design-driven studio delivering the structured visuals, refined digital system, and high-impact brand experiences shaped by aesthetics & Fuel®."
        >
          <span className="text-part left">
            Design-driven studio delivering the structured visuals,
          </span>
          <span className="text-part right">
            refined digital system, and high-impact brand experiences
          </span>{" "}
          <em>shaped by aesthetics &amp; Fuel®.</em>
        </h2>
        <Link className="text-link" to="/about">
          Explore more <Arrow />
        </Link>
      </div>
      <div className="service-list service-stack">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <div className="service-index">{service.number}</div>
            <img src={service.image} alt="" loading="lazy" />
            <div className="service-copy">
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
  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "Essential design support for new brands taking the first step.",
      features: [
        "Custom-crafted visual identity",
        "Responsive, modern website design",
        "High-quality imagery and production",
      ],
    },
    {
      name: "Professional",
      price: "7299",
      description: "Ideal for brands seeking refined systems and digital presence.",
      features: [
        "Custom-crafted visual identity",
        "Responsive, modern website design",
        "High-quality imagery and production",
        "Structured layouts with clean typography",
        "Conversion-focused page strategy",
        "Fast, optimized performance setup",
      ],
    },
    {
      name: "Elite",
      price: "10999",
      description: "High-touch and a fully crafted brand experience by Fuel.",
      features: [
        "Custom-crafted visual identity",
        "Responsive, modern website design",
        "High-quality imagery and production",
        "Structured layouts with clean typography",
        "Conversion-focused page strategy",
        "Fast, optimized performance setup",
        "Seamless CMS and organization",
        "Dedicated support for revisions",
      ],
    },
  ];

  return (
    <section data-reveal className="pricing-section section-paper">
      <div className="section-grid">
        <SectionIntro number="04" label="Pricing" />
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className="pricing-card" key={plan.name}>
            <div className="pricing-card-top">
              <span className="muted-label">{plan.name}</span>
              <p>{plan.description}</p>
            </div>
            <div className="price">
              <span>$</span>
              <b>{plan.price}</b>
              <small>/ Month</small>
            </div>
            <Link className="button-dark" to="/contact">
              Join us now <Arrow />
            </Link>
            <div className="included">
              <span>What’s included</span>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section data-reveal className="testimonial-section section-dark">
      <div className="section-grid">
        <SectionIntro number="05" label="Testimonial" dark />
      </div>
      <div className="testimonial-layout">
        <div className="testimonial-quote">
          “Fuel delivered with clarity. Their structured workflow and fast turnaround made our
          redesign launch seamless. They’ve become our trusted partner for every major creative
          push.”
          <div className="testimonial-author">
            <strong>Adrian Velasco</strong>
            <span>NovaLabs / Creative Lead</span>
          </div>
        </div>
        <div className="testimonial-side">
          <div className="testimonial-counts" aria-label="Selected project counts">
            <div>
              <b>122+</b>
              <span>Success rate</span>
            </div>
            <div>
              <b>257+</b>
              <span>Reliable execution</span>
            </div>
            <div>
              <b>315+</b>
              <span>Client satisfaction</span>
            </div>
          </div>
          <div className="testimonial-metrics">
            <div>
              <b>99%</b>
              <span>Success rate</span>
              <small>Reliable execution</small>
            </div>
            <div>
              <b>84%</b>
              <span>Client satisfaction</span>
              <small>Seamless delivery</small>
            </div>
            <div>
              <b>94%</b>
              <span>Repeat work</span>
              <small>Trusted partnership</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  const entries = ["Outside", "Juvede", "Zaine", "Wall Out", "Geaton", "Skate"];
  return (
    <section data-reveal className="archive-section section-paper">
      <div className="section-grid">
        <SectionIntro number="06" label="Archive" />
      </div>
      <div className="archive-head">
        <h2>
          Past
          <br />
          <em>signals</em>
        </h2>
        <Link className="text-link" to="/work/portfolio">
          Contact now <Arrow />
        </Link>
      </div>
      <div className="archive-list">
        {entries.map((entry, index) => (
          <div key={entry} className="archive-entry">
            <span>{index % 2 === 0 ? "2025" : "2024"}</span>
            <strong>{entry}</strong>
            <small>
              View case <Arrow />
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
      "2.06M",
      "Global impressions",
      "Fuel moves beyond simple authenticity, creating refined systems that shape digital presence.",
    ],
    [
      "160K",
      "Community reach",
      "Elevating identity with structured clarity. Fuel crafts experiences that extend far beyond visual form.",
    ],
    [
      "750+",
      "Creative hours logged",
      "Through precision and intention, Fuel transforms ideas into cohesive narratives that define brands.",
    ],
    [
      "257+",
      "Projects completed",
      "Blending modern aesthetics with functional design, Fuel delivers refined solutions that push brands.",
    ],
  ];
  return (
    <section data-reveal className="stats-section section-dark">
      <div className="section-grid">
        <SectionIntro number="07" label="Stats" dark />
      </div>
      <div className="stats-grid">
        {stats.map(([value, label, body]) => (
          <div className="stat" key={label}>
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
    ["001", "Velocity Becomes", "Art Direction"],
    ["002", "Way To Clearance", "Books"],
    ["003", "All Grapples", "Automotive"],
    ["004", "Flowers Love", "Gardening"],
  ];
  return (
    <section data-reveal className="articles-section section-paper">
      <div className="section-grid">
        <SectionIntro number="08" label="Article" />
      </div>
      <div className="article-list">
        {articles.map(([number, title, category]) => (
          <Link to="/work/portfolio" className="article-row" key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <em>{category}</em>
            <Arrow />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FAQSection({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section data-reveal className={`faq-section ${dark ? "section-dark" : "section-paper"}`}>
      <div className="section-grid">
        <SectionIntro number="09" label="Frequently asked questions" dark={dark} />
      </div>
      <div className="faq-layout">
        <div className="faq-media">
          <img src="/assets/faq-portrait.png" alt="Portrait with a soft blue flower" />
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="showreel">
            Play showreel <Arrow />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${open === index ? "is-open" : ""}`} key={faq.question}>
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
              >
                <span>{faq.question}</span>
                <span aria-hidden="true">{open === index ? "−" : "+"}</span>
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
        <section data-reveal className="subpage-hero portfolio-hero">
          <div className="subpage-hero-copy">
            <span className="eyebrow">Latest (07)</span>
            <h1>
              Latest
              <br />
              <em>Portfolio</em>
            </h1>
            <p>A curated collection of structured visuals and modern digital systems.</p>
          </div>
        </section>
        <section data-reveal className="portfolio-index section-paper">
          <div className="section-grid">
            <SectionIntro number="01" label="Portfolio" />
          </div>
          <div className="project-grid project-grid-index">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>
        <FAQSection dark />
      </main>
    </AppShell>
  );
}

const processSteps = [
  {
    number: "001",
    title: "Research",
    body: "Exploring insights through structured analysis and clear intention. Fuel uncovers patterns and direction, creating a grounded foundation that shapes purposeful design decisions.",
    features: [
      "Market discovery & visual mapping",
      "Brand positioning review",
      "Dedicated creative, 20 hrs weekly",
    ],
  },
  {
    number: "002",
    title: "Experiment",
    body: "Translating ideas into visual concepts with clarity, balance, and exploration. Fuel moves beyond predictable form, crafting variations that reveal new creative possibilities.",
    features: [
      "Concept sketches & directions",
      "Visual style development",
      "Dedicated creative, 20 hrs weekly",
    ],
  },
  {
    number: "003",
    title: "Refinement",
    body: "Polishing every detail with precision and structure. Fuel refines layout, tone, and expression, delivering a cohesive system shaped for clarity and long-term impact.",
    features: [
      "Final design adjustments",
      "System-wide consistency check",
      "Dedicated creative, 20 hrs weekly",
    ],
  },
];

export function AboutPage() {
  return (
    <AppShell>
      <main>
        <section data-reveal className="subpage-hero about-hero">
          <div className="subpage-hero-copy">
            <span className="eyebrow">Our studio</span>
            <h1>
              We are
              <br />
              <em>here.</em>
            </h1>
            <p>One part-time creative dedicated to your continuous stream of projects.</p>
          </div>
        </section>
        <section data-reveal className="process-section section-paper">
          <div className="section-grid">
            <SectionIntro number="01" label="Our studio" />
          </div>
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-row" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
                <ul>
                  {step.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <StatsSection />
        <FAQSection />
      </main>
    </AppShell>
  );
}

export function ContactPage() {
  return (
    <AppShell>
      <main>
        <section data-reveal className="contact-hero">
          <div className="contact-hero-inner">
            <span className="eyebrow">Get in touch</span>
            <h1>
              Let’s make
              <br />
              <em>something</em>
              <br />
              matter.
            </h1>
            <p>
              Pick a plan, submit a job request, and your イメージ will kickoff within 24 hours.
            </p>
            <Link className="button-light" to="/contact">
              Start a job request <Arrow />
            </Link>
          </div>
          <div className="contact-image">
            <img src="/assets/service-portrait.png" alt="Portrait in a sculptural studio setting" />
          </div>
        </section>
        <FAQSection dark={false} />
      </main>
    </AppShell>
  );
}
