import { SearchIcon } from 'components/icons';
import React from 'react';
import styled from 'styled-components';

interface Props {
    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
    onChange(e: React.FormEvent<HTMLInputElement>): void;
    value: string;
}
const PlanPlaceForm = ({ onSubmit, onChange, value }: Props) => {
    return (
        <PlaceForm onSubmit={onSubmit}>
            <SearchIcon width="24px" height="23px" />
            <PlaceInput
                placeholder="장소를 입력해주세요"
                onChange={onChange}
                value={value}
            />
        </PlaceForm>
    );
};

const PlaceForm = styled.form`
    box-sizing: border-box;

    width: 975px;
    height: 47px;
    margin-left: 65px;

    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 15px;

    padding: 13px 11px 13px 20px;

    display: flex;
`;

const PlaceInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0px;
    margin-left: 25px;
    border: 0px;
    outline: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
`;

export default PlanPlaceForm;
