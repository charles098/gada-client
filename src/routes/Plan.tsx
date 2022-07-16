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
import { initializeData } from 'store/modules/plan/plan';
import { Place } from 'store/modules/plan';
import EachPlan from 'containers/plan/PlanContents/EachPlan';

// dummy data
const dummyPlanList: Place[][] = [
    [
        {
            id: '1',
            day: 1,
            name: 'day 1 - 3',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '2',
            day: 1,
            name: 'day 1 - 4',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '3',
            day: 1,
            name: 'day 1 - 0',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '4',
            day: 1,
            name: 'day 1 - 2',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
    ],
    [
        {
            id: '1',
            day: 1,
            name: 'BUSAN - 1',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '2',
            day: 1,
            name: 'BUSAN - 2',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '3',
            day: 1,
            name: 'BUSAN - 3',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '4',
            day: 1,
            name: 'BUSAN - 4',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
    ],
    [
        {
            id: '1',
            day: 1,
            name: 'JEJU - 1',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '2',
            day: 1,
            name: 'JEJU - 2',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '3',
            day: 1,
            name: 'JEJU - 3',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
        {
            id: '4',
            day: 1,
            name: 'JEJU - 4',
            address: 'busan',
            longitude: '3',
            latitude: '4',
            description: 'fsdf',
            cost: 2333,
            category: 'fsdf',
        },
    ],
];
const dummyPlaceOptionList: Place[] = [
    {
        id: '33',
        day: 1,
        name: 'new plan - 3',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
        id: '44',
        day: 1,
        name: 'new plan - 4',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
        id: '1010',
        day: 1,
        name: 'new plan - 0',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
        id: '888',
        day: 1,
        name: 'new plan - 8',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
        id: '777',
        day: 1,
        name: 'new plan - 7',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
        id: '666',
        day: 1,
        name: 'new plan - 6',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
];

const Plan: FC = () => {
    const dispatch = useDispatch();
    const [isInit, setIsInit] = useState(true);
    const [isAllPlan, setIsAllPlan] = useState<boolean>(false);

    useEffect(() => {
        // dispatch(
        //     initializeData({
        //         initPlanDetailList: dummyPlanList,
        //         initPlaceOptionList: dummyPlaceOptionList,
        //     }),
        // );
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
    }
`;

export default Plan;
