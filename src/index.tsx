// Dependencies
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './app/app';

// Utils
import { store } from './store/store';

const ion = document.querySelector('ion');

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  ion
);
