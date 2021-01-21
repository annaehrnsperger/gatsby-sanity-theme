import { createGlobalStyle } from 'styled-components';
import Lack from '../assets/fonts/lack-italic-webfont.woff2';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--font-1);
    color: var(--text-color);
    background: var(--bg-color);
    font-size: 10px;
  }

  body {
    font-size: var(--fontsize-1);
    line-height: var(--line-height);
  }

  /* Typography */

  @font-face {
    font-family: Lack;
    src: url(${Lack});
  }

  /* Images */

  .gatsby-image-wrapper {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }

  /* Scrollbar */

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Layout */

  .spacing-outer {
    margin: var(--v-spacing-S);
  }

  .spacing-inner {
    padding: var(--v-spacing-S);
  }

  .spacing-removed {
    margin-left: calc(var(--v-spacing-S) * -1);
    margin-bottom: calc(var(--v-spacing-S) * -1);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-cols), 1fr);
    gap: var(--spacing-XS);

    * {
      grid-column: 1 / calc(var(--grid-cols) + 1);
    }
  }

  .dark {
    color: var(--bg-color);
    background: var(--text-color);
  }

`;

export default GlobalStyles;
