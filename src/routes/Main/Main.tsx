import React, { FC } from 'react';
import styled from 'styled-components';
import {
    PlaneIcon,
    LeftIcon,
    RightIcon,
    LocationIcon,
    PlusIcon
} from 'components/icons';
import jejuImg from 'images/jeju.jpg';

const Main: FC = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <PlaneIcon 
                width="49px"
                height="46px"
                style={planeIconStyle} />
                <HeaderTitle>여행가다</HeaderTitle>
            </HeaderContainer>

            <PlanListWrapper>
                <PlanListTitle>유저님, 여행을 준비하세요.</PlanListTitle>
                <PlanListContainer>
                    <LeftIcon style={leftIconStyle}/>
                    <PlanCardContainer>
                        <AddPlanCard>
                            <AddButtonHelper />
                            <AddButton>
                                <PlusIcon style={plusIconStyle}/>
                            </AddButton>
                            <PlanTitle>다른 여행 준비하기</PlanTitle>
                            <PlanDate>새로운 일정을 추가하세요.</PlanDate>
                        </AddPlanCard>
                        <PlanCard>
                            <Dday>D-45</Dday>
                            <PlanImage>
                                <PlanImageName>제주</PlanImageName>
                                <PlanImageOpacity/>
                            </PlanImage>
                            <PlanTitle>제주 여행</PlanTitle>
                            <PlanDate>8.18(목) ~ 8.23(화)</PlanDate>
                        </PlanCard>
                        <PlanCard>
                            <Dday>D-45</Dday>
                            <PlanImage>
                                <PlanImageName>제주</PlanImageName>
                                <PlanImageOpacity/>
                            </PlanImage>
                            <PlanTitle>제주 여행</PlanTitle>
                            <PlanDate>8.18(목) ~ 8.23(화)</PlanDate>
                        </PlanCard>
                        <PlanCard>
                            <Dday>D-45</Dday>
                            <PlanImage>
                                <PlanImageName>제주</PlanImageName>
                                <PlanImageOpacity/>
                            </PlanImage>
                            <PlanTitle>제주 여행</PlanTitle>
                            <PlanDate>8.18(목) ~ 8.23(화)</PlanDate>
                        </PlanCard>
                        <PlanCard>
                            <Dday>D-45</Dday>
                            <PlanImage>
                                <PlanImageName>제주</PlanImageName>
                                <PlanImageOpacity/>
                            </PlanImage>
                            <PlanTitle>제주 여행</PlanTitle>
                            <PlanDate>8.18(목) ~ 8.23(화)</PlanDate>
                        </PlanCard>
                    </PlanCardContainer>
                    <RightIcon style={rightIconStyle}/>
                </PlanListContainer>
            </PlanListWrapper>

            <LocationWrapper>
                <LocationHeader>
                    <LocationIcon 
                    width='20px'
                    height='27px'
                    style={locationStyle}/>
                    <LocationTitle>국내 여행지</LocationTitle>
                </LocationHeader>
                <LocationContainer>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    <LocationCard>
                        <LocationCardOpacity>제주</LocationCardOpacity>
                    </LocationCard>
                    
                </LocationContainer>
            </LocationWrapper>
        </MainContainer> 
    )
};


const planeIconStyle = {
    marginBottom: '10px',
    marginLeft: '30px'
}

const MainContainer = styled.div`
    width: 100%;
`;

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #60A5F8;
`;

const HeaderTitle = styled.h1`
    font-size: 32px;
    color: white;
    cursor: default;
`;


const PlanListWrapper = styled.section`
    width: 1287px;
    margin: 70px auto;
`;

const PlanListTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 35px;
    cursor: default;
`;

const PlanListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

const leftIconStyle = {
    marginRight: '54px',
    cursor: 'pointer',
}

const rightIconStyle = {
    marginLeft: '54px',
    cursor: 'pointer',
}

const PlanCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    > div:not(div:first-of-type) {
        margin-left: 20px;
    }

    > div {
        cursor: pointer;
    }

    > div:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
`;

const AddPlanCard = styled.div`
    width: 200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

const AddButton = styled.div`
    width: 115px;
    height: 115px;
    background-color: #ECF3FD;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50%;
`

const AddButtonHelper = styled.div`
    height: 41px;
`

const plusIconStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
} as React.CSSProperties;

const PlanCard = styled.div`
    width: 200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

const Dday = styled.div`
    color: #6AA9F9;
    background-color: #EEF6FE;
    text-align: center;
    padding: 8px 18px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const PlanImage = styled.div`
    width: 115px;
    height: 115px;
    background-image: url('${jejuImg}');
    background-repeat : no-repeat;
    background-size : cover;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50%;
`;

const PlanImageOpacity = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    position: absolute;
    top: 0;
    border-radius: 50%;
`

const PlanImageName = styled.div`
    color: white;
    font-size: 16px;
    display: inline-block;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 3px;
`

const PlanTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const PlanDate = styled.div`
    font-size: 15px;
    color: #CFCFCF;
`;

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

const LocationCard = styled.div`
    position: relative;
    width: 232.5px;
    height: 232.5px;
    background-image: url('${jejuImg}');
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

export default Main;
