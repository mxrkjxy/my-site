import {
  HeroSection,
  AboutSection,
  ProjectSection,
  BlogSection,
  ContactSection,
} from '@/components/sections';

interface HomeSections {
  id: string;
  label: string;
  element: React.ReactNode;
  classes?: string;
}

export const homeSections: HomeSections[] = [
  {
    id: 'home',
    label: 'Home',
    element: <HeroSection />,
    classes:
      'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800',
  },
  {
    id: 'about',
    label: 'Skills',
    element: <AboutSection />,
    classes: 'bg-white dark:bg-gray-900',
  },
  {
    id: 'projects',
    label: 'Projects',
    element: <ProjectSection />,
    classes: 'bg-gray-50 dark:bg-gray-800',
  },
  {
    id: 'blog',
    label: 'Blog',
    element: <BlogSection />,
    classes: 'bg-white dark:bg-gray-900',
  },
  {
    id: 'contact',
    label: 'Contact',
    element: <ContactSection />,
    classes:
      'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900',
  },
];
