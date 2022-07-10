import React, { FC } from 'react';
import styled from 'styled-components';

const PlanInfo: FC = () => {
    return (
        <Container>
            <TitleController>부산 여행</TitleController>
            <PeriodController>22.07.08 - 22.07.12</PeriodController>
            <WithController>1명과 함께</WithController>
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

const TitleController = styled.div`
    font-size: 28px;
    margin-left: 15px;
`;

const PeriodController = styled.button`
    margin-left: 15px;
    width: 140px;
    height: 25px;
`;

const WithController = styled.button`
    margin-left: 15px;
    width: 80px;
    height: 25px;
`;

export default PlanInfo;
