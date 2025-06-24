import { contacts, socials } from '@/components/config';
import { ContactInfo } from '@/components/common';

export const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white">
        Let's Work Together
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Have a project in mind? I'd love to hear about it. Let's create
        something amazing together.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <ContactInfo
            icon="📧"
            title="Email"
            info={contacts.find((contact) => contact.id === 'email')?.value ?? ""}
            bgColor="bg-blue-600"
          />
          <ContactInfo
            icon="💼"
            title="LinkedIn"
            info={socials.find((social) => social.id === 'linkedIn')?.url ?? ""}
            bgColor="bg-blue-700"
          />
          <ContactInfo
            icon="🐙"
            title="GitHub"
            info={socials.find((social) => social.id === 'github')?.url ?? ""}
            bgColor="bg-gray-800"
          />
          <ContactInfo
            icon="🐦"
            title="Twitter"
            info="@mxrkjxy"
            bgColor="bg-blue-400"
          />
        </div>
        <div className="space-y-4">
          <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Send Message
          </button>
          <button className="w-full px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
            Schedule a Call
          </button>
          <button className="w-full px-8 py-4 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-green-900 transition-all duration-300">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};
