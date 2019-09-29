export const addToCart = product => ({
  type: '@cart/ADD',
  product,
});

export const removeFromCart = id => ({
  type: '@cart/REMOVE',
  id,
});

export const updateAmount = (id, amount) => ({
  type: '@cart/UPDATE_AMOUNT',
  id,
  amount,
});
