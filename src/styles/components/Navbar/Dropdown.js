import styled from "styled-components";

import {
  spacingSmall,
  borderRadiusSmall,
  colorOption5,
  fontSizeRegular,
  fontWeightBold,
  zIndexDropdown,
  colorOption3
} from "../../variables";

const Dropdown = styled.nav`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: ${(props) => (props.isOpen ? "center" : "unset")};
  width: 100%;
  padding: ${spacingSmall};
  position: absolute;
  top: 50px;
  left: 0;
  z-index: ${zIndexDropdown};
  background-color: transparent;

  ul {
    width: 92%;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadiusSmall};
    background-color: ${colorOption5};

    li {
      padding: ${spacingSmall};

      a {
        font-size: ${fontSizeRegular};
        font-weight: ${fontWeightBold};
      }
    }

    .divisor {
      width: 100%;
      border-top: .1rem solid ${colorOption3};
    }
  }
`;

export default Dropdown;
