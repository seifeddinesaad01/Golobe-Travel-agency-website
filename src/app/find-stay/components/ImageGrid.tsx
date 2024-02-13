import React from 'react'
import hotel1 from "../../../../public/FindStays/hotel5.png"
import hotel2 from "../../../../public/FindStays/hotel6.png"
import hotel3 from "../../../../public/FindStays/hotel7.png"
import hotel4 from "../../../../public/FindStays/hotel8.png"
import Image from 'next/image'
const ImageGrid = () => {
    return (
        <div className='flex gap-2 w-[95%] self-center flex-col sm:flex-row'>
            <Image src={hotel1} alt="img" className='w-full sm:w-2/4 object-cover self-center sm:self-start'/>
            <div className='flex gap-2 w-full sm:w-2/4 self-center sm:self-start'>
                <div className='flex flex-col gap-2 w-full '>
                    <Image src={hotel2} alt="img" className='w-full'/>
                    <Image src={hotel3} alt="img" className='w-full'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <Image src={hotel4} alt="img" className='w-full'/>
                    <Image src={hotel2} alt="img" className='w-full '/>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid