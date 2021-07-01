import styled from "styled-components";

import {
  spacingSmall,
  borderRadiusSmall,
  colorOption5,
  fontSizeRegular,
  fontSizeNormal,
  fontWeightBold,
  fontWeightNormal,
  zIndexDropdown,
  colorOption3,
  device,
  spacingRegular
} from "../../variables";

const Dropdown = styled.nav`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: ${(props) => (props.isOpen ? "center" : "unset")};
  width: 100%;
  padding: ${spacingSmall};
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: ${zIndexDropdown};
  background-color: transparent;

  @media ${device.width480} {
    top: 7.5rem;
  }

  @media ${device.width1024} {
    display: flex;
    position: relative;
    top: 0;
  }

  .navbar_list {
    width: 92%;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    @media ${device.width1024} {
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;
      border: none;
      background-color: transparent;
    }

    .navbar_item {
      padding: ${spacingSmall};

      .navbar_link {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};

        @media ${device.width480} {
          font-size: ${fontSizeNormal};
        }

        @media ${device.wodth1024} {
          font-weight: ${fontWeightNormal};
          color: ${colorOption5};
        }
      }
    }

    .divisor {
      width: 100%;
      border-top: 0.1rem solid ${colorOption3};

      @media ${device.width1024} {
        display: none;
      }
    }

    @media ${device.width480} {
      .navbar_item {
        padding: ${spacingRegular};
      }
    }
  }
`;

export default Dropdown;
