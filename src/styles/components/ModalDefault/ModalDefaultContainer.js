import styled from "styled-components";

import {
  borderRadiusSmall,
  colorOption3,
  colorOption3_5,
  colorOption5,
  fontSizeRegular,
  fontSizeSmall,
  fontWeightBold,
  spacingRegular,
  spacingSmall,
  zIndexModal,
  device,
  maxWidth,
  fontSizeNormal,
  fontSizeMedium,
  spacingNormal
} from "../../variables";

const ModalDefaultContainer = styled.div`
  width: 100vw;
  height: 100%;
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

  @media ${device.height730} {
    align-items: center;
  }

  .modaldefault {
    width: 90%;
    max-width: ${maxWidth};
    height: fit-content;
    padding: ${spacingRegular} ${spacingSmall};
    display: flex;
    flex-direction: column;
    row-gap: ${spacingSmall};
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    @media ${device.width480} {
      padding: ${spacingNormal} ${spacingRegular};
      row-gap: ${spacingRegular};
    }

    .modaldefault_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .default_title {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};

        @media ${device.width480} {
          font-size: ${fontSizeNormal};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeMedium};
        }
      }

      .modaldefault_container-image {
        width: 1rem;
        height: 1rem;
        cursor: pointer;

        @media ${device.width480} {
          width: 1.5rem;
          height: 1.5rem;
        }

        @media ${device.width1024} {
          width: 2rem;
          height: 2rem;
        }

        .modaldefault_image {
          width: 100%;
          height: 100%;
        }
      }
    }

    .default_subtitle {
      font-size: ${fontSizeSmall};
      color: ${colorOption3};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }
  }
`;

export default ModalDefaultContainer;
