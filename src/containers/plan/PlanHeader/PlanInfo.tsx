import React, { FC } from 'react';
import styled from 'styled-components';
import PlanTitle from 'containers/plan/PlanHeader/PlanTitle';
import PlanPeriod from 'components/PlanPeriod';
import PlanWith from 'components/PlanWith';
import SwitchToggle from 'components/SwitchToggle';

const PlanInfo: FC = () => {
    return (
        <Container>
            <PlanTitle />
            <PlanPeriod />
            <PlanWith />
            <SwitchToggle label="Switch One" noText />
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    height: 30px;
    margin: 30px;
    display: flex;
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

export default PlanInfo;
