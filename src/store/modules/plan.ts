import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPlace {
    id: number;
    day: number;
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
    dropItem: IPlace | null;
    placeOptionList: IPlace[];
}

const initialState: IPlan = {
    title: '부산 바캉스',
    startDate: new Date(20, 11, 3),
    lastDate: new Date(20, 11, 10),
    setDay: 1,
    grabPlanId: null,
    grabPlaceOptionId: null,
    dropItem: null,
    placeOptionList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: IPlan, action) {
            const { initPlaceOptionList } = action.payload;
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
            // const droppedPlan = state.planList[state.setDay].find(
            //     (plan) => plan.id === state.grabPlanId,
            // ) as IPlace;
            // const idx = state.planList[state.setDay].indexOf(droppedPlan);
            // state.planList[state.setDay].splice(idx, 1);
            // state.placeOptionList.push(droppedPlan);
        },
        dropPlaceOption(state: IPlan) {
            const droppedPlaceOption = state.placeOptionList.find(
                (option) => option.id === state.grabPlaceOptionId,
            ) as IPlace;

            const idx = state.placeOptionList.indexOf(droppedPlaceOption);
            state.placeOptionList.splice(idx, 1);
            state.dropItem = droppedPlaceOption;
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    setTitle,
    setUpDay,
    sortplaceOptionList,
    grabPlan,
    grabPlaceOption,
    dropPlan,
    dropPlaceOption,
} = actions;

export default reducer;
