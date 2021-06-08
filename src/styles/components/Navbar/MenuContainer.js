import styled from 'styled-components';

import { device } from '../../variables';

const MenuContainer = styled.div`
  width: fit-content;

  .navbar_icon-container {
    width: 12.5px;
    height: 12.5px;

    @media screen and ${device.width480} {
      width: 25px;
      height: 25px;
    }

    .navbar_icon {
      width: 100%;
      height: 100%;
    }
  }
`;

export default MenuContainer;
