import React, { FC } from 'react';
import styled from 'styled-components';

import ShowDistance from 'components/ShowDistance';
import SetupRoute from 'components/SetupRoute';

const PlanMaker: FC = () => {
    const dayList = Array.from({ length: 3 }, (x, i) => i + 1);

    return (
        <Container>
            <DayPicker>
                <button type="button" className="all-button">
                    All
                </button>
                {dayList.map((day) => (
                    <button type="button" className="day-button">
                        Day{day}
                    </button>
                ))}
            </DayPicker>
            <RouteContainer>
                <ShowDistance />
                <SetupRoute />
            </RouteContainer>
        </Container>
    );
};

export default PlanMaker;

const Container = styled.div`
    width: 635px;
    height: 620px;
    margin: 0 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayPicker = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;

    & > .all-button {
        cursor: pointer;
        border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY};
        color: white;
        font-size: 17px;
        width: 110px;
        height: 40px;
        margin-left: 15px;
    }

    & > .day-button {
        cursor: pointer;
        border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
        border-radius: 20px;
        background-color: white;
        font-size: 17px;
        width: 110px;
        height: 40px;
        margin-left: 15px;
    }
`;

const RouteContainer = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
`;
