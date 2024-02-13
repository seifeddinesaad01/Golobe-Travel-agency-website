"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import Logo from "../../../../../../public/Logo.png";
import stayIcon from "../../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../../public/Home/bIcon1.png";
import FlighDetailsCard from '@/components/FlightDetailsCard';
import emirates from "../../../../../../public/FindFlights/EmiratesShow.png"
import { Divider } from 'antd';
import Image from 'next/image';
const page = () => {
    return (
        <div className='flex flex-col bg-[#fafafaff]'>
            <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
            <div className='flex gap-4 w-[90%] self-center'>
                <FlighDetailsCard />
                <div className="mt-28 w-2/3 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex justify-between items-center p-4">
                        <div className="flex">
                            <Image
                                alt="Emirates A380 Airbus"
                                className="h-24 w-24 rounded-lg"
                                height="96"
                                src={emirates}
                                style={{
                                    aspectRatio: "96/96",
                                    objectFit: "cover",
                                }}
                                width="96"
                            />
                            <div className="ml-4">
                                <p className="text-sm text-gray-500">Economy</p>
                                <h3 className="text-lg font-semibold">Emirates A380 Airbus</h3>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                        4.2
                                    </span>
                                    <span className="ml-2 text-sm text-gray-600">Very Good 54 reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <h4 className="text-lg font-semibold mb-2">Price Details</h4>
                        <div className="flex justify-between">
                            <span>Base Fare</span>
                            <span>$400</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>$400</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Taxes</span>
                            <span>$400</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Service Fee</span>
                            <span>$400</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between font-semibold mt-2">
                            <span>Total</span>
                            <span>$400</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;

function ShieldCheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
