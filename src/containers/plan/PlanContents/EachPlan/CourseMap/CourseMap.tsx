import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { Place } from 'store/modules/plan';

const placeListSelector = (state: RootState) => state.plan.planList;
const setDaySelector = (state: RootState) => state.plan.setDay;
const placeDistanceSelector = (state: RootState) => state.plan.placeDistance;
const placeDistanceCenterSelector = (state: RootState) =>
    state.plan.placeDistanceCenter;
const mapCenterBoundSelector = (state: RootState) => state.plan.mapCenterBound;

const CourseMap = () => {
    const placeList: Place[][] = useSelector(placeListSelector);
    const setDay = useSelector(setDaySelector);
    const placeDistance = useSelector(placeDistanceSelector);
    const placeDistanceCenter = useSelector(placeDistanceCenterSelector);
    const mapCenterBound = useSelector(mapCenterBoundSelector);

    const mapRef = useRef<kakao.maps.Map>(null);
    useEffect(() => {
        const map = mapRef.current;
        if (map && mapCenterBound) map.setBounds(mapCenterBound);
    }, [mapCenterBound]);

    return (
        <Container>
            <Map
                center={{ lat: 33.450701, lng: 126.570667 }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                ref={mapRef}
            >
                {placeList.length > 0 &&
                    placeList[setDay].length > 0 &&
                    placeList[setDay].map((placeDetail, index) => {
                        const position = getPositionByIPlace(placeDetail);
                        return (
                            <>
                                <MapMarker
                                    key={`marker-${placeDetail.name}-${placeDetail.latitude}-${placeDetail.longitude}`}
                                    position={position}
                                    image={{
                                        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                                        size: {
                                            width: 24,
                                            height: 35,
                                        },
                                    }}
                                    title={placeDetail.name}
                                />
                                <Polyline
                                    key={`line-${placeDetail.name}-${placeDetail.latitude}-${placeDetail.longitude}`}
                                    path={
                                        index > 0
                                            ? [
                                                  getPositionByIPlace(
                                                      placeList[setDay][
                                                          index - 1
                                                      ],
                                                  ),
                                                  position,
                                              ]
                                            : [position]
                                    }
                                    strokeWeight={3} // 선의 두께입니다
                                    strokeColor="#db4040" // 선의 색깔입니다
                                    strokeOpacity={0.5} // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                                    strokeStyle="solid" // 선의 스타일입니다
                                    onCreate={(data) =>
                                        console.log(
                                            'CUSTOM LENGTH',
                                            data.getLength(),
                                        )
                                    }
                                />
                            </>
                        );
                    })}
            </Map>
        </Container>
    );
};

const getPositionByIPlace = (data: Place) => ({
    lng: Number(data.longitude),
    lat: Number(data.latitude),
});

const Container = styled.div`
    background-color: #faeacd;

    width: 810px;
    height: 620px;
    margin: 0 30px 30px 30px;
`;

export default CourseMap;
