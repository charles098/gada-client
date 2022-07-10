import React, { FC, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactSortable } from 'react-sortablejs';

import { RootState } from 'store/modules';
import { PlaceOption, sortplaceOptionList } from 'store/modules/plan';
import jejuImg from 'images/jeju.jpg';

const placeOptionListSelector = (state: RootState) =>
    state.plan.placeOptionList;

const SelectedOption: FC = () => {
    const dispatch = useDispatch();
    const placeOptionList = useSelector(placeOptionListSelector);

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
                    <Place key={option.id} draggable="true">
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
`;

export default SelectedOption;
