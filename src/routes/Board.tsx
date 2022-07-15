import React, { useState } from "react";
import styled from 'styled-components';
import { LikeIcon } from 'components/icons';
import Select from 'react-select';

const selectOptions = [
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

const tagOptions = [
    "전체",
    "맛집",
    "힐링",
    "포토",
    "명소",
    "자연"
]

const Board = () => {
    const [ location, setLocation ] = useState<string>("");
    const options = selectOptions.map((x) => ({ value: x, label: x }));

    const handleChange = (value: any) => {
        setLocation(value.value);
    }

    const clickhandler = () => {
        console.log('카드 클릭');
    }

    const handleCancel = (e: any) => {
        e.stopPropagation();
        console.log('취소 버튼 클릭')
    }

    const handleLike = (e: any) => {
        e.stopPropagation();
        console.log('좋아요 버튼 클릭');
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
                        <Button>전체</Button>
                        <Button>맛집</Button>
                        <Button>힐링</Button>
                        <Button>포토</Button>
                        <Button>명소</Button>
                        <Button>자연</Button>
                        <SelectWrapper>
                            <Select
                                options={options}
                                styles={customStyles}
                                placeholder="지역"
                                onChange={handleChange} />
                        </SelectWrapper>
                    </ButtonContainer>
                    <CardListContainer>
                        <BoardCardWrapper>
                            <BoardCard onClick={clickhandler}>
                                <CardHeader>
                                    <Tag>맛집</Tag>
                                    <Location>제주도</Location>
                                </CardHeader>
                                <CardTitle>제주도 맛집 여행 코스 강추합니다!!</CardTitle>
                                <CardButtons>
                                    <CancelButton
                                    onClick={handleCancel}
                                    >공유취소</CancelButton>
                                    <LikeButton
                                        onClick={handleLike}
                                    />
                                </CardButtons>
                                <CardInfo>
                                    <UserName>유저이름</UserName>
                                    <LikeCount>좋아요 1개</LikeCount>
                                </CardInfo>
                            </BoardCard>
                        </BoardCardWrapper>
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

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: #60A5F8;
    padding: 6px 23px;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 16px;
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

const BoardCardWrapper = styled.div`
    width: 233px;
    height: 300px;
    padding-top: 5px;
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
const likeStyle = {
    cursor: "pointer",
    display: "inline-block",
    marginRight: "7px",
    transition: "all ease 2s",
}



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
`
const LikeCount = styled.div`
    margin-right: 7px;
`