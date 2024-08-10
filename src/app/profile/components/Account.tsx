import React from 'react'
import edit from "../../../../public/profile/Edit.png"
import Image from 'next/image'
const Account = () => {
    const ProfileDetails = [
        {
            detail: "Name:",
            text: "Saif eddine saad"
        },
        {
            detail: "Email:",
            text: "saadseif304@gmail.com"
        },
        {
            detail: "Password",
            text: "********"
        },
        {
            detail: "Phone Number:",
            text: "+216 92532269",
        },
        {
            detail:"Adress",
            text:"Oued jebes, ouerdanine, monastir"
        },
        {
            detail:"Date Of Birth:",
            text:"22-09-2003"
        }
    ]
    return (
        <div className='flex justify-start items-start flex-col p-2 pb-4'>
            <h1 className='text-2xl font-bold'>Account:</h1>
            <div className='flex justify-center items-start flex-col w-full'>
                {ProfileDetails?.map((info: any) => {
                    return <div className='flex justify-between w-full'>
                        <div className='flex justify-between items-start flex-col'>
                            <h1 className='text-gray-400 text-lg'>{info?.detail}</h1>
                            <p className='text-lg font-semibold'>{info?.text}</p>
                        </div>
                        <button type='button' className='border border-green-400 p-2 h-3/4 rounded-md flex justify-center items-center gap-2'>
                            <Image src={edit} alt="icon" />
                            <p>change</p>
                        </button>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Account