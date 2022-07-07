import React, { FC } from 'react';
import styled from 'styled-components';

const PlaceOption: FC = () => {
    return (
        <Container>
            <AddPlaceButton>장소 추가하기</AddPlaceButton>
        </Container>
    );
};

export default PlaceOption;

const Container = styled.div`
    width: auto;
    height: 115px;
    margin: 30px;
    background-color: green;
`;

const AddPlaceButton = styled.button``;
