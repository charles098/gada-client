import React from "react";
import styled from 'styled-components';
import LoginHeader from 'components/LoginHeader';

const LoginForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // 이거 그대로 post 보내면 된다.
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return (
        <Wrapper>
            <LoginHeader />
            <Form onSubmit={handleSubmit}>
                <Email
                type="email"
                placeholder="Email"
                name="email"
                />
                <Password
                placeholder="Password"
                type="password"
                name="password"
                />
                <LinkContainer>
                    <Register>회원가입</Register>
                    <FindPassword>비밀번호 찾기</FindPassword>
                </LinkContainer>
                <LoginButton
                type="submit"
                value="로그인"
                />
            </Form>
        </Wrapper>
    )
}

export default LoginForm;

const Wrapper = styled.div`
    background-color: #60A5F8;
    width: 100vw;
    height: 100vh;
`

const Form = styled.form`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.input`
    width: 350px;
    border-radius: 5px;
    box-sizing: border-box;
    border: none;
    font-family: 'Noto Sans KR';
    color: #222222;

    &::placeholder { color: #aaaaaa; }
    &:focus { outline:none; }
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        box-shadow: 0 0 0 1000px white inset;
    }
`

const Email = styled(InputWrapper)`
    height: 45px;
    padding: 0 15px;
    font-size: 15px;
`

const Password = styled(InputWrapper)`
    height: 45px;
    padding: 0 15px;
    margin-top: 15px;
    font-size: 15px;
`

const LinkContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const LinkWrapper = styled.div`
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: #ffffff;
`

const Register = styled(LinkWrapper)`
    margin-left: 7px;
`

const FindPassword = styled(LinkWrapper)`
    margin-right: 7px;
`

const LoginButton = styled(InputWrapper)`
    height: 50px;
    font-size: 17px;
    font-weight: 500;
    margin-top: 50px;
    
    background-color: #222222;
    color: white;
    cursor: pointer;
`
