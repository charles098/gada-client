import React from 'react';
import { RootState } from 'store/modules';
import { useDispatch, useSelector } from 'react-redux';
import { insertSelectedPlaces } from 'store/modules/plan/search';

import PlaceListItem from './PlaceListItem';

const places = (state: RootState) => state.search.placeList;

const PlaceList = () => {
    const dispatch = useDispatch();
    const placeList = useSelector(places);
    return (
        <>
            <header> 검색결과</header>
            <div className="contents">
                {placeList.map((place) => (
                    <PlaceListItem
                        key={`item-${place.name}-${place.address}`}
                        imgUrl={place.imgUrl}
                        name={place.name}
                        address={place.address}
                        onClick={() => {
                            dispatch(insertSelectedPlaces(place));
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default PlaceList;
