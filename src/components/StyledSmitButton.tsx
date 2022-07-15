import React from 'react';
import styled from 'styled-components';

const CustomModalSubmitButton = ({
    width,
    height,
    children,
    ...props
}: any) => {
    return (
        <SubmitButton width={width} height={height} {...props}>
            {children}
        </SubmitButton>
    );
};
const SubmitButton = styled.button<{ width: number; height: number }>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    cursor: pointer;
    background: ${({ theme }) => theme.PRIMARY};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    align-self: center;
    border: 0px;

    font-weight: 600;
    font-size: 22px;
    line-height: 32px;
    color: white;

    position: relative;
    padding: 10px 20px;
    font-size: 28px;
    transition: all 1s;
    &:after,
    &:before {
        content: ' ';
        width: 10px;
        height: 10px;
        position: absolute;
        border: 0px solid #fff;
        transition: all 1s;
    }
    &:after {
        top: -1px;
        left: -1px;
        border-top: 0x solid white;
        border-left: 0px solid white;
    }
    &:before {
        bottom: -1px;
        right: -1px;
        border-bottom: 0px solid white;
        border-right: 0px solid white;
    }
    &:hover {
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        color: ${({ theme }) => theme.LIGHT_GRAY};
        &:before {
            width: 100%;
            height: 100%;
            border-bottom: 5px solid #dedede;
            border-right: 5px solid #dedede;
            border-color: white;
        }
        &:after {
            width: 100%;
            height: 100%;
            border-top: 5x solid #dedede;
            border-left: 5px solid #dedede;
            border-color: white;
        }
    }
`;

export default CustomModalSubmitButton;
