import styled from "styled-components";

import {
  spacingSmall,
  colorOption3_5,
  zIndexModal,
  colorOption5,
  borderRadiusSmall,
  spacingRegular,
  fontSizeRegular,
  fontWeightBold,
  fontSizeSmall,
  colorOption3,
  borderRadiusRegular,
  colorOption1,
  device,
  spacingNormal,
  fontSizeNormal
} from "../../variables";

const ModalSuccessContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: ${spacingSmall} 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorOption3_5};
  overflow-y: hidden;
  z-index: ${zIndexModal};

  @media ${device.width480} {
    padding: ${spacingRegular} 0;
  }

  .modalsuccess_body {
    width: 90%;
    height: fit-content;
    padding: ${spacingRegular};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${spacingSmall};
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    @media ${device.width480} {
      padding: ${spacingNormal};
      row-gap: ${spacingRegular};
    }

    .modalsuccess_image-container {
      width: 3rem;
      height: 3rem;
    }

    .modalsuccess_image {
      width: 100%;
      height: 100%;
    }

    .modalsuccess_title {
      font-size: ${fontSizeRegular};
      font-weight: ${fontWeightBold};
    }

    .modalsuccess_description {
      text-align: center;
      font-size: ${fontSizeSmall};
      color: ${colorOption3};
    }

    .modalsuccess_button {
      padding: ${spacingSmall} ${spacingRegular};
      border: none;
      border-radius: ${borderRadiusRegular};
      font-size: ${fontSizeSmall};
      background-color: ${colorOption1};
      color: ${colorOption5};
    }

    @media ${device.width480} {
      .modalsuccess_image-container {
        width: 5rem;
        height: 5rem;
      }

      .modalsuccess_title {
        font-size: ${fontSizeNormal};
      }

      .modalsuccess_description {
        font-size: ${fontSizeRegular};
      }

      .modalsuccess_button {
        font-size: ${fontSizeRegular};
      }
    }
  }
`;

export default ModalSuccessContainer;
