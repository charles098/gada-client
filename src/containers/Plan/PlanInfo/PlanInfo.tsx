import React, { FC } from 'react';
import styled from 'styled-components';

const PlanInfo: FC = () => {
    return (
        <Container>
            {/* <div className="field">
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Full Name"
                    autofill="autofill"
                />
                <label htmlFor="fullname">Name</label>
            </div> */}

            <TitleController>부산 여행</TitleController>
            {/* <FixTitleButton>fix</FixTitleButton> */}
            <PeriodController>22.07.08 - 22.07.12</PeriodController>
            <WithController>1명과 함께</WithController>
        </Container>
    );
};

export default PlanInfo;

const Container = styled.div`
    width: auto;
    height: 50px;
    margin: 30px;
    display: flex;
    align-items: center;

    background-color: pink;
`;

const TitleController = styled.div`
    font-size: 28px;
    margin-right: 15px;
`;

const PeriodController = styled.button`
    margin-right: 15px;
`;

const WithController = styled.button`
    margin-right: 15px;
`;
