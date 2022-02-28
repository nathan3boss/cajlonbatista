// Dependencies
import { TauButton, TauFlex, TauIcon, TauRipple } from 'tauix/react';

// Components
import { useDispatch, useSelector } from 'react-redux';

// Styles
import { HeaderContainer } from './styles';

// Utils
import { setTheme } from '../../store/actions/actions';
import { APP } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const links = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'Projects',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/contact',
    title: 'Contact',
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { theme } = useSelector((state: APP) => state);

  const toggleTheme = (e: string) => dispatch(setTheme(e));

  const themeButton = (
    <TauRipple
      onClick={() =>
        toggleTheme(theme == 'tau-light' ? 'tau-dark' : 'tau-light')
      }
    >
      <div>
        <TauIcon fill="solid" name={theme == 'tau-light' ? 'moon' : 'sun'} />
      </div>
    </TauRipple>
  );

  return (
    <HeaderContainer>
      <TauFlex>
        {links.map(({ title, path }) => (
          <span
            key={path}
            onClick={() => navigate(path)}
            className={location.pathname.includes(path) ? 'active' : ''}
          >
            {title}
          </span>
        ))}
      </TauFlex>
    </HeaderContainer>
  );
};

export default Header;
