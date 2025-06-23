import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHackerrank,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

import { socials } from '@/components/config';

interface SocialsProps {
  iconSize?: number;
}

const iconMap: Record<string, IconType> = {
  linkedIn: FaLinkedin,
  github: FaGithub,
  hackerrank: FaHackerrank,
  instagram: FaInstagram,
};

export const Socials: React.FC<SocialsProps> = ({ iconSize }) => {
  return (
    <div className="flex gap-3">
      {socials.map(({ id, href }) => {
        const Icon = iconMap[id];
        return (
          Icon && (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={iconSize} />
            </a>
          )
        );
      })}
    </div>
  );
};
