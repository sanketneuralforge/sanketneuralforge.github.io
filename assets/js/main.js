/* ============================================================
   MAIN.JS — All site content lives here.
   Edit the CONFIG object to add/remove projects and posts.
   ============================================================ */

/* ══════════════════════════════════════════════════════════════
   SITE CONFIG — Edit this block to customise content
══════════════════════════════════════════════════════════════ */
const CONFIG = {

  /* ── Personal info ── */
  name: "Sanket",
  brand: "SanketNeuralForge",
  role: "Analytics and Data Science Professional",
  location: "Bengaluru, India",
  email: "sanketsrp176.sp@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanket-panchalwar/", /* TODO: confirm handle */
  github:   "https://github.com/sanketneuralforge",
  resume:   "assets/resume/Sanket_Panchalwar_Resume.pdf",

  tagline: "Analytics leader turning ambiguous business problems into measurable impact, across marketplace, gaming, and mobility.",

  about: [
    "I'm a <strong>Senior Data Analyst (Care) at Deliveroo, acquired by DoorDash</strong>, where I own end-to-end analytics strategy for a high-impact care vertical. My work spans designing experiment frameworks, building financial models, and presenting trade-off analyses directly to leadership.",
    "Six years in, my edge is the combination of <strong>deep statistical craft and product intuition</strong>. I've shipped measurement systems across food delivery, real-money gaming, and ride-hailing, and each domain has reinforced that the right framing of a question is worth more than the fanciest model.",
    "I'm currently pursuing an <strong>MTech in AI/ML at BITS Pilani (2025–2027)</strong>, deliberately revisiting fundamentals while working full-time, because I want a foundation that holds up when the tooling landscape shifts again.",
    "I'm actively seeking <strong>Lead Data Analyst or Data Scientist roles</strong> at product companies where data is a first-class citizen, not a reporting function."
  ],

  /* ── Snapshot cards on the right of the About section ── */
  facts: [
    { label: "Current role",  value: "Senior Data Analyst",      sub: "Deliveroo (DoorDash) · Bengaluru" },
    { label: "Education",     value: "MTech AI/ML",              sub: "BITS Pilani · 2025–2027" },
    { label: "Experience",    value: "6+ years",                 sub: "Marketplace · Gaming · Mobility" },
    { label: "Open to",       value: "Lead DA / Data Scientist", sub: "Product companies · Full-time" },
  ],

  /* ── Work experience ── */
  experience: [
    {
      date:    "June 2024 – Present",
      role:    "Senior Data Analyst, Care",
      company: "Deliveroo (acquired by DoorDash, 2025) · Bengaluru",
      bullets: [
        "Own end-to-end analytics strategy for the Care vertical, defining KPIs, designing experiments, building financial models, and presenting trade-off analyses directly to leadership.",
        "Led measurement for multiple LLM-powered product initiatives in the support stack, designing evaluation frameworks that translated model behaviour into business impact and shaped go/no-go decisions.",
        "Defined and standardised experimentation platform metrics across the Care organisation, giving all lines of business a shared measurement language and faster, more consistent experiment cycles.",
        "Serve as the primary analytics partner to Product and Engineering, translating ambiguous operational problems into structured cost-sizing analyses and actionable recommendations.",
        "Evaluated and proposed simplifications to care policies, designing evidence-based thresholds and tiered structures to balance customer satisfaction against cost control.",
      ]
    },
    {
      date:    "Aug 2022 – May 2024",
      role:    "Associate Data Scientist, Product",
      company: "Junglee Games · Bengaluru",
      bullets: [
        "Built a player prediction framework using early in-session behaviour signals to identify high-value users before churn, with outputs feeding directly into targeted retention campaigns.",
        "Developed an IPL Auto Team Suggester using historical performance data to reduce decision friction for users and lift contest participation.",
        "Analysed skill vs. chance dynamics in casual games (Ludo, Teen Patti) to provide evidence-based recommendations for game design and product strategy.",
        "Designed and implemented structured event validation pipelines that caught critical clickstream quality issues at scale, improving data reliability for downstream analysis.",
        "Led experiment analysis across new product feature launches, owning measurement design, statistical testing, and automated KPI reporting for stakeholder visibility.",
      ]
    },
    {
      date:    "Jan 2021 – Aug 2022",
      role:    "Senior Data Analyst",
      company: "Rapido · Bengaluru",
      bullets: [
        "Segmented the subscriber base using RFM analysis and geo-temporal rider profiling to surface high-potential cohorts for targeted push and in-app engagement campaigns.",
        "Built subscription demand forecasting models and automated KPI tracking pipelines using Spark and Airflow, replacing manual reporting with self-serve operational visibility.",
      ]
    },
    {
      date:    "Nov 2019 – Jan 2021",
      role:    "Decision Scientist",
      company: "Bounce Bikeshare · Bengaluru",
      bullets: [
        "Analysed spatial demand patterns to identify optimal bike redistribution clusters, translating usage data into operational recommendations that improved asset utilisation.",
        "Built cross-platform reporting solutions to give operations and leadership consistent visibility into fleet health and key performance metrics.",
      ]
    },
    {
      date:    "May 2018 – Oct 2019",
      role:    "Analyst",
      company: "Melayer Software Solutions · Pune",
      bullets: [
        "Analysed web traffic and user acquisition funnel data using Google Analytics to surface patterns that informed marketing channel decisions.",
      ]
    },
  ],

  /* ── Projects ──────────────────────────────────────────────
     Each project renders a card on the home page.
     Set `caseStudy` to the relative path if you write one up.
  ────────────────────────────────────────────────────────── */
  projects: [
    {
      title:     "Epistemic Auditor",
      tags:      ["Multi-agent", "RAG", "Python", "Claude"],
      desc:      "A multi-agent system built to investigate viral claims and misinformation. It breaks a claim into sub-claims, traces where each one originated, figures out why people believe it, and writes a counter-narrative grounded in psychology. Built across 10 stages, each introducing one real production concept: memory stores, semantic cache, parallel orchestration, ChromaDB RAG, HITL gates, and live observability.",
      metric:    "10 production stages",
      metricSub: "RAG, HITL, semantic cache, observability",
      caseStudy: "",
      github:    "https://github.com/sanketneuralforge/epistemic-auditor",
    },
    {
      title:     "Bank Statement Analyzer",
      tags:      ["Local LLM", "Python CLI", "Privacy-first"],
      desc:      "A local CLI tool that reads a bank statement CSV, categorises every transaction, flags anything that looks off, writes a monthly summary, and saves the whole thing as an HTML report. Everything runs on your machine via Ollama. Nothing goes to the cloud.",
      metric:    "100% on-device",
      metricSub: "zero data sent to the cloud",
      caseStudy: "",
      github:    "https://github.com/sanketneuralforge/bank-statement-analyzer",
    },
    {
      title:     "Vibe Architect",
      tags:      ["AI Agent", "Claude", "Multi-sensory"],
      desc:      "You give it a feeling or a moment, it gives you a playlist, a colour palette, film recommendations, and a short original poem that all belong to the same emotional world. Built as a single agent with structured tool use, it was an experiment in whether an LLM can hold a consistent aesthetic across very different output formats.",
      metric:    "1 prompt, 4 outputs",
      metricSub: "playlist, palette, films, poem",
      caseStudy: "",
      github:    "https://github.com/sanketneuralforge/vibe-architect",
    },
    {
      title:     "Analyst Assistant",
      tags:      ["AI Agent", "FastAPI", "Streamlit", "ChromaDB"],
      desc:      "A stateful AI thought partner for data investigation work. Unlike one-shot chat tools, it holds an analytical session in memory across five modes: generating hypotheses, drafting investigation code, synthesising documents, stress-testing conclusions, and writing stakeholder narratives. When you run the stress tester in Mode 4, it challenges conclusions by name using evidence collected three modes earlier, without being told any of it again.",
      metric:    "5 analytical modes",
      metricSub: "session memory across every step",
      caseStudy: "",
      github:    "https://github.com/sanketneuralforge/AI-analyst-assistant",
    },
    {
      title:     "Metric Watchdog",
      tags:      ["AI Agent", "Claude", "Dashboard Intelligence"],
      desc:      "Feed it a dashboard screenshot and a Postgres schema and it figures out what is wrong on its own. A chain of agents reads the visual, reasons about the metrics, diagnoses likely root causes, and writes a plain-language briefing that gets sent to email or Slack. Built to replace the part of on-call work that is mostly pattern recognition on charts.",
      metric:    "Screenshot in",
      metricSub: "diagnosis and narrative out",
      caseStudy: "",
      github:    "https://github.com/sanketneuralforge/metric-watchdog",
    },
  ],

  /* ── Skills ── */
  skills: [
    {
      group: "Analytics Leadership",
      items: ["KPI Framework Design", "Experiment Strategy & Governance", "Financial Impact Sizing", "Stakeholder Influence", "Cross-functional Partnership"]
    },
    {
      group: "Methods",
      items: ["A/B Testing & Experimentation", "Causal Inference (DiD, Quasi-experiments)", "Statistical Modelling", "Segmentation & RFM", "Root Cause Analysis", "Forecasting"]
    },
    {
      group: "Programming",
      items: ["Python (Pandas, Scikit-learn, Matplotlib)", "SQL (PostgreSQL, Presto, Snowflake, MySQL)", "PySpark"]
    },
    {
      group: "Data Tools",
      items: ["Looker", "Tableau", "Metabase", "AWS Athena", "Airflow", "dbt", "ETL Pipelines", "Event Instrumentation"]
    },
    {
      group: "AI & Productivity",
      items: ["LLM-based Operational Systems", "LLM Evaluation", "Claude", "Cursor", "GitHub Copilot"]
    },
    {
      group: "Currently Studying",
      items: ["MTech AI/ML at BITS Pilani", "Generative AI with LLMs (AWS/Coursera)", "Mathematics for ML (DeepLearning.ai)", "Spark & PySpark (Udemy)"]
    },
  ],

  /* ── Certifications / Upskilling ───────────────────────────
     `credential` is the URL to the certificate (Coursera, etc.)
     Leave `credential` empty if you don't have a public link yet.
  ────────────────────────────────────────────────────────── */
  certifications: [
    {
      title:    "Generative AI with Large Language Models",
      issuer:   "AWS & DeepLearning.ai",
      platform: "Coursera",
      year:     "2024",
      tags:     ["LLM", "Generative AI"],
      credential: "", /* TODO: Add Coursera certificate URL */
    },
    {
      title:    "Mathematics for Machine Learning & Data Science",
      issuer:   "DeepLearning.ai",
      platform: "Coursera",
      year:     "2024",
      tags:     ["ML Fundamentals", "Linear Algebra", "Statistics"],
      credential: "", /* TODO */
    },
    {
      title:    "Structuring Machine Learning Projects",
      issuer:   "DeepLearning.ai",
      platform: "Coursera",
      year:     "2023",
      tags:     ["ML Strategy", "MLOps"],
      credential: "", /* TODO */
    },
    {
      title:    "Prediction Models with Sports Data",
      issuer:   "Coursera",
      platform: "Coursera",
      year:     "2023",
      tags:     ["Predictive Modelling", "Applied ML"],
      credential: "", /* TODO */
    },
    {
      title:    "Spark and Python for Big Data with PySpark",
      issuer:   "Udemy",
      platform: "Udemy",
      year:     "2022",
      tags:     ["PySpark", "Big Data", "Data Engineering"],
      credential: "", /* TODO */
    },
  ],

  /* ── Blog / Writing ─────────────────────────────────────────
     `slug` must match the filename in /blog/ (without .html).
     Leave `slug` empty to disable the link until post is written.
  ────────────────────────────────────────────────────────── */
  posts: [
    {
      title:    "Why Most A/B Tests at Scale Fail Silently",
      date:     "2025-04-12",
      tags:     ["Experimentation", "Stats"],
      excerpt:  "Network effects, novelty bias, and survivor-selected metrics are quietly ruining your p-values. Most teams have no idea.",
      readTime: "7 min",
      slug:     "", /* TODO: create blog/why-ab-tests-fail.html */
    },
    {
      title:    "CUPED in Plain English",
      date:     "2025-02-28",
      tags:     ["Experimentation", "Variance Reduction"],
      excerpt:  "A no-nonsense walkthrough of Controlled-experiment Using Pre-Experiment Data, with worked Python examples.",
      readTime: "9 min",
      slug:     "", /* TODO */
    },
    {
      title:    "How I'm Using LLMs to Accelerate Analysis, Without the Hype",
      date:     "2024-12-05",
      tags:     ["LLM", "Workflow"],
      excerpt:  "Not code generation. Structured reasoning scaffolds, eval frameworks, and an honest take on where the tooling is genuinely ahead of the workflows.",
      readTime: "6 min",
      slug:     "", /* TODO */
    },
  ],

};


