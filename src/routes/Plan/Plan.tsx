import React, { FC } from 'react';
import styled from 'styled-components';

// containers
import PlanInfo from 'containers/Plan/PlanInfo';
import PlaceOption from 'containers/Plan/PlaceOption';
import Map from 'containers/Plan/Map';
import PlanMaker from 'containers/Plan/PlanMaker';

const Plan: FC = () => {
    return (
        <Container>
            {/* header 삭제 */}
            <div
                className="header"
                style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: '#60A5F8',
                }}
            />

            <PlanInfo />
            <PlaceOption />
            <div className="main">
                <Map />
                <PlanMaker />
            </div>
        </Container>
    );
};

export default Plan;

const Container = styled.div`
    width: 1440px;
    margin: auto;

    & .main {
        display: flex;
    }
`;
