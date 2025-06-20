import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ExperiencePage from '@/pages/Experience';
import ProjectsPage from '@/pages/Projects';
import ContactPage from '@/pages/Contact';

const sections = [
  { id: 'home', label: 'Home', element: <HomePage /> },
  { id: 'about', label: 'About', element: <AboutPage /> },
  { id: 'experience', label: 'Experience', element: <ExperiencePage /> },
  { id: 'projects', label: 'Projects', element: <ProjectsPage/> },
  { id: 'contact', label: 'Contact', element: <ContactPage /> },
];

export default sections;