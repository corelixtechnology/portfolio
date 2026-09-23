import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { SkillsPedestals } from './components/SkillsPedestals';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceServices } from './components/ExperienceServices';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Prevent background scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#07080d] text-white selection:bg-purple-500 selection:text-white font-body">
      {/* 1. Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Page Content */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Fixed Navbar */}
        <Navbar onOpenTalk={() => setIsResumeOpen(false)} />

        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About Me (with Real Photo) */}
        <AboutMe onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 3: Technologies I Work With (3D Pedestals) */}
        <SkillsPedestals />

        {/* Section 4: Featured Projects (Some Things I've Built) */}
        <FeaturedProjects />

        {/* Section 5: Experience & Services (My Journey + What I Can Do) */}
        <ExperienceServices />

        {/* Section 6: Contact & Footer (Have a project in mind?) */}
        <ContactSection />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
