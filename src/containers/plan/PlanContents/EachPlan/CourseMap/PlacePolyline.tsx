import React from 'react';
import { Polyline } from 'react-kakao-maps-sdk';

const PlacePolyline = ({ path }: any) => {
    return (
        <Polyline
            path={path}
            strokeWeight={4} // 선의 두께입니다
            strokeColor="#3e3e3e" // 선의 색깔입니다
            strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle="shortdashdot" // 선의 스타일입니다
        />
    );
};

export default PlacePolyline;
