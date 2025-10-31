// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-highlight)');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set HOME as active by default
    navLinks[0].classList.add('active');

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[placeholder="Name"]').value;
            const email = this.querySelector('input[placeholder="Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea[placeholder="Message"]').value;
            
            if (name && email && subject && message) {
                alert(`Thank you ${name}! Your message has been sent.`);
                this.reset();
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Footer Interactive Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Horizontal Masonry Footer Animations
    const footerCards = document.querySelectorAll('.footer-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const delay = card.dataset.animationDelay || 0;
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.classList.add('animate-in');
                }, delay * 1000);
            }
        });
    }, observerOptions);

    footerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        footerObserver.observe(card);
    });

    // Enhanced Contact Method Interactions
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('click', function(e) {
            // Add ripple effect
            createRippleEffect(this, e);
            
            // Track interaction
            const contactType = this.querySelector('span').textContent.toLowerCase();
            console.log(`Contact method clicked: ${contactType}`);
            
            // Add temporary glow effect
            this.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 500);
        });

        // Enhanced hover effects
        method.addEventListener('mouseenter', function() {
            const pulseRing = this.querySelector('.pulse-ring');
            if (pulseRing) {
                pulseRing.style.animationDuration = '1s';
            }
        });

        method.addEventListener('mouseleave', function() {
            const pulseRing = this.querySelector('.pulse-ring');
            if (pulseRing) {
                pulseRing.style.animationDuration = '2s';
            }
        });
    });

    // Social Media Interactions with Platform-Specific Animations
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList[1] || 'unknown';
            
            // Platform-specific animation
            const icon = this.querySelector('.social-icon');
            const svg = this.querySelector('svg');
            
            switch(platform) {
                case 'linkedin':
                    animateLinkedIn(icon, svg);
                    break;
                case 'github':
                    animateGitHub(icon, svg);
                    break;
                case 'twitter':
                    animateTwitter(icon, svg);
                    break;
                case 'instagram':
                    animateInstagram(icon, svg);
                    break;
            }
            
            // Show notification
            showNotification(`Opening ${platform.charAt(0).toUpperCase() + platform.slice(1)} profile...`, 'info');
        });

        // Continuous subtle animations
        item.addEventListener('mouseenter', function() {
            const hoverGlow = this.querySelector('.hover-glow');
            if (hoverGlow) {
                hoverGlow.style.animation = 'pulseGlow 1s ease-in-out infinite';
            }
        });

        item.addEventListener('mouseleave', function() {
            const hoverGlow = this.querySelector('.hover-glow');
            if (hoverGlow) {
                hoverGlow.style.animation = '';
            }
        });
    });

    // Action Button Enhancements
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add loading animation
            const btnContent = this.querySelector('.btn-content');
            const svg = this.querySelector('svg');
            
            if (this.id === 'downloadResume') {
                e.preventDefault();
                animateDownload(this, btnContent, svg);
            } else {
                // Contact button animation
                animateContactButton(this, btnContent, svg);
            }
        });

        // Enhanced hover effects
        btn.addEventListener('mouseenter', function() {
            const btnGlow = this.querySelector('.btn-glow');
            if (btnGlow) {
                btnGlow.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)';
            }
        });
    });

    // Parallax Effect for Footer Background
    let ticking = false;
    function updateFooterParallax() {
        const footer = document.querySelector('.footer');
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            
            footer.style.backgroundPositionY = `${parallax}px`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateFooterParallax);
            ticking = true;
        }
    });

    // Floating Particles Animation Enhancement
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.addEventListener('animationiteration', function() {
            // Randomize position slightly on each iteration
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            this.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    });

    // Dynamic Card Height Adjustment (Masonry Effect)
    function adjustMasonryLayout() {
        const masonry = document.querySelector('.footer-masonry');
        const cards = masonry.querySelectorAll('.footer-card');
        
        if (window.innerWidth > 768) {
            let maxHeight = 0;
            cards.forEach(card => {
                const height = card.offsetHeight;
                if (height > maxHeight) maxHeight = height;
            });
            
            cards.forEach(card => {
                card.style.minHeight = `${maxHeight}px`;
            });
        } else {
            cards.forEach(card => {
                card.style.minHeight = 'auto';
            });
        }
    }

    // Call on load and resize
    adjustMasonryLayout();
    window.addEventListener('resize', adjustMasonryLayout);

    // Skills Progress Bar Animation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillsBox = entry.target;
                const progressBars = skillsBox.querySelectorAll('.skill-progress');

                progressBars.forEach((bar, index) => {
                    const level = bar.getAttribute('data-level');
                    const skillName = bar.closest('.skill-item').querySelector('.skill-name');

                    // Add percentage display to skill name
                    skillName.setAttribute('data-level', level + '%');

                    // Animate progress bar with delay for staggered effect
                    setTimeout(() => {
                        bar.style.width = level + '%';

                        // Add a subtle pulse effect when animation completes
                        setTimeout(() => {
                            bar.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.5)';
                            setTimeout(() => {
                                bar.style.boxShadow = 'none';
                            }, 600);
                        }, 1500);
                    }, index * 100);
                });

                // Unobserve after animation to prevent re-triggering
                skillsObserver.unobserve(skillsBox);
            }
        });
    }, observerOptions);

    // Observe the skills box
    const skillsBox = document.querySelector('.skills-box');
    if (skillsBox) {
        skillsObserver.observe(skillsBox);
    }

    // Add hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.skill-progress');
            progressBar.style.filter = 'brightness(1.2)';
            progressBar.style.transform = 'scaleY(1.2)';
        });

        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress');
            progressBar.style.filter = 'brightness(1)';
            progressBar.style.transform = 'scaleY(1)';
        });
    });
});

