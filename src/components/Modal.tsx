import React from 'react';
import { Button, Modal } from 'antd';
import Image, { StaticImageData } from 'next/image';

interface PopUpProps {
    isModalOpen: boolean;
    text?: string;
    image: StaticImageData;
    handleOk: () => void;
    handleCancel: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ isModalOpen, text, image, handleOk, handleCancel }) => {
    return (
        <>
            <Modal visible={isModalOpen} footer={false} onOk={handleOk} onCancel={handleCancel} centered>
                <div className="flex justify-center items-center flex-col gap-4">
                    <Image src={image} alt="sended" />
                    <p className="text-lg text-center">
                        {text || "Password reset email sent. Check your inbox"}
                    </p>
                    <button
                        style={{
                            backgroundColor: "#8cd4b9ff",
                            padding: "1rem 2rem",

                        }}
                        className="text-lg rounded-md font-normal"
                        onClick={handleOk}
                    >
                        OK
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default PopUp;
