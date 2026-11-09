# Madhuri Chowdary — Portfolio

A neubrutalism-style personal portfolio built with plain HTML, CSS, and JavaScript (GSAP + ScrollTrigger). No build step required.

## 🚀 Run Locally

```bash
# Option 1 — VS Code Live Server
# Install the "Live Server" extension, right-click index.html → Open with Live Server.

# Option 2 — Python
python -m http.server 8000
# Open http://localhost:8000

# Option 3 — Node (npx)
npx serve .
# Open the URL shown in the terminal.
```

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `portfolio`).
2. Push the three files (`index.html`, `style.css`, `script.js`) and any assets (e.g. `resume.pdf`, a profile photo) to the `main` branch.
3. Go to **Settings → Pages** → set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://<username>.github.io/portfolio/`.

> **Tip:** To use a custom domain, add a `CNAME` file with your domain name.

## ✏️ Where to Edit

| What | Where |
|---|---|
| **Projects** (titles, descriptions, links, tags) | `index.html` — search for `<!-- Project 1 -->`, `<!-- Project 2 -->`, etc. |
| **Hackathons** | `index.html` — search for `hackathon-card` |
| **Skills / Chips** | `index.html` — search for `skills-groups` |
| **About text** | `index.html` — search for `about-text` |
| **Social links** (GitHub, LinkedIn) | `index.html` — search for the URLs (`github.com/MadhuriChowdary73`, etc.) |
| **Email address** | `index.html` — the `data-email` attribute on `#copy-email` |
| **Resume** | Place your `resume.pdf` in the root folder; the navbar button already links to it. |
| **Profile photo** | Replace the SVG placeholder inside `.photo-frame` in `index.html` with an `<img>` tag. |
| **Colors** | `style.css` — the `:root` custom properties at the top (`--yellow`, `--pink`, etc.) |
| **Fonts** | `style.css` — change `--font-heading` and `--font-body`, and update the Google Fonts `<link>` in `index.html`. |

## 📁 File Structure

```
├── index.html    ← Markup + structure (all content is here)
├── style.css     ← Design system + responsive styles
├── script.js     ← GSAP animations + interactions
├── resume.pdf    ← (add your resume here)
└── README.md     ← This file
```

## ♿ Accessibility

- Semantic HTML with proper heading hierarchy
- `aria-labels` on all interactive elements
- Thick visible `:focus-visible` outlines
- WCAG AA contrast on all text
- `prefers-reduced-motion` respected — all non-essential animations disabled
- Custom cursor hidden on touch devices

---

Built with ☕ by Madhuri.

