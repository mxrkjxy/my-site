import React from 'react';

import { homeSections } from '@/components/config';

export const HomePage: React.FC = () => {
  return (
    <main className="snap-y snap-mandatory">
      {homeSections.map(({ id, element, classes }) => (
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
