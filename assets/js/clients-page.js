// ===== Clients Page Specific JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Client logos data
    const clientLogos = [
            {
                name: 'Magsway',
                logoLight: 'assets/images/clients/magsway.jpg',
                logoDark: 'assets/images/clients/magsway.jpg'
            },
            {
                name: 'Nerulus',
                logoLight: 'assets/images/clients/Nerulus.png',
                logoDark: 'assets/images/clients/Nerulus.png'
            },
            {
                name: 'tek',
                logoLight: 'assets/images/clients/teklogo.svg',
                logoDark: 'assets/images/clients/teklogo.svg'
            },
            {
                name: 'University',
                logoLight: 'assets/images/clients/university of Hyderabad.png',
                logoDark: 'assets/images/clients/university of Hyderabad.png'
            },
            {
                name: 'unt',
                logoLight: 'assets/images/clients/unt.png',
                logoDark: 'assets/images/clients/unt.png'
            },
            {
                name: 'walnut',
                logoLight: 'assets/images/clients/walnutmedical.jpg',
                logoDark: 'assets/images/clients/walnutmedical.jpg'
            }
    ];
    
    // Testimonials data
    const testimonials = [
        {
            name: 'Vamsi',
            role: 'COO',
            company: 'Brillius',
            content: 'Nainovate helped us digitize our entire document management system, transforming how we handle records and processes. The AI-powered solution has reduced processing time by 60% and significantly improved data accuracy.',
            rating: 5
        },
        {
            name: 'Amol',
            role: 'CTO',
            company: 'Walnut Medical',
            content: 'The medical device data digitization platform Nainovate built for us is exceptional. We can now track patient vitals in real-time with 95% accuracy, enabling better healthcare outcomes and streamlined operations.',
            rating: 5
        },
        // {
        //     name: 'Sai',
        //     role: 'CTO',
        //     company: 'Freshbus',
        //     content: 'Working with Nainovate on our digital transformation has been game-changing. Their expertise helped us automate critical processes, resulting in 40% cost reduction and improved service delivery to our customers.',
        //     rating: 5
        // },
        {
            name: 'Surya',
            role: 'CFO',
            company: 'Advait Homes',
            content: 'Nainovate\'s innovative solutions transformed our real estate operations. Their AI-driven platform improved our customer engagement by 70% and streamlined our property management processes significantly.',
            rating: 5
        }
    ];
        
    function loadClientLogos() {
        const logosGrid = document.querySelector('[data-clients-logos]');
        if (!logosGrid) return;

        logosGrid.innerHTML = clientLogos.map(client => `
            <div class="flex items-center justify-center p-6 transition-all duration-300" data-animate="fade-in">
                <img 
                    src="${client.logoLight}" 
                    alt="${client.name}" 
                    class="max-h-12 md:max-h-16 w-auto object-contain dark:hidden"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                >
                <img 
                    src="${client.logoDark}" 
                    alt="${client.name}" 
                    class="max-h-12 md:max-h-16 w-auto object-contain hidden dark:block"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                >
                <!-- Fallback if image fails -->
                <div class="text-xl font-semibold text-gray-400 dark:text-gray-600 hidden">
                    ${client.name}
                </div>
            </div>
        `).join('');

        // Animate on load
        setTimeout(() => {
            logosGrid.querySelectorAll('div').forEach((logo, index) => {
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
            });
        }, 100);
        }

    
    // Load testimonials
    function loadTestimonials() {
        const testimonialsGrid = document.querySelector('[data-testimonials-grid]');
        if (!testimonialsGrid) return;
        
        testimonialsGrid.innerHTML = testimonials.map(testimonial => `
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" style="position: relative;">
                <div class="flex mb-4">
                    ${Array(5).fill(0).map((_, i) => `
                        <svg class="w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    `).join('')}
                </div>
                
                <blockquote class="text-gray-700 dark:text-gray-300 mb-6">
                    "${testimonial.content}"
                </blockquote>
                
                <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white font-semibold mr-4">
                        ${testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <div class="font-semibold">${testimonial.name}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400">
                            ${testimonial.role}, ${testimonial.company}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add animation
        setTimeout(() => {
            testimonialsGrid.querySelectorAll('div').forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
    }
    
    // Counter animation
    function initCounters() {
        const counters = [
            { selector: '[data-counter="50"]', target: 50 },
            { selector: '[data-counter="98"]', target: 98 },
            { selector: '[data-counter="15"]', target: 15 },
            { selector: '[data-counter="95"]', target: 95 }
        ];
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const config = counters.find(c => entry.target.matches(c.selector));
                    if (config) {
                        animateCounter(entry.target, config.target);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(config => {
            const element = document.querySelector(config.selector);
            if (element) {
                observer.observe(element);
            }
        });
    }
    
    function animateCounter(element, target) {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Add hover effect to video testimonials
    function initVideoHover() {
        const videos = document.querySelectorAll('.aspect-video');
        
        videos.forEach(video => {
            video.addEventListener('mouseenter', function() {
                const playButton = this.querySelector('.rounded-full');
                if (playButton) {
                    playButton.style.transform = 'scale(1.1)';
                }
            });
            
            video.addEventListener('mouseleave', function() {
                const playButton = this.querySelector('.rounded-full');
                if (playButton) {
                    playButton.style.transform = 'scale(1)';
                }
            });
            
            // Add click handler for demo purposes
            video.addEventListener('click', function() {
                alert('Video player would open here in a real implementation');
            });
        });
    }
    
    // Smooth scroll animations
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        });
    }
    
    // Add floating animation to quote icon
    function animateQuoteIcon() {
        const quoteIcon = document.querySelector('svg.w-16');
        if (quoteIcon) {
            quoteIcon.style.animation = 'float 3s ease-in-out infinite';
            
            // Add keyframes
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Initialize everything
    loadClientLogos();
    loadTestimonials();
    initCounters();
    initVideoHover();
    initScrollAnimations();
    animateQuoteIcon();
    
    // Log for debugging
    console.log('Clients page loaded successfully');
});


// ===== Simplified Clients Page JavaScript =====
// ===== Simplified Clients Page JavaScript =====
// ===== Simplified Clients Page JavaScript =====
