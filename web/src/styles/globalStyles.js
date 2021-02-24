import { createGlobalStyle } from 'styled-components';
import Lack from '../assets/fonts/lack-italic-webfont.woff2';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--f-sans);
    color: var(--c-text);
    background: var(--c-bg);
    font-size: 10px;
  }

  body {
    font-size: var(--fs-copy);
    line-height: var(--lh);
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

  .sp-outer {
    margin: var(--sp-3-5);
  }

  .sp-inner {
    padding: var(--sp-3-5);
  }

  .sp-removed {
    margin-left: calc(var(--sp-3-5) * -1);
    margin-bottom: calc(var(--sp-3-5) * -1);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--g-cols), 1fr);
    gap: var(--sp-2);

    * {
      grid-column: 1 / calc(var(--g-cols) + 1);
    }
  }

  .dark {
    color: var(--c-bg);
    background: var(--c-text);
    transition: all 0.3s ease-out;
  }

  .light {
    color: var(--c-text);
    background: var(--c-bg);
    transition: all 0.3s ease-out;
  }

`;

export default GlobalStyles;
