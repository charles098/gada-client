import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import plan from './plan';
import modal from './modal';

const rootReducer = combineReducers({
    user,
    plan,
    modal,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
