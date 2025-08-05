// ===== Contact Page Specific JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Form handling
    function initContactForm() {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
        
        console.log('Form found:', form);

        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Validate form
                if (!validateForm(data)) {
                    return;
                }
                
                // Simulate form submission
                // In real implementation, this would send data to a server
                console.log('Form submitted:', data);
                
                // Show loading state
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                // Submit to Google Sheets
                submitToGoogleSheets(data)
                    .then(result => {
                        // Reset form
                        form.reset();
                        
                        // Show success message
                        successMessage.classList.remove('hidden');
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        
                        // Reset button
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.classList.add('hidden');
                        }, 5000);
                    })
                    .catch(error => {
                        // Handle error
                        alert('Sorry, there was an error submitting your form. Please try again or email us directly at info@nainovate.com');
                        
                        // Reset button
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    });
            });
        }
    }
    
    // Google Sheets form submission
    function submitToGoogleSheets(formData) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyTgOejeOynL_Z_aNVd3gEl81IoKs2xifb8F16VTER6KBJ6u2vYMKacaUboqzf3o043/exec';
        // Create URL-encoded form data (not FormData)
        const params = new URLSearchParams();
        
        // Add sheet name
        params.append('formGoogleSheetName', 'Sheet1'); // CHANGE THIS to your sheet tab name
        
        // Map your form fields - MUST match Google Sheet headers exactly
        params.append('First Name', formData['first-name']);
        params.append('Last Name', formData['last-name']);
        params.append('Email', formData.email);
        params.append('Company', formData.company || 'Not provided');
        params.append('Service', formData.service || 'Not specified');
        params.append('Message', formData.message);
        params.append('Privacy Accepted', formData.privacy ? 'Yes' : 'No');
        
        // Send to Google Apps Script
        return fetch(scriptURL, {
            method: 'POST',
            body: params
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
    }

    // Form validation
    function validateForm(data) {
        const errors = [];
        
        // Check required fields
        if (!data['first-name'] || data['first-name'].trim() === '') {
            errors.push('First name is required');
        }
        
        if (!data['last-name'] || data['last-name'].trim() === '') {
            errors.push('Last name is required');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Valid email is required');
        }
        
        if (!data.message || data.message.trim() === '') {
            errors.push('Message is required');
        }
        
        if (!data.privacy) {
            errors.push('Please accept the privacy policy');
        }
        
        // Show errors if any
        if (errors.length > 0) {
            alert('Please fix the following errors:\n\n' + errors.join('\n'));
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // FAQ functionality
    function initFAQ() {
        const faqToggles = document.querySelectorAll('[data-faq-toggle]');
        
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('svg');
                
                // Toggle content
                content.classList.toggle('hidden');
                
                // Rotate icon
                icon.classList.toggle('rotate-180');
                
                // Close other FAQs
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherContent = otherToggle.nextElementSibling;
                        const otherIcon = otherToggle.querySelector('svg');
                        otherContent.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });
            });
        });
    }
    
    // Add input animations
    function initInputAnimations() {
        const inputs = document.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Add focus effect
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('input-focused');
                
                // Add filled class if has value
                if (this.value.trim() !== '') {
                    this.classList.add('filled');
                } else {
                    this.classList.remove('filled');
                }
            });
        });
    }
    
    // Animate contact options on scroll
    function initContactOptionsAnimation() {
        const options = document.querySelectorAll('.text-center');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        options.forEach(option => {
            option.style.opacity = '0';
            option.style.transform = 'translateY(20px)';
            option.style.transition = 'all 0.6s ease-out';
            observer.observe(option);
        });
    }
    
    // Character count for message textarea
    function initCharacterCount() {
        const messageTextarea = document.getElementById('message');
        
        if (messageTextarea) {
            const maxLength = 500;
            
            // Create character count element
            const countElement = document.createElement('div');
            countElement.className = 'text-sm text-gray-500 dark:text-gray-400 mt-1 text-right';
            countElement.textContent = `0 / ${maxLength}`;
            
            messageTextarea.parentElement.appendChild(countElement);
            
            // Update count on input
            messageTextarea.addEventListener('input', function() {
                const length = this.value.length;
                countElement.textContent = `${length} / ${maxLength}`;
                
                if (length > maxLength * 0.9) {
                    countElement.classList.add('text-red-500');
                } else {
                    countElement.classList.remove('text-red-500');
                }
            });
            
            // Set max length
            messageTextarea.setAttribute('maxlength', maxLength);
        }
    }
    
    // Floating label effect
    function initFloatingLabels() {
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            const label = group.querySelector('label');
            
            if (input && label) {
                // Check if input has value on load
                if (input.value.trim() !== '') {
                    label.classList.add('floating');
                }
                
                // Add focus/blur events
                input.addEventListener('focus', () => {
                    label.classList.add('floating');
                });
                
                input.addEventListener('blur', () => {
                    if (input.value.trim() === '') {
                        label.classList.remove('floating');
                    }
                });
            }
        });
    }
    
    // Add hover effect to contact cards
    function initContactCardHover() {
        const cards = document.querySelectorAll('.text-center');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.rounded-2xl');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.rounded-2xl');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
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
    
    // Add ripple effect to submit button
    function initRippleEffect() {
        const button = document.querySelector('button[type="submit"]');
        
        if (button) {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }
    }
    
    // Initialize everything
    initContactForm();
    initFAQ();
    initInputAnimations();
    initContactOptionsAnimation();
    initCharacterCount();
    initContactCardHover();
    initScrollAnimations();
    initRippleEffect();
    
    // Add ripple effect styles
    const style = document.createElement('style');
    style.textContent = `
        button[type="submit"] {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .input-focused {
            transform: scale(1.02);
            transition: transform 0.2s ease;
        }
        
        .rounded-2xl {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Log for debugging
    console.log('Contact page loaded successfully');
});