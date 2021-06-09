import styled from "styled-components";

import {
  borderRadiusSmall,
  boxShadow,
  colorOption1,
  colorOption3,
  colorOption5,
  fontSizeNormal,
  fontSizeSmall,
  fontWeightBold,
  spacingRegular,
  spacingSmall,
  device,
  fontSizeRegular,
  fontSizeMedium,
  spacingNormal
} from "../../variables";

const ProjectStatisticsContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  row-gap: ${spacingSmall};
  align-items: center;
  position: relative;
  top: -5rem;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};

  @media ${device.width480} {
    padding: ${spacingNormal} ${spacingRegular};
    row-gap: ${spacingRegular};
    top: -7.5rem;
  }

  .statistics_figure {
    font-size: ${fontSizeNormal};
    font-weight: ${fontWeightBold};
  }

  .statistics_subparagraph {
    font-size: ${fontSizeSmall};
    color: ${colorOption3};
  }

  .statistics_divisor {
    width: 26%;
    border-top: 0.1rem solid ${colorOption3};
  }

  .statistics_progressbar {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption3};

    .statistics_progress {
      width: 80%;
      height: inherit;
      border-radius: ${borderRadiusSmall};
      background-color: ${colorOption1};
    }
  }

  @media ${device.width480} {
    .statistics_figure {
      font-size: ${fontSizeMedium};
    }

    .statistics_subparagraph {
      font-size: ${fontSizeRegular};
    }
  }
`;

export default ProjectStatisticsContainer;
