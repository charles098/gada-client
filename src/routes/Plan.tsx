import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';

// containers
import PlanInfo from 'containers/plan/PlanInfo';
import OptionMaker from 'containers/plan/OptionMaker';
import Map from 'containers/plan/Map';
import PlanMaker from 'containers/plan/PlanMaker';

// redux (type, reducer)
import { IPlace, initializeData } from 'store/modules/plan';

// dummy data
const dummyPlanDetailList: IPlace[] = [
    {
        id: 1,
        day: 1,
        sequence: 3,
        name: 'busan trip - 3',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 2,
        day: 1,
        sequence: 4,
        name: 'busan trip - 4',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 3,
        day: 1,
        sequence: 0,
        name: 'busan trip - 0',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 4,
        day: 1,
        sequence: 2,
        name: 'busan trip - 2',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
];
const dummyPlaceOptionList: IPlace[] = [
    {
        id: 33,
        day: 1,
        sequence: 3,
        name: 'new plan - 3',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 44,
        day: 1,
        sequence: 4,
        name: 'new plan - 4',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 1010,
        day: 1,
        sequence: 0,
        name: 'new plan - 0',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 888,
        day: 1,
        sequence: 2,
        name: 'new plan - 8',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 777,
        day: 1,
        sequence: 2,
        name: 'new plan - 7',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
    {
        id: 666,
        day: 1,
        sequence: 2,
        name: 'new plan - 6',
        address: 'jeju',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
        imgUrl: 'http',
    },
];

const Plan: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initPlanDetailList: IPlace[] = dummyPlanDetailList.sort(
            (a, b) => a.sequence - b.sequence,
        );
        const initPlaceOptionList: IPlace[] = dummyPlaceOptionList;
        dispatch(initializeData({ initPlanDetailList, initPlaceOptionList }));
    }, []);

    return (
        <Container>
            <PlanInfo />
            <OptionMaker />
            <div className="bottom-section">
                <Map />
                <PlanMaker />
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
