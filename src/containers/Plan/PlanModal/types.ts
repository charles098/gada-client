interface placeInfo {
    place_name: string;
    place_img_url: string | undefined;
    place_url?: string;
    address: string;
    road_address?: string;
    lat: string;
    lng: string;
}

export type { placeInfo };
