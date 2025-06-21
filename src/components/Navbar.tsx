import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import sections from '@/components/sections';
import Brand from '@/components/Brand';
import ThemeToggler from '@/components/ThemeToggler';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  const isNavigatingRef = useRef<boolean>(false); // Track navbar navigation

  const scrollToSection = (sectionId: string) => {
    isNavigatingRef.current = true;
    setActiveSection(sectionId);
    window.history.pushState(null, '', `#${sectionId}`);

    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800); // Adjust based on transition
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isNavigatingRef.current) {
            const id = entry.target.id;
            if (id !== activeSection) {
              setActiveSection(id);
              history.replaceState(null, '', `#${id}`);
            }
          }
        });
      },
      {
        root: scrollContainer,
        rootMargin: '0px 0px -70% 0px', // Trigger when section is mostly in view
        threshold: 0.3,
      }
    );

    // Observe each section
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [activeSection]); // Add activeSection to dependency array

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow dark:shadow-md z-10 transition-colors">
      <div className="container h-24 mx-auto px-8 py-8 flex items-center justify-between">
        <button
          onClick={() => scrollToSection(sections[0].id)}
          className="cursor-pointer bg-transparent border-none p-0 m-0"
          type="button"
        >
          <Brand />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-2 py-1 font-medium transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                after:origin-left after:transition-transform after:duration-300 
                ${
                  activeSection === section.id
                    ? 'text-teal-600 dark:text-teal-400 after:scale-x-100 after:bg-teal-600 dark:after:bg-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 after:scale-x-0 after:bg-teal-400 hover:after:scale-x-100'
                }`}
            >
              {section.id.replace(/^./, (char) => char.toUpperCase())}
            </button>
          ))}
          <ThemeToggler />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <ThemeToggler />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-4 flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setMenuOpen(false);
              }}
              className={`relative px-2 py-1 font-medium transition-colors duration-300
                ${
                  activeSection === section.id
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                }`}
            >
              {section.id.replace(/^./, (char) => char.toUpperCase())}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
