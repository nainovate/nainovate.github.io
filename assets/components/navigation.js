// assets/components/navigation.js
const Navigation = {
    render: (currentPage = '') => {
        return `
            <!-- Navigation -->
            <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300" data-nav>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 md:h-20">
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center space-x-3 group">
                            <img src="assets/images/logo/logo-light.svg" alt="Nainovate" class="h-8 md:h-10 dark:hidden transition-transform group-hover:scale-105" data-logo>
                            <img src="assets/images/logo/logo-dark.svg" alt="Nainovate" class="h-8 md:h-10 hidden dark:block transition-transform group-hover:scale-105" data-logo>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="index.html" class="nav-link ${currentPage === 'home' ? 'text-primary-600 dark:text-primary-400' : ''}">Home</a>
                            <a href="digital-transformation.html" class="nav-link ${currentPage === 'digital-transformation' ? 'text-primary-600 dark:text-primary-400' : ''}">Digital Transformation</a>
                            
                            <!-- AI Solutions Dropdown -->
                            <div class="relative group">
                                <button class="nav-link flex items-center ${currentPage.includes('ai-') || currentPage === 'gen-ai' ? 'text-primary-600 dark:text-primary-400' : ''}">
                                    AI Solutions
                                    <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div class="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a href="ai-transformation.html" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-lg ${currentPage === 'ai-transformation' ? 'bg-gray-100 dark:bg-gray-800' : ''}">
                                        AI Transformation
                                    </a>
                                    <a href="gen-ai.html" class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-lg ${currentPage === 'gen-ai' ? 'bg-gray-100 dark:bg-gray-800' : ''}">
                                        Generative AI
                                    </a>
                                </div>
                            </div>
                            
                            <a href="case-studies.html" class="nav-link ${currentPage === 'case-studies' ? 'text-primary-600 dark:text-primary-400' : ''}">Case Studies</a>
                            <a href="clients.html" class="nav-link ${currentPage === 'clients' ? 'text-primary-600 dark:text-primary-400' : ''}">Clients</a>
                            <a href="contact.html" class="nav-link ${currentPage === 'contact' ? 'text-primary-600 dark:text-primary-400' : ''}">Contact</a>
                        </div>
                        
                        <!-- Right Actions -->
                        <div class="flex items-center space-x-4">
                            <!-- Theme Toggle -->
                            <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" data-theme-toggle>
                                <svg class="w-5 h-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <svg class="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </button>
                            
                            <!-- Mobile Menu Toggle -->
                            <button class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" data-mobile-toggle>
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transform -translate-y-full opacity-0 pointer-events-none transition-all duration-300" data-mobile-menu>
                    <div class="px-4 py-4 space-y-2">
                        <a href="index.html" class="mobile-nav-link ${currentPage === 'home' ? 'text-primary-600 dark:text-primary-400' : ''}">Home</a>
                        <a href="digital-transformation.html" class="mobile-nav-link ${currentPage === 'digital-transformation' ? 'text-primary-600 dark:text-primary-400' : ''}">Digital Transformation</a>
                        
                        <!-- AI Solutions Section -->
                        <div class="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                            <p class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">AI Solutions</p>
                            <a href="ai-transformation.html" class="mobile-nav-link text-sm ${currentPage === 'ai-transformation' ? 'text-primary-600 dark:text-primary-400' : ''}">AI Transformation</a>
                            <a href="gen-ai.html" class="mobile-nav-link text-sm ${currentPage === 'gen-ai' ? 'text-primary-600 dark:text-primary-400' : ''}">Generative AI</a>
                        </div>
                        
                        <a href="case-studies.html" class="mobile-nav-link ${currentPage === 'case-studies' ? 'text-primary-600 dark:text-primary-400' : ''}">Case Studies</a>
                        <a href="clients.html" class="mobile-nav-link ${currentPage === 'clients' ? 'text-primary-600 dark:text-primary-400' : ''}">Clients</a>
                        <a href="contact.html" class="mobile-nav-link ${currentPage === 'contact' ? 'text-primary-600 dark:text-primary-400' : ''}">Contact</a>
                    </div>
                </div>
            </nav>
        `;
    }
};