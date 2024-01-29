"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import Header from './components/Header'
import Tabs from './components/Tabs';
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import { FlightTab } from './components/FlightTab';
import { StaysTab } from './components/StaysTab';
import TripCard from './components/TripCard';
import { trips } from '@/constants/data';
import TripDisplay from './components/TripDisplay';

const page = () => {
    const tabs = [
        { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
        { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
    ];

    return (
        <div className="flex justify-center items-center flex-col bg-gray-100 w-full">
            <div className='bgimage'>
                <Header />
                <div className="text-white flex flex-col justify-center items-center gap-2 mt-4">
                    <h2 className="text-5xl">Helping Others</h2>
                    <h1 className="text-7xl uppercase font-bold tracking-wide leading-tight font-roboto">L i v e & T r a v e l</h1>
                    <p className="text-lg">Socia offers to suit your plan</p>
                </div>
            </div>

            <div
                style={{
                    marginTop: "-8rem",
                    borderRadius: "16px"
                }} className="shadow-lg bg-white h-40vh w-5/6 self-center p-4 rounded-16 mb-2">
                <Tabs tabs={tabs} />
            </div>
            <div className="flex justify-center items-center flex-col w-85 gap-10 mt-10">
                <div className="self-start flex flex-col gap-1">
                    <h1 className="text-3xl font-bold">Plan your perfect trip</h1>
                    <p className="text-lg text-gray-500">Search Flights & Places Hire to our most popular destinations</p>
                </div>

                <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-start w-full">
                    {trips?.map((trip: any, index: any) => (
                        <TripCard
                            key={trip.id}
                            tripImg={trip.tripImg}
                            title={trip?.title}
                            description={trip?.description}
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-10">
                    <TripDisplay />
                    <TripDisplay />
                </div>
            </div>
        </div>
    )
}

export default page