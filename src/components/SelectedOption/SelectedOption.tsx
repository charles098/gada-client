import React, { FC, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';

import { RootState } from 'store/modules';
import {
    PlaceOption,
    sortplaceOptionList,
    grabPlaceOption,
} from 'store/modules/plan';
import jejuImg from 'images/jeju.jpg';

const placeOptionListSelector = (state: RootState) =>
    state.plan.placeOptionList;

// drop -> end
const SelectedOption: FC = () => {
    const dispatch = useDispatch();
    const placeOptionList = useSelector(placeOptionListSelector);

    useEffect(() => {
        const map: { [key: number]: boolean } = {};
        placeOptionList.forEach((option: PlaceOption) => {
            map[option.id] = false;
        });
    }, [placeOptionList]);

    const onDragStart = (e: React.DragEvent<HTMLElement>) => {
        const id = parseInt(e.currentTarget.dataset.id as string, 10);
        dispatch(grabPlaceOption({ id }));
    };

    const onDragEnd = (e: React.DragEvent<HTMLElement>) => {
        dispatch(grabPlaceOption({ id: null }));
    };

    // util로 분리
    const getSortableList = (list: Array<PlaceOption>): Array<PlaceOption> => {
        return list.map((x) => ({
            ...x,
            chosen: true,
        }));
    };

    // util로 분리
    const onSort = (list: Array<PlaceOption>): void => {
        dispatch(sortplaceOptionList({ list }));
    };

    return (
        <Container>
            <ReactSortable
                className="sortable-container"
                animation={150}
                list={getSortableList(placeOptionList)}
                setList={onSort}
            >
                {placeOptionList.map((option) => (
                    <Place
                        key={option.id}
                        data-id={option.id}
                        draggable="true"
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    >
                        <div className="img-container">
                            <img src={jejuImg} alt="img" draggable="false" />
                        </div>
                        <div className="place-name">{option.name}</div>
                    </Place>
                ))}
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
`;

const GrabPlace = styled.div`
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

export default SelectedOption;
