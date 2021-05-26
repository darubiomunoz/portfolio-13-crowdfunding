import { createGlobalStyle } from 'styled-components';

import { fontFamily } from './variables'

const GlobalStyle =createGlobalStyle`
*{
  font-size: 62.5%;
  font-family: fontFamily;
  box-sizing: border-box;
}
`;

export default GlobalStyle;