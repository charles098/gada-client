import React, { FC } from 'react';
import { Map } from 'react-kakao-maps-sdk';

interface LatLng {
    lat: number;
    lng: number;
}
interface KakaoMapProps {
    center: LatLng;
    style: any;
}
/**
 * @Todo : defaultProps 미사용시 any 를 KakoMapProps로 변경
 */
const KakaoMap: FC = ({ center, style, children }: any): JSX.Element => {
    return (
        <Map center={center} style={style}>
            {children}
        </Map>
    );
};

KakaoMap.defaultProps = {
    center: { lat: 33.5563, lng: 126.79581 },
    style: { width: '100%', height: '800px' },
};

export default KakaoMap;
