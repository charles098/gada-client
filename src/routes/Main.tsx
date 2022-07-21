import React, { FC } from 'react';
import styled from 'styled-components';
import PlanList from 'containers/main/PlanList';
import LocationList from 'containers/main/LocationList';

const Main: FC = () => {
    return (
        <>
            <PlanList />
            <LocationList />
        </>
    );
};

export default Main;
