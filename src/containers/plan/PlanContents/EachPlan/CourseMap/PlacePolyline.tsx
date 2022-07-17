import React from 'react';
import { CustomOverlayMap, Polyline } from 'react-kakao-maps-sdk';
import { Position } from 'store/modules/plan';
import styled from 'styled-components';

type Props = {
    path: any;
    center: Position | undefined;
    distance: number;
};

const PlacePolyline = ({ path, center, distance }: Props) => {
    return (
        <>
            <Polyline
                path={path}
                strokeWeight={4} // 선의 두께입니다
                strokeColor="#3e3e3e" // 선의 색깔입니다
                strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                strokeStyle="shortdashdot" // 선의 스타일입니다
                onMouseover={(e) => {
                    // hi
                }}
            />
            {center && (
                <MapDistanceText position={center}>
                    <div>{distance}</div>
                </MapDistanceText>
            )}
        </>
    );
};

const MapDistanceText = styled(CustomOverlayMap)`
    & > div {
        background: red;
        width: 500px;
        height: 500px;
        z-index: 777;
    }
`;

export default PlacePolyline;
