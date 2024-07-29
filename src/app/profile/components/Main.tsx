import React from 'react'
import coverImage from '../../../../public/profile/coverImage.png'
import Image from 'next/image'
import ProfileTabs from './ProfileTabs'
const Main = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <Image src={coverImage} alt="img" />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img src="https://i.ibb.co/vL7MPSV/113129314.jpg" alt="avatar" width="150" height={150} style={{
                        borderRadius: "50%",
                        marginTop: "-4rem",
                        objectFit: "cover",
                        border: "4px solid #ff8682"
                    }} />
                    <h2 className='text-lg font-bold'>Saif Saad</h2>
                    <p className='text-gray-500'>saadseif304@gmail.com</p>
                </div>
            </div>
            <ProfileTabs />

        </div>
    )
}

export default Main