import React, { FC } from 'react';
import { customAlphabet } from 'nanoid';
import SlickSlider from 'components/SlickSlider';
import styled from 'styled-components';

interface IProps {
    planPeriod: number;
}

const DayPicker: FC<IProps> = ({ planPeriod }) => {
    const nanoid = customAlphabet('01234567899abcedf', 6);

    return (
        <Container>
            <SlickSlider
                width={520}
                speed={500}
                slidesToShow={5}
                slidesToScroll={2}
                arrowPadding={0}
                arrowSize={15}
                itemCursor="default"
            >
                <ButtonCard>
                    <Button type="button" className="selected-button">
                        All
                    </Button>
                </ButtonCard>
                {[...Array(planPeriod)].map((x, i: number) => (
                    <ButtonCard key={nanoid()}>
                        <Button type="button">Day{i + 1}</Button>
                    </ButtonCard>
                ))}
            </SlickSlider>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
`;

const ButtonCard = styled.div`
    width: 100px;
    height: 35px;
`;

const Button = styled.button`
    cursor: pointer;
    width: 96px;
    height: 100%;
    border-radius: 20px;
    border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
    border-radius: 20px;
    background-color: white;
    font-size: 16px;

    &.selected-button {
        border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
        background-color: ${({ theme }) => theme.PRIMARY};
        color: #ffffff;
        margin-right: 4px;
    }
`;

export default DayPicker;
