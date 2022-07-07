import React from 'react';
import styled from 'styled-components';

const SetupRoute = () => {
    const placeArr = Array.from({ length: 3 });

    return (
        <Container>
            {placeArr.map((x) => (
                <Place>
                    <Name>비석 문화 마을</Name>
                    <Location>부산 서구</Location>
                </Place>
            ))}
        </Container>
    );
};

export default SetupRoute;

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Place = styled.div`
    background-color: white;

    cursor: move;
    width: 400px;
    height: 80px;
    margin-top: 40px;
    border-radius: 13px;
    box-shadow: 1px 1px 10px 1px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.div`
    font-size: 20px;
    margin: 0 0 7px 15px;
`;

const Location = styled.div`
    margin-left: 15px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
`;
