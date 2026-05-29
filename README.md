# Sanket — Personal Portfolio

Personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build step. Works by opening `index.html` or deploying to GitHub Pages.

---

## Quick start

```bash
# Just open in browser — no server needed
open index.html

# Or use any static server for live-reload during editing
npx serve .
# → http://localhost:3000
```

---

## Folder structure

```
/
├── index.html               ← Single-page site
├── assets/
│   ├── css/
│   │   ├── variables.css    ← Design tokens (colours, fonts, spacing)
│   │   ├── main.css         ← Global layout + section styles
│   │   └── components.css   ← Reusable UI components (buttons, cards, tags)
│   ├── js/
│   │   └── main.js          ← All site content (CONFIG object) + behaviour
│   └── images/
│       └── README.md        ← Image asset guide
├── projects/
│   └── template.html        ← Reusable case study page
├── blog/
│   └── template.html        ← Reusable blog post page
└── README.md
```

---

## How to edit content

**All content lives in `assets/js/main.js` inside the `CONFIG` object at the top of the file.** You should rarely need to touch `index.html`.

### Change personal info
Edit the top of `CONFIG`:
```js
name:    "Sanket",
role:    "Senior Data Analyst & Aspiring Data Scientist",
email:   "your@email.com",
linkedin: "https://linkedin.com/in/your-handle",
github:   "https://github.com/your-username",
resume:   "https://link-to-your-resume.pdf",
tagline: "Your one-liner here.",
```

### Update About text
Edit `CONFIG.about` — an array of paragraph strings. HTML is supported (e.g. `<strong>`).

### Add a work experience entry
Add an object to `CONFIG.experience`:
```js
{
  date:    "2021 – 2023",
  role:    "Job Title",
  company: "Company · City",
  bullets: [
    "Achievement or responsibility.",
    "Another bullet.",
  ]
},
```

### Add a project
Add an object to `CONFIG.projects`:
```js
{
  title:     "Project Name",
  tags:      ["Tag 1", "Tag 2"],
  desc:      "One or two sentences describing the project.",
  metric:    "+25% improvement",
  metricSub: "context for the metric",
  caseStudy: "projects/your-project.html",  // leave "" if no case study
  github:    "https://github.com/...",       // leave "" if private
},
```

Then copy `projects/template.html` to `projects/your-project.html` and fill in the content.

### Add a blog post
Add an object to `CONFIG.posts`:
```js
{
  title:    "Post Title",
  date:     "2025-06-01",          // ISO format
  tags:     ["Tag 1"],
  excerpt:  "One sentence teaser.",
  readTime: "5 min",
  slug:     "my-post-slug",        // must match filename in /blog/
},
```

Then copy `blog/template.html` to `blog/my-post-slug.html` and write the post.

### Add a skill category
Add an object to `CONFIG.skills`:
```js
{
  group: "Category Name",
  items: ["Skill 1", "Skill 2", "Skill 3"]
},
```

---

## Retheme in ~10 lines

Open `assets/css/variables.css` and change the colour/font tokens:
```css
--color-bg:      #faf8f4;   /* page background */
--color-accent:  #c87941;   /* amber highlight — swap this for any hue */
--font-serif:    'Lora', Georgia, serif;
--font-sans:     'Inter', system-ui, sans-serif;
```

Changing `--color-accent` alone updates: buttons, tags, timeline dots, card hover borders, links, and section labels.

To use different Google Fonts, update the `@import` URL at the top of `main.css` and change the `--font-*` variables.

---

## Adding your photo

1. Add your photo as `assets/images/sanket.jpg` (square crop, min 520×640px)
2. In `index.html`, find the hero portrait section and:
   - Uncomment: `<img src="assets/images/sanket.jpg" alt="Sanket" />`
   - Remove: the `<div class="hero-portrait-placeholder">` block

---

## Making the contact form work

The form is wired up in JS (currently just shows a toast). To make it actually send messages, pick one option:

**Option A — Formspree (free tier, easy):**
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form, copy your form ID
3. Add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"` to the `<form>` in `index.html`
4. Remove the `initContactForm()` function from `main.js` (or just leave it — Formspree takes over on submit)

**Option B — Netlify Forms:**
1. Add `netlify` attribute to the `<form>` element in `index.html`
2. Deploy to Netlify — it auto-detects and wires up the form

---

## Deploying to GitHub Pages

### First time
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/sanketneuralforge/sanketneuralforge.github.io.git
git branch -M main
git push -u origin main
```

GitHub Pages for `<username>.github.io` repos auto-deploys from `main`. Your site will be live at `https://sanketneuralforge.github.io` within a minute or two.

### Updating
```bash
git add .
git commit -m "Add project X / update experience"
git push
```

### Custom domain (optional)
1. Add a `CNAME` file to the repo root containing your domain (e.g. `sanket.dev`)
2. Configure DNS at your registrar:
   - Add a CNAME record pointing `www` → `sanketneuralforge.github.io`
   - Add A records for the apex domain pointing to GitHub's IPs
3. Enable "Enforce HTTPS" in the repo's Pages settings

---

## TODOs checklist

Open `index.html` and search `<!-- TODO:` to find all placeholders:

- [ ] Add your LinkedIn URL to `CONFIG.linkedin`
- [ ] Add your resume PDF link to `CONFIG.resume`
- [ ] Add photo `assets/images/sanket.jpg` and uncomment `<img>` in hero
- [ ] Fill in real work experience bullets in `CONFIG.experience`
- [ ] Add GitHub links to public projects
- [ ] Create case study pages from `projects/template.html`
- [ ] Write blog posts from `blog/template.html` and add slugs
- [ ] Wire up the contact form (Formspree / Netlify)
- [ ] Add favicon at `assets/images/favicon.png`
- [ ] Add OG image at `assets/images/og.png`
