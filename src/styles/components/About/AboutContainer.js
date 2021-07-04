import styled from "styled-components";

import {
  borderRadiusSmall,
  boxShadow,
  colorOption3,
  fontSizeRegular,
  fontSizeSmall,
  fontWeightBold,
  spacingRegular,
  spacingSmall,  
  device,
  fontSizeNormal,
  fontSizeMedium,
  spacingNormal,
  maxWidth
} from "../../variables";

const AboutContainer = styled.section`
  width: 87%;
  max-width: ${maxWidth};
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  position: relative;
  top: -5rem;
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};

  @media ${device.width480} {
    padding: ${spacingNormal} ${spacingRegular};
    top: -7.5rem;
  }

  .about_title {
    font-size: ${fontSizeRegular};
    font-weight: ${fontWeightBold};

    @media ${device.width480} {
      font-size: ${fontSizeNormal};
    }

    @media ${device.width1024} {
      font-size: ${fontSizeMedium};
    }
  }

  .about_paragraph {
    margin-top: ${spacingSmall};
    font-size: ${fontSizeSmall};
    color: ${colorOption3};

    @media ${device.width480} {
      margin-top: ${spacingRegular};
      font-size: ${fontSizeRegular};
    }

    @media ${device.width1024} {
      font-size: ${fontSizeNormal};
      line-height: ${spacingRegular};
    }
  }
`;

export default AboutContainer;
