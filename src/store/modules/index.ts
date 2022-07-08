import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import plan from './plan';

const rootReducer = combineReducers({
    user,
    plan,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
