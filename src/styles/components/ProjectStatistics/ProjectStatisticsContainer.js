import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, colorOption1, colorOption2, colorOption3, colorOption5, fontSizeNormal, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingRegular, spacingSmall } from '../../variables';

const ProjectStatisticsContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  row-gap: ${spacingSmall};
  align-items: center;
  position: relative;
  top: -50px;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};

  .figure {
    font-size: ${fontSizeNormal};
    font-weight: ${fontWeightBold};
  }

  .sub-paragraph {
    font-size: ${fontSizeSmall};
    color: ${colorOption3};
  }

  .divisor {
    width: 26%;
    border-top: 0.1rem solid ${colorOption3};
  }

  .progress-bar {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption3};

    span {
      width: 80%;
      height: inherit;
      border-radius: ${borderRadiusSmall};
      background-color: ${colorOption1};
    }
  }
`;

export default ProjectStatisticsContainer;