// ===== Simple JavaScript for Nainovate =====

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize everything
    initTheme();
    initNavigation();
    initAnimations();
    loadDynamicContent();
    initParticles();
    
    // Theme functionality
    function initTheme() {
        const themeToggle = document.querySelector('[data-theme-toggle]');
        
        if (themeToggle) {
            // Update theme toggle icon
            updateThemeIcon();
            
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                document.documentElement.classList.toggle('dark', newTheme === 'dark');
                localStorage.setItem('theme', newTheme);
                
                updateThemeIcon();
            });
        }
        
        function updateThemeIcon() {
            const theme = document.documentElement.getAttribute('data-theme');
            const themeToggle = document.querySelector('[data-theme-toggle]');
            if (themeToggle) {
                themeToggle.innerHTML = theme === 'light' 
                    ? '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>'
                    : '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>';
            }
        }
    }
    
    // Navigation functionality
    function initNavigation() {
        const mobileToggle = document.querySelector('[data-mobile-toggle]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        const nav = document.querySelector('[data-nav]');
        
        // Mobile menu toggle
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });
        }
        
        // Scroll effects
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.scrollY;
            
            if (currentScroll > 50) {
                nav.setAttribute('data-scrolled', 'true');
            } else {
                nav.removeAttribute('data-scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Basic animations
    function initAnimations() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observe all elements with data-animate
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Load dynamic content
    function loadDynamicContent() {
        // Services
        const services = [
        {
            title: 'Cloud Computing',
            description: 'Scalable cloud infrastructure and migration services for modern businesses.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>',
            link: 'digital-transformation.html?service=cloud'
        },
        {
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with advanced analytics solutions.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM13 19v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2zM21 19v-8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2z" /></svg>',
            link: 'digital-transformation.html?service=data'
        },
        {
            title: 'DevOps Solutions',
            description: 'Streamline development and operations with automated CI/CD pipelines.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
            link: 'digital-transformation.html?service=devops'
        },
        {
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications that delight users.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
            link: 'digital-transformation.html?service=mobile'
        },
        {
            title: 'Custom Software',
            description: 'Tailored software solutions designed to meet your unique business needs.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
            link: 'digital-transformation.html?service=software'
        },
        {
            title: 'Web Development',
            description: 'Modern, responsive web applications built with cutting-edge technologies.',
            icon: '<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>',
            link: 'digital-transformation.html?service=web'
        }
    ];
        
        const servicesGrid = document.querySelector('[data-services-grid]');
        if (servicesGrid) {
            servicesGrid.innerHTML = services.map(service => `
                <article class="service-card group" data-animate="fade-in" style="position: relative;">
                    <div class="relative z-10">
                        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-blue-600 
                                    flex items-center justify-center mb-6 text-white
                                    group-hover:scale-110 transition-transform duration-300">
                            ${service.icon}
                        </div>
                        <h3 class="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            ${service.title}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">
                            ${service.description}
                        </p>
                        <a href="${service.link}" 
                        class="inline-flex items-center text-primary-600 dark:text-primary-400 
                                font-medium hover:gap-3 gap-2 transition-all">
                            Learn more
                            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </article>
            `).join('');
            
            // Fix any positioning issues
            setTimeout(() => {
                servicesGrid.querySelectorAll('.service-card').forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                    card.style.position = 'relative';
                });
            }, 100);
        }
        
        // Case Studies
        const caseStudies = [
            {
                title: 'Digitizing Human Vitals Data',
                image: 'assets/images/case-studies/Digitizing Human Vitals Data.png', // Optional image
                gradient: 'from-primary-600/20 to-blue-600/20', // Fallback gradient
                description: 'Transformed manual health monitoring into an automated digital platform with real-time data collection and analytics for better patient care.',
                tags: ['IoT', 'Healthcare', 'Cloud'],
                link: 'case-study-detail.html?id=vitals'
            },
            {
                title: 'Defect Detection in Manufacturing',
                image: 'assets/images/case-studies/Defect Detection in Manufacturing.png',
                gradient: 'from-blue-600/20 to-purple-600/20',
                description: 'Computer vision system for real-time defect detection on production lines, dramatically improving quality control.',
                tags: ['Computer Vision', 'AI', 'ML'],
                link: 'case-study-detail.html?id=defect'
            },
            {
                title: 'Optimizing Logistics Management',
                image: 'assets/images/case-studies/Optimizing Logistics Management.png',
                gradient: 'from-purple-600/20 to-pink-600/20',
                description: 'Intelligent routing system with predictive analytics optimizing delivery routes and reducing operational costs.',
                tags: ['ML', 'Analytics', 'Real-time'],
                link: 'case-study-detail.html?id=logistics'
            }
        ];

        const caseStudiesGrid = document.querySelector('[data-case-studies-grid]');
        if (caseStudiesGrid) {
            caseStudiesGrid.innerHTML = caseStudies.map(study => `
                <article class="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" 
                    onclick="window.location.href='${study.link}'"
                    data-animate="fade-in" style="position: relative;">
                    <!-- Image or Gradient Background -->
                    <div class="aspect-w-16 aspect-h-9 h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                        ${study.image ? `
                            <img src="${study.image}" 
                                alt="${study.title}" 
                                class="absolute inset-0 w-full h-full object-cover"
                                onerror="this.style.display='none'">
                        ` : ''}
                    </div>
                    
                    <div class="p-6">
                        <div class="flex flex-wrap gap-2 mb-3">
                            ${study.tags.map(tag => `
                                <span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                        <h3 class="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            ${study.title}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300">${study.description}</p>
                    </div>
                </article>
            `).join('');
            
            // Fix positioning
            setTimeout(() => {
                caseStudiesGrid.querySelectorAll('article').forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                    card.style.position = 'relative';
                });
            }, 100);
        }
        
        // Clients
        // Replace the current clients implementation with this:
        const clients = [
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

        const clientsGrid = document.querySelector('[data-clients-grid]');
        if (clientsGrid) {
            clientsGrid.innerHTML = clients.map(client => `
                <div class="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300" data-animate="fade-in">
                    <img 
                        src="${client.logoLight}" 
                        alt="${client.name}" 
                        class="h-12 md:h-16 w-auto object-contain dark:hidden"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                    >
                    <img 
                        src="${client.logoDark}" 
                        alt="${client.name}" 
                        class="h-12 md:h-16 w-auto object-contain hidden dark:block"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                    >
                    <!-- Fallback if image not found -->
                    <div class="text-2xl font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors hidden">
                        ${client.name}
                    </div>
                </div>
            `).join('');
        }
        
        // Force all content to be visible after loading
        setTimeout(() => {
            document.querySelectorAll('[data-animate]').forEach(el => {
                el.style.cssText = 'opacity: 1 !important; transform: none !important; position: relative !important;';
                el.classList.add('animate-in');
            });
            
            // Ensure all grids are visible
            document.querySelectorAll('[data-services-grid], [data-case-studies-grid], [data-clients-grid]').forEach(grid => {
                grid.style.cssText = 'display: grid !important; opacity: 1 !important; visibility: visible !important;';
            });
        }, 200);
    }
    
    // Simple particle animation
    function initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 50;
        
        // Set canvas size
        function setCanvasSize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
                ctx.fill();
            });
            
            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
});


