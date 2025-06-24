import { Zap, Heart, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate front-end web developer (also a full-stack enthusiast) with almost 5 years of experience
            creating digital solutions that bridge the gap between design and
            functionality. I specialize in React, Node.js, and modern web
            technologies.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            creating personal projects, or sharing my knowledge
            through writing and mentoring.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'TypeScript',
              'Node.js',
              'Python',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-white text-center">
              <div className="text-4xl mb-4">👨‍💻</div>
              <div className="text-2xl font-bold">~5 Years</div>
              <div className="text-lg">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
