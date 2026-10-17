const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const savedTheme = localStorage.getItem('dev-portfolio-theme');

if (savedTheme === 'light') body.classList.add('light-theme');
updateThemeButton();

function updateThemeButton() {
  const isLight = body.classList.contains('light-theme');
  themeIcon.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#f5f7fb' : '#0b1020');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  localStorage.setItem('dev-portfolio-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeButton();
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();