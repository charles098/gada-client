interface PlaceInfo {
    name: string;
    imgUrl: string | undefined;
    address: string;
    latitude: string;
    longitude: string;
}

interface Position {
    lat: number;
    lng: number;
}
interface PlaceInputTypes {
    bySearch: string;
    byPick: string;
}

export type { PlaceInfo, Position, PlaceInputTypes };
