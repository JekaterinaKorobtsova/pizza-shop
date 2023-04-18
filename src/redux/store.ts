import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import pizza from "./pizza/slice";
import { useDispatch } from "react-redux";
import modal from "./modal/modalSlice";


export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
    modal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
