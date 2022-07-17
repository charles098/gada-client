import React from 'react';
import EmailAuthModal from 'components/EmailAuthModal';
import PlanOptionModal from 'containers/plan/PlanModal/PlanOptionModal';
import NewPlanModal from 'containers/main/NewPlanModal';
import PlanDetailModal from 'containers/plan/PlanModal/PlanDetailModal';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

const ModalSelector = (state: RootState) => state.modal;

const modalComponents: any = {
    EmailAuthModal: <EmailAuthModal />,
    PlanOptionModal: <PlanOptionModal />,
    PlanDetailModal: <PlanDetailModal />,
    NewPlanModal: <NewPlanModal />,
};

const PickModal = () => {
    const { modalIsOpen, modalName } = useSelector(ModalSelector);
    return <div>{modalIsOpen && modalComponents[modalName]}</div>;
};

export default PickModal;
