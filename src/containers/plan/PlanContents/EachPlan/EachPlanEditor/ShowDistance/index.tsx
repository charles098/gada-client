import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import styled from 'styled-components';

const planListSelector = (state: RootState) => state.plan.planList;
const setDaySelector = (state: RootState) => state.plan.setDay;
const placeDistanceSelector = (state: RootState) => state.plan.placeDistance;

const ShowDistance: FC = () => {
    const planList = useSelector(planListSelector);
    const setDay = useSelector(setDaySelector);
    const placeDistance = useSelector(placeDistanceSelector);
    const length = useMemo(() => {
        if (planList && planList.length > 0)
            return planList[setDay].length ?? 0;
        return 0;
    }, [planList, setDay]);

    return (
        <Container>
            {[...new Array(length)].map((value, index) => (
                <LocationPointBox>
                    <PlacePicker color="grey" />
                    {index < length - 1 && (
                        <DistanceLine>
                            <DistanceText>
                                {placeDistance[index] < 1000
                                    ? `${placeDistance[index]}m`
                                    : `${(placeDistance[index] / 1000).toFixed(
                                          2,
                                      )}km`}
                            </DistanceText>
                        </DistanceLine>
                    )}
                </LocationPointBox>
            ))}
        </Container>
    );
};

const Container = styled.div`
    padding-top: 15px;
    background-color: #f2fbcb;
    width: 80px;
    margin-left: 40px;
`;
const LocationPointBox = styled.div`
    width: 70%;
    height: 115px;
`;

const PlacePicker = styled.div`
    width: 40px;
    height: 40px;
    background: white;
    border: 15px solid ${({ color }) => color};
    border-radius: 50%;
    margin: 0 auto;
    z-index: 4;
    box-sizing: border-box;
    position: relative;
    :before {
        content: '';
        position: absolute;
        border-top: 30px solid ${({ color }) => color};
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        left: calc(50% - 20px);
        box-sizing: border-box;

        bottom: -30px;
        z-index: 3;
    }
`;

const DistanceLine = styled.div`
    width: 2px;
    height: 100%;
    background: black;
    margin: 0 auto;
    z-index: 2;
    position: relative;
`;
const DistanceText = styled.p`
    width:
    margin-left: 10px;
    display: block;
    position: absolute;
    top: 25%;
    left: 100%;
`;

export default ShowDistance;
