import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ExperiencePage from '@/pages/Experience';
import ProjectsPage from '@/pages/Projects';
import ContactPage from '@/pages/Contact';

const sections = [
  // { id: 'home', element: <HomePage /> },
  { id: 'about', element: <AboutPage /> },
  { id: 'experience', element: <ExperiencePage /> },
  { id: 'projects', element: <ProjectsPage/> },
  { id: 'contact', element: <ContactPage /> },
];

export default sections;