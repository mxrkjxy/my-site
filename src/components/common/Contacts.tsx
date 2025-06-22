import contacts, { getHref } from '@/components/config/contacts';
import Socials from '@/components/common/Socials';

const Contacts = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Let's connect!</h4>
      <div className="space-y-2 text-gray-400">
        <Socials iconSize={20} />
        {contacts.map(({ id, value }) => (
          <p key={id}>
            <a
              href={getHref(id, value)}
              className="hover:underline"
            >
              {value}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
