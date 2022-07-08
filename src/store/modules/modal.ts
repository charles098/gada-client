import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
interface InitialState {
    largeModalIsOpen: boolean
}

// InitialState
const initialState: InitialState = {
    largeModalIsOpen: false,
};

// Reducer Slice
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        largeModal(state, action: PayloadAction<boolean>) {
            state.largeModalIsOpen = action.payload;
        },
    },
});

export const {
    largeModal
} = modalSlice.actions;

export default modalSlice.reducer
