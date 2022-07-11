import React, { FC } from 'react';
import styled from 'styled-components';

const PlanPeriod: FC = () => {
    return <Container>22.07.08 - 22.07.12</Container>;
};

const Container = styled.button`
    margin-left: 15px;
    width: 140px;
    height: 25px;
`;

export default PlanPeriod;
