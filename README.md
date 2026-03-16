# Full-Stack Engineer Portfolio Demo

<!-- MIT License -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

<!-- Demo Live Link -->

[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-brightgreen)](https://md-abu-kayser.github.io/portfolio-demo/) 

<!-- Project Issues -->

[![Issues](https://img.shields.io/github/issues/md-abu-kayser/portfolio-demo)](https://github.com/md-abu-kayser/portfolio-demo/issues)

<!-- HTML & CSS -->

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!-- Styling / PostCSS -->

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs/)
[![PostCSS](https://img.shields.io/badge/PostCSS-efefef?logo=postcss&logoColor=black)](https://postcss.org/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8?logo=tailwindcss&logoColor=white)](https://daisyui.com/)

<!-- Fonts & Icons -->

[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?logo=google&logoColor=white)](https://fonts.google.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Heroicons](https://img.shields.io/badge/Heroicons-0EA5E9?logo=heroicons&logoColor=white)](https://heroicons.com/)

<!-- Unsplash / Images -->

[![Unsplash](https://img.shields.io/badge/Images-Unsplash-black?logo=unsplash\&logoColor=white)](https://unsplash.com/)
[![Unsplash API](https://img.shields.io/badge/API-Unsplash%20Developers-000000?logo=unsplash\&logoColor=white)](https://unsplash.com/developers)

<!-- Languages & Web Standards -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<!-- Infra & Runtime -->

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

## Plain docs links

- HTML (MDN) docs: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS (MDN) docs: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- Tailwind CSS docs: [https://tailwindcss.com/docs/](https://tailwindcss.com/docs/)
- PostCSS docs / postcss.config: [https://postcss.org/](https://postcss.org/)
- daisyUI docs: [https://daisyui.com/](https://daisyui.com/)
- Google Fonts docs: [https://fonts.google.com/](https://fonts.google.com/)
- Font Awesome docs: [https://fontawesome.com/](https://fontawesome.com/)
- Heroicons docs: [https://heroicons.com/](https://heroicons.com/)
- Unsplash main site: https://unsplash.com/
- Unsplash Developers (API & docs): https://unsplash.com/developers
- JavaScript (MDN) docs: [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- ECMAScript (spec, ECMA-262) docs: [https://www.ecma-international.org/publications-and-standards/standards/ecma-262/](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- Node.js docs: [https://nodejs.org/](https://nodejs.org/)

---

Professional, production-ready portfolio site showcasing modern web architecture, polished UI, and a collection of real-world projects. This repository contains the static site source (HTML, CSS, and JavaScript) used to present projects, skills, and services.

## Overview

**This project is a single-page, highly-polished portfolio for Md Abu Kayser. It includes:**

- Responsive, accessible UI built with Tailwind CSS and DaisyUI
- Professional design system (gradients, glass effects, animations, dark/light themes)
- Smooth navigation, scroll-triggered animations and a testimonial carousel
- Project gallery with modal previews
- Auth pages (`auth/login.html`, `auth/signup.html`) integrated into the main site via an iframe modal
- Theme persistence (localStorage) and a desktop/mobile theme selector

**The site is static (HTML/CSS/vanilla JS) so it's easy to host on GitHub Pages, Netlify, Vercel, or any static host.**

## Key Features

- Pixel-perfect responsive layout for Mobile / Tablet / Desktop
- Five DaisyUI themes supported: `light`, `dark`, `cupcake`, `forest`, `luxury`
- Theme persistence across sessions using `localStorage`
- Mobile-friendly mega menu with accessible controls and keyboard handling
- Smooth, staged skill bar animations (Intersection Observer + CSS transitions)
- Projects grid with dynamic modals and deep-link support
- Auth pages (`auth/login.html`, `auth/signup.html`) - can be opened in-page via an iframe modal from `index.html`
- Contact form with client-side validation and simulated API handling
- Attention to accessibility: ARIA attributes, focus management, and reduced-motion respect

## Tech Stack

- HTML5
- Tailwind CSS (CDN) + DaisyUI
- Vanilla JavaScript (ES6+) - `js/script.js`, `js/auth.js`, `js/theme-switcher.js`
- Font Awesome icons
- Hosted as a static site (GitHub Pages)

## Repository Structure

**Key files and folders:**

- `index.html` - main single-page site
- `auth/` - authentication pages (`login.html`, `signup.html`) designed to be opened in-page or standalone
- `css/style.css` - main styles and custom animations
- `css/themes.css` - theme overrides and variables
- `images/` - site images and thumbnails
- `js/script.js` - main site logic (menu, theme switcher, skill animations, iframe auth modal)
- `js/auth.js` - auth form handling (login/signup) used inside `auth/` pages
- `js/theme-switcher.js` - theme utilities and helpers
- `README.md` - this file

## How Auth Integration Works

**There are two ways the auth pages are used:**

1. Direct navigation - you can open `auth/login.html` or `auth/signup.html` directly in the browser.
2. In-page modal - Clicking the **Login** or **Sign Up** link on `index.html` opens the respective auth page inside a fullscreen iframe modal (keeps user on the portfolio page while interacting with auth flows).

This makes it easy to present the full auth UI without duplicating markup or scripts.

## Recommended Local QA Checklist

- Open `index.html` and test desktop and mobile navs
- Click `Login` / `Sign Up` in the header and confirm the iframe modal opens and can be closed
- Toggle theme from desktop and mobile selectors; refresh page to verify persistence
- Scroll to the Skills section and confirm progress bars animate with a staggered effect
- Open Projects and Testimonials to verify modals and carousel behavior

## Customization and Theming

- Tailwind utilities are used heavily; edit `tailwind.config` (inlined via CDN config in HTML) to change fonts/colors
- Theme palettes are managed by DaisyUI (data-theme attribute). `js/script.js` persists theme to `localStorage` under key `portfolio-theme`.

### Accessibility and Performance Notes

- Uses semantic HTML and ARIA roles for menus and modals
- Keyboard accessible mobile menu and Escape-to-close handlers
- Images use `loading="lazy"` where appropriate
- CSS transitions are GPU-friendly; heavy effects are kept subtle to preserve performance

### Contribution

**If you'd like to contribute, fork the repo and open a pull request. Suggested workflow:**

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-change`
3. Make changes and test locally
4. Commit and open a PR with a clear description of changes

For issues or feature requests, open an Issue on GitHub.

### Deployment

This site is static and can be deployed to:

- GitHub Pages (branch `gh-page` is used here)
- Vercel or Netlify (drag and drop or connect repo)

When deploying make sure the branch and domain settings are correct and the `index.html` is served as the entry point.

### Changelog (Highlights)

- v2.0.0 - Major UI upgrade, performance improvements, theme system, iframe auth integration
- v1.x - Earlier versions with baseline portfolio content and project listings

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

### Contact and Maintainer

- **Project:** _portfolio-demo_
- **Name:** Md Abu Kayser - Full-Stack Engineer
- **Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)
- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

If you'd like help turning this portfolio into a dynamic site (CMS-driven or with server-side auth/OAuth), I can help design and implement that next.
**Thank you for reviewing this project!**  

---
