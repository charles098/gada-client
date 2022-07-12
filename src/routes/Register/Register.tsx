import React from "react";
import styled from 'styled-components';

const Register = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { name, email, password, passwordCheck } = e.target;

        if (!name.value) alert('이름을 입력해주세요!');
        else if (!email.value) alert('이메일을 입력해주세요!');
        else if (!password.value) alert('비밀번호를 입력해주세요!');
        else if (!passwordCheck.value) alert('비밀번호 확인란을 입력해주세요!');
        else if (password.value !== passwordCheck.value) alert('비밀번호가 일치하지 않습니다!');
        else {
            // 이거 그대로 post 보내면 된다.
            console.log(name.value);
            console.log(email.value);
            console.log(password.value);
            console.log(passwordCheck.value);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <UserName
            type="text"
            placeholder="Username"
            name="name"
            />
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
            <Password
            placeholder="Password"
            type="password"
            name="passwordCheck"
            />
            <RegisterButton
            type="submit"
            value="회원가입"
            />
        </Form>
    )
}

export default Register;

const Form = styled.form`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > input:not(:first-of-type) {
        margin-top: 15px;
    }
`

const InputWrapper = styled.input`
    width: 350px;
    border-radius: 5px;
    box-sizing: border-box;
    border: none;
    font-family: 'Noto Sans KR';
    color: #222222 !important;
    height: 45px;
    font-size: 15px;

    &::placeholder { color: #aaaaaa; }
    &:focus { outline:none; }
    :-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset;
        box-shadow: 0 0 0 1000px white inset;
    }
`

const UserName = styled(InputWrapper)`
    padding: 0 15px;
`

const Email = styled(InputWrapper)`
    padding: 0 15px;
`

const Password = styled(InputWrapper)`
    padding: 0 15px;
`

const RegisterButton = styled(InputWrapper)`
    height: 50px;
    font-size: 17px;
    font-weight: 500;
    margin-top: 50px !important;
    
    background-color: #222222;
    color: white !important;
    cursor: pointer;
`
