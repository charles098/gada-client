import React from 'react';
import styled from 'styled-components';

interface CardProps {
    src: string;
    location: string;
}

const LocationCard = ({ src, location } : CardProps) => {
    return (
        <Wrapper src={src}>
            <LocationCardOpacity>{location}</LocationCardOpacity>
        </Wrapper>
    )
}

export default LocationCard;

const Wrapper = styled.div<{ src : string }>`
    position: relative;
    width: 232.5px;
    height: 232.5px;
    background-image: url('${({src}) => src}');
    background-repeat : no-repeat;
    background-size : cover;
    border-radius: 10px;
`

const LocationCardOpacity = styled.div`
    color: white;
    text-align: center;
    letter-spacing: 3px;
    line-height: 232.5px;
    font-size: 24px;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    border-radius: 10px;

    transition: background-color 0.2s, font-size 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 28px;
    }
`