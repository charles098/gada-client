import { SearchIcon } from 'components/icons';
import React from 'react';
import styled from 'styled-components';

import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput, setPlaceList, setMoving } from 'store/modules/search';
import { pickByKeyword, searchByKeyword } from '../searchScenario';

const search = (state: RootState) => state.search.search;
const state = (state: RootState) => state.search.state;
const list = (state: RootState) => state.search.placeList;

const PlanPlaceForm = () => {
    const dispatch = useDispatch();
    const searchInputs = useSelector(search);
    const contentsType = useSelector(state);
    const plist = useSelector(list);
    return (
        <PlaceForm
            onSubmit={async (e) => {
                e.preventDefault();
                if (contentsType) {
                    if (!searchInputs.bySearch) return;
                    const places = await searchByKeyword(searchInputs.bySearch);
                    dispatch(setPlaceList(places));
                    console.log(plist);
                } else {
                    const movePoint = await pickByKeyword(searchInputs.byPick);
                    dispatch(setMoving(movePoint));
                }
            }}
        >
            <SearchIcon width="24px" height="23px" />
            <PlaceInput
                placeholder="장소를 입력해주세요"
                onChange={(e) => {
                    const { value } = e.target;
                    dispatch(setSearchInput(value));
                }}
                value={
                    contentsType ? searchInputs.bySearch : searchInputs.byPick
                }
            />
        </PlaceForm>
    );
};

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

export default PlanPlaceForm;
