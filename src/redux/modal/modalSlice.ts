import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalSliceState {
    isOpen: boolean;
};

export const initialState: modalSliceState = {
    isOpen: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<boolean>) {
            state.isOpen = true;
        },
        closeModal(state, action: PayloadAction<boolean>) {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;