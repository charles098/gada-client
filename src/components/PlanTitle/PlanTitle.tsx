import React, { FC } from 'react';
import styled from 'styled-components';

const PlanTitle: FC = () => {
    return <Container>부산 여행</Container>;
};

const Container = styled.div`
    font-size: 28px;
    margin-left: 15px;
`;

export default PlanTitle;
