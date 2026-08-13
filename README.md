# Taasif — Portfolio

A Skyrim-inspired portfolio built with Next.js (App Router). No Bethesda assets,
logos, or fonts are used — the design borrows the *language* of the game's UI
(compass nav, skill constellation, crafting-menu layout, loading-screen ticker)
rendered in an original palette and typeface pairing (Cinzel / Spectral /
JetBrains Mono via Google Fonts).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

**Option A — CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; Vercel auto-detects Next.js.

**Option B — Git**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Leave the default build settings (`next build`) and deploy.

## Where to edit content

- `app/components/MainMenu.js` — name, tagline, menu items
- `app/components/About.js` — the character-sheet stats and bio copy
- `app/components/Skills.js` — the `SCHOOLS` array (skills, levels, descriptions)
- `app/data/projects.js` — the `PROJECTS` array, shared by the homepage list
  and the `/projects/[slug]` case-study pages
- `app/components/ModuleArsenal.js` — the `CATEGORIES` array (all 34 modules)
- `app/components/Contact.js` — the `LINKS` array
- `public/resume.pdf` — the downloadable résumé (regenerate with
  `python3 build_resume.py` at the repo root if you update project/skill
  content — see below)
- `app/layout.js` — `metadataBase` currently points at a placeholder Vercel
  URL; update it once you have your real domain
- `app/globals.css` — color tokens at the top (`:root`) for Frost mode, and
  under `html[data-theme="journal"]` for Journal mode

## Regenerating the résumé PDF

The résumé at `public/resume.pdf` is generated from a script, not hand-edited:

```bash
pip install reportlab
python3 build_resume.py
```

(You'll need to add `build_resume.py` back at the project root if it's not
already there — it writes directly to `public/resume.pdf`.)

## Structure

```
app/
  layout.js          fonts + SEO metadata + theme-init script
  page.js             assembles all sections
  globals.css         design tokens (Frost + Journal themes), base styles
  opengraph-image.js  generated social share preview image
  data/
    projects.js        shared project data (home list + case studies)
  lib/
    sound.js            synthesized hover/select blips, mute state
  components/
    MainMenu.js         hero / main-menu (also the nav)
    CompassNav.js        fixed compass that tracks scroll position
    ThemeSoundToggle.js  Frost/Journal + sound mute controls
    LoadScreen.js        skippable once-per-session intro
    About.js              character-sheet style bio
    Skills.js              constellation-style skills grid
    Projects.js             crafting-menu style project list
    ModuleArsenal.js         all 34 Odoo modules, categorized
    Contact.js                links + résumé download
    TipTicker.js               loading-tip footer crawl
    Vegvisir.js                 the crest, reused in the loader
  projects/[slug]/
    page.js             full case-study page per project
```
