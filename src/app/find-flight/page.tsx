"use client"
import React, { useState } from 'react'
import '../(auth)/sign-in/signIn.css'
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import Logo from "../../../public/Logo.png";
import Card from './components/Card';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { FlightTab } from "@/app/home/components/FlightTab";
import { cards, images } from '@/constants/data';
import { useFetch } from '@/Data/Fetchs';
import buttonIcon from "../../../public/Home/bIcon3.png"

const page = () => {
  const backgroundImageUrl = 'url("https://i.ibb.co/PjnvH54/Frame-36-1.png")';
  useFetch("http://localhost:8000/flights");
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full overflow-hidden">
      <div style={{
        backgroundImage: backgroundImageUrl,
      }} className='bgimage1'>
        <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
        <div className="slef-center sm:self-start text-white flex flex-col justify-start items-center pl-0 sm:pl-24 gap-2 mt-4">
          <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-center sm:text-left">Make your travel <br /> whishlist, we'll do <br /> the rest</h2>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl self-center sm:self-start ">Special offers to suit your plan</h3>
        </div>
      </div>
      <div
        style={{
          marginTop: "-6rem",
          borderRadius: "16px"
        }}
        className="shadow-lg bg-white h-40vh w-5/6 self-center p-4 rounded-16 mb-2">
        <FlightTab title={true} buttonText="Show flight" icon={buttonIcon} />
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
      <div className="flex justify-center items-center flex-col gap-10 mt-10 w-[85%] pb-16 pt-8">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-black text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got
            the travel tools to get you to your <br /> destination.</p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between gap-4 flex-wrap lg:flex-nowrap">
          <div className="bg-[#8ed4bbff] lg:flex lg:flex-col lg:justify-between lg:w-1/2  border-solid-2 rounded-2xl px-8 py-5 h-full">
            <div className='flex flex-col gap-6 h-full'>
              <div className="flex items-center justify-between lg:mt-0">
                <h1 className="text-3xl font-semibold  lg:text-5xl">Backpacking Sri Lanka</h1>
                <div className="text-right bg-white p-2 border-solid-2 rounded-lg">
                  <span className="block text-sm font-medium ">From</span>
                  <span className="block text-2xl font-bold ">$700</span>
                </div>
              </div>
              <p>
                Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It
                helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience
                life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
              </p>
            </div>
            <Button className="bg-white text-black text-lg">Book Flight</Button>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-0 lg:w-1/2 lg:grid-cols-2">
            {images.map((image, index) => {
              return <Image
                key={index}
                alt="Tea fields in Sri Lanka"
                className="rounded-lg"
                // height="200"
                src={image}
                style={{
                  //  aspectRatio: "300/200",
                  objectFit: "cover",
                  width: '100%',
                }}
                width="300"
              />
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page