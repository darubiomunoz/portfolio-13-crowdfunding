import styled from 'styled-components';

import { spacingSmall, spacingRegular, zIndexBackground, colorOption1, colorOption5, fontSizeRegular, borderRadiusExtraSmall, zIndexFixed, spacingExtraLarge } from '../variables';

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
    display: inline;
    width: fit-content;
    height: fit-content;
    padding: ${spacingSmall};
    position: fixed;
    top: ${`-${spacingExtraLarge}`};
    z-index: ${zIndexFixed};
    background-color: ${colorOption1};
    border-radius: ${borderRadiusExtraSmall};
    font-size: ${fontSizeRegular};
    color: ${colorOption5};
    cursor: pointer;
  }

  .skiplink:focus,
  .skiplink:active {
    top: ${spacingRegular};
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