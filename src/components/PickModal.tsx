import React from "react";
import EmailAuthModal from "components/EmailAuthModal";
import PlanModal from "containers/plan/PlanModal";
import NewPlanModal from "containers/main/NewPlanModal";
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

const ModalSelector = (state: RootState) => state.modal

const modalComponents: any = {
    "EmailAuthModal" : <EmailAuthModal/>,
    "PlanModal" : <PlanModal/>,
    "NewPlanModal" : <NewPlanModal/>
}

const PickModal = () => {
    const { modalIsOpen, modalName } = useSelector(ModalSelector);
    return (
        <div>
            {modalIsOpen && modalComponents[modalName]}
        </div>
    )
}

export default PickModal;