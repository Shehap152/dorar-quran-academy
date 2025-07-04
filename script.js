// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeSmoothScrolling();
    initializeAnimations();
    initializeContactForm();
    initializeNavbar();
    initializeLanguageSwitching();
    initializeIslamicContent();
});

// Language Switching Functionality
function initializeLanguageSwitching() {
    // Store current language
    let currentLanguage = 'ar';
    
    // Language content object
    const translations = {
        ar: {
            home: 'الرئيسية',
            about: 'عن الأكاديمية',
            tracks: 'المسارات',
            services: 'الخدمات',
            contact: 'اتصل بنا',
            mainTitle: 'أكاديمية دُرر القرآن',
            englishSubtitle: 'Dorar Al-Quran Academy',
            heroDescription: 'نرحب بكم في أكاديمية دُرر القرآن، حيث نقدم تعليماً متميزاً لحفظ وتجويد القرآن الكريم تحت إشراف معلمين متخصصين ومؤهلين.',
            startJourney: 'ابدأ رحلتك',
            learnMore: 'تعرف علينا',
            aboutTitle: 'عن أكاديمية دُرر القرآن',
            vision: 'رؤيتنا',
            mission: 'مهمتنا',
            visionText: 'نسعى لتقديم تعليم متميز للقرآن الكريم، وإعداد جيل من الحفاظ والمجودين الذين يحملون رسالة الإسلام بصدق وإخلاص.',
            missionText: 'توفير بيئة تعليمية إسلامية آمنة ومحفزة، حيث يتعلم الطلاب حفظ القرآن الكريم مع تطبيق قواعد التجويد والترتيل الصحيحة.',
            specializedTeachers: 'معلمون متخصصون',
            approvedCurriculum: 'مناهج معتمدة',
            islamicEnvironment: 'بيئة إسلامية',
            tracksTitle: 'مسارات التعلم',
            servicesTitle: 'خدماتنا',
            contactTitle: 'اتصل بنا',
            fullName: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف',
            message: 'رسالتك',
            sendMessage: 'إرسال الرسالة',
            contactVia: 'تواصل معنا عبر',
            whatsapp: 'واتساب',
            telegram: 'تليجرام',
            emailContact: 'البريد الإلكتروني',
            quickLinks: 'روابط سريعة',
            contactInfo: 'معلومات الاتصال',
            saudiArabia: 'المملكة العربية السعودية',
            allRightsReserved: 'جميع الحقوق محفوظة © 2024 أكاديمية دُرر القرآن'
        },
        en: {
            home: 'Home',
            about: 'About',
            tracks: 'Tracks',
            services: 'Services',
            contact: 'Contact',
            mainTitle: 'Dorar Al-Quran Academy',
            englishSubtitle: 'أكاديمية دُرر القرآن',
            heroDescription: 'Welcome to Dorar Al-Quran Academy, where we provide exceptional education in memorizing and reciting the Holy Quran under the supervision of specialized and qualified teachers.',
            startJourney: 'Start Your Journey',
            learnMore: 'Learn More',
            aboutTitle: 'About Dorar Al-Quran Academy',
            vision: 'Our Vision',
            mission: 'Our Mission',
            visionText: 'We strive to provide exceptional education in the Holy Quran, preparing a generation of memorizers and reciters who carry the message of Islam with sincerity and dedication.',
            missionText: 'Providing a safe and motivating Islamic educational environment where students learn to memorize the Holy Quran while applying correct Tajweed and Tilawah rules.',
            specializedTeachers: 'Specialized Teachers',
            approvedCurriculum: 'Approved Curriculum',
            islamicEnvironment: 'Islamic Environment',
            tracksTitle: 'Learning Tracks',
            servicesTitle: 'Our Services',
            contactTitle: 'Contact Us',
            fullName: 'Full Name',
            email: 'Email Address',
            phone: 'Phone Number',
            message: 'Your Message',
            sendMessage: 'Send Message',
            contactVia: 'Contact us via',
            whatsapp: 'WhatsApp',
            telegram: 'Telegram',
            emailContact: 'Email',
            quickLinks: 'Quick Links',
            contactInfo: 'Contact Information',
            saudiArabia: 'Saudi Arabia',
            allRightsReserved: 'All Rights Reserved © 2024 Dorar Al-Quran Academy'
        }
    };
    
    window.switchLanguage = function(lang) {
        currentLanguage = lang;
        const content = translations[lang];
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            const keys = ['home', 'about', 'tracks', 'services', 'contact'];
            if (keys[index]) {
                link.textContent = content[keys[index]];
            }
        });
        
        // Update main title
        const mainTitle = document.querySelector('.main-title .arabic-title');
        const englishSubtitle = document.querySelector('.main-title .english-subtitle');
        if (lang === 'en') {
            mainTitle.textContent = content.mainTitle;
            englishSubtitle.textContent = content.englishSubtitle;
        } else {
            mainTitle.textContent = content.mainTitle;
            englishSubtitle.textContent = content.englishSubtitle;
        }
        
        // Update hero description
        document.querySelector('.hero-description').textContent = content.heroDescription;
        
        // Update buttons
        const buttons = document.querySelectorAll('.hero-buttons .btn');
        buttons[0].innerHTML = `<i class="fas fa-book-open me-2"></i>${content.startJourney}`;
        buttons[1].innerHTML = `<i class="fas fa-info-circle me-2"></i>${content.learnMore}`;
        
        // Update section titles
        document.querySelectorAll('.section-title').forEach((title, index) => {
            const keys = ['aboutTitle', 'tracksTitle', 'servicesTitle', 'contactTitle'];
            if (keys[index]) {
                title.innerHTML = `<i class="fas fa-${getIconForSection(index)} me-3"></i>${content[keys[index]]}`;
            }
        });
        
        // Update form placeholders
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        formInputs[0].placeholder = content.fullName;
        formInputs[1].placeholder = content.email;
        formInputs[2].placeholder = content.phone;
        formInputs[3].placeholder = content.message;
        
        // Update form button
        document.querySelector('.contact-form button').innerHTML = `<i class="fas fa-paper-plane me-2"></i>${content.sendMessage}`;
        
        // Update social links
        const socialLinks = document.querySelectorAll('.social-link span');
        socialLinks[0].textContent = content.whatsapp;
        socialLinks[1].textContent = content.telegram;
        socialLinks[2].textContent = content.emailContact;
        
        // Update footer
        document.querySelector('.footer-title').textContent = content.quickLinks;
        document.querySelector('.footer-copyright').textContent = content.allRightsReserved;
        
        // Update page direction
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    };
}

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

