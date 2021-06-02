import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, colorOption1, colorOption3, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingSmall } from '../../variables';

const PledgeContainer = styled.label`
  padding: ${spacingSmall};
  display: flex;
  flex-direction: column;
  row-gap: ${spacingSmall};
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};

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

      .pledge_subtitle {
        font-size: ${fontSizeSmall};
        color: ${colorOption1};
      }
    }
  }

  .pledge_description {
    font-size: ${fontSizeSmall};
    color: ${colorOption3};
  }

  .pledge_availability {
    display: flex;
    column-gap: ${spacingSmall};

    .pledge_daysleft {
      font-size: ${fontSizeRegular};
      font-weight: ${fontWeightBold};
    }

    .availability_text {
      font-size: ${fontSizeSmall};
      color: ${colorOption3};
    }
  }
`;

export default PledgeContainer;