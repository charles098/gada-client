import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import { LikeIcon, UnlikeIcon } from 'components/icons';
import Select from 'react-select';

const selectOptions = [
    "전체",
    "전국",
    "강원",
    "제주",
    "부산",
    "서울",
    "경기",
    "인천",
    "울산",
    "대전",
    "광주",
    "충북",
    "충남",
    "경북",
    "경남"
];

const customStyles = {
    control: (styles: any) => ({
        ...styles,
        color: "white",
        backgroundColor: "#60A5F8",
        borderRadius: "5px",
        "&:hover": { borderColor: "white" },
        border: "none",
        boxShadow: "none",
        height: "30px",
        fontSize: "15px",
        cursor: "pointer",
    }),
    option: (base: any, { isFocused }: any) => ({
        ...base,
        cursor: "pointer",
        backgroundColor: isFocused ? "#ECF3FD" : "",
        color: isFocused ? "#444" : "",
        ":hover": {
            backgroundColor: "#ECF3FD"
        },
    }),
    menuList: (base: any) => ({
        ...base,
        transition: "all .2s",
        "::-webkit-scrollbar": {
            width: "6px",
            height: "0px"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#aaa",
            borderRadius: "10px"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#ccc"
        },
    }),
    singleValue: (base: any) => ({
        ...base,
        color: "white"
    }),
    placeholder: (base: any) => ({
        ...base,
        color: "white"
    }),
    dropdownIndicator: (base: any) => ({
        ...base,
        color: "white",
        ":hover": {
            color: "white"
        },
    }),
};

const initDatas = [
    {
        id: '12f',
        tag: '맛집',
        location: '제주',
        title: '제주도 맛집 여행 코스 강추합니다!',
        username: '뚱인데요',
        likeCount: 14,
        clickedLike: true,
    }, {
        id: '1fq',
        tag: '맛집',
        location: '경북',
        title: '경북 맛집 여행 코스 강추합니다!',
        username: '어둠을부르는',
        likeCount: 5,
        clickedLike: true,
    }, {
        id: 'ber1',
        tag: '맛집',
        location: '울산',
        title: '울산 맛집 여행 코스 강추합니다!',
        username: '김하나',
        likeCount: 1,
        clickedLike: false,
    },
    {
        id: 'baswer',
        tag: '맛집',
        location: '부산',
        title: '부산 맛집 여행 코스 강추합니다!',
        username: '니머하노',
        likeCount: 4,
        clickedLike: true,
    }, {
        id: 'srtw',
        tag: '맛집',
        location: '강원',
        title: '강원 맛집 여행 코스 강추합니다!',
        username: '서른마흔다섯',
        likeCount: 0,
        clickedLike: false,
    }

]

const tags = [
    "전체",
    "맛집",
    "힐링",
    "포토",
    "명소",
    "자연"
]

