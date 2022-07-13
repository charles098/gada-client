import React, { FC } from 'react';
import styled from 'styled-components';
import dragImg from 'images/drag2.png';
import PlaceOption from 'components/SelectedOption/SelectedOption';
import { useDispatch, useSelector } from 'react-redux';
import { largeModal } from 'store/modules/modal';
import { RootState } from 'store/modules';

const OptionMaker: FC = () => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(largeModal(!largeModalIsOpen));
    };

    return (
        <Container>
            <img className="drag-explanation" src={dragImg} alt="drag" />
            <AddOptionButton onClick={handleClick}>장소 추가</AddOptionButton>
            <PlaceOption />
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
