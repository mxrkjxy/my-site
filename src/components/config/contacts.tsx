interface Contact {
  id: string;
  value: string;
}

interface ContactWithHref extends Contact {
  href: string;
}

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

export const contactsWithHref: ContactWithHref[] = contacts.map(
  ({ id, value }) => ({
    id,
    value,
    href: contactHrefMap[id]?.(value) ?? '#',
  })
);
