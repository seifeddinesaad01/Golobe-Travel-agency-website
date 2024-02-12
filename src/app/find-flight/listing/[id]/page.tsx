"use client"
import Header from '@/components/Header/Header'
import React from 'react'
import Logo from "../../../../../public/Logo.png";
import stayIcon from "../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../public/Home/bIcon1.png";
import locationIcon from "../../../.././../public/FindFlights/location.png"
import flyEmirates from "../../../.././../public/FindFlights/EmiratesShow.png"
import clockIcon from "../../../.././../public/FindFlights/clock.png"
import Link from 'next/link';
import Image from 'next/image';
import { trips } from '@/constants/data';
import Footer from '@/components/Footer';
import { Breadcrumb } from 'antd';
import FlighDetailsCard from '@/components/FlightDetailsCard';

const page = () => {
  return (
    <div className='flex flex-col bg-[#fafbfcff]'>
      <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
      <div className='flex justify-between p-10'>
        <div className='flex flex-col gap-2'>
          <Breadcrumb
            separator=">"
            className='text-lg'
            items={[
              {
                title: 'Home',
                href: '/home',
                className: "text-[#ff8682ff]",
              },
              {
                title: 'find-flight',
                href: '/find-flight',
                className: "text-[#ff8682ff]",
              },
              {
                title: 'flight-list',
                className: "text-[#ff8682ff]",
                href: '/listing',
              },
              {
                title: 'details',
                href: '',
              },
            ]}
          />
          <h1 className='font-bold text-xl'>Emirates A380 Airbus</h1>
          <div className='flex gap-1 justify-center items-center'>
            <Image src={locationIcon} alt="icon" />
            <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>

          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg font-semibold border-2 rounded-md border-[#8ed4bbff] px-1">4.3</span>
            <span className="text-sm text-gray-500">Very Good 54 reviews</span>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[#ff8682ff] font-bold text-xl self-end'>$240</p>
          <Link
            className='py-2 px-6 rounded-md bg-[#8ed4bbff]'
            href="">
            <button>Book now</button>
          </Link>
        </div>
      </div>
      <Image src={flyEmirates} alt="emirates" className='w-[95%] h-96 self-center' />
      <div className='flex flex-col gap-2 w-[95%] self-center mt-10'>
        <h1 className='font-bold text-xl'>Basic Economy Features</h1>
        <div className='flex gap-2 w-full'>
          {trips?.map((trip) => {
            return <Image src={trip.tripImg} alt="trip" className='w-full' />
          })}
        </div>
      </div>
      <div className='bg-[#b8e3d5ff] p-4 self-center w-[95%] mt-10 flex flex-col gap-4 rounded-lg mb-20'>
        <h1 className='font-bold text-xl'>Emirates Airlines Policies</h1>
        <div className='flex justify-between w-[70%] gap-2'>
          <div className='flex justify-start items-center gap-1'>
            <Image src={clockIcon} alt="icon" />
            <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <Image src={clockIcon} alt='icon' />
            <p>Pre-flight health screening questions.</p>
          </div>
        </div>
      </div>
      <FlighDetailsCard />
      <FlighDetailsCard />


      <Footer />
    </div>
  )
}

export default page