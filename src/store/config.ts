import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules';

export const store = configureStore({
    reducer: rootReducer,
});
