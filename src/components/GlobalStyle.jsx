import { Global, css } from '@emotion/react';
import 'modern-normalize';

const reset = `
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  margin: 50px 0;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p,
b,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}
ul,
ol {
    margin: 0;
    padding-left: 0;
}
a,
label,
span,
b {
    text-decoration: none;
    display: block;
}
button {
    cursor: pointer;
    font-family: inherit;
    padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

const customStyles = `
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
}
`;

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${customStyles}
      `}
    />
  );
};
