const projectData = [
  {
    id: 1,
    title: 'AgriYUVAN / Agri Tracker',
    category: 'ml',
    icon: 'bi-flower1',
    description: 'A farmer-focused concept for crop, seed, fertilizer and pesticide recommendations using data-driven logic and practical agricultural insight.',
    tags: ['HTML/CSS/JS', 'Data Analysis', 'ML', 'Agriculture']
  },
  {
    id: 2,
    title: 'TransGuard-X',
    category: 'security',
    icon: 'bi-shield-lock',
    description: 'A cybersecurity-focused concept for suspicious transaction detection using risk signals, user activity patterns, and threat-awareness logic.',
    tags: ['Cybersecurity', 'Risk Scoring', 'Analytics', 'Security']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    category: 'web',
    icon: 'bi-window',
    description: 'A responsive portfolio project demonstrating semantic HTML5, CSS3, Bootstrap and JavaScript ES6+ in a professional student profile.',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
  },
  {
    id: 4,
    title: 'Data & ML Practice',
    category: 'ml',
    icon: 'bi-bar-chart-line',
    description: 'Academic practice involving data preparation, machine-learning fundamentals, visualization, and evaluation-based problem solving.',
    tags: ['Python', 'Data', 'ML', 'Practice']
  }
];

const skillData = {
  programming: ['Python', 'C', 'Java', 'Problem Solving', 'DSA Basics'],
  web: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript ES6+', 'Responsive Design'],
  data: ['SQL', 'Data Analysis', 'Machine Learning', 'Visualization', 'Data Handling'],
  tools: ['Git', 'VS Code', 'Debugging', 'Documentation', 'Testing']
};

const typeWords = ['Full Stack Development', 'Web Development', 'Software Development', 'Problem Solving'];

const applyTheme = (mode) => {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  body.classList.toggle('dark-mode', mode === 'dark');

  if (icon) {
    icon.className = mode === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }

  if (toggle) {
    toggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
};

const renderProjects = (filter = 'all') => {
  const projectGrid = document.getElementById('projectGrid');
  if (!projectGrid) return;

  const filteredProjects = filter === 'all'
    ? projectData
    : projectData.filter((project) => project.category === filter);

  projectGrid.innerHTML = filteredProjects.map((project) => `
    <div class="col-md-6 col-xl-4">
      <article class="project-card">
        <div class="project-cover ${project.category}">
          <i class="bi ${project.icon} project-icon" aria-hidden="true"></i>
        </div>
        <div class="project-body">
          <span class="project-tag text-uppercase">${project.category}</span>
          <h3 class="mt-3">${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags mb-4">
            ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <button class="btn btn-sm btn-outline-primary view-project" data-project-id="${project.id}" type="button">
            View details <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </article>
    </div>
  `).join('');

  const projectCount = document.getElementById('projectCount');
  if (projectCount) {
    projectCount.textContent = `${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} shown`;
  }

  document.querySelectorAll('.view-project').forEach((button) => {
    button.addEventListener('click', () => showProjectDetails(Number(button.dataset.projectId)));
  });
};

const showProjectDetails = (projectId) => {
  const project = projectData.find((item) => item.id === projectId);
  const title = document.getElementById('projectModalTitle');
  const body = document.getElementById('projectModalBody');
  const modalElement = document.getElementById('projectModal');

  if (!project || !title || !body || !modalElement) return;

  title.textContent = project.title;
  body.innerHTML = `
    <p>${project.description}</p>
    <p class="fw-bold mb-2">Technologies / concepts</p>
    <div class="project-tags">
      ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
    </div>
  `;

  const modal = new bootstrap.Modal(modalElement);
  modal.show();
};

const renderSkills = (category = 'all') => {
  const skillExplorer = document.getElementById('skillExplorer');
  if (!skillExplorer) return;

  const selectedSkills = category === 'all'
    ? Object.values(skillData).flat()
    : (skillData[category] || []);

  skillExplorer.innerHTML = selectedSkills.map((skill) => `
    <div class="skill-pill"><i class="bi bi-check2-circle me-1"></i>${skill}</div>
  `).join('');
};

const initTheme = () => {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      applyTheme(nextTheme);
    });
  }
};

