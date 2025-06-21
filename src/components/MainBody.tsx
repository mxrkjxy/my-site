import sections from '@/components/sections';

const MainBody: React.FC = () => {
  return (
    <main>
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`snap-start h-[calc(100vh-theme(height.24))] w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 flex flex-col ${
            idx % 2 === 0
              ? 'text-left bg-gray-50 dark:bg-gray-950 border-b dark:border-gray-700'
              : 'text-right bg-gray-20 dark:bg-gray-750 border-b dark:border-gray-500'
          }`}
        >
          {section.element}
        </section>
      ))}
    </main>
  );
};


export default MainBody;
