import styled from 'styled-components';

import { borderRadiusSmall, spacingSmall } from '../../variables';

const ProjectDescriptionContainer = styled.section`
  width: 90%;
  padding: ${spacingSmall};
  position: relative;
  top: -30px;
  border-radius: ${borderRadiusSmall};
  background-color: red;
`;

export default ProjectDescriptionContainer;