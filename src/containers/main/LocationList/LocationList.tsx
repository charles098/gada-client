import React, { FC } from 'react';
import styled from 'styled-components';
import { LocationIcon } from 'components/icons';
import LocationCard from 'components/LocationCard';
import jejuImg from 'images/jeju.jpg';

const PlanList : FC = () => {
    const defaultProps = {
        src: jejuImg,
        location: '제주'
    }

    return (
        <LocationWrapper>
            <LocationHeader>
                <LocationIcon 
                width='20px'
                height='27px'
                style={locationStyle}/>
                <LocationTitle>국내 여행지</LocationTitle>
            </LocationHeader>
            <LocationContainer>
                {[...Array(7)].map(() => (
                    <LocationCard 
                    src={defaultProps.src}
                    location={defaultProps.location}
                    />
                ))}
            </LocationContainer>
        </LocationWrapper>
    )
}

export default PlanList;

const LocationWrapper = styled.section`
    width: 1287px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
`;

const LocationHeader = styled.div`
    margin-bottom: 25px;
`

const LocationTitle = styled.h2`
    font-size: 24px;
    display: inline-block;
    color: #3D95FF;
    cursor: default;
`;

const locationStyle =  {
    marginRight: '10px',
}

const LocationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 232.5px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    border-radius: 10px;

    > div:hover {
        cursor: pointer;
    }
`;