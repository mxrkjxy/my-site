import {
  HomeSection,
  AboutSection,
  ExperienceSection,
  ProjectSection,
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
    element: <HomeSection />,
    classes:
      'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950',
  },
  {
    id: 'about',
    label: 'About',
    element: <AboutSection />,
    classes:
      'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 dark:from-purple-950 dark:via-pink-950 dark:to-red-950',
  },
  {
    id: 'experience',
    label: 'Experience',
    element: <ExperienceSection />,
    classes:
      'bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 dark:from-green-950 dark:via-teal-950 dark:to-blue-950',
  },
  {
    id: 'projects',
    label: 'Projects',
    element: <ProjectSection />,
    classes:
      'bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 dark:from-orange-950 dark:via-red-950 dark:to-pink-950',
  },
  {
    id: 'contact',
    label: 'Contact',
    element: <ContactSection />,
    classes:
      'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950',
  },
];
