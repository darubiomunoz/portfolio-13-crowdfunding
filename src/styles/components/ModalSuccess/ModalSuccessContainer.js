import styled from 'styled-components';

import { spacingSmall, colorOption3_5, zIndexModal } from '../../variables';

const ModalSuccessContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: ${spacingSmall} 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorOption3_5};
  overflow-y: auto;
  z-index: ${zIndexModal};

  
`;

export default ModalSuccessContainer;