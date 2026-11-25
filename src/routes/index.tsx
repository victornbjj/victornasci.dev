import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Brain,
  Cloud,
  Code,
  Database,
  FileDown,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Moon,
  Network,
  PenTool,
  Phone,
  Server,
  Settings,
  ShieldHalf,
  Sun,
  X,
  Infinity as InfinityIcon,
  Heart,
  Coffee,
} from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/site/BrandIcons";
import {
  about,
  contacts,
  experience,
  nav,
  projects,
  skills,
  tech,
  type Stack,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J. Victor P Nascimento" },
      { name: "description", content: "Olá, me chamo João Victor! Sou um Engenheiro de Software apaixonado por tecnologia e inovação." },
      { property: "og:title", content: "J. Victor P Nascimento" },
      { property: "og:description", content: "Sou um Engenheiro de Software apaixonado por tecnologia e inovação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const techIcons = [Code, ShieldHalf, Database, Monitor, Brain, Cloud];
const skillIcons = [Network, Lock, PenTool, Settings];

function Kicker({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${onDark ? "text-ink-muted" : "text-muted-foreground"}`}>
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">{children}</h2>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState<"all" | Stack>("all");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const filters: { id: "all" | Stack; label: string; Icon: typeof Layers }[] = [
    { id: "all", label: "Todos", Icon: Layers },
    { id: "backend", label: "Backend", Icon: Server },
    { id: "frontend", label: "Frontend", Icon: Monitor },
    { id: "devops", label: "DevOps", Icon: InfinityIcon },
  ];
  const visible = projects.filter((p) => filter === "all" || p.stack === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className={`fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-shadow ${scrolled ? "shadow-sm" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#" className="grid h-10 w-10 place-items-center bg-primary font-display text-lg font-extrabold text-primary-foreground">
            VN
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={dark}
              aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              title={dark ? "Ativar modo claro" : "Ativar modo escuro"}
              className="grid h-10 w-10 place-items-center border transition-colors hover:border-primary hover:text-primary"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="flex flex-col border-t bg-background md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="border-b px-5 py-3 font-medium hover:text-primary">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden pt-16">
        <div className="mx-auto grid min-h-[min(calc(100vh-4rem),52rem)] max-w-7xl grid-cols-1 items-end gap-10 px-5 pb-16 pt-16 md:grid-cols-12 md:px-8 md:pb-24">
          <div className="md:col-span-8">
            <h1 className="font-display text-6xl font-extrabold leading-[0.92] tracking-tight md:text-8xl lg:text-[8.5rem]">
              Olá, me chamo <span className="text-primary">João Victor!</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <div className="border-l-4 border-primary pl-6">
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Sou um Engenheiro de Software apaixonado por tecnologia e inovação.
              </p>
            </div>
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-10 top-24 select-none font-display text-[22rem] font-extrabold leading-none text-foreground/[0.03]">
          VN
        </div>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="border-t">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <Kicker>01</Kicker>
              <div className="mt-4"><SectionTitle>Sobre mim</SectionTitle></div>
            </div>
          </div>
          <div className="space-y-10 md:col-span-8">
            {about.map((p, i) => (
              <div key={i} className="grid grid-cols-[auto_minmax(0,1fr)] gap-6">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA — escuro */}
      <section id="experiencia" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Kicker onDark>02</Kicker>
          <div className="mt-4"><SectionTitle>Experiência</SectionTitle></div>
          <div className="mt-16 divide-y divide-ink-border border-y border-ink-border">
            {experience.map((e) => (
              <article key={e.role} className="group grid gap-6 py-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
                  <p className="mt-4 font-semibold">{e.company}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">{e.role}</h3>
                  <ul className="mt-5 space-y-3">
                    {e.items.map((it) => (
                      <li key={it} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-ink-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker>Stack em prática</Kicker>
              <div className="mt-4"><SectionTitle>Tecnologias</SectionTitle></div>
            </div>
            <p className="max-w-sm text-muted-foreground">Ferramentas presentes nos projetos, da API ao deploy.</p>
          </div>
          <div className="mt-16 grid border-l border-t sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((t, i) => {
              const Icon = techIcons[i] ?? Code;
              return (
                <article key={t.title} className="group border-b border-r bg-card p-8 transition-colors hover:bg-accent">
                  <div className="flex items-start justify-between">
                    <Icon className="h-7 w-7 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">{t.label}</span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="border px-2 py-1 font-mono text-xs">{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HABILIDADES — escuro */}
      <section id="habilidades" className="bg-ink-soft text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker onDark>Como eu trabalho</Kicker>
              <div className="mt-4"><SectionTitle>Habilidades</SectionTitle></div>
            </div>
            <p className="max-w-sm text-ink-muted">Competências que conectam código, produto e operação.</p>
          </div>
          <div className="mt-16 grid gap-px bg-ink-border md:grid-cols-2">
            {skills.map((s, i) => {
              const Icon = skillIcons[i] ?? Network;
              return (
                <article key={s.title} className="bg-ink-soft p-8">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-extrabold text-primary">0{i + 1}</span>
                    <Icon className="h-6 w-6 text-ink-muted" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-ink-muted">{s.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="border border-ink-border px-2 py-1 font-mono text-xs text-ink-muted">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-8" aria-label={s.levelLabel}>
                    <div className="h-1 w-full bg-ink-border">
                      <div className="h-1 bg-primary" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Kicker>03</Kicker>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle>Projetos</SectionTitle>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por stack">
              {filters.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={filter === id}
                  onClick={() => setFilter(id)}
                  className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${
                    filter === id ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {visible.map((p, i) => (
              <article key={p.title} className="group flex flex-col border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-primary">{p.stack}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">{p.tech}</p>
                {p.details.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t pt-5 text-sm">
                    {p.details.map((d) => (
                      <li key={d} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                        <span className="mt-2 h-1 w-3 bg-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        l.kind === "demo"
                          ? "inline-flex items-center gap-2 border border-foreground px-4 py-2 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                          : "inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
                      }
                    >
                      {l.kind === "github" && <GithubIcon className="h-4 w-4" />}
                      {l.kind === "gitlab" && <GitlabIcon className="h-4 w-4" />}
                      {l.kind === "demo" && <ArrowUpRight className="h-4 w-4" />}
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO — escuro */}
      <section id="contato" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
          <div className="md:col-span-5">
            <Kicker onDark>Vamos conversar</Kicker>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              Entre em contato <span className="text-primary">comigo!</span>
            </h2>
            <p className="mt-6 text-lg text-ink-muted">Aberto a oportunidades, projetos e boas conversas sobre tecnologia.</p>
            <a
              href="/documents/Joao_Victor_Nascimento_.pdf"
              download="Joao_Victor_Nascimento.pdf"
              className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              <FileDown className="h-5 w-5" /> Baixar currículo
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="divide-y divide-ink-border border-y border-ink-border">
              {contacts.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 py-6"
                >
                  <span className="grid h-12 w-12 place-items-center border border-ink-border transition-colors group-hover:border-primary group-hover:bg-primary">
                    {c.kind === "mail" && <Mail className="h-5 w-5" />}
                    {c.kind === "phone" && <Phone className="h-5 w-5" />}
                    {c.kind === "github" && <GithubIcon className="h-5 w-5" />}
                    {c.kind === "linkedin" && <LinkedinIcon className="h-5 w-5" />}
                  </span>
                  <span className="min-w-0">
                    <strong className="block font-mono text-xs uppercase tracking-widest text-ink-muted">{c.title}</strong>
                    <span className="block truncate font-display text-lg font-semibold md:text-2xl">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-primary bg-ink text-ink-muted">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-8 font-mono text-xs md:flex-row md:px-8">
          <p>© 2026 João Victor P. Nascimento — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> e muito <Coffee className="h-3.5 w-3.5" /> em João Pessoa–PB
          </p>
        </div>
      </footer>
    </div>
  );
}
