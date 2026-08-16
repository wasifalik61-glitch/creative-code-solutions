import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Bot, Building2, CheckCircle2, ChevronRight, Code2,
  Database, Factory, GraduationCap, Hospital, Laptop, Mail, Menu,
  MessageCircle, Package, Phone, ShieldCheck, Sparkles, Users, Workflow, X,
  BarChart3, Smartphone, Settings2
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "(SaaS)",
    description: "Scalable, secure and modern software products tailored to your business requirements.",
    features: ["Web Applications", "SaaS Platforms", "Business Portals"]
  },
  {
    icon: Building2,
    title: "ERP, HRM & CRM",
    subtitle: "Business Management",
    description: "Integrated management systems that streamline operations, people, customers and business data.",
    features: ["ERP", "HRM", "CRM"]
  },
  {
    icon: Bot,
    title: "AI Industrial Automation",
    subtitle: "AI & Computer Vision",
    description: "AI-powered inspection and automation solutions designed to improve industrial productivity and quality.",
    features: ["Computer Vision", "AI Inspection", "Automation"]
  },
  {
    icon: GraduationCap,
    title: "School Management Systems",
    subtitle: "(LMS)",
    description: "Complete digital platforms for schools, colleges and training organizations.",
    features: ["Students", "Attendance", "Exams & LMS"]
  },
  {
    icon: Hospital,
    title: "Hospital Management System",
    subtitle: "Healthcare",
    description: "Connected healthcare workflows for patients, doctors, appointments, billing and administration.",
    features: ["Patients", "Appointments", "Billing"]
  },
  {
    icon: Laptop,
    title: "Website & App Development",
    subtitle: "Web & Mobile",
    description: "Responsive business websites and applications designed for excellent user experiences.",
    features: ["Websites", "Web Apps", "Mobile Apps"]
  }
];

const solutions = [
  ["ERP Solution", "Centralize finance, inventory, purchasing, sales and business operations.", Building2],
  ["HRM Solution", "Manage employees, attendance, leave, payroll workflows and performance.", Users],
  ["CRM Solution", "Manage leads, customers, sales pipelines, follow-ups and communication.", MessageCircle],
  ["School Management", "Digitize admissions, students, teachers, attendance, exams and fees.", GraduationCap],
  ["Hospital Management", "Manage patients, doctors, appointments, billing and clinical workflows.", Hospital],
  ["Inventory Management", "Track products, suppliers, purchases, sales, stock and reports.", Package]
];

const technologies = [
  "React", "C#", ".NET", "ASP.NET Core", "Python", "FastAPI",
  "SQL Server", "MongoDB", "OpenCV", "YOLO", "n8n", "REST API"
];

