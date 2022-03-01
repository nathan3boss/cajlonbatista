// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const AboutContainer = styled(TauPage)`
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
  }
`;
