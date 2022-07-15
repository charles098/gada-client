import {
    createAsyncThunk,
    createSlice,
    nanoid,
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    pickByKeyword,
    searchByKeyword,
} from 'containers/plan/PlanModal/searchScenario';
// Types
export interface PlaceInfo {
    name: string;
    imgUrl?: string | undefined;
    address: string;
    latitude: string;
    longitude: string;
}
export interface SelectedPlace extends PlaceInfo {
    id: string;
}

export interface Position {
    lat: number;
    lng: number;
}
export interface SearchInputs {
    bySearch: string;
    byPick: string;
}

export interface searchState {
    state: boolean;
    selectedPlaces: SelectedPlace[];
    placeList: PlaceInfo[];
    center: Position;
    moving?: Position;
}

// InitialState
const initialState: searchState = {
    state: true,
    selectedPlaces: [],
    placeList: [],
    center: { lat: 33.450701, lng: 126.570667 },
};
// Thunk
const searchPlaces = createAsyncThunk(
    'place/searchPlacesBySearch',
    async (keyword: string, { rejectWithValue }) => {
        try {
            const response = await searchByKeyword(keyword);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

const searchForCoord = createAsyncThunk(
    'place/searchCoordByPick',
    async (keyword: string, { rejectWithValue }) => {
        try {
            const response = await pickByKeyword(keyword);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

// Reducer Slice
const userSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeState(state: searchState) {
            state.state = !state.state;
        },
        setPlaceList(state: searchState, action: PayloadAction<PlaceInfo[]>) {
            state.placeList = action.payload;
        },
        insertSelectedPlaces(
            state: searchState,
            action: PayloadAction<PlaceInfo>,
        ) {
            const place: SelectedPlace = { ...action.payload, id: nanoid() };
            state.selectedPlaces = [...state.selectedPlaces, place];
        },
        deleteSelectedPlaces(
            state: searchState,
            action: PayloadAction<string>,
        ) {
            const id: string = action.payload;
            state.selectedPlaces = state.selectedPlaces.filter(
                (place) => place.id !== id,
            );
        },
        dropAllSelectedPlaces(state: searchState) {
            state.selectedPlaces = [];
        },

        setCenter(state: searchState, action: PayloadAction<Position>) {
            state.center = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchPlaces.fulfilled, (state, action) => {
            state.placeList = action.payload;
        });
        builder.addCase(searchForCoord.fulfilled, (state, action) => {
            state.moving = action.payload;
        });
    },
});

// Reducer & Action
const { reducer, actions } = userSlice;

export const {
    changeState,
    setPlaceList,
    insertSelectedPlaces,
    deleteSelectedPlaces,
    dropAllSelectedPlaces,
    setCenter,
} = actions;
export { searchPlaces, searchForCoord };
export default reducer;
