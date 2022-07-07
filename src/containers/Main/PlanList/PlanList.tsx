import React, { FC } from 'react';
import styled from 'styled-components';
import {
    LeftIcon,
    RightIcon
} from 'components/icons';
import AddCard from 'components/AddCard';
import PlanCard from 'components/PlanCard';
import jejuImg from 'images/jeju.jpg';

const PlanList : FC = () => {
    const defaultProps = {
        dday: 'D-45',
        src: jejuImg,
        imageName: '제주',
        title: '제주 여행',
        date: '8.18(목) ~ 8.23(화)',
    }

    return (
        <PlanListWrapper>
            <PlanListTitle>유저님, 여행을 준비하세요.</PlanListTitle>
            <PlanListContainer>
                <LeftIcon style={leftIconStyle}/>
                <PlanCardContainer>
                    <AddCard />
                    {[...Array(4)].map(() => (
                        <PlanCard
                        dday={defaultProps.dday}
                        src={defaultProps.src}
                        imageName={defaultProps.imageName}
                        title={defaultProps.title}
                        date={defaultProps.date}
                        />
                    ))}
                </PlanCardContainer>
                <RightIcon style={rightIconStyle}/>
            </PlanListContainer>
        </PlanListWrapper>
    )
}

export default PlanList;

const PlanListWrapper = styled.section`
    width: 1287px;
    margin: 70px auto;
`;

const PlanListTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 35px;
    cursor: default;
`;

const PlanListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

const leftIconStyle = {
    marginRight: '54px',
    cursor: 'pointer',
}

const rightIconStyle = {
    marginLeft: '54px',
    cursor: 'pointer',
}

const PlanCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    > div:not(div:first-of-type) {
        margin-left: 20px;
    }

    > div {
        cursor: pointer;
    }

    > div:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
`;