"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import stayIcon from "../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../public/Home/bIcon1.png";
import Logo from "../../../../public/Logo.png";
import { FlightTab } from '@/app/home/components/FlightTab';
import searchIcon from "../../../../public/FindFlights/searchIcon.png"
import Filter from '@/components/Filter';
import { Divider } from 'antd';
import CheckboxFilter from '@/components/CheckboxFilter';
import GenericCard from '@/components/GenericCard';
const airlines = [
    "Emirated",
    "Fly Dubai",
    "Qatar",
    "Etihad"
];
const trips = [
    "Round Trip",
    "On Way",
    "Multi-City",
    "My Dates Are Flexible"
]
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
            <div className='flex flex-row justify-center items-start m-4'>
                <div className='w-1/4 p-8 flex gap-4 flex-col'>
                    <h1 className='text-2xl font-bold'>Filters</h1>
                    <Filter title="Price" />
                    <Divider />
                    <CheckboxFilter checkboxs={airlines} title="Airlines" />
                    <CheckboxFilter checkboxs={trips} title="Trips" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <GenericCard />
                    <GenericCard />
                    <GenericCard />
                    <GenericCard />

                </div>
            </div>
        </div >
    )
}

export default page;