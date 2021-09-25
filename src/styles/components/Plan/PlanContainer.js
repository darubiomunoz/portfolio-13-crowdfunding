import styled from "styled-components";

import {
  borderRadiusExtraSmall,
  borderRadiusRegular,
  boxShadow,
  colorOption1,
  colorOption1_5,
  colorOption3,
  colorOption3_5,
  colorOption4_5,
  colorOption5,
  fontSizeMedium,
  fontSizeSmall,
  fontWeightBold,
  fontWeightNormal,
  spacingRegular,
  spacingSmall,
  device,
  fontSizeRegular,
  fontSizeLarge,
  fontSizeNormal,
  fontSizeExtraLarge,
  spacingNormal,
  colorOption2,
} from "../../variables";

const PlanContainer = styled.div`
  width: 100%;
  margin-top: ${spacingRegular};
  padding: ${spacingSmall};
  padding-bottom: ${spacingRegular};
  position: relative;
  border-radius: ${borderRadiusExtraSmall};
  box-shadow: ${boxShadow};

  @media ${device.width480} {
    margin-top: ${spacingNormal};
    padding: ${spacingRegular};
    padding-bottom: ${spacingNormal};
  }

  .plan_titles-container {
    display: flex;
    flex-direction: column;

    @media ${device.width1024} {
      flex-direction: row;
      justify-content: space-between;
    }

    .plan_title,
    .plan_title-disabled {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightBold};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }

    .plan_title-disabled {
      color: ${colorOption4_5};
    }

    .plan_subtitle,
    .plan_subtitle-disabled {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightNormal};
      color: ${colorOption1};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }

    .plan_subtitle-disabled {
      color: ${colorOption1_5};
    }
  }

  .plan_paragraph,
  .plan_paragraph-disabled {
    margin-top: ${spacingRegular};
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightNormal};
    color: ${colorOption3};

    @media ${device.width480} {
      margin-top: ${spacingNormal};
      font-size: ${fontSizeRegular};
    }

    @media ${device.width1024} {
      font-size: ${fontSizeNormal};
    }
  }

  .plan_paragraph-disabled {
    color: ${colorOption3_5};
  }

  .plan_interaction-container {
    display: flex;
    flex-direction: column;

    @media ${device.width1024} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .plan_counter,
    .plan_counter-disabled {
      margin-top: ${spacingRegular};
      display: flex;
      align-items: center;

      @media ${device.width480} {
        margin-top: ${spacingNormal};
      }

      .counter_number,
      .counter_number-disabled {
        font-size: ${fontSizeMedium};
        font-weight: ${fontWeightBold};

        @media ${device.width480} {
          font-size: ${fontSizeLarge};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeExtraLarge};
        }
      }

      .counter_text,
      .counter_text-disabled {
        margin-left: ${spacingSmall};
        font-size: ${fontSizeSmall};
        color: ${colorOption3};

        @media ${device.width480} {
          margin-left: ${spacingRegular};
          font-size: ${fontSizeRegular};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeNormal};
        }
      }
    }

    .plan_counter-disabled {
      .counter_number-disabled {
        color: ${colorOption4_5};
      }

      .counter_text-disabled {
        color: ${colorOption3_5};
      }
    }

    .plan_button,
    .plan_button-disabled {
      width: fit-content;
      margin-top: ${spacingRegular};
      padding: ${spacingSmall} ${spacingRegular};
      font-size: ${fontSizeSmall};
      border: none;
      border-radius: ${borderRadiusRegular};
      background-color: ${colorOption1};
      color: ${colorOption5};
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: ${colorOption2};
      }

      @media ${device.width480} {
        margin-top: ${spacingNormal};
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }

    .plan_button-disabled {
      background-color: ${colorOption3_5};
    }

    .screen {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
    }
  }
`;

export default PlanContainer;
