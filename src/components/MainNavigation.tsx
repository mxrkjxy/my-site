import MenuOption from '@/components/MenuOption';

const MENU_OPTIONS = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {MENU_OPTIONS.map((menu) => (
            <MenuOption key={menu} menuName={menu} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
