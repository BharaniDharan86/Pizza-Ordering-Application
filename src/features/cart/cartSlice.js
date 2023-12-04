import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      console.log(action.payload);
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        return cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;

export const getCartQuantity = (store) => {
  const totalQuantity = store.cart.cart.reduce((prev, curr) => {
    return (prev += curr.quantity);
  }, 0);

  return totalQuantity;
};

export const getTotalPrice = (store) => {
  const totalPrice = store.cart.cart.reduce((prev, curr) => {
    return (prev += curr.totalPrice);
  }, 0);

  return totalPrice;
};

// export function getCartQuantityById(id) {
//   return function (store) {
//     return store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
//   };
// }

// export const getCurrentQuantityById = (id) => (state) =>
//   state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
