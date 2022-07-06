import React, { FC } from 'react';
import styled from 'styled-components';

/*
<MainWrapper>
    <Header />

    <PlanListWrapper>
        PlanListTitle
        PlanListContainer
            LeftArrow
                PlanListBox
            RightArrow
    <PlanListWrapper />

    <LocationWrapper>
        LocationTitle
        LocationContainer
    <LocationWrapper />

<MainWrapper />

*/



const Main: FC = () => {
    return (
        <MainWrapper>
            <Header>여행 가다</Header>
            <PlanListWrapper>
                <PlanListTitle>유저님, 여행을 준비하세요.</PlanListTitle>
                <PlanListContainer>
                    <LeftArrow>왼쪽 화살표</LeftArrow>
                    <PlanListBox>여행 리스트</PlanListBox>
                    <RightArrow>오른쪽 화살표</RightArrow>
                </PlanListContainer>
            </PlanListWrapper>

            <LocationWrapper>
                <LocationTitle>국내 여행지</LocationTitle>
                <LocationContainer>국내 여행지 리스트</LocationContainer>
            </LocationWrapper>
        </MainWrapper>
    )
};

const MainWrapper = styled.div``;

const Header = styled.header``;
const PlanListWrapper = styled.section``;
const PlanListTitle = styled.h1``;
const PlanListContainer = styled.div``;
const LeftArrow = styled.div``;
const PlanListBox = styled.div``;
const RightArrow = styled.div``;

const LocationWrapper = styled.section``;
const LocationTitle = styled.h1``;
const LocationContainer = styled.div``;


export default Main;
