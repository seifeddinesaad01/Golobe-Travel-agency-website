"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import stayIcon from "../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../public/Home/bIcon1.png";
import Logo from "../../../../public/Logo.png";
import { FlightTab } from '@/app/home/components/FlightTab';
import searchIcon from "../../../../public/FindFlights/searchIcon.png"
import Filter from '@/components/Filter';
const page = () => {
    return (
        <div className='flex flex-col bg-[#fafbfcff]'>
            <Header
                logo={Logo}
                stayIcon={stayIcon}
                flightIcon={flightIcon}
                bgColor="white"
                color="black"
            />
            <div className='shadow-md hover:shadow-lg'
                style={{
                    margin: '2rem',
                    padding: "2rem",
                    borderRadius: "16px",
                    backgroundColor: "white",
                }}>
                <FlightTab showButton={true} href="" icon={searchIcon} />
            </div>
            <div className='grid grid-cols-2'>
                <div className='w-1/4 p-8'>
                    <h1>Filters</h1>
                    <Filter />
                </div>
                <div className='w-full'>
                    <p>Showcase</p>
                </div>
            </div>
        </div >
    )
}

export default page