const initTypingEffect = () => {
  const typingText = document.getElementById('typingText');
  if (!typingText) return;

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeEffect = () => {
    const word = typeWords[wordIndex];
    typingText.textContent = deleting
      ? word.slice(0, charIndex--)
      : word.slice(0, charIndex++);

    if (!deleting && charIndex === word.length + 1) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % typeWords.length;
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
  };

  typeEffect();
};

const initScrollProgress = () => {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress);
};

const initNavigation = () => {
  const currentPage = document.body.dataset.page;
  document.querySelectorAll('.nav-link[data-page]').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
};

const initContactForm = () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const formAlert = document.getElementById('formAlert');
  const fieldRules = {
    name: (value) => value.trim().length >= 2,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    subject: (value) => value.trim().length >= 5,
    message: (value) => value.trim().length >= 15
  };
  const fields = ['name', 'email', 'subject', 'message']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const updateFieldState = (field, isValid, message) => {
    field.classList.remove('is-valid', 'is-invalid');
    if (isValid) {
      field.classList.add('is-valid');
    } else {
      field.classList.add('is-invalid');
      const errorElement = field.parentElement.querySelector('.invalid-feedback');
      if (errorElement) errorElement.textContent = message;
    }
  };

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      const rule = fieldRules[field.id];
      const isFieldValid = rule ? rule(field.value) : field.checkValidity();
      const message = {
        name: 'Please enter a valid name with at least 2 characters.',
        email: 'Please enter a valid email address.',
        subject: 'Please enter a subject with at least 5 characters.',
        message: 'Please enter a message with at least 15 characters.'
      }[field.id];

      updateFieldState(field, isFieldValid, message);
      if (!isFieldValid) isValid = false;
    });

    if (!formAlert) return;
    formAlert.className = 'alert';
    formAlert.classList.remove('d-none');

    if (isValid) {
      formAlert.classList.add('alert-success');
      formAlert.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Thank you! Your message passed validation and is ready to send.';
      contactForm.reset();
      fields.forEach((field) => field.classList.remove('is-valid', 'is-invalid'));
      return;
    }

    formAlert.classList.add('alert-danger');
    formAlert.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i>Please correct the highlighted fields and try again.';
  });

  const resetButton = document.getElementById('resetForm');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      if (formAlert) {
        formAlert.className = 'alert d-none';
        formAlert.innerHTML = '';
      }
      fields.forEach((field) => field.classList.remove('is-valid', 'is-invalid'));
    });
  }
};

const initCopyEmail = () => {
  const copyButton = document.getElementById('copyEmail');
  if (!copyButton) return;

  copyButton.addEventListener('click', async () => {
    const email = document.getElementById('emailText')?.textContent?.trim() || 'varshika.portfolio@example.com';
    const message = document.getElementById('copyMessage');

    try {
      await navigator.clipboard.writeText(email);
      if (message) message.textContent = 'Email copied to clipboard.';
    } catch (error) {
      if (message) message.textContent = `Copy unavailable. Email: ${email}`;
    }
  });
};

const initYear = () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
};

const initFilterButtons = () => {
  document.querySelectorAll('.project-filter').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.dataset.filter || 'all';
      document.querySelectorAll('.project-filter').forEach((btn) => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline-primary');
      });
      button.classList.add('active', 'btn-primary');
      button.classList.remove('btn-outline-primary');
      renderProjects(selectedFilter);
    });
  });

  document.querySelectorAll('.skill-filter').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedSkill = button.dataset.skill || 'all';
      document.querySelectorAll('.skill-filter').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderSkills(selectedSkill);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initTheme();
  initNavigation();
  initScrollProgress();
  initTypingEffect();
  initFilterButtons();
  initContactForm();
  initCopyEmail();

  renderProjects();
  renderSkills();
});
