import React, { FC, useState } from 'react';
import styled from 'styled-components';

const NewPlanTitle : FC = () => {
    const [title, setTitle] = useState<string>('');

    return (
        <TitleWrapper>
            <TitleLabel
                htmlFor="title"
            >
                여행이름
            </TitleLabel>
            <TitleInput
                type='text'
                value={title}
                name="title"
                onChange={(e: any) => setTitle(e.target.value)}
            />
        </TitleWrapper>
    )
}

export default NewPlanTitle;

const TitleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

const TitleLabel = styled.label`
  display: block;
  color: #60A5F8;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`
const TitleInput = styled.input`
  width: 270px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #dddddd;

  &:focus {outline:none;}
`