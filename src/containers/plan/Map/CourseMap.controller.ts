import { Place } from 'store/modules/plan';

export function getDistance(pos1: Place, pos2: Place) {
    const lat1 = Number(pos1.latitude);
    const lng1 = Number(pos1.longitude);
    const lat2 = Number(pos2.latitude);
    const lng2 = Number(pos2.longitude);

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180);
    }
    const r = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = r * c;
    return Math.round(d * 1000);
}

export function changePosition2DistanceArray(positions: Place[]) {
    const distance: number[] = [];
    positions.reduce((pre, cur) => {
        const result = getDistance(pre, cur);
        distance.push(result);
        return cur;
    });
    return distance;
}

export function changePosition2DistanceCenter(positions: Place[]) {
    const nodeCenter: { lng: number; lat: number }[] = [];
    positions.reduce((pre, cur) => {
        const preLat = Number(pre.latitude);
        const preLng = Number(pre.longitude);
        const curLat = Number(cur.latitude);
        const curLng = Number(cur.longitude);
        const lat: number = (preLat + preLng) / 2;
        const lng: number = (curLat + curLng) / 2;
        const result: { lng: number; lat: number } = { lat, lng };
        nodeCenter.push(result);
        return cur;
    });

    return nodeCenter;
}

export function getPosition2bound(place: Place[]) {
    const bound = new kakao.maps.LatLngBounds();
    place.forEach((value) => {
        const lat = Number(value.latitude);
        const lng = Number(value.longitude);
        bound.extend(new kakao.maps.LatLng(lat, lng));
    });
    return bound;
}
