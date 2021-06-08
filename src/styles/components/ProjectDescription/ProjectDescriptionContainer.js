import styled from 'styled-components';

import { borderRadiusSmall, colorOption5, fontSizeSmall, fontSizeRegular, fontWeightBold, spacingSmall, fontWeightLight, colorOption3, spacingNormal, spacingRegular, colorOption1, borderRadiusRegular, boxShadow, device } from '../../variables';

const ProjectDescriptionContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -50px;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};

  .description_image-container {
    width: 35px;
    height: 35px;
    position: absolute;
    top: -17.5px;

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
  }

  .description_button-container {
    width: 100%;
    margin-top: ${spacingRegular};
    display: flex;
    justify-content: space-between;
    align-items: center;

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
      width: 30px;
      height: 30px;
      background-color: transparent;

      .button_bookmark-icon {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default ProjectDescriptionContainer;