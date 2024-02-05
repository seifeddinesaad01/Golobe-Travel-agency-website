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
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import image1 from "../../../public/FindFlights/im5.png"
import image2 from "../../../public/FindFlights/im6.png"
import image3 from "../../../public/FindFlights/im7.png"
import image4 from "../../../public/FindFlights/im8.png"
const page = () => {
  const tabs = [
    { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
    { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
  ];
  const cards = [
    {
      title: "Melbourne",
      description: "An amazing journey",
      imageUrl: "https://i.ibb.co/qmKcJn9/Rectangle-3.png",
      price: "700"
    },
    {
      title: "Paris",
      description: "A Paris Adventure",
      imageUrl: "https://i.ibb.co/h9TfzvF/Rectangle-4.png",
      price: "600"
    },
    {
      title: "London",
      description: "London eye adventure",
      imageUrl: "https://i.ibb.co/nntGGJf/Rectangle-5.png",
      price: "350"
    },
    {
      title: "Columbia",
      description: "Amazing streets",
      imageUrl: "https://i.ibb.co/TmWKLr4/Rectangle-6.png",
      price: "700"
    },
  ];

  const images = [
    image1,
    image2,
    image3,
    image4
  ]
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

      <div className="flex justify-center items-center flex-col gap-10 mt-10 w-[85%]">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-gray-500 text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br />
            the travel tools to get you to your destination.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center w-full m-10">
          {cards.map((card) => {
            return <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              price={card.price}
            />
          })}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 mt-10 w-[85%]">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-gray-500 text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br />
            the travel tools to get you to your destination.</p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between lg:p-8 gap-4">
          <div className="bg-[#8ed4bbff] lg:flex lg:flex-col lg:justify-between lg:w-1/2  gap-8 border-solid-2 rounded-2xl  p-4">
            <div>
              <div className="mt-6 flex items-center justify-between lg:mt-0">
                <h1 className="text-3xl font-semibold  lg:text-5xl">Backpacking Sri Lanka</h1>
                <div className="text-right bg-white p-2 border-solid-2 rounded-lg">
                  <span className="block text-sm font-medium ">From</span>
                  <span className="block text-2xl font-bold ">$700</span>
                </div>
              </div>
              <p className="mt-4 ">
                Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It
                helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience
                life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
              </p>
            </div>
            <Button className="bg-white text-black">Book Flight</Button>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-0 lg:w-1/2 lg:grid-cols-2">
            {images.map((image, index) => {
              return <Image
                alt="Tea fields in Sri Lanka"
                className="rounded-lg"
                height="200"
                src={image}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            })}

          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default page