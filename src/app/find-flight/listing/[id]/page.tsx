"use client"
import Header from '@/components/Header/Header'
import React from 'react'
import Logo from "../../../../../public/Logo.png";
import stayIcon from "../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../public/Home/bIcon1.png";
import locationIcon from "../../../.././../public/FindFlights/location.png"
import clockIcon from "../../../.././../public/FindFlights/clock.png"
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Breadcrumb } from 'antd';
import FlighDetailsCard from '@/components/FlightDetailsCard';
import { useParams } from 'next/navigation';
import { getFlightById } from '@/Data/Fetchs';
import Spinner from '@/components/Spinner/Spinner';

const page = () => {
  const params = useParams();
  const { id } = params;
  const { data, isPending, error } = getFlightById("http://localhost:8000/flights", id);

  return (
    <div className='flex flex-col bg-[#fafbfcff]'>
      <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
      {isPending
        ?
        <Spinner />
        :
        <>
          <div className='flex flex-col sm:flex-row justify-between p-5 sm:p-10'>
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
              <h1 className='font-bold text-xl'>{data?.name}</h1>
              <div className='flex gap-1 items-center'>
                <Image src={locationIcon} alt="icon" />
                <p>{data?.location}</p>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-lg font-semibold border-2 rounded-md border-[#8ed4bbff] px-1">{data?.rate}</span>
                <span className="text-sm text-gray-500">Very Good {data?.reviewsNumber} reviews</span>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-[#ff8682ff] font-bold text-xl sm:self-end mt-2 sm:mt-0 self-start'>${data?.price}</p>
              <Link
                className='py-2 px-6 rounded-md bg-[#8ed4bbff] w-32'
                href={`${id}/booking-details`}
              >
                <button>Book now</button>
              </Link>
            </div>
          </div>
          <img src={data?.bgImage} alt="emirates" className='w-[95%] h-56 sm:h-96 self-center rounded-lg' />
          <div className='flex flex-col gap-8 w-[95%] self-center mt-10'>
            <h1 className='font-bold text-xl'>Basic Economy Features</h1>
            <div className='flex flex-wrap gap-4 w-full'>
              {data?.trips?.map((trip: any) => {
                return <img src={trip} alt="trip" style={{ objectFit: 'cover' }} className='w-36' />
              })}
            </div>
          </div>
          <div className='bg-[#b8e3d5ff] p-4 self-center w-[95%] mt-10 flex flex-col gap-4 rounded-lg mb-20'>
            <h1 className='font-bold text-xl'>{data?.name} Policies</h1>
            <div className='flex justify-between flex-col sm:flex-row w-[90%] lg:w-[70%] gap-2'>
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
          {/* departureTime, arrivalTime, image, returnDate, lastingTime */}
          <FlighDetailsCard
            departureTime={data?.departureTime}
            arrivalTime={data?.arrivalTime}
            image={data?.image}
            returnDate={data?.returnDate}
            lastingTime={data?.lastingTime}
            name={data?.name}
          />
          <FlighDetailsCard
            departureTime={data?.departureTime}
            arrivalTime={data?.arrivalTime}
            image={data?.image}
            returnDate={data?.returnDate}
            lastingTime={data?.lastingTime}
            name={data?.name}
          />
        </>
      }


      <Footer />
    </div>
  )
}

export default page