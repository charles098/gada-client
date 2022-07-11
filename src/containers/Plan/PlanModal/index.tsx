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
