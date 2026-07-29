import React from 'react';
import { Navbar } from '../components/portfolio/Navbar';
import { HeroSection } from '../components/portfolio/HeroSection';
import { IntroSection } from '../components/portfolio/IntroSection';
import { ServicesSection } from '../components/portfolio/ServicesSection';
import { TimelineSection } from '../components/portfolio/TimelineSection';
import { MetricsGrid } from '../components/portfolio/MetricsGrid';
import { ProjectsSection } from '../components/portfolio/ProjectsSection';
import { LessonsGrid } from '../components/portfolio/LessonsGrid';
import { VisionFooter } from '../components/portfolio/VisionFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-portfolio-bg selection:bg-portfolio-gold selection:text-black font-sans">
      <div className="max-w-[1400px] mx-auto border-x border-portfolio-border shadow-2xl bg-portfolio-bg relative flex flex-col">
        
        <Navbar />
        
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TimelineSection />
        <MetricsGrid />
        <ProjectsSection />
        <LessonsGrid />
        <VisionFooter />
      </div>
    </main>
  );
}
