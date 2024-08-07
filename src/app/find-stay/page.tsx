"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import Logo from "../../../public/Logo.png";
import Card from '../find-flight/components/Card';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { cards, images } from '@/constants/data';
import buttonIcon from "../../../public/Home/bIcon3.png"
import backgroundImage from "../../../public/FindStays/backgroundImage.png"
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full overflow-hidden">
      <div className="bgimage1" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
        <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
        <div className="self-center sm:self-start text-white flex flex-col justify-start items-center pl-0 sm:pl-24 gap-2 mt-4">
          <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-center sm:text-left">Make your travel <br /> wishlist, we'll do <br /> the rest</h2>
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl self-center sm:self-start">Special offers to suit your plan</h3>
          <Link
            className='flex justify-center items-center self-center sm:self-start gap-2 bg-[#8ed4bbff] text-black p-2 rounded-md'
            href="/find-stay/listing"
          >
            <Image src={buttonIcon} alt="icon" />
            <p>Show Stays</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 mt-10 w-[85%]">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-gray-500 text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br />
            the travel tools to get you to your destination.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center w-full m-10">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              price={card.price}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 mt-10 w-[85%] pb-16 pt-8">
        <div className="self-center sm:self-start flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">Fall into travel</h1>
          <p className="text-lg text-black text-center sm:text-left">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got
            the travel tools to get you to your <br /> destination.
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between gap-4 flex-wrap lg:flex-nowrap">
          <div className="bg-[#8ed4bbff] lg:flex lg:flex-col lg:justify-between lg:w-1/2 border-solid-2 rounded-2xl px-8 py-5 h-full">
            <div className='flex flex-col gap-6 h-full'>
              <div className="flex items-center justify-between lg:mt-0">
                <h1 className="text-3xl font-semibold lg:text-5xl">Backpacking Sri Lanka</h1>
                <div className="text-right bg-white p-2 border-solid-2 rounded-lg">
                  <span className="block text-sm font-medium">From</span>
                  <span className="block text-2xl font-bold">$700</span>
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
            {images.map((image, index) => (
              <Image
                key={index}
                alt="Tea fields in Sri Lanka"
                className="rounded-lg"
                src={image}
                style={{
                  objectFit: "cover",
                  width: '100%',
                }}
                width="300"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page;
