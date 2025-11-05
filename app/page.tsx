'use client';
import React from "react";
import "./globals.css";

const brand = {
  name: "Hatware Consulting",
  tagline: "Software technology & consulting, delivered with craftsmanship.",
  primary: "#0F172A",
  accent: "#22C55E",
  accent2: "#06B6D4",
  bg: "#0B1020",
  text: "#E5E7EB",
};

function HatwareLogo({ size = 40, withWordmark = false }: { size?: number; withWordmark?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width={size} height={size * 0.8} viewBox="0 0 240 200" role="img" aria-label="Hatware logo">
        <ellipse cx="120" cy="150" rx="95" ry="18" fill={brand.primary} />
        <ellipse cx="120" cy="148" rx="100" ry="22" fill="#111827" opacity="0.65" />
        <path
          d="M60 140 L80 50 C82 44 90 40 97 42 L120 50 L143 42 C150 40 158 44 160 50 L180 140 Z"
          fill={brand.primary}
        />
        <rect x="72" y="102" width="96" height="12" rx="6" fill={brand.accent} />
        <g stroke={brand.accent2} strokeWidth="3" strokeLinecap="round">
          <circle cx="90" cy="108" r="3" fill={brand.accent2} />
          <line x1="93" y1="108" x2="120" y2="108" />
          <circle cx="120" cy="108" r="3" fill={brand.accent2} />
          <line x1="123" y1="108" x2="150" y2="108" />
          <circle cx="150" cy="108" r="3" fill={brand.accent2} />
        </g>
      </svg>
      {withWordmark && (
        <div className="leading-tight">
          <div className="font-semibold tracking-tight text-white text-xl sm:text-2xl">Hatware</div>
          <div className="text-slate-300 text-xs sm:text-sm">Consulting</div>
        </div>
      )}
    </div>
  );
}

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

