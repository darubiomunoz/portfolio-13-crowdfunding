import { render } from '@testing-library/react';

import Navbar from '../../components/Navbar';

describe('Navbar Component Tests', () => {
  test('if the logo is rendered', () => {
    const { getByTestId } = render(<Navbar />);
    const Logo = getByTestId("logoTestId");

    expect(Logo).toBeTruthy()});
});
