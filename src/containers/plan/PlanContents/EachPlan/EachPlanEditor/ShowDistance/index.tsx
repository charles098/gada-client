import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import styled from 'styled-components';

const planListSelector = (state: RootState) => state.plan.planList;

const ShowDistance: FC = () => {
    return <Container>hi</Container>;
};

const Container = styled.div`
    padding-top: 15px;
    background-color: #f2fbcb;
    width: 80px;
    margin-left: 40px;
`;
const PlacePointBox = styled.div`
    height: 80px;
    margin-bottom: 35px;
`;

export default ShowDistance;
