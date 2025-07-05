// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeSmoothScrolling();
    initializeAnimations();
    initializeContactForm();
    initializeNavbar();
});



function getIconForSection(index) {
    const icons = ['mosque', 'graduation-cap', 'hands-helping', 'envelope'];
    return icons[index] || 'info-circle';
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar Functionality
function initializeNavbar() {
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.track-card, .service-card, .about-content, .contact-form-container').forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .track-card, .service-card, .about-content, .contact-form-container {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Contact Form Handling with EmailJS
function initializeContactForm() {
    // Initialize EmailJS
    emailjs.init("XTKh8BS4L8VpcL_Ri"); // Replace with your actual EmailJS public key
    
    const form = document.querySelector('.beautiful-contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!fullName || !email || !message) {
                showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
                return;
            }
            
            // Phone validation (optional but if provided, should be valid)
            if (phone) {
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
                if (!phoneRegex.test(phone)) {
                    showNotification('يرجى إدخال رقم هاتف صحيح', 'error');
                    return;
                }
            }
            
            // Add loading state to submit button
            const submitBtn = form.querySelector('.beautiful-submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>جاري الإرسال...';
            submitBtn.disabled = true;
            
            // Show sending notification
            showNotification('جاري إرسال الرسالة...', 'info');
            
            // Prepare template parameters for EmailJS
            const templateParams = {
                from_name: fullName,
                from_email: email,
                from_phone: phone || 'غير محدد',
                message: message,
                to_name: 'أكاديمية دُرر القرآن'
            };
            
            // Send email using EmailJS
            emailjs.send('service_130giw7', 'template_5ie1nej', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
                    form.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showNotification('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.', 'error');
                })
                .finally(function() {
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Add hover effects for social contact links
    const socialLinks = document.querySelectorAll('.social-contact-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            animation: slideIn 0.3s ease;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            color: white;
        }
        
        .notification-success {
            background: linear-gradient(45deg, #4CAF50, #66BB6A);
        }
        
        .notification-error {
            background: linear-gradient(45deg, #F44336, #E53935);
        }
        
        .notification-info {
            background: linear-gradient(45deg, #2196F3, #42A5F5);
        }
        
        .notification i {
            margin-left: 10px;
            font-size: 1.2rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-right: 10px;
            padding: 5px;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Quran Page Flip Animation Enhancement
function enhanceQuranAnimation() {
    const quranBook = document.querySelector('.quran-book');
    if (quranBook) {
        quranBook.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        quranBook.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
}

// Initialize Quran animation enhancement
document.addEventListener('DOMContentLoaded', enhanceQuranAnimation);

// Add loading animation for images
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.islamic-pattern-bg');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add hover effects for social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}); 

// Animated Counters
function animateCounters() {
const counters = document.querySelectorAll('.counter-number');
const speed = 40;
counters.forEach(counter => {
    const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/\D/g, '');
    const inc = Math.ceil(target / speed);
    if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 30);
    } else {
        counter.innerText = target;
    }
    };
    updateCount();
});
}
// Trigger animation when counters section is in view
function handleCounterScroll() {
const section = document.querySelector('.counters-section');
if (!section) return;
let started = false;
window.addEventListener('scroll', function onScroll() {
    if (!started && section.getBoundingClientRect().top < window.innerHeight - 100) {
    animateCounters();
    started = true;
    window.removeEventListener('scroll', onScroll);
    }
});
}
document.addEventListener('DOMContentLoaded', handleCounterScroll); 

// FAQ Accordion Functionality
function initFAQAccordion() {
const questions = document.querySelectorAll('.faq-question');
questions.forEach(btn => {
    btn.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    questions.forEach(q => q.setAttribute('aria-expanded', 'false'));
    if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
    }
    });
    btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
    });
});
}
document.addEventListener('DOMContentLoaded', initFAQAccordion); 

// Back to Top Button
function initBackToTop() {
const btn = document.querySelector('.back-to-top');
if (!btn) return;
btn.style.display = 'none';
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    btn.style.display = 'flex';
    } else {
    btn.style.display = 'none';
    }
});
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.blur();
});
btn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn.blur();
    }
});
}
document.addEventListener('DOMContentLoaded', initBackToTop); 

