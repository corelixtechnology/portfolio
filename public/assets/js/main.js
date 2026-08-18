/**
 * Main JavaScript for Keerthivasan V - Matias Dark Edition Portfolio
 * Full-Stack Developer & UI/UX Designer
 */

document.addEventListener('DOMContentLoaded', () => {

    /*=============== CUSTOM CURSOR FOLLOWER ===============*/
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline && window.innerWidth > 992) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 400, fill: 'forwards' });
        });

        // Hover scale on interactive elements
        const hoverElements = document.querySelectorAll('a, button, .work__card, .service-card, .resume-card, .skill-pill');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }

    /*=============== GSAP PRELOADER ANIMATION ===============*/
    const loader = document.getElementById('bg-loader');
    
    function hideLoader() {
        if (!loader) return;
        
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline({
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });

            tl.to('.loader-wrapper', {
                scale: 1.15,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                delay: 0.5
            })
            .to(loader, {
                yPercent: -100,
                duration: 0.8,
                ease: 'expo.inOut'
            }, '-=0.1');
        } else {
            setTimeout(() => {
                loader.style.transform = 'translateY(-100%)';
                setTimeout(() => { loader.style.display = 'none'; }, 800);
            }, 1000);
        }
    }

    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 2500); // Fallback

    /*=============== STICKY HEADER ===============*/
    const header = document.getElementById('header');

    function handleHeaderScroll() {
        if (header) {
            if (window.scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
    }
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    /*=============== MOBILE NAV DRAWER ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /*=============== TYPED.JS INITIALIZATION ===============*/
    const roleElement = document.querySelector('.role');
    if (roleElement && typeof Typed !== 'undefined') {
        new Typed('.role', {
            strings: [
                'Full-Stack Developer',
                'UI/UX Designer',
                'Frontend Specialist',
                'Software Engineer'
            ],
            typeSpeed: 55,
            backSpeed: 35,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    /*=============== MATIAS RESUME TABS ===============*/
    const tabBtns = document.querySelectorAll('.resume__tab-btn');
    const tabPanes = document.querySelectorAll('.resume__pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active-tab'));
            tabPanes.forEach(p => p.classList.remove('active-pane'));

            // Add active classes
            btn.classList.add('active-tab');
            const activePane = document.querySelector(target);
            if (activePane) {
                activePane.classList.add('active-pane');
            }
        });
    });

    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
    const workContainer = document.querySelector('.matias-projects-grid') || document.querySelector('.work__container');
    if (workContainer && typeof mixitup !== 'undefined') {
        mixitup(workContainer, {
            selectors: {
                target: '.matias-project-card, .work__card'
            },
            animation: {
                duration: 350,
                effects: 'fade scale(0.95)',
                easing: 'ease'
            }
        });
    }

    const filterBtns = document.querySelectorAll('.work__item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active-work'));
            btn.classList.add('active-work');
        });
    });

    /*=============== MATIAS TESTIMONIAL SWIPER ===============*/
    function initTestimonialSwiper() {
        const sliderEl = document.querySelector('.testimonial__slider');
        if (typeof Swiper !== 'undefined' && sliderEl) {
            new Swiper('.testimonial__slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                grabCursor: true,
                speed: 750,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: '.matias-t-pagination',
                    clickable: true,
                },
            });
        }
    }

    initTestimonialSwiper();

    /*=============== SCROLL ACTIVE LINK INDICATOR ===============*/
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            const mobileLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
            const desktopLink = document.querySelector(`.nav__menu-desktop a[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (mobileLink) mobileLink.classList.add('active-link');
                if (desktopLink) desktopLink.classList.add('active-link');
            } else {
                if (mobileLink) mobileLink.classList.remove('active-link');
                if (desktopLink) desktopLink.classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    /*=============== LIGHT / DARK THEME TOGGLE ===============*/
    const themeButton = document.getElementById('theme-button');
    const lightThemeClass = 'light-theme';
    const moonIcon = 'bx-moon';
    const sunIcon = 'bx-sun';

    const savedTheme = localStorage.getItem('matias-theme');
    const themeIcon = themeButton ? themeButton.querySelector('i') : null;

    if (savedTheme === 'light') {
        document.body.classList.add(lightThemeClass);
        if (themeIcon) {
            themeIcon.classList.remove(moonIcon);
            themeIcon.classList.add(sunIcon);
        }
    }

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(lightThemeClass);
            const isLight = document.body.classList.contains(lightThemeClass);

            if (themeIcon) {
                if (isLight) {
                    themeIcon.classList.remove(moonIcon);
                    themeIcon.classList.add(sunIcon);
                } else {
                    themeIcon.classList.remove(sunIcon);
                    themeIcon.classList.add(moonIcon);
                }
            }

            localStorage.setItem('matias-theme', isLight ? 'light' : 'dark');
        });
    }
});
