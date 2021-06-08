import styled from 'styled-components';

import { borderRadiusSmall, colorOption5, fontSizeSmall, fontSizeRegular, fontSizeNormal, fontWeightBold, spacingSmall, fontWeightLight, colorOption3, spacingNormal, spacingRegular, colorOption1, borderRadiusRegular, boxShadow, device } from '../../variables';

const ProjectDescriptionContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -7.5rem;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};

  .description_image-container {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;

    .description_image {
      width: 100%;
      height: 100%;
    }
  }

  .description_info-container {
    padding-top: ${spacingSmall};
    display: flex;
    flex-direction: column;
    row-gap: ${spacingSmall};
    align-items: center;
    text-align: center;

    .description_title {
      padding: 0 ${spacingNormal};
      font-size: ${fontSizeRegular};
      font-weight: ${fontWeightBold};
    }

    .description_text {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightLight};
      color: ${colorOption3};
    }

    @media screen and ${device.width480} {
      .description_title {
        font-size: ${fontSizeNormal};
      }

      .description_text {
        font-size: ${fontSizeRegular};
      }
    }
  }

  .description_button-container {
    width: 100%;
    margin-top: ${spacingRegular};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and ${device.width320} {
      justify-content: space-evenly;
    }

    button {
      border: none;
    }

    .button_backthisproject {
      padding: ${spacingSmall} ${spacingNormal};
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightBold};
      border-radius: ${borderRadiusRegular};
      background-color: ${colorOption1};
      color: ${colorOption5};
    }

    .button_bookmark {
      width: 3rem;
      height: 3rem;
      background-color: transparent;

      .button_bookmark-icon {
        width: 100%;
        height: 100%;
      }
    }

    @media screen and ${device.width480} {
      .button_backthisproject {
        font-size: ${fontSizeRegular};
      }

      .button_bookmark {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

export default ProjectDescriptionContainer;
