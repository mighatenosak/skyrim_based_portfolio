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
- `app/components/Projects.js` — the `PROJECTS` array
- `app/components/Contact.js` — the `LINKS` array — **update the placeholder
  email, GitHub, and LinkedIn values before deploying**
- `app/globals.css` — color tokens at the top (`:root`) if you want to shift
  the palette

## Structure

```
app/
  layout.js          fonts + metadata
  page.js             assembles all sections
  globals.css         design tokens, base styles
  components/
    MainMenu.js        hero / main-menu (also the nav)
    CompassNav.js       fixed compass that tracks scroll position
    About.js            character-sheet style bio
    Skills.js           constellation-style skills grid
    Projects.js         crafting-menu style project list
    Contact.js           links
    TipTicker.js         loading-tip footer crawl
```
