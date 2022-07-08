import { LocationIcon, SearchIcon } from 'components/icons';
import Modal from 'components/Modal';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { largeModal } from 'store/modules/modal';
import styled from 'styled-components';

const PlanModal = () => {
    const [searchFormInput, setSearchFormInput] = useState<string>();

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
                    <button type="submit">확인</button>
                </PlaceSearchForm>
                <PlaceSearchResult>
                    <header> 검색결과</header>
                    <div className="contents">HelloWorld</div>
                </PlaceSearchResult>
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
    }
`;
export default PlanModal;
