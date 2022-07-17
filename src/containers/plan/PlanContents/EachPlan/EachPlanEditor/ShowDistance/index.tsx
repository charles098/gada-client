import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import styled from 'styled-components';
import { setDistanceText } from 'utils/mapPointHelper';

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
                <LocationPointBox key={`${setDay}-${placeDistance[index]}`}>
                    <PlacePicker size={32} border={20} color="grey">
                        <div>{index}</div>
                    </PlacePicker>
                    {index < length - 1 && (
                        <DistanceLine>
                            <DistanceText>
                                {setDistanceText(placeDistance[index])}
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

const PlacePicker = styled.div<{ size: number; border: number; color: string }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: ${({ color }) => color};
    border-radius: 50%;
    margin: 0 auto;
    z-index: 4;
    box-sizing: border-box;
    position: relative;

    :before {
        content: '';
        position: absolute;
        border-top: ${({ size }) => (size / 4) * 3}px solid
            ${({ color }) => color};
        border-right: ${({ size }) => size / 2 - 1}px solid transparent;
        border-left: ${({ size }) => size / 2 - 1}px solid transparent;
        left: calc(50% - ${({ size }) => size / 2 - 1}px);
        box-sizing: border-box;

        bottom: -${({ size }) => (size / 4) * 2 - 2}px;
        z-index: 2;
    }
    & > div {
        display: inline-block;
        width: ${({ border }) => border}px;
        height: ${({ border }) => border}px;
        border-radius: 50%;
        position: absolute;
        left: calc(50% - ${({ border }) => border / 2}px);
        top: calc(50% - ${({ border }) => border / 2}px);
        z-index: 5;
        background: white;
        text-align: center;
        vertical-align: middle;
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
