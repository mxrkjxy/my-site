import { contacts } from '@/components/config';
import { Socials } from '@/components/common';

const Contacts = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Let's connect!</h4>
      <div className="space-y-2 text-gray-400">
        <Socials iconSize={20} />
        {contacts.map(({ id, value, href }) => (
          <p key={id}>
            <a href={href} className="hover:underline">
              {value}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
