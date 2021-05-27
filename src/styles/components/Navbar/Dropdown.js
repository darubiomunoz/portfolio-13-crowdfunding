import styled from 'styled-components';

import { spacingRegular, spacingSmall } from '../../variables';

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  padding: ${spacingSmall};
  margin: 0 ${spacingRegular};
  position: absolute;
  top: 50px;
  left: 0;
  background-color: red;
`;

export default Dropdown;