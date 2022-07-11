import { SearchIcon } from 'components/icons';
import Modal from 'components/Modal';
import PickMapPlace from 'containers/plan/PlanModal/PickMapPlace';
import UserSelectedPlace from 'containers/plan/PlanModal/UserSelectedPlace';
import React, { useRef, useState, useMemo } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import { onChangePlaceInput, submitPlaceForm } from './PlanModal.controler';

import { PlaceInfo, PlaceInputTypes, Position } from './PlanModal.types';
import PlanModalTitle from './PlanModalTitle';
import PlanPlaceForm from './PlanPlaceForm';

const SEARCH_PLACE = true;

const PlanModal = () => {
    const [contents, setContents] = useState<boolean>(SEARCH_PLACE);
    const [position, setPosition] = useState<Position>();
    const [moving, setMoving] = useState<Position>();
    const [placeFormInput, setPlaceFormInput] = useState<PlaceInputTypes>({
        bySearch: '',
        byPick: '',
    });
    const mapCenter: Position = useMemo(
        () =>
            position ?? {
                // 카카오 본사
                lat: 33.450701,
                lng: 126.570667,
            },
        [contents],
    );

    const [userSelectedPlaces, setUserSelectedPlaces] = useState<PlaceInfo[]>();
    const [placeList, setPlaceList] = useState<PlaceInfo[]>([]);

    return (
        <Modal width={1111} height={884}>
            <Contents>
                <PlanModalTitle
                    state={contents}
                    onClick={() => setContents((f) => !f)}
                />
                <PlaceSlider>
                    <UserSelectedPlace places={userSelectedPlaces} />
                </PlaceSlider>
                <PlanPlaceForm
                    onSubmit={submitPlaceForm(
                        contents,
                        placeFormInput,
                        setPlaceList,
                        setMoving,
                    )}
                    onChange={onChangePlaceInput(contents, setPlaceFormInput)}
                    value={
                        contents
                            ? placeFormInput.bySearch
                            : placeFormInput.byPick
                    }
                />

                <PlaceContents>
                    {contents ? (
                        <>
                            <header> 검색결과</header>
                            <div className="contents">
                                {placeList.map((data: PlaceInfo) => (
                                    <PlaceItem
                                        imgUrl={data.imgUrl}
                                        name={data.name}
                                        address={data.address}
                                        onClick={() => {
                                            setUserSelectedPlaces((places) =>
                                                places
                                                    ? [...places, data]
                                                    : [data],
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <Map
                            center={moving ?? mapCenter}
                            isPanto={moving !== undefined}
                            style={{
                                // 지도의 크기
                                width: '100%',
                                height: '470px',
                            }}
                            level={3}
                            zoomable={false}
                            onClick={(_t, mouseEvent) =>
                                setPosition({
                                    lat: mouseEvent.latLng.getLat(),
                                    lng: mouseEvent.latLng.getLng(),
                                })
                            }
                        >
                            {position && (
                                <PickMapPlace
                                    position={position}
                                    callback={(customPlace: PlaceInfo) => {
                                        setUserSelectedPlaces((places) =>
                                            places
                                                ? [...places, customPlace]
                                                : [customPlace],
                                        );
                                    }}
                                />
                            )}
                        </Map>
                    )}
                </PlaceContents>
                <SubmitButton>등록완료</SubmitButton>
            </Contents>
        </Modal>
    );
};

const Contents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 65px 20px 65px;
`;

const PlaceSlider = styled.div`
    margin: 28px 70px;
    width: 970px;
    height: 85px;
`;

const PlaceContents = styled.div`
    margin: 20px 80px;
    header {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
    }
    .contents {
        padding-right: 20px;

        margin-top: 20px;
        height: 421px;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #60a5f8bb;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: #dedede;
            border-radius: 10px;
            box-shadow: inset 0px 0px 5px white;
        }
    }
    .info_view {
    }
`;
const SubmitButton = styled.button`
    width: 430px;
    height: 56px;
    background: #60a5f8;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    align-self: center;
    border: 0px;

    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: white;
`;

export default PlanModal;