const Board = () => {
    const [clickedTag, setClickedTag] = useState<string>("전체");
    const [datas, setDatas] = useState<any>(initDatas);

    const options = selectOptions.map((option) => ({ value: option, label: option }));

    const changeLocationHandler = (value: any) => {
        console.log(value.value);
    }

    const clickCardHandler = () => {
        console.log('카드 클릭');
    }

    const cancelCardHandler = (e: any) => {
        e.stopPropagation();
        console.log('취소 버튼 클릭')
    }

    const clickLikeHandler = (e: any, index: number) => {
        e.stopPropagation();
        console.log('좋아요 버튼 클릭');

        setDatas((prev: any) => {
            return prev.map((data: any, prevIndex: any) => {
                const prevClickedLike = data.clickedLike;
                const prevLikeCount = data.likeCount;
                if (index === prevIndex) {
                    const newLikeCount = prevClickedLike ?
                        prevLikeCount - 1 :
                        prevLikeCount + 1;
                    return {
                        ...data,
                        likeCount: newLikeCount,
                        clickedLike: !prevClickedLike
                    }
                }
                return data;
            })
        })
    }

    const clickTagHandler = (e: any) => {
        console.log('태그 클릭');
        console.log(e.target.value);
        setClickedTag(e.target.value);
    }

    return (
        <>
            <BoardHeader>
                <TitleContainer>
                    <MainTitle>게시판</MainTitle>
                    <SubTitle1>여행 계획을 고민중이신가요?</SubTitle1>
                    <SubTitle2>다른 사람의 계획을 내 계획에 추가해보세요!</SubTitle2>
                </TitleContainer>
            </BoardHeader>
            <Main>
                <MainContainer>
                    <ButtonContainer>
                        {tags.map((tag) => (
                            <TagButton
                                key={tag}
                                onClick={clickTagHandler}
                                value={tag}
                                isClicked={clickedTag === tag}>
                                {tag}
                            </TagButton>
                        ))}
                        <SelectWrapper>
                            <Select
                                options={options}
                                styles={customStyles}
                                placeholder="지역"
                                onChange={changeLocationHandler} />
                        </SelectWrapper>
                    </ButtonContainer>
                    <CardListContainer>
                        {datas.map((data: any, index: number) => (
                            <BoardCard
                                key={data.id}
                                onClick={clickCardHandler}>
                                <CardHeader>
                                    <Tag>{data.tag}</Tag>
                                    <Location>{data.location}</Location>
                                </CardHeader>
                                <CardTitle>{data.title}</CardTitle>
                                <CardButtons>
                                    <CancelButton
                                        onClick={cancelCardHandler}
                                    >공유취소</CancelButton>
                                    {data.clickedLike ?
                                        <LikeButton
                                            onClick={(e) => clickLikeHandler(e, index)} /> :
                                        <UnlikeButton
                                            onClick={(e) => clickLikeHandler(e, index)} />
                                    }

                                </CardButtons>
                                <CardInfo>
                                    <UserName>{data.username}</UserName>
                                    <LikeCount>좋아요 {data.likeCount}개</LikeCount>
                                </CardInfo>
                            </BoardCard>
                        ))}
                    </CardListContainer>
                </MainContainer>
            </Main>
        </>
    )
}

export default Board;


const BoardHeader = styled.section`
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

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const MainContainer = styled.div`
    width: 1287px;
    margin: 80px auto;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    & > button:not(:first-of-type) {
        margin-left: 10px;
    }

    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: solid #ccc 1px;
`

const TagButton = styled.button<{ isClicked: boolean }>`
    cursor: pointer;
    border: none;
    font-weight: bold;
    padding: 6px 23px;
    border-radius: 50px;
    font-size: 16px;
    transition: all .2s;

    :hover {
        background-color: #60A5F8;
        color: white;
    }

    ${({ isClicked }) =>
        isClicked ?
            css`
            background-color: #60A5F8;
            color: white;
        ` :
            css`
            background-color: #E4F0FF;
            color: #60A5F8;
        `
    }
`

const SelectWrapper = styled.div`
    margin-left: auto;
    box-sizing: border-box;
`

const CardListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 233px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    place-content: center;
`

const BoardCard = styled.div`
    width: 233px;
    height: 300px;
    border: solid #ccc 1px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    box-sizing: border-box;
    padding: 20px;
    
    &:hover {
        transform: translate(0, -5px);
        box-shadow: 0 8px 18px -5px rgb(0,0,0,10%);
    }

    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`
const Tag = styled.button`
    display: inline-block;
    padding: 7px 13px;
    border-radius: 30px;
    font-size: 12px;
    border: none;
    background-color: #60A5F8;
    color: white;
    font-weight: bold;
    cursor: pointer;
`
const Location = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin-right: 7px;
`



const CardTitle = styled.div`
    width: 100%;
    height: 90px;
    overflow: hidden;
    color: #444;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 45px;
    line-height: 140%;
`



const CardButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: solid #ccc 1px;
    margin-bottom: 15px;
`
const CancelButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: #F86960;
    font-weight: bold;
    color: white;
    padding: 6px 8px;
    border-radius: 5px;
    font-size: 12px;
    transition: all ease .2s;

    &:hover {
        transform: translate(0, -3px);
    }
`

const LikeButton = styled(LikeIcon)`
    cursor: cursor;
    display: inline-block;
    margin-right: 7px;
    transition: all ease .2s;

    &:hover {
        transform: translate(0, -3px);
    }
`

const UnlikeButton = styled(UnlikeIcon)`
    cursor: cursor;
    display: inline-block;
    margin-right: 7px;
    transition: all ease .2s;

    &:hover {
        transform: translate(0, -3px);
    }
`

const CardInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    font-weight: bold;
    font-size: 14px;
`
const UserName = styled.div`
    margin-left: 7px;
    overflow: hidden;
`
const LikeCount = styled.div`
    margin-right: 7px;
`