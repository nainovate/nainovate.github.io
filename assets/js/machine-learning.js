// ===== Machine Learning Page JavaScript =====

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
                // Don't animate the boxes here - they should be visible by default
                if (!entry.target.classList.contains('box-hover')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                
                // Add animation class to boxes when parent section is visible
                const boxes = entry.target.querySelectorAll('.box-hover');
                if (boxes.length > 0) {
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe sections only (not individual boxes)
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
    
    // Parallax effect for background elements
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const bgElements = document.querySelectorAll('.animate-pulse-slow');
        
        bgElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translate(${scrollY * speed * 0.1}px, ${scrollY * speed * 0.1}px)`;
        });
    });
    
    console.log('Machine Learning page initialized');
});