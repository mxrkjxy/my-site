import { NavLink } from 'react-router-dom';

interface MenuOptionProps {
  menuName: string;
}

const MenuOption = ({ menuName }: MenuOptionProps) => {
  const isHomePage = menuName.toUpperCase() === 'HOME';
  const routeName = isHomePage ? '' : menuName.toLowerCase();

  return (
    <li>
      <NavLink
        to={routeName}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        {...(isHomePage ? { end: true } : {})}
      >
        {menuName}
      </NavLink>
    </li>
  );
};

export default MenuOption;
