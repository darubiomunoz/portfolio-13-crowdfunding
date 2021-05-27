import styled from 'styled-components';

import { spacingSmall, spacingRegular, zIndexNormal } from '../../variables';

const NavbarContainer = styled.section`
  width: 100%;
  height: auto;
  padding: ${spacingRegular};
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndexNormal};

  figure {
    width: 40%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default NavbarContainer;