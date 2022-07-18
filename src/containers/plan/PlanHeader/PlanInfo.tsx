import React, { FC } from 'react';
import styled from 'styled-components';
import PlanTitle from 'containers/plan/PlanHeader/PlanTitle';
import PlanPeriod from 'components/PlanPeriod';
import PlanWith from 'components/PlanWith';
import SwitchToggle from 'components/SwitchToggle';
import { useDispatch } from 'react-redux';
import { changeShareMode } from 'store/modules/plan/plan';
import { RootState } from 'store/modules';

const shareModeSelector = (state: RootState) => state.plan.shareMode;

const PlanInfo: FC = () => {
    const dispatch = useDispatch();
    return (
        <Container>
            <PlanTitle />
            <PlanPeriod />
            <PlanWith />
            <PlanSwitch>
                <p>공유하기</p>
                <SwitchToggle
                    label="Switch One"
                    noText
                    onClick={() => {
                        dispatch(changeShareMode());
                    }}
                />
            </PlanSwitch>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    height: 30px;
    margin: 30px;
    display: flex;
    flex-direction: row;

    align-items: center;

    & > button {
        cursor: pointer;
        border: none;
        border-radius: 20px;
        margin-top: 7px;
        background-color: ${({ theme }) => theme.PRIMARY};
        color: white;
    }
`;

const PlanSwitch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
`;

export default PlanInfo;
