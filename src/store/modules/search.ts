import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Types
export interface PlaceInfo {
    name: string;
    imgUrl: string | undefined;
    address: string;
    latitude: string;
    longitude: string;
}
export interface SelectedPlace extends PlaceInfo {
    id: number;
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
    selectedPlaces: SelectedPlace[];
    placeList: PlaceInfo[];
    center: Position;
    moving?: Position;
    search: SearchInputs;
}

// InitialState
const initialState: searchState = {
    selectedPlaces: [],
    placeList: [],
    center: { lat: 33.450701, lng: 126.570667 },
    search: { byPick: '', bySearch: '' },
};

// Reducer Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPlaceList(state: searchState, action) {
            state.placeList = action.payload;
        },
        insertSelectedPlaces(state: searchState, action) {
            state.placeList = [...state.placeList, action.payload];
        },
        setCenter(state: searchState, action) {
            state.center = action.payload;
        },
        setMoving(state: searchState, action) {
            state.moving = action.payload;
        },
        setSearchInputBySearch(state: searchState, action) {
            state.search.bySearch = action.payload;
        },
        setSearchInputByPick(state: searchState, action) {
            state.search.byPick = action.payload;
        },
    },
});

// Reducer & Action
const { reducer, actions } = userSlice;

export const {
    setPlaceList,
    insertSelectedPlaces,
    setCenter,
    setMoving,
    setSearchInputBySearch,
    setSearchInputByPick,
} = actions;
export default reducer;
