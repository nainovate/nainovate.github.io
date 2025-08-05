// ===== AI Transformation Page JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Animate numbers on scroll
    function initNumberAnimation() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateValue(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Find all stat numbers
        document.querySelectorAll('.text-4xl').forEach(el => {
            if (el.textContent.match(/\d+/)) {
                observer.observe(el);
            }
        });
    }
    
    function animateValue(element) {
        const finalValue = element.textContent;
        const numericValue = parseInt(finalValue);
        const suffix = finalValue.replace(/\d+/, '');
        const duration = 2000;
        const startTime = Date.now();
        
        function update() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(numericValue * easeOutQuart);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        update();
    }
    
    // Add hover effects to service cards
    function initCardEffects() {
        const cards = document.querySelectorAll('.ai-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Parallax effect for floating backgrounds
    function initParallax() {
        const floatingElements = document.querySelectorAll('.float-animation');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            floatingElements.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1);
                el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
            });
        });
    }
    
    // Initialize all animations
    initNumberAnimation();
    initCardEffects();
    initParallax();
    
    // Log for debugging
    console.log('AI Transformation page initialized');
});