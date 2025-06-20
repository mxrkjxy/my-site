import Navbar from '@/components/Navbar';
import MainBody from '@/components/MainBody';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
