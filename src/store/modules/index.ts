import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import plan from './plan/plan';
import modal from './modal';
import search from './plan/search';
import location from './location';

const rootReducer = combineReducers({
    user,
    plan,
    modal,
    search,
    location,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
