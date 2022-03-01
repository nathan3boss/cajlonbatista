// Dependencies
import { createGlobalStyle } from 'styled-components';

export const Themes = createGlobalStyle`
  .tau-light {
    --tau-primary: #F26440;
    --tau-hover: #F26440;
    --tau-focus: #F26440;
    --tau-text: #3b3d4c90;
    --tau-border: #3b3d4c47;
    --tau-placeholder: #888CB0;
    --tau-card: rgba(255, 255, 255, 0.02);
    --tau-background: #fcfcfc;
    --tau-foreground: #fcfcfc;
    --tau-page: #fcfcfc;
    --tau-font-family: 'Shizuru', sans-serif;
    --tau-letter-spacing: 0.4px;
    --tau-font-size: 120%;
    --tau-radius: 5px;
  }
`;
