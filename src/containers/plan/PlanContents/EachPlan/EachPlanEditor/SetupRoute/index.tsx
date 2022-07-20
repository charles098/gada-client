import React, { FC, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { RootState } from 'store/modules';
import {
    grabPlan,
    grabPlaceOption,
    movePlaceOptionToPlan,
    sortPlanList,
    sortPlanListFailCheck,
} from 'store/modules/plan/plan';
import { Place } from 'store/modules/plan';
import { PlanDetailModel } from 'store/modules/plan/plan.model';
import RoutItem from './RoutItem';

const planListSelector = (state: RootState) => state.plan.planList;
const planOptionListSelector = (state: RootState) => state.plan.placeOptionList;

const setDaySelector = (state: RootState) => state.plan.setDay;
const shareModeSelector = (state: RootState) => state.plan.shareMode;

const grabPlaceOptionIdSelector = (state: RootState) =>
    state.plan.grabPlaceOptionId;

const SetupRoute: FC = () => {
    const dispatch = useDispatch<any>();
    const planList = useSelector(planListSelector);
    const setDay = useSelector(setDaySelector);
    const shareMode = useSelector(shareModeSelector);
    const grabPlaceOptionId = useSelector(grabPlaceOptionIdSelector);
    const placeOptionList = useSelector(planOptionListSelector);
    const [isDrop, setIsDrop] = useState(false);
    const droppedRef = useRef<HTMLElement | null>(null);
    const enterCnt = useRef(0);
    useEffect(() => {
        if (isDrop) {
            setIsDrop(false);
            const node = droppedRef.current;
            node?.classList.add('focus');
            node?.scrollIntoView();
            setTimeout(() => {
                node?.classList.remove('focus');
            }, 500);
        }
    }, [planList]);

    useEffect(() => {
        // hi
    }, [planList[setDay]]);

    const onDragStartPlace = useCallback(
        (e: React.DragEvent<HTMLElement>): void => {
            if (shareMode) return;
            enterCnt.current = 0;
            dispatch(grabPlaceOption({ id: null }));
            dispatch(grabPlan({ id: e.currentTarget.dataset.id }));
        },
        [shareMode],
    );

    const onDragEnterConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (shareMode) return;
            if (!grabPlaceOptionId) return;
            enterCnt.current += 1;
            e.currentTarget.classList.add('drag-over');
        },
        [grabPlaceOptionId, shareMode],
    );

    const onDragLeaveConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (shareMode) return;
            if (!grabPlaceOptionId) return;
            enterCnt.current -= 1;
            if (enterCnt.current === 0) {
                e.currentTarget.classList.remove('drag-over');
            }
        },
        [grabPlaceOptionId, shareMode],
    );

    const onDropContainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (shareMode) return;
            if (!grabPlaceOptionId) return;
            e.currentTarget.classList.remove('drag-over');
            const selected = placeOptionList.find(
                (place) => place.id === grabPlaceOptionId,
            );
            if (selected)
                dispatch(movePlaceOptionToPlan({ place: selected, setDay }));
            setIsDrop(true);
        },
        [grabPlaceOptionId, shareMode],
    );

    // SortableJs Logic

    const getSortableList = (list: PlanDetailModel[][]): PlanDetailModel[] => {
        if (!(list.length > 1)) return [];
        if (shareMode) return [];
        return list[setDay].map((x) => ({
            ...x,
            chosen: true,
        }));
    };
    const onSort = (list: PlanDetailModel[]): void => {
        if (!(list.length > 0)) return;
        if (shareMode) return;
        dispatch(sortPlanList(list));
        dispatch(
            sortPlanListFailCheck({
                planId: '',
                index: setDay,
                preplanDetails: planList[setDay],
                curDetails: list,
            }),
        );
    };

    return (
        <Container
            onDragEnter={onDragEnterConainer}
            onDragLeave={onDragLeaveConainer}
            onDrop={onDropContainer}
            onDragOver={(e) => e.preventDefault()}
        >
            <ReactSortable
                animation={150}
                list={getSortableList(planList)}
                setList={onSort}
            >
                {planList.length > 1 &&
                    planList[setDay].map((plan: Place, index: number) => {
                        return (
                            <RoutItem
                                focusRef={
                                    index === planList[setDay].length - 1
                                        ? (droppedRef as React.RefObject<HTMLDivElement>)
                                        : null
                                }
                                key={plan.id}
                                dataId={plan.id}
                                onDragStartPlace={onDragStartPlace}
                                placename={plan.name}
                                location={plan.address}
                            />
                        );
                    })}
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
    position: relative;
    box-sizing: border-box;

    &.drag-over {
        width: 450px;
        border: solid 2px ${({ theme }) => theme.PRIMARY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }

    &.drag-over {
        border: solid 2px ${({ theme }) => theme.PRIMARY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
`;

export default SetupRoute;
