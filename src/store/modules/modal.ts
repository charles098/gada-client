import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
interface InitialState {
    modalIsOpen: boolean;
    modalName: string;
}

// InitialState
const initialState: InitialState = {
    modalIsOpen: false,
    modalName: '',
};

// Reducer Slice
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeOpenState(state, action: PayloadAction<boolean>) {
            state.modalIsOpen = action.payload;
        },
        changeModalName(state, action:PayloadAction<string>) {
            state.modalName = action.payload;
        }
    },
});

export const {
    changeOpenState,
    changeModalName
} = modalSlice.actions;

export default modalSlice.reducer
