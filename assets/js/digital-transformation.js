// ===== Digital Transformation Interactive Showcase =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Services data with simplified structure
    const services = {
        'cloud': {
            id: 'cloud',
            title: 'Cloud Services',
            shortTitle: 'Cloud Services',
            tagline: 'Infrastructure transformation',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />',
            color: 'blue',
            badge: 'Digital Transformation',
            description: 'Transform your infrastructure with enterprise-grade cloud solutions. We ensure seamless migration, optimal performance, and cost-efficiency.',
            stats: [
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '40%', label: 'Cost Reduction' },
                { value: '3x', label: 'Faster Deployment' }
            ],
            features: [
                'Cloud Migration & Strategy',
                'Infrastructure Management',
                'Cloud-Native Development',
                'Storage & Backup Solutions',
                'Integration Services',
                'Monitoring & Analytics'
            ],
            benefits: [
                'Zero downtime migration',
                'Scalable infrastructure',
                'Enhanced security',
                '24/7 expert support'
            ]
        },
        'data': {
            id: 'data',
            title: 'Data Analytics',
            shortTitle: 'Data Analytics',
            tagline: 'Insights that drive growth',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM13 19v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2zM21 19v-8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2z" />',
            color: 'green',
            badge: 'Data Intelligence',
            description: 'Unlock the power of your data with advanced analytics. Transform raw data into actionable insights that drive informed decisions and fuel business growth.',
            stats: [
                { value: '10x', label: 'Faster Insights' },
                { value: '95%', label: 'Accuracy Rate' },
                { value: '60%', label: 'Cost Savings' }
            ],
            features: [
                'Data Mining & Exploration',
                'Real-time Analytics',
                'Customer Analytics',
                'Data Visualization',
                'Big Data Processing',
                'Data Warehousing'
            ],
            benefits: [
                'Predictive insights',
                'Real-time dashboards',
                'Automated reporting',
                'Data-driven decisions'
            ]
        },
        'devops': {
            id: 'devops',
            title: 'DevOps Solutions',
            shortTitle: 'DevOps',
            tagline: 'Accelerate delivery',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
            color: 'purple',
            badge: 'Agile Development',
            description: 'Streamline your development pipeline with comprehensive DevOps services. Accelerate software delivery and enhance collaboration between teams.',
            stats: [
                { value: '5x', label: 'Faster Releases' },
                { value: '90%', label: 'Less Downtime' },
                { value: '24/7', label: 'Monitoring' }
            ],
            features: [
                'CI/CD Pipeline Setup',
                'Monitoring & Logging',
                'Infrastructure as Code',
                'Configuration Management',
                'Containerization',
                'Orchestration'
            ],
            benefits: [
                'Automated workflows',
                'Rapid deployment',
                'Enhanced security',
                'Improved collaboration'
            ]
        },
        'mobile': {
            id: 'mobile',
            title: 'Mobile Development',
            shortTitle: 'Mobile Apps',
            tagline: 'Apps that engage',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />',
            color: 'orange',
            badge: 'Mobile First',
            description: 'Create engaging mobile experiences that captivate users. From native apps to cross-platform solutions, we deliver excellence on every device.',
            stats: [
                { value: '4.8★', label: 'App Rating' },
                { value: '2M+', label: 'Downloads' },
                { value: '99%', label: 'Crash-free' }
            ],
            features: [
                'Native iOS & Android',
                'Cross-platform Development',
                'UI/UX Design',
                'Backend Integration',
                'App Store Optimization',
                'Maintenance & Support'
            ],
            benefits: [
                'Stunning interfaces',
                'Smooth performance',
                'Offline capabilities',
                'Push notifications'
            ]
        },
        'software': {
            id: 'software',
            title: 'Custom Software',
            shortTitle: 'Custom Software',
            tagline: 'Tailored solutions',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />',
            color: 'red',
            badge: 'Bespoke Development',
            description: 'Transform your unique ideas into powerful software solutions. We build scalable, secure applications tailored to your specific business needs.',
            stats: [
                { value: '100%', label: 'Custom Built' },
                { value: '2x', label: 'Productivity' },
                { value: '50%', label: 'Cost Savings' }
            ],
            features: [
                'Rapid Prototyping',
                'Process Automation',
                'Low-Code Solutions',
                'Quality Assurance',
                'Security Audits',
                'Architecture Design'
            ],
            benefits: [
                'Perfect fit for needs',
                'Scalable architecture',
                'Full ownership',
                'Ongoing support'
            ]
        },
        'web': {
            id: 'web',
            title: 'E-Services',
            shortTitle: 'E-Services',
            tagline: 'Digital presence',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
            color: 'indigo',
            badge: 'Web Excellence',
            description: 'Elevate your online presence with innovative web solutions. From stunning websites to powerful web applications, we create digital experiences that convert.',
            stats: [
                { value: '3s', label: 'Load Time' },
                { value: '95%', label: 'SEO Score' },
                { value: '2.5x', label: 'Conversions' }
            ],
            features: [
                'Web Design & Development',
                'E-commerce Solutions',
                'Content Management',
                'Web Portals',
                'Learning Management',
                'API Development'
            ],
            benefits: [
                'Responsive design',
                'SEO optimized',
                'Fast performance',
                'Secure & scalable'
            ]
        }
    };
    
    let activeService = 'cloud'; // Default active service
    
    // Render service selector buttons
    function renderServiceSelector() {
        const selector = document.getElementById('service-selector');
        if (!selector) return;
        
        let html = '';
        Object.values(services).forEach(service => {
            html += `
                <button 
                    onclick="window.showService('${service.id}')"
                    class="service-btn w-full text-left p-6 rounded-2xl transition-all duration-300 
                           hover:shadow-lg group bg-white dark:bg-gray-900 border-2 border-transparent
                           hover:border-${service.color}-200 dark:hover:border-${service.color}-800"
                    data-active="${service.id === activeService ? 'true' : 'false'}"
                    data-service="${service.id}">
                    <div class="flex items-center gap-4">
                        <div class="icon-bg w-14 h-14 rounded-xl flex items-center justify-center
                                    bg-${service.color}-100 dark:bg-${service.color}-900/30 
                                    transition-all duration-300">
                            <svg class="icon-color w-7 h-7 text-${service.color}-600 dark:text-${service.color}-400">
                                ${service.icon}
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-semibold transition-colors">${service.shortTitle}</h3>
                            <p class="text-sm opacity-70 mt-1">${service.tagline}</p>
                        </div>
                        <svg class="w-5 h-5 opacity-0 group-data-[active=true]:opacity-100 transition-all duration-300
                                  text-white">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            `;
        });
        
        selector.innerHTML = html;
    }
    
    // Render service content
    function renderServiceContent(serviceId) {
        const content = document.getElementById('service-content');
        const service = services[serviceId];
        if (!content || !service) return;
        
        const html = `
            <!-- Icon and Badge -->
            <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 
                                rounded-2xl flex items-center justify-center text-white shadow-lg shadow-${service.color}-500/25">
                        <svg class="w-8 h-8">
                            ${service.icon}
                        </svg>
                    </div>
                    <span class="px-4 py-2 bg-${service.color}-100 dark:bg-${service.color}-900/30 
                               text-${service.color}-600 dark:text-${service.color}-400 rounded-full text-sm font-medium">
                        ${service.badge}
                    </span>
                </div>
            </div>
            
            <!-- Title and Description -->
            <h2 class="text-4xl font-bold mb-4">${service.title}</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                ${service.description}
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 mb-8">
                ${service.stats.map(stat => `
                    <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                        <div class="text-3xl font-bold bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 
                                    bg-clip-text text-transparent">${stat.value}</div>
                        <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Features Grid -->
            <div class="mb-8">
                <h3 class="text-lg font-semibold mb-4">What we offer:</h3>
                <div class="grid grid-cols-2 gap-3">
                    ${service.features.map(feature => `
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-${service.color}-100 dark:bg-${service.color}-900/30 
                                      rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-4 h-4 text-${service.color}-600 dark:text-${service.color}-400" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                </svg>
                            </div>
                            <span class="text-sm">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Benefits -->
            <div class="bg-${service.color}-50 dark:bg-${service.color}-900/20 rounded-2xl p-6 mb-8">
                <h3 class="text-lg font-semibold mb-3">Key Benefits:</h3>
                <ul class="space-y-2">
                    ${service.benefits.map(benefit => `
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-${service.color}-600 dark:text-${service.color}-400 flex-shrink-0" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>${benefit}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="contact.html?service=${service.id}" 
                   class="inline-flex items-center justify-center gap-2 px-8 py-4 
                          bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 
                          text-white rounded-full font-semibold shadow-lg 
                          hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Started
                    <svg class="w-5 h-5">
                        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                    </svg>
                </a>
                <a href="case-studies.html?filter=${service.id}" 
                   class="inline-flex items-center justify-center gap-2 px-8 py-4 
                          border-2 border-gray-300 dark:border-gray-600 
                          rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    View Case Studies
                </a>
            </div>
        `;
        
        // Add fade effect
        content.style.opacity = '0';
        setTimeout(() => {
            content.innerHTML = html;
            content.style.opacity = '1';
            content.classList.add('animate-slide-in');
        }, 150);
    }
    
    // Show service function
    window.showService = function(serviceId) {
        // Update active states
        document.querySelectorAll('.service-btn').forEach(btn => {
            btn.setAttribute('data-active', btn.getAttribute('data-service') === serviceId ? 'true' : 'false');
        });
        
        // Update active service
        activeService = serviceId;
        
        // Render new content
        renderServiceContent(serviceId);
    };
    
    // Initialize
    renderServiceSelector();
    renderServiceContent(activeService);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const serviceIds = Object.keys(services);
        const currentIndex = serviceIds.indexOf(activeService);
        
        if (e.key === 'ArrowDown' && currentIndex < serviceIds.length - 1) {
            showService(serviceIds[currentIndex + 1]);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            showService(serviceIds[currentIndex - 1]);
        }
    });

        // Check for service parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get('service');
        if (serviceParam && services[serviceParam]) {
            showService(serviceParam);
        }
});
