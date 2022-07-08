import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import modal from './modal';

const rootReducer = combineReducers({
    user,
    modal
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
