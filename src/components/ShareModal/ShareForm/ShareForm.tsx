import React, { FC, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ShareHeader from './ShareHeader';
import ShareTitle from './ShareTitle';
import ShareTheme from './ShareTheme';

const ShareForm: FC = () => {
    const [ theme, setTheme ] = useState<string>("");
    
    const submitHandler = (e: any) => {
        e.preventDefault();
        const { title } = e.target;

        if (!title.value) {
            alert('제목을 입력해주세요!');
        }
        else if (!theme) {
            alert('주제를 선택해주세요!');
        }
        else {
            console.log(title.value);
            console.log(theme);
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <ShareHeader />
            <ShareTitle />
            <ShareTheme
            setTheme={setTheme}
            />
            <SubmitButton 
                type="submit"
                value="공유하기"
            />
        </Form>
    )
}

export default ShareForm;

const Form = styled.form`
    padding: 20px;
    width: 500px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SubmitButton = styled.input`
  background-color: #60A5F8;
  border: none;
  padding: 10px 100px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 60px;
`