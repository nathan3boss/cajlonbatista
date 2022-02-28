// Dependencies
import styled from 'styled-components';

// Components
import { TauFlex } from 'tauix/react';

export const HeaderContainer = styled(TauFlex)`
  width: 100%;
  min-height: 80px;
  padding: 0px 55px;

  justify-content: center;
  position: fixed;
  top: 0px;
  right: 0px;

  z-index: 10;

  > tau-icon {
    width: fit-content;
    height: fit-content;

    img {
      width: 60px;
      height: 60px;

      border-radius: 100%;
    }

    display: grid;
    place-items: center;

    color: var(--tau-primary);

    cursor: pointer;
  }

  tau-flex {
    align-items: stretch;

    tau-ripple {
      --tau-ripple: var(--tau-primary);
    }

    span {
      display: flex;
      align-items: center;

      height: 100%;

      font-size: 0.875em;
      font-weight: 700;
      text-transform: uppercase;
      font-family: 'Syne Mono', sans-serif;
      cursor: pointer;
      color: var(--tau-text);

      &.active {
        color: var(--tau-primary);
      }

      &:not(:last-child) {
        margin-right: 60px;

        @media (max-width: 700px) {
          margin-right: 30px;
        }
      }
    }

    div:first-child {
      display: grid;
      place-items: center;

      width: 40px;
      height: 40px;

      background: transparent;
      border: 1px solid var(--tau-border);
      border-radius: 5px;
      transition: all 0.15s;
      cursor: pointer;

      tau-icon {
        color: var(--tau-text);
      }

      &:hover {
        border-color: var(--tau-primary);
      }
    }
  }
`;
