import React from "react";
import styled from 'styled-components';

const Board = () => {
    return (
        <>
            <BoardHeader>
                <TitleContainer>
                    <MainTitle>게시판</MainTitle>
                    <SubTitle1>여행 계획을 고민중이신가요?</SubTitle1>
                    <SubTitle2>다른 사람의 계획을 내 계획에 추가해보세요!</SubTitle2>
                </TitleContainer>
            </BoardHeader>
            <Main>d</Main>
        </>
    )
}

export default Board;

const BoardHeader = styled.section`
    width: 100%;
    background-color: #E4F0FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const TitleContainer = styled.div``
const MainTitle = styled.h1``
const Subtitle = styled.h2``
const SubTitle1 = styled(Subtitle)``
const SubTitle2 = styled(Subtitle)``

const Main = styled.main`
    width: 100%;
    background-color: #E4F0FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

