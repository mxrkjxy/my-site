import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import '@/App.css';

import RootLayout from './pages/Root';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ExperiencePage from '@/pages/Experience';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import ErrorPage from '@/pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
