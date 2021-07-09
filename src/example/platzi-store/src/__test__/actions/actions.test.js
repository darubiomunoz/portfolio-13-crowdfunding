import actions from '../../actions/';

import ProductMock from '../../__mocks__/productMock';

describe('Actions', () => {
  const payload = ProductMock;
  test('Add to cart action', () => {
    const expected = {
      "type": "ADD_TO_CART",
      payload
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('Remove from cart action', () => {
    const expected = {
      "type": "REMOVE_FROM_CART",
      payload
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});