# Ankit Pandey Portfolio

Personal portfolio website for Ankit Pandey, built as a responsive frontend portfolio with updated resume content, project showcase, certifications, work experience, and light/dark mode support.

Live site:

https://ankitpandey2.netlify.app

## Overview

This portfolio highlights:

- Professional summary and dynamic experience counter
- Skills across Java, Spring Boot, Angular, React, JavaScript, and related tools
- Education and certifications
- Work experience at Wipro and Python automation support work
- Personal project showcase with live links
- Contact section and downloadable resume

## Features

- Fully responsive layout
- Light and dark mode toggle
- Dynamic experience calculation based on joining date
- Smooth section-based navigation
- Resume download support
- Project gallery with live links

## Project Structure

```text
Responsive-portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── favicon/
│   ├── img/
│   ├── js/
│   │   └── main.js
│   └── *.pdf
├── index.html
└── README.md
```

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser, or run a lightweight local server:

```bash
cd Responsive-portfolio
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Main Files

- `index.html`: page structure and portfolio content
- `assets/css/styles.css`: layout, responsive styling, animations, and theme styles
- `assets/js/main.js`: menu toggle, dark mode, dynamic experience counter, and scroll behavior

## Contact

- Email: ankitpandey.272003@gmail.com
- LinkedIn: https://www.linkedin.com/in/ankit-pandey-193359255
- GitHub: https://github.com/itsankitpandey

## Notes

- Resume and image assets are stored under `assets/`
- Experience text updates automatically from the configured join date in `assets/js/main.js`
