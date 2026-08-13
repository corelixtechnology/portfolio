/**
 * Main JavaScript for Keerthivasan V - Personal Portfolio
 * Full-Stack Developer & UI/UX Designer
 */

document.addEventListener('DOMContentLoaded', () => {
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
                delay: 0.6
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

    // Trigger loader removal
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 2000); // Fallback

    /*=============== SCROLL PROGRESS BAR ===============*/
    const scrollProgressBar = document.getElementById('scroll-progress');
    
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        if (scrollProgressBar) {
            scrollProgressBar.style.width = progress + '%';
        }
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    /*=============== STICKY HEADER & SCROLLUP ===============*/
    const header = document.getElementById('header');
    const scrollUp = document.getElementById('scroll-up');

    function handleScrollEffects() {
        const scrollY = window.pageYOffset;

        // Sticky Header
        if (header) {
            if (scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }

        // Show/Hide Scroll-Up Button
        if (scrollUp) {
            if (scrollY >= 350) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        }
    }
    window.addEventListener('scroll', handleScrollEffects, { passive: true });

    /*=============== 3D TILT ENGINE FOR CARDS & AVATAR ===============*/
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        let bounds;

        function updateBounds() {
            bounds = el.getBoundingClientRect();
        }

        function handleMouseMove(e) {
            if (!bounds) updateBounds();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };

            const maxTilt = el.id === 'hero-3d-stage' ? 14 : 9;
            const rotateX = (-center.y / (bounds.height / 2)) * maxTilt;
            const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }

        function handleMouseLeave() {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }

        el.addEventListener('mouseenter', updateBounds);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
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
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1800,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    /*=============== QUALIFICATION TABS ===============*/
    const tabs = document.querySelectorAll('.qualification__button');
    const tabContents = document.querySelectorAll('.qualification__content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(content => {
                content.classList.remove('qualification__active');
            });
            if (target) {
                target.classList.add('qualification__active');
            }

            tabs.forEach(t => {
                t.classList.remove('qualification__active');
            });
            tab.classList.add('qualification__active');
        });
    });

    /*=============== SERVICES MODALS ===============*/
    const modalViews = document.querySelectorAll('.services__modal');
    const modalBtns = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');

    modalBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (modalViews[index]) {
                modalViews[index].classList.add('active-modal');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            modalViews.forEach(modal => {
                modal.classList.remove('active-modal');
            });
            document.body.style.overflow = '';
        });
    });

    // Close modal on backdrop click
    modalViews.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active-modal');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalViews.forEach(modal => {
                modal.classList.remove('active-modal');
            });
            document.body.style.overflow = '';
        }
    });

    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
    const workContainer = document.querySelector('.work__container');
    if (workContainer && typeof mixitup !== 'undefined') {
        mixitup(workContainer, {
            selectors: {
                target: '.work__card'
            },
            animation: {
                duration: 350,
                effects: 'fade scale(0.95)',
                easing: 'ease'
            }
        });
    }

    // Active filter button state
    const filterBtns = document.querySelectorAll('.work__item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active-work'));
            btn.classList.add('active-work');
        });
    });

    /*=============== SWIPER TESTIMONIAL ===============*/
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial__container', {
            spaceBetween: 24,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                }
            }
        });
    }

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

    const savedTheme = localStorage.getItem('keerthi-theme');
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

            localStorage.setItem('keerthi-theme', isLight ? 'light' : 'dark');
        });
    }

    /*=============== SCROLLREVEAL ANIMATIONS (FORWARD & BACKWARD) ===============*/
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '35px',
            duration: 800,
            delay: 100,
            reset: true, // Animates on both forward (down) and backward (up) scrolling
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });

        // Section Headers
        sr.reveal('.section__header', { origin: 'top', distance: '30px' });

        // Home Section
        sr.reveal('.home__badge, .home__tagline, .home__name, .home__role-wrapper', { interval: 80 });
        sr.reveal('.home__description', { delay: 150 });
        sr.reveal('.home__buttons', { delay: 200 });
        sr.reveal('.home__social', { delay: 250 });
        sr.reveal('.home__metrics', { delay: 300 });
        sr.reveal('.home__visual', { origin: 'top', delay: 150 });

        // About Section
        sr.reveal('.about__visual', { origin: 'left', distance: '45px' });
        sr.reveal('.about__data', { origin: 'right', distance: '45px' });

        // Skills Section
        sr.reveal('.skills__card', { interval: 100, distance: '35px' });

        // Qualification / Journey
        sr.reveal('.qualification__tabs', { origin: 'top', distance: '25px' });
        sr.reveal('.timeline__item', { interval: 90, distance: '30px' });

        // Services Section
        sr.reveal('.services__card', { interval: 100, distance: '35px' });

        // Work / Projects Section
        sr.reveal('.work__filters', { origin: 'top', distance: '25px' });
        sr.reveal('.work__card', { interval: 90, distance: '35px' });

        // Testimonials Section
        sr.reveal('.testimonial__container', { distance: '35px' });

        // Contact Section
        sr.reveal('.contact__content:first-child', { origin: 'left', distance: '45px' });
        sr.reveal('.contact__content:last-child', { origin: 'right', distance: '45px' });
        sr.reveal('.contact__card', { interval: 90, distance: '30px' });

        // Footer Section
        sr.reveal('.footer__container', { origin: 'bottom', distance: '30px' });
    }
});
