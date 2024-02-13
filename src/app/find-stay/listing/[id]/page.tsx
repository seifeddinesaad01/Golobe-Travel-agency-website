"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import Logo from "../../../../../public/Logo.png";
import stayIcon from "../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../public/Home/bIcon1.png";
import locationIcon from "../../../.././../public/FindFlights/location.png"
import Image from 'next/image';
import { Breadcrumb, Divider } from 'antd';
import Link from 'next/link';
import ImageGrid from '../../components/ImageGrid';
import OverviewCard from '../../components/OverviewCard';
import AvailibilityCard from '../../components/AvailibiltyCard';
import { hotelReviews, roomsAvailibilty } from '@/constants/data';
import HotelReview from '../../components/HotelReview';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div className='flex flex-col bg-[#fafbfcff]'>
      <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
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
                title: 'find-stay',
                href: '/find-stay',
                className: "text-[#ff8682ff]",
              },
              {
                title: 'stays-list',
                className: "text-[#ff8682ff]",
                href: '/listing',
              },
              {
                title: 'details',
                href: '',
              },
            ]}
          />
          <h1 className='font-bold text-3xl'>CVK Park Bosphorus Hotel Istanbul </h1>
          <div className='flex gap-1 items-center'>
            <Image src={locationIcon} alt="icon" />
            <p className='text-xl'>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg font-semibold border-2 rounded-md border-[#8ed4bbff] px-1">4.3</span>
            <span className="text-sm text-gray-500">Very Good 54 reviews</span>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[#ff8682ff] font-bold text-3xl sm:self-end mt-2 sm:mt-0 self-start'>$240</p>
          <Link
            className='py-2 px-6 rounded-md bg-[#8ed4bbff] w-32'
            href="2/booking-details">
            <button>Book now</button>
          </Link>
        </div>
      </div>
      <ImageGrid />
      <div className='w-[95%] flex flex-col self-center mt-10 gap-4'>
        <h1 className='text-2xl font-bold'>Overview</h1>
        <p className='text-[#4d594dff]'>Located in Taksim Gmsuyu, the heart of Istanbul,
          the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel,
          which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by
          assuming this hospitality mission. With its 452 luxurious rooms and suites,
          8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces
          with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest
          technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular
          attraction point of the city. Room and suite categories at various sizes with city and
          Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests
          as a wide variety of selection.</p>
        <div className='flex gap-4 flex-wrap'>
          <OverviewCard rate="4.2" grade="Very good" nbReviewers="56" />
          <OverviewCard text="Near park" />
          <OverviewCard text="Near nightlife" />
          <OverviewCard text="Near theater" />
          <OverviewCard text="Clean Hotel" />
        </div>
      </div>
      <Divider />
      <Divider />
      <div className='w-[95%] flex flex-col self-center mt-10 gap-4'>
        <h1 className='text-2xl font-bold'>Available Rooms</h1>
        <div className='flex flex-col gap-2'>
          {roomsAvailibilty.map((room) => {
            return <AvailibilityCard image={room.image} title={room.title} price={room.price} />
          })}
        </div>
      </div>
      <div className='w-[95%] flex flex-col self-center mt-10 gap-4 mb-20'>
        <h1 className='text-2xl font-bold'>Reviews</h1>
        <div className='flex flex-col gap-2'>
          {hotelReviews.map((review) => {
            return <HotelReview
              name={review.name}
              rate={review.rate}
              avatar={review.avatar}
              review={review.review}
            />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page