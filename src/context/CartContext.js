// import { useContext, useReducer } from 'react';
// import { createContext } from 'react';
// import { cartReducer } from '../reducer/CartReducer';

// const initialState = {
//   cartList: [],
//   total: 0,
// };

// export const CartContext = createContext(initialState);

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (product) => {
//     const updatedCartList = state.cartList.concat(product);
//     dispatch({
//       type: 'ADD_TO_CART',
//       payload: {
//         products: updatedCartList,
//       },
//     });
//   };

//   const removeFromCart = (product) => {
//     const updatedCartList = state.cartList.filter(
//       (current) => current.id !== product.id
//     );

//     dispatch({
//       type: 'REMOVE_FROM_CART',
//       payload: {
//         products: updatedCartList,
//       },
//     });
//   };

//   const value = {
//     total: state.total,
//     cartList: state.cartList,
//     addToCart,
//     removeFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   return context;
// };

import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer } from '../reducer/CartReducer';

// When a user logs in, yjis is the initial value they should work with
const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (elements) => {
    const updatedCartList = state.cartList.concat(elements);
    updateTotal(updatedCartList);

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (elements) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== elements.id
    );
    updateTotal(updatedCartList);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCartList,
      },
    });
  };
  const updateTotal = (elements) => {
    let total = 0;
    elements.forEach((element) => (total = total + element.price));

    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total,
      },
    });
  };
  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
