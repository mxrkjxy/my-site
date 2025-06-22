import React, { useState, useEffect } from 'react';

import useSectionObserver from '@/hooks/useSectionObserver';

import navItems from '@/components/nav-items';
import Navbar from '@/components/Navbar';
import MainBody from '@/components/MainBody';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const sectionIds = navItems.map((item) => item.id);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [isScrolling, setIsScrolling] = useState(false);

  // 👇 Only update hash if not in a programmatic scroll
  const observedSection = useSectionObserver(sectionIds, isScrolling);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsScrolling(true);
      el.scrollIntoView({ behavior: 'smooth' });

      // Set hash manually
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);

      // Unblock after transition
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    }
  };

  useEffect(() => {
    if (!isScrolling && observedSection !== activeSection) {
      setActiveSection(observedSection);
    }
  }, [observedSection, isScrolling]);

  return (
    <>
      <style>{`html { scroll-snap-type: y mandatory; scroll-padding-top: 4rem; }`}</style>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
        <MainBody />
        <Footer onNavigate={scrollToSection} />
      </div>
    </>
  );
};


export default App;
