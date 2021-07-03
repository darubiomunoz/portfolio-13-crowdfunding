import styled from "styled-components";

import {
  borderRadiusSmall,
  colorOption5,
  fontSizeSmall,
  fontSizeRegular,
  fontSizeNormal,
  fontSizeMedium,
  fontWeightBold,
  spacingSmall,
  fontWeightLight,
  colorOption3,
  colorOption3_5,
  colorOption4,
  colorOption4_5,
  spacingNormal,
  spacingRegular,
  spacingLarge,
  colorOption1,
  colorOption2,
  colorOption2_5,
  borderRadiusRegular,
  boxShadow,
  maxWidth,
  device
} from "../../variables";

export const ProjectDescriptionContainer = styled.section`
  width: 87%;
  max-width: ${maxWidth};
  padding: ${spacingRegular} ${spacingSmall};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -5rem;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};

  @media ${device.width480} {
    padding: ${spacingNormal} ${spacingRegular};
    top: -7.5rem;
  }

  .description_image-container {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: -2.5rem;

    @media ${device.width1024} {
      width: 7.5rem;
      height: 7.5rem;
      top: -3.75rem;
    }

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

    @media ${device.width480} {
      padding-top: ${spacingRegular};
      row-gap: ${spacingRegular};
    }

    .description_title {
      padding: 0 ${spacingNormal};
      font-size: ${fontSizeRegular};
      font-weight: ${fontWeightBold};

      @media ${device.width480} {
        font-size: ${fontSizeNormal};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeMedium}
      }
    }

    .description_text {
      font-size: ${fontSizeSmall};
      font-weight: ${fontWeightLight};
      color: ${colorOption3};

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal};
      }
    }
  }

  .description_button-container {
    width: 100%;
    margin-top: ${spacingRegular};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.width320} {
      justify-content: space-evenly;
    }

    /* @media ${device.width1024} {
      justify-content: space-between;
    } */

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
      cursor: pointer;

      &:hover {
        background-color: ${colorOption2};
      }

      @media ${device.width480} {
        font-size: ${fontSizeRegular};
      }

      @media ${device.width1024} {
        font-size: ${fontSizeNormal}
      }
    }
  }
`;

export const Text = styled.p`
    height: 100%;
    padding: 0 ${spacingRegular};
    display: none;
    align-items: center;
    font-size: ${fontSizeNormal};
    font-weight: ${fontWeightBold};
    color: ${props => !props.hover ? colorOption4_5 : colorOption2};
    background-color: ${props => !props.hover ? colorOption3_5 : colorOption2_5};
    border-top-right-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;

    @media ${device.width1024} {
      display: flex;
    }
`;

export const BookmarkButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  cursor: pointer;

  @media ${device.width480} {
    width: 5rem;
    height: 5rem;
  }

  @media ${device.width1024} {
    margin-right: 9rem;
  }

  .button_bookmark-container{
    
    @media ${device.width1024} {
      height:100%;
      display: flex;
      align-items: center;
      background-color: ${props => !props.hover ? colorOption3_5 : colorOption2_5};
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }

    .button_bookmark-icon {
      width: 100%;
      height: 100%;
    }
  }
`;
