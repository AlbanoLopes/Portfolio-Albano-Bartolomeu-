import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wifi,
  X,
} from "lucide-react";

const skills = [
  { name: "HTML", group: "Frontend" },
  { name: "CSS", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "React", group: "Frontend" },
  { name: "PHP", group: "Backend" },
  { name: "SQL", group: "Dados" },
  { name: "MySQL", group: "Dados" },
  { name: "Git", group: "Ferramentas" },
  { name: "GitHub", group: "Ferramentas" },
  { name: "VS Code", group: "Ferramentas" },
];

const networkSkills = [
  "Modelo OSI e TCP/IP",
  "Endereçamento IP e IPv4",
  "IP público e privado",
  "Máscaras de rede e Sub-redes",
  "VLSM",
  "DHCP e DNS",
  "Routers e Switches",
  "Ethernet e Wi-Fi / WLAN",
  "Padrões de cabeamento",
  "Fibra óptica",
  "Segurança de redes",
  "Comandos de rede",
];

const projects = [
  {
    number: "01",
    title: "Sistema de Facturação",
    description: "Desenvolvimento de um sistema para apoiar processos de facturação e gestão.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    number: "02",
    title: "Websites",
    description: "Desenvolvimento de websites modernos, responsivos e orientados para diferentes necessidades.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "03",
    title: "Plataforma de Venda de Bilhetes",
    description: "Desenvolvimento de uma plataforma para venda e gestão de bilhetes.",
    tags: ["Web", "PHP", "MySQL"],
  },
  {
    number: "04",
    title: "Sistema Administrativo de Anúncios",
    description: "Desenvolvimento de uma solução administrativa para gestão de anúncios.",
    tags: ["React", "PHP", "MySQL"],
  },
];

const courses = [
  "Redes de Computadores — MSq Tecnologias",
  "Curso de Inglês",
  "Bootcamp — IPVX",
  "Infraestrutura de Redes",
  "Gestão de Projetos de TI",
  "Power BI",
  "DevOps",
  "Backup e Replicação de Dados",
];

