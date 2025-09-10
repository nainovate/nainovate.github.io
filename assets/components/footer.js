// assets/components/footer.js
const Footer = {
    render: () => {
        return `
            <!-- Footer -->
            <footer class="bg-white dark:bg-black text-black dark:text-white py-12 md:py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
                        <!-- Logo + About -->
                        <div class="md:col-span-2">
                            <img src="assets/images/logo/logo-light.svg" alt="Nainovate" class="h-10 mb-4 block dark:hidden">
                            <img src="assets/images/logo/logo-dark.svg" alt="Nainovate" class="h-10 mb-4 hidden dark:block">
                            <p class="text-black-400 mb-4">
                                Pioneering excellence in digital and AI transformation. Empowering businesses with cutting-edge Generative AI solutions.
                            </p>
                            <div class="flex space-x-4">
                                <a href="https://www.linkedin.com/company/nainovate-technologies/" class="text-black-400 hover:text transition-colors">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2 text-black-400">
                                <li><a href="digital-transformation.html" class="hover:text transition-colors">Digital Transformation</a></li>
                                <li><a href="ai-transformation.html" class="hover:text transition-colors">AI Transformation</a></li>
                                <li><a href="case-studies.html" class="hover:text transition-colors">Case Studies</a></li>
                                <li><a href="clients.html" class="hover:text transition-colors">Clients</a></li>
                            </ul>
                        </div>

                        <!-- Contact + QR -->
                        <div class="md:col-span-2 flex flex-col md:flex-row gap-12">
                            <!-- Contact (top aligned) -->
                            <div>
                                <h3 class="font-semibold mb-4">Contact</h3>
                                <ul class="space-y-2 text-black-400">
                                    <li>Hyderabad, India</li>
                                    <li><a href="mailto:info@nainovate.com" class="hover:text transition-colors">info@nainovate.com</a></li>
                                    <li><a href="tel:+91 9886772888" class="hover:text transition-colors">+91 9886772888</a></li>
                                </ul>
                            </div>

                            <!-- Divider -->
                            <div class="hidden md:block w-px bg-gray-300 dark:bg-gray-700"></div>

                            <!-- QR Code (only QR is vertically centered) -->
                            <div class="self-center">
                                <img src="assets/images/QR Code.png" alt="Nainovate QR Code" class="w-24 h-24 object-contain rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
                            </div>
                        </div>
                    </div>

                    <!-- Bottom -->
                    <div class="border-t border-black-800 mt-8 pt-8 text-center text-black-400">
                        <p>© 2025 Nainovate. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
};
