import React, { FC } from 'react';
import styled from 'styled-components';
import dragImg from 'images/drag2.png';
import SelectedPlaceOption from 'containers/plan/PlaceOptionMaker/SelectedPlaceOption';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenState, changeModalName } from 'store/modules/modal';
import { RootState } from 'store/modules';

const ModalSelector = (state: RootState) => state.modal;

const OptionMaker: FC = () => {
    const { modalIsOpen } = useSelector(ModalSelector);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeModalName('PlanModal'));
        dispatch(changeOpenState(!modalIsOpen));
    };

    return (
        <Container>
            <img className="drag-explanation" src={dragImg} alt="drag" />
            <AddOptionButton onClick={handleClick}>장소 추가</AddOptionButton>
            <SelectedPlaceOption />
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    height: 130px;
    margin: 30px;
    position: relative;

    & > .drag-explanation {
        width: 280px;
        position: absolute;
        left: 1080px;
        top: -30px;
    }
`;

const AddOptionButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.PRIMARY};
    padding: 0;
    margin-left: 15px;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
`;

export default OptionMaker;