const navItems = [
  ["Sobre", "sobre"],
  ["Habilidades", "habilidades"],
  ["Redes", "redes"],
  ["Formação", "formacao"],
  ["Projetos", "projetos"],
  ["Contacto", "contacto"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <span className="brand-mark">AN</span>
            <span>Albano.</span>
          </a>

          <button
            className="menu-button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>
              Contactar <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="status-dot" />
                Disponível para novos desafios
              </div>
              <h1>
                Albano Nongava
                <span>Lopes Bartolomeu</span>
              </h1>
              <p className="hero-role">
                Desenvolvedor <b>·</b> Técnico de Redes de Computadores
              </p>
              <p className="hero-text">
                Tecnologia, desenvolvimento e soluções para problemas reais.
                Construo soluções digitais e tenho especial interesse por
                desenvolvimento de software e redes de computadores.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projetos">
                  Ver projetos <ChevronRight size={18} />
                </a>
                <a className="button secondary" href="#contacto">
                  Entrar em contacto
                </a>
              </div>
              <div className="hero-meta">
                <span><Code2 size={17} /> Desenvolvimento</span>
                <span><Network size={17} /> Redes</span>
                <span><Sparkles size={17} /> Aprendizagem contínua</span>
              </div>
            </div>

            <div className="hero-visual reveal delay">
              <div className="profile-orbit orbit-one" />
              <div className="profile-orbit orbit-two" />
              <div className="photo-card">
                <img src="/profile.jpg" alt="Albano Nongava Lopes Bartolomeu" />
                <div className="photo-caption">
                  <strong>Albano Nongava</strong>
                  <span>Desenvolvedor · Redes</span>
                </div>
              </div>
              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                  <span className="mini-dot" />
                  <span className="terminal-label">albano.dev</span>
                </div>
                <div className="terminal-code">
                  <p><span className="code-purple">const</span> developer = {"{"}</p>
                  <p>&nbsp;&nbsp;name: <span className="code-green">"Albano"</span>,</p>
                  <p>&nbsp;&nbsp;focus: <span className="code-green">"Technology"</span>,</p>
                  <p>&nbsp;&nbsp;skills: [</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"React"</span>, <span className="code-green">"PHP"</span>,</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"Networks"</span></p>
                  <p>&nbsp;&nbsp;],</p>
                  <p>&nbsp;&nbsp;mindset: <span className="code-green">"Keep learning"</span></p>
                  <p>{"}"}</p>
                  <span className="cursor" />
                </div>
                <div className="profile-card-bottom">
                  <span><Server size={16} /> Software</span>
                  <span><Wifi size={16} /> Networks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container two-column">
            <div>
              <p className="section-kicker">01 / Sobre mim</p>
              <h2>Construir, aprender e resolver.</h2>
            </div>
            <div className="about-copy">
              <p>
                Sou estudante de Engenharia Informática e Sistemas de Informação,
                com formação técnica em informática e conhecimentos em
                desenvolvimento de software, redes de computadores e tecnologias
                digitais.
              </p>
              <p>
                Gosto de transformar necessidades em soluções práticas, aprender
                novas tecnologias e trabalhar em equipa para resolver problemas.
              </p>
              <div className="value-grid">
                <div><Code2 size={20} /><strong>Desenvolvimento</strong><span>Web e sistemas</span></div>
                <div><Network size={20} /><strong>Redes</strong><span>Ethernet e Wi-Fi</span></div>
                <div><Sparkles size={20} /><strong>Aprendizagem</strong><span>Evolução contínua</span></div>
                <div><CheckCircle2 size={20} /><strong>Problemas</strong><span>Foco em soluções</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 / Habilidades</p>
                <h2>Tecnologias que utilizo.</h2>
              </div>
              <p>Uma base prática em desenvolvimento, dados e ferramentas de trabalho.</p>
            </div>

            <div className="skills-layout">
              <div className="skill-panel">
                <div className="panel-icon"><Code2 size={22} /></div>
                <h3>Desenvolvimento</h3>
                <div className="tag-list">
                  {skills.slice(0, 7).map((skill) => (
                    <span key={skill.name} className="tech-tag">{skill.name}</span>
                  ))}
                </div>
              </div>

              <div className="skill-panel">
                <div className="panel-icon"><Database size={22} /></div>
                <h3>Dados & Ferramentas</h3>
                <div className="tag-list">
                  {skills.slice(5).map((skill) => (
                    <span key={skill.name} className="tech-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="redes" className="section">
          <div className="container network-section">
            <div className="network-copy">
              <p className="section-kicker">03 / Redes</p>
              <h2>Técnico de Redes de Computadores.</h2>
              <p>
                Conhecimentos em implementação e configuração de redes Ethernet
                e Wi-Fi, infraestrutura, endereçamento, serviços e segurança.
              </p>
              <div className="network-badge">
                <ShieldCheck size={20} />
                Infraestrutura & Segurança
              </div>
            </div>
            <div className="network-list">
              {networkSkills.map((item) => (
                <div className="network-item" key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">04 / Formação</p>
                <h2>Formação e aprendizagem.</h2>
              </div>
            </div>

            <div className="education-grid">
              <article className="education-card featured">
                <div className="education-icon"><GraduationCap size={24} /></div>
                <p className="education-label">Em frequência</p>
                <h3>Engenharia Informática e Sistemas de Informação</h3>
                <p>Frequência do 3.º ano — INSUTEC.</p>
              </article>

              <article className="education-card">
                <div className="education-icon"><BriefcaseBusiness size={24} /></div>
                <p className="education-label">Formação técnica</p>
                <h3>Técnico Médio de Informática</h3>
                <p>Instituto Politécnico Industrial de Luanda — IPIL (Makarenko).</p>
              </article>
            </div>

            <div className="courses">
              <h3>Cursos e formação complementar</h3>
              <div className="course-grid">
                {courses.map((course) => (
                  <div className="course-item" key={course}>
                    <CheckCircle2 size={17} />
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">05 / Projetos</p>
                <h2>Projetos em destaque.</h2>
              </div>
              <p>Alguns dos projetos e soluções desenvolvidos ao longo da minha jornada.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-icon"><Globe2 size={23} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button className="project-link" type="button">
                    Ver projeto <ExternalLink size={16} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="container contact-card">
            <div className="contact-copy">
              <p className="section-kicker">06 / Contacto</p>
              <h2>Vamos criar algo juntos?</h2>
              <p>
                Estou aberto a novos projetos, oportunidades e desafios
                relacionados com tecnologia, desenvolvimento e redes.
              </p>
              <div className="contact-links">
                <a href="mailto:SEU_EMAIL@example.com"><Mail size={18} /> devalbano58@gmail.com</a>
                <a href="#" onClick={(event) => event.preventDefault()}><Linkedin size={18} />Albano Lopes</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Nome
                <input type="text" placeholder="O seu nome" />
              </label>
              <label>
                Email
                <input type="email" placeholder="seuemail@exemplo.com" />
              </label>
              <label>
                Mensagem
                <textarea rows={5} placeholder="Como posso ajudar?" />
              </label>
              <button className="button primary" type="submit">
                Enviar mensagem <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <a className="brand" href="#inicio">
              <span className="brand-mark">AN</span>
              <span>Albano.</span>
            </a>
            <p>Desenvolvimento · Redes · Tecnologia</p>
          </div>
          <div className="footer-right">
            <a href="#inicio"><UserRound size={16} /> Voltar ao início</a>
            <span>© 2026 Albano Nongava Lopes Bartolomeu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;