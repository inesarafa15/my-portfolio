"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Home, Code2, BriefcaseBusiness, GraduationCap, Languages, Mail, Github,
  Linkedin, Download, ArrowUpRight, ExternalLink, Menu, X, MapPin,
  Database, Cloud, Server, Layers, Sparkles, BookOpen, Heart
} from "lucide-react";

const skills = [
  { group: "Languages", technologies: ["JavaScript", "TypeScript"] },
  { group: "Frontend", technologies: ["React", "Next.js"] },
  { group: "Backend", technologies: ["Node.js", "Express", "NestJS", "Fastify", "Spring Boot", "JEE"] },
  { group: "Databases", technologies: ["MongoDB", "Oracle", "Redis"] },
  { group: "Cloud & DevOps", technologies: ["Docker", "Jenkins", "AWS", "Azure"] },
];

const skillIcons = [Code2, Layers, Server, Database, Cloud];

const projects = [
  {
    number: "01", title: "TrackChain", type: "Real-time logistics tracking", year: "2026",
    description: "A logistics tracking solution for sensitive shipments, combining IoT data and Kinéis satellite connectivity. Event-driven backend services process transport events and help anticipate cold-chain risks.",
    tags: ["Fastify", "MongoDB", "Redis", "Socket.IO", "Next.js", "Python", "Jenkins CI/CD"],
    featured: true
  },

  {
    number: "02", title: "Smart City Incidents", type: "Civic technology platform", year: "2025",
    description: "A web application for citizens to report geolocated urban incidents, with an administrative dashboard, real-time statistics and PDF/Excel report generation.",
    tags: ["Java Spring Boot", "Angular", "MySQL", "Spring Security", "Chart.js"]
  },
  {
    number: "03", title: "Opus E-learning", type: "Digital learning platform", year: "2025",
    description: "A web platform dedicated to learning digital skills, built with a modern full-stack architecture.",
    tags: ["Next.js", "NestJS", "TypeScript", "AWS", "Docker", "Redis", "MongoDB"]
  },
  {
    number: "04", title: "VisionaryAI", type: "AI image generation", year: "2025",
    description: "A multi-provider AI image generation application featuring the transfer of user history and preferences.",
    tags: ["Next.js", "Node.js", "Microsoft Azure"]
  },
  {
    number: "05", title: "BYD Website", type: "Web development", year: "2025",
    description: "Contribution to front-end and back-end development, including the integration of interactive features.",
    tags: ["Next.js", "Strapi"]
  },
  {
    number: "06", title: "AI Code Assistant Platform", type: "AI development", year: "2025",
    description: "Développement d’une plateforme web d’analyse automatique du code source, basée sur une architecture multi-agents,intégrant la génération de recommandations et la visualisation via diagrammes, avec analyse de repositories GitHub.",
    tags: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "LLMs", "Llama-3"]
  }
];

const projectPreviews: Record<string, string> = {
  "TrackChain": "/truckchain.png",
  "Smart City Incidents": "/smartcity-preview.png",
  "Opus E-learning": "/opuselearning.jpeg",
  "VisionaryAI": "/visionary.png",
  "BYD Website": "/byd.png",
  "AI Code Assistant Platform": "/aicodeassistant.jpeg",
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const experience = [
  { date: "FEB — AUG 2026", role: "End-of-studies Software Engineering Intern", company: "TELNET", detail: "Designed and developed an event-driven backend with Fastify and Redis, real-time logistics tracking with Socket.IO, IoT and Kinéis satellite data integration, and an LSTM forecasting model for temperature and humidity." },
  { date: "2024", role: "Full-Stack Developer", company: "Opus Lab", detail: "Contributed to the development of web solutions and implementation of application features." },
  { date: "JUL 2023 — PRESENT", role: "Web & Python Instructor", company: "Opus Lab · OPUS JUNIOR", detail: "Teaching HTML and CSS to teenagers and Python to high-school students." }
];

const education = [
  { date: "2023 — 2026", title: "Engineering Degree in Software Engineering", place: "Institut Supérieur des Arts Multimédia de la Manouba" },
  { date: "2023", title: "Bachelor's Degree in Computer Science & Multimedia", place: "Institut Supérieur des Arts Multimédia de la Manouba" },
  { date: "2020", title: "Mathematics Baccalaureate", place: "Lycée Menzah 9" }
];

const languages = [
  { name: "Arabic", detail: "Native", value: 100 },
  { name: "French", detail: "Advanced", value: 85 },
  { name: "English", detail: "Advanced", value: 85 },
  { name: "Spanish", detail: "Beginner", value: 25 },
  { name: "Turkish", detail: "Beginner", value: 25 }
];

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "journey", label: "Journey", icon: GraduationCap },
  { id: "languages", label: "Languages", icon: Languages },
  { id: "contact", label: "Contact", icon: Mail }
];

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`panel ${className}`}>{children}</div>;
}

