import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// containers
import PlanInfo from 'containers/plan/PlanHeader';
import OptionMaker from 'containers/plan/PlaceOptionMaker';
import Map from 'containers/plan/PlanContents/EachPlan/CourseMap';
import PlanMaker from 'containers/plan/PlanContents/EachPlan/EachPlanEditor';
import AllPlan from 'containers/plan/PlanContents/AllPlan';

// redux (type, reducer)
import { getPlanInfoById, initializeData } from 'store/modules/plan/plan';
import { Place } from 'store/modules/plan';
import EachPlan from 'containers/plan/PlanContents/EachPlan';

const Plan: FC = () => {
    const dispatch = useDispatch<any>();
    const [isInit, setIsInit] = useState(true);
    const [isAllPlan, setIsAllPlan] = useState<boolean>(false);

    useEffect(() => {
        // dispatch(getPlanInfoById(''));
    }, []);

    // useEffect(() => {
    //     simulateAPI();
    //     setIsInit(true);
    // }, []);

    // const simulateAPI = () => {
    //     const initPlanList: Place[][] = dummyPlanList;
    //     const initPlaceOptionList: Place[] = dummyPlaceOptionList;
    //     dispatch(initializeData({ initPlanList, initPlaceOptionList }));
    // };

    return (
        <Container>
            <PlanInfo />
            <OptionMaker />
            <div className="bottom-section">
                <EachPlan />
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 1440px;
    margin: auto;

    & .bottom-section {
        display: flex;
        padding-top: 30px;
    }
`;

export default Plan;
