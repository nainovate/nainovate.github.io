// ===== Case Studies Page Specific JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // All 8 Case studies data
    const allCaseStudies = [
        {
            id: 1,
            title: 'Digitizing Human Vitals Data',
            category: 'healthcare',
            description: 'Transformed manual health monitoring into an automated digital platform with real-time data collection and analytics for better patient care.',
            results: ['90% Data Accuracy', '70% User Adoption', '50% Healthcare Integration'],
            technologies: ['IoT', 'Cloud', 'Analytics', 'Mobile App'],
            image: 'assets/images/case-studies/Digitizing Human Vitals Data.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=vitals'
        },
        {
            id: 2,
            title: 'Digitizing Tax Filing Processes',
            category: 'finance',
            description: 'Automated complex tax filing procedures, reducing errors and processing time while ensuring compliance with regulations.',
            results: ['60% Time Reduction', '95% Accuracy Rate', '80% Cost Savings'],
            technologies: ['AI', 'Automation', 'Cloud', 'Security'],
            image: 'assets/images/case-studies/Digitizing Tax Filing Processes.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=tax'
        },
        {
            id: 3,
            title: 'Digitizing Document Management',
            category: 'enterprise',
            description: 'Implemented intelligent document management system with OCR and automated classification for seamless digital transformation.',
            results: ['75% Faster Retrieval', '90% Paper Reduction', '100% Searchable'],
            technologies: ['OCR', 'AI', 'Cloud Storage', 'Search'],
            image: 'assets/images/case-studies/Digitizing Document Management.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=documents'
        },
        {
            id: 4,
            title: 'Enhancing Workforce Management',
            category: 'hr',
            description: 'Developed comprehensive workforce management platform with real-time tracking, scheduling, and performance analytics.',
            results: ['50% Efficiency Gain', '85% Employee Satisfaction', '30% Cost Reduction'],
            technologies: ['Mobile', 'Analytics', 'Cloud', 'Real-time'],
            image: 'assets/images/case-studies/Enhancing Workforce Management.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=workforce'
        },
        {
            id: 5,
            title: 'Product Catalogue Management',
            category: 'retail',
            description: 'Built scalable product catalogue system handling millions of SKUs with real-time inventory updates and smart recommendations.',
            results: ['3x Faster Updates', '99.9% Uptime', '45% Sales Increase'],
            technologies: ['Database', 'API', 'ML', 'Cloud'],
            image: 'assets/images/case-studies/Product Catalogue Management.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=catalog'
        },
        {
            id: 6,
            title: 'Optimizing Logistics Management',
            category: 'logistics',
            description: 'Intelligent routing system with predictive analytics optimizing delivery routes and reducing operational costs.',
            results: ['40% Faster Delivery', '30% Cost Reduction', '95% On-time Rate'],
            technologies: ['ML', 'GPS', 'Analytics', 'Real-time'],
            image: 'assets/images/case-studies/Optimizing Logistics Management.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=logistics'
        },
        {
            id: 7,
            title: 'Enhancing Recruitment Efficiency',
            category: 'hr',
            description: 'AI-powered recruitment platform automating candidate screening and matching with intelligent scoring algorithms.',
            results: ['70% Time Saved', '85% Better Matches', '2x Hiring Speed'],
            technologies: ['AI', 'NLP', 'Analytics', 'Automation'],
            image: 'assets/images/case-studies/Enhancing Recruitment Efficiency.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=recruitment'
        },
        {
            id: 8,
            title: 'Defect Detection in Manufacturing',
            category: 'manufacturing',
            description: 'Computer vision system for real-time defect detection on production lines, dramatically improving quality control.',
            results: ['85% Defect Reduction', '3x Inspection Speed', '99% Accuracy'],
            technologies: ['Computer Vision', 'AI', 'IoT', 'Edge Computing'],
            image: 'assets/images/case-studies/Defect Detection in Manufacturing.png', // ADD THIS
            gradient: 'from-primary-600/20 to-blue-600/20', // ADD THIS
            link: 'case-study-detail.html?id=defect'
        }
    ];
    
    let currentFilter = 'all';
    
    // Load case studies
    function loadCaseStudies(filter = 'all') {
        const grid = document.querySelector('[data-case-studies-grid]');
        if (!grid) return;
        
        const filteredStudies = filter === 'all' 
            ? allCaseStudies 
            : allCaseStudies.filter(study => study.category === filter);
        
        grid.innerHTML = filteredStudies.map(study => `
            <article class="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" 
                onclick="window.location.href='${study.link}'"
                data-category="${study.category}" style="position: relative;">
            <!-- Image or Gradient Background -->
            <div class="aspect-w-16 aspect-h-9 h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                ${study.image ? `
                    <img src="${study.image}" 
                        alt="${study.title}" 
                        class="absolute inset-0 w-full h-full object-cover"
                        onerror="this.style.display='none'">
                ` : ''}
            </div>
                
                <!-- Content -->
                <div class="p-6">
                    <!-- Category Badge -->
                    <span class="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-3">
                        ${study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                    </span>
                    
                    <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        ${study.title}
                    </h3>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        ${study.description}
                    </p>
                    
                    <!-- Key Result -->
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            ${study.results[0]}
                        </span>
                    </div>
                    
                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${study.technologies.slice(0, 3).map(tech => `
                            <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                                ${tech}
                            </span>
                        `).join('')}
                        ${study.technologies.length > 3 ? `
                            <span class="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                                +${study.technologies.length - 3} more
                            </span>
                        ` : ''}
                    </div>
                    
                    <!-- View Link -->
                    <div class="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:gap-2 gap-1 transition-all">
                        <span>View Case Study</span>
                        <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </article>
        `).join('');
        
        // Add animation
        setTimeout(() => {
            grid.querySelectorAll('article').forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            });
        }, 100);
    }
    
    // Setup filters - Update with actual categories
    function setupFilters() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        
        // Update filter buttons in HTML
        const filtersContainer = document.querySelector('[data-filters]');
        if (filtersContainer) {
            filtersContainer.innerHTML = `
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-primary-600 text-white" data-filter="all">
                    All Projects
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="healthcare">
                    Healthcare
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="manufacturing">
                    Manufacturing
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="finance">
                    Finance
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="retail">
                    Retail
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="logistics">
                    Logistics
                </button>
                <button class="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" data-filter="hr">
                    HR
                </button>
            `;
            
            // Re-attach event listeners
            const newFilterButtons = filtersContainer.querySelectorAll('[data-filter]');
            newFilterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.dataset.filter;
                    currentFilter = filter;
                    
                    // Update button states
                    newFilterButtons.forEach(btn => {
                        btn.classList.remove('bg-primary-600', 'text-white');
                        btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
                    });
                    
                    this.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
                    this.classList.add('bg-primary-600', 'text-white');
                    
                    // Reload case studies with filter
                    loadCaseStudies(filter);
                });
            });
        }
    }
    
    // Counter animation - Keep existing function
    function initCounters() {
        // Your existing counter code
    }
    
    // Initialize everything
    loadCaseStudies('all');
    setupFilters();
    initCounters();
    
    // Log for debugging
    console.log('Case Studies page loaded with all 8 studies');
});