import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
// Types
export interface PlaceInfo {
    name: string;
    imgUrl: string | undefined;
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
    search: SearchInputs;
}

// InitialState
const initialState: searchState = {
    state: true,
    selectedPlaces: [],
    placeList: [],
    center: { lat: 33.450701, lng: 126.570667 },
    search: { byPick: '', bySearch: '' },
};

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
        setCenter(state: searchState, action: PayloadAction<Position>) {
            state.center = action.payload;
        },
        setMoving(state: searchState, action: PayloadAction<Position>) {
            state.moving = action.payload;
        },
        setSearchInput(state: searchState, action: PayloadAction<string>) {
            if (state.state) {
                state.search.bySearch = action.payload;
            } else {
                state.search.byPick = action.payload;
            }
        },
    },
});

// Reducer & Action
const { reducer, actions } = userSlice;

export const {
    changeState,
    setPlaceList,
    insertSelectedPlaces,
    deleteSelectedPlaces,
    setCenter,
    setMoving,
    setSearchInput,
} = actions;
export default reducer;
