import React from 'react';

import navItems from '@/components/nav-items';

const MainBody: React.FC = () => {
  return (
    <main className="snap-y snap-mandatory">
      {navItems.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className={`snap-start min-h-screen pt-24 flex items-center justify-center text-white ${item.classes}`}
        >
          {item.element}
        </section>
      ))}
    </main>
  );
};

export default MainBody;
