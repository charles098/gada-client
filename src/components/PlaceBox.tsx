import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
    key: string;
    focusRef?: React.RefObject<HTMLDivElement> | null;
    onDragStartPlace: (e: React.DragEvent<HTMLElement>) => void;
    placename: string;
    location: string;
    dataId: string;
}

const PlaceBox: FC<IProps> = ({
    key,
    focusRef,
    onDragStartPlace,
    placename,
    location,
    dataId,
}) => {
    return (
        <Container
            key={key}
            onDragStart={onDragStartPlace}
            ref={focusRef}
            data-id={dataId}
        >
            <Name>{placename}</Name>
            <Location>{location}</Location>
        </Container>
    );
};

PlaceBox.defaultProps = {
    focusRef: null,
};

const Container = styled.div`
    cursor: grab;
    width: 400px;
    height: 80px;
    margin-bottom: 35px;
    border-radius: 13px;
    box-shadow: 1px 1px 10px 1px #d9d9d9;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.focus {
        background-color: ${({ theme }) => theme.PRIMARY_LIGHT};
    }
`;

const Name = styled.div`
    font-size: 20px;
    margin: 0 0 7px 15px;
`;

const Location = styled.div`
    margin-left: 15px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
`;

export default PlaceBox;
