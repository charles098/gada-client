import React, { FC, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';
import { RootState } from 'store/modules';
import {
    IPlace,
    sortplaceOptionList,
    grabPlan,
    grabPlaceOption,
    dropPlan,
} from 'store/modules/plan';
import jejuImg from 'images/jeju.jpg';

const placeOptionListSelector = (state: RootState) =>
    state.plan.placeOptionList;
const grabPlanIdSelector = (state: RootState) => state.plan.grabPlanId;
const dropItemSelector = (state: RootState) => state.plan.dropItem;

const SelectedOption: FC = () => {
    const dispatch = useDispatch();
    const placeOptionList = useSelector(placeOptionListSelector);
    const grabPlanId = useSelector(grabPlanIdSelector);
    const dropItem = useSelector(dropItemSelector);
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
    }, [placeOptionList]);

    const onDragStartPlace = useCallback((e: React.DragEvent<HTMLElement>) => {
        enterCnt.current = 0;
        dispatch(grabPlan({ id: null }));
        const id = parseInt(e.currentTarget.dataset.id as string, 10);
        dispatch(grabPlaceOption({ id }));
    }, []);

    const onDragEnterConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlanId) return;
            enterCnt.current += 1;
            e.currentTarget.classList.add('drag-over');
        },
        [grabPlanId],
    );

    const onDragLeaveConainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlanId) return;

            enterCnt.current -= 1;
            if (enterCnt.current === 0) {
                e.currentTarget.classList.remove('drag-over');
            }
        },
        [grabPlanId],
    );

    const onDropContainer = useCallback(
        (e: React.DragEvent<HTMLElement>) => {
            if (!grabPlanId) return;

            e.currentTarget.classList.remove('drag-over');
            dispatch(dropPlan());
            setIsDrop(true);
        },
        [grabPlanId],
    );

    // util로 분리
    const getSortableList = (list: IPlace[]): IPlace[] => {
        return list.map((x) => ({
            ...x,
            chosen: true,
        }));
    };
    const onSort = (list: IPlace[]): void => {
        dispatch(sortplaceOptionList({ list }));
    };

    return (
        <Container
            onDragEnter={onDragEnterConainer}
            onDragLeave={onDragLeaveConainer}
            onDrop={onDropContainer}
            onDragOver={(e) => e.preventDefault()}
        >
            <ReactSortable
                className="sortable-container"
                animation={150}
                list={getSortableList(placeOptionList)}
                setList={onSort}
            >
                {placeOptionList.map((option: IPlace, index: number) => {
                    if (index === placeOptionList.length - 1) {
                        return (
                            <Place
                                ref={
                                    droppedRef as React.RefObject<HTMLDivElement>
                                }
                                key={option.id}
                                data-id={option.id}
                                draggable="true"
                                onDragStart={onDragStartPlace}
                            >
                                <div className="img-container">
                                    <img
                                        src={jejuImg}
                                        alt="img"
                                        draggable="false"
                                    />
                                </div>
                                <div className="place-name">{option.name}</div>
                            </Place>
                        );
                    }
                    return (
                        <Place
                            key={option.id}
                            data-id={option.id}
                            draggable="true"
                            onDragStart={onDragStartPlace}
                        >
                            <div className="img-container">
                                <img
                                    src={jejuImg}
                                    alt="img"
                                    draggable="false"
                                />
                            </div>
                            <div className="place-name">{option.name}</div>
                        </Place>
                    );
                })}
            </ReactSortable>
        </Container>
    );
};

const Container = styled.div`
    & > .sortable-container {
        width: 100%;
        height: 100px;
        border: solid 2px ${({ theme }) => theme.LIGHT_GRAY};
        border-radius: 18px;
        display: flex;
        align-items: center;
        overflow: scroll;
    }

    &.drag-over {
        border: solid 2px gray;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.LIGHT_GRAY};
    }
`;

const Place = styled.div`
    margin-left: 20px;
    cursor: move;

    & > .img-container {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        overflow: hidden;
    }

    & > .img-container img {
        width: 70px;
        height: 70px;
    }

    & > .place-name {
        text-align: center;
        font-size: 13px;
        margin-top: 3px;
    }

    &.grab-item {
        width: 400px;
        height: 80px;
        margin-bottom: 35px;
        border-radius: 13px;
        box-shadow: 1px 1px 10px 1px #d9d9d9;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &.focus {
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
`;

export default SelectedOption;