export default function HomePage() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProjectImage, setSelectedProjectImage] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProjectImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProjectImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProjectImage]);

  const goTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContentScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const sections = ["home", "skills", "projects", "journey", "languages", "contact"];
    const index = Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth);
    const currentSection = sections[Math.min(index, sections.length - 1)];
    if (currentSection !== active) setActive(currentSection);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
        {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
      </button>

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-logo">IA<span>.</span></div>
        <div className="nav-rail">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => goTo(id)} className={`nav-button ${active === id ? "active" : ""}`} aria-label={label} title={label}>
              <Icon size={17}/>
            </button>
          ))}
        </div>
        <div className="sidebar-bottom"><span className="status-dot"/><span>AVAILABLE</span></div>
      </aside>

      <div className="content" onScroll={handleContentScroll}>
        <motion.section id="home" className="hero panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="hero-topline"><span className="tiny-label"><span className="status-dot"/> PORTFOLIO / 2026</span><span className="hero-location"><MapPin size={13}/> Tunis, Tunisia</span></div>
          <div className="hero-main">
            <motion.div className="avatar-wrap" initial={{ opacity: 0, x: -28, scale: 0.96 }} animate={{ opacity: 1, x: 0, y: prefersReducedMotion ? 0 : [0, -7, 0], scale: 1 }} transition={{ opacity: { duration: 0.65, delay: 0.12 }, x: { duration: 0.65, delay: 0.12 }, scale: { duration: 0.65, delay: 0.12 }, y: prefersReducedMotion ? { duration: 0.01 } : { duration: 5, ease: "easeInOut", repeat: Infinity, delay: 0.9 } }}>
              <div className="avatar-ring"><div className="avatar-placeholder"><Image src="/ines-arafa-portrait.png" alt="Portrait of Ines Arafa" fill sizes="(max-width: 700px) 72vw, 420px" className="avatar-photo" priority /></div></div>
              <span className="orbit orbit-a"/><span className="orbit orbit-b"/>
            </motion.div>
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { delayChildren: 0.2, staggerChildren: 0.11 } } }}>
              <motion.span className="eyebrow" variants={heroItemVariants}>HELLO, WORLD! I'M</motion.span>
              <motion.h1 variants={heroItemVariants}>Ines <span>Arafa</span></motion.h1>
              <motion.h2 variants={heroItemVariants}>Software Engineer <i>|</i> Full-Stack Developer</motion.h2>
              <motion.p variants={heroItemVariants}>I build modern web applications and software solutions, combining engineering, creativity and technology to turn ideas into reality.</motion.p>
              <motion.div className="hero-tags" variants={heroItemVariants}><span>React</span><span>Next.js</span><span>Node.js</span><span>TypeScript</span></motion.div>
              <motion.div className="hero-actions" variants={heroItemVariants}>
                <button className="primary-button" onClick={() => goTo("projects")}>Explore My Work <ArrowUpRight size={16}/></button>
                <a className="secondary-button" href="/CV_Ines_Arafa.pdf" download>Download CV <Download size={15}/></a>
              </motion.div>
            </motion.div>
          </div>
          <div className="hero-footer"><span>SOFTWARE ENGINEERING</span><span>BUILDING IDEAS INTO DIGITAL EXPERIENCES</span><span>01 / 06</span></div>
          <div className="hero-corner"/>
        </motion.section>

        <div className="dashboard-grid">
          <section id="skills" className="section-anchor">
            <Panel className="skills-panel">
              <SectionTitle eyebrow="MY EXPERTISE" title="Skills & Technologies" subtitle="Tools and technologies I use to design and build software."/>
              <div className="skill-grid">
                {skills.map((skill, i) => {
                  const SkillIcon = skillIcons[i];
                  return <article className="skill-card" key={skill.group}>
                    <div className="skill-card-top"><span className="skill-card-icon"><SkillIcon size={26}/></span><h3>{skill.group}</h3></div>
                    <div className="skill-tech-list">
                      {skill.technologies.map(technology => <span className="skill-tech" key={technology}>{technology}</span>)}
                    </div>
                  </article>;
                })}
              </div>
            </Panel>
          </section>

          <section id="projects" className="section-anchor">
            <Panel className="projects-panel">
              <div className="projects-heading"><SectionTitle eyebrow="SELECTED WORK / 2025—2026" title="My Projects" subtitle="A selection of applications and solutions I've worked on."/></div>
              <div className="project-gallery-grid" aria-label="All projects">
                {projects.map((project, i) => {
                  const previewImage = projectPreviews[project.title];
                  return <motion.article className={`project-card project-card-${i % 3}`} key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}>
                    <div className={`project-art ${previewImage ? "project-art-photo" : ""}`}>
                      <span className="project-number">{project.number}</span>
                      {previewImage ? <button type="button" className="project-photo-frame" onClick={() => setSelectedProjectImage(previewImage)} aria-label={`View ${project.title} image enlarged`} aria-haspopup="dialog"><Image src={previewImage} alt={`${project.title} project preview`} fill quality={95} sizes="(max-width: 700px) 90vw, 34vw" /></button> : <div className="preview-window">
                        <div className="preview-dots"><i/><i/><i/></div>
                        <div className="preview-chart" aria-hidden="true"><i/><i/><i/><i/><i/></div>
                      </div>}
                    </div>
                    <div className="project-info">
                      <div className="project-info-top"><span>{project.type}</span><span>{project.year}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  </motion.article>;
                })}
              </div>
            </Panel>
          </section>
        </div>

        <div className="dashboard-grid lower-grid">
          <section id="journey" className="section-anchor">
            <Panel className="journey-panel">
              <SectionTitle eyebrow="WHERE I'VE BEEN" title="My Journey" subtitle="Experience, learning and continuous growth."/>
              <div className="journey-columns">
                <div className="journey-column experience-column">
                  <div className="subsection-label"><BriefcaseBusiness size={15}/> EXPERIENCE</div>
                  <div className="timeline">
                    {experience.map(item => <article className="timeline-item" key={item.company + item.date}>
                      <span className="timeline-dot"/><div className="timeline-date">{item.date}</div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.detail}</p>
                    </article>)}
                  </div>
                </div>
                <div className="journey-column education-column">
                  <div className="subsection-label education-label"><GraduationCap size={16}/> EDUCATION</div>
                  <div className="education-list">
                    {education.map(item => <article className="education-item" key={item.title}><div className="education-icon"><BookOpen size={18}/></div><div><small>{item.date}</small><h3>{item.title}</h3><p>{item.place}</p></div></article>)}
                  </div>
                </div>
              </div>
            </Panel>
          </section>

          <section id="languages" className="section-anchor">
            <Panel className="languages-panel">
              <SectionTitle eyebrow="COMMUNICATION" title="Languages" subtitle="Languages I speak and use in everyday communication."/>
              <div className="language-grid">
                {languages.map((language, i) => <article className="language-card" key={language.name}>
                  <div className="language-card-top"><span className="language-card-index">0{i + 1}</span><span className="language-card-percent">{language.value}%</span></div>
                  <div className="language-card-mark"><Languages size={22}/></div>
                  <h3>{language.name}</h3>
                  <span className="language-card-level">{language.detail}</span>
                  <div className="language-track"><div style={{ width: `${language.value}%` }}/></div>
                </article>)}
              </div>
              <div className="extras">
                <div className="subsection-label"><Sparkles size={15}/> BEYOND THE CODE</div>
                <p>Enactus ISAMM <span>2021—2023</span></p>
                <div className="interest-list"><span><Heart size={13}/> Swimming</span><span><Heart size={13}/> Tennis</span><span><Heart size={13}/> Music</span></div>
              </div>
            </Panel>
          </section>
        </div>

        <section id="contact" className="section-anchor">
          <Panel className="contact-panel">
            <div><SectionTitle eyebrow="LET'S CONNECT" title="Have a project in mind?" subtitle="I'm always interested in discussing ideas, opportunities and meaningful projects."/></div>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:inesarafa8@gmail.com">Get in touch <ArrowUpRight size={16}/></a>
              <a className="social-link" href="https://github.com/inesarafa15" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a>
              <a className="social-link" href="https://linkedin.com/in/InesArafa" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a>
            </div>
            <div className="contact-email">INESARAFA8@GMAIL.COM <span>·</span> TUNIS, TUNISIA</div>
          </Panel>
          <footer><span>© 2026 INES ARAFA</span><span>DESIGNED & BUILT WITH <b>♥</b> AND CODE</span><button onClick={() => goTo("home")}>BACK TO TOP ↑</button></footer>
        </section>

        {selectedProjectImage && <div className="project-zoom-layer"><button type="button" className="project-zoom-backdrop" onClick={() => setSelectedProjectImage(null)} aria-label="Close enlarged image"/><section className="project-zoom-dialog" role="dialog" aria-modal="true" aria-label="Enlarged project image"><button type="button" className="project-zoom-close" onClick={() => setSelectedProjectImage(null)} aria-label="Close enlarged image"><X size={20} /></button><div className="project-zoom-frame"><Image src={selectedProjectImage} alt="Enlarged project preview" fill quality={95} sizes="90vw" /></div></section></div>}

      </div>
    </main>
  );
}

