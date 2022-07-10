/* eslint-disable camelcase */
import { LocationIcon, SearchIcon } from 'components/icons';
import Modal from 'components/Modal';
import PlaceItem from 'containers/Plan/PlanModal/PlaceItem';
import React, {
    ErrorInfo,
    FormEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

import { searchByKeyword } from './searchScenario';
import { placeInfo } from './types';

const SEARCH_PLACE = true;
const PICK_PALCE = false;

const PlanModal = () => {
    const [contents, setContents] = useState<boolean>(SEARCH_PLACE);

    const [searchFormInput, setSearchFormInput] = useState<string>();
    const [userPlaceList, setUserPlaceList] = useState<placeInfo[]>([]);
    const [placeList, setPlaceList] = useState<placeInfo[]>([]);

    const handleClick = () => setContents((f) => !f);

    const scrollRef = useRef<HTMLDivElement>(null);
    return (
        <Modal width={1111} height={884}>
            <Contents>
                <Title>
                    <ContentsTrigger onClick={() => setContents((f) => !f)}>
                        <LocationIcon width="23px" height="27px" />
                        {contents ? '나만의 장소 추가하기' : '검색으로 찾기'}
                    </ContentsTrigger>
                </Title>
                <PlaceSlider>
                    <div>PlaceInfo</div>
                </PlaceSlider>
                <PlaceForm
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            setPlaceList(
                                await searchByKeyword(searchFormInput),
                            );
                        } catch (e: any | Error) {
                            alert(e?.message);
                        }
                    }}
                >
                    <SearchIcon width="24px" height="23px" />
                    <PlaceInput
                        placeholder="장소를 입력해주세요"
                        onChange={(e) => setSearchFormInput(e.target.value)}
                        value={searchFormInput}
                    />
                </PlaceForm>
                <PlaceContents>
                    {contents ? (
                        <>
                            <header> 검색결과</header>
                            <div className="contents" ref={scrollRef}>
                                {placeList.map((data: any) => (
                                    <PlaceItem
                                        img={data.place_img_url}
                                        name={data.place_name}
                                        address={data.address}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <Map />
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

const Title = styled.p``;
const ContentsTrigger = styled.button`
    display: inline;
    border: 0px;
    background: none;
    text-decoration: none;
    font-size: 22px;
    font-weight: 700;
    padding-left: 70px;
    line-height: 32px;
    color: #3d95ff;
`;

const PlaceSlider = styled.div`
    margin: 28px 70px;
    width: 970px;
    height: 85px;
`;

const PlaceForm = styled.form`
    box-sizing: border-box;

    width: 975px;
    height: 47px;
    margin-left: 65px;

    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 15px;

    padding: 13px 11px 13px 20px;

    display: flex;
`;

const PlaceInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0px;
    margin-left: 25px;
    border: 0px;
    outline: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
`;

const PlaceContents = styled.div`
    margin: 36px 80px;
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
        height: 400px;
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
