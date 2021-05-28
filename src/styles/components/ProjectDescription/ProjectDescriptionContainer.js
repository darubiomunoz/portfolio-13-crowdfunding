import styled from 'styled-components';

import { borderRadiusSmall, colorOption5, fontSizeSmall, fontSizeRegular, fontWeightBold, spacingSmall, fontWeightLight, colorOption3, spacingNormal } from '../../variables';

const ProjectDescriptionContainer = styled.section`
  width: 87%;
  padding: ${spacingSmall};
  position: relative;
  top: -30px;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};

  figure {
    img {
    }
  }

  article {
    display: flex;
    flex-direction: column;
    row-gap: ${spacingSmall};
    align-items: center;
    text-align: center;

    h1 {
      padding: 0 ${spacingNormal};
      font-size: ${fontSizeRegular};
      font-weight: ${fontWeightBold};
    }

    p {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightLight};
      color: ${colorOption3};
    }
  }
`;

export default ProjectDescriptionContainer;