// Dependencies
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TauDrawer, TauFlex, TauIcon, TauRipple } from 'tauix/react';

// Components
import { useDispatch, useSelector } from 'react-redux';

// Styles
import { HeaderContainer } from './styles';

// Utils
import { setTheme } from '../../store/actions/actions';
import { APP } from '../../store/store';

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
  const [drawer, setDrawer] = useState(false);

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

  const onCloseDrawer = () => setDrawer(false);

  return (
    <HeaderContainer>
      <TauFlex>
        <span className="route">{location.pathname.split('/')[1]}</span>

        {links.map(({ title, path }) => (
          <span
            key={path}
            onClick={() => navigate(path)}
            className={location.pathname.includes(path) ? 'active' : ''}
          >
            {title}
          </span>
        ))}

        <TauIcon onClick={() => setDrawer(true)} name="menu" />
      </TauFlex>

      <TauDrawer onTauClose={() => onCloseDrawer()} open={drawer}>
        <TauFlex>
          {links.map(({ title, path }) => (
            <span
              key={path}
              onClick={() => {
                navigate(path);

                onCloseDrawer();
              }}
              className={location.pathname.includes(path) ? 'active' : ''}
            >
              {title}
            </span>
          ))}
        </TauFlex>
      </TauDrawer>
    </HeaderContainer>
  );
};

export default Header;
