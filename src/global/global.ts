// Dependencies
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

    font-family: var(--tau-font-family);
    text-decoration: none;
  }

  tau-theme {
    font-size: var(--tau-font-size);
  }
`;
