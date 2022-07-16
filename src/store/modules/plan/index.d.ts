export interface SearchedPlaceInfo {
    name: string;
    imgUrl?: string | undefined;
    address: string;
    latitude: string;
    longitude: string;
}
export interface SelectedPlace extends SearchedPlaceInfo {
    id: string;
}

export interface Place extends SelectedPlace {
    day?: number;
    description?: string;
    cost?: number;
    category?: string;
}
export interface Position {
    lat: number;
    lng: number;
}