function SectionHeading({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {kicker && <p className="uppercase tracking-widest text-xs text-slate-400 mb-3">{kicker}</p>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-300">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 backdrop-blur bg-slate-950/60">
      <Container className="py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <HatwareLogo size={36} withWordmark />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="ml-3 inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Book a consult
        </a>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: brand.accent + "33" }} />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full blur-3xl" style={{ background: brand.accent2 + "33" }} />
      </div>
      <Container className="pt-16 pb-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <Pill>Enterprise-grade consulting</Pill>
          <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            Build, scale, and secure your software with a partner who ships.
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl">
            {brand.tagline} From cloud-native architectures to robust QA automation, we help teams deliver faster with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-slate-950 font-medium hover:bg-emerald-400">Start a project</a>
            <a href="#work" className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-slate-200 font-medium hover:bg-slate-800/60">See our work</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-slate-400 text-xs">
            <span>Trusted stack:</span>
            <span className="inline-flex items-center gap-3 opacity-80">
              <span className="font-mono">AWS</span>
              <span className="font-mono">Terraform</span>
              <span className="font-mono">Python</span>
              <span className="font-mono">Playwright</span>
              <span className="font-mono">Airflow</span>
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <HatwareLogo size={48} />
              <span className="text-xs text-slate-400">Case Study Snapshot</span>
            </div>
            <h3 className="mt-4 text-white text-lg font-medium">From weeks to minutes: CI/CD for data platform</h3>
            <p className="mt-2 text-sm text-slate-300">
              Automated integration tests, ephemeral environments, and secure deployments cut release times by 92% while increasing quality signal.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Time-to-Release</span><span className="font-semibold">-92%</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Flaky Tests</span><span className="font-semibold">-80%</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Coverage</span><span className="font-semibold">+40%</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Deploy Frequency</span><span className="font-semibold">×5</span></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Cloud & Platform Engineering",
      desc: "AWS architectures, Kubernetes, IaC (Terraform), security-by-default, cost observability.",
      points: ["VPCs, multi-account guardrails", "Serverless & containers", "FinOps & threat modeling"],
    },
    {
      title: "Test Automation & QA Strategy",
      desc: "Frameworks in Python/TypeScript, shift-left testing, CI pipelines, reliability engineering.",
      points: ["E2E with Playwright", "API contract tests", "Data-quality (Great Expectations)"],
    },
    {
      title: "Data & AI Enablement",
      desc: "Modern data stack, batch/stream pipelines, feature stores, evaluation harnesses for GenAI.",
      points: ["Airflow & MWAA", "Athena/Lakehouse", "LLM eval & guardrails"],
    },
  ];
  return (
    <section id="services" className="py-20 bg-slate-950">
      <Container>
        <SectionHeading
          kicker="What we do"
          title="End-to-end consulting that meets you where you are"
          subtitle="Engage for an audit, a project, or as an extension of your team."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ background: brand.accent2 }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, t: "Discover", d: "Workshops, interviews, and architecture reviews to align on goals." },
    { n: 2, t: "Design", d: "Roadmap, milestones, and solution blueprints with measurable outcomes." },
    { n: 3, t: "Deliver", d: "Agile execution with CI/CD, IaC, and transparent reporting." },
    { n: 4, t: "Evolve", d: "Operate, optimize, and transfer knowledge for long-term success." },
  ];
  return (
    <section id="process" className="py-20 bg-slate-950/95">
      <Container>
        <SectionHeading kicker="How we work" title="A pragmatic, outcomes-first delivery model" />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="text-sm text-slate-400">Step {s.n}</div>
              <div className="mt-1 text-white font-semibold">{s.t}</div>
              <p className="mt-2 text-slate-300 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Work() {
  const items = [
    {
      title: "Financial data platform (Capalyx)",
      bullets: ["Multi-env IaC with Terraform", "MWAA (Airflow) orchestration", "Automated QA & observability"],
    },
    {
      title: "E2E testing overhaul",
      bullets: ["Playwright migration", "400% faster runs", "Shift-left & contract tests"],
    },
    {
      title: "Cloud cost & security program",
      bullets: ["Guardrails & OPA policies", "Least-privilege IAM", "Dashboards & alerts"],
    },
  ];
  return (
    <section id="work" className="py-20 bg-slate-950">
      <Container>
        <SectionHeading kicker="Selected work" title="Recent projects & case studies" />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-3">
                <HatwareLogo size={28} />
                <h3 className="text-white font-semibold">{it.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ background: brand.accent }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/95">
      <Container>
        <SectionHeading kicker="About" title="Craft, clarity, and accountability" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <p>
              Hatware Consulting is a boutique engineering partner focused on building reliable, secure, and scalable systems. We bring hands-on expertise across cloud, automation, and data—so you can ship with confidence.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Founded</span><span className="font-semibold text-white">2025</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Focus</span><span className="font-semibold text-white">Cloud · QA · Data</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">Engagements</span><span className="font-semibold text-white">Audits → Delivery</span></li>
              <li className="rounded-lg bg-slate-800/60 p-3"><span className="block text-slate-400 text-xs">HQ</span><span className="font-semibold text-white">Orange County, CA</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h4 className="text-white font-semibold">Core principles</h4>
            <ul className="mt-3 space-y-3 text-slate-300 text-sm">
              <li><span className="font-medium text-white">Security-first:</span> least privilege, paved roads, automated checks.</li>
              <li><span className="font-medium text-white">Automation everywhere:</span> CI/CD, IaC, test suites that pay back.</li>
              <li><span className="font-medium text-white">Observable by design:</span> metrics, logs, traces, SLOs.</li>
              <li><span className="font-medium text-white">Clear ownership:</span> docs, runbooks, and handoffs that stick.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "They cut our release cycle from weeks to minutes without sacrificing quality.", a: "Engineering Manager, FinTech" },
    { q: "The new QA strategy finally gave us trustworthy signals and fewer late surprises.", a: "Director of Product, SaaS" },
    { q: "Their Terraform guardrails saved us from costly security gaps.", a: "Head of Platform, Enterprise" },
  ];
  return (
    <section className="py-20 bg-slate-950">
      <Container>
        <SectionHeading kicker="What clients say" title="Outcomes our partners care about" />
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((x) => (
            <figure key={x.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <blockquote className="text-slate-200">“{x.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-400">— {x.a}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950/95">
      <Container>
        <SectionHeading kicker="Get in touch" title="Tell us about your goals" subtitle="We’ll follow up within one business day." />
        <form className="mx-auto max-w-3xl grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-1">
              <span className="text-sm text-slate-300">Name</span>
              <input className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-300">Email</span>
              <input type="email" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@company.com" />
            </label>
          </div>
          <label className="grid gap-1">
            <span className="text-sm text-slate-300">How can we help?</span>
            <textarea rows={5} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="A brief description of your project" />
          </label>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">We’ll never share your information.</div>
            <button className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-slate-950 font-medium hover:bg-emerald-400" type="button">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HatwareLogo size={28} />
          <span className="text-slate-300 text-sm">© {new Date().getFullYear()} Hatware Consulting. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </Container>
    </footer>
  );
}

export default function HatwareHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
