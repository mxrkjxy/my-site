import React, { useState, useEffect } from 'react';

import useSectionObserver from '@/hooks/useSectionObserver';

import navSections from '@/components/config/nav-sections';
import Navbar from '@/components/layout/Navbar';
import MainBody from '@/components/layout/MainBody';
import Footer from '@/components/layout/Footer';

const App: React.FC = () => {
  const sectionIds = navSections.map(({ id }) => id);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [isScrolling, setIsScrolling] = useState(false);

  const observedSection = useSectionObserver(sectionIds, isScrolling);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsScrolling(true);
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);

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

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (sectionIds.includes(hash)) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, []);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <MainBody />
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
