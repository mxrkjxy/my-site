import MainNavigation from '@/components/MainNavigation';
import Footer from '@/components/Footer';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1> An error occured </h1>
        <p> Page not found </p>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
