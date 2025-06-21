import { ReactNode } from 'react';

interface ContentProps {
  title: string;
  children?: ReactNode;
}

const Content = ({ title, children }: ContentProps) => {
  return (
    <>
      <h1 className="text-4xl text-emerald-600 dark:text-teal-500 md:text-5xl font-bold mb-8">
        &lt;{title} /&gt;
      </h1>
      <div className="space-y-4 text-left">{children}</div>
    </>
  );
};

export default Content;
