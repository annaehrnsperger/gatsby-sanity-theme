import { createGlobalStyle } from 'styled-components';

const Normalize = createGlobalStyle`

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    line-height: 1;
    -webkit-text-size-adjust: 100%;
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
    text-transform: none;
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 0;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  textarea {
    border-radius: 0;
    background: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  button:focus, input:focus, textarea:focus {
    outline: 1px solid lightgray;
  }

  button:disabled {
    opacity: 0.5;
    cursor: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  figure {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  p {
    margin: 0;
  }

`;

export default Normalize;