function App() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const update = (key, value) => setForm((old) => ({ ...old, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry - ${form.service || "Creative Code Solutions"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:creativecode514@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand-name" onClick={() => go("home")} aria-label="Creative Code Solution">
            Creative Code Solution
          </button>

          <nav className={open ? "nav-links show" : "nav-links"}>
            <button className="active" onClick={() => go("home")}>Home</button>
            <button onClick={() => go("services")}>Services</button>
            <button onClick={() => go("solutions")}>Solutions</button>
            <button onClick={() => go("technologies")}>Technologies</button>
            <button onClick={() => go("portfolio")}>Portfolio</button>
            <button onClick={() => go("about")}>About Us</button>
            <button onClick={() => go("contact")}>Contact</button>
            <button className="quote-small" onClick={() => go("contact")}>Get a Free Quote <ArrowRight size={15}/></button>
          </nav>

          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow one"></div>
          <div className="hero-glow two"></div>
          <div className="circuit circuit-left"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> SOFTWARE • AI • AUTOMATION</div>
              <h1>Building Software<br/><strong>for Better Future</strong></h1>
              <p>
                Creative Code Solutions builds custom software, SaaS platforms,
                business management systems, AI solutions and automation that help
                organizations innovate, automate and grow.
              </p>
              <div className="hero-buttons">
                <button className="btn primary" onClick={() => go("services")}>Explore Services <ArrowRight size={18}/></button>
                <button className="btn outline" onClick={() => go("contact")}>Contact Us <MessageCircle size={17}/></button>
              </div>
              <div className="hero-trust">
                <span><CheckCircle2/> Custom Built</span>
                <span><CheckCircle2/> Scalable</span>
                <span><CheckCircle2/> AI Ready</span>
              </div>
            </div>

            <div className="hero-art">
              <div className="tech-orb"></div>
              <div className="laptop">
                <div className="screen">
                  <div className="screen-bar"><i></i><i></i><i></i><span>creative-code.app</span></div>
                  <div className="screen-content">
                    <div className="screen-sidebar"></div>
                    <div className="screen-main">
                      <div className="screen-title"></div>
                      <div className="mini-cards"><i></i><i></i><i></i></div>
                      <div className="chart"></div>
                    </div>
                  </div>
                </div>
                <div className="keyboard"></div>
                <div className="base"></div>
              </div>
              <div className="float-ui ui-one"><Bot/><b>AI Engine</b><small>Ready</small></div>
              <div className="float-ui ui-two"><Workflow/><b>Automation</b><small>Connected</small></div>
              <div className="float-ui ui-three"><BarChart3/><b>Analytics</b><small>Live data</small></div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <SectionHeading eyebrow="WHAT WE DO" title="Our Services" text="Technology solutions designed around your business goals." />
            <div className="service-grid">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article className="service-card" key={s.title}>
                    <div className="service-icon"><Icon/></div>
                    <div>
                      <h3>{s.title}</h3>
                      <span className="service-sub">{s.subtitle}</span>
                    </div>
                    <p>{s.description}</p>
                    <div className="feature-tags">
                      {s.features.map((f) => <span key={f}>{f}</span>)}
                    </div>
                    <button onClick={() => go("contact")}>Learn More <ChevronRight size={15}/></button>
                  </article>
                );
              })}
            </div>

            <div className="stats">
              <Stat value="Custom" label="Software Solutions" icon={Settings2}/>
              <Stat value="AI" label="Intelligent Automation" icon={Bot}/>
              <Stat value="Web + App" label="Digital Experiences" icon={Smartphone}/>
              <Stat value="End-to-End" label="Development Support" icon={ShieldCheck}/>
            </div>
          </div>
        </section>

        <section id="solutions" className="section dark-section">
          <div className="container">
            <SectionHeading eyebrow="BUSINESS SOLUTIONS" title="Solutions Built for Real Work" text="Choose a starting point and customize it around your organization's workflow." />
            <div className="solution-grid">
              {solutions.map(([title, desc, Icon]) => (
                <article className="solution-card" key={title}>
                  <div className="solution-icon"><Icon/></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <button onClick={() => go("contact")}>Request Solution <ArrowRight size={15}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="section tech-section">
          <div className="container tech-wrap">
            <div>
              <div className="eyebrow"><Code2/> TECHNOLOGY</div>
              <h2>Modern technology.<br/><span>Practical engineering.</span></h2>
              <p>We use reliable, modern technologies to build maintainable systems that can evolve with your business.</p>
            </div>
            <div className="tech-box">
              {technologies.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <div className="container">
            <SectionHeading eyebrow="OUR WORK" title="Featured Solutions" text="Examples of the types of systems we can design and develop." />
            <div className="portfolio-grid">
              <Project title="AI Industrial Quality Analyzer" category="AI / INDUSTRIAL" icon={Factory} text="Computer vision workflow for defect detection, quality grading, inspection history and reporting." tech="Python • YOLO • OpenCV • .NET • React"/>
              <Project title="School Management System" category="EDUCATION / LMS" icon={GraduationCap} text="Student, teacher, attendance, examination, fee and administration modules." tech="ASP.NET Core • SQL Server • React"/>
              <Project title="Hospital Management System" category="HEALTHCARE" icon={Hospital} text="Patient registration, doctors, appointments, queues, billing and reporting." tech="C# • .NET • SQL Server • React"/>
              <Project title="Business ERP / CRM / HRM" category="BUSINESS" icon={Building2} text="Connected business operations, customers, employees, inventory, sales and reports." tech="React • .NET • SQL Server"/>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <div className="eyebrow"><Sparkles/> WHY CREATIVE CODE SOLUTIONS</div>
              <h2>Software that works for your business.</h2>
              <p>We focus on understanding the problem first, then designing a practical digital solution. Our goal is to deliver software that is useful, maintainable and ready to grow.</p>
            </div>
            <div className="why-grid">
              <Why icon={Code2} title="Custom Approach" text="No unnecessary features. Built around your workflow."/>
              <Why icon={ShieldCheck} title="Quality Focused" text="Clean, secure and maintainable implementation."/>
              <Why icon={Workflow} title="Automation Ready" text="Connect systems and reduce repetitive work."/>
              <Why icon={Database} title="Data Driven" text="Dashboards and reports for better decisions."/>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow"><MessageCircle/> START A PROJECT</div>
              <h2>Let's build your next solution.</h2>
              <p>Have an idea for software, an existing system that needs improvement, or an automation project? Send us the requirements.</p>
              <div className="contact-details">
                <a href="mailto:creativecode514@gmail.com"><Mail/> creativecode514@gmail.com</a>
                <a href="https://wa.me/923452151512" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp: 0345-2151512</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit}>
              <div className="form-two">
                <Field label="Your Name" value={form.name} onChange={(v) => update("name", v)} placeholder="Your name" required />
                <Field label="Email" value={form.email} onChange={(v) => update("email", v)} placeholder="you@example.com" type="email" required />
              </div>
              <label>Service
                <select value={form.service} onChange={(e) => update("service", e.target.value)}>
                  <option value="">Select a service</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </label>
              <label>Project Details
                <textarea rows="6" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us what you want to build..." required></textarea>
              </label>
              <button className="btn primary send" type="submit">Send Project Inquiry <ArrowRight size={18}/></button>
              <small>Submitting opens your email application with the project details.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div className="footer-logo"><img src="/logo.png" alt="Creative Code Solutions"/></div>
          <div>
            <h4>Services</h4>
            <p>Custom Software • SaaS • ERP • HRM • CRM</p>
            <p>AI Industrial Automation • LMS • Hospital Systems</p>
            <p>Website & App Development</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a href="mailto:creativecode514@gmail.com">creativecode514@gmail.com</a></p>
            <p><a href="https://wa.me/923452151512" target="_blank" rel="noreferrer">0345-2151512</a></p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Creative Code Solutions. All Rights Reserved.</span>
          <span>Software Solutions & Consultant</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span></span>{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Stat({ value, label, icon: Icon }) {
  return <div className="stat"><Icon/><div><b>{value}</b><span>{label}</span></div></div>;
}

function Project({ title, category, icon: Icon, text, tech }) {
  return (
    <article className="project">
      <div className="project-art"><div className="project-grid"></div><Icon/></div>
      <div className="project-info"><span>{category}</span><h3>{title}</h3><p>{text}</p><small>{tech}</small></div>
    </article>
  );
}

function Why({ icon: Icon, title, text }) {
  return <div className="why"><div><Icon/></div><h3>{title}</h3><p>{text}</p></div>;
}

function Field({ label, value, onChange, placeholder, type = "text", required = false }) {
  return <label>{label}<input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/></label>;
}

createRoot(document.getElementById("root")).render(<App/>);
