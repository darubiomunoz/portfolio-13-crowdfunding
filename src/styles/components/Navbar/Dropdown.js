import styled from 'styled-components';

const Dropdown = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none' };
`;

export default Dropdown;