import React, { FC, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import PlaceBox from 'components/PlaceBox';
import { RootState } from 'store/modules';
import {
    IPlace,
    sortPlanList,
    grabPlan,
    grabPlaceOption,
    dropPlaceOption,
} from 'store/modules/plan';

const planListSelector = (state: RootState) => state.plan.planList;
const grabPlaceOptionIdSelector = (state: RootState) =>
    state.plan.grabPlaceOptionId;

const SetupRoute: FC = () => {
    const dispatch = useDispatch();
    const planList = useSelector(planListSelector);
    const grabPlaceOptionId = useSelector(grabPlaceOptionIdSelector);
    const enterCnt = useRef(0);
    const droppedRef = useRef<HTMLElement | null>(null);
    const [isDrop, setIsDrop] = useState(false);

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

    const onDragStartPlace = useCallback(
        (e: React.DragEvent<HTMLElement>): void => {
            enterCnt.current = 0;
            dispatch(grabPlaceOption({ id: null }));
            const id = parseInt(e.currentTarget.dataset.id as string, 10);
            dispatch(grabPlan({ id }));
        },
        [],
    );

    const onDragEnterConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            enterCnt.current += 1;
            e.currentTarget.classList.add('drag-over');
        },
        [grabPlaceOptionId],
    );

    const onDragLeaveConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            enterCnt.current -= 1;
            if (enterCnt.current === 0) {
                e.currentTarget.classList.remove('drag-over');
            }
        },
        [grabPlaceOptionId],
    );

    const onDropContainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlaceOptionId) return;
            e.currentTarget.classList.remove('drag-over');
            dispatch(dropPlaceOption());
            setIsDrop(true);
        },
        [grabPlaceOptionId],
    );

    // util로 분리
    const getSortableList = (list: IPlace[]): IPlace[] => {
        return list.map((x) => ({
            ...x,
            chosen: true,
        }));
    };
    const onSort = (list: IPlace[]): void => {
        dispatch(sortPlanList({ list }));
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
                {planList.map((plan: IPlace, index: number) => {
                    return (
                        <PlaceBox
                            ref={
                                index === planList.length - 1
                                    ? (droppedRef as React.RefObject<HTMLDivElement>)
                                    : null
                            }
                            key={plan.id}
                            onDragStart={onDragStartPlace}
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

    &.focus {
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
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
