import React from 'react';
import styled from 'styled-components';
import jejuImg from 'images/jeju.jpg';

const SelectedOption = () => {
    const optionArr = Array.from({ length: 20 }, (v, i) => i + 1);

    // const dragStartHandler = (e: React.DragEvent<HTMLElement>) => {};

    return (
        <Container>
            {optionArr.map((x) => (
                <Option key={x} draggable="true" className="place-option">
                    <div className="img-container">
                        <img src={jejuImg} alt="img" draggable="false" />
                    </div>
                    <div className="place-name">한라산</div>
                </Option>
            ))}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100px;
    border: solid 2px ${({ theme }) => theme.LIGHT_GRAY};
    border-radius: 18px;
    display: flex;
    align-items: center;
    overflow: scroll;
`;

const Option = styled.div`
    margin-left: 20px;
    cursor: move;

    & > .img-container {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        overflow: hidden;
    }

    & > .img-container img {
        width: 70px;
        height: 70px;
    }

    & > .place-name {
        text-align: center;
        font-size: 13px;
        margin-top: 3px;
    }
`;

export default SelectedOption;
