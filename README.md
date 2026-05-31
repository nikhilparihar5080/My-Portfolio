# Portfolio - Nikhil Parihar

A modern, responsive single-page portfolio website for Nikhil Parihar — an aspiring Data Analyst. This repository contains a clean glassmorphism-inspired design with smooth animations, a dark mode toggle, skill cards, project placeholders, experience timeline, and a contact form.

## Demo

Open `index.html` in a browser, or run a simple static server (recommended):

```bash
# from this project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Features

- Responsive single-page layout (mobile / tablet / desktop)
- Hero section with animated typing effect and profile image
- About, Skills, Projects, Experience, and Contact sections
- Project cards with placeholder images and action buttons
- Timeline-style experience section
- Contact form with client-side validation (demo)
- Dark mode toggle and localStorage persistence
- Smooth scrolling and active navigation highlighting
- Glassmorphism-inspired styling and hover animations

## Files

- `index.html` — main HTML markup and section structure
- `style.css` — all styles, responsive rules and theme variables
- `script.js` — interactive behaviors (theme toggle, typing, nav, contact form)

## Tech Stack

- HTML5
- CSS3 (modern layout + glassmorphism)
- Vanilla JavaScript
- Font Awesome for icons

## Customize

- Update your name, headline, and copy inside `index.html`.
- Replace placeholder images (profile and project thumbnails) with your own assets.
- Update the resume download behavior in `script.js` (the current implementation generates a simple text file).
- Connect the contact form to a backend or a service like Formspree / Netlify Forms for production use.

## Deploying to GitHub Pages

1. Commit and push this repository to GitHub.
2. In the repository Settings -> Pages, set the site source to the main branch and the root folder `/`.
3. Save and wait a few minutes — your portfolio will be available at `https://<your-username>.github.io/<repo-name>/`.

## Development notes

- The project is intentionally dependency-free for easy hosting as static files.
- To convert the resume download into a PDF, replace the generated blob in `script.js` with a link to a committed PDF or generate one server-side.

## License

This project is provided under the MIT License. See `LICENSE` if you add one.

## Contact

For updates, feedback or collaboration, reach out to: nikhil@example.com


