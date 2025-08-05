// assets/components/whatsapp-float.js
const WhatsAppFloat = {
    render: (config = {}) => {
        // Default configuration
        const defaults = {
            phoneNumber: '9886772888',
            message: "Hi Nainovate! I'm interested in your AI solutions.",
            position: 'bottom-right', // Can be customized later
            showBadge: true
        };
        
        // Merge with provided config
        const settings = { ...defaults, ...config };
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(settings.message);
        
        return `
            <!-- WhatsApp Floating Button -->
            <a href="https://wa.me/${settings.phoneNumber}?text=${encodedMessage}" 
               target="_blank" 
               class="whatsapp-float"
               aria-label="Chat on WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 1.172c-5.963 0-10.813 4.85-10.813 10.813 0 1.897.494 3.681 1.356 5.231l-1.406 5.131 5.25-1.378c1.5.819 3.213 1.284 5.031 1.284 5.963 0 10.813-4.85 10.813-10.813s-4.85-10.813-10.813-10.813zm5.419 15.394c-.225.634-1.322 1.228-1.828 1.275-.481.047-.931.219-3.131-.65-2.644-1.044-4.313-3.753-4.444-3.928-.128-.172-1.059-1.409-1.059-2.688s.672-1.909.909-2.169c.238-.259.519-.325.694-.325.169 0 .341.003.488.009.156.006.366-.059.572.437.206.5.703 1.719.766 1.844.063.125.103.272.022.434-.081.163-.122.263-.241.406-.119.144-.25.319-.356.428-.119.119-.241.247-.103.484.138.238.613 1.009 1.313 1.634.903.806 1.666 1.056 1.903 1.175.238.119.375.1.513-.063.138-.162.591-.688.747-.925.156-.238.313-.2.525-.119.213.081 1.353.638 1.584.753.231.116.384.175.441.269.056.094.056.541-.169 1.175z"/>
                </svg>
                ${settings.showBadge ? '<span class="whatsapp-badge"></span>' : ''}
            </a>
            
            <style>
                .whatsapp-float {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #25d366;
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .whatsapp-float:hover {
                    background-color: #128c7e;
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                }
                
                .whatsapp-float svg {
                    width: 32px;
                    height: 32px;
                }
                
                .whatsapp-badge {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    width: 10px;
                    height: 10px;
                    background-color: #ff0000;
                    border-radius: 50%;
                    animation: pulse 1.5s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @media (max-width: 768px) {
                    .whatsapp-float {
                        width: 50px;
                        height: 50px;
                        bottom: 15px;
                        right: 15px;
                    }
                    
                    .whatsapp-float svg {
                        width: 28px;
                        height: 28px;
                    }
                }
            </style>
        `;
    }
};