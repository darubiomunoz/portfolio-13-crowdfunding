import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, colorOption1, colorOption3, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall, colorOption1_5, colorOption4_5, colorOption3_5, fontWeightNormal, colorOption5, borderRadiusRegular, spacingRegular } from '../../variables';

const PledgeContainer = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};
  border: ${(props) => (props.border ? `0.2rem solid ${colorOption1}` : `none`)};

  .pledge_body {
    padding: ${spacingSmall};
    display: flex;
    flex-direction: column;
    row-gap: ${spacingSmall};

    .pledge_header {
      display: flex;
      align-items: center;

      .header_titles {
        margin-left: ${spacingSmall};
        display: flex;
        flex-direction: column;

        .pledge_title {
          font-size: ${fontSizeSmall};
          font-weight: ${fontWeightBold};
        }

        .pledge_title-disabled {
          font-size: ${fontSizeSmall};
          font-weight: ${fontWeightBold};
          color: ${colorOption4_5};
        }

        .pledge_subtitle {
          font-size: ${fontSizeSmall};
          color: ${colorOption1};
        }

        .pledge_subtitle-disabled {
          font-size: ${fontSizeSmall};
          color: ${colorOption1_5};
        }
      }
    }

    .pledge_description {
      font-size: ${fontSizeSmall};
      color: ${colorOption3};
    }

    .pledge_description-disabled {
      font-size: ${fontSizeSmall};
      color: ${colorOption3_5};
    }

    .pledge_availability {
      display: flex;
      column-gap: ${spacingSmall};

      .pledge_daysleft {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};
      }

      .pledge_daysleft-disabled {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};
        color: ${colorOption4_5};
      }

      .availability_text {
        font-size: ${fontSizeSmall};
        color: ${colorOption3};
      }

      .availability_text-disabled {
        font-size: ${fontSizeSmall};
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
      }

      .fields_button-pledge {
        padding: ${spacingSmall} ${spacingRegular};
        border: none;
        border-radius: ${borderRadiusRegular};
        font-size: ${fontSizeSmall};
        background-color: ${colorOption1};
        color: ${colorOption5};
      }
    }
  }
`;

export default PledgeContainer;