import styled from 'styled-components';

import { borderRadiusSmall, colorOption3, colorOption3_5, colorOption5, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall, zIndexModal } from '../../variables';

const ModalDefaultContainer = styled.div`
  width: 100vw;
  height: fit-content;
  max-height: 100vh;
  padding: ${spacingSmall} 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: ${colorOption3_5};
  overflow-y: auto;
  z-index: ${zIndexModal};

  main {
    width: 90%;
    max-height: fit-content;
    padding: ${spacingSmall};
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .default_title {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};
      }

      figure {
        width: 10px;
        height: 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .default_subtitle {
      margin-top: ${spacingSmall};
      font-size: ${fontSizeSmall};
      color: ${colorOption3};
    }
  }
`;

export default ModalDefaultContainer;