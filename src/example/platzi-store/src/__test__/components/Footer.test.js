import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render of Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Title rendering', () => {
    expect(footer.find(".Footer-title").text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Validate the UI of the footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});