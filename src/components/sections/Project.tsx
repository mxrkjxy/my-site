const projects = [
  {
    icon: '🚀',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    tech: ['React', 'Node.js', 'MongoDB'],
    gradient: 'bg-gradient-to-br from-pink-400 to-red-500',
  },
  {
    icon: '🎯',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    tech: ['Next.js', 'PostgreSQL', 'Socket.io'],
    gradient: 'bg-gradient-to-br from-green-400 to-blue-500',
  },
  {
    icon: '📱',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans',
    tech: ['React Native', 'Firebase', 'Redux'],
    gradient: 'bg-gradient-to-br from-purple-400 to-indigo-500',
  },
  {
    icon: '🎨',
    title: 'Design Portfolio',
    description: 'Creative portfolio showcasing UI/UX design work',
    tech: ['Figma', 'Framer', 'CSS'],
    gradient: 'bg-gradient-to-br from-orange-400 to-pink-500',
  },
  {
    icon: '🌐',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for business intelligence',
    tech: ['Vue.js', 'D3.js', 'Express'],
    gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
  },
  {
    icon: '🔒',
    title: 'Security Platform',
    description: 'Cybersecurity monitoring and threat detection system',
    tech: ['Python', 'Django', 'ML'],
    gradient: 'bg-gradient-to-br from-slate-400 to-gray-600',
  },
];

export const ProjectSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div
              className={`h-48 ${project.gradient} flex items-center justify-center relative`}
            >
              <div className="text-4xl text-white">{project.icon}</div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200">
                  View Project
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
