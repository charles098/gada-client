import React from 'react';
import styled from 'styled-components';
import { CancelIcon } from 'components/icons';

import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSelectedPlaces, SelectedPlace } from 'store/modules/search';

const selectedPlaces = (state: RootState) => state.search.selectedPlaces;
const PlanPlaceSelected = () => {
    const dispatch = useDispatch();
    const userPlaces = useSelector(selectedPlaces);
    return (
        <PlaceSlider>
            <Container>
                {userPlaces.map((place: SelectedPlace) => (
                    <PlaceCard key={place.id}>
                        <button
                            type="button"
                            onClick={() =>
                                dispatch(deleteSelectedPlaces(place.id))
                            }
                        >
                            <span>
                                <CancelIcon width="15px" />
                            </span>
                        </button>
                        <img src={place.imgUrl} alt={place.name} />
                        <p>{place.name}</p>
                    </PlaceCard>
                ))}
            </Container>
        </PlaceSlider>
    );
};
const PlaceSlider = styled.div`
    margin: 28px 70px;
    width: 970px;
    height: 85px;
`;
const Container = styled.div`
    width: 100%;
    height: 100px;
    border: solid 2px ${({ theme }) => theme.LIGHT_GRAY};
    border-radius: 18px;
    display: flex;
    align-items: center;
    overflow: auto;
`;

const PlaceCard = styled.div`
    width: 77px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    & > img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
    & > p {
        display: block;
        width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }
    & > button {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        border: 0px;
        background: none;
    }
`;
export default PlanPlaceSelected;
