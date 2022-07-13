import React, { FC } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/main/PlanList';
import LocationList from 'containers/main/LocationList';

const Main: FC = () => {
    return (
        <Wrapper>
            <Header />
            <PlanList />
            <LocationList />
        </Wrapper>
    )
};

export default Main;

const Wrapper = styled.div`
    width: 100%;
`;