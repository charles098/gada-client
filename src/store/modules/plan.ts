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
    title: string;
    startDate: Date;
    lastDate: Date;
    setDay: number;
    grabPlanId: number | null;
    grabPlaceOptionId: number | null;
    planList: IPlace[];
    placeOptionList: IPlace[];
}

const initialState: IPlan = {
    title: '부산 바캉스',
    startDate: new Date(20, 11, 3),
    lastDate: new Date(20, 11, 18),
    setDay: 1,
    grabPlanId: null,
    grabPlaceOptionId: null,
    planList: [],
    placeOptionList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: IPlan, action) {
            const { initPlanDetailList, initPlaceOptionList } = action.payload;
            state.planList = [...initPlanDetailList];
            state.placeOptionList = [...initPlaceOptionList];
        },
        setTitle(state: IPlan, action) {
            const { newTitle } = action.payload;
            state.title = newTitle;
        },
        setUpDay(state: IPlan, action) {
            const { selectedDay } = action.payload;
            state.setDay = selectedDay;
        },
        sortPlanList(state: IPlan, action) {
            const { list } = action.payload;
            state.planList = [...list];
        },
        sortplaceOptionList(state: IPlan, action) {
            const { list } = action.payload;
            state.placeOptionList = [...list];
        },
        grabPlan(state: IPlan, action) {
            const { id } = action.payload;
            state.grabPlanId = id;
        },
        grabPlaceOption(state: IPlan, action) {
            const { id } = action.payload;
            state.grabPlaceOptionId = id;
        },
        dropPlan(state: IPlan) {
            const droppedPlan = state.planList.find(
                (plan) => plan.id === state.grabPlanId,
            ) as IPlace;

            const idx = state.planList.indexOf(droppedPlan);
            state.planList.splice(idx, 1);
            state.placeOptionList.push(droppedPlan);
        },
        dropPlaceOption(state: IPlan) {
            const droppedOption = state.placeOptionList.find(
                (option) => option.id === state.grabPlaceOptionId,
            ) as IPlace;

            const idx = state.placeOptionList.indexOf(droppedOption);
            state.placeOptionList.splice(idx, 1);
            state.planList.push(droppedOption);
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    setTitle,
    setUpDay,
    sortPlanList,
    sortplaceOptionList,
    grabPlan,
    grabPlaceOption,
    dropPlan,
    dropPlaceOption,
} = actions;

export default reducer;
