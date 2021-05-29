import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, colorOption3, fontSizeRegular, fontSizeSmall, fontWeightBold, spacingRegular, spacingSmall } from '../../variables';

const AboutContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};

  .about_title {
    font-size: ${fontSizeRegular};
    font-weight: ${fontWeightBold};
  }

  .about_paragraph {
    margin-top: ${spacingSmall};
    font-size: ${fontSizeSmall};
    color: ${colorOption3};
  }
`;

export default AboutContainer;