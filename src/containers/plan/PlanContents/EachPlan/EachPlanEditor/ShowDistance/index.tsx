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
    }, [planList]);

    return (
        <Container>
            {[...new Array(length)].map(() => (
                <LocationPointBox />
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
    height: 80px;
    margin-bottom: 35px;
`;

export default ShowDistance;
