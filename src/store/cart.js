import { createSlice } from "@reduxjs/toolkit";

const calculateTotalPrice = (cartItems) => {
  let totalPrice = 0;
  cartItems.map((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  });

  return totalPrice;
};

const getCartFromLS = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

const saveCartToLS = (cartItems) => {
  // console.log(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
  cartItems: getCartFromLS(),
  totalPrice: calculateTotalPrice(getCartFromLS()),
};

const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const itemToAdd = { ...item, quantity: 1 };
      state.cartItems.push(itemToAdd);
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLS(state.cartItems);
    },
    increment(state, action) {
      const id = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      state.cartItems[index].quantity++;
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLS(state.cartItems);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      state.cartItems.splice(index, 1);
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLS(state.cartItems);
    },
    decrement(state, action) {
      const id = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (state.cartItems[index].quantity <= 1) {
        state.cartItems.splice(index, 1);
      } else {
        state.cartItems[index].quantity--;
      }
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLS(state.cartItems);
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
