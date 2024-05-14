/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { TMeal } from "../../components/RecentMeals";
// import { RootState } from "../../app/store";

export interface Item extends TMeal {
  // _id: string;
  // name: string;
  // imageAddress: string;
  // price: number;
  quantity: number;
}

interface CartState {
  cart: Item[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      // check if the item already exists in cart
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item._id === existingItem._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        state.cart = updatedCart;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-console
      console.log(`filter out the item with an id of ${action.payload}`);
      const updatedCart = state.cart.filter(
        (item) => item._id !== action.payload
      );
      // fix this
      state.cart = updatedCart;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const { _id, quantity } = action.payload;
      const meal = state.cart.find((item) => item._id === _id);
      if (meal) {
        meal.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.cart;
export const getCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
export default cartSlice.reducer;
