import React from 'react';

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    // 1. React.js (Official Atom)
    case 'react':
    case 'react js':
    case 'react.js':
    case 'reactjs':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    // 2. JavaScript (Official Yellow Badge)
    case 'javascript':
    case 'javascript (es6+)':
    case 'js':
      return (
        <svg viewBox="0 0 630 630" width={size} height={size} className={className}>
          <rect width="630" height="630" rx="120" fill="#F7DF1E" />
          <path d="M423.2 492.2c12.7 20.7 29.1 35.6 58.7 35.6 24.5 0 40.2-12.3 40.2-29.3 0-20.3-16.1-27.4-43.1-39l-14.8-6.3c-42.7-18.2-71.1-41-71.1-89.2 0-44.2 34.3-77.8 87.2-77.8 38 0 65.4 13.5 83.9 46.1l-36.8 23.6c-9.7-17.3-22.8-24.9-47.1-24.9-21.9 0-35.6 11.8-35.6 27 0 18.6 11 25.7 36.3 36.7l14.8 6.3c51.9 22.4 79.7 44.7 79.7 93.3 0 53.2-41.8 82.3-95 82.3-53.6 0-87.8-25.7-103.8-57.8l36.6-26.9zm-209.6 4.6c9.7 17.3 18.6 31.6 39.7 31.6 20.3 0 33.3-8 33.3-39.2v-197h48.1v197.5c0 55.3-32.5 80.2-78.9 80.2-35 0-61.6-18.6-74.7-47.7l32.5-25.4z" fill="#000000" />
        </svg>
      );

    // 3. TypeScript (Official Blue Badge)
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="24" fill="#3178C6" />
          <path d="M57.6 49.3H40.2V100H29.8V49.3H12.4V40.7h45.2v8.6zm26.9 20.6c-5.7-2.3-9.5-4.7-9.5-8.8 0-4.3 3.6-7.1 9.4-7.1 5 0 8.7 1.9 11.3 5.4l6.8-5.7c-4.4-5.4-10.4-8.2-18.1-8.2-11.8 0-19.5 6.7-19.5 16.4 0 9.8 7.3 14.7 16.6 18.4 6.7 2.7 9.8 5.3 9.8 9.3 0 4.6-4.2 7.7-10.5 7.7-6.5 0-11-2.9-13.4-7.8l-7.3 5.8c4.4 7.2 11.9 10.9 20.7 10.9 12.8 0 20.7-7.2 20.7-17.1 0-10.2-7.1-15.5-17-19.2z" fill="#FFFFFF" />
        </svg>
      );

    // 4. Node.js (Official Hexagon & Lettermark)
    case 'node':
    case 'node.js':
    case 'nodejs':
      return (
        <svg viewBox="0 0 256 289" width={size} height={size} className={className}>
          <path fill="#339933" d="M128 0L248.8 69.7V209.3L128 279L7.2 209.3V69.7L128 0Z" />
          <path fill="#FFFFFF" d="M128 44.5L198 85V166L128 206.5L58 166V85L128 44.5Z" opacity="0.15" />
          <path fill="#FFFFFF" d="M149.3 125.7c-2.3-1.3-5-2-8.3-2-5.4 0-9.8 2.6-9.8 7.4 0 4.5 3.3 6.3 9.6 7.8 11.8 2.7 18.6 6.3 18.6 15.6 0 10.5-8.5 16.8-20.9 16.8-8.5 0-15.3-2.6-19.8-6.8l5.8-7.7c3.4 3 8.3 5.1 14 5.1 6.5 0 10.4-3.1 10.4-7.4 0-4.6-3.7-6.2-10.7-7.9-11.4-2.8-17.5-6.6-17.5-15.5 0-10.2 8.3-16.3 19.8-16.3 7.8 0 13.9 2.2 18 5.6l-5.2 7.9zm-46.7 44.1V115.5h10.4v54.3H102.6zm-17.7 0l-16-29.2v29.2H58.5V115.5H69l15.9 28.7v-28.7h10.4v54.3H84.9z" />
        </svg>
      );

    // 5. MongoDB (Official Leaf)
    case 'mongodb':
    case 'mongo':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path fill="#13AA52" d="M12 1.5C11.6 1.8 6 6.8 6 13.5c0 4.6 3.1 8.2 5.5 9.8l.5.4.5-.4c2.4-1.6 5.5-5.2 5.5-9.8 0-6.7-5.6-11.7-6-12z" />
          <path fill="#116149" d="M12 1.5v22.2c2.4-1.6 5.5-5.2 5.5-9.8 0-6.7-5.6-11.7-6-12z" opacity="0.3" />
          <path fill="#FFFFFF" d="M12 5.5c-.2 1.8-.8 3.5-1.5 5.2-.6 1.5-1 3.1-1 4.8 0 2.2 1.1 4.1 2.5 5.5V5.5z" opacity="0.6" />
        </svg>
      );

    // 6. Express.js (Official 'ex' Vector)
    case 'express':
    case 'express.js':
    case 'expressjs':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="28" fill="#18181b" stroke="#ffffff" strokeWidth="4" strokeOpacity="0.2" />
          <path fill="#FFFFFF" d="M48.5 78.5L34 52h11.2l9 17.5 9-17.5h11.2L59.8 78.5 75 106H63.8L54.2 87.8 44.5 106H33.2l15.3-27.5zm35.2 2.3c0-4.8 3.5-8.2 8.5-8.2 4.2 0 7.3 2.5 8.1 6.2H83.8v2zm18.3 4.2c-.3 9-7.2 15.5-17.1 15.5-10.4 0-17.8-7.3-17.8-17.5 0-10.1 7.4-17.5 17.6-17.5 10.5 0 17.3 7.6 17.3 17.7v1.8H83.7c.3 5.4 4.3 9 9.8 9 4.3 0 7.5-2.2 8.7-5.6l8.8 4.6z" />
        </svg>
      );

    // 7. Tailwind CSS (Official Twin Waves)
    case 'tailwind':
    case 'tailwind css':
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.33333 8.16667 11 8.5C11.9507 8.69013 12.6309 9.38036 13.3838 10.1444C14.6102 11.3888 16.0369 12.8344 19.5 12.8344C22.1667 12.8344 23.8333 11.5011 24.5 8.83444C23.5 10.1678 22.1667 10.6678 20.5 10.3344C19.5493 10.1443 18.8691 9.45408 18.1162 8.69004C16.8898 7.44565 15.4631 6 12 6ZM4.5 12.8344C1.83333 12.8344 0.166667 14.1678 -0.5 16.8344C0.5 15.5011 1.83333 15.0011 3.5 15.3344C4.45066 15.5246 5.13088 16.2148 5.88379 16.9789C7.11021 18.2233 8.53689 19.6689 12 19.6689C14.6667 19.6689 16.3333 18.3356 17 15.6689C16 17.0022 14.6667 17.5022 13 17.1689C12.0493 16.9788 11.3691 16.2885 10.6162 15.5245C9.38979 14.2801 7.96311 12.8344 4.5 12.8344Z" fill="#38BDF8"/>
        </svg>
      );

    // 8. Bootstrap (Official Purple Badge)
    case 'bootstrap':
      return (
        <svg viewBox="0 0 16 16" width={size} height={size} className={className} fill="none">
          <rect width="16" height="16" rx="4" fill="#7952B3" />
          <path d="M4.5 3.5H8.2C9.4 3.5 10.2 4.1 10.2 5.1C10.2 5.8 9.7 6.4 8.9 6.7C9.9 7 10.5 7.7 10.5 8.7C10.5 9.9 9.5 10.6 8.1 10.6H4.5V3.5ZM6.2 4.9V6.4H7.9C8.6 6.4 9 6 9 5.6C9 5.2 8.6 4.9 7.9 4.9H6.2ZM6.2 7.7V9.2H8.1C8.8 9.2 9.3 8.8 9.3 8.4C9.3 8 8.8 7.7 8.1 7.7H6.2Z" fill="#FFFFFF"/>
        </svg>
      );

    // 9. Figma (Official Multi-Colored Icon)
    case 'figma':
      return (
        <svg viewBox="0 0 38 57" width={size} height={size} className={className} fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      );

    // 10. HTML5 & CSS3 (Official Dual Shield)
    case 'html5 & css3':
    case 'html & css':
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path fill="#E34F26" d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0z"/>
          <path fill="#EF652A" d="M12 22l7.1-2.2 1.6-17.8H12V22z"/>
          <path fill="#ECECEC" d="M12 9.8H8.5l-.2-2.7h7.4V4.5H5.8l.8 8.1H12V9.8zm0 7.4l-.1.03-3.6-1-.2-2.7H5.6l.4 5 6 1.7v-3.03z"/>
          <path fill="#FFFFFF" d="M12 9.8v2.8h3.4l-.3 3.6-3.1.9v2.8l6-1.7.6-7.6H12zm0-5.3v2.6h6.4l.2-2.6H12z"/>
        </svg>
      );

    // 11. Git & GitHub (Official Octocat & Git Logo)
    case 'git & github':
    case 'git':
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect width="24" height="24" rx="6" fill="#18181b"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="#F05032"/>
        </svg>
      );

    // 12. RESTful APIs (Cloud & Endpoints)
    case 'restful apis':
    case 'rest apis':
    case 'rest api':
    case 'api':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect width="24" height="24" rx="6" fill="#0c1e2e" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M6 15V9h2.5a2 2 0 0 1 0 4H6m7-4v6m-4-6h4m4 0v6h3a2 2 0 0 0 0-4h-3" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 13. MySQL (Official Dolphin / Dual-Tone Logo)
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <path fill="#00758F" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-2.35 1.03-4.46 2.66-5.92l.85 1.03C6.34 8.2 5.5 9.99 5.5 12c0 3.58 2.92 6.5 6.5 6.5 1.93 0 3.66-.85 4.86-2.19l1.1 1C16.4 18.88 14.32 20 12 20z"/>
          <path fill="#F29111" d="M12 6a6 6 0 0 1 6 6c0 1.5-.55 2.88-1.47 3.94l-1.07-1A4.5 4.5 0 0 0 16.5 12 4.5 4.5 0 0 0 12 7.5c-1.18 0-2.25.46-3.05 1.21L7.85 7.6A5.96 5.96 0 0 1 12 6z"/>
        </svg>
      );

    // 14. Adobe Photoshop (Official Ps Badge)
    case 'adobe photoshop':
    case 'photoshop':
    case 'ps':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <rect width="24" height="24" rx="5" fill="#001E36" />
          <path d="M6 7.5h4c2.2 0 3.5 1.1 3.5 2.8 0 1.9-1.4 3-3.6 3H8.3V17H6V7.5zm2.3 4.1h1.5c.8 0 1.4-.4 1.4-1.2 0-.8-.5-1.2-1.4-1.2H8.3v2.4z" fill="#31A8FF"/>
          <path d="M17.5 11.2c-.4-.3-1-.5-1.6-.5-.9 0-1.4.4-1.4 1 0 .7.6 1 1.7 1.3 1.6.4 2.3 1.2 2.3 2.5 0 1.6-1.3 2.6-3.2 2.6-.9 0-1.7-.2-2.3-.6l.5-1.5c.5.3 1.2.6 1.8.6 1 0 1.5-.4 1.5-1 0-.7-.5-1-1.6-1.3-1.6-.4-2.4-1.1-2.4-2.4 0-1.6 1.3-2.6 3-2.6.8 0 1.5.2 2 .4l-.3 1.5z" fill="#31A8FF"/>
        </svg>
      );

    // 15. Adobe Illustrator (Official Ai Badge)
    case 'adobe illustrator':
    case 'illustrator':
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
          <rect width="24" height="24" rx="5" fill="#330000" />
          <path d="M5.5 17L9.2 7.5h1.9L14.8 17h-2.1l-.8-2.2H8.3L7.5 17H5.5zm3.4-3.8h2.5L10.2 10l-1.3 3.2z" fill="#FF9A00"/>
          <path d="M16.5 9.8V8.2H18.5V9.8H16.5zm0 7.2v-5.7H18.5V17H16.5z" fill="#FF9A00"/>
        </svg>
      );

    // 16. Wireframing & Prototyping (UX Grid)
    case 'wireframing & prototyping':
    case 'wireframing':
    case 'prototyping':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#A855F7" strokeWidth="1.8" />
          <path d="M3 9h18M9 21V9" stroke="#A855F7" strokeWidth="1.8" />
          <circle cx="6" cy="6" r="1" fill="#A855F7" />
          <circle cx="12" cy="6" r="1" fill="#A855F7" />
          <circle cx="18" cy="6" r="1" fill="#A855F7" />
        </svg>
      );

    // 17. WIX Studio (Official Brand Logo)
    case 'wix studio':
    case 'wix':
      return (
        <svg viewBox="0 0 64 64" width={size} height={size} className={className}>
          <rect width="64" height="64" rx="14" fill="#0c0d14" stroke="#ec4899" strokeWidth="2.5" />
          <path fill="#FFFFFF" d="M10 42h4.5l3.8-12.2 3.8 12.2h4.5l5.4-19.5h-4.5l-3.2 13.3-3.9-13.3h-4.4l-3.9 13.3-3.2-13.3H10L15.4 42zm25.6 0h4.8V27h-4.8v15zm2.4-18c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9-2.9 1.3-2.9 2.9 1.3 2.9 2.9 2.9zm8.2 18h5.2l4.1-7.6 4.1 7.6h5.2l-6.7-10.6 6.2-8.9h-5.2l-3.6 6.6-3.6-6.6h-5.2l6.2 8.9L46.2 42z"/>
        </svg>
      );

    // 18. Canva (Official Cyan Badge)
    case 'canva':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <circle cx="12" cy="12" r="11" fill="url(#canva-grad)" />
          <path d="M16.5 14C15.5 15.5 13.8 16.5 12 16.5C9.2 16.5 7.2 14.5 7.2 12C7.2 9.5 9.2 7.5 12 7.5C13.8 7.5 15.2 8.3 16 9.6L14.2 10.8C13.8 10 13 9.5 12 9.5C10.5 9.5 9.4 10.6 9.4 12C9.4 13.4 10.5 14.5 12 14.5C13.1 14.5 14 13.9 14.6 13L16.5 14Z" fill="#FFFFFF"/>
          <defs>
            <linearGradient id="canva-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC"/>
              <stop offset="1" stopColor="#7D2AE8"/>
            </linearGradient>
          </defs>
        </svg>
      );

    // 19. Unit Testing (QA Automation Check)
    case 'unit testing':
    case 'testing':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect width="24" height="24" rx="6" fill="#06281e" stroke="#10B981" strokeWidth="1.5" />
          <path d="M7 12.5l3.5 3.5 6.5-7.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 20. Manual QA
    case 'manual qa':
    case 'qa':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect x="3" y="4" width="18" height="16" rx="4" fill="#04202c" stroke="#06B6D4" strokeWidth="1.5" />
          <path d="M7 9h10M7 13h6M7 17h8" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 21. API Testing (Official Postman Spaceman)
    case 'api testing (postman)':
    case 'postman':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <circle cx="12" cy="12" r="11" fill="#FF6C37"/>
          <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5c0 1.2.6 2.3 1.5 2.9l-2.5 4.1h2l1.6-2.7c.3.1.6.2.9.2 2 0 3.5-1.6 3.5-3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#FFFFFF"/>
        </svg>
      );

    // 22. Responsive Architecture
    case 'responsive architecture':
    case 'responsive design':
    case 'responsive':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect x="2" y="4" width="13" height="11" rx="2" stroke="#8B5CF6" strokeWidth="1.8" />
          <path d="M6 18h5M8.5 15v3" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="13" y="8" width="9" height="13" rx="2" fill="#0d0e1c" stroke="#38BDF8" strokeWidth="1.8" />
          <circle cx="17.5" cy="18.5" r="0.8" fill="#38BDF8" />
        </svg>
      );

    // 23. Performance Optimization (Speed Gauge)
    case 'performance optimization':
    case 'performance':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <path d="M12 4a8 8 0 0 0-8 8c0 2.8 1.4 5.3 3.6 6.8l1.4-1.8A5.8 5.8 0 0 1 6 12a6 6 0 0 1 12 0c0 1.9-.9 3.6-2.3 4.7l1.4 1.8A8 8 0 0 0 12 4z" fill="#F59E0B" />
          <path d="M12 12l4-4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.2" fill="#F59E0B" />
        </svg>
      );

    // 24. Database Normalization (Database Stack)
    case 'database normalization':
    case 'database':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#10B981" strokeWidth="2" fill="#10B981" fillOpacity="0.2"/>
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#10B981" strokeWidth="2"/>
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#10B981" strokeWidth="2"/>
        </svg>
      );

    default:
      return (
        <div className="w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-[10px] font-bold text-white">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
