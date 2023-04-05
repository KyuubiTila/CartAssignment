export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // teh type is the case representative
    case 'ADD_TO_CART':
      return { ...state, cartList: payload.products };

    case 'REMOVE_FROM_CART':
      return { ...state, cartList: payload.products };

    case 'UPDATE_TOTAL':
      return { ...state, total: payload.total };

    default:
      throw new Error('No Case Found In cartReducer');
  }
};
