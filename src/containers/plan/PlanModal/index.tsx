import Modal from 'components/Modal';
import React from 'react';
import styled from 'styled-components';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { changeState, dropAllSelectedPlaces } from 'store/modules/plan/search';

import SubmitButton from 'components/StyledSmitButton';
import { insertPlaceOptionList } from 'store/modules/plan/plan';
import PlanModalTitle from './PlanModalTitle';
import PlanPlaceForm from './PlanPlaceForm';
import PlanModalContents from './PlanModalContents';
import PlanPlaceSelected from './PlanPlaceSelected';

const state = (state: RootState) => state.search.state;
const selectedListSelector = (state: RootState) => state.search.selectedPlaces;

const PlanModal = () => {
    const contentsType = useSelector(state);
    const selectedList = useSelector(selectedListSelector);
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
                <SubmitButton
                    width={430}
                    height={56}
                    onClick={() => {
                        console.log('Model confirm Execute!!!');
                        dispatch(dropAllSelectedPlaces());
                        dispatch(insertPlaceOptionList(selectedList));
                        // dispatch(largeModal(false));
                    }}
                >
                    등록완료
                </SubmitButton>
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

// width: 430px;
// height: 56px;

export default PlanModal;
