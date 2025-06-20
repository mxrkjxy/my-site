import { Outlet } from 'react-router-dom';

import MainNavigation from '@/components/MainNavigation';
import Footer from '@/components/Footer';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
