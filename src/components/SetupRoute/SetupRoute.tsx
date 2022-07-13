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
            console.log('dragplacestart');
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
                            focusRef={
                                index === planList.length - 1
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
    overflow: scroll;

    &.drag-over {
        border: solid 2px ${({ theme }) => theme.PRIMARY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
`;

export default SetupRoute;
