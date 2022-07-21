import React, { useState } from "react";
import styled, { css } from 'styled-components';

const Share = () => {

    return (
        <>
            <ShareHeader>
                <TitleContainer>
                    <MainTitle>게시판</MainTitle>
                    <SubTitle1>여행 계획을 고민중이신가요?</SubTitle1>
                    <SubTitle2>다른 사람의 계획을 내 계획에 추가해보세요!</SubTitle2>
                </TitleContainer>
            </ShareHeader>
            <ShareBody>
                ㅎㅎ
            </ShareBody>
        </>
    )
}

export default Share;


const ShareHeader = styled.section`
    min-width: 1287px;
    width: 100%;
    background-color: #E4F0FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 0;
`
const TitleContainer = styled.div`
    width: 1287px;
    margin: 0 auto;
    color: #333;
`
const MainTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Subtitle = styled.h2`
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 1.5px;
`
const SubTitle1 = styled(Subtitle)`
    margin-top: 35px;
    margin-bottom: 15px;
`
const SubTitle2 = styled(Subtitle)``

const ShareBody = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
