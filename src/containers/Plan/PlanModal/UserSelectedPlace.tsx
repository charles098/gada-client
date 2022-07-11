import { CancelIcon } from 'components/icons';
import { PlaceInfo } from 'containers/plan/PlanModal/PlanModal.types';
import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    places: PlaceInfo[] | undefined;
}

const UserSelectedPlace = ({ places }: Props) => {
    return (
        <Container>
            {places &&
                places.map((place) => {
                    return (
                        <PlaceCard>
                            <button type="button">
                                <span>
                                    <CancelIcon width="15px" />
                                </span>
                            </button>
                            <img src={place.imgUrl} alt={place.name} />
                            <p>{place.name}</p>
                        </PlaceCard>
                    );
                })}
        </Container>
    );
};

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
export default UserSelectedPlace;
