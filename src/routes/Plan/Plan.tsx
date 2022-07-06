import React, { FC } from 'react';
import styled from 'styled-components';

const Plan: FC = () => {
    return (
        <Container>
            <div>Plan</div>
        </Container>
    );
};

export default Plan;

const Container = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.PRIMARY};
`;
