"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import Footer from '@/components/Footer';
import { FlightTab } from '../home/components/FlightTab';
import { StaysTab } from '../home/components/StaysTab';
import Header from '@/components/Header/Header';
import Tabs from '../../components/Tabs';
import Logo from "../../../public/Logo.png";
import Card from './components/Card';
import im1 from "../../../public/FindFlights/im1.png"
const page = () => {
  const tabs = [
    { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
    { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
  ];

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full overflow-hidden">
      <div className='bgimage1'>
        <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
        <div className="self-start text-white flex flex-col justify-start items-start pl-24 gap-2 mt-4">
          <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl">Make your travel <br /> whishlist, we'll do <br /> the rest</h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl">Special offers to suit your plan</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "-6rem",
          borderRadius: "16px"
        }}
        className="shadow-lg bg-white h-40vh w-5/6 self-center p-4 rounded-16 mb-2">
        <Tabs tabs={tabs} />
      </div>

      <div className="flex justify-center items-center flex-col w-85 gap-10 mt-10">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-gray-500 text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br />
            the travel tools to get you to your destination.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center w-full">
          <Card />
          <Card />
          <Card />
        </div>
        {/* <div className="flex justify-center items-center gap-4 w-full m-10 flex-col sm:flex-row">
                    {tripsDisplay?.map((trip, index) => {
                        return <TripDisplay
                            key={index}
                            image={trip.image}
                            title={trip.title}
                            description={trip.description}
                        />
                    })}
                </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default page