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
import {
    changePlanModel2PlanState,
    memoPlanDetailFulfilledController,
    movePlaceOptionToPlanFulfilledController,
    movePlanToPlaceOptionFulfilledController,
    sortPlanListController,
} from './plan.controller';
import { PlanDetailModel, PlanModel } from './plan.model';

export interface PlanState
    extends Omit<
        PlanModel,
        'startDate' | 'lastDate' | 'planDetails' | 'isEdited' | 'isShared'
    > {
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

const initialState: PlanState = {
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

    _id: '',
    userId: '',
    area: '',
    imgUrl: '',
    createdAt: '',
    updatedAt: '',
    __v: 0,
};

// Thunk

const mockid = '62d79015bac11f6c17315241';

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

const movePlaceOptionToPlan = createAsyncThunk(
    'POST/plan/planDetails',
    async (
        { place, setDay }: { place: Place; setDay: number },
        { rejectWithValue },
    ) => {
        try {
            const result = await axios.post(`/planDetails`, {
                planId: mockid,
                imgUrl: place.imgUrl,
                index: setDay,
                id: place.id,
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

const movePlanToPlaceOption = createAsyncThunk(
    'DELETE/plan/planDetails',
    async (
        {
            planId,
            row,
            col,
            id, // placeId
        }: { planId: string; row: number; col: number; id: string },
        { rejectWithValue },
    ) => {
        try {
            const data = {
                planId: mockid,
                row,
                col,
                id,
            };
            const result = await axios.delete('/planDetails', {
                headers: {},
                data,
            });
            return result;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

// reject 될때를 체크합니다
const sortPlanListFailCheck = createAsyncThunk(
    'PATCH/plan/updateOrder',
    async (
        {
            planId,
            index,
            preplanDetails,
            curDetails,
        }: {
            planId: string;
            index: number;
            preplanDetails: PlanDetailModel[];
            curDetails: PlanDetailModel[];
        },
        { rejectWithValue },
    ) => {
        const data = {
            planId: mockid,
            index,
            // eslint-disable-next-line no-underscore-dangle
            planDetails: curDetails.map((data) => ({ planDetail: data._id })),
        };
        try {
            const result = await axios.patch('/planDetails/order', data);
            if (result) return curDetails;
            return [];
        } catch (err) {
            return rejectWithValue(preplanDetails);
        }
    },
);

const memoPlanDetail = createAsyncThunk(
    'PATCH/plan/updatePlanDetail',
    async (planDetail: PlanDetailModel, { rejectWithValue }) => {
        try {
            const result = await axios.patch(`/planDetails`, {
                planDetail,
            });
            return planDetail;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

const extraReducers = (builder: ActionReducerMapBuilder<PlanState>) => {
    builder.addCase(getPlanInfoById.fulfilled, (state: PlanState, action) => {
        const { data } = action.payload;
        changePlanModel2PlanState(state, data);
    });
    builder.addCase(
        movePlaceOptionToPlan.fulfilled,
        movePlaceOptionToPlanFulfilledController,
    );
    builder.addCase(
        movePlanToPlaceOption.fulfilled,
        movePlanToPlaceOptionFulfilledController,
    );
    builder.addCase(sortPlanListFailCheck.rejected, (state, action: any) => {
        sortPlanListController(state, action.payload);
    });
    builder.addCase(
        memoPlanDetail.fulfilled,
        memoPlanDetailFulfilledController,
    );
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: PlanState, action) {
            const { initPlaceOptionList, initPlanDetailList } = action.payload;
            state.placeOptionList = [...initPlaceOptionList];
            // state.planList = [...initPlanDetailList];
        },
        insertPlaceOptionList(
            state: PlanState,
            action: PayloadAction<Place[]>,
        ) {
            const selectedPlaces = action.payload;
            state.placeOptionList = [
                ...state.placeOptionList,
                ...selectedPlaces,
            ];
        },
        deletePlaceOptionList(state: PlanState, action: PayloadAction<string>) {
            const optionPlaceId = action.payload;
            state.placeOptionList = state.placeOptionList.filter(
                (place) => place.id !== optionPlaceId,
            );
        },

        setTitle(state: PlanState, action) {
            const { newTitle } = action.payload;
            state.title = newTitle;
        },
        setUpDay(state: PlanState, action) {
            const { selectedDay } = action.payload;
            state.setDay = selectedDay;
            setPointRelatedOptions(state);
        },
        sortPlanList(state: PlanState, action) {
            sortPlanListController(state, action.payload);
        },
        sortplaceOptionList(state: PlanState, action) {
            const { list } = action.payload;
            state.placeOptionList = [...list];
        },
        grabPlan(state: PlanState, action) {
            const { id } = action.payload;
            state.grabPlanId = id;
        },
        grabPlaceOption(state: PlanState, action) {
            const { id } = action.payload;
            state.grabPlaceOptionId = id;
        },
        setClickPlaceDetailId(
            state: PlanState,
            action: PayloadAction<string | undefined>,
        ) {
            if (!action.payload) {
                state.clickPlaceDetailId = null;
                return;
            }
            state.clickPlaceDetailId = action.payload;
        },
        movePlanToPlaceOption(state: PlanState) {
            // dropPlan
            const droppedPlan = state.planList[state.setDay].find(
                (plan) => plan.id === state.grabPlanId,
            ) as PlanDetailModel;
            const idx = state.planList[state.setDay].indexOf(droppedPlan);
            console.log('CUSTOM LOG: ', state.grabPlanId, idx);
            state.planList[state.setDay].splice(idx, 1);
            state.placeOptionList.push(droppedPlan);
        },
        changeShareMode(state: PlanState, action: PayloadAction<boolean>) {
            state.shareMode = action.payload;
            console.log('CUSTOM SHARE', state.shareMode);
        },
    },
    extraReducers,
});

export const setPointRelatedOptions = (state: PlanState) => {
    state.placeDistance = changePosition2DistanceArray(
        state.planList[state.setDay],
    );
    state.placeDistanceCenter = changePosition2DistanceCenter(
        state.planList[state.setDay],
    );
    state.mapCenterBound = getPosition2bound(state.planList[state.setDay]);
};

const { reducer, actions } = planDetailSlice;

export const {
    initializeData,
    insertPlaceOptionList,
    deletePlaceOptionList,
    setTitle,
    setUpDay,
    sortplaceOptionList,
    sortPlanList,
    grabPlan,
    grabPlaceOption,
    setClickPlaceDetailId,
    changeShareMode,
} = actions;

export {
    getPlanInfoById,
    movePlaceOptionToPlan,
    movePlanToPlaceOption,
    sortPlanListFailCheck,
    memoPlanDetail,
};

export default reducer;
