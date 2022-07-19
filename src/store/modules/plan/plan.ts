import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import {
    changePosition2DistanceArray,
    changePosition2DistanceCenter,
    getPosition2bound,
} from 'utils/mapPointHelper';
import { Place, Position } from '.';
import { changePlanModel2PlanState } from './plan.controller';
import { PlanDetailModel } from './plan.model';

export interface planState {
    title: string;
    startDate: Date;
    lastDate: Date;
    period: number;
    setDay: number;
    grabPlanId: string | null;
    grabPlaceOptionId: string | null;
    clickPlaceDetailId: string | null;
    planList: PlanDetailModel[][];
    placeOptionList: Place[];
    placeDistance: number[];
    placeDistanceCenter: Position[];
    mapCenterBound: kakao.maps.LatLngBounds | null;
    shareMode: boolean;
}

const initialState: planState = {
    title: '부산 바캉스',
    startDate: new Date(20, 11, 3),
    lastDate: new Date(20, 11, 10),
    period: 1,
    setDay: 0,
    grabPlanId: null,
    grabPlaceOptionId: null,
    clickPlaceDetailId: null,
    planList: [],
    placeOptionList: [],
    placeDistance: [],
    placeDistanceCenter: [],
    mapCenterBound: null,
    shareMode: false,
};
const setPointRelatedOptions = (state: planState) => {
    state.placeDistance = changePosition2DistanceArray(
        state.planList[state.setDay],
    );
    state.placeDistanceCenter = changePosition2DistanceCenter(
        state.planList[state.setDay],
    );
    state.mapCenterBound = getPosition2bound(state.planList[state.setDay]);
};

// Thunk

const mockid = '';

const getPlanInfoById = createAsyncThunk(
    'GET/plan/getPlan',
    async (planObjectId: string, { rejectWithValue }) => {
        try {
            const result = await axios.get(`/plans/${mockid}`);
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

const movePlaceOptionToPlan2 = createAsyncThunk(
    'POST/plan/addPlanDetail',
    async (
        { place, setDay }: { place: Place; setDay: number },
        { rejectWithValue },
    ) => {
        try {
            const result = await axios.post(`/planDetails`, {
                planId: mockid,
                imgUrl: place.imgUrl,
                index: setDay,
                placeId: place.id,
                name: place.name,
                latitude: place.latitude,
                longitude: place.longitude,
                address: place.address,
            });
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

const planDetails = createAsyncThunk(
    'DELETE/plan/planDetails',
    async (
        {
            planId,
            index,
            placeId,
        }: { planId: string; index: number; placeId: string },
        { rejectWithValue },
    ) => {
        try {
            const data = {
                planId: mockid,
                index,
                placeId,
            };
            const result = await axios.delete('/planDetail', {
                headers: {},
                data,
            });
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
const getPlanDetail = createAsyncThunk(
    'GET/plan/getPlanDetails',
    async (placeId: string, { rejectWithValue }) => {
        try {
            const result = await axios.get(`/planDetails/${placeId}`);
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
const updatePlanDetail = createAsyncThunk(
    'PATCH/plan/updatePlanDetail',
    async (
        { _id, ...place }: Partial<PlanDetailModel>,
        { rejectWithValue },
    ) => {
        try {
            const result = await axios.patch(`/planDetails`, {
                planDetail: {
                    _id,
                    ...place,
                },
            });
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
const extraReducers = (builder: ActionReducerMapBuilder<planState>) => {
    builder.addCase(getPlanInfoById.fulfilled, (state: planState, action) => {
        const { data } = action.payload;
        changePlanModel2PlanState(state, data);
    });
    builder.addCase(
        movePlaceOptionToPlan2.fulfilled,
        (state: planState, action) => {
            // add Place Data
            const { data } = action.payload;
            console.log('API CALL', data);
            const droppedPlaceOption = state.placeOptionList.find(
                (option) => option.id === state.grabPlaceOptionId,
            ) as Place;

            const idx = state.placeOptionList.indexOf(droppedPlaceOption);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.placeOptionList.splice(idx, 1);
            // state.planList[state.setDay].push(droppedPlaceOption);
            setPointRelatedOptions(state);
        },
    );
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: planState, action) {
            const { initPlaceOptionList, initPlanDetailList } = action.payload;
            state.placeOptionList = [...initPlaceOptionList];
            // state.planList = [...initPlanDetailList];
        },
        insertPlaceOptionList(
            state: planState,
            action: PayloadAction<Place[]>,
        ) {
            const selectedPlaces = action.payload;
            state.placeOptionList = [
                ...state.placeOptionList,
                ...selectedPlaces,
            ];
        },
        deletePlaceOptionList(state: planState, action: PayloadAction<string>) {
            const optionPlaceId = action.payload;
            state.placeOptionList = state.placeOptionList.filter(
                (place) => place.id !== optionPlaceId,
            );
        },
        createPlanListArray(state: planState, action) {
            const days = action.payload.days ?? 1;
            const arr = new Array<PlanDetailModel[]>(days).fill([]);
            state.planList = arr;
        },
        setTitle(state: planState, action) {
            const { newTitle } = action.payload;
            state.title = newTitle;
        },
        setUpDay(state: planState, action) {
            const { selectedDay } = action.payload;
            state.setDay = selectedDay;
            setPointRelatedOptions(state);
        },
        sortPlanList(state: planState, action) {
            const { list } = action.payload;
            state.planList[state.setDay] = [...list];
            // calc distance
            setPointRelatedOptions(state);
        },
        sortplaceOptionList(state: planState, action) {
            const { list } = action.payload;
            state.placeOptionList = [...list];
        },
        grabPlan(state: planState, action) {
            const { id } = action.payload;
            state.grabPlanId = id;
        },
        grabPlaceOption(state: planState, action) {
            const { id } = action.payload;
            state.grabPlaceOptionId = id;
        },
        setClickPlaceDetailId(
            state: planState,
            action: PayloadAction<string | undefined>,
        ) {
            if (!action.payload) {
                state.clickPlaceDetailId = null;
                return;
            }
            state.clickPlaceDetailId = action.payload;
        },
        movePlanToPlaceOption(state: planState) {
            // dropPlan
            const droppedPlan = state.planList[state.setDay].find(
                (plan) => plan.id === state.grabPlanId,
            ) as PlanDetailModel;
            const idx = state.planList[state.setDay].indexOf(droppedPlan);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.planList[state.setDay].splice(idx, 1);
            state.placeOptionList.push(droppedPlan);
        },
        movePlaceOptionToPlan(state: planState) {
            // dropPlaceOption
            const droppedPlaceOption = state.placeOptionList.find(
                (option) => option.id === state.grabPlaceOptionId,
            ) as PlanDetailModel;

            const idx = state.placeOptionList.indexOf(droppedPlaceOption);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.placeOptionList.splice(idx, 1);
            state.planList[state.setDay].push(droppedPlaceOption);
            setPointRelatedOptions(state);
        },
        changeShareMode(state: planState) {
            state.shareMode = true;
            console.log('CUSTOM SHARE', state.shareMode);
        },
    },
    extraReducers,
});

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    createPlanListArray,
    insertPlaceOptionList,
    deletePlaceOptionList,
    setTitle,
    setUpDay,
    sortplaceOptionList,
    grabPlan,
    sortPlanList,
    grabPlaceOption,
    setClickPlaceDetailId,
    movePlanToPlaceOption,
    movePlaceOptionToPlan,
    changeShareMode,
} = actions;

export default reducer;
