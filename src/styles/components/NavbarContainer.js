import styled from 'styled-components';

import { zIndexNormal } from '../variables';

const NavbarContainer = styled.section`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndexNormal};

  img {
    width: 30%;
    height: auto;
  }
`;

export default NavbarContainer;