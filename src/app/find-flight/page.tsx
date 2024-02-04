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

const page = () => {
  const tabs = [
    { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
    { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
  ];

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full overflow-hidden">
      <div className='bgimage1'>
        <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon}/>
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


      <Footer />
    </div>
  )
}

export default page