import React, { FC } from 'react';
import styled from 'styled-components';

import DayPicker from 'components/DayPicker';
import ShowDistance from 'components/ShowDistance';
import SetupRoute from 'components/SetupRoute';

const PlanMaker: FC = () => {
    return (
        <Container>
            <DayPicker />
            <RouteContainer>
                <ShowDistance />
                <SetupRoute />
            </RouteContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 635px;
    height: 620px;
    margin: 0 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RouteContainer = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
`;

export default PlanMaker;
