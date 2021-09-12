import { render } from '@testing-library/react';

import Navbar from '../../components/Navbar';

describe('Navbar component tests', () => {
  test('If it renders', () => {
    const { getByTestId } = render(<Navbar />);
    const logo = getByTestId('logoTestId');

    expect(logo).toBeTruthy();
  })
});
