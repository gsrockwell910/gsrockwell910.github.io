# Gavin Rockwell — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository named `gsrockwell910.github.io`
   *(must match your GitHub username exactly for the root domain to work)*

2. Upload these three files to the repo root:
   - `index.html`
   - `styles.css`
   - `main.js`

3. Go to **Settings → Pages** in your repository

4. Under **Source**, select `Deploy from a branch`

5. Set the branch to `main` and folder to `/ (root)`, then click **Save**

6. Your site will be live at `https://gsrockwell910.github.io` within a minute or two

## 📁 File Structure

```
/
├── index.html    # Page structure and content
├── styles.css    # All styles and animations
├── main.js       # Scroll behaviour and reveal animations
└── README.md     # This file
```

## 🛠 Built With

- HTML5 (semantic elements, ARIA labels, meta tags)
- CSS3 (custom properties, Grid, Flexbox, keyframe animations)
- Vanilla JavaScript (IntersectionObserver, passive event listeners)
- [Google Fonts](https://fonts.google.com) — Cormorant Garamond, Figtree, JetBrains Mono

## ✏️ Updating Content

All content lives in `index.html` — no build tools or dependencies required.
To add a new project, copy an existing `<article class="project-card">` block
and update the text and links inside it.
