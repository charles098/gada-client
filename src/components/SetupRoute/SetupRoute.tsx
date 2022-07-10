import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { RootState } from 'store/modules';
import { PlanDetail, initializeData, update } from 'store/modules/plan';

const data: Array<PlanDetail> = [
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
    {
        id: 5,
        day: 1,
        sequence: 1,
        name: 'busan trip - 1',
        address: 'busan',
        longitude: '3',
        latitude: '4',
        description: 'fsdf',
        cost: 2333,
        category: 'fsdf',
    },
];

const planListSelector = (state: RootState) => state.plan.planList;

const SetupRoute: FC = () => {
    const dispatch = useDispatch();
    const planList = useSelector(planListSelector);

    useEffect(() => {
        const initData: Array<PlanDetail> = data.sort(
            (a, b) => a.sequence - b.sequence,
        );
        dispatch(initializeData({ initData }));
    }, []);

    const getSortableList = (list: Array<PlanDetail>): Array<PlanDetail> => {
        return list.map((x) => ({
            ...x,
            chosen: true,
        }));
    };

    const onSort = (list: Array<PlanDetail>): void => {
        dispatch(update({ list }));
    };

    return (
        <ReactSortable
            tag={Container}
            animation={150}
            list={getSortableList(planList)}
            setList={onSort}
        >
            {planList.map((plan: PlanDetail) => (
                <Place key={plan.id}>
                    <Name>{plan.name}</Name>
                    <Location>{plan.address}</Location>
                </Place>
            ))}
        </ReactSortable>
    );
};

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
    cursor: grab;
    width: 400px;
    height: 80px;
    margin-bottom: 35px;
    border-radius: 13px;
    box-shadow: 1px 1px 10px 1px #d9d9d9;
    background-color: white;
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

export default SetupRoute;
