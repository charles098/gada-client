import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    dday: string;
    src: string;
    imageName: string;
    title: string;
    date: string;
}

const PlanCard = ( {
    dday,
    src,
    imageName,
    title,
    date
} : CardProps) => {
    const navigate = useNavigate();
    const navigateHandler = () => {navigate("/plan")};

    return (
        <Wrapper onClick={navigateHandler}>
            <Dday>{dday}</Dday>
            <PlanImage src={src}>
                <PlanImageName>{imageName}</PlanImageName>
                <PlanImageOpacity/>
            </PlanImage>
            <PlanTitle>{title}</PlanTitle>
            <PlanDate>{date}</PlanDate>
        </Wrapper>
    )
}

export default PlanCard;

const Wrapper = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Dday = styled.div`
    color: #6AA9F9;
    background-color: #EEF6FE;
    text-align: center;
    padding: 8px 18px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const PlanImage = styled.div<{ src : string }>`
    width: 115px;
    height: 115px;
    background-image: url('${({src}) => src}');
    background-repeat : no-repeat;
    background-size : cover;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50%;
`;

const PlanImageOpacity = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    position: absolute;
    top: 0;
    border-radius: 50%;
`

const PlanImageName = styled.div`
    color: white;
    font-size: 16px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 3px;
`

const PlanTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const PlanDate = styled.div`
    font-size: 15px;
    color: #aaaaaa;
`;