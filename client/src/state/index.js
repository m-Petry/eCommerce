import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    // Add to cart Function
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    // remove from cart function
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    // increase item in cart
    increaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    // decrease item in cart
    decreaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    // prettier-ignore
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    }
  }
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount
} = cartSlice.actions;

export default cartSlice.reducer;
