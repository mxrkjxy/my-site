import { useNavigate, useLocation } from 'react-router-dom';

import { BASE_PATH } from '@/config';
import { homeSections } from '@/components/config';
import { NavButton } from '@/components/common';

interface MenuOptionsProps {
  activeSection: string;
  onClick: (id: string) => void;
}

export const MenuOptions: React.FC<MenuOptionsProps> = (props) => {
  const { activeSection, onClick } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {pathname === `${BASE_PATH}/blog` ? (
        <>
          <NavButton
            id="Home"
            activeSection=""
            label="Home"
            clickHandler={() => navigate(`${BASE_PATH}`)}
          />
          <NavButton
            id="Blog"
            activeSection="Blog"
            label="Blog"
            clickHandler={() => navigate('blog')}
          />
        </>
      ) : (
        homeSections.map(({ id, label }) => (
          <NavButton
            key={id}
            id={id}
            activeSection={activeSection}
            label={label}
            clickHandler={() => onClick(id)}
          />
        ))
      )}
    </>
  );
};
