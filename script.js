

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const themeToggle = document.getElementById('theme-toggle');

const closeMenu = () => {
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  menuBtn.textContent = '☰';
};

const setTheme = isDarkMode => {
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggle.setAttribute('aria-pressed', String(isDarkMode));
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeToggle.setAttribute('title', isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeToggle.innerHTML = `<i class="fa-solid fa-${isDarkMode ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
};

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
  const isDarkMode = !document.body.classList.contains('dark-mode');
  setTheme(isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.contains('flex');

  if (isOpen) {
    closeMenu();
    return;
  }

  menu.classList.remove('hidden');
  menu.classList.add('flex');
  menuBtn.textContent = '✕';
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      closeMenu();
    }
  });
});

const techTrack = document.querySelector('.tech-track');
const previousTechButton = document.querySelector('.tech-carousel-button--prev');
const nextTechButton = document.querySelector('.tech-carousel-button--next');

const scrollTechCards = direction => {
  const firstCard = techTrack.querySelector('.tech-card');
  const cardWidth = firstCard.getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(techTrack).gap);

  techTrack.scrollBy({
    left: direction * (cardWidth + gap),
    behavior: 'smooth'
  });
};

previousTechButton.addEventListener('click', () => scrollTechCards(-1));
nextTechButton.addEventListener('click', () => scrollTechCards(1));

const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

projectFilters.forEach(filterButton => {
  filterButton.addEventListener('click', () => {
    const selectedStack = filterButton.dataset.filter;

    projectFilters.forEach(button => {
      const isActive = button === filterButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach(card => {
      const shouldShow = selectedStack === 'all' || card.dataset.stack === selectedStack;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});


const revealElements = document.querySelectorAll(
  '.bg-white, #sobre p'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealElements.forEach(el => observer.observe(el));


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });