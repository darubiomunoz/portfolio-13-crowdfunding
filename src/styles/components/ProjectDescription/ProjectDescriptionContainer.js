import styled from 'styled-components';

import { borderRadiusSmall, colorOption5, fontSizeSmall, fontSizeRegular, fontWeightBold, spacingSmall, fontWeightLight, colorOption3, spacingNormal, spacingRegular } from '../../variables';

const ProjectDescriptionContainer = styled.section`
  width: 87%;
  padding: ${spacingSmall};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -30px;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};

  figure {
    width: 35px;
    height: 35px;
    position: absolute;
    top: -17.5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  article {
    padding-top: ${spacingRegular};
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