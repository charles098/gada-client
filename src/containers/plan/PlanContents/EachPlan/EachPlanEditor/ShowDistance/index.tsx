import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import styled from 'styled-components';

const planListSelector = (state: RootState) => state.plan.planList;
const setDaySelector = (state: RootState) => state.plan.setDay;

const ShowDistance: FC = () => {
    const planList = useSelector(planListSelector);
    const setDay = useSelector(setDaySelector);

    const length = useMemo(() => {
        if (planList && planList.length > 0)
            return planList[setDay].length ?? 0;
        return 0;
    }, [planList, setDay]);

    return (
        <Container>
            {[...new Array(length)].map((value, index) => (
                <LocationPointBox>
                    <Circle />
                    {index < length - 1 && <DistanceLine />}
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
    background: red;
    height: 115px;
`;

const Circle = styled.div`
    width: 40px;
    height: 40px;
    background: pink;
    border: 0px;
    border-radius: 50%;
    margin: 0 auto;
    z-index: 3;
    position: relative;
`;

const DistanceLine = styled.div`
    width: 2px;
    height: 100%;
    background: black;
    margin: 0 auto;
    z-index: 2;
    position: relative;
`;

export default ShowDistance;
