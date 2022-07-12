import React from 'react';
import styled from 'styled-components';

const DayPicker = () => {
    const dayList = Array.from({ length: 3 }, (x, i) => i + 1);

    return (
        <Container>
            <button type="button" className="all-button">
                All
            </button>
            {dayList.map((day) => (
                <button key={day} type="button" className="day-button">
                    Day{day}
                </button>
            ))}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;

    & > .all-button {
        cursor: pointer;
        border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
        border-radius: 20px;
        background-color: ${({ theme }) => theme.PRIMARY};
        color: white;
        font-size: 17px;
        width: 110px;
        height: 40px;
        margin-left: 15px;
    }

    & > .day-button {
        cursor: pointer;
        border: solid 1px ${({ theme }) => theme.LIGHT_GRAY};
        border-radius: 20px;
        background-color: white;
        font-size: 17px;
        width: 110px;
        height: 40px;
        margin-left: 15px;
    }
`;

export default DayPicker;
