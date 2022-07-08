import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import PlanList from 'containers/Main/PlanList';
import LocationList from 'containers/Main/LocationList';
import Modal from "components/Modal";
import NewPlanImage from 'components/NewPlanImage';
import NewPlanTitle from 'containers/Main/NewPlanTitle';
import NewPlanDate from 'containers/Main/NewPlanDate';
import { RootState } from 'store/modules';

const Main: FC = () => {
    const { largeModalIsOpen } = useSelector((state: RootState) => state.modal);

    return (
        <Wrapper>
            {largeModalIsOpen && (
                <Modal
                width={524}
                height={700}
                >
                    {/* 모달 내부 - 여기서 커스텀 하면 됩니다 */}
                    <Form>
                        <NewPlanImage />
                        <NewPlanTitle/>
                        <NewPlanDate />
                        <SubmitButton
                            type='submit'
                            value='등록 완료'
                        />
                    </Form>
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center
`
const SubmitButton = styled.input`
  background-color: #60A5F8;
  border: none;
  padding: 10px 120px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`