// Platform-specific Animation Functions
function animateLinkedIn(icon, svg) {
    icon.style.background = 'linear-gradient(135deg, rgba(0, 119, 181, 0.3), rgba(0, 119, 181, 0.1))';
    svg.style.transform = 'scale(1.2) rotate(10deg)';
    
    setTimeout(() => {
        icon.style.background = '';
        svg.style.transform = '';
    }, 300);
}

function animateGitHub(icon, svg) {
    icon.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))';
    svg.style.transform = 'scale(1.2) rotateY(180deg)';
    
    setTimeout(() => {
        icon.style.background = '';
        svg.style.transform = '';
    }, 300);
}

function animateTwitter(icon, svg) {
    icon.style.background = 'linear-gradient(135deg, rgba(29, 161, 242, 0.3), rgba(29, 161, 242, 0.1))';
    svg.style.transform = 'scale(1.2) translateX(5px)';
    
    setTimeout(() => {
        icon.style.background = '';
        svg.style.transform = '';
    }, 300);
}

function animateInstagram(icon, svg) {
    icon.style.background = 'linear-gradient(135deg, rgba(225, 48, 108, 0.3), rgba(225, 48, 108, 0.1))';
    svg.style.transform = 'scale(1.2) rotate(-10deg)';
    
    setTimeout(() => {
        icon.style.background = '';
        svg.style.transform = '';
    }, 300);
}

// Action Button Animations
function animateDownload(btn, content, svg) {
    const originalText = content.querySelector('span').textContent;
    
    // Loading state
    content.querySelector('span').textContent = 'Loading...';
    svg.style.animation = 'spin 1s linear infinite';
    btn.style.pointerEvents = 'none';
    
    setTimeout(() => {
        content.querySelector('span').textContent = 'Downloaded!';
        svg.style.animation = '';
        svg.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            content.querySelector('span').textContent = originalText;
            svg.style.transform = '';
            btn.style.pointerEvents = 'auto';
        }, 1500);
        
        showNotification('Resume download started!', 'success');
    }, 1000);
}

function animateContactButton(btn, content, svg) {
    svg.style.transform = 'scale(1.3) rotate(20deg)';
    btn.style.transform = 'translateY(-3px) scale(1.05)';
    
    setTimeout(() => {
        svg.style.transform = '';
        btn.style.transform = '';
    }, 200);
}

// Enhanced Ripple Effect
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: rippleAnimation 0.6s linear;
        left: ${x - 10}px;
        top: ${y - 10}px;
        width: 20px;
        height: 20px;
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Notification System Enhancement
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'rgba(46, 204, 113, 0.9)' : 'rgba(52, 152, 219, 0.9)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${bgColor};
        color: white;
        border-radius: 12px;
        font-weight: 500;
        font-size: 14px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform: translateX(100%) scale(0.8);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// CSS Animations Addition
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes pulseGlow {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
    }
    
    .footer-card.animate-in {
        animation: cardBounceIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    @keyframes cardBounceIn {
        0% { transform: translateY(30px) scale(0.9); opacity: 0; }
        60% { transform: translateY(-5px) scale(1.02); opacity: 0.8; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
    }
`;
document.head.appendChild(additionalStyles);

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});