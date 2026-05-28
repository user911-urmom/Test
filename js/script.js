// ============================================
// DE POWER CLEANING - JAVASCRIPT
// ============================================

// === MOBILE MENU TOGGLE ===
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === OFFERTE FORM ===
const offerteForm = document.querySelector('#offerte-form');

if (offerteForm) {
    offerteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const service = document.querySelector('#service').value.trim();
        const message = document.querySelector('#message').value.trim();
        
        if (!name || !email || !phone || !service) {
            alert('Gelieve alle verplichte velden in te vullen.');
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Gelieve een geldig e-mailadres in te vullen.');
            return;
        }
        
        // WhatsApp message
        const whatsappMessage = `Hallo, ik wil graag een offerte aanvragen.
        
Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Dienst: ${service}
Bericht: ${message}`;

        const whatsappURL = `https://wa.me/32484837438?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank');
        
        alert('Bedankt! U wordt doorgestuurd naar WhatsApp.');
        offerteForm.reset();
    });
}

// === SCROLL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature, .spec-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
