import { useState, useEffect } from 'react'

import Nav from './components/Nav';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import SkillsSection from './Sections/SkillsSection';
import ProjectsSection from './Sections/ProjectsSection';
import EducationSection from './Sections/EducationSection';
import ContactSection from './Sections/ContactSection';
import Footer from './components/Footer';

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       setMousePosition({ x: e.clientX, y: e.clientY });
  //     };
  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => window.removeEventListener('mousemove', handleMouseMove);
  //   }, []);


  return (
    <div>
      
      {/* Animated cursor follower */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out z-0"
        style={{
          background: 'radial-gradient(circle, #E11D48 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      {/* Navigation */}
      <Nav />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <EducationSection />

      <ContactSection />

      <Footer />

    </div>
  )
}

export default App
