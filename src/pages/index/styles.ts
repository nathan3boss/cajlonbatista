// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const IndexContainer = styled(TauPage)`
  padding: 17px 55px;
  padding-top: 85px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 0px 10px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    h1 {
      font-size: 2em;
      text-align: center;
      color: var(--tau-primary);

      margin: 0px;
      margin-bottom: 25px;
    }

    p {
      font-family: 'Syne Mono', sans-serif;
      color: var(--tau-text);
      font-size: 1em;
      margin-bottom: 20px;
      text-align: center;
    }

    tau-icon {
      width: fit-content;
      height: fit-content;
    }

    tau-button {
      cursor: pointer;
    }
  }
`;
