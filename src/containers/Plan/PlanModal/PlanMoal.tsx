/* eslint-disable camelcase */
import { LocationIcon, SearchIcon } from 'components/icons';
import Modal from 'components/Modal';
import PlaceItem from 'containers/Plan/PlanModal/PlaceItem';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { largeModal } from 'store/modules/modal';
import styled from 'styled-components';

interface placeInfo {
    place_name: string;
    place_img_url: string | undefined;
    place_url?: string;
    address: string;
    road_address?: string;
    lat: string;
    lng: string;
}

const searchKakaoImage = async (
    keyword: string,
): Promise<string | undefined> => {
    try {
        const res = await fetch(
            `https://dapi.kakao.com/v2/search/image?query=${keyword} &size=1&sort=sim`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'KakaoAK 893bfbac1c7f570ab519588089eea08c',
                },
            },
        );

        const data = await res.json();
        console.log(keyword, data);
        return data.documents[0]?.thumbnail_url;
    } catch (e) {
        return '';
    }
};

const PlanModal = () => {
    const [searchFormInput, setSearchFormInput] = useState<string>();

    const [placeList, setPlaceList] = useState<placeInfo[]>([]);

    return (
        <Modal width={1111} height={884}>
            <Contents>
                <Title>
                    <LocationIcon width="23px" height="27px" />
                    나만의 장소 추가하기
                </Title>
                <PlaceSlider>
                    <div>PlaceInfo</div>
                </PlaceSlider>
                <PlaceSearchForm
                    onSubmit={(e) => {
                        e.preventDefault();

                        const ps = new kakao.maps.services.Places();

                        ps.keywordSearch(
                            `${searchFormInput} 관광명소`,
                            async (data, status, _pagination) => {
                                if (status === kakao.maps.services.Status.OK) {
                                    // console.log(data);
                                    const list: any = data.map(
                                        async (place): Promise<placeInfo> => {
                                            const place_img_url =
                                                await searchKakaoImage(
                                                    place.address_name,
                                                );
                                            return {
                                                place_name: place.place_name,
                                                place_img_url,
                                                place_url: place.place_url,
                                                address: place.address_name,
                                                road_address:
                                                    place?.road_address_name,
                                                lat: place.x,
                                                lng: place.y,
                                            };
                                        },
                                    );
                                    setPlaceList(await Promise.all(list));
                                } else if (
                                    status ===
                                    kakao.maps.services.Status.ZERO_RESULT
                                ) {
                                    alert('검색 결과가 존재하지 않습니다.');
                                } else if (
                                    status === kakao.maps.services.Status.ERROR
                                ) {
                                    alert('검색 결과 중 오류가 발생했습니다.');
                                }
                            },
                        );

                        console.log(searchFormInput);
                        console.log('execute');
                    }}
                >
                    <SearchIcon width="24px" height="23px" />
                    <PlaceSearchInput
                        placeholder="장소를 입력해주세요"
                        onChange={(e) => setSearchFormInput(e.target.value)}
                        value={searchFormInput}
                    />
                </PlaceSearchForm>
                <PlaceSearchResult>
                    <header> 검색결과</header>
                    <div className="contents">
                        {placeList.map((data: any) => (
                            <PlaceItem
                                img={data.place_img_url}
                                name={data.place_name}
                                address={data.address_name}
                            />
                        ))}
                    </div>
                </PlaceSearchResult>
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

const Title = styled.p`
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

const PlaceSearchForm = styled.form`
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

const PlaceSearchInput = styled.input`
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

const PlaceSearchResult = styled.div`
    margin: 36px 80px;
    header {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
    }
    .contents {
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
