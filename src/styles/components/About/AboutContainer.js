import styled from 'styled-components';

import { borderRadiusSmall, boxShadow, spacingRegular, spacingSmall } from '../../variables';

const AboutContainer = styled.section`
  width: 87%;
  padding: ${spacingRegular} ${spacingSmall};
  border-radius: ${borderRadiusSmall};
  box-shadow: ${boxShadow};
`;

export default AboutContainer;