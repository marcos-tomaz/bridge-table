import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.05rem;
  }

  html,
  body,
  #root {
    overflow: hidden;
    background-color: #3a4187;
    background-image: url('https://www.transparenttextures.com/patterns/classy-fabric.png');
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    line-height: 1;
  }

  ul,
  ol {
    list-style: none;
  }

  button,
  input {
    overflow: unset;
    outline: none;
    border: none;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button:not([disabled]) {
    cursor: pointer;
  }
`;

export default createGlobalStyle`
  ${globalStyles}
`;
