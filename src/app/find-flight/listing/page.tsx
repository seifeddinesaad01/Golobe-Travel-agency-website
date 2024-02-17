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
import Footer from '@/components/Footer';
import { useFetch } from '@/Data/Fetchs';

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
    const { data, isPending, error } = useFetch("http://localhost:8000/flights");
    console.log(isPending, "is pending")
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
            <div className='flex flex-col sm:flex-row justify-center items-start m-4 mb-20'>
                <div className='w-1/4 p-8 flex gap-4 flex-row sm:flex-col'>
                    <h1 className='text-2xl font-bold'>Filters</h1>
                    <Filter title="Price" />
                    {/* <Divider /> */}
                    <CheckboxFilter checkboxs={airlines} title="Airlines" />
                    <CheckboxFilter checkboxs={trips} title="Trips" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    {isPending ? (
                        <div className="w-12 h-12 rounded-full border-4 border-white animate-spin">
                            <div className="border-t-4 border-white rounded-full h-full w-full"></div>
                        </div>

                    ) : (
                        data?.map((airline: any) => (
                            <GenericCard
                                key={airline?.id}
                                image={airline?.image}
                                rate={airline?.rate}
                                id={airline?.id}
                                price={airline?.price}
                                reviewsNumber={airline?.reviewsNumber}
                                departureTime={airline?.departureTime}
                                arrivalTime={airline?.arrivalTime}
                            />
                        ))
                    )}

                </div>
            </div>
            <Footer />
        </div >
    )
}

export default page;