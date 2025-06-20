import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import sections from '@/components/sections';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow dark:shadow-md z-10 transition-colors">
      <div className="container mx-auto px-8 py-8 flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-bold text-blue-600">markjay</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative px-2 py-1 font-medium transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
      after:origin-left after:transition-transform after:duration-300 
      ${
        activeSection === section.id
          ? 'text-blue-600 dark:text-blue-400 after:scale-x-100 after:bg-blue-600 dark:after:bg-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 after:scale-x-0 after:bg-blue-400 hover:after:scale-x-100'
      }`}
            >
              {section.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <ThemeToggle />
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
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className={`relative px-2 py-1 font-medium transition-colors duration-300
          ${
            activeSection === section.id
              ? 'text-blue-600 dark:text-blue-400 after:scale-x-100 after:bg-blue-600 dark:after:bg-blue-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 after:scale-x-0 after:bg-blue-400 hover:after:scale-x-100'
          }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
