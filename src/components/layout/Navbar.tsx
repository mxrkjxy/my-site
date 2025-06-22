import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import navSections from '@/components/config/nav-sections';
import { Button } from '@/components/ui/button';
import Brand from '@/components/common/Brand';
import ThemeToggler from '@/components/common/ThemeToggler';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900/95 shadow dark:shadow-md z-10 transition-colors backdrop-blur-sm"
    >
      <div className="w-full h-24 bg-white dark:bg-gray-900 shadow dark:shadow-md">
        <div className="md:container h-full mx-auto px-8 py-8 flex items-center justify-between">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigate(navSections[0].id)}
              className="cursor-pointer bg-transparent border-none p-0 m-0"
              type="button"
            >
              <Brand />
            </button>
          </div>
          <div className="hidden ml-10 md:flex gap-6">
            {navSections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                className={`relative px-2 py-1 font-medium transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
                after:origin-left after:transition-transform after:duration-300 
                ${
                  activeSection === id
                    ? 'text-teal-600 dark:text-teal-400 after:scale-x-100 after:bg-teal-600 dark:after:bg-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 after:scale-x-0 after:bg-teal-400 hover:after:scale-x-100'
                }`}
              >
                {label}
              </button>
            ))}
            <ThemeToggler />
          </div>
          <div className="md:hidden flex justify-center items-center gap-2">
            <ThemeToggler />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-4 flex flex-col gap-4">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className={`block px-4 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                activeSection === id
                  ? 'text-teal-600 dark:text-teal-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
