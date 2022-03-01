// Dependencies
import styled from 'styled-components';

// Components
import { TauPage } from 'tauix/react';

export const ProjectsContainer = styled(TauPage)`
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

    section {
      width: 300px;
      height: fit-content;

      border: 1px solid var(--tau-border);
      transition: all 0.3s;
      border-radius: 10px;
      cursor: pointer;
      padding: 20px;

      h1 {
        color: var(--tau-primary);
        margin-bottom: 20px;
      }

      span {
        font-family: 'Syne Mono', sans-serif;
        color: var(--tau-text);
        font-size: 0.9em;
        margin: 20px 0px;
        text-align: center;
      }

      &:hover {
        border-color: var(--tau-primary);
      }
    }
  }
`;
