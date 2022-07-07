import React, { FC } from 'react';
import styled from 'styled-components';

import jejuImg from 'images/jeju.jpg';
import dragImg from 'images/drag2.png';

const PlaceOption: FC = () => {
    const optionArr = Array.from({ length: 20 });

    return (
        <Container>
            <img className="drag-explanation" src={dragImg} alt="drag" />
            <AddOptionButton>장소 추가</AddOptionButton>
            <OptionContainer>
                {optionArr.map((x) => (
                    <Option>
                        <div className="img-container">
                            <img src={jejuImg} alt="img" />
                        </div>
                        <div className="place-name">한라산</div>
                    </Option>
                ))}
            </OptionContainer>
        </Container>
    );
};

export default PlaceOption;

const Container = styled.div`
    width: auto;
    height: 130px;
    margin: 30px;
    position: relative;

    & > .drag-explanation {
        width: 280px;
        position: absolute;
        left: 1080px;
        top: -30px;
    }

    /* background-color: green; */
`;

const AddOptionButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.PRIMARY};
    padding: 0;
    margin-left: 15px;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
`;

const OptionContainer = styled.div`
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
