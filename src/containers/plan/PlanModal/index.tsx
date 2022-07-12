import Modal from 'components/Modal';
import React from 'react';
import styled from 'styled-components';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from 'store/modules/search';

import PlanModalTitle from './PlanModalTitle';
import PlanPlaceForm from './PlanPlaceForm';
import PlanModalContents from './PlanModalContents';
import PlanPlaceSelected from './PlanPlaceSelected';

const state = (state: RootState) => state.search.state;
const selectedList = (state: RootState) => state.search.selectedPlaces;

const PlanModal = () => {
    const contentsType = useSelector(state);
    const dispatch = useDispatch();
    return (
        <Modal width={1111} height={884}>
            <Container>
                <PlanModalTitle
                    state={contentsType}
                    onClick={() => {
                        dispatch(changeState());
                    }}
                />
                <PlanPlaceSelected />
                <PlanPlaceForm />
                <PlanModalContents />
                <SubmitButton>등록완료</SubmitButton>
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 65px 20px 65px;
`;

const SubmitButton = styled.button`
    width: 430px;
    height: 56px;
    cursor: pointer;
    background: #60a5f8;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    align-self: center;
    border: 0px;

    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    color: white;

    position: relative;
    padding: 10px 20px;
    font-size: 28px;
    transition: all 1s;
    &:after,
    &:before {
        content: ' ';
        width: 10px;
        height: 10px;
        position: absolute;
        border: 0px solid #fff;
        transition: all 1s;
    }
    &:after {
        top: -1px;
        left: -1px;
        border-top: 0x solid white;
        border-left: 0px solid white;
    }
    &:before {
        bottom: -1px;
        right: -1px;
        border-bottom: 0px solid white;
        border-right: 0px solid white;
    }
    &:hover {
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        color: #343434;
        &:before {
            width: 100%;
            height: 100%;
            border-bottom: 5px solid #dedede;
            border-right: 5px solid #dedede;
            border-color: white;
        }
        &:after {
            width: 100%;
            height: 100%;
            border-top: 5x solid #dedede;
            border-left: 5px solid #dedede;
            border-color: white;
        }
    }
`;
// width: 430px;
// height: 56px;

export default PlanModal;
