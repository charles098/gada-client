import React, { FC, useState } from 'react';
import Modal from 'components/Modal';
import NewPlanForm from 'containers/main/NewPlanModal/NewPlanForm';

const NewPlanModal: FC = () => {

    return (
        <Modal
        width={524}
        height={733}
        >
            {/* 모달 내부 - 여기서 커스텀 하면 됩니다 */}
            <NewPlanForm />
        </Modal>
    )
}

export default NewPlanModal;