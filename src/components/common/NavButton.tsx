import React, { MouseEventHandler } from 'react';

interface NavButtonProps {
  id: string;
  activeSection: string;
  label: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

export const NavButton: React.FC<NavButtonProps> = ({ id, activeSection, label, clickHandler }) => {
  const isActive = activeSection === id;

  const baseClasses = `
    relative px-2 py-1 font-medium transition-colors duration-300
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full 
    after:origin-left after:transition-transform after:duration-300
  `;

  const activeClasses = `
    text-teal-600 dark:text-teal-400 
    after:scale-x-100 after:bg-teal-600 dark:after:bg-teal-400
  `;

  const inactiveClasses = `
    text-gray-700 dark:text-gray-300 
    hover:text-teal-500 dark:hover:text-teal-400 
    after:scale-x-0 after:bg-teal-400 
    hover:after:scale-x-100
  `;

  return (
    <button
      onClick={clickHandler}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};
