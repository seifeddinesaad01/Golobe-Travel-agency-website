"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import stayIcon from "../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../public/Home/bIcon1.png";
import Logo from "../../../../public/Logo.png";
import { FlightTab } from '@/app/home/components/FlightTab';
import searchIcon from "../../../../public/FindFlights/searchIcon.png"
const page = () => {
    return (
        <div className='flex flex-col'>
            <Header
                logo={Logo}
                stayIcon={stayIcon}
                flightIcon={flightIcon}
                bgColor="white"
                color="black"
            />
            <div
                style={{
                    padding: '2rem',
                    borderRadius: "16px"
                }}>
                <FlightTab showButton={true} href="" icon={searchIcon} />
            </div>
        </div >
    )
}

export default page