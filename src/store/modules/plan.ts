import { createSlice } from '@reduxjs/toolkit';

export interface Place {
    id: number;
    day: number;
    sequence: number;
    name: string;
    address: string;
    longitude: string;
    latitude: string;
    description: string;
    cost: number;
    category: string;
    imgUrl: string;
}

export interface Plan {
    setupDay: number;
    grabOptionId: number | null;
    planList: Place[];
    placeOptionList: Place[];
}

const initialState: Plan = {
    setupDay: 1,
    grabOptionId: null,
    planList: [],
    placeOptionList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: Plan, action) {
            const { initPlanDetailList, initPlaceOptionList } = action.payload;
            state.planList = [...initPlanDetailList];
            state.placeOptionList = [...initPlaceOptionList];
        },
        sortPlanList(state: Plan, action) {
            const { list } = action.payload;
            state.planList = [...list];
        },
        sortplaceOptionList(state: Plan, action) {
            const { list } = action.payload;
            state.placeOptionList = [...list];
        },
        grabPlaceOption(state: Plan, action) {
            const { id } = action.payload;
            state.grabOptionId = id;
        },
        dropPlaceOption(state: Plan) {
            const droppedPlan: Place = state.placeOptionList.find(
                (option) => option.id === state.grabOptionId,
            );
            const idx = state.placeOptionList.indexOf(droppedPlan);
            state.placeOptionList.splice(idx, 1);
            state.planList.push(droppedPlan);
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    sortPlanList,
    sortplaceOptionList,
    grabPlaceOption,
    dropPlaceOption,
} = actions;

export default reducer;
