import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// containers
import PlanInfo from 'containers/plan/PlanInfo';
import OptionMaker from 'containers/plan/OptionMaker';
import Map from 'containers/plan/Map';
import PlanMaker from 'containers/plan/PlanMaker';

// redux (type, reducer)
import { PlanDetail, PlaceOption, initializeData } from 'store/modules/plan';

// dummy data
const dummyPlanDetailList: Array<PlanDetail> = [
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
    },
];
const dummyPlaceOptionList: Array<PlaceOption> = [
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
    },
    {
        id: 22,
        day: 1,
        sequence: 2,
        name: 'new plan - 2',
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
        const initPlanDetailList: Array<PlanDetail> = dummyPlanDetailList.sort(
            (a, b) => a.sequence - b.sequence,
        );
        const initPlaceOptionList: Array<PlaceOption> = dummyPlaceOptionList;
        dispatch(initializeData({ initPlanDetailList, initPlaceOptionList }));
    }, []);

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
            <OptionMaker />
            <div className="bottom-section">
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

    & .bottom-section {
        display: flex;
    }
`;
