# Assignment-1 Report Content

## Student Details

**Name:** P. Varshika  
**Roll No.:** 160623733045  
**Semester:** 7th Semester  
**Section:** A  
**GitHub Repository URL:** https://github.com/Varshika-14  
**Live Portfolio URL:** Add the GitHub Pages URL after deployment.

## 1. Objective

The objective of this assignment is to design and develop an original, responsive, accessible and interactive personal portfolio web application using HTML5, CSS3, Bootstrap and JavaScript ES6+. The portfolio presents my profile, academic background, skills, projects, achievements and contact information while demonstrating responsive design, modern UI practices and client-side functionality.

## 2. Technologies Used

| Technology | Concepts / Features Used |
|---|---|
| HTML5 | Semantic HTML sections, headings, lists, links, table, form and accessible structure |
| CSS3 | Selectors, box model, typography, colors, gradients, Flexbox, Grid and media queries |
| Bootstrap 5 | Navbar, responsive grid, buttons, cards, forms, table, alerts, modal and utility classes |
| JavaScript ES6+ | Variables, functions, arrow functions, arrays, objects, template literals, conditions and loops |
| DOM & Events | Dynamic project rendering, filtering, theme switching, form validation and event listeners |
| Browser APIs | `localStorage`, Clipboard API and scroll events |

## 3. Portfolio Features

### Home / Profile
The home section introduces P. Varshika as a Computer Science & Engineering student. It includes a responsive hero section, profile visual, call-to-action buttons, quick statistics and an animated typing text.

### About Me
The About section contains a short profile and focus areas related to web development, cybersecurity, data/ML concepts, agriculture/public-service technology and problem solving.

### Education
A responsive Bootstrap table presents the academic qualification, institution, specialization and current semester status.

### Skills
The skills section groups technologies into Web, Programming, Data and Security. An interactive Skill Explorer allows the user to filter skills by category.

### Projects
Projects are stored as JavaScript objects in an array and rendered dynamically into Bootstrap-style responsive cards. Project filtering is implemented for Web, AI/ML and Security categories. A modal displays additional project details.

### Achievements / Certifications
The portfolio contains project and innovation highlights including the CDAC + Bihar Police Cyber Hackathon 2025, Kalpana 2K25 Project Expo and AgriYUVAN / Agri Tracker work.

### Contact
The contact section contains a GitHub link, copy-email interaction and a client-side validated contact form with dynamic success and error messages.

### JavaScript Interactive Features
- Light/dark theme switching
- Project filtering
- Skill filtering
- Typing animation
- Project details modal
- Contact form validation
- Copy-to-clipboard
- Scroll progress indicator
- Active navigation highlighting

### Other Features
- Responsive mobile-first layout
- Semantic HTML5 structure
- Accessible form labels and ARIA live regions
- Reduced-motion support
- Modern card-based visual design
- Bootstrap responsive utilities

## 4. Implementation Details

### HTML5 & CSS3

**Semantic HTML5 structure:**  
The application uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `aside`, `form`, `table`, `footer` and heading hierarchy.

**CSS Flexbox / Grid:**  
Flexbox is used for navigation, buttons, statistics, timelines and alignment. CSS Grid is used for the Skill Explorer. Bootstrap's responsive grid is also used throughout the application.

**Styling and layout:**  
Custom CSS variables are used for colors, spacing, borders, shadows and theme values. Cards, gradients, rounded corners and responsive typography create a consistent visual system.

**Responsive design and media queries:**  
The layout follows a mobile-first approach. Media queries adjust navigation, spacing, typography, cards and the hero section for tablets and mobile devices.

**Accessibility features:**  
The application includes descriptive labels, semantic landmarks, keyboard-accessible buttons/links, ARIA labels/live regions, meaningful heading structure and a `prefers-reduced-motion` media query.

### Bootstrap

**Navbar:** Responsive Bootstrap navbar with collapse behavior.

**Grid:** Bootstrap `container`, `row`, and responsive column classes.

**Cards:** Project and content cards are combined with custom CSS.

**Forms:** Bootstrap form controls, validation classes and feedback messages.

**Tables:** Responsive Bootstrap table for education.

**Other components:** Buttons, alert messages, modal dialog, badges and utility classes.

### JavaScript

**Variables / Data Types:** `const`, `let`, strings, numbers, arrays, objects and booleans.

**Functions / Arrow Functions:** Functions such as `renderProjects`, `showProjectDetails`, `renderSkills` and arrow callbacks.

**Arrays / Objects:** The `projects` array stores project objects; `skillData` stores categorized skill arrays.

**Conditions / Loops:** Filtering uses conditions; `map`, `filter`, `find`, `forEach` and `reduce` are used for iteration and data processing.

**DOM Manipulation:** The script dynamically updates project cards, skill pills, modal content, theme classes and form feedback.

**Event Handling:** Click, submit, reset and scroll event listeners are implemented.

**Form Validation:** HTML constraint validation is combined with JavaScript to display dynamic valid/invalid states.

**Dynamic Features:** Theme switching, project filtering, skill filtering, typing animation, modal details, copy-to-clipboard and scroll progress.

## 5. Screenshots

Insert these screenshots into the official report template:

1. Desktop/Home Page — full desktop view of the hero and navigation.
2. Mobile/Responsive View — browser/device emulation showing the responsive layout.
3. JavaScript Interactive Feature — project filtering or dark/light theme.
4. Form Validation / Dynamic Feature — invalid form message and/or successful validation alert.

## 6. Testing

| Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|
| Navigation links | Navigate to correct section | Correct section opened | PASS |
| Contact form with valid data | Form accepted and success message shown | Success message shown | PASS |
| Contact form with invalid data | Error message displayed | Error message displayed | PASS |
| JavaScript feature | UI updates dynamically | Filter/theme/skill UI updates | PASS |
| Mobile view | Layout adapts correctly | Responsive layout adapts | PASS |
| Project modal | Selected project details appear | Modal displays project details | PASS |
| Theme toggle | Theme changes and preference persists | Theme changes and localStorage stores mode | PASS |
| Copy email | Email is copied or fallback appears | Browser clipboard/fallback works | PASS |

## 7. Learning Outcomes

Through this assignment, I learned how to combine HTML5, CSS3, Bootstrap and JavaScript to create a complete responsive web application. I understood how semantic HTML improves structure and accessibility, how CSS Flexbox, Grid and media queries support responsive design, and how Bootstrap speeds up UI development. I also learned how JavaScript ES6+ can be used for DOM manipulation, event handling, filtering, theme switching and client-side form validation. The assignment helped me understand how frontend technologies work together to create a functional and user-friendly portfolio.
