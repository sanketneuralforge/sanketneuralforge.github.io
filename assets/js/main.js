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
  role: "Senior Data Analyst & Aspiring Data Scientist",
  location: "Bengaluru, India",
  email: "sanketsrp176.code@gmail.com",
  /* TODO: Add your actual social links */
  linkedin: "https://linkedin.com/in/your-linkedin-handle",
  github:   "https://github.com/sanketneuralforge",
  resume:   "#", /* TODO: Link to your hosted resume PDF */

  tagline: "I turn messy data into decisions that move the needle.",

  about: [
    "I'm a <strong>Senior Data Analyst in Care Analytics at Deliveroo/DoorDash</strong>, where I design experiments, build causal models, and help operations teams make evidence-based decisions. Six years in, I still find the moment a metric shifts in a surprising direction genuinely exciting.",
    "My work sits at the intersection of <strong>statistical rigour and product intuition</strong>. I've worked across marketplace, gaming, and mobility analytics — each domain teaching me that the right framing of a question is usually worth more than the fanciest model.",
    "I'm currently pursuing an <strong>MTech in AI/ML at BITS Pilani (2025–2027)</strong> — deliberately going back to fundamentals while working full-time, because I want to build a foundation that holds up when the landscape shifts again.",
    "Right now I'm actively looking for <strong>Lead Data Analyst or Data Scientist roles</strong> at product companies where data is a first-class citizen, not a reporting function."
  ],

  /* ── Snapshot cards shown on the right of the About section ── */
  facts: [
    { label: "Current role",    value: "Senior Data Analyst",      sub: "Deliveroo / DoorDash · Bengaluru" },
    { label: "Education",       value: "MTech AI/ML",              sub: "BITS Pilani · 2025–2027" },
    { label: "Experience",      value: "6+ years",                 sub: "Marketplace · Gaming · Mobility" },
    { label: "Open to",         value: "Lead DA / Data Scientist", sub: "Product companies · Full-time" },
  ],

  /* ── Work experience ── */
  experience: [
    {
      date:    "2023 – Present",
      role:    "Senior Data Analyst, Care Analytics",
      company: "Deliveroo / DoorDash · Bengaluru",
      bullets: [
        "Own analytics for the Care & Support vertical — tracking defect rates, resolution times, and agent productivity across 3+ markets.",
        "Designed and analysed A/B experiments on IVR flows that reduced average handle time by ~12% with no CSAT regression.",
        "Built a DiD framework for estimating causal impact of policy changes, replacing ad-hoc before/after comparisons across the team.",
        /* TODO: Add more bullets */
      ]
    },
    {
      date:    "2021 – 2023",
      role:    "Data Analyst",
      /* TODO: Update company name if different */
      company: "Previous Company · Location",
      bullets: [
        "Led analytics for the core marketplace funnel — acquisition, activation, retention.",
        "Introduced RDD-based evaluation for geo-targeted promotions, surfacing a ~8% over-attribution in prior lift estimates.",
        /* TODO: Add more bullets */
      ]
    },
    {
      date:    "2019 – 2021",
      role:    "Junior Data Analyst",
      /* TODO: Update company name */
      company: "Earlier Company · Location",
      bullets: [
        "Built player lifetime value models for a mid-core mobile game, informing UA budget allocation.",
        /* TODO: Add more bullets */
      ]
    },
  ],

  /* ── Projects ──────────────────────────────────────────────
     Each project renders a card on the home page.
     Set `caseStudy` to the relative path of the case study
     HTML if you want a "Read more" link.
  ────────────────────────────────────────────────────────── */
  projects: [
    {
      title:     "Causal Impact Framework for Policy Changes",
      tags:      ["Causal Inference", "DiD", "Python"],
      desc:      "Replaced ad-hoc before/after analyses across the Care team with a reproducible Difference-in-Differences pipeline, estimating treatment effects with proper uncertainty quantification.",
      metric:    "↓18% estimation error",
      metricSub: "vs. naive before/after",
      caseStudy: "projects/causal-impact.html",
      github:    "", /* TODO: Add GitHub link if public */
    },
    {
      title:     "LLM Evaluation Harness",
      tags:      ["LLM", "Python", "Evaluation"],
      desc:      "Built an end-to-end evaluation suite for comparing LLM-powered response suggestions in the support tool — covering factual accuracy, tone, and length across 10k sample conversations.",
      metric:    "3× faster eval cycles",
      metricSub: "from 3 days to &lt;1 day per model version",
      caseStudy: "projects/llm-eval.html",
      github:    "", /* TODO */
    },
    {
      title:     "A/B Experiment Toolkit",
      tags:      ["Experiment Design", "Stats", "SQL"],
      desc:      "Reusable SQL + Python toolkit for pre-experiment power calculations, CUPED variance reduction, and post-hoc novelty-effect correction. Adopted by 4 teams at Deliveroo.",
      metric:    "MDE −25%",
      metricSub: "at same sample size via CUPED",
      caseStudy: "projects/ab-toolkit.html",
      github:    "", /* TODO */
    },
    {
      title:     "Player LTV Segmentation",
      tags:      ["Gaming", "ML", "Clustering"],
      desc:      "k-means + survival analysis hybrid for segmenting mobile game players into spend tiers. Outputs drove UA channel allocation and pushed D30 ROAS up meaningfully.",
      metric:    "+14% D30 ROAS",
      metricSub: "on reallocated UA spend",
      caseStudy: "", /* TODO: Add case study page if desired */
      github:    "", /* TODO */
    },
    {
      title:     "Geo-Lift Measurement with RDD",
      tags:      ["Causal Inference", "RDD", "Geo Analytics"],
      desc:      "Applied Regression Discontinuity Design to evaluate a city-level promotion rollout, surfacing ~8% over-attribution in prior synthetic-control estimates.",
      metric:    "−8% over-attribution",
      metricSub: "corrected vs. prior method",
      caseStudy: "", /* TODO */
      github:    "", /* TODO */
    },
    /* TODO: Add more projects in the same format */
  ],

  /* ── Skills ── */
  skills: [
    {
      group: "Analytics & Stats",
      items: ["Causal Inference", "A/B Experiment Design", "DiD", "RDD", "Power Analysis", "CUPED", "Bayesian A/B", "Survival Analysis", "Regression Modelling"]
    },
    {
      group: "Machine Learning",
      items: ["XGBoost / LightGBM", "k-Means Clustering", "NLP / Text Analytics", "LLM Evaluation", "Feature Engineering", "scikit-learn"]
    },
    {
      group: "Programming",
      items: ["Python (pandas, numpy, scipy)", "SQL (BigQuery, Redshift, dbt)", "R", "Spark (PySpark)"]
    },
    {
      group: "Data Tools",
      items: ["Looker / Looker Studio", "Tableau", "Airflow", "dbt", "Jupyter", "Git"]
    },
    {
      group: "Domain Knowledge",
      items: ["Marketplace Analytics", "Care & Support Ops", "Mobile Gaming", "Mobility / Ride-hailing", "Growth / Retention"]
    },
    {
      group: "Studying Now",
      items: ["Deep Learning (BITS Pilani)", "Transformers", "MLOps", "Reinforcement Learning basics"]
    },
  ],

  /* ── Blog / Writing ─────────────────────────────────────────
     `slug` must match the filename in /blog/ (without .html)
     Leave `slug` empty to disable the link.
  ────────────────────────────────────────────────────────── */
  posts: [
    {
      title:   "Why Most A/B Tests at Scale Fail Silently",
      date:    "2025-04-12",
      tags:    ["Experimentation", "Stats"],
      excerpt: "Network effects, novelty bias, and survivor-selected metrics are quietly ruining your p-values — and most teams have no idea.",
      readTime: "7 min",
      slug:    "", /* TODO: Create blog/why-ab-tests-fail.html and add slug */
    },
    {
      title:   "CUPED in Plain English",
      date:    "2025-02-28",
      tags:    ["Experimentation", "Variance Reduction"],
      excerpt: "A no-nonsense walkthrough of Controlled-experiment Using Pre-Experiment Data, with worked examples in Python.",
      readTime: "9 min",
      slug:    "", /* TODO */
    },
    {
      title:   "How I'm Using LLMs to Speed Up Exploratory Analysis",
      date:    "2024-12-05",
      tags:    ["LLM", "Workflow"],
      excerpt: "Not code generation — but structured reasoning scaffolds, eval frameworks, and where the hype is genuinely ahead of the tooling.",
      readTime: "6 min",
      slug:    "", /* TODO */
    },
    /* TODO: Add more posts */
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
