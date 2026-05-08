/* @format */

'use strict';

const header = document.querySelector('#header');
const navLinks = document.querySelectorAll('.header__menu__item');
const navbarToggle = document.querySelector('.header__toggle');
const arrowUp = document.querySelector('.arrow-up');
const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const sections = [...document.querySelectorAll('main section[id]')];

function syncHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 16);
  arrowUp.classList.toggle('visible', window.scrollY > window.innerHeight * 0.45);
}

function closeMobileMenu() {
  header.classList.remove('open');
  navbarToggle.setAttribute('aria-expanded', 'false');
}

window.addEventListener('scroll', syncHeaderState);
syncHeaderState();

navbarToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  navbarToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

arrowUp.addEventListener('click', () => {
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

workCategories.addEventListener('click', (event) => {
  const button = event.target.closest('.category__btn');

  if (!button) {
    return;
  }

  const filter = button.dataset.filter;
  document.querySelector('.category__btn.active')?.classList.remove('active');
  button.classList.add('active');

  projectContainer.classList.add('anim-out');

  window.setTimeout(() => {
    projects.forEach((project) => {
      const shouldShow = filter === '*' || filter === project.dataset.type;
      project.classList.toggle('invisible', !shouldShow);
    });
    projectContainer.classList.remove('anim-out');
  }, 180);
});
