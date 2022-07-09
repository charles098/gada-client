/* eslint-disable camelcase */
import { LocationIcon, SearchIcon } from 'components/icons';
import Modal from 'components/Modal';
import PlaceItem from 'containers/Plan/PlanModal/PlaceItem';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { largeModal } from 'store/modules/modal';
import styled from 'styled-components';

const PlanModal = () => {
    const [searchFormInput, setSearchFormInput] = useState<string>();

    const [search, setSearch] = useState<any>([]);

    function handleSubmit(e: FormEvent<HTMLDivElement>) {
        e.preventDefault();
    }

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
                            searchFormInput,
                            (data, status, _pagination) => {
                                if (status === kakao.maps.services.Status.OK) {
                                    console.log(data);
                                    setSearch(data ?? []);
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
                        {search.map(({ address_name, place_name }: any) => (
                            <PlaceItem
                                name={place_name}
                                address={address_name}
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
