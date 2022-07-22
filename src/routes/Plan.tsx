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
import {
    getPlanInfoById,
    initializeData,
    initializePlanState,
} from 'store/modules/plan/plan';
import { Place } from 'store/modules/plan';
import EachPlan from 'containers/plan/PlanContents/EachPlan';
import { useParams } from 'react-router-dom';
import getAuthHeader from 'utils/getAuthHeader';
import { toast, ToastContainer } from 'react-toastify';
// toastify

const Plan: FC = () => {
    const dispatch = useDispatch<any>();
    const { id } = useParams<'id'>();
    const headers = getAuthHeader();

    useEffect(() => {
        console.log(id);
        if (id) dispatch(getPlanInfoById({ headers, planId: id }));
        return () => dispatch(initializePlanState);
    }, []);

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
