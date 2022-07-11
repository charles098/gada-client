import { LocationIcon } from 'components/icons';
import React from 'react';
import styled from 'styled-components';

interface Props {
    state: boolean;
    onClick(e?: React.MouseEvent<HTMLButtonElement>): void;
}

const TitleTrigger = ({ state, onClick }: Props) => {
    return (
        <Title>
            <ContentsTrigger onClick={onClick}>
                <LocationIcon width="23px" height="27px" />
                {state ? '나만의 장소 추가하기' : '검색으로 찾기'}
            </ContentsTrigger>
        </Title>
    );
};

const Title = styled.p``;
const ContentsTrigger = styled.button`
    display: inline;
    border: 0px;
    background: none;
    text-decoration: none;
    font-size: 22px;
    font-weight: 700;
    padding-left: 70px;
    line-height: 32px;
    color: #3d95ff;
`;
export default TitleTrigger;
