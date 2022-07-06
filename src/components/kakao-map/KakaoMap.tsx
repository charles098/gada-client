import React, { FC } from 'react';
import { Map } from 'react-kakao-maps-sdk';

interface LatLng {
    lat: number | string;
    lng: number | string;
}

const KakaoMap: FC = ({ center, style }: any): JSX.Element => {
    return <Map center={center} style={style} />;
};

export default KakaoMap;
KakaoMap.defaultProps = {
    center: { lat: 33.5563, lng: 126.79581 },
    style: { width: '100%', height: '360px' },
};
