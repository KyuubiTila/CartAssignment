export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // teh type is the case representative
    case 'ADD_TO_CART':
      return { ...state, cartList: [...state.cartList, payload.cart] };

    case 'REMOVE_FROM_CART':
      const updatedCartList = state.cartList.filter(
        (current) => current.id !== payload.cart.id
      );
      return { ...state, cartList: updatedCartList };

    case 'RESET_STATE':
      return { ...payload };

    default:
      throw new Error('No Case Found In cartReducer');
  }
};
