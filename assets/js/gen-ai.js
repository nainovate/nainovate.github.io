// ===== Generative AI Page JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
    
    // Floating animation for background elements
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const floatingElements = document.querySelectorAll('.float-animation');
        
        floatingElements.forEach((el, index) => {
            const speed = 0.3 + (index * 0.1);
            el.style.transform = `translate(${Math.sin(scrollY * 0.001) * 30}px, ${Math.cos(scrollY * 0.001) * 30}px) rotate(${scrollY * speed * 0.1}deg)`;
        });
    });
    
    console.log('Generative AI page initialized');
});