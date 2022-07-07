import React, { FC } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/Main/PlanList';
import LocationList from 'containers/Main/LocationList';

const Main: FC = () => {
    
    return (
        <Wrapper>
            <Header />
            <PlanList />
            <LocationList />
        </Wrapper> 
    )
};

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
