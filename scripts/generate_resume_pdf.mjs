import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_WIDTH = 595.28; // A4
  const PAGE_HEIGHT = 841.89; // A4
  const MARGIN_LEFT = 45;
  const MARGIN_RIGHT = 45;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

  const primaryColor = rgb(0.08, 0.08, 0.08);
  const grayColor = rgb(0.25, 0.25, 0.25);
  const lightGrayColor = rgb(0.5, 0.5, 0.5);
  const lineColor = rgb(0.15, 0.15, 0.15);
  const linkColor = rgb(0.05, 0.25, 0.65);

  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, size);
      if (width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  // ================= PAGE 1 =================
  const page1 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - 45;

  // Name
  page1.drawText('Keerthivasan v', {
    x: MARGIN_LEFT,
    y: y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });
  y -= 18;

  // Subtitle
  page1.drawText('Web Full Stack Developer', {
    x: MARGIN_LEFT,
    y: y,
    size: 11.5,
    font: fontRegular,
    color: primaryColor,
  });
  y -= 14;

  // Contact Info bar with borders
  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 1.2,
    color: lineColor,
  });
  y -= 14;

  const col1W = 130;
  const col2W = 200;
  const col3W = 160;

  page1.drawText('93604-10038', {
    x: MARGIN_LEFT + 25,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: primaryColor,
  });

  // Vertical line 1
  page1.drawLine({
    start: { x: MARGIN_LEFT + col1W, y: y + 14 },
    end: { x: MARGIN_LEFT + col1W, y: y - 5 },
    thickness: 1,
    color: lineColor,
  });

  page1.drawText('keerthivasanvbe@gmail.com', {
    x: MARGIN_LEFT + col1W + 20,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: primaryColor,
  });

  // Vertical line 2
  page1.drawLine({
    start: { x: MARGIN_LEFT + col1W + col2W, y: y + 14 },
    end: { x: MARGIN_LEFT + col1W + col2W, y: y - 5 },
    thickness: 1,
    color: lineColor,
  });

  page1.drawText('Tamil Nadu, India', {
    x: MARGIN_LEFT + col1W + col2W + 25,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: primaryColor,
  });

  y -= 8;
  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 1.2,
    color: lineColor,
  });
  y -= 22;

  // Helper for Section with Left Header Column
  const SECTION_HEADER_X = MARGIN_LEFT;
  const SECTION_CONTENT_X = MARGIN_LEFT + 105;
  const SECTION_CONTENT_WIDTH = PAGE_WIDTH - MARGIN_RIGHT - SECTION_CONTENT_X;

  // --- Objective ---
  page1.drawText('Objective', {
    x: SECTION_HEADER_X,
    y: y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  const objText1 = 'Web Developer with 3 years of experience in React.js, JavaScript, responsive UI development, and API integration. Skilled in building clean and user-friendly interfaces, improving performance, and developing scalable web applications. Strong understanding of UI/UX design, front-end frameworks, and modern development practices.';
  const objText2 = 'Dynamic Software Engineer and Web Developer with a strong foundation in coding, problem-solving, and innovative design. Proficient in multiple programming languages and frameworks, I am passionate about creating efficient, user-friendly applications. Eager to contribute my skills to a forward-thinking team, I thrive in collaborative environments and am committed to delivering high-quality solutions that drive success and enhance user experience.';

  const objLines1 = wrapText(objText1, fontRegular, 8.5, SECTION_CONTENT_WIDTH);
  for (const line of objLines1) {
    page1.drawText(line, {
      x: SECTION_CONTENT_X,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: grayColor,
      lineHeight: 11,
    });
    y -= 11.5;
  }
  y -= 5;
  const objLines2 = wrapText(objText2, fontRegular, 8.5, SECTION_CONTENT_WIDTH);
  for (const line of objLines2) {
    page1.drawText(line, {
      x: SECTION_CONTENT_X,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: grayColor,
      lineHeight: 11,
    });
    y -= 11.5;
  }

  y -= 12;
  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 0.5,
    color: rgb(0.85, 0.85, 0.85),
  });
  y -= 16;

  // --- Education ---
  page1.drawText('Education', {
    x: SECTION_HEADER_X,
    y: y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  page1.drawText('NSN College Of Engineering And Technology - Karur', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 9,
    font: fontRegular,
    color: primaryColor,
  });
  y -= 12;
  page1.drawText('B.E(EEE)', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: grayColor,
  });
  y -= 11;
  page1.drawText('CGPA: 8.0', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: grayColor,
  });

  y -= 12;
  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 1,
    color: lineColor,
  });
  y -= 16;

  // --- Key Skills ---
  page1.drawText('Key Skills', {
    x: SECTION_HEADER_X,
    y: y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  const skillsLeft = [
    'HTML 5',
    'Bootstrap',
    'JavaScript(ES-6)',
    'Responsive web Design',
    'FIGMA',
    'K6 SOFTWARE(Load Testing)',
    'POSTMAN(API Testing)',
    'SQL',
    'Node.js Expertise',
    'Problem-Solving',
    'UI/UX Design',
  ];

  const skillsRight = [
    'CSS',
    'Tailwind CSS',
    'React JS',
    'Browser Developer Tools',
    'JIRA (Project Management Tools)',
    'JEST (Unit Testing)',
    'RESTful APIs',
    'Mongo DB',
    'Database Design',
    'Database Management',
    'Team Collaboration',
  ];

  const skillsStartY = y;
  let skillsY = skillsStartY;
  for (let i = 0; i < skillsLeft.length; i++) {
    page1.drawText(skillsLeft[i], {
      x: SECTION_CONTENT_X,
      y: skillsY,
      size: 8.5,
      font: fontRegular,
      color: grayColor,
    });

    page1.drawText(skillsRight[i], {
      x: SECTION_CONTENT_X + 180,
      y: skillsY,
      size: 8.5,
      font: fontRegular,
      color: grayColor,
    });
    skillsY -= 11.5;
  }
  y = skillsY - 6;

  page1.drawLine({
    start: { x: MARGIN_LEFT, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 1,
    color: lineColor,
  });
  y -= 16;

  // --- Experience ---
  page1.drawText('Experience', {
    x: SECTION_HEADER_X,
    y: y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  // Experience 1
  page1.drawText('Web Developer | EASA College of Engineering and Technology | Jan 2026 – Present |', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11;
  page1.drawText('Coimbatore', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;

  const exp1Bullets = [
    'SEO & Traffic: Boosted organic traffic by 60% and user engagement by 100% through responsive design and semantic SEO.',
    'Performance: Slashed page load times by 70% via image optimization and code-splitting, ensuring a frictionless UX.',
    'Integration & QA: Integrated REST APIs and enforced rigorous debugging, maintaining 99.9% site reliability.',
  ];

  for (const bullet of exp1Bullets) {
    const bLines = wrapText(`•  ${bullet}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page1.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y -= 10.5;
    }
    y -= 2;
  }

  y -= 6;
  page1.drawLine({
    start: { x: SECTION_CONTENT_X, y: y },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  y -= 12;

  // Experience 2
  page1.drawText('Software Engineer | Prudent Gaming India | Jul 2023 – Oct 2025 | Bangalore', {
    x: SECTION_CONTENT_X,
    y: y,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;

  const exp2Bullets = [
    'Built responsive web apps using React.js and cross-platform mobile apps using Flutter (Android/iOS).',
    'Seamlessly integrated backend APIs, enhancing real-time data sync and user interactivity.',
    'Collaborated in Agile sprints with cross-functional teams, ensuring 100% on-time project delivery.',
  ];

  for (const bullet of exp2Bullets) {
    const bLines = wrapText(`•  ${bullet}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page1.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y -= 10.5;
    }
    y -= 2;
  }

  // ================= PAGE 2 =================
  const page2 = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y2 = PAGE_HEIGHT - 45;

  page2.drawText('PROJECT', {
    x: SECTION_HEADER_X,
    y: y2,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  // Project 1
  page2.drawText('Travel Booking And Brand site - HTML | CSS | Java Script | Figma', {
    x: SECTION_CONTENT_X,
    y: y2,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y2 -= 12;

  const proj1Bullets = [
    'Designed and developed a fully responsive travel website using HTML, CSS, and JavaScript, with interactive features like image sliders, dynamic content, and client-side validation to enhance user engagement across devices.',
    'Created UI/UX prototypes in Figma to define user flows and visual design, ensuring a smooth and user-friendly browsing experience.',
  ];

  for (const b of proj1Bullets) {
    const bLines = wrapText(`•  ${b}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page2.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y2,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y2 -= 10.5;
    }
    y2 -= 2;
  }

  page2.drawText('•  Live Project : ', {
    x: SECTION_CONTENT_X + 4,
    y: y2,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('https://keerthivasanv01.github.io/travel-website', {
    x: SECTION_CONTENT_X + 65,
    y: y2,
    size: 8,
    font: fontRegular,
    color: linkColor,
  });
  y2 -= 14;

  page2.drawLine({
    start: { x: SECTION_CONTENT_X, y: y2 },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y2 },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  y2 -= 14;

  // Project 2
  page2.drawText('Hospital website with CMS - React JS | Mongo DB | Restful API | Figma | Golang', {
    x: SECTION_CONTENT_X,
    y: y2,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y2 -= 12;

  const proj2Bullets = [
    'Developed a live hospital management system using React.js and Strapi CMS, featuring appointment booking, admin panel, authentication, and full API integration for real-time data and content management.',
    'Designed a fully responsive, animation-enhanced UI with optimized performance, smooth user experience, and secure data flow connected to a Strapi-powered backend and database.',
  ];

  for (const b of proj2Bullets) {
    const bLines = wrapText(`•  ${b}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page2.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y2,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y2 -= 10.5;
    }
    y2 -= 2;
  }

  page2.drawText('•  Live Project : ', {
    x: SECTION_CONTENT_X + 4,
    y: y2,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('https://lucknowheritagehospital.com', {
    x: SECTION_CONTENT_X + 65,
    y: y2,
    size: 8,
    font: fontRegular,
    color: linkColor,
  });
  y2 -= 14;

  page2.drawLine({
    start: { x: SECTION_CONTENT_X, y: y2 },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y2 },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  y2 -= 14;

  // Project 3
  page2.drawText('EASA College website with CMS - React JS | Mongo DB | Restful API | Figma | Node JS', {
    x: SECTION_CONTENT_X,
    y: y2,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y2 -= 12;

  const proj3Bullets = [
    'Architected a Full-Featured CMS & Admin Dashboard – Designed and deployed a secure, role-based admin panel empowering non-technical staff to autonomously perform CRUD operations for admission inquiries, syllabus updates, academic session management, and career page content—completely eliminating developer dependency for daily content changes.',
    'Streamlined Institutional Workflows – Automated data synchronization across the dashboard, reducing manual content update time by 60% and enabling real-time visibility of admission status and curriculum changes for students, faculty, and administrative stakeholders.',
    'Engineered a High-Performance Frontend – Built a mobile-first, responsive website integrated with the CMS, implementing advanced caching and optimized database queries—resulting in a 70% reduction in load times, 100% boost in user engagement, and a 60% surge in organic traffic through SEO-friendly content structures.',
  ];

  for (const b of proj3Bullets) {
    const bLines = wrapText(`•  ${b}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page2.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y2,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y2 -= 10.5;
    }
    y2 -= 2;
  }

  page2.drawText('•  Live Project : ', {
    x: SECTION_CONTENT_X + 4,
    y: y2,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('https://www.easacollege.com', {
    x: SECTION_CONTENT_X + 65,
    y: y2,
    size: 8,
    font: fontRegular,
    color: linkColor,
  });
  y2 -= 11;
  page2.drawText('•  Live Project : ', {
    x: SECTION_CONTENT_X + 4,
    y: y2,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('https://ecetonline.com', {
    x: SECTION_CONTENT_X + 65,
    y: y2,
    size: 8,
    font: fontRegular,
    color: linkColor,
  });
  y2 -= 14;

  page2.drawLine({
    start: { x: SECTION_CONTENT_X, y: y2 },
    end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: y2 },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  y2 -= 14;

  // Project 4
  page2.drawText('Corelix Technology Enterprise CMS & Admin Panel - React JS | Node.js | Express | JWT', {
    x: SECTION_CONTENT_X,
    y: y2,
    size: 8.5,
    font: fontBold,
    color: primaryColor,
  });
  y2 -= 12;

  const proj4Bullets = [
    'Took End-to-End Ownership – Solely architectured, developed, and deployed a fully functional Admin Dashboard and CMS from scratch for a live IT company, giving their non-technical team complete control over website content, user roles, and admissions data without relying on developers.',
    'Built Secure, Production-Grade APIs – Designed and integrated robust RESTful APIs with JWT-based authentication and role-based access control (RBAC), ensuring secure CRUD operations for managing pages, career listings, and dynamic system configurations.',
    'Delivered Measurable Business Impact – Streamlined their internal content workflow, slashing content update turnaround time by 40% and completely eliminating the company\'s dependency on coding support for daily operational changes like syllabus updates and admission inquiries.',
  ];

  for (const b of proj4Bullets) {
    const bLines = wrapText(`•  ${b}`, fontRegular, 8, SECTION_CONTENT_WIDTH);
    for (let j = 0; j < bLines.length; j++) {
      page2.drawText(bLines[j], {
        x: j === 0 ? SECTION_CONTENT_X + 4 : SECTION_CONTENT_X + 12,
        y: y2,
        size: 8,
        font: fontRegular,
        color: grayColor,
      });
      y2 -= 10.5;
    }
    y2 -= 2;
  }

  page2.drawText('•  Live link : ', {
    x: SECTION_CONTENT_X + 4,
    y: y2,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  page2.drawText('https://corelixtechnology.in.net', {
    x: SECTION_CONTENT_X + 55,
    y: y2,
    size: 8,
    font: fontRegular,
    color: linkColor,
  });

  const pdfBytes = await pdfDoc.save();

  // Save to public and public/assets
  const outPath1 = path.join(process.cwd(), 'public', 'Keerthivasan_V_Resume.pdf');
  const outPath2 = path.join(process.cwd(), 'public', 'assets', 'Keerthivasan_V_Resume.pdf');
  fs.writeFileSync(outPath1, pdfBytes);
  fs.writeFileSync(outPath2, pdfBytes);
  console.log(`Generated PDF at ${outPath1} and ${outPath2}`);
}

generateResume().catch(console.error);
