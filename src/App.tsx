import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BASE_PATH } from '@/config';
import { RootLayout } from '@/components/layout';
import { HomePage, ErrorPage, BlogPage } from './components/pages';

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'blog',
        element: <BlogPage />,
        children: [{}],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
