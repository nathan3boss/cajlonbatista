// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { TauTheme } from 'tauix/react';

// Components
import Router from '../routes/routes';

// Utils
import { APP } from '../store/store';
import { setTheme } from '../store/actions/actions';

// Styles
import { GlobalStyle } from '../global/global';
import { Themes } from '../global/themes';

const App = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: APP) => state);

  const toggleTheme = (e: CustomEvent) => dispatch(setTheme(e.detail.current));

  return (
    <TauTheme theme={theme} onTauLimn={toggleTheme}>
      <Themes />

      <Router />
      
      <GlobalStyle />
    </TauTheme>
  );
};

export default App;
