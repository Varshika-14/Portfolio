# P. Varshika — Full Stack Development Assignment 1

A responsive and accessible personal portfolio web application created for **Full Stack Development (SPC0701CS), Assignment-1**.

## Student Details

- **Name:** P. Varshika
- **Roll No.:** 160623733045
- **Semester:** 7th Semester
- **Section:** A
- **College:** Stanley College of Engineering & Technology for Women
- **GitHub:** https://github.com/Varshika-14

## Assignment Coverage

| Requirement | Implementation |
|---|---|
| HTML5 | Semantic sections, headings, lists, links, image-style visual, table, form |
| CSS3 | Selectors, box model, typography, gradients, Flexbox, Grid, media queries |
| Bootstrap | Responsive navbar, grid, buttons, cards, forms, table, alerts, modal |
| JavaScript ES6+ | const/let, functions, arrow functions, arrays, objects, loops, conditions |
| DOM & Events | Dynamic project cards, filters, theme switching, typing effect, scroll progress |
| Validation | Client-side form validation with dynamic success/error messages |
| Accessibility | Labels, ARIA attributes, semantic landmarks, keyboard-friendly controls, reduced motion |
| Responsive design | Mobile-first CSS + Bootstrap responsive grid |

## Interactive Features

1. Light/Dark theme switch with `localStorage`
2. Project category filtering
3. Skill category explorer
4. Typing-text hero animation
5. Project details modal
6. Contact form validation with dynamic messages
7. Copy email interaction
8. Scroll progress indicator
9. Active navigation section highlighting

## Project Structure

```text
Varshika_FSD_Assignment1/
├── index.html
├── styles.css
├── script.js
├── README.md
├── REPORT_CONTENT.md
└── assets/
    └── portfolio-illustration.svg
```

## How to Run

### Option 1 — VS Code + Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Test the website in Chrome.

### Option 2 — Python local server

If Python is installed:

```bash
cd Varshika_FSD_Assignment1
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## GitHub Pages

The site can be deployed through GitHub Pages.

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. Wait for GitHub Pages to publish the site.
8. Add the generated live URL to the report template.

## Notes

The contact form is intentionally client-side only because the assignment asks for client-side validation. It does not send messages to a backend.

Bootstrap is loaded from a CDN, so an internet connection is required for Bootstrap styling/components when running the raw HTML locally.
