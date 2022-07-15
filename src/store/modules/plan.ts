import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedPlace } from './search';

export interface IPlace extends SelectedPlace {
    day?: number;
    description?: string;
    cost?: number;
    category?: string;
}

export interface IPlan {
    title: string;
    startDate: Date;
    lastDate: Date;
    setDay: number;
    grabPlanId: string | null;
    grabPlaceOptionId: string | null;
    planList: IPlace[][];
    placeOptionList: IPlace[];
}

const initialState: IPlan = {
    title: '부산 바캉스',
    startDate: new Date(20, 11, 3),
    lastDate: new Date(20, 11, 10),
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
            const { initPlaceOptionList, initPlanDetailList } = action.payload;
            state.placeOptionList = [...initPlaceOptionList];
            // state.planList = [...initPlanDetailList];
        },
        insertPlaceOptionList(state: IPlan, action: PayloadAction<IPlace[]>) {
            const selectedPlaces = action.payload;
            console.log('CustomLog', selectedPlaces);
            state.placeOptionList = [
                ...state.placeOptionList,
                ...selectedPlaces,
            ];
        },
        createPlanListArray(state: IPlan, action) {
            const days = action.payload.days ?? 1;
            const arr = new Array<IPlace[]>(days).fill([]);
            console.log('CUSTOM LOG', arr, days);
            state.planList = arr;
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
            state.planList[state.setDay] = [...list];
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
        movePlanToPlaceOption(state: IPlan) {
            // dropPlan
            const droppedPlan = state.planList[state.setDay].find(
                (plan) => plan.id === state.grabPlanId,
            ) as IPlace;
            const idx = state.planList[state.setDay].indexOf(droppedPlan);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.planList[state.setDay].splice(idx, 1);
            state.placeOptionList.push(droppedPlan);
        },
        movePlaceOptionToPlan(state: IPlan) {
            // dropPlaceOption
            const droppedPlaceOption = state.placeOptionList.find(
                (option) => option.id === state.grabPlaceOptionId,
            ) as IPlace;

            const idx = state.placeOptionList.indexOf(droppedPlaceOption);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.placeOptionList.splice(idx, 1);
            state.planList[state.setDay].push(droppedPlaceOption);
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    createPlanListArray,
    insertPlaceOptionList,
    setTitle,
    setUpDay,
    sortplaceOptionList,
    grabPlan,
    sortPlanList,
    grabPlaceOption,
    movePlanToPlaceOption,
    movePlaceOptionToPlan,
} = actions;

export default reducer;
