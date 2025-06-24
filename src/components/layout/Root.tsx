import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useSectionObserver from '@/hooks/useSectionObserver';
import { Navbar, Footer } from '@/components/layout';

export const RootLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

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

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    
    if (hash) {
      scrollToSection(hash.replace('#', ''));
    }
  }, [location]);

  const observedSection = useSectionObserver(isScrolling);

  useEffect(() => {
    if (!isScrolling && observedSection !== activeSection) {
      setActiveSection(observedSection);
    }
  }, [observedSection, isScrolling]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Outlet />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};
