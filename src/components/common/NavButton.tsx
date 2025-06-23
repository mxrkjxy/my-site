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
    block px-4 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300
    md:relative md:px-2 md:py-1 md:rounded-none md:text-sm md:w-auto md:text-center md:transition-colors md:font-medium
    md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[2px] md:after:w-full
    md:after:origin-left md:after:transition-transform md:after:duration-300
  `;

  const activeClasses = `
    text-teal-600 dark:text-teal-400
    md:after:scale-x-100 md:after:bg-teal-600 md:dark:after:bg-teal-400
  `;

  const inactiveClasses = `
    text-gray-700 dark:text-gray-300
    hover:text-teal-500 dark:hover:text-teal-400
    md:after:scale-x-0 md:after:bg-teal-400 md:hover:after:scale-x-100
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
