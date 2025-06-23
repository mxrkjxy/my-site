interface WithId {
  id: string;
}

interface Usernames extends WithId {
  username: string;
}

interface Social extends WithId {
  href: string;
}

const usernames: Usernames[] = [
  { id: 'linkedIn', username: 'markjaycada' },
  { id: 'github', username: 'mxrkjxy' },
  { id: 'hackerrank', username: 'mxrkjxy' },
  { id: 'instagram', username: 'mxrkjxy' },
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
