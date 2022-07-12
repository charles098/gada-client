import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlickSlider from 'components/SlickSlider';
import { RootState } from 'store/modules';
import styled from 'styled-components';

const dayList = Array.from({ length: 8 }, (x, i) => i + 1);

const startDateSelector = (state: RootState) => state.plan.startDate;
const lastDateSelector = (state: RootState) => state.plan.lastDate;

const DayPicker = () => {
    const startDate = useSelector(startDateSelector);
    const lastDate = useSelector(lastDateSelector);
    const [planPeriod, setPlanPeriod] = useState<number | null>(null);

    useEffect(() => {
        setPlanPeriod(getPeriod(startDate, lastDate));
    }, [startDate, lastDate]);

    const getPeriod = (startDay: Date, lastDay: Date): number => {
        const diffDate = startDay.getTime() - lastDay.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    };

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
                {dayList.map((day) => (
                    <ButtonCard>
                        <Button key={day} type="button">
                            Day{day}
                        </Button>
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
