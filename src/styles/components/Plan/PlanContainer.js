import styled from 'styled-components';

import { borderRadiusExtraSmall, borderRadiusRegular, boxShadow, colorOption1, colorOption1_5, colorOption3, colorOption3_5, colorOption4_5, colorOption5, colorOption5_5, fontSizeMedium, fontSizeSmall, fontWeightBold, fontWeightNormal, spacingRegular, spacingSmall } from '../../variables';

const PlanContainer = styled.div`
  width: 100%;
  margin-top: ${spacingRegular};
  padding: ${spacingSmall};
  padding-bottom: ${spacingRegular};
  position: relative;
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

  .plan_title-disabled {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightBold};
    color: ${colorOption4_5};
  }

  .plan_subtitle-disabled {
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightNormal};
    color: ${colorOption1_5};
  }

  .plan_paragraph-disabled {
    margin-top: ${spacingRegular};
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightNormal};
    color: ${colorOption3_5};
  }

  .plan_counter-disabled {
    margin-top: ${spacingRegular};
    display: flex;
    align-items: center;

    .counter_number-disabled {
      font-size: ${fontSizeMedium};
      font-weight: ${fontWeightBold};
      color: ${colorOption4_5};
    }

    .counter_text-disabled {
      margin-left: ${spacingSmall};
      font-size: ${fontSizeSmall};
      color: ${colorOption3_5};
    }
  }

  .plan_button-disabled {
    margin-top: ${spacingRegular};
    padding: ${spacingSmall} ${spacingRegular};
    font-size: ${fontSizeSmall};
    border: none;
    border-radius: ${borderRadiusRegular};
    background-color: ${colorOption3_5};
    color: ${colorOption5};
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
`;

export default PlanContainer;