# amifunny.github.io — Hemant Singh

Brutalist, kinetic, no-backend portfolio. Built with **Vite + React + TypeScript + Tailwind v4 + Motion + Lenis**.

Live site: <https://amifunny.github.io/>

---

## Repo layout

```
.
├── public/                 # Static files served as-is (cat, resume.pdf, favicon)
│   ├── cat-mascot.png
│   └── resume.pdf
├── src/
│   ├── App.tsx
│   ├── data.ts             # Single source of truth: profile, work, projects, skills
│   ├── index.css           # Tailwind v4 + brutalist design tokens (zap, hot, paper, ink)
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx       # Includes the click-the-cat easter egg (Web Audio meow)
│       ├── Work.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Nav.tsx
│       ├── Marquee.tsx
│       ├── Cursor.tsx      # Custom mix-blend-mode cursor (desktop only)
│       └── SmoothScroll.tsx# Lenis wrapper for buttery scroll
├── .github/workflows/deploy.yml  # GH Action: builds on `source`, deploys to `main`
└── vite.config.ts
```

## To edit content

99% of the content lives in `src/data.ts`. Touching that file is enough for:

- Job bullets, period, stack chips
- Projects (add/remove, change accent color, status badge)
- Skills groups
- Marquee words
- Profile bio / email / phone / resume link

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
```

Node 20+ is fine. Tailwind v4 uses the `@tailwindcss/vite` plugin so there's no separate `tailwind.config.js` — design tokens live in `@theme {}` inside `src/index.css`.

## Deploy — one-time setup

This repo is meant to be pushed to **`github.com/amifunny/amifunny.github.io`**. Because it's a *user site* (`username.github.io`), GitHub Pages serves whatever sits at the root of the **`main`** branch.

The strategy is: keep the source code on a `source` branch, and let a GitHub Action build the site and force-push the contents of `dist/` to `main`.

### First push

```bash
cd portfolio

# Initialize and point at your existing repo
git init
git remote add origin https://github.com/amifunny/amifunny.github.io.git

# Move everything onto a clean 'source' branch
git checkout -b source
git add .
git commit -m "feat: new brutalist portfolio v2"
git push -u origin source
```

That's it. The action in `.github/workflows/deploy.yml` will pick it up, build, and force-push to `main`. Within a minute, <https://amifunny.github.io/> will be the new site.

### Make a change

```bash
# Edit src/data.ts or any component
git add -A
git commit -m "tweak: update bio"
git push                # action runs, site updates
```

### Roll back

`main` is force-pushed every build. To roll back, either revert the change on `source` and push again, or `git push origin <good-sha>:main --force` from your machine.

## Design system in one minute

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#F5F2EA` | page background |
| `--color-ink` | `#0A0A0A` | text / borders / mass |
| `--color-zap` | `#FCEE0A` | primary accent |
| `--color-hot` | `#FF006E` | secondary accent / CTA |
| `--color-electric` | `#3A86FF` | tertiary |
| `--color-mint` | `#00F5A0` | "available" green |
| `.brutal-border` | `3px solid ink` | every container edge |
| `.brutal-shadow` | `6px 6px 0 0 ink` | offset hard shadow |
| `font-display` | `Archivo Black` | giant headlines |
| `font-sans` | `Space Grotesk` | body |
| `font-mono` | `JetBrains Mono` | labels / metadata |

The vibe is **swiss + risograph + late-night zine**. Don't soften it.

## A note on the cat

The cat is the Head of Q.A. Don't fire the cat.
