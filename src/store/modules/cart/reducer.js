import produce from 'immer';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].ammount += 1;
        } else {
          draft.push({ ...action.product, ammount: 1 });
        }
      });
    default:
      return state;
  }
};

export default cart;
