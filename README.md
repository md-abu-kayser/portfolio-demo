# Md Abu Kayser — World-Class Full-Stack Engineer (Portfolio)

Professional, production-ready portfolio site showcasing modern web architecture, polished UI, and a collection of real-world projects. This repository contains the static site source (HTML, CSS, JS) used to present my work, skills, and services.

---

## Live Demo

- Hosted on GitHub Pages: https://kayser.dev (or your configured domain)

---

## Overview

This project is a single-page, highly-polished portfolio for Md Abu Kayser. It includes:

- Responsive, accessible UI built with Tailwind CSS and DaisyUI
- Professional design system (gradients, glass effects, animations, dark/light themes)
- Smooth navigation, scroll-triggered animations and a testimonial carousel
- Project gallery with modal previews
- Auth pages (`auth/login.html`, `auth/signup.html`) integrated into the main site via an iframe modal
- Theme persistence (localStorage) and a desktop/mobile theme selector

The site is static (HTML/CSS/vanilla JS) so it's easy to host on GitHub Pages, Netlify, Vercel, or any static host.

---

## Key Features

- Pixel-perfect responsive layout for Mobile / Tablet / Desktop
- Five DaisyUI themes supported: `light`, `dark`, `cupcake`, `forest`, `luxury`
- Theme persistence across sessions using `localStorage`
- Mobile-friendly mega menu with accessible controls and keyboard handling
- Smooth, staged skill bar animations (Intersection Observer + CSS transitions)
- Projects grid with dynamic modals and deep-link support
- Auth pages (`auth/login.html`, `auth/signup.html`) — can be opened in-page via an iframe modal from `index.html`
- Contact form with client-side validation and simulated API handling
- Attention to accessibility: ARIA attributes, focus management, and reduced-motion respect

---

## Tech Stack

- HTML5
- Tailwind CSS (CDN) + DaisyUI
- Vanilla JavaScript (ES6+) — `js/script.js`, `js/auth.js`, `js/theme-switcher.js`
- Font Awesome icons
- Hosted as a static site (GitHub Pages)

---

## Repository Structure

Key files and folders:

- `index.html` — main single-page site
- `auth/` — authentication pages (`login.html`, `signup.html`) designed to be opened in-page or standalone
- `css/style.css` — main styles and custom animations
- `css/themes.css` — theme overrides and variables
- `images/` — site images and thumbnails
- `js/script.js` — main site logic (menu, theme switcher, skill animations, iframe auth modal)
- `js/auth.js` — auth form handling (login/signup) used inside `auth/` pages
- `js/theme-switcher.js` — theme utilities and helpers
- `README.md` — this file

---

## How Auth Integration Works

There are two ways the auth pages are used:

1. Direct navigation — you can open `auth/login.html` or `auth/signup.html` directly in the browser.
2. In-page modal — Clicking the **Login** or **Sign Up** link on `index.html` opens the respective auth page inside a fullscreen iframe modal (keeps user on the portfolio page while interacting with auth flows).

This makes it easy to present the full auth UI without duplicating markup or scripts.

---

## Run Locally (Quick)

Because this is a static site, you can run it with any static HTTP server. Example using Python (works on Windows PowerShell):

```powershell
# From repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or using Node.js `serve` (after installing `npm i -g serve`):

```powershell
serve -s . -l 5000
```

Notes: open `index.html` directly from the file system (file:///) will mostly work, but some features (iframe, some fetches) behave better through HTTP.

---

## Recommended Local QA Checklist

- Open `index.html` and test desktop & mobile navs
- Click `Login` / `Sign Up` in the header and confirm the iframe modal opens and can be closed
- Toggle theme from desktop and mobile selectors; refresh page to verify persistence
- Scroll to the Skills section and confirm progress bars animate with a staggered effect
- Open Projects and Testimonials to verify modals and carousel behavior

---

## Customization & Theming

- Tailwind utilities are used heavily; edit `tailwind.config` (inlined via CDN config in HTML) to change fonts/colors
- Theme palettes are managed by DaisyUI (data-theme attribute). `js/script.js` persists theme to `localStorage` under key `portfolio-theme`.

---

## Accessibility & Performance Notes

- Uses semantic HTML and ARIA roles for menus and modals
- Keyboard accessible mobile menu and Escape-to-close handlers
- Images use `loading="lazy"` where appropriate
- CSS transitions are GPU-friendly; heavy effects are kept subtle to preserve performance

---

## Contribution

If you'd like to contribute, fork the repo and open a pull request. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-change`
3. Make changes and test locally
4. Commit and open a PR with a clear description of changes

For issues or feature requests, open an Issue on GitHub.

---

## Deployment

This site is static and can be deployed to:

- GitHub Pages (branch `gh-page` is used here)
- Vercel or Netlify (drag & drop or connect repo)

When deploying make sure the branch and domain settings are correct and the `index.html` is served as the entry point.

---

## Changelog (Highlights)

- v2.0.0 — Major UI upgrade, performance improvements, theme system, iframe auth integration
- v1.x — Earlier versions with baseline portfolio content and project listings

---

## License

This repository is released under the MIT License. See the `LICENSE` file for details.

---

## Contact

- Website: https://kayser.dev
- Email: abu.kayser.official@gmail.com
- GitHub: https://github.com/Kawser420

---

Thank you for visiting. If you'd like help turning this portfolio into a dynamic site (CMS-driven or with server-side auth/OAuth), I can help design and implement that next.
