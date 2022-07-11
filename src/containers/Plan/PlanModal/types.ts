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

export type { PlaceInfo, Position };
