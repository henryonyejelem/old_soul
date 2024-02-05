import React, { createContext, useReducer } from 'react';

// Define initial state
const initialState = {
  cart: [],
};

// Define reducer function to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':      
      const existingIndex = state.cart.findIndex(item => item.ID === action.payload.ID);
      if (existingIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;        
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        
        // If the item does not exist in the cart, add it with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

// Create a context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
