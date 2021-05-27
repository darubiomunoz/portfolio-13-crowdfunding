import styled from 'styled-components';

import { zIndexBackground } from '../variables';

const HomePageContainer = styled.main`
  width:100%;
  max-width: 100vw;
  height: auto;
  position: relative;
  z-index: ${zIndexBackground};

  picture {
    width: 100%;
    height: auto;

    img {
      width: inherit;
      height: inherit;
    }
  }
`;

export default HomePageContainer;