import React, { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IPlace } from 'store/modules/plan';
import ShowDistance from 'components/ShowDistance';
import SetupRoute from 'components/SetupRoute';

interface IProps {
    setIsAllPlan: Dispatch<SetStateAction<boolean>>;
    planList: IPlace[][];
}

const testData = Array.from({ length: 5 });

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
                return (
                    <PlanCard>
                        <DayContainer>
                            <div className="day-num">Day 1</div>
                            <div className="day-detail">7.12 Tue</div>
                        </DayContainer>
                    </PlanCard>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    background-color: #eac4c4;

    width: 100%;
    min-height: 620px;
    margin: 0 30px 30px 30px;
    display: flex;
    /* flex-wrap: nowrap;  */
    overflow-x: scroll;
`;

const PlanCard = styled.div`
    background-color: #5b5b5b;

    width: 450px;
    margin: 0 30px 0px 30px;
    flex: 0 0 auto;
`;

const DayContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-end;

    & > .day-num {
        font-size: 20px;
        margin: 10px;
    }

    & > .day-detail {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.LIGHT_GRAY};
    }
`;

export default AllPlan;
