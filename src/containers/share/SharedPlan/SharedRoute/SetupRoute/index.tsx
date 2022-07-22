import React, {
    FC,
    useEffect,
    useRef,
    useCallback,
    useState,
    useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { RootState } from 'store/modules';

import { sortSharedPlanList } from 'store/modules/plan/share';

import { Place } from 'store/modules/plan';
import { PlanDetailModel } from 'store/modules/plan/plan.model';
import { useLocation } from 'react-router-dom';
import getAuthHeader from 'utils/getAuthHeader';
import RoutItem from './RoutItem';

const planListSelector = (state: RootState) => state.share.planList;

const setDaySelector = (state: RootState) => state.share.setDay;
// eslint-disable-next-line no-underscore-dangle
const planIdSelector = (state: RootState) => state.share._id;
const grabPlaceOptionIdSelector = (state: RootState) =>
    state.plan.grabPlaceOptionId;

const SetupRoute: FC = () => {
    const dispatch = useDispatch<any>();
    const planList = useSelector(planListSelector);
    const setDay = useSelector(setDaySelector);
    const planId = useSelector(planIdSelector);
    const location = useLocation();
    const [isDrop, setIsDrop] = useState(false);
    const [firstRender, setFistRender] = useState(false);

    const droppedRef = useRef<HTMLElement | null>(null);
    const enterCnt = useRef(0);
    useEffect(() => {
        setFistRender(true);
    }, []);

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
    // SortableJs Logic
    type PlanDetailSortableItem = PlanDetailModel & { chosen: boolean };
    const getSortableList = (
        list: PlanDetailModel[][],
    ): PlanDetailSortableItem[] => {
        if (!(list.length > 1)) return [];
        return list[setDay].map((x) => {
            return {
                ...x,
                chosen: true,
            };
        });
    };

    const SortableList = useMemo(() => {
        const temp = getSortableList(planList);
        if (location) {
            return temp;
        }
        return temp;
    }, [planList, location, setDay]);

    const onSort = (list: PlanDetailModel[]): void => {
        if (!(list.length > 0)) return;
        if (!firstRender) return;
        dispatch(sortSharedPlanList({ list }));
    };

    return (
        <Container
            onDrop={() => setIsDrop(true)}
            onDragOver={(e) => e.preventDefault()}
        >
            {SortableList && (
                <ReactSortable
                    animation={150}
                    list={SortableList}
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
                                    placename={plan.name}
                                    location={plan.address}
                                />
                            );
                        })}
                </ReactSortable>
            )}
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
