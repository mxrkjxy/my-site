export const ProjectSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-green-400">
            Web Development
          </h3>
          <p className="text-gray-300 mb-6">
            Custom web applications built with the latest technologies including
            React, TypeScript, and Tailwind CSS.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• Responsive Design</li>
            <li>• Modern Frameworks</li>
            <li>• Performance Optimization</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            UI/UX Design
          </h3>
          <p className="text-gray-300 mb-6">
            Beautiful, intuitive designs that provide exceptional user
            experiences across all devices.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• User Research</li>
            <li>• Interactive Prototypes</li>
            <li>• Design Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
