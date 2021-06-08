import styled from "styled-components";

import {
  spacingSmall,
  borderRadiusSmall,
  colorOption5,
  fontSizeRegular,
  fontSizeNormal,
  fontWeightBold,
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

  .navbar_list {
    width: 92%;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    .navbar_item {
      padding: ${spacingSmall};

      .navbar_link {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};
      }

      @media ${device.width480} {
        .navbar_link {
          font-size: ${fontSizeNormal};
        }
      }
    }

    .divisor {
      width: 100%;
      border-top: 0.1rem solid ${colorOption3};
    }

    @media ${device.width480} {
      .navbar_item {
        padding: ${spacingRegular};
      }
    }
  }
`;

export default Dropdown;
