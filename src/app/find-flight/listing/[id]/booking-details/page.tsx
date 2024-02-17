"use client"
import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import Logo from "../../../../../../public/Logo.png";
import stayIcon from "../../../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../../../public/Home/bIcon1.png";
import FlighDetailsCard from '@/components/FlightDetailsCard';
import emirates from "../../../../../../public/FindFlights/EmiratesShow.png"
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { getFlightById } from '@/Data/Fetchs';
import Link from 'next/link';
const page = () => {
    const params = useParams();
    const { id } = params;
    const { data, isPending, error } = getFlightById("http://localhost:8000/flights", id);

    return (
        <div className='flex flex-col bg-[#fafafaff]'>
            <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
            <div className='flex flex-col-reverse sm:flex-row gap-4 w-[90%] self-center mt-20 mb-20'>
                <div className='flex flex-col w-full'>
                    <FlighDetailsCard
                        departureTime={data?.departureTime}
                        arrivalTime={data?.arrivalTime}
                        image={data?.image}
                        returnDate={data?.returnDate}
                        lastingTime={data?.lastingTime}
                    />
                    <div className='w-[90%] self-center'>
                        <Link
                            className='bg-[#8ed4bbff] py-2 px-4 rounded-sm w-full'
                            href="https://buy.stripe.com/test_3cs7sv1i1fGN1dSaEE">
                            <button className='w-full'>
                                Pay now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <div className="flex justify-between items-center">
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
                            <div className="flex justify-between font-semibold mt-2">
                                <span>Total</span>
                                <span>$400</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;
