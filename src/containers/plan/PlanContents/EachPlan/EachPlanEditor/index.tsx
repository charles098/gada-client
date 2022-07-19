import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'store/modules';
import DayPicker from 'components/DayPicker';
import { createPlanListArray } from 'store/modules/plan/plan';
import { getPeriod } from 'utils/planUtils';
import ShowDistance from './ShowDistance';
import SetupRoute from './SetupRoute';

const startDateSelector = (state: RootState) => state.plan.startDate;
const lastDateSelector = (state: RootState) => state.plan.lastDate;

const PlanMaker: FC = () => {
    const startDate = useSelector(startDateSelector);
    const dispatch = useDispatch();
    const lastDate = useSelector(lastDateSelector);
    const [planPeriod, setPlanPeriod] = useState<number | null>(null);

    useEffect(() => {
        const period = getPeriod(startDate, lastDate);
        // console.log('CUSTOM', period);
        setPlanPeriod(period);
        dispatch(createPlanListArray({ days: period }));
    }, [startDate, lastDate]);

    return (
        <Container>
            <DayPicker planPeriod={planPeriod as number} />
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
    box-shadow: 0px 0px 6px rgb(0 0 0 / 20%);
    border-radius: 5px;
`;

const RouteContainer = styled.div`
    width: 100%;
    height: 620px;
    display: flex;

    overflow-x: hidden;
    overflow-y: scroll !important;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px white;
    }
`;

export default PlanMaker;
