// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const ContactContainer = styled(TauPage)`
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    a {
      text-decoration: none;
    }

    tau-icon {
      width: 50px;
      height: 50px;

      display: grid;
      place-items: center;

      color: var(--tau-border);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: var(--tau-primary);
      }
    }
  }
`;
