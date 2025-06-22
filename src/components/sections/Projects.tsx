import { Star, Users } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">What People Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-4 italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem
            labore, perspiciatis beatae tenetur fuga illo incidunt mollitia
            eaque suscipit, et quia esse, iusto vitae. Dicta aliquam doloremque
            assumenda voluptas!"
          </p>
          <div className="flex items-center justify-center">
            <Users className="h-8 w-8 text-blue-400 mr-3" />
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-400">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-4 italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            quibusdam perferendis? Fugit, ut eveniet? Pariatur repellendus
            laborum cum! Repellendus, sit pariatur earum maxime aperiam quasi
            libero beatae optio? Rem, neque?"
          </p>
          <div className="flex items-center justify-center">
            <Users className="h-8 w-8 text-green-400 mr-3" />
            <div>
              <p className="font-semibold">Mike Chen</p>
              <p className="text-sm text-gray-400">Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
