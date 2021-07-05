import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, device, colorOption1, colorOption3, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall, colorOption1_5, colorOption4_5, colorOption3_5, fontWeightNormal, colorOption5, borderRadiusRegular, spacingRegular, colorOption2, fontSizeNormal, fontSizeMedium } from '../../variables';

const PledgeContainer = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};
  border: ${(props) =>
    props.border ? `0.2rem solid ${colorOption1}` : `none`};

  .pledge_body {
    padding: ${spacingSmall};
    display: flex;
    flex-direction: column;
    row-gap: ${spacingSmall};
    position: relative;

    @media ${device.width480} {
      row-gap: ${spacingRegular};
    }

    .pledge_header {
      display: flex;
      align-items: center;

      .header_titles {
        margin-left: ${spacingSmall};
        display: flex;
        flex-direction: column;

        .pledge_radiobutton {
          background-color: ${colorOption1};
        }

        .pledge_title,
        .pledge_title-disabled {
          font-size: ${fontSizeSmall};
          font-weight: ${fontWeightBold};
          cursor: pointer;

          &:hover {
            color: ${colorOption2};
          }

          @media ${device.width480} {
            font-size: ${fontSizeRegular};
          }

          @media ${device.width1024} {
            font-size: ${fontSizeNormal};
          }
        }

        .pledge_title-disabled {
          color: ${colorOption4_5};
          cursor: default;

          &:hover {
            color: ${colorOption4_5};
          }
        }

        .pledge_subtitle,
        .pledge_subtitle-disabled {
          font-size: ${fontSizeSmall};
          color: ${colorOption1};

          @media ${device.width480} {
            font-size: ${fontSizeRegular};
          }

          @media ${device.width1024} {
            font-size: ${fontSizeNormal};
          }
        }

        .pledge_subtitle-disabled {
          color: ${colorOption1_5};
        }
      }
    }

    .pledge_description,
    .pledge_description-disabled {
      font-size: ${fontSizeSmall};
      color: ${colorOption3};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
        line-height: 2rem;
      }
    }

    .pledge_description-disabled {
      color: ${colorOption3_5};
    }

    .pledge_availability {
      display: flex;
      column-gap: ${spacingSmall};

      @media ${device.width1024} {
        position: absolute;
        top: 2rem;
        right: 2rem;
      }

      .pledge_daysleft,
      .pledge_daysleft-disabled {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};

        @media ${device.width480} {
          font-size: ${fontSizeNormal};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeMedium};
        }
      }

      .pledge_daysleft-disabled {
        color: ${colorOption4_5};
      }

      .availability_text,
      .availability_text-disabled {
        font-size: ${fontSizeSmall};
        color: ${colorOption3};

        @media ${device.width480} {
          font-size: ${fontSizeRegular};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeNormal};
          line-height: 2rem;
        }
      }

      .availability_text-disabled {
        color: ${colorOption3_5};
      }
    }
  }

  .disappear {
    display: none;
  }

  .pledge_footer {
    width: 100%;
    padding: ${spacingSmall};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${spacingSmall};
    border-top: 0.1rem solid ${colorOption3_5};

    .footer_title-pledge {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightNormal};
      color: ${colorOption3};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }

    .footer_fields {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      .fields_amount-pledge {
        width: 40%;
        padding: ${spacingSmall} ${spacingRegular};
        border: 0.1rem solid ${colorOption3_5};
        border-radius: ${borderRadiusRegular};
        font-size: ${fontSizeSmall};
        font-weight: ${fontWeightBold};
        background-color: transparent;
        outline: none;

        @media ${device.width480} {
          font-size: ${fontSizeRegular};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeNormal};
        }
      }

      .fields_button-pledge {
        padding: ${spacingSmall} ${spacingRegular};
        border: none;
        border-radius: ${borderRadiusRegular};
        font-size: ${fontSizeSmall};
        background-color: ${colorOption1};
        color: ${colorOption5};
        cursor: pointer;

        &:hover {
          background-color: ${colorOption2};
        }

        @media ${device.width480} {
          font-size: ${fontSizeRegular};
        }

        @media ${device.width1024} {
          font-size: ${fontSizeNormal};
        }
      }
    }
  }
`;

export default PledgeContainer;