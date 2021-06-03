import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, colorOption1, colorOption3, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall, colorOption1_5, colorOption4_5, colorOption3_5 } from '../../variables';

const PledgeContainer = styled.label`
  padding: ${spacingSmall};
  display: flex;
  flex-direction: column;
  row-gap: ${spacingSmall};
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};

  :focus-within {
    border: .2rem solid ${colorOption1};
  }

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
`;

export default PledgeContainer;