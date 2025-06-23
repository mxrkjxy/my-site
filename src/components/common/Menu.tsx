import { homeSections } from '@/components/config';
import { NavButton } from '@/components/common';

type MenuOptionsProps = {
  activeSection: string;
  onClick: (id: string) => void;
};

export const MenuOptions: React.FC<MenuOptionsProps> = ({
  activeSection,
  onClick,
}) => {
  return (
    <>
      {homeSections.map(({ id, label }) => (
        <NavButton
          key={id}
          id={id}
          activeSection={activeSection}
          label={label}
          clickHandler={() => onClick(id)}
        />
      ))}
    </>
  );
};
