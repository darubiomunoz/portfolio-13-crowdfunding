import styled from 'styled-components';

import { spacingSmall, spacingRegular, zIndexBackground, colorOption1, colorOption5, fontSizeRegular, borderRadiusExtraSmall, zIndexFixed } from '../variables';

const HomePageContainer = styled.main`
  width: 100%;
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${spacingRegular};
  position: relative;
  z-index: ${zIndexBackground};

  .skiplink {
    display: none;
  }

  .skiplink:focus,
  .skiplink:active {
    display: inline;
    width: fit-content;
    height: fit-content;
    padding: ${spacingSmall};
    position: fixed;
    top: ${spacingRegular};
    z-index: ${zIndexFixed};
    background-color: ${colorOption1};
    border-radius: ${borderRadiusExtraSmall};
    font-size: ${fontSizeRegular};
    color: ${colorOption5};
    cursor: pointer;
  }

  .homepage_background-container {
    width: 100%;
    height: auto;

    .homepage_background {
      width: inherit;
      height: inherit;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default HomePageContainer;