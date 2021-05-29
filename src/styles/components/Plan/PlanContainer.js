import styled from 'styled-components';

import { borderRadiusExtraSmall, boxShadow, spacingRegular, spacingSmall } from '../../variables';

const PlanContainer = styled.div`
  width: 100%;
  margin-top: ${spacingRegular};
  padding: ${spacingSmall};
  border-radius: ${borderRadiusExtraSmall};
  box-shadow: ${boxShadow};
`;

export default PlanContainer;