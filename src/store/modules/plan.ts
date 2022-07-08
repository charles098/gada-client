import { createSlice } from '@reduxjs/toolkit';

export interface PlanDetail {
    day: number;
    sequence: number;
    name: string;
    address: string;
    longitude: string;
    latitude: string;
    description: string;
    cost: number;
    category: string;
}

export type Plan = {
    setupDay: number;
    planList: Array<PlanDetail>;
};

const initialState: Plan = {
    setupDay: 1,
    planList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: Plan, action) {
            const { initData } = action.payload;
            state.planList = initData;
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const { initializeData } = actions;
export default reducer;
