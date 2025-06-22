import React from 'react';

import navSections from '@/components/config/nav-sections';

const MainPage: React.FC = () => {
  return (
    <main className="snap-y snap-mandatory">
      {navSections.map(({id, element, classes}) => (
        <section
          key={id}
          id={id}
          className={`snap-start min-h-screen pt-24 flex items-center justify-center text-white ${classes}`}
        >
          {element}
        </section>
      ))}
    </main>
  );
};

export default MainPage;