// Contact Form Handling
function initializeContactForm() {
    const form = document.querySelector('.beautiful-contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
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
            
            // Simulate form submission
            showNotification('جاري إرسال الرسالة...', 'info');
            
            // Add loading state to submit button
            const submitBtn = form.querySelector('.beautiful-submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>جاري الإرسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
                form.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
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

// // Islamic Content Functionality
// function initializeIslamicContent() {
//     loadIslamicContent();
// }

// async function loadIslamicContent() {
//     try {
//         // Load content from JSON file
//         const response = await fetch('content.json');
//         if (!response.ok) {
//             throw new Error('Failed to load content');
//         }
        
//         const contentData = await response.json();
        
//         // Filter and get at least 8 unique items
//         const randomItems = getRandomUniqueItems(contentData, 8, 8);
        
//         // Display the content as a slider
//         displayIslamicContentSlider(randomItems);
        
//     } catch (error) {
//         console.error('Error loading Islamic content:', error);
//         showNotification('حدث خطأ في تحميل المحتوى الإسلامي', 'error');
//     }
// }

// function getRandomUniqueItems(contentArray, minCount = 8, maxCount = 8) {
//     // Remove duplicates and similar content
//     const uniqueContent = removeDuplicates(contentArray);
//     // If not enough, just return as many as possible
//     const count = Math.min(Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount, uniqueContent.length);
//     // Shuffle and get random items
//     const shuffled = shuffleArray([...uniqueContent]);
//     return shuffled.slice(0, count);
// }

// function removeDuplicates(contentArray) {
//     const seen = new Set();
//     const unique = [];
    
//     for (const item of contentArray) {
//         // Create a key based on content and type
//         const key = `${item.type}-${item.content}`;
        
//         if (!seen.has(key)) {
//             seen.add(key);
//             unique.push(item);
//         }
//     }
    
//     return unique;
// }

// function shuffleArray(array) {
//     const shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
// }

// function displayIslamicContentSlider(items) {
//     const grid = document.getElementById('islamicContentGrid');
//     if (!grid) return;
//     grid.innerHTML = '';

//     // Slider wrapper
//     const sliderWrapper = document.createElement('div');
//     sliderWrapper.className = 'islamic-slider-wrapper';

//     // Slides container
//     const slidesContainer = document.createElement('div');
//     slidesContainer.className = 'islamic-slider-slides';

//     // Create slides
//     items.forEach((item, index) => {
//         const card = createContentCard(item, index);
//         card.classList.add('islamic-slider-slide');
//         if (index >= 3) card.style.display = 'none'; // Only show first 3
//         slidesContainer.appendChild(card);
//     });

//     // Navigation controls
//     const prevBtn = document.createElement('button');
//     prevBtn.className = 'islamic-slider-nav prev';
//     prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
//     prevBtn.setAttribute('aria-label', 'السابق');

//     const nextBtn = document.createElement('button');
//     nextBtn.className = 'islamic-slider-nav next';
//     nextBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
//     nextBtn.setAttribute('aria-label', 'التالي');

//     sliderWrapper.appendChild(prevBtn);
//     sliderWrapper.appendChild(slidesContainer);
//     sliderWrapper.appendChild(nextBtn);
//     grid.appendChild(sliderWrapper);

//     // Slider logic
//     let currentStart = 0;
//     const visibleCount = 3;
//     const total = items.length;

//     function updateSlider() {
//         const slides = slidesContainer.querySelectorAll('.islamic-slider-slide');
//         slides.forEach((slide, idx) => {
//             if (idx >= currentStart && idx < currentStart + visibleCount) {
//                 slide.style.display = '';
//             } else {
//                 slide.style.display = 'none';
//             }
//         });
//         prevBtn.disabled = currentStart === 0;
//         nextBtn.disabled = currentStart + visibleCount >= total;
//     }

//     prevBtn.addEventListener('click', () => {
//         if (currentStart > 0) {
//             currentStart--;
//             updateSlider();
//         }
//     });
//     nextBtn.addEventListener('click', () => {
//         if (currentStart + visibleCount < total) {
//             currentStart++;
//             updateSlider();
//         }
//     });
//     updateSlider();
// }

// function createContentCard(item, index) {
//     const card = document.createElement('div');
//     card.className = 'islamic-content-card';
    
//     const icon = getIconForContentType(item.type);
//     const textClass = getTextClassForType(item.type);
    
//     card.innerHTML = `
//         <div class="islamic-content-header">
//             <div class="islamic-content-icon">
//                 <i class="fas ${icon}"></i>
//             </div>
//             <h3 class="islamic-content-type">${item.type}</h3>
//         </div>
//         <p class="islamic-content-text ${textClass}">${item.content}</p>
//     `;
    
//     return card;
// }

// function getIconForContentType(type) {
//     const iconMap = {
//         'آية': 'fa-book-open',
//         'حديث': 'fa-scroll',
//         'حكمة': 'fa-lightbulb',
//         'حكم شرعي': 'fa-balance-scale',
//         'ذكر': 'fa-pray',
//         'دعاء': 'fa-hands-praying'
//     };
    
//     return iconMap[type] || 'fa-star';
// }

// function getTextClassForType(type) {
//     const classMap = {
//         'آية': 'ayah',
//         'حديث': 'hadith',
//         'حكمة': 'wisdom',
//         'حكم شرعي': 'ruling',
//         'ذكر': 'dhikr',
//         'دعاء': 'dua'
//     };
    
//     return classMap[type] || 'wisdom';
// }