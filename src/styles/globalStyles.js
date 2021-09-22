import { createGlobalStyle } from 'styled-components';

import { normalize } from 'styled-normalize';

import { fontFamily, colorOption4 } from './variables'

const GlobalStyle = createGlobalStyle`
${normalize}

*{
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: ${fontFamily};
  line-height: 1.55rem;
  box-sizing: border-box;

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colorOption4};
  }

  body {
    position: relative;
  }
}
`;

export default GlobalStyle;