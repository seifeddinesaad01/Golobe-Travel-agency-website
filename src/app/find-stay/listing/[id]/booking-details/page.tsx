"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import Logo from "../../../../../../public/Logo.png";
import stayIcon from "../../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../../public/Home/bIcon1.png";
const page = () => {
    return (
        <div className='flex flex-col bg-[#fafbfcff]'>
            <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
        </div>
    )
}

export default page