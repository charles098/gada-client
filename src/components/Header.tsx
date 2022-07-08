import React, { FC } from 'react';
import styled from 'styled-components';
import { PlaneIcon } from 'components/icons';

const Header: FC = () => {
    return (
        <HeaderContainer>
            <PlaneIcon
            width="49px"
            height="46px"
            style={planeIconStyle}
            />
            <HeaderTitle>여행가다</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;

const planeIconStyle = {
    marginBottom: '10px',
    marginLeft: '30px'
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #60A5F8;
    font-family: 'Jalnan';
    letter-spacing: 1px;
`;

const HeaderTitle = styled.h1`
    font-size: 30px;
    color: white;
    cursor: default;
`;