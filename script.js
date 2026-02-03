// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Copiar email al portapapeles
const emailIcon = document.querySelector('a[href*="mailto"]');

if (emailIcon) {
    emailIcon.addEventListener('click', function(e) {
        // Permitir que se abra el cliente de email por defecto
        console.log('Email: samuel.webdigital@gmail.com');
    });
}

// Animación suave al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    e.preventDefault();
                }
            }
        });
    });
});

// Efecto en elementos con hover
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Animación de fade-in al cargar la página
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
    });
});
