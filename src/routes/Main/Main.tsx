import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/main/PlanList';
import LocationList from 'containers/main/LocationList';
import Modal from "components/Modal";
import NewPlanModal from 'containers/main/NewPlanModal';
import { RootState } from 'store/modules';

const Main: FC = () => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);

    return (
        <Wrapper>
            {largeModalIsOpen && <NewPlanModal/>}
            <Header />
            <PlanList />
            <LocationList />
        </Wrapper>
    )
};

export default Main;

const Wrapper = styled.div`
    width: 100%;
`;