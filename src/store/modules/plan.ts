import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPlace {
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

export interface IPlan {
    setupDay: number;
    grabOptionId: number | null;
    planList: IPlace[];
    placeOptionList: IPlace[];
}

const initialState: IPlan = {
    setupDay: 1,
    grabOptionId: null,
    planList: [],
    placeOptionList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: IPlan, action): void {
            const { initPlanDetailList, initPlaceOptionList } = action.payload;
            state.planList = [...initPlanDetailList];
            state.placeOptionList = [...initPlaceOptionList];
        },
        sortPlanList(state: IPlan, action) {
            const { list } = action.payload;
            state.planList = [...list];
        },
        sortplaceOptionList(state: IPlan, action) {
            const { list } = action.payload;
            state.placeOptionList = [...list];
        },
        grabPlaceOption(state: IPlan, action) {
            const { id } = action.payload;
            state.grabOptionId = id;
        },
        dropPlaceOption(state: IPlan) {
            const droppedPlan = state.placeOptionList.find(
                (option) => option.id === state.grabOptionId,
            ) as IPlace;

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
