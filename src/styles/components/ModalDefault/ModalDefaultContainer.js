import styled from 'styled-components';

import { borderRadiusSmall, colorOption3, colorOption3_5, colorOption5, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall } from '../../variables';

const ModalDefaultContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorOption3_5};

  main {
    width: 90%;
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