import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import plan from './plan';
import modal from './modal';
import search from './search';

const rootReducer = combineReducers({
    user,
    plan,
    modal,
    search,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
