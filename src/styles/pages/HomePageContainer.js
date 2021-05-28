import styled from 'styled-components';

import { zIndexBackground } from '../variables';

const HomePageContainer = styled.main`
  width:100%;
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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