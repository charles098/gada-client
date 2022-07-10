import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    LeftIcon,
    RightIcon
} from 'components/icons';
import AddCard from 'components/AddCard';
import PlanCard from 'components/PlanCard';
import jejuImg from 'images/jeju.jpg';

const PlanList : FC = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrow: false,
        nextArrow: <RightIcon/>,
        prevArrow: <LeftIcon/>
    }

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
                <PlanCardContainer
                {...settings}
                >
                    <AddCard />
                    {[...Array(10)].map(() => (
                        <PlanCard
                        dday={defaultProps.dday}
                        src={defaultProps.src}
                        imageName={defaultProps.imageName}
                        title={defaultProps.title}
                        date={defaultProps.date}
                        />
                    ))}
                </PlanCardContainer>
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
    font-family: 'NotoSansBold';
`;

const PlanListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

const PlanCardContainer = styled(Slider)`
    width: 1200px;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
    
    & > div > div > div {
        cursor: pointer;
    }

    & > div > div > div:hover {
        box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
    }

    .slick-next,
    .slick-prev {
        width: 25px;
        height: 25px;
    }

    .slick-disabled {
        opacity: 0;
    }
`;