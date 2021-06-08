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
  fontSizeNormal
} from "../../variables";

const AboutContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  position: relative;
  top: -5rem;
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};

  @media ${device.width480} {
    top: -7.5rem;
  }

  .about_title {
    font-size: ${fontSizeRegular};
    font-weight: ${fontWeightBold};
  }

  .about_paragraph {
    margin-top: ${spacingSmall};
    font-size: ${fontSizeSmall};
    color: ${colorOption3};
  }

  @media ${device.width480} {
    .about_title {
      font-size: ${fontSizeNormal};
    }

    .about_paragraph {
      font-size: ${fontSizeRegular};
    }
  }
`;

export default AboutContainer;
