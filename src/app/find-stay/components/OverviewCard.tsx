import React from 'react'
import overviewIcon from "../../../../public/FindStays/overviewIcon.png"
import Image from 'next/image'
const OverviewCard = ({ rate, grade, nbReviewers, text }: any) => {
    return (
        <div className='flex flex-col gap-1 justify-start items-start p-4 rounded-xl pr-16 border border-[#8ed4bbff] hover:bg-[#8ed4bbff]'>
            {rate
                ?
                <h1 className='font-bold text-3xl'>{rate}</h1>
                :
                <Image src={overviewIcon} alt="icon" />
            }
            <h1 className='font-bold text-xl'>{grade}</h1>
            {nbReviewers && <p className='font-bolder text-md mt-2'>{nbReviewers} reviews</p>}
            {text && <p className='font-bolder text-md mt-10'>{text}</p>}
        </div>)
}

export default OverviewCard