type Usernames = {
  id: string;
  username: string;
};

type Social = {
  id: string;
  href: string;
};

const usernames: Usernames[] = [
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
