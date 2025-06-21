import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import sections from '@/components/sections';
import Brand from '@/components/Brand';
import ThemeToggler from '@/components/ThemeToggler';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Update the URL hash
    window.history.pushState(null, '', `#${sectionId}`);

    const scrollContainer = document.querySelector('.snap-y') as HTMLElement;
    const targetSection = document.getElementById(sectionId);

    if (scrollContainer && targetSection) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const sectionRect = targetSection.getBoundingClientRect();

      // Calculate the target scroll position
      const targetScrollTop =
        sectionRect.top - containerRect.top + scrollContainer.scrollTop;

      // Smooth scroll to the target position
      scrollContainer.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Handle initial hash on page load
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sections.find((s) => s.id === hash)) {
        setActiveSection(hash);
        // Small delay to ensure DOM is ready
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    // Check for hash on component mount
    handleHashChange();

    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      // Get the scrollable container (the one with snap-y class)
      const scrollContainer = document.querySelector('.snap-y');
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollTop + 50; // Small offset for better detection

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && scrollContainer.contains(el)) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const sectionRect = el.getBoundingClientRect();

          // Calculate relative position within the scroll container
          const relativeTop =
            sectionRect.top - containerRect.top + scrollContainer.scrollTop;
          const relativeBottom = relativeTop + el.offsetHeight;

          if (
            scrollPosition >= relativeTop &&
            scrollPosition < relativeBottom
          ) {
            setActiveSection(section.id);
            // Update URL hash without triggering hashchange event
            if (window.location.hash !== `#${section.id}`) {
              window.history.replaceState(null, '', `#${section.id}`);
            }
            break;
          }
        }
      }
    };

    // Find the scrollable container and add listener
    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow dark:shadow-md z-10 transition-colors">
      <div className="container h-24 mx-auto px-8 py-8 flex items-center justify-between">
        <Brand />

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
              ? 'text-teal-600 dark:text-teal-400 after:scale-x-100 after:bg-teal-600 dark:after:bg-teal-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 after:scale-x-0 after:bg-teal-400 hover:after:scale-x-100'
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
