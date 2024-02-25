import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";

export interface Item {
  id: string;
  name: string;
  imageAddress: string;
  price: number;
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
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
