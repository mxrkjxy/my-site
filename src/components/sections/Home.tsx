import { ChevronDown } from 'lucide-react';
import TypingText from '@/components/common/TypingText';

const HomeSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center space-y-8 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <TypingText speed={50} hasGlitch>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hello!
          </span>
        </TypingText>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quia
        corrupti illum eligendi fuga blanditiis voluptas nam, eum obcaecati
        dolor accusamus, quos quaerat illo quod consequatur laboriosam. Culpa,
        enim accusamus.
      </p>
      <button
        onClick={() => scrollToSection('about')}
        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
      >
        Get Started
        <ChevronDown className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
};

export default HomeSection;
