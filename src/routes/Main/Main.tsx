import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/Main/PlanList';
import LocationList from 'containers/Main/LocationList';
import Modal from "components/Modal";
import NewPlanForm from 'containers/Main/NewPlanForm';
import { RootState } from 'store/modules';

const Main: FC = () => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);

    return (
        <Wrapper>
            {largeModalIsOpen && (
                <Modal
                width={524}
                height={713}
                >
                    {/* 모달 내부 - 여기서 커스텀 하면 됩니다 */}
                    <NewPlanForm />
                </Modal>
            )}
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