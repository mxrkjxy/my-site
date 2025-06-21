import Navbar from '@/components/Navbar';
import MainBody from '@/components/MainBody';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-auto h-[calc(100vh-theme(height.24))]">
        <MainBody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
