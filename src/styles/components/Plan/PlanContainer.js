import styled from 'styled-components';

import { borderRadiusExtraSmall, borderRadiusRegular, boxShadow, colorOption1, colorOption3, colorOption5, fontSizeMedium, fontSizeSmall, fontWeightBold, fontWeightNormal, spacingRegular, spacingSmall } from '../../variables';

const PlanContainer = styled.div`
  width: 100%;
  margin-top: ${spacingRegular};
  padding: ${spacingSmall};
  padding-bottom: ${spacingRegular};
  border-radius: ${borderRadiusExtraSmall};
  box-shadow: ${boxShadow};

  .plan_title {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightBold};
  }

  .plan_subtitle {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightNormal};
    color: ${colorOption1};
  }

  .plan_paragraph {
    margin-top: ${spacingRegular};
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightNormal};
    color: ${colorOption3};
  }

  .plan_counter {
    margin-top: ${spacingRegular};
    display: flex;
    align-items: center;

    .counter_number {
      font-size: ${fontSizeMedium};
      font-weight: ${fontWeightBold};
    }

    .counter_text {
      margin-left: ${spacingSmall};
      font-size: ${fontSizeSmall};
      color: ${colorOption3};
    }
  }

  .plan_button {
    margin-top: ${spacingRegular};
    padding: ${spacingSmall} ${spacingRegular};
    font-size: ${fontSizeSmall};
    border: none;
    border-radius: ${borderRadiusRegular};
    background-color: ${colorOption1};
    color: ${colorOption5};
  }
`;

export default PlanContainer;