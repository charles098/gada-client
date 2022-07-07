import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/Main/PlanList';
import LocationList from 'containers/Main/LocationList';
import Modal from "components/Modal";
import { RootState } from 'store/modules';

const Main: FC = () => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);

    return (
        <Wrapper>
            {largeModalIsOpen && (
                <Modal
                width={624}
                height={800}
                >
                    {/* 모달 내부 - 여기서 커스텀 하면 됩니다 */}
                </Modal>
            )}
            <Header />
            <PlanList />
            <LocationList />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100%;
`;

export default Main;
