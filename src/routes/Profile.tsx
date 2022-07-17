import React, { FC } from 'react';
import styled from 'styled-components';

const email = 'elice@test.com';
const username = '뚱인데요';


const Profile: FC = () => {
    const usernameSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log(e.target.username.value)
    }

    const passwordSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log(e.target.currentPassword.value);
        console.log(e.target.newPassword.value);
        console.log(e.target.newPasswordCheck.value);
    }

    return (
        <>
            <ProfileHeader>
                <TitleContainer>
                    <MainTitle>프로필</MainTitle>
                    <SubTitle1>내 정보를 조회하고,</SubTitle1>
                    <SubTitle2>내 정보를 수정해보세요!</SubTitle2>
                </TitleContainer>
            </ProfileHeader>
            <Main>
                <MainContainer>
                    <ProfileForm>
                        <CardName>이메일</CardName>
                        <Email
                        type="email"
                        value={email}
                        disabled
                        />
                    </ProfileForm>
                    <ProfileForm onSubmit={usernameSubmitHandler}>
                        <CardName>닉네임</CardName>
                        <UserName
                        type="text"
                        defaultValue={username}
                        placeholder="넥네임을 입력해주세요."
                        name="username"
                        />
                        <SubmitButton
                        type="submit"
                        value="저장하기"
                        />
                        <InfoMessage>이미 존재하는 닉네임입니다.</InfoMessage>
                    </ProfileForm>
                    <ProfileForm onSubmit={passwordSubmitHandler}>
                        <CardNameContainer>
                            <CardTitle>비밀번호</CardTitle>
                            <CardHelp>비밀번호를 모르신다면?</CardHelp>
                        </CardNameContainer>
                        <Password
                        placeholder="현재 비밀번호"
                        type="password"
                        name="currentPassword"
                        />
                        <Password
                        placeholder="새 비밀번호"
                        type="password"
                        name="newPassword"
                        />
                        <Password
                        placeholder="새 비밀번호 확인"
                        type="password"
                        name="newPasswordCheck"
                        />
                        <SubmitButton
                        type="submit"
                        value="저장하기"
                        />
                        <InfoMessage>현재 비밀번호를 확인해주세요.</InfoMessage>
                    </ProfileForm>
                </MainContainer>
            </Main>
        </>
    )
};

export default Profile;

const ProfileHeader = styled.section`
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
    min-width: 1287px;
    width: 100%;
    
`

const MainContainer = styled.div`
    width: 800px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    center;
    gap: 20px;
`

const ProfileForm = styled.form`
    padding: 30px;
    border: solid #CCC 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    gap: 7px;
    position: relative;
`

const CardName = styled.div`
    width: 100%;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
`

const CardNameContainer = styled(CardName)`
    display: flex;
    align-items: flex-end;
`

const CardTitle = styled.div``

const CardHelp = styled.div`
    font-size: 13px;
    margin-left: auto;
    color: #888;
`

const InputWrapper = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    color: #222 !important;
    height: 37px;
    font-size: 15px;
    padding: 0 15px;
    background-color: #F5F5F5;

    &::placeholder { color: #aaaaaa; }
    &:focus { outline:none; bakcground-color: white;}
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        box-shadow: 0 0 0 1000px white inset;
    }
    &:disabled { 
        background-color: #F5F5F5;
        cursor: not-allowed;
    }
`

const Email = styled(InputWrapper)``
const UserName = styled(InputWrapper)``
const Password = styled(InputWrapper)``

const SubmitButton = styled(InputWrapper)`
    width: 300px;
    height: 50px;
    font-size: 17px;
    font-weight: bold;
    margin-top: 30px !important;
    background-color: #60A5F8;
    color: white !important;
    cursor: pointer;
`

const InfoMessage = styled.div`
    position: absolute;
    top: calc(100% - 105px);
    left: 30px;
    font-size: 12px;
    color: #F86960;
`