/* ══════════════════════════════════════════════════════════════
   RENDERERS — Build DOM from CONFIG
══════════════════════════════════════════════════════════════ */

/* ── Hero ── */
function renderHero() {
  document.querySelector('.hero-title').innerHTML =
    `Hi, I'm ${CONFIG.name}<br><em>${CONFIG.role}</em>`;
  document.querySelector('.hero-desc').textContent = CONFIG.tagline;
}

/* ── About ── */
function renderAbout() {
  const textEl = document.getElementById('about-text');
  textEl.innerHTML = CONFIG.about
    .map(p => `<p>${p}</p>`)
    .join('');

  const factsEl = document.getElementById('about-facts');
  factsEl.innerHTML = CONFIG.facts.map((f, i) => `
    <div class="fact-card reveal reveal-delay-${i + 1}">
      <div class="fact-label">${f.label}</div>
      <div class="fact-value">${f.value}</div>
      <div class="fact-sub">${f.sub}</div>
    </div>
  `).join('');
}

/* ── Experience ── */
function renderExperience() {
  const el = document.getElementById('timeline');
  el.innerHTML = CONFIG.experience.map(job => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${job.date}</div>
      <div class="timeline-role">${job.role}</div>
      <div class="timeline-company">${job.company}</div>
      <div class="timeline-body">
        <ul>${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

/* ── Projects ── */
function renderProjects() {
  const el = document.getElementById('projects-grid');
  el.innerHTML = CONFIG.projects.map((p, i) => `
    <div class="project-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="project-card-banner"></div>
      <div class="project-card-body">
        <div class="project-card-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-card-title">${p.title}</div>
        <div class="project-card-desc">${p.desc}</div>
        ${p.metric ? `
          <div class="project-card-metric">
            ${p.metric}
            <span>${p.metricSub}</span>
          </div>
        ` : ''}
      </div>
      <div class="project-card-footer">
        <div class="project-card-links">
          ${p.caseStudy ? `
            <a href="${p.caseStudy}" class="card-link">
              Case study
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          ` : ''}
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener" class="card-link">
              GitHub
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          ` : ''}
        </div>
        <span class="tag tag--neutral">${p.tags[0]}</span>
      </div>
    </div>
  `).join('');
}

/* ── Skills ── */
function renderSkills() {
  const el = document.getElementById('skills-grid');
  el.innerHTML = CONFIG.skills.map((sg, i) => `
    <div class="skill-group reveal reveal-delay-${(i % 4) + 1}">
      <div class="skill-group-title">${sg.group}</div>
      <div class="skill-tags">
        ${sg.items.map(item => `<span class="tag tag--neutral">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Writing ── */
function renderWriting() {
  const el = document.getElementById('writing-grid');
  el.innerHTML = CONFIG.posts.map((post, i) => {
    const dateObj = new Date(post.date);
    const formatted = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const href = post.slug ? `blog/${post.slug}.html` : '#';
    return `
      <a href="${href}" class="writing-card reveal reveal-delay-${(i % 3) + 1}" style="text-decoration:none;">
        <div class="writing-card-meta">
          ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          <span class="writing-date">${formatted}</span>
          <span class="writing-read-time">${post.readTime} read</span>
        </div>
        <div class="writing-card-title">${post.title}</div>
        <div class="writing-card-excerpt">${post.excerpt}</div>
        <div class="writing-card-read-more">
          Read more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </a>
    `;
  }).join('');
}

/* ── Certifications ── */
function renderCertifications() {
  const el = document.getElementById('certs-grid');
  if (!el) return;
  el.innerHTML = CONFIG.certifications.map((c, i) => `
    <div class="cert-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="cert-card-top">
        <div class="cert-platform-badge">${c.platform}</div>
        <div class="cert-year">${c.year}</div>
      </div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-tags">
        ${c.tags.map(t => `<span class="tag tag--neutral">${t}</span>`).join('')}
      </div>
      ${c.credential ? `
        <a href="${c.credential}" target="_blank" rel="noopener" class="cert-link">
          View certificate
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
      ` : `<span class="cert-link cert-link--soon">Certificate coming</span>`}
    </div>
  `).join('');
}

/* ── Contact links ── */
function renderContact() {
  document.getElementById('contact-email-link').href = `mailto:${CONFIG.email}`;
  document.getElementById('contact-email-link').textContent = CONFIG.email;
  document.getElementById('contact-linkedin-link').href = CONFIG.linkedin;
  document.getElementById('contact-github-link').href = CONFIG.github;
  /* Logo is now an image — no text override needed */
  document.querySelectorAll('.hero-resume-btn').forEach(el => {
    el.href = CONFIG.resume;
  });
}


/* ══════════════════════════════════════════════════════════════
   BEHAVIOUR — Navigation, scroll, animations
══════════════════════════════════════════════════════════════ */

/* ── Scroll-based nav styling ── */
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  /* Active link highlighting */
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));

  /* Mobile menu */
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  /* Close menu on nav link click */
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* ── Scroll-reveal ── */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
}

/* ── Back to top ── */
function initBackToTop() {
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    /* TODO: Wire up to Formspree or Netlify Forms.
       Add action="https://formspree.io/f/YOUR_FORM_ID" to the <form> tag
       and remove this JS handler once the backend is configured. */
    showToast('Thanks! I\'ll get back to you soon.');
    form.reset();
  });
}

/* ── Toast ── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}


/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderCertifications();
  renderWriting();
  renderContact();

  /* Behaviours must init AFTER content is rendered */
  initNav();
  initReveal();
  initBackToTop();
  initContactForm();
});
