import { ChevronDown } from 'lucide-react';
import { TypingText } from '@/components/common';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center px-4">
      <TypingText speed={50} hasGlitch>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
          hello!
        </h1>
      </TypingText>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
        I am Mark Jay, a Front-end Web Developer 👋
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        I create beautiful, functional, and user-centered digital experiences
        that make a difference
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          onClick={() => scrollToSection('about')}
        >
          About Me
        </button>
        <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};
