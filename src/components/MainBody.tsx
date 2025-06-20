import sections from '@/components/sections';

const MainBody: React.FC = () => {
  return (
    <main className="flex-1">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="h-screen flex items-center justify-center text-4xl font-bold bg-gray-50 dark:bg-gray-950 border-b dark:border-gray-700"
        >
          {section.element}
        </section>
      ))}
    </main>
  );
};

export default MainBody;
