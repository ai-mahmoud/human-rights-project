document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    const darkModeBtn = document.createElement('button');
    darkModeBtn.id = 'dark-mode-toggle';

    const isDark = document.documentElement.classList.contains('dark-mode');
    darkModeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    nav.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const nowDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', nowDark ? 'enabled' : 'disabled');
        darkModeBtn.textContent = nowDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('?')[0];
        if (linkHref === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
