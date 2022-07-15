import React from 'react';
import styled from 'styled-components';
import { CancelIcon } from 'components/icons';

import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSelectedPlaces } from 'store/modules/plan/search';
import SlickSlider from 'components/SlickSlider';
import { SelectedPlace } from 'store/modules/plan';

const selectedPlaces = (state: RootState) => state.search.selectedPlaces;
const PlanPlaceSelected = () => {
    const dispatch = useDispatch();
    const userPlaces = useSelector(selectedPlaces);
    return (
        <SelectedContainer>
            <SlickSlider
                width={970}
                speed={450}
                slidesToShow={9}
                slidesToScroll={3}
                arrowPadding={40}
                arrowSize={20}
                itemCursor="default"
                boxShadow
            >
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
            </SlickSlider>
        </SelectedContainer>
    );
};
const SelectedContainer = styled.div`
    margin: 28px 70px;
    width: 970px;
    height: 85px;
    .slick-track {
        margin-left: 0;
    }
`;
const PlaceCard = styled.div`
    width: 45px;
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
