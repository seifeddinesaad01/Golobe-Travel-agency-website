import React, { useState } from 'react';
import { Modal } from 'antd';
interface IPopUp {
    isModalOpen: any;
    setIsModalOpen: any
}
const PopUp = ({ isModalOpen, setIsModalOpen }: IPopUp) => {



    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default PopUp;