import React, { useState } from 'react';
import edit from "../../../../public/profile/Edit.png";
import Image from 'next/image';

const Account = () => {
    const [profileDetails, setProfileDetails] = useState([
        { detail: "Name:", text: "Saif eddine saad", key: "name" },
        { detail: "Email:", text: "saadseif304@gmail.com", key: "email" },
        { detail: "Password", text: "********", key: "password" },
        { detail: "Phone Number:", text: "+216 92532269", key: "phoneNumber" },
        { detail: "Adress", text: "Oued jebes, ouerdanine, monastir", key: "address" },
        { detail: "Date Of Birth:", text: "22-09-2003", key: "dob" }
    ]);

    const [editing, setEditing] = useState<string | null>(null);
    const [newValue, setNewValue] = useState<string>("");

    const handleEditClick = (key: string, currentValue: string) => {
        setEditing(key);
        setNewValue(currentValue);
    };

    const handleSaveClick = (key: string) => {
        setProfileDetails(details =>
            details.map(detail =>
                detail.key === key ? { ...detail, text: newValue } : detail
            )   
        );
        setEditing(null);
    };

    return (
        <div className='flex justify-start items-start flex-col p-2 pb-4'>
            <h1 className='text-2xl font-bold'>Account:</h1>
            <div className='flex justify-center items-start flex-col w-full'>
                {profileDetails?.map((info) => (
                    <div key={info.key} className='flex justify-between w-full mb-4'>
                        <div className='flex justify-between items-start flex-col'>
                            <h1 className='text-gray-400 text-lg'>{info.detail}</h1>
                            {editing === info.key ? (
                                <input
                                    type="text"
                                    className='text-lg font-semibold border-b-2 focus:outline-none'
                                    value={newValue}
                                    onChange={(e) => setNewValue(e.target.value)}
                                />
                            ) : (
                                <p className='text-lg font-semibold'>{info.text}</p>
                            )}
                        </div>
                        <button
                            type='button'
                            className='border border-green-200 p-2 h-3/4 rounded-md flex justify-center items-center gap-2'
                            onClick={() =>
                                editing === info.key ? handleSaveClick(info.key) : handleEditClick(info.key, info.text)
                            }
                        >
                            <Image src={edit} alt="icon" />
                            <p>{editing === info.key ? "Save" : "Change"}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Account;
