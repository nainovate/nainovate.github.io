// assets/js/components-loader.js
class ComponentsLoader {
    static initializeEventListeners() {
        // Re-initialize theme toggle
        const themeToggle = document.querySelector('[data-theme-toggle]');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                document.documentElement.classList.toggle('dark', newTheme === 'dark');
                localStorage.setItem('theme', newTheme);
            });
        }
        
        // Re-initialize mobile menu
        const mobileToggle = document.querySelector('[data-mobile-toggle]');
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            });
        }
    }
}