type Social = {
  id: string;
  href: string;
};

type Contact = {
  id: string;
  value: string;
};

const usernames = [
  { id: 'linkedIn', username: 'user' },
  { id: 'github', username: 'user' },
  { id: 'hackerrank', username: 'user' },
  { id: 'instagram', username: 'user' },
];

const hrefTemplates: Record<string, (username: string) => string> = {
  linkedIn: (u) => `https://www.linkedin.com/in/${u}`,
  github: (u) => `https://github.com/${u}`,
  hackerrank: (u) => `https://www.hackerrank.com/profile/${u}`,
  instagram: (u) => `https://www.instagram.com/${u}`,
};

export const socials: Social[] = usernames.map(({ id, username }) => ({
  id,
  href: hrefTemplates[id](username),
}));

const contacts: Contact[] = [
  {
    id: 'email',
    value: 'user@gmail.com',
  },
  {
    id: 'phone',
    value: '09691234567',
  },
];

const contactHrefMap: Record<string, (value: string) => string> = {
  email: (v) => `mailto:${v}`,
  phone: (v) => `tel:${v}`,
  whatsapp: (v) => `https://wa.me/${v.replace(/\D/g, '')}`,
  telegram: (v) => `https://t.me/${v.replace(/^@/, '')}`,
};

export const getHref = (id: string, value: string): string =>
  contactHrefMap[id]?.(value) ?? '#';

export default contacts;
