import React, { FC, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { RootState } from 'store/modules';
import { PlanDetail, sortPlanList } from 'store/modules/plan';

const planListSelector = (state: RootState) => state.plan.planList;

const SetupRoute: FC = () => {
    const dispatch = useDispatch();
    const planList = useSelector(planListSelector);
    const isGrabInnerItem = useRef(false);
    const enterCount = useRef(0);

    const onDragStart = useCallback((e: React.DragEvent<HTMLElement>) => {
        isGrabInnerItem.current = true;
    }, []);

    const onDragEnd = useCallback((e: React.DragEvent<HTMLElement>) => {
        isGrabInnerItem.current = false;
    }, []);

    const onDragEnter = useCallback((e: React.DragEvent<HTMLElement>) => {
        if (isGrabInnerItem.current) return;
        enterCount.current += 1;
        e.currentTarget.classList.add('drag-over');
    }, []);

    const onDragLeave = useCallback((e: React.DragEvent<HTMLElement>) => {
        enterCount.current -= 1;
        if (enterCount.current === 0) {
            e.currentTarget.classList.remove('drag-over');
        }
    }, []);

    const onDrop = useCallback((e: React.DragEvent<HTMLElement>) => {
        if (isGrabInnerItem.current) return;
        e.currentTarget.classList.remove('drag-over');
        console.dir(e.dataTransfer);
    }, []);

    // util로 분리
    const getSortableList = (list: Array<PlanDetail>): Array<PlanDetail> => {
        return list.map((x) => ({
            ...x,
            chosen: true,
        }));
    };

    // util로 분리
    const onSort = (list: Array<PlanDetail>): void => {
        dispatch(sortPlanList({ list }));
    };

    return (
        <Container
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <ReactSortable
                animation={150}
                list={getSortableList(planList)}
                setList={onSort}
            >
                {planList.map((plan: PlanDetail) => (
                    <Place
                        key={plan.id}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    >
                        <Name>{plan.name}</Name>
                        <Location>{plan.address}</Location>
                    </Place>
                ))}
            </ReactSortable>
        </Container>
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

    &.drag-over {
        border: solid 2px ${({ theme }) => theme.PRIMARY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
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
