import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// containers
import PlanInfo from 'containers/plan/PlanInfo';
import OptionMaker from 'containers/plan/OptionMaker';
import Map from 'containers/plan/Map';
import PlanMaker from 'containers/plan/PlanMaker';

// redux (type, reducer)
import { IPlace, initializeData } from 'store/modules/plan';
import { RootState } from 'store/modules';
import Header from 'components/Header';
import PlanModal from 'containers/plan/PlanModal';

// dummy data
const dummyPlanList: IPlace[][] = [
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
const dummyPlaceOptionList: IPlace[] = [
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

    useEffect(() => {
        dispatch(
            initializeData({
                initPlanDetailList: dummyPlanList,
                initPlaceOptionList: dummyPlaceOptionList,
            }),
        );
    }, []);

    // useEffect(() => {
    //     simulateAPI();
    //     setIsInit(true);
    // }, []);

    // const simulateAPI = () => {
    //     const initPlanList: IPlace[][] = dummyPlanList;
    //     const initPlaceOptionList: IPlace[] = dummyPlaceOptionList;
    //     dispatch(initializeData({ initPlanList, initPlaceOptionList }));
    // };

    return (
        <Wrapper>
            <PlanModal />
            <Header />
            <Container>
                <PlanInfo />
                <OptionMaker />
                <div className="bottom-section">
                    <Map />
                    <PlanMaker />
                </div>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;

const Container = styled.div`
    width: 1440px;
    margin: auto;

    & .bottom-section {
        display: flex;
    }
`;

export default Plan;
