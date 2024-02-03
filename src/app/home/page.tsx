"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import Header from './components/Header/Header'
import Tabs from './components/Tabs';
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import { FlightTab } from './components/FlightTab';
import { StaysTab } from './components/StaysTab';
import TripCard from './components/TripCard';
import { reviews, trips, tripsDisplay } from '@/constants/data';
import TripDisplay from './components/TripDisplay';
import ReviewCard from './components/ReviewCard';
import Slider from './components/Slider';
import Footer from '@/components/Footer';


const page = () => {
    const tabs = [
        { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
        { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
    ];

    return (
        <div className="flex justify-center items-center flex-col bg-gray-100 w-full overflow-hidden">
            <div className='bgimage'>
                <Header />
                <div className="text-white flex flex-col justify-center items-center gap-2 mt-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Helping Others</h2>
                    <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-bold tracking-wide leading-tight font-roboto">L i v e & T r a v e l</h1>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl">Socia offers to suit your plan</p>
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
                <div className="self-center sm:self-start flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-center sm:text-left">Plan your perfect trip</h1>
                    <p className="text-lg text-gray-500 text-center sm:text-left">Search Flights & Places Hire to our most popular destinations</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center w-full">
                    {trips?.map((trip: any) => (
                        <TripCard
                            key={trip.id}
                            tripImg={trip.tripImg}
                            title={trip?.title}
                            description={trip?.description}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center gap-4 w-full m-10 flex-col sm:flex-row">
                    {tripsDisplay?.map((trip, index) => {
                        return <TripDisplay
                            key={index}
                            image={trip.image}
                            title={trip.title}
                            description={trip.description}
                        />
                    })}
                </div>
            </div>
            {/*
            <div style={{
                width: '85%'
            }} className="flex justify-center flex-col  gap-10 p-10">
                <div className="self-start flex flex-col gap-1">
                    <h1 className="text-3xl font-bold">Plan your perfect trip</h1>
                    <p className="text-lg text-gray-500">Search Flights & Places Hire to our most popular destinations</p>
                </div>
                <div style={{
                    width: '100%'
                }}>
                    <Slider options={{ align: "start" }}>
                        {reviews.map((review, i) => (
                            <div key={i} className="flex-[0_0_50%] md:flex-[0_0_20%]">
                                <ReviewCard
                                    image={review.image}
                                    title={review.title}
                                    description={review.description}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer /> */}
        </div>
    )
}

export default page