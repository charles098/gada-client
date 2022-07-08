import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { PlanDetail, initializeData } from 'store/modules/plan';

const initData = [
    {
        day: 1,
        sequence: 2,
        name: 'busan trip - 1',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
    {
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
    {
        day: 1,
        sequence: 2,
        name: 'busan trip - 3',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
];

const planListSelector = (state: any) => state.plan.planList;

const SetupRoute: FC = () => {
    const dispatch = useDispatch();
    const planList = useSelector(planListSelector);

    useEffect(() => {
        dispatch(initializeData({ initData }));
    }, []);

    return (
        <Container>
            {planList &&
                planList.map((x: PlanDetail) => (
                    <Place>
                        <Name>{x.name}</Name>
                        <Location>{x.address}</Location>
                    </Place>
                ))}
        </Container>
    );
};

export default SetupRoute;

const Container = styled.div`
    width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    overflow: scroll;
`;

const Place = styled.div`
    cursor: move;
    width: 400px;
    height: 80px;
    margin-bottom: 35px;
    border-radius: 13px;
    box-shadow: 1px 1px 10px 1px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.div`
    font-size: 20px;
    margin: 0 0 7px 15px;
`;

const Location = styled.div`
    margin-left: 15px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
`;
