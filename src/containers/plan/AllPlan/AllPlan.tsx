import React, { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IPlace } from 'store/modules/plan';
import ShowDistance from 'components/ShowDistance';
import SetupRoute from 'components/SetupRoute';

interface IProps {
    setIsAllPlan: Dispatch<SetStateAction<boolean>>;
    planList: IPlace[][];
}

const testData = Array.from({ length: 10 });

const AllPlan: FC<IProps> = ({ setIsAllPlan, planList }) => {
    // const onCloseAllPlan = () => {
    //     setIsAllPlan(false);
    // };

    return (
        <Container>
            {/* <button type="button" onClick={onCloseAllPlan}>
                close
            </button> */}
            {testData.map((data) => {
                console.log('hi');
                return <PlanCard>Route</PlanCard>;
            })}
        </Container>
    );
};

const Container = styled.div`
    background-color: #eac4c4;

    width: 100%;
    height: 620px;
    margin: 0 30px 30px 30px;
    display: flex;
    overflow: scroll;
`;

const PlanCard = styled.div`
    background-color: #5b5b5b;

    width: 450px;
    margin: 0 30px 0px 30px;
    display: block;
`;

export default AllPlan;
