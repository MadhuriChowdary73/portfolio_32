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

The local Git repository is already initialized with branch `main` and your files committed! To push to GitHub:

1. Create a new repository on your GitHub account (`https://github.com/new`), e.g., named `portfolio` (or `MadhuriChowdary73.github.io` for a root user site).
2. Run in your terminal:
   ```bash
   git remote add origin https://github.com/MadhuriChowdary73/<repo-name>.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings → Pages** → set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Your site will be live at `https://MadhuriChowdary73.github.io/<repo-name>/`.

> **Tip:** To use a custom domain, add a `CNAME` file with your domain name.

## ✏️ Where to Edit

| What | Where |
|---|---|
| **Projects** (titles, descriptions, links, tags) | `index.html` — search for `<!-- Project 1 -->`, `<!-- Project 2 -->`, etc. |
| **Hackathons** | `index.html` — search for `hackathon-card` |
| **Skills / Chips** | `index.html` — search for `skills-groups` |
| **Certifications** | `index.html` — search for `cert-card` |
| **About text & photo** | `index.html` — search for `about-text` and `photo-cutout` (`madhuri.jpg`) |
| **Social links** (GitHub, LinkedIn) | `index.html` — search for the URLs (`github.com/MadhuriChowdary73`, etc.) |
| **Email address** | `index.html` — the `data-email` attribute on `#copy-email` |
| **Resume** | Place your `resume.pdf` in the root folder; the navbar button already links to it. |
| **Colors** | `style.css` — `:root` custom properties (white/grey base with dark brown & warm stone grey accents) |
| **Fonts** | `style.css` — change `--font-heading` and `--font-body`, and update Google Fonts in `index.html`. |

## 📁 File Structure

```
├── index.html    ← Markup + structure (all content & sections)
├── style.css     ← Design system, WBG theme & brown/beige hover styles
├── script.js     ← GSAP animations, intro typing & interactions
├── madhuri.jpg   ← Profile cutout photo
├── resume.pdf    ← (add your resume here)
└── README.md     ← This file
```

## ♿ Accessibility

- Semantic HTML with proper heading hierarchy
- `aria-labels` on all interactive elements
- Thick visible `:focus-visible` outlines
- WCAG AA contrast on all text
- `prefers-reduced-motion` respected — all non-essential animations disabled
- Standard system cursor across all devices

---

Built with ☕ by Madhuri.

