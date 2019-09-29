const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.product, ammount: 1 }];
    default:
      return state;
  }
};

export default cart;
