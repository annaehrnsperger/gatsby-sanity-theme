import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`

  :root {
    /* Colors */

    /* Spacing */
    --sp-0: 0.1rem;
    --sp-1: 1rem;
    --sp-2: 2rem;
    --sp-3: 3rem;
    --sp-5: 5rem;
    --sp-8: 8rem;
    --sp-13: 13rem;
    --sp-21: 21rem;
    --sp-34: 21rem;

    /* Variable Spacing */
    /* Clamp Fallback */ --sp-1-3: var(--sp-2);
    --sp-1-3: clamp(var(--sp-1), 3vw, var(--sp-3));
    /* Clamp Fallback */ --sp-3-5: calc(var(--sp-5) - var(--sp-1));
    --sp-3-5: clamp(var(--sp-3), 3vw, var(--sp-5));
    /* Clamp Fallback */ --sp-5-8: calc(var(--sp-8) - var(--sp-2));
    --sp-5-8: clamp(var(--sp-5), 4vw, var(--sp-8));
    /* Clamp Fallback */ --sp-8-13: calc(var(--sp-13) - var(--sp-3));
    --sp-8-13: clamp(var(--sp-8), 5vw, var(--sp-13));
    /* Clamp Fallback */ --sp-8-13: calc(var(--sp-21) - var(--sp-5));
    --sp-13-21: clamp(var(--sp-13), 6vw, var(--sp-21));

    /* Fonts */
    --f-sans: 'Lack', sans-serif;

    /* Font Sizes */
    /* Clamp Fallback */ --fs-hl: calc(30px + (60 - 30) * (100vw - 375px) / (2560 - 375));
    --fs-hl: clamp(3rem, 5vw, 6rem);
    /* Clamp Fallback */ --fs-copy: calc(15px + (30 - 15) * (100vw - 375px) / (2560 - 375));
    --fs-copy: clamp(1.5rem, 3vw, 3rem);

    /* Font Settings */
    --ls: 0.01rem;
    --lh: 1.2;
    --lh-hl: 1.5;
    --lh-copy: 1;

    /* Border */
    --brd-width: 1px;
    --brd: var(--border-width) solid var(--text-color);

    /* Layout */
    --g-cols: 2;
    --g-gap: var(--sp-3);

    /* Misc */
  }
`;

export default Variables;
