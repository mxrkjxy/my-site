import { Zap, Heart, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">About Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
          <p className="text-gray-300">
            Built with modern technologies for optimal performance and speed.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">User Focused</h3>
          <p className="text-gray-300">
            Every design decision is made with user experience in mind.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
          <Star className="h-12 w-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
          <p className="text-gray-300">
            We deliver nothing but the highest quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
