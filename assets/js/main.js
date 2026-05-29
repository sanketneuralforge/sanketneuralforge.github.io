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
  role: "Analytics Leader & Data Scientist",
  location: "Bengaluru, India",
  email: "sanketsrp176.sp@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanket-panchalwar/", /* TODO: confirm handle */
  github:   "https://github.com/sanketneuralforge",
  resume:   "assets/resume/Sanket_Panchalwar_Resume.pdf",

  tagline: "Analytics leader who turns ambiguous business problems into financial impact — across marketplace, gaming, and mobility.",

  about: [
    "I'm a <strong>Senior Data Analyst (Care) at Deliveroo, acquired by DoorDash</strong>, where I own end-to-end analytics strategy for a high-impact care vertical. My work ranges from designing experiment frameworks and building financial models to presenting trade-off analyses directly to leadership — numbers that have shaped £M-level decisions.",
    "Six years in, my edge is the combination of <strong>deep statistical craft and product intuition</strong>. I've shipped measurement systems across food delivery, real-money gaming, and ride-hailing — each domain reinforcing that the right framing of a question is worth more than the fanciest model.",
    "I'm currently pursuing an <strong>MTech in AI/ML at BITS Pilani (2025–2027)</strong> — deliberately revisiting fundamentals while working full-time, because I want a foundation that holds up when the tooling landscape shifts again.",
    "I'm actively seeking <strong>Lead Data Analyst or Data Scientist roles</strong> at product companies where data is a first-class citizen — not a reporting function."
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
        "Owned end-to-end analytics for a high-impact Care policy change (removal of photo evidence in Missing Item claims) — designed the experiment framework, built financial impact models, and presented trade-off analysis to leadership, projecting +4pp B10 incidence, +1.2pp CSAT uplift, and £2.9M annual gross compensation impact.",
        "Led measurement for replacing flat-rate compensation with LLM-estimated item values, quantifying £2.1M annual GTV uplift, 10.2% reduction in support contacts, and 2.88× ROI on compensation spend — directly influencing the go/no-go decision.",
        "Drove analytics for LLM-based validation rules preventing illogical claim combinations, sizing £283K annual cost savings and 1.68ppt claim rate reduction without CSAT degradation.",
        "Defined and standardised key experimentation platform metrics across the Care organisation, enabling consistent measurement, improved decision clarity, and faster experiment cycles across all lines of business.",
        "Served as primary analytics partner to Product and Engineering — delivering structured cost-sizing analyses and financial trade-off frameworks that informed roadmap prioritisation decisions.",
      ]
    },
    {
      date:    "Aug 2022 – May 2024",
      role:    "Associate Data Scientist, Product",
      company: "Junglee Games · Bengaluru",
      bullets: [
        "Built an early-behaviour-based high-value player prediction framework to support targeted engagement strategies, improving retention by 3%.",
        "Developed an IPL Auto Team Suggester using historical performance data to streamline user decision-making and improve contest participation.",
        "Analysed skill vs. chance dynamics in casual games (Ludo, Teen Patti) to provide evidence-based recommendations for game design and product strategy.",
        "Implemented structured event validation through data modelling and ETL pipelines, reducing critical clickstream issues by 20% and improving data reliability across large-scale user sessions.",
        "Led experiment analysis for new product features, delivering 10% lift in conversion and 5% reduction in churn, while automating KPI reporting to improve stakeholder visibility.",
      ]
    },
    {
      date:    "Jan 2021 – Aug 2022",
      role:    "Senior Data Analyst",
      company: "Rapido · Bengaluru",
      bullets: [
        "Drove customer engagement optimisation by identifying high-potential subscription segments using RFM analysis and geo-temporal rider profiling, enabling targeted push and in-app campaigns.",
        "Delivered subscription demand forecasts and built automated KPI tracking pipelines using Spark and Airflow to improve reporting efficiency and operational visibility.",
      ]
    },
    {
      date:    "Nov 2019 – Jan 2021",
      role:    "Decision Scientist",
      company: "Bounce Bikeshare · Bengaluru",
      bullets: [
        "Analysed demand patterns to identify optimal bike redistribution clusters, improving operational efficiency and asset utilisation.",
        "Developed cross-platform data reporting solutions to enhance visibility into key operational metrics and support strategic decision-making.",
      ]
    },
    {
      date:    "May 2018 – Oct 2019",
      role:    "Analyst",
      company: "Melayer Software Solutions · Pune",
      bullets: [
        "Analysed website traffic and user acquisition metrics using Google Analytics to inform marketing performance decisions.",
      ]
    },
  ],

  /* ── Projects ──────────────────────────────────────────────
     Each project renders a card on the home page.
     Set `caseStudy` to the relative path if you write one up.
  ────────────────────────────────────────────────────────── */
  projects: [
    {
      title:     "Care Policy Change — Missing Item Claims",
      tags:      ["Experiment Design", "Financial Modelling", "Causal Inference"],
      desc:      "Independently designed the experiment framework, built financial impact models, and presented trade-off analysis to leadership for removing photo evidence from Missing Item claims — a major policy overhaul.",
      metric:    "£2.9M",
      metricSub: "projected annual gross compensation impact",
      caseStudy: "",
      github:    "",
    },
    {
      title:     "LLM-Estimated Item Value Compensation",
      tags:      ["LLM", "Measurement", "ROI Analysis"],
      desc:      "Led end-to-end measurement for replacing flat-rate compensation with LLM-estimated item values. Quantified GTV uplift, contact reduction, and ROI — analysis that directly drove the go/no-go decision.",
      metric:    "2.88× ROI",
      metricSub: "£2.1M GTV uplift · 10.2% fewer support contacts",
      caseStudy: "",
      github:    "",
    },
    {
      title:     "LLM Validation Rules for Claim Combinations",
      tags:      ["LLM", "Cost Savings", "Care Analytics"],
      desc:      "Drove analytics for LLM-based rules preventing illogical claim combinations — sized annual cost savings and claim rate reduction with no CSAT degradation.",
      metric:    "£283K",
      metricSub: "annual cost savings · −1.68ppt claim rate",
      caseStudy: "",
      github:    "",
    },
    {
      title:     "Experimentation Platform Standardisation",
      tags:      ["Experiment Strategy", "KPI Frameworks", "Analytics Infra"],
      desc:      "Defined and standardised key experimentation platform metrics across Deliveroo's Care organisation — enabling consistent measurement and faster experiment cycles across all lines of business.",
      metric:    "Org-wide",
      metricSub: "adopted across all Care lines of business",
      caseStudy: "",
      github:    "",
    },
    {
      title:     "High-Value Player Prediction Framework",
      tags:      ["ML", "Classification", "Gaming"],
      desc:      "Built an early-behaviour-based framework at Junglee Games to predict high-value players and support targeted engagement strategies — improving retention by 3%.",
      metric:    "+3% retention",
      metricSub: "from targeted engagement on predicted HVPs",
      caseStudy: "",
      github:    "",
    },
    {
      title:     "Subscription Segmentation & Demand Forecasting",
      tags:      ["RFM Analysis", "Forecasting", "PySpark"],
      desc:      "Identified high-potential subscription segments at Rapido using RFM analysis and geo-temporal profiling, and built automated demand forecasts with Spark + Airflow for operational planning.",
      metric:    "Automated",
      metricSub: "KPI tracking replacing manual reporting",
      caseStudy: "",
      github:    "",
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
      items: ["MTech AI/ML — BITS Pilani", "Generative AI with LLMs (AWS/Coursera)", "Mathematics for ML (DeepLearning.ai)", "Spark & PySpark (Udemy)"]
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
      excerpt:  "Network effects, novelty bias, and survivor-selected metrics are quietly ruining your p-values — and most teams have no idea.",
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
      title:    "How I'm Using LLMs to Accelerate Analysis — Without the Hype",
      date:     "2024-12-05",
      tags:     ["LLM", "Workflow"],
      excerpt:  "Not code generation — structured reasoning scaffolds, eval frameworks, and an honest take on where the tooling is genuinely ahead of the workflows.",
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
    `Hi, I'm <em>${CONFIG.name}</em> —<br>${CONFIG.role}`;
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

/* ── Contact links ── */
function renderContact() {
  document.getElementById('contact-email-link').href = `mailto:${CONFIG.email}`;
  document.getElementById('contact-email-link').textContent = CONFIG.email;
  document.getElementById('contact-linkedin-link').href = CONFIG.linkedin;
  document.getElementById('contact-github-link').href = CONFIG.github;
  document.getElementById('footer-logo').textContent = CONFIG.name;
  document.getElementById('nav-logo').textContent = CONFIG.name;
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
  renderWriting();
  renderContact();

  /* Behaviours must init AFTER content is rendered */
  initNav();
  initReveal();
  initBackToTop();
  initContactForm();
});
