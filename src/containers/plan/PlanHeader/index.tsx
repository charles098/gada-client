import React, { FC } from 'react';
import styled from 'styled-components';
import PlanTitle from 'containers/plan/PlanHeader/PlanTitle';
import PlanPeriod from 'components/PlanPeriod';
import SwitchToggle from 'components/SwitchToggle';
import { useDispatch } from 'react-redux';
import { changeShareMode } from 'store/modules/plan/plan';

const PlanInfo: FC = () => {
    const dispatch = useDispatch();

    const onClickSwitch = () => dispatch(changeShareMode());

    return (
        <Container>
            <PlanTitle />
            <PlanPeriod />
            <PlanSwitch>
                <p>공유하기</p>
                <SwitchToggle
                    label="Switch One"
                    noText
                    onClick={onClickSwitch}
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

const PlanSwitch = styled.button`
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-contents: center;
    margin-left: auto;
`;

export default PlanInfo;
