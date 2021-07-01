import styled from 'styled-components';

import { spacingRegular, spacingNormal, zIndexNormal, device } from '../../variables';

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

   @media ${device.width1024} {
     padding: ${spacingNormal};
   }

  .navbar_image-container {
    width: 40%;
    height: auto;

    .navbar_image {
      width: 100%;
      height: auto;
    }
  }
`;

export default NavbarContainer;
 