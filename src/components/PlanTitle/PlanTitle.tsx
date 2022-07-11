import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { PencilIcon as TitleController } from 'components/icons';

const PlanTitle: FC = () => {
    const onChangeTitle = useCallback(() => {
        console.log('title');
    }, []);

    return (
        <Container>
            <Title>부산 여행</Title>
            <TitleController
                className="title-controller"
                width="14px"
                height="12px"
                onClick={onChangeTitle}
            />
        </Container>
    );
};

const Container = styled.div`
    margin-left: 15px;
    display: flex;

    & > .title-controller {
        cursor: pointer;
    }
`;

const Title = styled.div`
    font-size: 28px;
    margin-right: 5px;
`;

export default PlanTitle;
