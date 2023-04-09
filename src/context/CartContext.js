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

import { useContext, useReducer, useEffect } from 'react';
import { createContext } from 'react';
import { cartReducer } from '../reducer/CartReducer';

// When a user logs in, yjis is the initial value they should work with

const LOCAL_STORAGE_KEY = 'assignment_cart';

const storageValue = localStorage.getItem(LOCAL_STORAGE_KEY);

const initialState = storageValue
  ? JSON.parse(storageValue)
  : {
      cartList: [],
    };

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const storageValue = localStorage.getItem(LOCAL_STORAGE_KEY);

    const savedState = storageValue
      ? JSON.parse(storageValue)
      : {
          cartList: [],
        };

    dispatch({
      type: 'RESET_STATE',
      payload: savedState,
    });
  }, []);

  const addToCart = (cart) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        cart,
      },
    });
  };

  const removeFromCart = (cart) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        cart,
      },
    });
  };

  const value = {
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
