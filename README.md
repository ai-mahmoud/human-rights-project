# Human Rights Project — HUE (Horus University of Egypt)

A static website created as the course project for the Human Rights subject at HUE (Horus University of Egypt). This site was developed for the class under Prof. Mahmoud Zaher and presents an overview of human rights history, documents, violations, and ways to take action.

Live demo: [https://ai-mahmoud.github.io/human-rights-project/](https://ai-mahmoud.github.io/human-rights-project/)

---

## Quick facts

- Repository: `ai-mahmoud/human-rights-project`  
- Course: Human Rights (HUE — Horus University of Egypt)  
- Instructor: Prof. Mahmoud Zaher  
- Languages:
  - HTML — 87.1%
  - CSS — 10.6%
  - JavaScript — 2.3%

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## About

This repository contains a static site prepared as the Human Rights course project at HUE. The purpose is to summarize important human-rights instruments (e.g., UDHR, Magna Carta), present historical documents, highlight violations, and offer a simple petition/action page to engage visitors.

---

## Features

- Static informational pages (no server-side code)
- Clear, responsive layout with CSS
- Small JavaScript for client-side interactions (form handling, UI enhancements)
- Organized content pages for canonical documents and case studies

---

## Tech stack

- HTML
- CSS
- JavaScript

---

## Project structure

This structure reflects the current repository layout:

/
- index.html
- udhr.html
- united-nations.html
- violations.html
- petition.html
- magna-carta.html
- cyrus-cylinder.html
- style.css
- script.js
- images/ (assets and images used by the site)

Note: file names and organization are intentionally simple for a course project—feel free to reorganize into subfolders (e.g., `css/`, `js/`, `pages/`) if you expand the site.

---

## Getting started

To view the site:

- Option A: Visit the live GitHub Pages demo: [https://ai-mahmoud.github.io/human-rights-project/](https://ai-mahmoud.github.io/human-rights-project/)
- Option B: Clone the repository and open locally:

```bash
git clone https://github.com/ai-mahmoud/human-rights-project.git
cd human-rights-project
# Open index.html in your browser
```

For local testing of features that require HTTP (e.g., fetch), run a simple static server:

Python 3:
```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or use any static-server tool you prefer.

---

## Development

Guidelines and suggestions for continuing development:

- Keep HTML semantic (headings, landmarks, ARIA where needed)
- Maintain mobile-first, responsive CSS
- Keep JavaScript unobtrusive and progressively enhance functionality
- Use meaningful commits and small pull requests when collaborating

Suggested linters/validators:
- HTML: validator.w3.org or HTMLHint
- CSS: stylelint
- JavaScript: ESLint (if JS grows)

---

## Contributing

This project is a course assignment but contributions and suggestions are welcome. Typical flow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Commit changes with clear messages
4. Open a pull request describing the change

Consider adding repository templates:
- `CONTRIBUTING.md` for contribution guidance
- `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md` to standardize reports

---

## License

No license file is included by default. If you want this project to be open-source, add a `LICENSE` file (e.g., MIT, Apache 2.0). Tell me which license you'd like and I can add a LICENSE file for you.

---

## Contact

Repository owner: [ai-mahmoud](https://github.com/ai-mahmoud)  
Course instructor: Prof. Mahmoud Zaher (HUE, Horus University of Egypt)

---

## Acknowledgements

- Course materials and guidance from HUE and Prof. Mahmoud Zaher
- Open-source tools and community resources used for learning and development
- Contributors and reviewers
